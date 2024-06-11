import { useContext as s } from "react";
import { _ as u, a as n, T as i, S as r } from "./Dispatcher-Bt6XnKOw.js";
import { R as x } from "./Dispatcher-Bt6XnKOw.js";
function o(e, t) {
  return u(n.dispatch, n.getState())(
    e,
    t
  );
}
function l(e, t) {
  let a;
  try {
    a = s(i);
  } catch {
    a = null;
  }
  return a === null ? o(e, t) : a(e, t);
}
function f(e, t) {
  if (((t == null ? void 0 : t.data) ?? null) === null)
    return n.getState().This[e] ?? null;
  const a = {
    update: r.update({
      data: (t == null ? void 0 : t.data) ?? {},
      state: e
    }),
    upsert: r.upsert({
      data: (t == null ? void 0 : t.data) ?? {},
      active_state: e,
      config: t == null ? void 0 : t.config
    })
  };
  return n.dispatch(a[(t == null ? void 0 : t.type) ?? "upsert"]), n.getState().This[e];
}
export {
  f as getThis,
  x as set,
  l as useThis
};
//# sourceMappingURL=index.js.map
