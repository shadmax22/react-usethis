import { StateHandler } from "../../redux/slices/StateReducer";
import _MAINSTORE from "../../redux/store";

export function Updater(StateName: string, dispatcher: any) {
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

export function Appender(StateName: string, dispatcher: any) {
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

export function Upsert(StateName: string, dispatcher: any) {
  return function upsert(
    data: any,
    config?: {
      returnType?: "object" | "array";
    }
  ) {
    dispatcher(
      StateHandler.upsert({
        data: data,
        active_state: StateName,
        config: config ?? {},
      })
    );
    return _MAINSTORE.getState().This[StateName];
  };
}
