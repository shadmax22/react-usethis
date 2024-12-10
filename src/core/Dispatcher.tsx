import { StateHandler } from "../redux/slices/StateReducer";
import _MAINSTORE, { StoreState } from "../redux/store";
import { StateManagerType } from "../useThis/useThis";
import { replaceIdsWithFunctions } from "../utils/functionRetrieval";
import { executeEffects } from "./EffectManager";
import { Appender, StateRemover, Updater, Upsert } from "./Reducers";

export const useThisDispatcher = (StateName: string, defaultValue: any) => {
  const redux_dispatcher = _MAINSTORE.dispatch;
  const dispatcher = (param: any) => {
    executeEffects(StateName);

    return redux_dispatcher(param);
  };
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

  const useThisReturn = {
    update: Updater(
      requestedStateName,
      dispatcher
    ) as unknown as StateManagerType<StoreState["This"]>["update"],
    append: Appender(
      requestedStateName,
      dispatcher
    ) as unknown as StateManagerType<StoreState["This"]>["append"],
    upsert: Upsert(
      requestedStateName,
      dispatcher
    ) as unknown as StateManagerType<StoreState["This"]>["upsert"],
    dispatcher: dispatcher,
    This: _MAINSTORE.getState().This[requestedStateName],
    get: () =>
      _MAINSTORE.getState().This[
        requestedStateName
      ] as unknown as StateManagerType<StoreState["This"]>["get"],
    fetch: () =>
      replaceIdsWithFunctions(
        _MAINSTORE.getState().This[requestedStateName]
      ) as unknown as StateManagerType<StoreState["This"]>["fetch"],
  };

  return {
    ...useThisReturn,
    effect: StateRemover(
      requestedStateName,
      dispatcher,
      useThisReturn
    ) as unknown as StateManagerType<StoreState["This"]>["effect"],
  } as StateManagerType<StoreState["This"]>;
};
