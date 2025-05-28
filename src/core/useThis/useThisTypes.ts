/*

  Flow:-

    useThis ->
      useThisDispatcher->
        Dispatcher->
          Handle Effects
          Dispatch Reducer
        Return Reducer binded with dispatcher


*/

import { set } from "../setter/set";

type GetType<Value> = Value extends string
  ? string
  : Value extends number
  ? number
  : Value extends boolean
  ? boolean
  : Value extends Array<any>
  ? GetType<Value[number]>[]
  : Value extends object
  ? {
      [Key in keyof Value]: GetType<Value[Key]>;
    }
  : "unknown";
type InternalHookReturns<T> = T extends object
  ?
      | { [K in keyof T]: InternalHookReturns<T[K]> }
      | ReturnType<typeof set<GetType<T>>>
  : ReturnType<typeof set<GetType<T>>>;
type typeParam_upsert<H> = InternalHookReturns<H>;

export type useThis_this_instance = {
  created: boolean;
  stateName: string;
  onEffect?: {
    resolver: Function;
    dependent_states: (string | useThis_Instance<any>)[];
  };
  defaultData?: unknown;
};

export type useThis_instance_runnable<DefaultValue> = {
  (): useThisReturnType<DefaultValue>;
  this: string;
  type: DefaultValue;
  use: useThisReturnType<DefaultValue>;
};
export type useThis_Instance<DefaultValue> = {
  onEffect: (
    resolver: (props: {
      state: <K extends { this: string; type: unknown }>(
        state_instance: K
      ) => K["type"];
      resolver: Function;
    }) => unknown,
    dependent_states: (string | useThis_instance_runnable<any>)[]
  ) => useThis_Instance<DefaultValue>;
  setConfig: (
    config_name: keyof useThis_this_instance,
    value: string
  ) => useThis_Instance<DefaultValue>;
  stateName: (state_name: string) => useThis_Instance<DefaultValue>;
  default: <T extends Object>(object: T) => useThis_Instance<T>;
  create: () => useThis_instance_runnable<DefaultValue>;
};
export type useThisType = {
  <DefaultValue>(
    StateName: string,
    defaultValue?: DefaultValue
  ): useThisReturnType<DefaultValue>;
  new <DefaultValue extends object>(
    defaultValue?: DefaultValue
  ): useThis_Instance<DefaultValue>;
};

export type useThisReturnType<T> = {
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
export type useThisInstanceType<T> = useThisReturnType<T> & {
  effect: (
    resolver: (props: {
      state: () => object;
      thisState: object;
      resolver: Function;
    }) => unknown,
    dependent_states: string[]
  ) => useThisReturnType<T>;
};
