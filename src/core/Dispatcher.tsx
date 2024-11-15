import { StateHandler } from "../redux/slices/StateReducer";
import _MAINSTORE, { StoreState } from "../redux/store";
import { replaceIdsWithFunctions } from "../utils/functionRetrieval";
import { Appender, Updater, Upsert } from "./Reducers";

export const useThisDispatcher =
  (dispatcher: any, info?: { type: string }) =>
  (StateName: string, defaultValue: any) => {
    const requestedStateName = StateName as keyof StoreState["This"];
    const state_data = _MAINSTORE.getState()?.This;
    if (!state_data[requestedStateName] && defaultValue) {
      dispatcher(
        StateHandler.update({
          data: defaultValue,
          state: requestedStateName,
        })
      );
    }

    return {
      update: Updater(requestedStateName, dispatcher),
      append: Appender(requestedStateName, dispatcher),
      upsert: Upsert(requestedStateName, dispatcher),
      dispatcher: dispatcher,
      This: replaceIdsWithFunctions(state_data[requestedStateName] ?? null),
      get: () => _MAINSTORE.getState().This[requestedStateName],
      fetch: () =>
        replaceIdsWithFunctions(_MAINSTORE.getState().This[requestedStateName]),
      info,
    };
  };
