import { useContext } from "react";
import ThisContext from "../thisContext/context";

export function useThis(StateName, retriever = null) {
  let context = useContext(ThisContext);

  return context(StateName);
}
