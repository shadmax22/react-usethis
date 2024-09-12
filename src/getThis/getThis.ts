import _MAINSTORE, { StoreState } from "../redux/store";
import { UTWP } from "../useThisWithoutProvider/UTWP";

export function getThis(
  StateName: keyof StoreState["This"],
  defaultValue?: any
) {
  return UTWP(StateName, defaultValue);
}
