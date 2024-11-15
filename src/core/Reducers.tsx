import { StateHandler } from "../redux/slices/StateReducer";
import _MAINSTORE, { StoreState } from "../redux/store";
import { upsert as up } from "js-upsert";
import { replaceIdsWithFunctions } from "../utils/functionRetrieval";

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
  const updater = (
    data: any,
    config?: {
      returnType?: "object" | "array";
    }
  ) => {
    try {
      const haystack = Array.isArray(_MAINSTORE?.getState()?.This[StateName])
        ? [..._MAINSTORE?.getState()?.This[StateName]]
        : { ...((_MAINSTORE?.getState()?.This[StateName] ?? {}) as object) };
      dispatcher(
        StateHandler.upsert({
          data: up(haystack, data, config ?? {}),
          active_state: StateName,
          config: config ?? {},
        })
      );
    } catch (e) {}
  };
  const upsert = (...data: any) => {
    for (let i of data) {
      updater(i);
    }
    return _MAINSTORE.getState().This[StateName];
  };

  upsert.object = (...data: any) => {
    for (let i of data) {
      updater(i, { returnType: "object" });
    }
    return _MAINSTORE.getState().This[StateName];
  };
  upsert.array = (...data: any) => {
    for (let i of data) {
      updater(i, { returnType: "array" });
    }
    return _MAINSTORE.getState().This[StateName];
  };

  return upsert;
}
