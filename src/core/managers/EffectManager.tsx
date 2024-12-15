/*


  useThis-Effect

  Idea: Execute a function on change of state

  Initialization Flow:-

  1. UseThis Dispatcher providing a reducer `EffectReducer` to useThis
  2. On Initialisation of useThis(state_name) having a effect(effect_fun, dependent_state), effect is getting registered at a `effect_collection` 
  

  Working Flow:-

  All state dispatchers are having hook `executeEffects` to execute effect which is having dependency of current state. 


*/
const effect_collection: {
  dependent_state: {
    [state_id: string]: number[];
  };
  effects: {
    [process_id: number]: Function;
  };
  registeredStates: { [state_name: string]: number };
  registeredProcess: { [process_id: number]: string };
  resolved: { [state_name: string]: boolean };
} = {
  dependent_state: {},
  effects: {},
  registeredStates: {},
  resolved: {},
  registeredProcess: {},
};

/**
 *
 * @param props
 * @param props.state_name State name which is dispatching a effect fn
 * @param props.dependent_state_names Names of state which will execute effect fn on change
 * @param props.effect Effect Fn provided by user
 * @returns
 */

export function registerEffect(props: {
  state_name: string;
  effect: Function;
  dependent_state_names: string[];
}) {
  const { state_name, effect, dependent_state_names } = props;

  if (
    !Array.isArray(dependent_state_names) ||
    dependent_state_names.length === 0
  )
    throw TypeError(
      "Second parameter of effect `dependent_states` must be a non-empty array."
    );

  // Check if state is already registered its effect or not

  if (effect_collection.registeredStates?.[state_name]) return;

  // Register a statename, to prevent re-rendering on next load

  const process_id = Math.floor(100000 + Math.random() * 900000);

  // Register proccess and state
  effect_collection.registeredStates[state_name] = process_id;
  effect_collection.registeredProcess[process_id] = state_name;

  // Iterate `dependent_state_names` and execute effects of each states

  for (const dependent_state of dependent_state_names) {
    // Verifing If dependent state registerd in collection or not, And appending new process_id to dependent_state
    if (effect_collection.dependent_state?.[dependent_state]) {
      effect_collection.dependent_state[dependent_state] = [
        ...effect_collection.dependent_state[dependent_state],
        process_id,
      ];
    } else {
      effect_collection.dependent_state[dependent_state] = [process_id];
    }

    // Storing effect fun in effects collection via process_id

    effect_collection.effects[process_id] = effect;
  }
  console.log(effect_collection);
}

/*
  ExecuteEffects is a dispatch hook, whenver dispatch fired, executeEffects fired after it.
  It re-executes fired-state's all assigned processes
*/
export function executeEffects(state_name: string) {
  // Check if state is having any assigned effects or not

  if (effect_collection.dependent_state?.[state_name]) {
    // Execute all assigned process
    for (const process_id of effect_collection.dependent_state[state_name]) {
      try {
        //  Executing the process function associated with process_id and passing resolveEffect
        effect_collection.effects[process_id](() =>
          resolveEffect({ dependent_state_name: state_name, process_id })
        );
      } catch (e) {
        // Handle the error
      }
    }
  }
}
export function resolveEffect(props: {
  dependent_state_name: string;
  process_id: number;
}) {
  const { dependent_state_name, process_id: proccess_id } = props;
  effect_collection.dependent_state[dependent_state_name] =
    effect_collection.dependent_state[dependent_state_name].filter(
      (item) => item !== proccess_id
    );

  delete effect_collection.effects[proccess_id];

  effect_collection.resolved[effect_collection.registeredProcess[proccess_id]] =
    true;
}

export function getEffects() {
  return effect_collection;
}
