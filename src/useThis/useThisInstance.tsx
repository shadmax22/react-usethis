import { useSelector } from "react-redux";
import { useThisInstanceDispatcher } from "../core/Dispatcher";
import { StateHandler } from "../redux/slices/StateReducer";
import _MAINSTORE from "../redux/store";
import { useThis_this_instance, useThisInstanceType } from "./useThisTypes";
import { executeEffects, registerEffect } from "../core/managers/EffectManager";
export function useThisInstanceReturn(prop1: unknown) {
  const instance_data: useThis_this_instance = {
    created: false,
    stateName: "state_" + Math.floor(100000 + Math.random() * 900000),
  };

  if (prop1 && typeof prop1 == "object") {
    instance_data.defaultData = prop1;
  }

  const useThisInstance = <T,>() => {
    if (!instance_data.created) {
      throw Error("Cannot access useThis Instance without created");
    }

    return useThisInstanceFunction<T>(instance_data.stateName);
  };

  useThisInstance.onEffect = (resolver: any, dependent_states: any) => {
    instance_data["onEffect"] = {
      resolver,
      dependent_states,
    };

    return useThisInstance;
  };
  useThisInstance.stateName = (state_name: string) => {
    instance_data["stateName"] = state_name;

    return useThisInstance;
  };
  useThisInstance.default = <T extends object>(object: T) => {
    instance_data["defaultData"] = object;

    return useThisInstance as () => ReturnType<
      typeof useThisInstanceFunction<T>
    >;
  };

  useThisInstance.setConfig = <T extends keyof useThis_this_instance>(
    config_name: T,
    value: useThis_this_instance[T]
  ) => {
    instance_data[config_name] = value;
    return useThisInstance;
  };

  useThisInstance["@___usethis"] = __APP_VERSION__;
  useThisInstance["this"] = instance_data.stateName;

  useThisInstance.create = () => {
    if (instance_data.onEffect) {
      registerEffect({
        state_name: instance_data.stateName,
        dependent_state_names: instance_data.onEffect.dependent_states ?? [],

        // Effect is stored in effect_collection.effects.{process_id}

        effect: (effectResolver: Function) =>
          instance_data.onEffect?.resolver({
            state: _MAINSTORE.getState().This,
            resolver: () => {
              _MAINSTORE.dispatch(
                StateHandler.removeState({
                  active_state: instance_data.stateName,
                })
              );
              effectResolver();
            },
          }),
      });
    }

    if (instance_data.defaultData) {
      _MAINSTORE.dispatch(
        StateHandler.update({
          data: instance_data.defaultData,
          state: instance_data.stateName,
        })
      );
    }
    instance_data.created = true;

    return useThisInstance;
  };
  return useThisInstance;
}

function useThisInstanceFunction<DefaultValue>(
  StateName: string
): useThisInstanceType<DefaultValue> {
  try {
    useSelector((s: any) => s.This?.[StateName]);
  } catch (e) {}

  return useThisInstanceDispatcher(
    StateName
  ) as unknown as useThisInstanceType<DefaultValue>;
}
