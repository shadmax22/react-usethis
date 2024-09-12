import { StateHandler } from "../redux/slices/StateReducer";
import _MAINSTORE, { StoreState } from "../redux/store";
import { replaceIdsWithFunctions } from "../utils/functionRetrieval";
import { Appender, Updater, Upsert } from "./Reducers";

export const useThisDispatcher =
  (dispatcher: any, stateData: any, info?: { type: string }) =>
  (StateName: keyof StoreState["This"], defaultValue: any) => {
    if (!stateData[StateName] && defaultValue) {
      dispatcher(
        StateHandler.update({
          data: defaultValue,
          state: StateName,
        })
      );
    }

    return {
      update: Updater(StateName, dispatcher),
      append: Appender(StateName, dispatcher),
      upsert: Upsert(StateName, dispatcher),
      dispatcher: dispatcher,
      This: replaceIdsWithFunctions(stateData[StateName] ?? null),
      get: () => _MAINSTORE.getState().This[StateName],
      fetch: () =>
        replaceIdsWithFunctions(_MAINSTORE.getState().This[StateName]),
      info,
    };
  };
