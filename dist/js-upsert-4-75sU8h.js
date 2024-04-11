import { createContext as h } from "react";
const p = h({});
function b(n, t = null) {
  return {
    ["$$@@@@__upsert_hook_" + Math.floor(Math.random() * 100)]: {
      value: n,
      index: t,
      isFunction: typeof n == "function"
    }
  };
}
function l({ obj: n }, t, e = [], i = !1) {
  let o = [];
  for (let r in n) {
    let u = n[r];
    if (r.includes(t) && (u ?? !1))
      o.push({
        index: [...e, ...u.index ?? []],
        value: u.value,
        isFunction: u.isFunction
      });
    else if (typeof u == "object") {
      const s = l(
        { obj: u },
        t,
        [...e, r],
        !0
      );
      o = o.concat(s.obj);
    }
  }
  return i ? { obj: o } : {
    result: o
  };
}
function c(n, t, e, i = !1) {
  if (t.length <= 1)
    return t[0] ?? !1 ? n[t[0]] = i ? e(n[t[0] ?? t]) : e : n = i ? e(n) : e, n;
  let o = (n ?? [])[t[0]] ?? !1;
  if (!o) {
    let r = f(t, e, i);
    return n[t[0]] = r, n;
  }
  return t.shift(), c(o, t, e, i);
}
function f(n, t, e = !1) {
  let i = [...n], o;
  return i.length == 1 ? o = e ? t({}) : t : (o = {}, i.shift(), o[i[0]] = f(i, t)), o;
}
function d(n, t, e = { returnType: "object" }) {
  let { result: i } = l({ obj: t }, "$$@@@@__upsert_hook");
  for (let o = 0; o < i.length; o++) {
    let r = i[o];
    r.index.length == 0 ? n = c(
      n,
      r.index,
      r.value,
      r.isFunction
    ) : c(n, r.index, r.value, r.isFunction);
  }
  return ((e == null ? void 0 : e.returnType) ?? "object") == "object" ? { ...n } : [...n];
}
export {
  p as T,
  b as _,
  d as c
};
//# sourceMappingURL=js-upsert-4-75sU8h.js.map
