import { StateHandler } from "../../redux/slices/StateReducer";
import _MAINSTORE from "../../redux/store";
import { Appender, Updater, Upsert } from "./Reducers";

export const __USETHIS_DISPATCHER =
  (dispatcher: any, stateData: any) =>
  (StateName: string, defaultValue: any) => {
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
      This: stateData[StateName] ?? null,
      get: () => _MAINSTORE.getState().This[StateName],
    };
  };
