import { useSelector } from "react-redux";
import { useThisDispatcher, useThisInstanceDispatcher } from "../Dispatcher";
import { registerEffect } from "../managers/EffectManager";
import { StateHandler } from "../../redux/slices/StateReducer";
import _MAINSTORE, { StoreState } from "../../redux/store";
import {
  useThis_this_instance,
  useThisInstanceType,
  useThisReturnType,
} from "./useThisTypes";
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
      throw Error("Cannot use useThis Instance without created");
    }

    return useThisInstanceFunction<T>(instance_data.stateName);
  };

  useThisInstance["@___usethis"] = __APP_VERSION__;
  useThisInstance["this"] = instance_data.stateName;

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

  useThisInstance.use = {};

  useThisInstance.create = () => {
    if (instance_data.created) return;
    useThisInstance["this"] = instance_data.stateName;

    if (instance_data.defaultData) {
      _MAINSTORE.dispatch(
        StateHandler.update({
          data: instance_data.defaultData,
          state: instance_data.stateName,
        })
      );
    }

    if (instance_data.onEffect) {
      registerEffect({
        state_name: instance_data.stateName,
        dependent_state_names: instance_data.onEffect.dependent_states ?? [],

        // Effect is stored in effect_collection.effects.{process_id}, This will execute on effect condtion

        effect: (effectResolver: Function) =>
          instance_data.onEffect?.resolver({
            thisState: _MAINSTORE.getState().This,
            state: (
              state_name:
                | keyof StoreState["This"]
                | (Function & {
                    this: keyof StoreState["This"];
                    "@___usethis": unknown;
                  })
            ) => {
              if (typeof state_name == "function" && state_name["@___usethis"])
                return _MAINSTORE.getState().This[state_name.this];
              return _MAINSTORE.getState().This[
                state_name as keyof StoreState["This"]
              ];
            },
            resolver: () => {
              _MAINSTORE.dispatch(
                StateHandler.removeState({
                  active_state: instance_data.stateName,
                })
              );
              effectResolver();

              // instance_data.created = false;
            },
          }),
      });
    }

    instance_data.created = true;

    useThisInstance.use = {
      ...(useThisDispatcher(
        instance_data["stateName"],
        instance_data["defaultData"]
      ) as unknown as useThisReturnType<(typeof instance_data)["defaultData"]>),
    } as any;

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
