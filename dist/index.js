import { useContext as s } from "react";
import { _ as i, a as e, T as u } from "./Dispatcher-B-TyExWu.js";
import { R as a } from "./Dispatcher-B-TyExWu.js";
function o(t, r) {
  return i(e.dispatch, e.getState())(
    t,
    r
  );
}
function h(t, r) {
  let n;
  try {
    n = s(u);
  } catch {
    n = null;
  }
  return n === null ? o(t, r) : n(t, r);
}
function p(t, r) {
  return o(t, r);
}
export {
  p as getThis,
  a as set,
  h as useThis
};
//# sourceMappingURL=index.js.map
