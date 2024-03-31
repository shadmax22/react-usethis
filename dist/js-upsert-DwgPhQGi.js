import { createContext as p } from "react";
const h = p({});
function j(n, t = null) {
  return {
    "$$@@@@__upsert_hook": {
      value: n,
      index: t,
      isFunction: typeof n == "function"
    }
  };
}
function l({ obj: n }, t, u = [], o = !1) {
  let e = [];
  for (let r in n) {
    let i = n[r];
    if (r === t && (i ?? !1))
      e.push({
        index: [...u, ...i.index ?? []],
        value: i.value,
        isFunction: i.isFunction
      });
    else if (typeof i == "object") {
      const s = l(
        { obj: i },
        t,
        [...u, r],
        !0
      );
      e = e.concat(s.obj);
    }
  }
  return o ? { obj: e } : {
    result: e
  };
}
function c(n, t, u, o = !1) {
  if (t.length == 1)
    return n[t[0]] = o ? u(n[t[0]]) : u, n;
  let e = (n ?? [])[t[0]] ?? !1;
  if (!e) {
    let r = f(t, u, o);
    return n[t[0]] = r, n;
  }
  return t.shift(), c(e, t, u, o);
}
function f(n, t, u = !1) {
  let o = [...n], e;
  return o.length == 1 ? e = u ? t({}) : t : (e = {}, o.shift(), e[o[0]] = f(o, t)), e;
}
function a(n, t, u = { returnType: "object" }) {
  let { result: o } = l({ obj: t }, "$$@@@@__upsert_hook");
  for (let e = 0; e < o.length; e++) {
    let r = o[e];
    c(n, r.index, r.value, r.isFunction);
  }
  return ((u == null ? void 0 : u.returnType) ?? "object") == "object" ? { ...n } : [...n];
}
export {
  h as T,
  a as _,
  j as c
};
//# sourceMappingURL=js-upsert-DwgPhQGi.js.map
