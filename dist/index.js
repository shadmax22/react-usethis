import { s as i, y as u, u as c, _ as o, T as f } from "./context-BcLDXb4T.js";
import { useContext as p } from "react";
const n = (t) => typeof t == "function" ? i(t) : Array.isArray(t) ? t.map(n) : t !== null && typeof t == "object" ? Object.keys(t).reduce((r, e) => (r[e] = n(t[e]), r), {}) : t;
function h(t) {
  return u(() => n(t));
}
const l = u;
l.fun = h;
function s(t, r) {
  return c(o.dispatch, {
    type: "without_provider"
  })(t, r);
}
function m(t, r) {
  return s(t, r);
}
function x(t, r) {
  let e;
  try {
    e = p(f);
  } catch {
    e = null;
  }
  return e === null ? s(t, r) : e(t, r);
}
export {
  m as getThis,
  l as set,
  h as setFun,
  x as useThis
};
//# sourceMappingURL=index.js.map
