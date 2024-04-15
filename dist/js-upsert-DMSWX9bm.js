import { createContext as h } from "react";
const b = h({});
function j(t, n = null) {
  return {
    ["$$@@@@__upsert_hook_" + Math.floor(Math.random() * 100)]: {
      value: t,
      index: n,
      isFunction: typeof t == "function"
    }
  };
}
function c({ obj: t }, n, o = [], r = !1) {
  let e = [];
  for (let u in t) {
    let i = t[u];
    if (u.includes(n) && (i ?? !1))
      e.push({
        index: [...o, ...i.index ?? []],
        value: i.value,
        isFunction: i.isFunction
      });
    else if (typeof i == "object") {
      const l = c(
        { obj: i },
        n,
        [...o, u],
        !0
      );
      e = e.concat(l.obj);
    }
  }
  return r ? { obj: e } : {
    result: e
  };
}
function f(t, n, o, r = !1) {
  if (n.length <= 1) {
    if (n.length > 0)
      t[n[0]] = r ? o(t[n[0] ?? n]) : o;
    else {
      let u = r ? o(t) : o;
      for (const i of Object.keys(u))
        t[i] = u[i];
    }
    return t;
  }
  let e = (t ?? [])[n[0]] ?? !1;
  if (!e) {
    let u = s(n, o, r);
    return t[n[0]] = u, t;
  }
  return n.shift(), f(e, n, o, r);
}
function s(t, n, o = !1) {
  let r = [...t], e;
  return r.length == 1 ? e = o ? n({}) : n : (e = {}, r.shift(), e[r[0]] = s(r, n)), e;
}
function p(t, n, o = { returnType: "object" }) {
  let { result: r } = c({ obj: n }, "$$@@@@__upsert_hook");
  for (let e = 0; e < r.length; e++) {
    let u = r[e];
    f(t, u.index, u.value, u.isFunction);
  }
  return ((o == null ? void 0 : o.returnType) ?? "object") == "object" ? { ...t } : [...t];
}
export {
  b as T,
  j as h,
  p as i
};
//# sourceMappingURL=js-upsert-DMSWX9bm.js.map
