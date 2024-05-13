import { useContext as r } from "react";
import { T as o, _ as a, S as n } from "./store-DeN8Hqbh.js";
import { p as l } from "./store-DeN8Hqbh.js";
function p(e, t) {
  return r(o)(e, t);
}
function c(e, t) {
  if (((t == null ? void 0 : t.data) ?? null) === null)
    return a.getState().This[e] ?? null;
  const s = {
    update: n.update({
      data: (t == null ? void 0 : t.data) ?? {},
      state: e
    }),
    upsert: n.upsert({
      data: (t == null ? void 0 : t.data) ?? {},
      active_state: e,
      config: t == null ? void 0 : t.config
    })
  };
  return a.dispatch(s[(t == null ? void 0 : t.type) ?? "upsert"]), a.getState().This[e];
}
export {
  c as getThis,
  l as set,
  p as useThis
};
//# sourceMappingURL=index.js.map
