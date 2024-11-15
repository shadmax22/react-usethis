import _MAINSTORE from "../redux/store";
import { useThisDispatcher } from "../core/Dispatcher";

/*
  UTWP: useThis Without Provider, It dispatches state utils without useThis Provider
*/

export function UTWP(StateName: string, defaultValue: any) {
  return useThisDispatcher(_MAINSTORE.dispatch, {
    type: "without_provider",
  })(StateName, defaultValue);
}
