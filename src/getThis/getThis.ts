import _MAINSTORE from "../redux/store";
import { UTWP } from "../useThisWithoutProvider/UTWP";

export function getThis(StateName: string, defaultValue?: any) {
  return UTWP(StateName, defaultValue);
}
