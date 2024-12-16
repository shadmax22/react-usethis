import { typeParam_upsert } from "js-upsert";
import { useSelector } from "react-redux";
import {
  useThisDispatcher,
  useThisInstanceDispatcher,
} from "../core/Dispatcher";
import _MAINSTORE from "../redux/store";
import { StateHandler } from "../redux/slices/StateReducer";
import { registerEffect } from "../core/managers/EffectManager";

/*

  Flow:-

    useThis -> 
      useThisDispatcher->
        Dispatcher->
          Handle Effects
          Dispatch Reducer
        Return Reducer binded with dispatcher


*/

export type useThis_this_instance = {
  stateName: string;
  config: {
    effect?: {
      resolver: (props: { state: object; resolver: Function }) => unknown;
      dependent_states: string[];
    };
  };
};

export type useThis_Instance<DefaultValue> = {
  (): useThisType<DefaultValue>;

  on: {
    effect: (
      resolver: (props: { state: object; resolver: Function }) => unknown,
      dependent_states: (string | useThis_Instance<any>)[]
    ) => boolean;
  };
  stateName: string;
};

export type useThis = {
  <DefaultValue>(
    StateName: string,
    defaultValue?: DefaultValue
  ): useThisType<DefaultValue>;
  new <DefaultValue extends object>(
    defaultValue?: DefaultValue
  ): useThis_Instance<DefaultValue>;
};

export type useThisType<T> = {
  get: () => T;
  update: (newState: ((previos_state: T) => T) | T) => T;
  append: (newState: ((previos_state: T) => Partial<T>) | Partial<T>) => T;
  upsert: {
    (...partialState: typeParam_upsert<T>[]): T;
    at: (...keys: [...(string | number)[], unknown]) => T;
    funAt: (...keys: [...(string | number)[], Function]) => T;
  };
  fetch: () => T;
};

export type useThisInstanceType<T> = useThisType<T> & {
  effect: (
    resolver: (props: { state: object; resolver: Function }) => unknown,
    dependent_states: string[]
  ) => useThisType<T>;
};

function useThisMainFunction<DefaultValue>(
  StateName: string,
  defaultValue?: DefaultValue
): useThisType<DefaultValue> {
  try {
    useSelector((s: any) => s.This?.[StateName]);
  } catch (e) {}

  return useThisDispatcher(
    StateName,
    defaultValue
  ) as unknown as useThisType<DefaultValue>;
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

function useThisBuilder(prop1: unknown, prop2: unknown) {
  // Handling new Instance
  if (new.target) {
    const instance: useThis_this_instance = {
      config: {},
      stateName: "state_" + Math.floor(100000 + Math.random() * 900000),
    };

    if (prop1 && typeof prop1 == "object") {
      _MAINSTORE.dispatch(
        StateHandler.update({
          data: prop1,
          state: instance.stateName,
        })
      );
    }

    const return_fun = () => useThisInstanceFunction(instance.stateName);

    return_fun.on = {
      effect: (resolver: any, dependent_states: any) => {
        registerEffect({
          state_name: instance.stateName,
          dependent_state_names: dependent_states ?? [],

          // Effect is stored in effect_collection.effects.{process_id}

          effect: (effectResolver: Function) =>
            resolver({
              state: _MAINSTORE.getState().This,
              resolver: () => {
                _MAINSTORE.dispatch(
                  StateHandler.removeState({
                    active_state: instance.stateName,
                  })
                );
                effectResolver();
              },
            }),
        });

        return true;
      },
    };

    return_fun["@___usethis"] = "v2";
    return_fun["stateName"] = instance.stateName;
    return return_fun;
  }

  return useThisMainFunction(prop1 as string, prop2);
}

export const useThis: useThis = useThisBuilder as unknown as useThis;
