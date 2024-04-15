import { useContext as n } from "react";
import { T as u, _ as a, S as s } from "./store-uuQG19xZ.js";
import { h } from "./store-uuQG19xZ.js";
function p(e) {
  return n(u)(e);
}
function d(e, t) {
  if (((t == null ? void 0 : t.data) ?? null) === null)
    return a.getState().This[e] ?? null;
  const r = {
    update: s.update({
      data: (t == null ? void 0 : t.data) ?? {},
      state: e
    }),
    upsert: s.upsert({
      data: (t == null ? void 0 : t.data) ?? {},
      state: e
    })
  };
  return a.dispatch(r[(t == null ? void 0 : t.type) ?? "upsert"]), a.getState().This[e];
}
export {
  d as getThis,
  h as set,
  p as useThis
};
//# sourceMappingURL=index.js.map
