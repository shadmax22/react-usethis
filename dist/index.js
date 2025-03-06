import { _ as o, S as h, u as T } from "./store-CC_0vzq1.js";
function I(t) {
  return t.replace(/[\[\]'"]/g, "").split(".");
}
const p = (t, e) => {
  let n = Math.floor(Math.random() * 1e6), r = typeof e == "string" ? I(e) : e;
  return {
    ["$$@@@@__upsert_hook_" + n]: {
      value: t,
      index: r ?? null,
      isFunction: typeof t == "function"
    }
  };
};
p.at = (...t) => {
  const e = t, n = e.pop();
  return p(n, e);
};
function _(t, e, n, r = !1, s, i = []) {
  const u = e;
  if (e.length <= 1) {
    if (e.length > 0)
      try {
        return t[e[0]] = r ? n(t[e[0] ?? e]) : n, t;
      } catch {
        throw `Setting Failed at index ${e[0]} of [${i.join(
          " => "
        )}] due to the type ${typeof t}, Only array or object is assignable`;
      }
    if (t === null || typeof t != "object")
      throw Error(
        "Initial value is not a object, ERROR: INITITAL_VALUE_PARSE_FAILED"
      );
    let c = r ? n(t) : n;
    if (s.returnType == "array")
      return t.push(c), t;
    if (typeof c != "object")
      throw `Object or array can be setted only as a default value. Type of value is ${typeof c}.`;
    for (const l of Object.keys(c))
      t[l] = c[l];
    return t;
  }
  let a = (t ?? [])[e[0]] ?? !1;
  if (!a) {
    let c = A(e, n, r);
    try {
      t[e[0]] = c;
    } catch {
      throw `Setting Failed at index ${e[0]} of [${i.join(
        " => "
      )}] due to the type ${typeof t}, Only array or object is assignable`;
    }
    return t;
  }
  return e.shift(), _(a, e, n, r, s, [
    ...i,
    u[0]
  ]);
}
function A(t, e, n = !1) {
  let r = [...t], s;
  return r.length == 1 ? s = n ? e(null) : e : (s = {}, r.shift(), s[r[0]] = A(r, e, n)), s;
}
function v({ obj: t }, e, n = [], r = !1) {
  let s = [];
  for (let i in t) {
    let u = t[i];
    if (i.includes(e) && (u ?? !1))
      s.push({
        index: [...n, ...u.index ?? []],
        value: u.value,
        isFunction: u.isFunction
      });
    else if (typeof u == "object") {
      const a = v(
        { obj: u },
        e,
        [...n, i],
        !0
      );
      s = s.concat(a.obj);
    }
  }
  return r ? { obj: s } : {
    result: s
  };
}
function x(t, e, n = { returnType: "object" }) {
  let { result: r } = v({ obj: e }, "$$@@@@__upsert_hook");
  for (let s = 0; s < r.length; s++) {
    let i = r[s];
    _(
      t,
      i.index,
      i.value,
      i.isFunction,
      n
    );
  }
}
function y(t, ...e) {
  let n = {
    returnType: "object"
  };
  const r = Array.isArray(t);
  r && (n.returnType = "array");
  for (let s of e)
    x(t, s, n);
  try {
    return new Proxy(t, {
      get(s, i, u) {
        return s = r ? [...t] : { ...t }, i === "get" ? () => u : i === "at" ? (...a) => {
          if (a.length <= 1)
            throw "keys.length is less than 2, need atleast 2 values to differentiate index and value";
          const c = a[a.length - 1], l = a;
          return l.pop(), _(
            t,
            l,
            c,
            typeof c == "function",
            n
          ), u;
        } : Reflect.get(s, i, u);
      }
    });
  } catch {
    throw Error(
      `Cannot return value as returnType '${n.returnType}'. Please try '${n.returnType == "array" ? "OBJECT" : "ARRAY"}' returnType, ERROR: RETURN_ERROR.`
    );
  }
}
const g = {};
let D = 0, d = {
  collection: {}
};
d.collection.store = (t) => {
  const e = `__func_${D++}__`;
  return g[e] = t, e;
};
d.collection.retrive = (t) => g[t];
d.collection.get = () => g;
d.store = (t) => typeof t == "function" ? d.collection.store(t) : Array.isArray(t) ? t.map(d.store) : t !== null && typeof t == "object" ? Object.keys(t).reduce((e, n) => (e[n] = d.store(t[n]), e), {}) : t;
d.fetch = (t) => typeof t == "string" && t.startsWith("__func_") && t.endsWith("__") ? d.collection.retrive(t) : Array.isArray(t) ? t.map(d.fetch) : t !== null && typeof t == "object" ? Object.keys(t).reduce((e, n) => (e[n] = d.fetch(t[n]), e), {}) : t;
function O(t) {
  return p(() => d.store(t));
}
const m = p;
m.fun = O;
const f = {
  dependent_state: {},
  effects: {},
  registeredStates: {},
  resolved: {},
  registeredProcess: {},
  registeredDependency: {}
};
function F(t) {
  var i, u;
  const { state_name: e, effect: n, dependent_state_names: r } = t;
  if (!Array.isArray(r) || r.length === 0)
    throw TypeError(
      "Second parameter of effect `dependent_states` must be a non-empty array."
    );
  if ((i = f.registeredStates) != null && i[e])
    return;
  const s = e;
  f.registeredStates[e] = !0;
  for (let a of r) {
    if (typeof a == "function" && //@ts-ignore
    (a != null && a["@___usethis"]) && (a != null && a.this) && (a = a.this), typeof a == "string")
      (u = f.dependent_state) != null && u[a] ? f.dependent_state[a] = [
        ...f.dependent_state[a],
        s
      ] : f.dependent_state[a] = [s], f.registeredDependency[e] = [
        ...f.registeredDependency[e] ?? [],
        a
      ];
    else
      throw TypeError(
        "Invalid type passed on `dependent_states`, Only string and useThis instance supported "
      );
    f.effects[s] = n;
  }
  console.log(f);
}
function E(t) {
  var e;
  if ((e = f.dependent_state) != null && e[t])
    for (const n of f.dependent_state[t])
      try {
        f.effects[n](
          () => b({
            dependent_state_name: t,
            // State which is dependent to process_id
            state_name: n
          })
        );
      } catch {
      }
}
function b(t) {
  const { dependent_state_name: e, state_name: n } = t;
  f.dependent_state[e] = f.dependent_state[e].filter(
    (r) => r !== n
  ), delete f.effects[n], f.resolved[n] = !0;
}
function M() {
  return f;
}
function R(t, e) {
  return function(r) {
    let s = typeof r == "function" ? r(o.getState().This[t]) : r;
    return e(
      h.update({
        data: s,
        state: t
      })
    ), o.getState().This[t];
  };
}
function S(t, e) {
  return function(r) {
    let s = typeof r == "function" ? r(o.getState().This[t]) : r;
    return e(
      h.append({
        data: s,
        state: t
      })
    ), o.getState().This[t];
  };
}
function $(t, e) {
  var i, u;
  const n = (u = (i = o) == null ? void 0 : i.getState()) == null ? void 0 : u.This[t];
  function r(a) {
    try {
      const c = Array.isArray(n) ? [...n] : { ...n ?? {} };
      e(
        h.upsert({
          data: y(c, a),
          active_state: t,
          config: {}
        })
      );
    } catch (c) {
      console.log(c);
    }
  }
  const s = (...a) => {
    for (let c of a)
      r(c);
    return o.getState().This[t];
  };
  return s.at = (...a) => {
    const c = Array.isArray(n) ? [...n] : { ...n ?? {} };
    return e(
      h.upsert({
        data: y(c).at(...a),
        active_state: t,
        config: {}
      })
    ), o.getState().This[t];
  }, s.funAt = (...a) => {
    const c = Array.isArray(n) ? [...n] : { ...n ?? {} }, l = d.store(a[a.length - 1]);
    a.pop();
    const w = [...a, l];
    return e(
      h.upsert({
        data: y(c).at(
          ...w
        ),
        active_state: t,
        config: {}
      })
    ), o.getState().This[t];
  }, s;
}
const C = (t, e) => {
  var a;
  const n = o.dispatch, r = (c) => {
    const l = n(c);
    return E(t), l;
  }, s = t;
  return !((a = o.getState()) == null ? void 0 : a.This)[s] && e && !M().resolved[s] && r(
    h.update({
      data: e,
      state: s
    })
  ), {
    update: R(
      s,
      r
    ),
    append: S(
      s,
      r
    ),
    upsert: $(
      s,
      r
    ),
    dispatcher: r,
    This: o.getState().This[s],
    get: () => o.getState().This[s],
    fetch: () => d.fetch(
      o.getState().This[s]
    )
  };
}, j = (t) => {
  const e = o.dispatch, n = (i) => {
    const u = e(i);
    return E(t), u;
  }, r = t;
  return {
    ...{
      update: R(
        r,
        n
      ),
      append: S(
        r,
        n
      ),
      upsert: $(
        r,
        n
      ),
      dispatcher: n,
      This: o.getState().This[r],
      get: () => o.getState().This[r],
      fetch: () => d.fetch(
        o.getState().This[r]
      )
    }
  };
};
function k(t) {
  const e = {
    created: !1,
    stateName: "state_" + Math.floor(1e5 + Math.random() * 9e5)
  };
  t && typeof t == "object" && (e.defaultData = t);
  const n = () => {
    if (!e.created)
      throw Error("Cannot use useThis Instance without created");
    return P(e.stateName);
  };
  return n["@___usethis"] = "0.1.53", n.this = e.stateName, n.onEffect = (r, s) => (e.onEffect = {
    resolver: r,
    dependent_states: s
  }, n), n.stateName = (r) => (e.stateName = r, n), n.default = (r) => (e.defaultData = r, n), n.setConfig = (r, s) => (e[r] = s, n), n.create = () => {
    if (!e.created)
      return n.this = e.stateName, e.defaultData && o.dispatch(
        h.update({
          data: e.defaultData,
          state: e.stateName
        })
      ), e.onEffect && F({
        state_name: e.stateName,
        dependent_state_names: e.onEffect.dependent_states ?? [],
        // Effect is stored in effect_collection.effects.{process_id}, This will execute on effect condtion
        effect: (r) => {
          var s;
          return (s = e.onEffect) == null ? void 0 : s.resolver({
            thisState: o.getState().This,
            state: (i) => typeof i == "function" && i["@___usethis"] ? o.getState().This[i.this] : o.getState().This[i],
            resolver: () => {
              o.dispatch(
                h.removeState({
                  active_state: e.stateName
                })
              ), r(), e.created = !1;
            }
          });
        }
      }), e.created = !0, n;
  }, n.static = {
    //@ts-ignore
    get: () => o.getState().This[n.this]
  }, n;
}
function P(t) {
  try {
    T((e) => {
      var n;
      return (n = e.This) == null ? void 0 : n[t];
    });
  } catch {
  }
  return j(
    t
  );
}
function U(t, e) {
  try {
    T((n) => {
      var r;
      return (r = n.This) == null ? void 0 : r[t];
    });
  } catch {
  }
  return C(
    t,
    e
  );
}
function L(t, e) {
  return new.target ? k(t) : U(t, e);
}
const B = L;
export {
  m as set,
  O as setFun,
  B as useThis
};
//# sourceMappingURL=index.js.map
