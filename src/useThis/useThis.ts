import { useContext } from "react";
import ThisContext from "../thisContext/context";
import { UTWP } from "../useThisWithoutProvider/UTWP";

export function useThis(StateName: string, defaultValue?: any) {
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
