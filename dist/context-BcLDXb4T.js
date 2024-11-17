import { createContext as it } from "react";
function st(e) {
  return e.replace(/[\[\]'"]/g, "").split(".");
}
const be = (e, t) => {
  let r = Math.floor(Math.random() * 1e6), n = typeof t == "string" ? st(t) : t;
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
function xe(e, t, r, n = !1, o, i = []) {
  const s = t;
  if (t.length <= 1) {
    if (t.length > 0)
      try {
        return e[t[0]] = n ? r(e[t[0] ?? t]) : r, e;
      } catch {
        throw `Setting Failed at index ${t[0]} of [${i.join(
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
  let c = (e ?? [])[t[0]] ?? !1;
  if (!c) {
    let u = Ie(t, r, n);
    try {
      e[t[0]] = u;
    } catch {
      throw `Setting Failed at index ${t[0]} of [${i.join(
        " => "
      )}] due to the type ${typeof e}, Only array or object is assignable`;
    }
    return e;
  }
  return t.shift(), xe(c, t, r, n, o, [
    ...i,
    s[0]
  ]);
}
function Ie(e, t, r = !1) {
  let n = [...e], o;
  return n.length == 1 ? o = r ? t(null) : t : (o = {}, n.shift(), o[n[0]] = Ie(n, t, r)), o;
}
function Me({ obj: e }, t, r = [], n = !1) {
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
      const c = Me(
        { obj: s },
        t,
        [...r, i],
        !0
      );
      o = o.concat(c.obj);
    }
  }
  return n ? { obj: o } : {
    result: o
  };
}
function ct(e, t, r = { returnType: "object" }) {
  let { result: n } = Me({ obj: t }, "$$@@@@__upsert_hook");
  for (let o = 0; o < n.length; o++) {
    let i = n[o];
    xe(
      e,
      i.index,
      i.value,
      i.isFunction,
      r
    );
  }
}
function at(e, ...t) {
  let r = {
    returnType: "object"
  };
  const n = Array.isArray(e);
  n && (r.returnType = "array");
  for (let o of t)
    ct(e, o, r);
  try {
    return n ? [...e] : { ...e };
  } catch {
    throw Error(
      `Cannot return value as returnType '${r.returnType}'. Please try '${r.returnType == "array" ? "OBJECT" : "ARRAY"}' returnType, ERROR: RETURN_ERROR.`
    );
  }
}
const je = {};
let ut = 0;
function xr(e) {
  const t = `__func_${ut++}__`;
  return je[t] = e, t;
}
function ft(e) {
  return je[e];
}
function O(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var dt = typeof Symbol == "function" && Symbol.observable || "@@observable", _e = dt, ie = () => Math.random().toString(36).substring(7).split("").join("."), lt = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ie()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ie()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ie()}`
}, $ = lt;
function K(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function pt(e) {
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
  if (mt(e))
    return "date";
  if (yt(e))
    return "error";
  const r = ht(e);
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
function ht(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function yt(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function mt(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function I(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = pt(e)), t;
}
function $e(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? O(2) : `Expected the root reducer to be a function. Instead, received: '${I(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? O(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? O(1) : `Expected the enhancer to be a function. Instead, received: '${I(r)}'`);
    return r($e)(e, t);
  }
  let n = e, o = t, i = /* @__PURE__ */ new Map(), s = i, c = 0, u = !1;
  function f() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((p, _) => {
      s.set(_, p);
    }));
  }
  function a() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? O(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function d(p) {
    if (typeof p != "function")
      throw new Error(process.env.NODE_ENV === "production" ? O(4) : `Expected the listener to be a function. Instead, received: '${I(p)}'`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? O(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let _ = !0;
    f();
    const g = c++;
    return s.set(g, p), function() {
      if (_) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? O(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        _ = !1, f(), s.delete(g), i = null;
      }
    };
  }
  function l(p) {
    if (!K(p))
      throw new Error(process.env.NODE_ENV === "production" ? O(7) : `Actions must be plain objects. Instead, the actual type was: '${I(p)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof p.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? O(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof p.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? O(17) : `Action "type" property must be a string. Instead, the actual type was: '${I(p.type)}'. Value was: '${p.type}' (stringified)`);
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? O(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, o = n(o, p);
    } finally {
      u = !1;
    }
    return (i = s).forEach((g) => {
      g();
    }), p;
  }
  function h(p) {
    if (typeof p != "function")
      throw new Error(process.env.NODE_ENV === "production" ? O(10) : `Expected the nextReducer to be a function. Instead, received: '${I(p)}`);
    n = p, l({
      type: $.REPLACE
    });
  }
  function y() {
    const p = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(_) {
        if (typeof _ != "object" || _ === null)
          throw new Error(process.env.NODE_ENV === "production" ? O(11) : `Expected the observer to be an object. Instead, received: '${I(_)}'`);
        function g() {
          const E = _;
          E.next && E.next(a());
        }
        return g(), {
          unsubscribe: p(g)
        };
      },
      [_e]() {
        return this;
      }
    };
  }
  return l({
    type: $.INIT
  }), {
    dispatch: l,
    subscribe: d,
    getState: a,
    replaceReducer: h,
    [_e]: y
  };
}
function ge(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function wt(e, t, r, n) {
  const o = Object.keys(t), i = r && r.type === $.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!K(e))
    return `The ${i} has unexpected type of "${I(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const s = Object.keys(e).filter((c) => !t.hasOwnProperty(c) && !n[c]);
  if (s.forEach((c) => {
    n[c] = !0;
  }), !(r && r.type === $.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function Et(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: $.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? O(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: $.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? O(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${$.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Pe(e) {
  const t = Object.keys(e), r = {};
  for (let s = 0; s < t.length; s++) {
    const c = t[s];
    process.env.NODE_ENV !== "production" && typeof e[c] > "u" && ge(`No reducer provided for key "${c}"`), typeof e[c] == "function" && (r[c] = e[c]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    Et(r);
  } catch (s) {
    i = s;
  }
  return function(c = {}, u) {
    if (i)
      throw i;
    if (process.env.NODE_ENV !== "production") {
      const d = wt(c, r, u, o);
      d && ge(d);
    }
    let f = !1;
    const a = {};
    for (let d = 0; d < n.length; d++) {
      const l = n[d], h = r[l], y = c[l], b = h(y, u);
      if (typeof b > "u") {
        const p = u && u.type;
        throw new Error(process.env.NODE_ENV === "production" ? O(14) : `When called with an action of type ${p ? `"${String(p)}"` : "(unknown type)"}, the slice reducer for key "${l}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      a[l] = b, f = f || b !== y;
    }
    return f = f || n.length !== Object.keys(c).length, f ? a : c;
  };
}
function G(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function bt(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? O(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const s = {
      getState: o.getState,
      dispatch: (u, ...f) => i(u, ...f)
    }, c = e.map((u) => u(s));
    return i = G(...c)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Ve(e) {
  return K(e) && "type" in e && typeof e.type == "string";
}
var ze = Symbol.for("immer-nothing"), Ne = Symbol.for("immer-draftable"), k = Symbol.for("immer-state"), _t = process.env.NODE_ENV !== "production" ? [
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
function D(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = _t[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var V = Object.getPrototypeOf;
function M(e) {
  return !!e && !!e[k];
}
function R(e) {
  var t;
  return e ? Fe(e) || Array.isArray(e) || !!e[Ne] || !!((t = e.constructor) != null && t[Ne]) || ee(e) || te(e) : !1;
}
var gt = Object.prototype.constructor.toString();
function Fe(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = V(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === gt;
}
function H(e, t) {
  Z(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Z(e) {
  const t = e[k];
  return t ? t.type_ : Array.isArray(e) ? 1 : ee(e) ? 2 : te(e) ? 3 : 0;
}
function ae(e, t) {
  return Z(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ue(e, t, r) {
  const n = Z(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Nt(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ee(e) {
  return e instanceof Map;
}
function te(e) {
  return e instanceof Set;
}
function j(e) {
  return e.copy_ || e.base_;
}
function ue(e, t) {
  if (ee(e))
    return new Map(e);
  if (te(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Fe(e))
    return V(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[k];
  let n = Reflect.ownKeys(r);
  for (let o = 0; o < n.length; o++) {
    const i = n[o], s = r[i];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[i] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
      value: e[i]
    });
  }
  return Object.create(V(e), r);
}
function ye(e, t = !1) {
  return re(e) || M(e) || !R(e) || (Z(e) > 1 && (e.set = e.add = e.clear = e.delete = vt), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => ye(n, !0))), e;
}
function vt() {
  D(2);
}
function re(e) {
  return Object.isFrozen(e);
}
var Ot = {};
function P(e) {
  const t = Ot[e];
  return t || D(0, e), t;
}
var W;
function We() {
  return W;
}
function Dt(e, t) {
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
function ve(e, t) {
  t && (P("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function fe(e) {
  de(e), e.drafts_.forEach(St), e.drafts_ = null;
}
function de(e) {
  e === W && (W = e.parent_);
}
function Oe(e) {
  return W = Dt(W, e);
}
function St(e) {
  const t = e[k];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function De(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[k].modified_ && (fe(t), D(4)), R(e) && (e = Q(t, e), t.parent_ || J(t, e)), t.patches_ && P("Patches").generateReplacementPatches_(
    r[k].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Q(t, r, []), fe(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== ze ? e : void 0;
}
function Q(e, t, r) {
  if (re(t))
    return t;
  const n = t[k];
  if (!n)
    return H(
      t,
      (o, i) => Se(e, n, t, o, i, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return J(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o, s = !1;
    n.type_ === 3 && (i = new Set(o), o.clear(), s = !0), H(
      i,
      (c, u) => Se(e, n, o, c, u, r, s)
    ), J(e, o, !1), r && e.patches_ && P("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Se(e, t, r, n, o, i, s) {
  if (process.env.NODE_ENV !== "production" && o === r && D(5), M(o)) {
    const c = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ae(t.assigned_, n) ? i.concat(n) : void 0, u = Q(e, o, c);
    if (Ue(r, n, u), M(u))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && r.add(o);
  if (R(o) && !re(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Q(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && J(e, o);
  }
}
function J(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ye(t, r);
}
function kt(e, t) {
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
  r && (o = [n], i = L);
  const { revoke: s, proxy: c } = Proxy.revocable(o, i);
  return n.draft_ = c, n.revoke_ = s, c;
}
var me = {
  get(e, t) {
    if (t === k)
      return e;
    const r = j(e);
    if (!ae(r, t))
      return Tt(e, r, t);
    const n = r[t];
    return e.finalized_ || !R(n) ? n : n === se(e.base_, t) ? (ce(e), e.copy_[t] = pe(n, e)) : n;
  },
  has(e, t) {
    return t in j(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(j(e));
  },
  set(e, t, r) {
    const n = Le(j(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = se(j(e), t), i = o == null ? void 0 : o[k];
      if (i && i.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Nt(r, o) && (r !== void 0 || ae(e.base_, t)))
        return !0;
      ce(e), le(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return se(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ce(e), le(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = j(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    D(11);
  },
  getPrototypeOf(e) {
    return V(e.base_);
  },
  setPrototypeOf() {
    D(12);
  }
}, L = {};
H(me, (e, t) => {
  L[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
L.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && D(13), L.set.call(this, e, t, void 0);
};
L.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && D(14), me.set.call(this, e[0], t, r, e[0]);
};
function se(e, t) {
  const r = e[k];
  return (r ? j(r) : e)[t];
}
function Tt(e, t, r) {
  var o;
  const n = Le(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Le(e, t) {
  if (!(t in e))
    return;
  let r = V(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = V(r);
  }
}
function le(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && le(e.parent_));
}
function ce(e) {
  e.copy_ || (e.copy_ = ue(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Ct = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const i = r;
        r = t;
        const s = this;
        return function(u = i, ...f) {
          return s.produce(u, (a) => r.call(this, a, ...f));
        };
      }
      typeof r != "function" && D(6), n !== void 0 && typeof n != "function" && D(7);
      let o;
      if (R(t)) {
        const i = Oe(this), s = pe(t, void 0);
        let c = !0;
        try {
          o = r(s), c = !1;
        } finally {
          c ? fe(i) : de(i);
        }
        return ve(i, n), De(o, i);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === ze && (o = void 0), this.autoFreeze_ && ye(o, !0), n) {
          const i = [], s = [];
          P("Patches").generateReplacementPatches_(t, o, i, s), n(i, s);
        }
        return o;
      } else
        D(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (s, ...c) => this.produceWithPatches(s, (u) => t(u, ...c));
      let n, o;
      return [this.produce(t, r, (s, c) => {
        n = s, o = c;
      }), n, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    R(e) || D(8), M(e) && (e = Be(e));
    const t = Oe(this), r = pe(e, void 0);
    return r[k].isManual_ = !0, de(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[k];
    (!r || !r.isManual_) && D(9);
    const { scope_: n } = r;
    return ve(n, t), De(void 0, n);
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
    const n = P("Patches").applyPatches_;
    return M(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function pe(e, t) {
  const r = ee(e) ? P("MapSet").proxyMap_(e, t) : te(e) ? P("MapSet").proxySet_(e, t) : kt(e, t);
  return (t ? t.scope_ : We()).drafts_.push(r), r;
}
function Be(e) {
  return M(e) || D(10, e), Ke(e);
}
function Ke(e) {
  if (!R(e) || re(e))
    return e;
  const t = e[k];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = ue(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = ue(e, !0);
  return H(r, (n, o) => {
    Ue(r, n, Ke(o));
  }), t && (t.finalized_ = !1), r;
}
var T = new Ct(), qe = T.produce;
T.produceWithPatches.bind(
  T
);
T.setAutoFreeze.bind(T);
T.setUseStrictShallowCopy.bind(T);
T.applyPatches.bind(T);
T.createDraft.bind(T);
T.finishDraft.bind(T);
var At = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const o = {};
      e(o) === o && (n = !0);
    } catch {
    }
    if (n) {
      let o;
      try {
        throw new Error();
      } catch (i) {
        ({ stack: o } = i);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: o }
      );
    }
  }
}, Rt = (e, t, r) => {
  const { memoize: n, memoizeOptions: o } = t, { inputSelectorResults: i, inputSelectorResultsCopy: s } = e, c = n(() => ({}), ...o);
  if (!(c.apply(null, i) === c.apply(null, s))) {
    let f;
    try {
      throw new Error();
    } catch (a) {
      ({ stack: f } = a);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: i,
        secondInputs: s,
        stack: f
      }
    );
  }
}, xt = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function It(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Mt(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function jt(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var ke = (e) => Array.isArray(e) ? e : [e];
function $t(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return jt(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Te(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var Pt = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...xt,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: At
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: Rt
    }
  };
}, Vt = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, zt = typeof WeakRef < "u" ? WeakRef : Vt, Ft = 0, Ce = 1;
function q() {
  return {
    s: Ft,
    v: void 0,
    o: null,
    p: null
  };
}
function we(e, t = {}) {
  let r = q();
  const { resultEqualityCheck: n } = t;
  let o, i = 0;
  function s() {
    var d;
    let c = r;
    const { length: u } = arguments;
    for (let l = 0, h = u; l < h; l++) {
      const y = arguments[l];
      if (typeof y == "function" || typeof y == "object" && y !== null) {
        let b = c.o;
        b === null && (c.o = b = /* @__PURE__ */ new WeakMap());
        const p = b.get(y);
        p === void 0 ? (c = q(), b.set(y, c)) : c = p;
      } else {
        let b = c.p;
        b === null && (c.p = b = /* @__PURE__ */ new Map());
        const p = b.get(y);
        p === void 0 ? (c = q(), b.set(y, c)) : c = p;
      }
    }
    const f = c;
    let a;
    if (c.s === Ce ? a = c.v : (a = e.apply(null, arguments), i++), f.s = Ce, n) {
      const l = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      l != null && n(l, a) && (a = l, i !== 0 && i--), o = typeof a == "object" && a !== null || typeof a == "function" ? new zt(a) : a;
    }
    return f.v = a, a;
  }
  return s.clearCache = () => {
    r = q(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function Ye(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...o) => {
    let i = 0, s = 0, c, u = {}, f = o.pop();
    typeof f == "object" && (u = f, f = o.pop()), It(
      f,
      `createSelector expects an output function after the inputs, but received: [${typeof f}]`
    );
    const a = {
      ...r,
      ...u
    }, {
      memoize: d,
      memoizeOptions: l = [],
      argsMemoize: h = we,
      argsMemoizeOptions: y = [],
      devModeChecks: b = {}
    } = a, p = ke(l), _ = ke(y), g = $t(o), m = d(function() {
      return i++, f.apply(
        null,
        arguments
      );
    }, ...p);
    let E = !0;
    const N = h(function() {
      s++;
      const S = Te(
        g,
        arguments
      );
      if (c = m.apply(null, S), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: v, inputStabilityCheck: F } = Pt(E, b);
        if (v.shouldRun && v.run(
          f,
          S,
          c
        ), F.shouldRun) {
          const oe = Te(
            g,
            arguments
          );
          F.run(
            { inputSelectorResults: S, inputSelectorResultsCopy: oe },
            { memoize: d, memoizeOptions: p },
            arguments
          );
        }
        E && (E = !1);
      }
      return c;
    }, ..._);
    return Object.assign(N, {
      resultFunc: f,
      memoizedResultFunc: m,
      dependencies: g,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => c,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: d,
      argsMemoize: h
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Ut = /* @__PURE__ */ Ye(we), Wt = Object.assign(
  (e, t = Ut) => {
    Mt(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (i) => e[i]
    );
    return t(
      n,
      (...i) => i.reduce((s, c, u) => (s[r[u]] = c, s), {})
    );
  },
  { withTypes: () => Wt }
);
function Xe(e) {
  return ({ dispatch: r, getState: n }) => (o) => (i) => typeof i == "function" ? i(r, n, e) : o(i);
}
var Lt = Xe(), Bt = Xe, Kt = (...e) => {
  const t = Ye(...e), r = Object.assign((...n) => {
    const o = t(...n), i = (s, ...c) => o(M(s) ? Be(s) : s, ...c);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => r
  });
  return r;
};
Kt(we);
var qt = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? G : G.apply(null, arguments);
}, Yt = (e) => e && typeof e.match == "function";
function z(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? w(0) : "prepareAction did not return an object");
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Ve(n) && n.type === e, r;
}
function Xt(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Yt(e);
}
function Gt(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function Ht(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = Xt
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(Gt(n.type)), r(n));
}
function Ge(e, t) {
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
var He = class U extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, U.prototype);
  }
  static get [Symbol.species]() {
    return U;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new U(...t[0].concat(this)) : new U(...t.concat(this));
  }
};
function Ae(e) {
  return R(e) ? qe(e, () => {
  }) : e;
}
function Re(e, t, r) {
  if (e.has(t)) {
    let o = e.get(t);
    return r.update && (o = r.update(o, t, e), e.set(t, o)), o;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? w(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
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
      const c = n ? n + "." + s : s;
      t.length && t.indexOf(c) !== -1 || (i.children[s] = Qe(e, t, r[s], c));
    }
  }
  return i;
}
function Je(e, t = [], r, n, o = !1, i = "") {
  const s = r ? r.value : void 0, c = s === n;
  if (o && !c && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: i
    };
  if (e(s) || e(n))
    return {
      wasMutated: !1
    };
  const u = {};
  for (let a in r.children)
    u[a] = !0;
  for (let a in n)
    u[a] = !0;
  const f = t.length > 0;
  for (let a in u) {
    const d = i ? i + "." + a : a;
    if (f && t.some((y) => y instanceof RegExp ? y.test(d) : d === y))
      continue;
    const l = Je(e, t, r.children[a], n[a], c, d);
    if (l.wasMutated)
      return l;
  }
  return {
    wasMutated: !1
  };
}
function Zt(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(c, u, f, a) {
      return JSON.stringify(c, r(u, a), f);
    }, r = function(c, u) {
      let f = [], a = [];
      return u || (u = function(d, l) {
        return f[0] === l ? "[Circular ~]" : "[Circular ~." + a.slice(0, f.indexOf(l)).join(".") + "]";
      }), function(d, l) {
        if (f.length > 0) {
          var h = f.indexOf(this);
          ~h ? f.splice(h + 1) : f.push(this), ~h ? a.splice(h, 1 / 0, d) : a.push(d), ~f.indexOf(l) && (l = u.call(this, d, l));
        } else
          f.push(l);
        return c == null ? l : c.call(this, d, l);
      };
    }, {
      isImmutable: n = Qt,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const s = Jt.bind(null, n, o);
    return ({
      getState: c
    }) => {
      let u = c(), f = s(u), a;
      return (d) => (l) => {
        const h = Ge(i, "ImmutableStateInvariantMiddleware");
        h.measureTime(() => {
          if (u = c(), a = f.detectMutations(), f = s(u), a.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? w(19) : `A state mutation was detected between dispatches, in the path '${a.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const y = d(l);
        return h.measureTime(() => {
          if (u = c(), a = f.detectMutations(), f = s(u), a.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? w(20) : `A state mutation was detected inside a dispatch, in the path: ${a.path || ""}. Take a look at the reducer(s) handling the action ${t(l)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), h.warnIfExceeded(), y;
      };
    };
  }
}
function Ze(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || K(e);
}
function he(e, t = "", r = Ze, n, o = [], i) {
  let s;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || i != null && i.has(e))
    return !1;
  const c = n != null ? n(e) : Object.entries(e), u = o.length > 0;
  for (const [f, a] of c) {
    const d = t ? t + "." + f : f;
    if (!(u && o.some((h) => h instanceof RegExp ? h.test(d) : d === h))) {
      if (!r(a))
        return {
          keyPath: d,
          value: a
        };
      if (typeof a == "object" && (s = he(a, d, r, n, o, i), s))
        return s;
    }
  }
  return i && et(e) && i.add(e), !1;
}
function et(e) {
  if (!Object.isFrozen(e))
    return !1;
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
      ignoreState: c = !1,
      ignoreActions: u = !1,
      disableCache: f = !1
    } = e, a = !f && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (l) => (h) => {
      if (!Ve(h))
        return l(h);
      const y = l(h), b = Ge(s, "SerializableStateInvariantMiddleware");
      return !u && !(n.length && n.indexOf(h.type) !== -1) && b.measureTime(() => {
        const p = he(h, "", t, r, o, a);
        if (p) {
          const {
            keyPath: _,
            value: g
          } = p;
          console.error(`A non-serializable value was detected in an action, in the path: \`${_}\`. Value:`, g, `
Take a look at the logic that dispatched this action: `, h, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), c || (b.measureTime(() => {
        const p = d.getState(), _ = he(p, "", t, r, i, a);
        if (_) {
          const {
            keyPath: g,
            value: m
          } = _;
          console.error(`A non-serializable value was detected in the state, in the path: \`${g}\`. Value:`, m, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), b.warnIfExceeded()), y;
    };
  }
}
function Y(e) {
  return typeof e == "boolean";
}
var tr = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new He();
  if (r && (Y(r) ? s.push(Lt) : s.push(Bt(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let c = {};
      Y(n) || (c = n), s.unshift(Zt(c));
    }
    if (o) {
      let c = {};
      Y(o) || (c = o), s.push(er(c));
    }
    if (i) {
      let c = {};
      Y(i) || (c = i), s.unshift(Ht(c));
    }
  }
  return s;
}, rr = "RTK_autoBatch", tt = (e) => (t) => {
  setTimeout(t, e);
}, nr = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : tt(10), or = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, i = !1, s = !1;
  const c = /* @__PURE__ */ new Set(), u = e.type === "tick" ? queueMicrotask : e.type === "raf" ? nr : e.type === "callback" ? e.queueNotification : tt(e.timeout), f = () => {
    s = !1, i && (i = !1, c.forEach((a) => a()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(a) {
      const d = () => o && a(), l = n.subscribe(d);
      return c.add(a), () => {
        l(), c.delete(a);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(a) {
      var d;
      try {
        return o = !((d = a == null ? void 0 : a.meta) != null && d[rr]), i = !o, i && (s || (s = !0, u(f))), n.dispatch(a);
      } finally {
        o = !0;
      }
    }
  });
}, ir = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new He(e);
  return n && o.push(or(typeof n == "object" ? n : void 0)), o;
}, x = process.env.NODE_ENV === "production";
function sr(e) {
  const t = tr(), {
    reducer: r = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let c;
  if (typeof r == "function")
    c = r;
  else if (K(r))
    c = Pe(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? w(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!x && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? w(2) : "`middleware` field must be a callback");
  let u;
  if (typeof n == "function") {
    if (u = n(t), !x && !Array.isArray(u))
      throw new Error(process.env.NODE_ENV === "production" ? w(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    u = t();
  if (!x && u.some((y) => typeof y != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? w(4) : "each middleware provided to configureStore must be a function");
  let f = G;
  o && (f = qt({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !x,
    ...typeof o == "object" && o
  }));
  const a = bt(...u), d = ir(a);
  if (!x && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? w(5) : "`enhancers` field must be a callback");
  let l = typeof s == "function" ? s(d) : d();
  if (!x && !Array.isArray(l))
    throw new Error(process.env.NODE_ENV === "production" ? w(6) : "`enhancers` callback must return an array");
  if (!x && l.some((y) => typeof y != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? w(7) : "each enhancer provided to configureStore must be a function");
  !x && u.length && !l.includes(a) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const h = f(...l);
  return $e(c, i, h);
}
function rt(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(i, s) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? w(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? w(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const c = typeof i == "string" ? i : i.type;
      if (!c)
        throw new Error(process.env.NODE_ENV === "production" ? w(28) : "`builder.addCase` cannot be called with an empty action type");
      if (c in t)
        throw new Error(process.env.NODE_ENV === "production" ? w(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${c}'`);
      return t[c] = s, o;
    },
    addMatcher(i, s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? w(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: i,
        reducer: s
      }), o;
    },
    addDefaultCase(i) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? w(31) : "`builder.addDefaultCase` can only be called once");
      return n = i, o;
    }
  };
  return e(o), [t, r, n];
}
function cr(e) {
  return typeof e == "function";
}
function ar(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? w(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = rt(t), i;
  if (cr(e))
    i = () => Ae(e());
  else {
    const c = Ae(e);
    i = () => c;
  }
  function s(c = i(), u) {
    let f = [r[u.type], ...n.filter(({
      matcher: a
    }) => a(u)).map(({
      reducer: a
    }) => a)];
    return f.filter((a) => !!a).length === 0 && (f = [o]), f.reduce((a, d) => {
      if (d)
        if (M(a)) {
          const h = d(a, u);
          return h === void 0 ? a : h;
        } else {
          if (R(a))
            return qe(a, (l) => d(l, u));
          {
            const l = d(a, u);
            if (l === void 0) {
              if (a === null)
                return a;
              throw new Error(process.env.NODE_ENV === "production" ? w(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return l;
          }
        }
      return a;
    }, c);
  }
  return s.getInitialState = i, s;
}
var ur = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", fr = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += ur[Math.random() * 64 | 0];
  return t;
}, dr = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function lr(e, t) {
  return `${e}/${t}`;
}
function pr({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[dr];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? w(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const c = (typeof o.reducers == "function" ? o.reducers(mr()) : o.reducers) || {}, u = Object.keys(c), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, a = {
      addCase(m, E) {
        const N = typeof m == "string" ? m : m.type;
        if (!N)
          throw new Error(process.env.NODE_ENV === "production" ? w(12) : "`context.addCase` cannot be called with an empty action type");
        if (N in f.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? w(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + N);
        return f.sliceCaseReducersByType[N] = E, a;
      },
      addMatcher(m, E) {
        return f.sliceMatchers.push({
          matcher: m,
          reducer: E
        }), a;
      },
      exposeAction(m, E) {
        return f.actionCreators[m] = E, a;
      },
      exposeCaseReducer(m, E) {
        return f.sliceCaseReducersByName[m] = E, a;
      }
    };
    u.forEach((m) => {
      const E = c[m], N = {
        reducerName: m,
        type: lr(i, m),
        createNotation: typeof o.reducers == "function"
      };
      Er(E) ? _r(N, E, a, t) : wr(N, E, a);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? w(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [m = {}, E = [], N = void 0] = typeof o.extraReducers == "function" ? rt(o.extraReducers) : [o.extraReducers], A = {
        ...m,
        ...f.sliceCaseReducersByType
      };
      return ar(o.initialState, (S) => {
        for (let v in A)
          S.addCase(v, A[v]);
        for (let v of f.sliceMatchers)
          S.addMatcher(v.matcher, v.reducer);
        for (let v of E)
          S.addMatcher(v.matcher, v.reducer);
        N && S.addDefaultCase(N);
      });
    }
    const l = (m) => m, h = /* @__PURE__ */ new Map();
    let y;
    function b(m, E) {
      return y || (y = d()), y(m, E);
    }
    function p() {
      return y || (y = d()), y.getInitialState();
    }
    function _(m, E = !1) {
      function N(S) {
        let v = S[m];
        if (typeof v > "u") {
          if (E)
            v = p();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? w(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return v;
      }
      function A(S = l) {
        const v = Re(h, E, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Re(v, S, {
          insert: () => {
            const F = {};
            for (const [oe, ot] of Object.entries(o.selectors ?? {}))
              F[oe] = hr(ot, S, p, E);
            return F;
          }
        });
      }
      return {
        reducerPath: m,
        getSelectors: A,
        get selectors() {
          return A(N);
        },
        selectSlice: N
      };
    }
    const g = {
      name: i,
      reducer: b,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: p,
      ..._(s),
      injectInto(m, {
        reducerPath: E,
        ...N
      } = {}) {
        const A = E ?? s;
        return m.inject({
          reducerPath: A,
          reducer: b
        }, N), {
          ...g,
          ..._(A, !0)
        };
      }
    };
    return g;
  };
}
function hr(e, t, r, n) {
  function o(i, ...s) {
    let c = t(i);
    if (typeof c > "u") {
      if (n)
        c = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? w(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(c, ...s);
  }
  return o.unwrapped = e, o;
}
var yr = /* @__PURE__ */ pr();
function mr() {
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
function wr({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let i, s;
  if ("reducer" in n) {
    if (r && !br(n))
      throw new Error(process.env.NODE_ENV === "production" ? w(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = n.reducer, s = n.prepare;
  } else
    i = n;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? z(e, s) : z(e));
}
function Er(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function br(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function _r({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? w(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: c,
    rejected: u,
    settled: f,
    options: a
  } = r, d = o(e, i, a);
  n.exposeAction(t, d), s && n.addCase(d.fulfilled, s), c && n.addCase(d.pending, c), u && n.addCase(d.rejected, u), f && n.addMatcher(d.settled, f), n.exposeCaseReducer(t, {
    fulfilled: s || X,
    pending: c || X,
    rejected: u || X,
    settled: f || X
  });
}
function X() {
}
var gr = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? w(32) : `${t} is not a function`);
}, Ee = "listenerMiddleware", Nr = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = z(t).match;
  else if (r)
    t = r.type, o = r.match;
  else if (n)
    o = n;
  else if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? w(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return gr(i, "options.listener"), {
    predicate: o,
    type: t,
    effect: i
  };
}, vr = Object.assign((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = Nr(e);
  return {
    id: fr(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? w(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => vr
}), Or = Object.assign(z(`${Ee}/add`), {
  withTypes: () => Or
});
z(`${Ee}/removeAll`);
var Dr = Object.assign(z(`${Ee}/remove`), {
  withTypes: () => Dr
});
function w(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const nt = yr({
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
      let { data: r, active_state: n } = t.payload;
      return (e[n] ?? null) === null && (e[n] = {}), e[n] = r, e;
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
}), { ...ne } = nt.actions, Sr = nt.reducer, kr = Pe({
  This: Sr
}), C = sr(
  {
    reducer: kr
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(functionMiddleware),
  }
  // applyMiddleware(functionMiddleware)
), B = (e) => typeof e == "string" && e.startsWith("__func_") && e.endsWith("__") ? ft(e) : Array.isArray(e) ? e.map(B) : e !== null && typeof e == "object" ? Object.keys(e).reduce((t, r) => (t[r] = B(e[r]), t), {}) : e;
function Tr(e, t) {
  return function(n) {
    let o = typeof n == "function" ? n(C.getState().This[e]) : n;
    return t(
      ne.update({
        data: o,
        state: e
      })
    ), B(C.getState().This[e]);
  };
}
function Cr(e, t) {
  return function(n) {
    let o = typeof n == "function" ? n(C.getState().This[e]) : n;
    return t(
      ne.append({
        data: o,
        state: e
      })
    ), C.getState().This[e];
  };
}
function Ar(e, t) {
  var i;
  const r = (i = C == null ? void 0 : C.getState()) == null ? void 0 : i.This[e];
  function n(s) {
    try {
      const c = Array.isArray(r) ? [...r] : { ...r ?? {} };
      t(
        ne.upsert({
          data: at(c, s),
          active_state: e,
          config: {}
        })
      );
    } catch {
    }
  }
  return (...s) => {
    for (let c of s)
      n(c);
    return C.getState().This[e];
  };
}
const Ir = (e, t) => (r, n) => {
  var s;
  const o = r, i = (s = C.getState()) == null ? void 0 : s.This;
  return !i[o] && n && e(
    ne.update({
      data: n,
      state: o
    })
  ), {
    update: Tr(o, e),
    append: Cr(o, e),
    upsert: Ar(o, e),
    dispatcher: e,
    This: B(i[o] ?? null),
    get: () => C.getState().This[o],
    fetch: () => B(C.getState().This[o]),
    info: t
  };
}, Mr = it(null);
export {
  Mr as T,
  C as _,
  xr as s,
  Ir as u,
  be as y
};
//# sourceMappingURL=context-BcLDXb4T.js.map
