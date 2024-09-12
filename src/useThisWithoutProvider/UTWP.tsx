import _MAINSTORE, { StoreState } from "../redux/store";
import { useThisDispatcher } from "../core/Dispatcher";

/*
  UTWP: useThis Without Provider, It dispatches state utils without useThis Provider
*/

export function UTWP(StateName: keyof StoreState["This"], defaultValue: any) {
  return useThisDispatcher(_MAINSTORE.dispatch, _MAINSTORE.getState(), {
    type: "without_provider",
  })(StateName, defaultValue);
}
