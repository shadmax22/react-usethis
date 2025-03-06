import { c as p, S as o, _ as a, u as l } from "./store-ChqbPtdO.js";
const h = {};
let E = 0, f = {
  collection: {}
};
f.collection.store = (e) => {
  const t = `__func_${E++}__`;
  return h[t] = e, t;
};
f.collection.retrive = (e) => h[e];
f.collection.get = () => h;
f.store = (e) => typeof e == "function" ? f.collection.store(e) : Array.isArray(e) ? e.map(f.store) : e !== null && typeof e == "object" ? Object.keys(e).reduce((t, n) => (t[n] = f.store(e[n]), t), {}) : e;
f.fetch = (e) => typeof e == "string" && e.startsWith("__func_") && e.endsWith("__") ? f.collection.retrive(e) : Array.isArray(e) ? e.map(f.fetch) : e !== null && typeof e == "object" ? Object.keys(e).reduce((t, n) => (t[n] = f.fetch(e[n]), t), {}) : e;
function D(e) {
  return p(() => f.store(e));
}
const m = p;
m.fun = D;
const i = {
  dependent_state: {},
  effects: {},
  registeredStates: {},
  resolved: {},
  registeredProcess: {},
  registeredDependency: {}
};
function I(e) {
  var u, d;
  const { state_name: t, effect: n, dependent_state_names: s } = e;
  if (!Array.isArray(s) || s.length === 0)
    throw TypeError(
      "Second parameter of effect `dependent_states` must be a non-empty array."
    );
  if ((u = i.registeredStates) != null && u[t]) return;
  const r = t;
  i.registeredStates[t] = !0;
  for (let c of s) {
    if (typeof c == "function" && //@ts-ignore
    (c != null && c["@___usethis"]) && (c != null && c.this) && (c = c.this), typeof c == "string")
      (d = i.dependent_state) != null && d[c] ? i.dependent_state[c] = [
        ...i.dependent_state[c],
        r
      ] : i.dependent_state[c] = [r], i.registeredDependency[t] = [
        ...i.registeredDependency[t] ?? [],
        c
      ];
    else
      throw TypeError(
        "Invalid type passed on `dependent_states`, Only string and useThis instance supported "
      );
    i.effects[r] = n;
  }
}
function _(e) {
  var t;
  if ((t = i.dependent_state) != null && t[e])
    for (const n of i.dependent_state[e])
      try {
        i.effects[n](
          () => w({
            dependent_state_name: e,
            // State which is dependent to process_id
            state_name: n
          })
        );
      } catch {
      }
}
function w(e) {
  const { dependent_state_name: t, state_name: n } = e;
  i.dependent_state[t] = i.dependent_state[t].filter(
    (s) => s !== n
  ), delete i.effects[n], i.resolved[n] = !0;
}
function R() {
  return i;
}
function g(e, t) {
  return function(s) {
    let r = typeof s == "function" ? s(a.getState().This[e]) : s;
    return t(
      o.update({
        data: r,
        state: e
      })
    ), a.getState().This[e];
  };
}
function T(e, t) {
  return function(s) {
    let r = typeof s == "function" ? s(a.getState().This[e]) : s;
    return t(
      o.append({
        data: r,
        state: e
      })
    ), a.getState().This[e];
  };
}
function y(e, t) {
  function n(r) {
    try {
      t(
        o.upsert({
          data: r,
          type: "general",
          active_state: e,
          config: {}
        })
      );
    } catch (u) {
      console.log(u);
    }
  }
  const s = (...r) => {
    for (let u of r)
      n(u);
    return a.getState().This[e];
  };
  return s.at = (...r) => (t(
    o.upsert({
      data: r,
      active_state: e,
      config: {},
      type: "at"
    })
  ), a.getState().This[e]), s.funAt = (...r) => {
    const u = f.store(r[r.length - 1]);
    r.pop();
    const d = [...r, u];
    return t(
      o.upsert({
        data: d,
        active_state: e,
        config: {},
        type: "at"
      })
    ), a.getState().This[e];
  }, s;
}
const S = (e, t) => {
  var c;
  const n = a.dispatch, s = (v) => {
    const A = n(v);
    return _(e), A;
  }, r = e;
  return !((c = a.getState()) == null ? void 0 : c.This)[r] && t && !R().resolved[r] && s(
    o.update({
      data: t,
      state: r
    })
  ), {
    update: g(
      r,
      s
    ),
    append: T(
      r,
      s
    ),
    upsert: y(
      r,
      s
    ),
    dispatcher: s,
    This: a.getState().This[r],
    get: () => a.getState().This[r],
    fetch: () => f.fetch(
      a.getState().This[r]
    )
  };
}, M = (e) => {
  const t = a.dispatch, n = (u) => {
    const d = t(u);
    return _(e), d;
  }, s = e;
  return {
    ...{
      update: g(
        s,
        n
      ),
      append: T(
        s,
        n
      ),
      upsert: y(
        s,
        n
      ),
      dispatcher: n,
      This: a.getState().This[s],
      get: () => a.getState().This[s],
      fetch: () => f.fetch(
        a.getState().This[s]
      )
    }
  };
};
function x(e) {
  const t = {
    created: !1,
    stateName: "state_" + Math.floor(1e5 + Math.random() * 9e5)
  };
  e && typeof e == "object" && (t.defaultData = e);
  const n = () => {
    if (!t.created)
      throw Error("Cannot use useThis Instance without created");
    return F(t.stateName);
  };
  return n["@___usethis"] = "0.1.6", n.this = t.stateName, n.onEffect = (s, r) => (t.onEffect = {
    resolver: s,
    dependent_states: r
  }, n), n.stateName = (s) => (t.stateName = s, n), n.default = (s) => (t.defaultData = s, n), n.setConfig = (s, r) => (t[s] = r, n), n.use = {}, n.create = () => {
    if (!t.created)
      return n.this = t.stateName, t.defaultData && a.dispatch(
        o.update({
          data: t.defaultData,
          state: t.stateName
        })
      ), t.onEffect && I({
        state_name: t.stateName,
        dependent_state_names: t.onEffect.dependent_states ?? [],
        // Effect is stored in effect_collection.effects.{process_id}, This will execute on effect condtion
        effect: (s) => {
          var r;
          return (r = t.onEffect) == null ? void 0 : r.resolver({
            thisState: a.getState().This,
            state: (u) => typeof u == "function" && u["@___usethis"] ? a.getState().This[u.this] : a.getState().This[u],
            resolver: () => {
              a.dispatch(
                o.removeState({
                  active_state: t.stateName
                })
              ), s();
            }
          });
        }
      }), t.created = !0, n.use = {
        ...S(
          t.stateName,
          t.defaultData
        )
      }, n;
  }, n;
}
function F(e) {
  try {
    l((t) => {
      var n;
      return (n = t.This) == null ? void 0 : n[e];
    });
  } catch {
  }
  return M(
    e
  );
}
function O(e, t) {
  try {
    l((n) => {
      var s;
      return (s = n.This) == null ? void 0 : s[e];
    });
  } catch {
  }
  return S(
    e,
    t
  );
}
function C(e, t) {
  return new.target ? x(e) : O(e, t);
}
const U = C;
export {
  m as set,
  D as setFun,
  U as useThis
};
//# sourceMappingURL=index.js.map
