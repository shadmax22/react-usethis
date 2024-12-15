import { typeParam_upsert } from "js-upsert";
import { useSelector } from "react-redux";
import { useThisDispatcher } from "../core/Dispatcher";

/*

  Flow:-

    useThis -> 
      useThisDispatcher->
        Dispatcher->
          Handle Effects
          Dispatch Reducer
        Return Reducer binded with dispatcher


*/

/**
 * useThis allows you to use global state in simplified way. Just specify a state name then ready to go.
 * @param StateName
 * @param defaultValue
 * @returns
 */

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
  effect: (
    resolver: (props: { state: object; resolver: Function }) => unknown,
    dependent_states: string[]
  ) => useThisType<T>;
};

export function useThis<DefaultValue>(
  StateName: string,
  defaultValue?: DefaultValue
): useThisType<DefaultValue> {
  // let context;

  // try {
  //   context = useContext(ThisContext) as any;
  // } catch (e) {
  //   context = null;
  // }

  // if (context === null) {
  //   return UTWP(StateName, defaultValue) as any;
  // }
  try {
    useSelector((s: any) => s.This?.[StateName]);
  } catch (e) {}

  return useThisDispatcher(
    StateName,
    defaultValue
  ) as unknown as useThisType<DefaultValue>;
}
