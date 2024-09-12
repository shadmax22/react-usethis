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
    dispatcher(
      StateHandler.update({
        data: data,
        state: StateName,
      })
    );
    return _MAINSTORE.getState().This[StateName];
  };
}

export function Upsert(StateName: keyof StoreState["This"], dispatcher: any) {
  return function upsert(
    data: any,
    config?: {
      returnType?: "object" | "array";
    }
  ) {
    try {
      dispatcher(
        StateHandler.upsert({
          data: up(
            structuredClone(_MAINSTORE?.getState()?.This[StateName] ?? {}),
            data,
            config ?? {}
          ),
          active_state: StateName,
          config: config ?? {},
        })
      );
    } catch (e) {}
    return _MAINSTORE.getState().This[StateName];
  };
}
