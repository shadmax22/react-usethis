import { StateHandler } from "../redux/slices/StateReducer";
import _MAINSTORE from "../redux/store";

export function getThis(
  STATE_NAME: string,
  NEW_DATA?: { data?: any; type?: "update" | "upsert"; config?: any }
) {
  if ((NEW_DATA?.data ?? null) === null)
    return _MAINSTORE.getState().This[STATE_NAME] ?? null;

  const Reducers = {
    update: StateHandler.update({
      data: NEW_DATA?.data ?? {},
      state: STATE_NAME,
    }),
    upsert: StateHandler.upsert({
      data: NEW_DATA?.data ?? {},
      active_state: STATE_NAME,
      config: NEW_DATA?.config,
    }),
  };

  _MAINSTORE.dispatch(Reducers[NEW_DATA?.type ?? "upsert"]);
  return _MAINSTORE.getState().This[STATE_NAME];
}
