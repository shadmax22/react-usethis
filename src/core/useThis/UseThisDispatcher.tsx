import { StateHandler } from "../../shared/redux/slices/StateReducer";
import _MAINSTORE, { StoreState } from "../../shared/redux/store";
import { useThisReturnType } from "./UseThis.type";
import { executeEffects, getEffects } from "./managers/EffectManager";
import { FunctionManager } from "./managers/FunctionManager";
import { Appender, Updater, Upsert } from "./UseThisReducer";

export const useThisDispatcher = (StateName: string, defaultValue: any) => {
  const redux_dispatcher = _MAINSTORE.dispatch;
  const dispatcher = (param: any) => {
    const r = redux_dispatcher(param);

    // Execute all exisiting effects which is dependent on given state

    executeEffects(StateName);
    return r;
  };
  const requestedStateName = StateName as keyof StoreState["This"];
  const state_data = _MAINSTORE.getState()?.This;
  if (
    !state_data[requestedStateName] &&
    defaultValue &&
    !getEffects().resolved[requestedStateName]
  ) {
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
    ) as unknown as useThisReturnType<StoreState["This"]>["update"],
    append: Appender(
      requestedStateName,
      dispatcher
    ) as unknown as useThisReturnType<StoreState["This"]>["append"],
    upsert: Upsert(
      requestedStateName,
      dispatcher
    ) as unknown as useThisReturnType<StoreState["This"]>["upsert"],
    dispatcher: dispatcher,
    This: _MAINSTORE.getState().This[requestedStateName],
    get: () =>
      _MAINSTORE.getState().This[
        requestedStateName
      ] as unknown as useThisReturnType<StoreState["This"]>["get"],
    fetch: () =>
      FunctionManager.fetch(
        _MAINSTORE.getState().This[requestedStateName]
      ) as unknown as useThisReturnType<StoreState["This"]>["fetch"],
  };

  return useThisReturn as useThisReturnType<StoreState["This"]>;
};
export const useThisInstanceDispatcher = (StateName: string) => {
  const redux_dispatcher = _MAINSTORE.dispatch;
  const dispatcher = (param: any) => {
    const r = redux_dispatcher(param);

    // Execute all exisiting effects which is dependent on given state
    executeEffects(StateName);
    return r;
  };
  const requestedStateName = StateName as keyof StoreState["This"];

  const useThisReturn = {
    update: Updater(
      requestedStateName,
      dispatcher
    ) as unknown as useThisReturnType<StoreState["This"]>["update"],
    append: Appender(
      requestedStateName,
      dispatcher
    ) as unknown as useThisReturnType<StoreState["This"]>["append"],
    upsert: Upsert(
      requestedStateName,
      dispatcher
    ) as unknown as useThisReturnType<StoreState["This"]>["upsert"],
    dispatcher: dispatcher,
    This: _MAINSTORE.getState().This[requestedStateName],
    get: () =>
      _MAINSTORE.getState().This[
        requestedStateName
      ] as unknown as useThisReturnType<StoreState["This"]>["get"],
    fetch: () =>
      FunctionManager.fetch(
        _MAINSTORE.getState().This[requestedStateName]
      ) as unknown as useThisReturnType<StoreState["This"]>["fetch"],
  };

  return {
    ...useThisReturn,
  } as useThisReturnType<StoreState["This"]>;
};
