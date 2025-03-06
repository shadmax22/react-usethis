import { useThis_Instance } from "../../useThis/useThisTypes";

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
    [state_id: string]: string[];
  };
  effects: {
    [process_id: string]: Function;
  };
  registeredStates: { [state_name: string]: boolean };
  registeredProcess: { [process_id: number]: string };
  resolved: { [state_name: string]: boolean };
  registeredDependency: { [state_name: string]: string[] };
} = {
  dependent_state: {},
  effects: {},
  registeredStates: {},
  resolved: {},
  registeredProcess: {},
  registeredDependency: {},
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
  dependent_state_names: (string | useThis_Instance<unknown>)[];
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

  const process_id = state_name;

  // Register proccess and state
  effect_collection.registeredStates[state_name] = true;

  // Iterate `dependent_state_names` and execute effects of each states

  for (let dependent_state of dependent_state_names) {
    if (
      typeof dependent_state == "function" &&
      //@ts-ignore
      dependent_state?.["@___usethis"] &&
      dependent_state?.["this"]
    ) {
      dependent_state = dependent_state["this"];
    }
    if (typeof dependent_state === "string") {
      // Verifing If dependent state registerd in collection or not, And appending new process_id to dependent_state

      if (effect_collection.dependent_state?.[dependent_state]) {
        effect_collection.dependent_state[dependent_state] = [
          ...effect_collection.dependent_state[dependent_state],
          process_id,
        ];
      } else {
        effect_collection.dependent_state[dependent_state] = [process_id];
      }

      // Store decoded dependent state
      effect_collection.registeredDependency[state_name] = [
        ...(effect_collection.registeredDependency[state_name] ?? []),
        dependent_state,
      ];
    } else {
      throw TypeError(
        "Invalid type passed on `dependent_states`, Only string and useThis instance supported "
      );
    }

    // Storing effect fun in effects collection via process_id

    effect_collection.effects[process_id] = effect;
  }

  // effect(() => deleteEffect({ state_name }));
  // console.log(effect_collection);
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
          resolveEffect({
            dependent_state_name: state_name, // State which is dependent to process_id
            state_name: process_id,
          })
        );
      } catch (e) {
        // Handle the error
      }
    }
  }
}
export function resolveEffect(props: {
  dependent_state_name: string;
  state_name: string;
}) {
  const { dependent_state_name, state_name } = props;
  effect_collection.dependent_state[dependent_state_name] =
    effect_collection.dependent_state[dependent_state_name].filter(
      (item) => item !== state_name
    );

  delete effect_collection.effects[state_name];

  effect_collection.resolved[state_name] = true;
}
export function deleteEffect(props: { state_name: string }) {
  let { state_name } = props;

  // Iterate all registered process and remove states from dependency
  for (let dependent_state of effect_collection.registeredDependency[
    state_name
  ]) {
    effect_collection.dependent_state[dependent_state] =
      effect_collection.dependent_state[dependent_state].filter(
        (state) => state !== state_name
      );
  }
  delete effect_collection.effects[state_name];
  effect_collection.resolved[state_name] = true;
}

export function getEffects() {
  return effect_collection;
}
