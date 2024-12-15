import { upsert as up } from "js-upsert";
import { StateHandler } from "../redux/slices/StateReducer";
import _MAINSTORE, { StoreState } from "../redux/store";
import { useThisType } from "../useThis/useThis";
import { registerEffect } from "./managers/EffectManager";
import { FunctionManager } from "./managers/FunctionManager";

/*

  These are reducers of useThis, for dispatching updating a state

*/

export function Updater(StateName: keyof StoreState["This"], dispatcher: any) {
  return function update(data: any) {
    let __DATA =
      typeof data == "function"
        ? data(_MAINSTORE.getState().This[StateName])
        : data;

    dispatcher(
      StateHandler.update({
        data: __DATA,
        state: StateName,
      })
    );
    return _MAINSTORE.getState().This[StateName];
  };
}

export function Appender(
  StateName: keyof StoreState["This"],
  dispatcher: any
): useThisType<keyof StoreState["This"]>["append"] {
  return function append(data) {
    let __DATA =
      typeof data == "function"
        ? data(_MAINSTORE.getState().This[StateName])
        : data;
    dispatcher(
      StateHandler.append({
        data: __DATA,
        state: StateName,
      })
    );
    return _MAINSTORE.getState().This[StateName];
  };
}

export function Upsert(StateName: keyof StoreState["This"], dispatcher: any) {
  const main_state = _MAINSTORE?.getState()?.This[StateName];

  function updater(data: any) {
    try {
      const haystack = Array.isArray(main_state)
        ? [...main_state]
        : { ...((main_state ?? {}) as object) };
      dispatcher(
        StateHandler.upsert({
          data: up(haystack, data),
          active_state: StateName,
          config: {},
        })
      );
    } catch (e) {}
  }

  const upsert = (
    ...data: any
  ): useThisType<keyof StoreState["This"]>["upsert"] => {
    for (let i of data) {
      updater(i);
    }
    return _MAINSTORE.getState().This[StateName];
  };

  upsert.at = (...keys: [...(string | number)[], unknown]) => {
    const haystack = Array.isArray(main_state)
      ? [...main_state]
      : { ...((main_state ?? {}) as object) };

    dispatcher(
      StateHandler.upsert({
        data: up(haystack).at(...keys),
        active_state: StateName,
        config: {},
      })
    );
    return _MAINSTORE.getState().This[StateName];
  };
  upsert.funAt = (...keys: [...(string | number)[], void]) => {
    const haystack = Array.isArray(main_state)
      ? [...main_state]
      : { ...((main_state ?? {}) as object) };

    const value = FunctionManager.store(keys[keys.length - 1]);

    keys.pop();

    const new_at_path = [...keys, value];
    dispatcher(
      StateHandler.upsert({
        data: up(haystack).at(
          ...(new_at_path as [...(string | number)[], void])
        ),
        active_state: StateName,
        config: {},
      })
    );
    return _MAINSTORE.getState().This[StateName];
  };

  return upsert;
}

// EffectReducer is getting dispatched here
export function EffectReducer(
  StateName: keyof StoreState["This"],
  dispatcher: any,
  useThisReturn: any
): useThisType<keyof StoreState["This"]>["effect"] {
  const requestedStateName = StateName as keyof StoreState["This"];

  // usersEffectFun & dependent_states will be provided by user
  return (usersEffectFun, dependent_states) => {
    registerEffect({
      state_name: requestedStateName,
      dependent_state_names: dependent_states ?? [],

      // Effect is stored in effect_collection.effects.{process_id}

      effect: (effectResolver: Function) =>
        usersEffectFun({
          state: _MAINSTORE.getState().This,
          resolver: () => {
            dispatcher(
              StateHandler.removeState({
                active_state: StateName,
              })
            );
            effectResolver();
          },
        }),
    });

    return useThisReturn;
  };
}
