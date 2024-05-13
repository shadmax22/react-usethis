import { useContext } from "react";
import ThisContext from "../thisContext/context";

export function useThis(StateName: string, defaultValue?: any) {
  let context = useContext(ThisContext) as any;

  return context(StateName, defaultValue);
}
