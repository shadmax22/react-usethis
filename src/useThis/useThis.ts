import { useContext } from "react";
import ThisContext from "../thisContext/context";
import { UTWP } from "../useThisWithoutProvider/UTWP";
import { typeParam_upsert } from "js-upsert";
import { useSelector } from "react-redux";
/**
 * useThis allows you to use global state in simplified way. Just specify a state name then ready to go.
 * @param StateName
 * @param defaultValue
 * @returns
 */

type StateManager<T> = {
  get: () => T;
  update: (newState: ((previos_state: T) => T) | T) => T;
  append: (newState: ((previos_state: T) => Partial<T>) | Partial<T>) => T;
  upsert: {
    (...partialState: typeParam_upsert<T>[]): T, 
    at: (...keys: (string|number)[])=> T, 
    funAt: (...keys: [...(string|number)[], Function])=> T};
  fetch: () => T;
};

export function useThis<DefaultValue>(
  StateName: string,
  defaultValue?: DefaultValue
): StateManager<DefaultValue> {
  let context;

  try {
    context = useContext(ThisContext) as any;
  } catch (e) {
    context = null;
  }

  if (context === null) {
    return UTWP(StateName, defaultValue) as any;
  }
  useSelector((s: any) => s.This?.[StateName]);

  return context(StateName, defaultValue);
}
