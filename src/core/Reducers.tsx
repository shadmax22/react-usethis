import { StateHandler } from "../redux/slices/StateReducer";
import _MAINSTORE, { StoreState } from "../redux/store";
import { upsert as up } from "js-upsert";
import { replaceIdsWithFunctions } from "../utils/functionRetrieval";
import { replaceFunctionsWithIds } from "../redux/middleware/function_presever";

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
    return replaceIdsWithFunctions(_MAINSTORE.getState().This[StateName]);
  };
}

export function Appender(StateName: keyof StoreState["This"], dispatcher: any) {
  return function append(data: any) {
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

  const upsert = (...data: any) => {
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
  };
  upsert.funAt = (...keys: [...(string | number)[], void]) => {
    const haystack = Array.isArray(main_state)
      ? [...main_state]
      : { ...((main_state ?? {}) as object) };

    const value = replaceFunctionsWithIds(keys[keys.length - 1]);

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
  };

  return upsert;
}
