import { c as p, S as f, _ as a, u as l } from "./ThisProvider-DQlPpi9N.js";
import { T as B } from "./ThisProvider-DQlPpi9N.js";
const h = {};
let E = 0, o = {
  collection: {}
};
o.collection.store = (e) => {
  const t = `__func_${E++}__`;
  return h[t] = e, t;
};
o.collection.retrive = (e) => h[e];
o.collection.get = () => h;
o.store = (e) => typeof e == "function" ? o.collection.store(e) : Array.isArray(e) ? e.map(o.store) : e !== null && typeof e == "object" ? Object.keys(e).reduce((t, n) => (t[n] = o.store(e[n]), t), {}) : e;
o.fetch = (e) => typeof e == "string" && e.startsWith("__func_") && e.endsWith("__") ? o.collection.retrive(e) : Array.isArray(e) ? e.map(o.fetch) : e !== null && typeof e == "object" ? Object.keys(e).reduce((t, n) => (t[n] = o.fetch(e[n]), t), {}) : e;
function m(e) {
  return p(() => o.store(e));
}
const D = p;
D.fun = m;
const c = {
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
  if ((u = c.registeredStates) != null && u[t]) return;
  const r = t;
  c.registeredStates[t] = !0;
  for (let i of s) {
    if (typeof i == "function" && //@ts-ignore
    (i != null && i["@___usethis"]) && (i != null && i.this) && (i = i.this), typeof i == "string")
      (d = c.dependent_state) != null && d[i] ? c.dependent_state[i] = [
        ...c.dependent_state[i],
        r
      ] : c.dependent_state[i] = [r], c.registeredDependency[t] = [
        ...c.registeredDependency[t] ?? [],
        i
      ];
    else
      throw TypeError(
        "Invalid type passed on `dependent_states`, Only string and useThis instance supported "
      );
    c.effects[r] = n;
  }
}
function _(e) {
  var t;
  if ((t = c.dependent_state) != null && t[e])
    for (const n of c.dependent_state[e])
      try {
        c.effects[n](
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
  c.dependent_state[t] = c.dependent_state[t].filter(
    (s) => s !== n
  ), delete c.effects[n], c.resolved[n] = !0;
}
function R() {
  return c;
}
function g(e, t) {
  return function(s) {
    let r = typeof s == "function" ? s(a.getState().This[e]) : s;
    return t(
      f.update({
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
      f.append({
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
        f.upsert({
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
    f.upsert({
      data: r,
      active_state: e,
      config: {},
      type: "at"
    })
  ), a.getState().This[e]), s.funAt = (...r) => {
    const u = o.store(r[r.length - 1]);
    r.pop();
    const d = [...r, u];
    return t(
      f.upsert({
        data: d,
        active_state: e,
        config: {},
        type: "at"
      })
    ), a.getState().This[e];
  }, s;
}
const v = (e, t) => {
  var i;
  const n = a.dispatch, s = (S) => {
    const A = n(S);
    return _(e), A;
  }, r = e;
  return !((i = a.getState()) == null ? void 0 : i.This)[r] && t && !R().resolved[r] && s(
    f.update({
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
    fetch: () => o.fetch(
      a.getState().This[r]
    )
  };
}, x = (e) => {
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
      fetch: () => o.fetch(
        a.getState().This[s]
      )
    }
  };
};
function M(e) {
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
  return n["@___usethis"] = "0.1.682", n.this = t.stateName, n.onEffect = (s, r) => (t.onEffect = {
    resolver: s,
    dependent_states: r
  }, n), n.stateName = (s) => (t.stateName = s, n), n.default = (s) => (t.defaultData = s, n), n.setConfig = (s, r) => (t[s] = r, n), n.use = {}, n.create = () => {
    if (!t.created)
      return n.this = t.stateName, t.defaultData && a.dispatch(
        f.update({
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
                f.removeState({
                  active_state: t.stateName
                })
              ), s();
            }
          });
        }
      }), t.created = !0, n.use = {
        ...v(
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
  return x(
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
  return v(
    e,
    t
  );
}
function C(e, t) {
  return new.target ? M(e) : O(e, t);
}
const P = C;
export {
  B as ThisProvider,
  D as set,
  m as setFun,
  P as useThis
};
//# sourceMappingURL=index.js.map
