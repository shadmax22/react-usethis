import { StateHandler } from "../../redux/slices/StateReducer";
import _MAINSTORE from "../../redux/store";

export function Updater(StateName: string, dispatcher: any) {
  return function update(data: any) {
    dispatcher(
      StateHandler.update({
        data: data,
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
  return function upsert(data: any) {
    dispatcher(
      StateHandler.upsert({
        data: data,
        active_state: StateName,
      })
    );
    return _MAINSTORE.getState().This[StateName];
  };
}
