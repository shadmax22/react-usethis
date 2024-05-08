import { useContext as r } from "react";
import { T as o, _ as a, S as s } from "./store-CApjbA-f.js";
import { h as l } from "./store-CApjbA-f.js";
function p(e) {
  return r(o)(e);
}
function c(e, t) {
  if (((t == null ? void 0 : t.data) ?? null) === null)
    return a.getState().This[e] ?? null;
  const n = {
    update: s.update({
      data: (t == null ? void 0 : t.data) ?? {},
      state: e
    }),
    upsert: s.upsert({
      data: (t == null ? void 0 : t.data) ?? {},
      active_state: e,
      config: t == null ? void 0 : t.config
    })
  };
  return a.dispatch(n[(t == null ? void 0 : t.type) ?? "upsert"]), a.getState().This[e];
}
export {
  c as getThis,
  l as set,
  p as useThis
};
//# sourceMappingURL=index.js.map
