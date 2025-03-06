import { upsert as up } from "js-upsert";
import { StateHandler } from "../redux/slices/StateReducer";
import _MAINSTORE, { StoreState } from "../redux/store";
import { useThisReturnType } from "../useThis/useThisTypes";
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
): useThisReturnType<keyof StoreState["This"]>["append"] {
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
      dispatcher(
        StateHandler.upsert({
          data,
          type: "general",
          active_state: StateName,
          config: {},
        })
      );
    } catch (e) {
      console.log(e);
    }
  }

  const upsert = (
    ...data: any
  ): useThisReturnType<keyof StoreState["This"]>["upsert"] => {
    for (let i of data) {
      updater(i);
    }
    return _MAINSTORE.getState().This[StateName];
  };

  upsert.at = (...keys: [...(string | number)[], unknown]) => {
    dispatcher(
      StateHandler.upsert({
        data: keys,
        active_state: StateName,
        config: {},
        type: "at",
      })
    );
    return _MAINSTORE.getState().This[StateName];
  };
  upsert.funAt = (...keys: [...(string | number)[], void]) => {
    const value = FunctionManager.store(keys[keys.length - 1]);

    keys.pop();

    const new_at_path = [...keys, value];
    dispatcher(
      StateHandler.upsert({
        data: new_at_path,
        active_state: StateName,
        config: {},
        type: "at",
      })
    );
    return _MAINSTORE.getState().This[StateName];
  };

  return upsert;
}
