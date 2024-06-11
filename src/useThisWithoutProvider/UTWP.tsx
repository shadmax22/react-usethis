import _MAINSTORE from "../redux/store";
import { __USETHIS_DISPATCHER } from "../setter/utils/Dispatcher";

export function UTWP(StateName: string, defaultValue: any) {
  return __USETHIS_DISPATCHER(_MAINSTORE.dispatch, _MAINSTORE.getState())(
    StateName,
    defaultValue
  );
}
