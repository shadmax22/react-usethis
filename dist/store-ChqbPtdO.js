import * as k from "react";
import Me from "react";
function it(e) {
  return e.replace(/[\[\]'"]/g, "").split(".");
}
const be = (e, t) => {
  let r = Math.floor(Math.random() * 1e6), n = typeof t == "string" ? it(t) : t;
  return {
    ["$$@@@@__upsert_hook_" + r]: {
      value: e,
      index: n ?? null,
      isFunction: typeof e == "function"
    }
  };
};
be.at = (...e) => {
  const t = e, r = t.pop();
  return be(r, t);
};
function he(e, t, r, n = !1, o, i = []) {
  const s = t;
  if (t.length <= 1) {
    if (t.length > 0)
      try {
        return e[t[0]] = n ? r(e[t[0] ?? t]) : r, e;
      } catch (f) {
        throw console.error(f), `Setting Failed at index ${t[0]} of [${i.join(
          " => "
        )}] due to the type ${typeof e}, Only array or object is assignable`;
      }
    if (e === null || typeof e != "object")
      throw Error(
        "Initial value is not a object, ERROR: INITITAL_VALUE_PARSE_FAILED"
      );
    let u = n ? r(e) : r;
    if (o.returnType == "array")
      return e.push(u), e;
    if (typeof u != "object")
      throw `Object or array can be setted only as a default value. Type of value is ${typeof u}.`;
    for (const f of Object.keys(u))
      e[f] = u[f];
    return e;
  }
  let a = (e ?? [])[t[0]] ?? !1;
  if (!a) {
    let u = je(t, r, n);
    try {
      e[t[0]] = u;
    } catch {
      throw `Setting Failed at index ${t[0]} of [${i.join(
        " => "
      )}] due to the type ${typeof e}, Only array or object is assignable`;
    }
    return e;
  }
  return t.shift(), he(a, t, r, n, o, [
    ...i,
    s[0]
  ]);
}
function je(e, t, r = !1) {
  let n = [...e], o;
  return n.length == 1 ? o = r ? t(null) : t : (o = {}, n.shift(), o[n[0]] = je(n, t, r)), o;
}
function Ie({ obj: e }, t, r = [], n = !1) {
  let o = [];
  for (let i in e) {
    let s = e[i];
    if (i.includes(t) && (s ?? !1))
      o.push({
        index: [...r, ...s.index ?? []],
        value: s.value,
        isFunction: s.isFunction
      });
    else if (typeof s == "object") {
      const a = Ie(
        { obj: s },
        t,
        [...r, i],
        !0
      );
      o = o.concat(a.obj);
    }
  }
  return n ? { obj: o } : {
    result: o
  };
}
function st(e, t, r = { returnType: "object" }) {
  let { result: n } = Ie({ obj: t }, "$$@@@@__upsert_hook");
  for (let o = 0; o < n.length; o++) {
    let i = n[o];
    he(
      e,
      i.index,
      i.value,
      i.isFunction,
      r
    );
  }
}
function we(e, ...t) {
  let r = {
    returnType: "object"
  };
  const n = Array.isArray(e);
  n && (r.returnType = "array");
  for (let o of t)
    st(e, o, r);
  try {
    return new Proxy(e, {
      get(o, i, s) {
        return o = n ? [...e] : { ...e }, i === "get" ? () => s : i === "at" ? (...a) => {
          if (a.length <= 1)
            throw "keys.length is less than 2, need atleast 2 values to differentiate index and value";
          const u = a[a.length - 1], f = a;
          return f.pop(), he(
            e,
            f,
            u,
            typeof u == "function",
            r
          ), s;
        } : Reflect.get(o, i, s);
      }
    });
  } catch {
    throw Error(
      `Cannot return value as returnType '${r.returnType}'. Please try '${r.returnType == "array" ? "OBJECT" : "ARRAY"}' returnType, ERROR: RETURN_ERROR.`
    );
  }
}
var se = { exports: {} }, Z = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function at() {
  if (_e) return Z;
  _e = 1;
  var e = Me;
  function t(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, s = e.useMemo, a = e.useDebugValue;
  return Z.useSyncExternalStoreWithSelector = function(u, f, c, l, d) {
    var p = o(null);
    if (p.current === null) {
      var h = { hasValue: !1, value: null };
      p.current = h;
    } else h = p.current;
    p = s(
      function() {
        function y(E) {
          if (!w) {
            if (w = !0, _ = E, E = l(E), d !== void 0 && h.hasValue) {
              var N = h.value;
              if (d(N, E))
                return m = N;
            }
            return m = E;
          }
          if (N = m, r(_, E)) return N;
          var S = l(E);
          return d !== void 0 && d(N, S) ? (_ = E, N) : (_ = E, m = S);
        }
        var w = !1, _, m, b = c === void 0 ? null : c;
        return [
          function() {
            return y(f());
          },
          b === null ? void 0 : function() {
            return y(b());
          }
        ];
      },
      [f, c, l, d]
    );
    var g = n(u, p[0], p[1]);
    return i(
      function() {
        h.hasValue = !0, h.value = g;
      },
      [g]
    ), a(g), g;
  }, Z;
}
var ee = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function ut() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Me, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, o = t.useRef, i = t.useEffect, s = t.useMemo, a = t.useDebugValue;
    ee.useSyncExternalStoreWithSelector = function(u, f, c, l, d) {
      var p = o(null);
      if (p.current === null) {
        var h = { hasValue: !1, value: null };
        p.current = h;
      } else h = p.current;
      p = s(
        function() {
          function y(E) {
            if (!w) {
              if (w = !0, _ = E, E = l(E), d !== void 0 && h.hasValue) {
                var N = h.value;
                if (d(N, E))
                  return m = N;
              }
              return m = E;
            }
            if (N = m, r(_, E))
              return N;
            var S = l(E);
            return d !== void 0 && d(N, S) ? (_ = E, N) : (_ = E, m = S);
          }
          var w = !1, _, m, b = c === void 0 ? null : c;
          return [
            function() {
              return y(f());
            },
            b === null ? void 0 : function() {
              return y(b());
            }
          ];
        },
        [f, c, l, d]
      );
      var g = n(u, p[0], p[1]);
      return i(
        function() {
          h.hasValue = !0, h.value = g;
        },
        [g]
      ), a(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ee;
}
process.env.NODE_ENV === "production" ? se.exports = at() : se.exports = ut();
var ct = se.exports;
function ft(e) {
  e();
}
function lt() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      ft(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const o = t = {
        callback: r,
        next: null,
        prev: t
      };
      return o.prev ? o.prev.next = o : e = o, function() {
        !n || e === null || (n = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next);
      };
    }
  };
}
var ve = {
  notify() {
  },
  get: () => []
};
function dt(e, t) {
  let r, n = ve, o = 0, i = !1;
  function s(g) {
    c();
    const y = n.subscribe(g);
    let w = !1;
    return () => {
      w || (w = !0, y(), l());
    };
  }
  function a() {
    n.notify();
  }
  function u() {
    h.onStateChange && h.onStateChange();
  }
  function f() {
    return i;
  }
  function c() {
    o++, r || (r = e.subscribe(u), n = lt());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = ve);
  }
  function d() {
    i || (i = !0, c());
  }
  function p() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: u,
    isSubscribed: f,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return h;
}
var pt = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ht = /* @__PURE__ */ pt(), yt = () => typeof navigator < "u" && navigator.product === "ReactNative", mt = /* @__PURE__ */ yt(), Et = () => ht || mt ? k.useLayoutEffect : k.useEffect, bt = /* @__PURE__ */ Et(), te = /* @__PURE__ */ Symbol.for("react-redux-context"), re = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function wt() {
  if (!k.createContext) return {};
  const e = re[te] ?? (re[te] = /* @__PURE__ */ new Map());
  let t = e.get(k.createContext);
  return t || (t = k.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(k.createContext, t)), t;
}
var W = /* @__PURE__ */ wt();
function _t(e) {
  const { children: t, context: r, serverState: n, store: o } = e, i = k.useMemo(() => {
    const u = dt(o), f = {
      store: o,
      subscription: u,
      getServerState: n ? () => n : void 0
    };
    if (process.env.NODE_ENV === "production")
      return f;
    {
      const { identityFunctionCheck: c = "once", stabilityCheck: l = "once" } = e;
      return /* @__PURE__ */ Object.assign(f, {
        stabilityCheck: l,
        identityFunctionCheck: c
      });
    }
  }, [o, n]), s = k.useMemo(() => o.getState(), [o]);
  bt(() => {
    const { subscription: u } = i;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== o.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [i, s]);
  const a = r || W;
  return /* @__PURE__ */ k.createElement(a.Provider, { value: i }, t);
}
var gr = _t;
function Pe(e = W) {
  return function() {
    const r = k.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var gt = /* @__PURE__ */ Pe(), vt = (e, t) => e === t;
function Nt(e = W) {
  const t = e === W ? gt : Pe(e), r = (n, o = {}) => {
    const { equalityFn: i = vt } = typeof o == "function" ? { equalityFn: o } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error("You must pass a selector to useSelector");
      if (typeof n != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof i != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const s = t(), { store: a, subscription: u, getServerState: f } = s, c = k.useRef(!0), l = k.useCallback(
      {
        [n.name](p) {
          const h = n(p);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: g = {} } = typeof o == "function" ? {} : o, { identityFunctionCheck: y, stabilityCheck: w } = s, {
              identityFunctionCheck: _,
              stabilityCheck: m
            } = {
              stabilityCheck: w,
              identityFunctionCheck: y,
              ...g
            };
            if (m === "always" || m === "once" && c.current) {
              const b = n(p);
              if (!i(h, b)) {
                let E;
                try {
                  throw new Error();
                } catch (N) {
                  ({ stack: E } = N);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: p,
                    selected: h,
                    selected2: b,
                    stack: E
                  }
                );
              }
            }
            if ((_ === "always" || _ === "once" && c.current) && h === p) {
              let b;
              try {
                throw new Error();
              } catch (E) {
                ({ stack: b } = E);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: b }
              );
            }
            c.current && (c.current = !1);
          }
          return h;
        }
      }[n.name],
      [n]
    ), d = ct.useSyncExternalStoreWithSelector(
      u.addNestedSub,
      a.getState,
      f || a.getState,
      l,
      i
    );
    return k.useDebugValue(d), d;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var vr = /* @__PURE__ */ Nt();
function O(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ot = typeof Symbol == "function" && Symbol.observable || "@@observable", Ne = Ot, ne = () => Math.random().toString(36).substring(7).split("").join("."), St = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ne()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ne()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ne()}`
}, M = St;
function L(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Dt(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (xt(e))
    return "date";
  if (kt(e))
    return "error";
  const r = Ct(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Ct(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function kt(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function xt(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function A(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Dt(e)), t;
}
function $e(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? O(2) : `Expected the root reducer to be a function. Instead, received: '${A(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? O(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? O(1) : `Expected the enhancer to be a function. Instead, received: '${A(r)}'`);
    return r($e)(e, t);
  }
  let n = e, o = t, i = /* @__PURE__ */ new Map(), s = i, a = 0, u = !1;
  function f() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((y, w) => {
      s.set(w, y);
    }));
  }
  function c() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? O(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function l(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? O(4) : `Expected the listener to be a function. Instead, received: '${A(y)}'`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? O(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let w = !0;
    f();
    const _ = a++;
    return s.set(_, y), function() {
      if (w) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? O(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        w = !1, f(), s.delete(_), i = null;
      }
    };
  }
  function d(y) {
    if (!L(y))
      throw new Error(process.env.NODE_ENV === "production" ? O(7) : `Actions must be plain objects. Instead, the actual type was: '${A(y)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof y.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? O(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof y.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? O(17) : `Action "type" property must be a string. Instead, the actual type was: '${A(y.type)}'. Value was: '${y.type}' (stringified)`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? O(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, o = n(o, y);
    } finally {
      u = !1;
    }
    return (i = s).forEach((_) => {
      _();
    }), y;
  }
  function p(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? O(10) : `Expected the nextReducer to be a function. Instead, received: '${A(y)}`);
    n = y, d({
      type: M.REPLACE
    });
  }
  function h() {
    const y = l;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(w) {
        if (typeof w != "object" || w === null)
          throw new Error(process.env.NODE_ENV === "production" ? O(11) : `Expected the observer to be an object. Instead, received: '${A(w)}'`);
        function _() {
          const b = w;
          b.next && b.next(c());
        }
        return _(), {
          unsubscribe: y(_)
        };
      },
      [Ne]() {
        return this;
      }
    };
  }
  return d({
    type: M.INIT
  }), {
    dispatch: d,
    subscribe: l,
    getState: c,
    replaceReducer: p,
    [Ne]: h
  };
}
function Oe(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Tt(e, t, r, n) {
  const o = Object.keys(t), i = r && r.type === M.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!L(e))
    return `The ${i} has unexpected type of "${A(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const s = Object.keys(e).filter((a) => !t.hasOwnProperty(a) && !n[a]);
  if (s.forEach((a) => {
    n[a] = !0;
  }), !(r && r.type === M.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function Rt(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: M.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? O(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: M.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? O(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${M.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function ze(e) {
  const t = Object.keys(e), r = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    process.env.NODE_ENV !== "production" && typeof e[a] > "u" && Oe(`No reducer provided for key "${a}"`), typeof e[a] == "function" && (r[a] = e[a]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    Rt(r);
  } catch (s) {
    i = s;
  }
  return function(a = {}, u) {
    if (i)
      throw i;
    if (process.env.NODE_ENV !== "production") {
      const l = Tt(a, r, u, o);
      l && Oe(l);
    }
    let f = !1;
    const c = {};
    for (let l = 0; l < n.length; l++) {
      const d = n[l], p = r[d], h = a[d], g = p(h, u);
      if (typeof g > "u") {
        const y = u && u.type;
        throw new Error(process.env.NODE_ENV === "production" ? O(14) : `When called with an action of type ${y ? `"${String(y)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      c[d] = g, f = f || g !== h;
    }
    return f = f || n.length !== Object.keys(a).length, f ? c : a;
  };
}
function K(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function At(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? O(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const s = {
      getState: o.getState,
      dispatch: (u, ...f) => i(u, ...f)
    }, a = e.map((u) => u(s));
    return i = K(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Fe(e) {
  return L(e) && "type" in e && typeof e.type == "string";
}
var Le = Symbol.for("immer-nothing"), Se = Symbol.for("immer-draftable"), x = Symbol.for("immer-state"), Vt = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function C(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Vt[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var P = Object.getPrototypeOf;
function j(e) {
  return !!e && !!e[x];
}
function R(e) {
  var t;
  return e ? Ue(e) || Array.isArray(e) || !!e[Se] || !!((t = e.constructor) != null && t[Se]) || X(e) || Q(e) : !1;
}
var Mt = Object.prototype.constructor.toString();
function Ue(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = P(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Mt;
}
function G(e, t) {
  q(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function q(e) {
  const t = e[x];
  return t ? t.type_ : Array.isArray(e) ? 1 : X(e) ? 2 : Q(e) ? 3 : 0;
}
function ae(e, t) {
  return q(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Be(e, t, r) {
  const n = q(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function jt(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function X(e) {
  return e instanceof Map;
}
function Q(e) {
  return e instanceof Set;
}
function V(e) {
  return e.copy_ || e.base_;
}
function ue(e, t) {
  if (X(e))
    return new Map(e);
  if (Q(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Ue(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[x];
    let o = Reflect.ownKeys(n);
    for (let i = 0; i < o.length; i++) {
      const s = o[i], a = n[s];
      a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (n[s] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: a.enumerable,
        value: e[s]
      });
    }
    return Object.create(P(e), n);
  } else {
    const n = P(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function ye(e, t = !1) {
  return J(e) || j(e) || !R(e) || (q(e) > 1 && (e.set = e.add = e.clear = e.delete = It), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => ye(n, !0))), e;
}
function It() {
  C(2);
}
function J(e) {
  return Object.isFrozen(e);
}
var Pt = {};
function I(e) {
  const t = Pt[e];
  return t || C(0, e), t;
}
var z;
function We() {
  return z;
}
function $t(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function De(e, t) {
  t && (I("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ce(e) {
  fe(e), e.drafts_.forEach(zt), e.drafts_ = null;
}
function fe(e) {
  e === z && (z = e.parent_);
}
function Ce(e) {
  return z = $t(z, e);
}
function zt(e) {
  const t = e[x];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function ke(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[x].modified_ && (ce(t), C(4)), R(e) && (e = H(t, e), t.parent_ || Y(t, e)), t.patches_ && I("Patches").generateReplacementPatches_(
    r[x].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = H(t, r, []), ce(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Le ? e : void 0;
}
function H(e, t, r) {
  if (J(t))
    return t;
  const n = t[x];
  if (!n)
    return G(
      t,
      (o, i) => xe(e, n, t, o, i, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return Y(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o, s = !1;
    n.type_ === 3 && (i = new Set(o), o.clear(), s = !0), G(
      i,
      (a, u) => xe(e, n, o, a, u, r, s)
    ), Y(e, o, !1), r && e.patches_ && I("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function xe(e, t, r, n, o, i, s) {
  if (process.env.NODE_ENV !== "production" && o === r && C(5), j(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ae(t.assigned_, n) ? i.concat(n) : void 0, u = H(e, o, a);
    if (Be(r, n, u), j(u))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else s && r.add(o);
  if (R(o) && !J(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    H(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && Y(e, o);
  }
}
function Y(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ye(t, r);
}
function Ft(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : We(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, i = me;
  r && (o = [n], i = F);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return n.draft_ = a, n.revoke_ = s, a;
}
var me = {
  get(e, t) {
    if (t === x)
      return e;
    const r = V(e);
    if (!ae(r, t))
      return Lt(e, r, t);
    const n = r[t];
    return e.finalized_ || !R(n) ? n : n === oe(e.base_, t) ? (ie(e), e.copy_[t] = de(n, e)) : n;
  },
  has(e, t) {
    return t in V(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(V(e));
  },
  set(e, t, r) {
    const n = Ke(V(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = oe(V(e), t), i = o == null ? void 0 : o[x];
      if (i && i.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (jt(r, o) && (r !== void 0 || ae(e.base_, t)))
        return !0;
      ie(e), le(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return oe(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ie(e), le(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = V(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    C(11);
  },
  getPrototypeOf(e) {
    return P(e.base_);
  },
  setPrototypeOf() {
    C(12);
  }
}, F = {};
G(me, (e, t) => {
  F[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
F.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && C(13), F.set.call(this, e, t, void 0);
};
F.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && C(14), me.set.call(this, e[0], t, r, e[0]);
};
function oe(e, t) {
  const r = e[x];
  return (r ? V(r) : e)[t];
}
function Lt(e, t, r) {
  var o;
  const n = Ke(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Ke(e, t) {
  if (!(t in e))
    return;
  let r = P(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = P(r);
  }
}
function le(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && le(e.parent_));
}
function ie(e) {
  e.copy_ || (e.copy_ = ue(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Ut = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const i = r;
        r = t;
        const s = this;
        return function(u = i, ...f) {
          return s.produce(u, (c) => r.call(this, c, ...f));
        };
      }
      typeof r != "function" && C(6), n !== void 0 && typeof n != "function" && C(7);
      let o;
      if (R(t)) {
        const i = Ce(this), s = de(t, void 0);
        let a = !0;
        try {
          o = r(s), a = !1;
        } finally {
          a ? ce(i) : fe(i);
        }
        return De(i, n), ke(o, i);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === Le && (o = void 0), this.autoFreeze_ && ye(o, !0), n) {
          const i = [], s = [];
          I("Patches").generateReplacementPatches_(t, o, i, s), n(i, s);
        }
        return o;
      } else
        C(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (s, ...a) => this.produceWithPatches(s, (u) => t(u, ...a));
      let n, o;
      return [this.produce(t, r, (s, a) => {
        n = s, o = a;
      }), n, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    R(e) || C(8), j(e) && (e = Bt(e));
    const t = Ce(this), r = de(e, void 0);
    return r[x].isManual_ = !0, fe(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[x];
    (!r || !r.isManual_) && C(9);
    const { scope_: n } = r;
    return De(n, t), ke(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = I("Patches").applyPatches_;
    return j(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function de(e, t) {
  const r = X(e) ? I("MapSet").proxyMap_(e, t) : Q(e) ? I("MapSet").proxySet_(e, t) : Ft(e, t);
  return (t ? t.scope_ : We()).drafts_.push(r), r;
}
function Bt(e) {
  return j(e) || C(10, e), Ge(e);
}
function Ge(e) {
  if (!R(e) || J(e))
    return e;
  const t = e[x];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = ue(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = ue(e, !0);
  return G(r, (n, o) => {
    Be(r, n, Ge(o));
  }), t && (t.finalized_ = !1), r;
}
var T = new Ut(), He = T.produce;
T.produceWithPatches.bind(
  T
);
T.setAutoFreeze.bind(T);
T.setUseStrictShallowCopy.bind(T);
T.applyPatches.bind(T);
T.createDraft.bind(T);
T.finishDraft.bind(T);
function Ye(e) {
  return ({ dispatch: r, getState: n }) => (o) => (i) => typeof i == "function" ? i(r, n, e) : o(i);
}
var Wt = Ye(), Kt = Ye, Gt = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? K : K.apply(null, arguments);
}, Ht = (e) => e && typeof e.match == "function";
function Te(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? v(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Fe(n) && n.type === e, r;
}
function Yt(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Ht(e);
}
function qt(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function Xt(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = Yt
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(qt(n.type)), r(n));
}
function qe(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const o = Date.now();
      try {
        return n();
      } finally {
        const i = Date.now();
        r += i - o;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Xe = class $ extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, $.prototype);
  }
  static get [Symbol.species]() {
    return $;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new $(...t[0].concat(this)) : new $(...t.concat(this));
  }
};
function Re(e) {
  return R(e) ? He(e, () => {
  }) : e;
}
function Ae(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function Qt(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Jt(e, t, r) {
  const n = Qe(e, t, r);
  return {
    detectMutations() {
      return Je(e, t, n, r);
    }
  };
}
function Qe(e, t = [], r, n = "", o = /* @__PURE__ */ new Set()) {
  const i = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), i.children = {};
    for (const s in r) {
      const a = n ? n + "." + s : s;
      t.length && t.indexOf(a) !== -1 || (i.children[s] = Qe(e, t, r[s], a));
    }
  }
  return i;
}
function Je(e, t = [], r, n, o = !1, i = "") {
  const s = r ? r.value : void 0, a = s === n;
  if (o && !a && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: i
    };
  if (e(s) || e(n))
    return {
      wasMutated: !1
    };
  const u = {};
  for (let c in r.children)
    u[c] = !0;
  for (let c in n)
    u[c] = !0;
  const f = t.length > 0;
  for (let c in u) {
    const l = i ? i + "." + c : c;
    if (f && t.some((h) => h instanceof RegExp ? h.test(l) : l === h))
      continue;
    const d = Je(e, t, r.children[c], n[c], a, l);
    if (d.wasMutated)
      return d;
  }
  return {
    wasMutated: !1
  };
}
function Zt(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(a, u, f, c) {
      return JSON.stringify(a, r(u, c), f);
    }, r = function(a, u) {
      let f = [], c = [];
      return u || (u = function(l, d) {
        return f[0] === d ? "[Circular ~]" : "[Circular ~." + c.slice(0, f.indexOf(d)).join(".") + "]";
      }), function(l, d) {
        if (f.length > 0) {
          var p = f.indexOf(this);
          ~p ? f.splice(p + 1) : f.push(this), ~p ? c.splice(p, 1 / 0, l) : c.push(l), ~f.indexOf(d) && (d = u.call(this, l, d));
        } else f.push(d);
        return a == null ? d : a.call(this, l, d);
      };
    }, {
      isImmutable: n = Qt,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const s = Jt.bind(null, n, o);
    return ({
      getState: a
    }) => {
      let u = a(), f = s(u), c;
      return (l) => (d) => {
        const p = qe(i, "ImmutableStateInvariantMiddleware");
        p.measureTime(() => {
          if (u = a(), c = f.detectMutations(), f = s(u), c.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? v(19) : `A state mutation was detected between dispatches, in the path '${c.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const h = l(d);
        return p.measureTime(() => {
          if (u = a(), c = f.detectMutations(), f = s(u), c.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? v(20) : `A state mutation was detected inside a dispatch, in the path: ${c.path || ""}. Take a look at the reducer(s) handling the action ${t(d)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), p.warnIfExceeded(), h;
      };
    };
  }
}
function Ze(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || L(e);
}
function pe(e, t = "", r = Ze, n, o = [], i) {
  let s;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || i != null && i.has(e)) return !1;
  const a = n != null ? n(e) : Object.entries(e), u = o.length > 0;
  for (const [f, c] of a) {
    const l = t ? t + "." + f : f;
    if (!(u && o.some((p) => p instanceof RegExp ? p.test(l) : l === p))) {
      if (!r(c))
        return {
          keyPath: l,
          value: c
        };
      if (typeof c == "object" && (s = pe(c, l, r, n, o, i), s))
        return s;
    }
  }
  return i && et(e) && i.add(e), !1;
}
function et(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !et(t))
      return !1;
  return !0;
}
function er(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = Ze,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: i = [],
      warnAfter: s = 32,
      ignoreState: a = !1,
      ignoreActions: u = !1,
      disableCache: f = !1
    } = e, c = !f && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (l) => (d) => (p) => {
      if (!Fe(p))
        return d(p);
      const h = d(p), g = qe(s, "SerializableStateInvariantMiddleware");
      return !u && !(n.length && n.indexOf(p.type) !== -1) && g.measureTime(() => {
        const y = pe(p, "", t, r, o, c);
        if (y) {
          const {
            keyPath: w,
            value: _
          } = y;
          console.error(`A non-serializable value was detected in an action, in the path: \`${w}\`. Value:`, _, `
Take a look at the logic that dispatched this action: `, p, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), a || (g.measureTime(() => {
        const y = l.getState(), w = pe(y, "", t, r, i, c);
        if (w) {
          const {
            keyPath: _,
            value: m
          } = w;
          console.error(`A non-serializable value was detected in the state, in the path: \`${_}\`. Value:`, m, `
Take a look at the reducer(s) handling this action type: ${p.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), g.warnIfExceeded()), h;
    };
  }
}
function U(e) {
  return typeof e == "boolean";
}
var tr = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new Xe();
  if (r && (U(r) ? s.push(Wt) : s.push(Kt(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let a = {};
      U(n) || (a = n), s.unshift(Zt(a));
    }
    if (o) {
      let a = {};
      U(o) || (a = o), s.push(er(a));
    }
    if (i) {
      let a = {};
      U(i) || (a = i), s.unshift(Xt(a));
    }
  }
  return s;
}, rr = "RTK_autoBatch", Ve = (e) => (t) => {
  setTimeout(t, e);
}, nr = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), u = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Ve(10)
  ) : e.type === "callback" ? e.queueNotification : Ve(e.timeout), f = () => {
    s = !1, i && (i = !1, a.forEach((c) => c()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(c) {
      const l = () => o && c(), d = n.subscribe(l);
      return a.add(c), () => {
        d(), a.delete(c);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(c) {
      var l;
      try {
        return o = !((l = c == null ? void 0 : c.meta) != null && l[rr]), i = !o, i && (s || (s = !0, u(f))), n.dispatch(c);
      } finally {
        o = !0;
      }
    }
  });
}, or = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new Xe(e);
  return n && o.push(nr(typeof n == "object" ? n : void 0)), o;
};
function ir(e) {
  const t = tr(), {
    reducer: r = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof r == "function")
    a = r;
  else if (L(r))
    a = ze(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? v(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? v(2) : "`middleware` field must be a callback");
  let u;
  if (typeof n == "function") {
    if (u = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(u))
      throw new Error(process.env.NODE_ENV === "production" ? v(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    u = t();
  if (process.env.NODE_ENV !== "production" && u.some((h) => typeof h != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? v(4) : "each middleware provided to configureStore must be a function");
  let f = K;
  o && (f = Gt({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const c = At(...u), l = or(c);
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? v(5) : "`enhancers` field must be a callback");
  let d = typeof s == "function" ? s(l) : l();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(d))
    throw new Error(process.env.NODE_ENV === "production" ? v(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && d.some((h) => typeof h != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? v(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && u.length && !d.includes(c) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const p = f(...d);
  return $e(a, i, p);
}
function tt(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(i, s) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? v(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? v(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(process.env.NODE_ENV === "production" ? v(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in t)
        throw new Error(process.env.NODE_ENV === "production" ? v(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return t[a] = s, o;
    },
    addMatcher(i, s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? v(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: i,
        reducer: s
      }), o;
    },
    addDefaultCase(i) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? v(31) : "`builder.addDefaultCase` can only be called once");
      return n = i, o;
    }
  };
  return e(o), [t, r, n];
}
function sr(e) {
  return typeof e == "function";
}
function ar(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? v(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = tt(t), i;
  if (sr(e))
    i = () => Re(e());
  else {
    const a = Re(e);
    i = () => a;
  }
  function s(a = i(), u) {
    let f = [r[u.type], ...n.filter(({
      matcher: c
    }) => c(u)).map(({
      reducer: c
    }) => c)];
    return f.filter((c) => !!c).length === 0 && (f = [o]), f.reduce((c, l) => {
      if (l)
        if (j(c)) {
          const p = l(c, u);
          return p === void 0 ? c : p;
        } else {
          if (R(c))
            return He(c, (d) => l(d, u));
          {
            const d = l(c, u);
            if (d === void 0) {
              if (c === null)
                return c;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return d;
          }
        }
      return c;
    }, a);
  }
  return s.getInitialState = i, s;
}
var ur = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function cr(e, t) {
  return `${e}/${t}`;
}
function fr({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[ur];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? v(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof o.reducers == "function" ? o.reducers(pr()) : o.reducers) || {}, u = Object.keys(a), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(m, b) {
        const E = typeof m == "string" ? m : m.type;
        if (!E)
          throw new Error(process.env.NODE_ENV === "production" ? v(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in f.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? v(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return f.sliceCaseReducersByType[E] = b, c;
      },
      addMatcher(m, b) {
        return f.sliceMatchers.push({
          matcher: m,
          reducer: b
        }), c;
      },
      exposeAction(m, b) {
        return f.actionCreators[m] = b, c;
      },
      exposeCaseReducer(m, b) {
        return f.sliceCaseReducersByName[m] = b, c;
      }
    };
    u.forEach((m) => {
      const b = a[m], E = {
        reducerName: m,
        type: cr(i, m),
        createNotation: typeof o.reducers == "function"
      };
      yr(b) ? Er(E, b, c, t) : hr(E, b, c);
    });
    function l() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? v(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [m = {}, b = [], E = void 0] = typeof o.extraReducers == "function" ? tt(o.extraReducers) : [o.extraReducers], N = {
        ...m,
        ...f.sliceCaseReducersByType
      };
      return ar(o.initialState, (S) => {
        for (let D in N)
          S.addCase(D, N[D]);
        for (let D of f.sliceMatchers)
          S.addMatcher(D.matcher, D.reducer);
        for (let D of b)
          S.addMatcher(D.matcher, D.reducer);
        E && S.addDefaultCase(E);
      });
    }
    const d = (m) => m, p = /* @__PURE__ */ new Map();
    let h;
    function g(m, b) {
      return h || (h = l()), h(m, b);
    }
    function y() {
      return h || (h = l()), h.getInitialState();
    }
    function w(m, b = !1) {
      function E(S) {
        let D = S[m];
        if (typeof D > "u") {
          if (b)
            D = y();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? v(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return D;
      }
      function N(S = d) {
        const D = Ae(p, b, () => /* @__PURE__ */ new WeakMap());
        return Ae(D, S, () => {
          const Ee = {};
          for (const [nt, ot] of Object.entries(o.selectors ?? {}))
            Ee[nt] = lr(ot, S, y, b);
          return Ee;
        });
      }
      return {
        reducerPath: m,
        getSelectors: N,
        get selectors() {
          return N(E);
        },
        selectSlice: E
      };
    }
    const _ = {
      name: i,
      reducer: g,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: y,
      ...w(s),
      injectInto(m, {
        reducerPath: b,
        ...E
      } = {}) {
        const N = b ?? s;
        return m.inject({
          reducerPath: N,
          reducer: g
        }, E), {
          ..._,
          ...w(N, !0)
        };
      }
    };
    return _;
  };
}
function lr(e, t, r, n) {
  function o(i, ...s) {
    let a = t(i);
    if (typeof a > "u") {
      if (n)
        a = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? v(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var dr = /* @__PURE__ */ fr();
function pr() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function hr({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let i, s;
  if ("reducer" in n) {
    if (r && !mr(n))
      throw new Error(process.env.NODE_ENV === "production" ? v(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = n.reducer, s = n.prepare;
  } else
    i = n;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? Te(e, s) : Te(e));
}
function yr(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function mr(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Er({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? v(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: a,
    rejected: u,
    settled: f,
    options: c
  } = r, l = o(e, i, c);
  n.exposeAction(t, l), s && n.addCase(l.fulfilled, s), a && n.addCase(l.pending, a), u && n.addCase(l.rejected, u), f && n.addMatcher(l.settled, f), n.exposeCaseReducer(t, {
    fulfilled: s || B,
    pending: a || B,
    rejected: u || B,
    settled: f || B
  });
}
function B() {
}
function v(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const rt = dr({
  name: "StateReducer",
  initialState: {},
  reducers: {
    append: (e, t) => {
      Array.isArray(t.payload.data) ? e[t.payload.state] = [
        ...e[t.payload.state] ?? [],
        ...t.payload.data
      ] : e[t.payload.state] = {
        ...e[t.payload.state] ?? {},
        ...t.payload.data
      };
    },
    update: (e, t) => {
      Array.isArray(t.payload.data) ? e[t.payload.state] = [...t.payload.data] : e[t.payload.state] = {
        ...t.payload.data
      };
    },
    upsert: (e, t) => {
      let { data: r, active_state: n, type: o } = t.payload;
      return (e[n] ?? null) === null && (e[n] = {}), o == "at" && we(e[n]).at(...r), o == "general" && we(e[n], r), e;
    },
    removeState: (e, t) => {
      let { active_state: r } = t.payload;
      return (e[r] ?? null) === null && (e[r] = {}), delete e[r], e;
    },
    set: (e, t) => {
      Array.isArray(t.payload.data) ? e[t.payload.state] = [
        ...e[t.payload.state],
        ...t.payload.data
      ] : e[t.payload.state] = {
        ...e[t.payload.state],
        ...t.payload.data
      };
    }
  }
}), { ...Nr } = rt.actions, br = rt.reducer, wr = ze({
  This: br
}), Or = ir(
  {
    reducer: wr,
    middleware: (e) => e({
      serializableCheck: !1
      // Disables serializability check
    })
  }
  // applyMiddleware(functionMiddleware)
);
export {
  gr as P,
  Nr as S,
  Or as _,
  be as c,
  vr as u
};
//# sourceMappingURL=store-ChqbPtdO.js.map
