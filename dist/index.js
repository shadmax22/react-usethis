import { useContext as u } from "react";
import { _ as s, a as o, T as c, r as p } from "./Dispatcher-vax56yhO.js";
import { R as x } from "./Dispatcher-vax56yhO.js";
function i(t, n) {
  return s(o.dispatch, o.getState(), {
    type: "without_provider"
  })(t, n);
}
function h(t, n) {
  let r;
  try {
    r = u(c);
  } catch {
    r = null;
  }
  return r === null ? i(t, n) : r(t, n);
}
function _(t, n) {
  return i(t, n);
}
function a(t) {
  return t.replace(/[\[\]'"]/g, "").split(".");
}
function T(t, n = null) {
  let r = Math.floor(Math.random() * 100), e = typeof n == "string" ? a(n) : n;
  return {
    ["$$@@@@__upsert_hook_" + r]: {
      value: p(t),
      index: e,
      isFunction: typeof t == "function",
      valueType: "function"
    }
  };
}
export {
  _ as getThis,
  x as set,
  T as setFun,
  h as useThis
};
//# sourceMappingURL=index.js.map
