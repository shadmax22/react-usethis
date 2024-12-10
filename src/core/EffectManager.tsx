let effect_collection: {
  dependent_state: {
    [state_id: string]: number[];
  };
  effects: {
    [process_id: number]: Function;
  };
  registered: string[];
} = {
  dependent_state: {},
  effects: {},
  registered: [],
};

export function registerEffect(props: {
  state_name: string;
  effect: Function;
  dependent_state_names: string[];
}) {
  const { state_name, effect, dependent_state_names } = props;

  // Check if state is already registered it effect or not

  if (effect_collection.registered?.includes(state_name)) return;

  // Register a statename, to prevent re-rendering on next load
  effect_collection.registered = [...effect_collection.registered, state_name];

  const process_id = Math.floor(100000 + Math.random() * 900000);

  for (const dependent_state of dependent_state_names) {
    if (effect_collection.dependent_state?.[dependent_state]) {
      effect_collection.dependent_state[dependent_state] = [
        ...effect_collection.dependent_state[dependent_state],
        process_id,
      ];
    } else {
      effect_collection.dependent_state[dependent_state] = [process_id];
    }
    effect_collection.effects[process_id] = effect;
  }
  console.log(effect_collection);
}

export function executeEffects(state_name: string) {
  // Check if effects exists or not
  if (effect_collection.dependent_state?.[state_name]) {
    for (const process_id of effect_collection.dependent_state[state_name]) {
      try {
        effect_collection.effects[process_id]();
      } catch (e) {
        // Handle the error
      }
    }
  }
}
export function resolveEffect(props: {
  state_name: string;
  proccess_id: number;
}) {
  const { state_name, proccess_id } = props;
  effect_collection.dependent_state[state_name] =
    effect_collection.dependent_state[state_name].filter(
      (item) => item !== proccess_id
    );

  delete effect_collection.effects[proccess_id];

  // Swa
}
export function getEffects() {}
