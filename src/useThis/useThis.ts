import { useContext } from "react";
import ThisContext from "../thisContext/context";
import { UTWP } from "../useThisWithoutProvider/UTWP";
import { StoreState } from "../redux/store";
/**
 * useThis allows you to use global state in simplified way. Just specify a state name then ready to go.
 * @param StateName
 * @param defaultValue
 * @returns
 */
export function useThis(
  StateName: keyof StoreState["This"],
  defaultValue?: any
) {
  let context;
  try {
    context = useContext(ThisContext) as any;
  } catch (e) {
    context = null;
  }

  if (context === null) {
    return UTWP(StateName, defaultValue);
  }
  return context(StateName, defaultValue);
}
