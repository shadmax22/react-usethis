import { createContext as it } from "react";
const xr = it(null);
function O(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var st = typeof Symbol == "function" && Symbol.observable || "@@observable", _e = st, ie = () => Math.random().toString(36).substring(7).split("").join("."), ct = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ie()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ie()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ie()}`
}, $ = ct;
function K(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function at(e) {
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
  if (dt(e))
    return "date";
  if (ft(e))
    return "error";
  const r = ut(e);
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
function ut(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function ft(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function dt(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function x(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = at(e)), t;
}
function Ie(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? O(2) : `Expected the root reducer to be a function. Instead, received: '${x(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? O(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? O(1) : `Expected the enhancer to be a function. Instead, received: '${x(r)}'`);
    return r(Ie)(e, t);
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
      throw new Error(process.env.NODE_ENV === "production" ? O(4) : `Expected the listener to be a function. Instead, received: '${x(p)}'`);
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
      throw new Error(process.env.NODE_ENV === "production" ? O(7) : `Actions must be plain objects. Instead, the actual type was: '${x(p)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof p.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? O(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof p.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? O(17) : `Action "type" property must be a string. Instead, the actual type was: '${x(p.type)}'. Value was: '${p.type}' (stringified)`);
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
      throw new Error(process.env.NODE_ENV === "production" ? O(10) : `Expected the nextReducer to be a function. Instead, received: '${x(p)}`);
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
          throw new Error(process.env.NODE_ENV === "production" ? O(11) : `Expected the observer to be an object. Instead, received: '${x(_)}'`);
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
function lt(e, t, r, n) {
  const o = Object.keys(t), i = r && r.type === $.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!K(e))
    return `The ${i} has unexpected type of "${x(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const s = Object.keys(e).filter((c) => !t.hasOwnProperty(c) && !n[c]);
  if (s.forEach((c) => {
    n[c] = !0;
  }), !(r && r.type === $.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function pt(e) {
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
function xe(e) {
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
    pt(r);
  } catch (s) {
    i = s;
  }
  return function(c = {}, u) {
    if (i)
      throw i;
    if (process.env.NODE_ENV !== "production") {
      const d = lt(c, r, u, o);
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
function X(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function ht(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? O(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const s = {
      getState: o.getState,
      dispatch: (u, ...f) => i(u, ...f)
    }, c = e.map((u) => u(s));
    return i = X(...c)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Me(e) {
  return K(e) && "type" in e && typeof e.type == "string";
}
var Pe = Symbol.for("immer-nothing"), ve = Symbol.for("immer-draftable"), T = Symbol.for("immer-state"), yt = process.env.NODE_ENV !== "production" ? [
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
    const r = yt[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var V = Object.getPrototypeOf;
function M(e) {
  return !!e && !!e[T];
}
function A(e) {
  var t;
  return e ? $e(e) || Array.isArray(e) || !!e[ve] || !!((t = e.constructor) != null && t[ve]) || ee(e) || te(e) : !1;
}
var mt = Object.prototype.constructor.toString();
function $e(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = V(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === mt;
}
function G(e, t) {
  Z(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Z(e) {
  const t = e[T];
  return t ? t.type_ : Array.isArray(e) ? 1 : ee(e) ? 2 : te(e) ? 3 : 0;
}
function ae(e, t) {
  return Z(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function je(e, t, r) {
  const n = Z(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function wt(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ee(e) {
  return e instanceof Map;
}
function te(e) {
  return e instanceof Set;
}
function P(e) {
  return e.copy_ || e.base_;
}
function ue(e, t) {
  if (ee(e))
    return new Map(e);
  if (te(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && $e(e))
    return V(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[T];
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
function me(e, t = !1) {
  return re(e) || M(e) || !A(e) || (Z(e) > 1 && (e.set = e.add = e.clear = e.delete = Et), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => me(n, !0))), e;
}
function Et() {
  D(2);
}
function re(e) {
  return Object.isFrozen(e);
}
var bt = {};
function j(e) {
  const t = bt[e];
  return t || D(0, e), t;
}
var W;
function Ve() {
  return W;
}
function _t(e, t) {
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
function Ne(e, t) {
  t && (j("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function fe(e) {
  de(e), e.drafts_.forEach(gt), e.drafts_ = null;
}
function de(e) {
  e === W && (W = e.parent_);
}
function Oe(e) {
  return W = _t(W, e);
}
function gt(e) {
  const t = e[T];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function De(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[T].modified_ && (fe(t), D(4)), A(e) && (e = Q(t, e), t.parent_ || J(t, e)), t.patches_ && j("Patches").generateReplacementPatches_(
    r[T].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Q(t, r, []), fe(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Pe ? e : void 0;
}
function Q(e, t, r) {
  if (re(t))
    return t;
  const n = t[T];
  if (!n)
    return G(
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
    n.type_ === 3 && (i = new Set(o), o.clear(), s = !0), G(
      i,
      (c, u) => Se(e, n, o, c, u, r, s)
    ), J(e, o, !1), r && e.patches_ && j("Patches").generatePatches_(
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
    if (je(r, n, u), M(u))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && r.add(o);
  if (A(o) && !re(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Q(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && J(e, o);
  }
}
function J(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && me(t, r);
}
function vt(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Ve(),
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
  let o = n, i = we;
  r && (o = [n], i = L);
  const { revoke: s, proxy: c } = Proxy.revocable(o, i);
  return n.draft_ = c, n.revoke_ = s, c;
}
var we = {
  get(e, t) {
    if (t === T)
      return e;
    const r = P(e);
    if (!ae(r, t))
      return Nt(e, r, t);
    const n = r[t];
    return e.finalized_ || !A(n) ? n : n === se(e.base_, t) ? (ce(e), e.copy_[t] = pe(n, e)) : n;
  },
  has(e, t) {
    return t in P(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(P(e));
  },
  set(e, t, r) {
    const n = ze(P(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = se(P(e), t), i = o == null ? void 0 : o[T];
      if (i && i.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (wt(r, o) && (r !== void 0 || ae(e.base_, t)))
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
    const r = P(e), n = Reflect.getOwnPropertyDescriptor(r, t);
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
G(we, (e, t) => {
  L[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
L.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && D(13), L.set.call(this, e, t, void 0);
};
L.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && D(14), we.set.call(this, e[0], t, r, e[0]);
};
function se(e, t) {
  const r = e[T];
  return (r ? P(r) : e)[t];
}
function Nt(e, t, r) {
  var o;
  const n = ze(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function ze(e, t) {
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
var Ot = class {
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
      if (A(t)) {
        const i = Oe(this), s = pe(t, void 0);
        let c = !0;
        try {
          o = r(s), c = !1;
        } finally {
          c ? fe(i) : de(i);
        }
        return Ne(i, n), De(o, i);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === Pe && (o = void 0), this.autoFreeze_ && me(o, !0), n) {
          const i = [], s = [];
          j("Patches").generateReplacementPatches_(t, o, i, s), n(i, s);
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
    A(e) || D(8), M(e) && (e = Fe(e));
    const t = Oe(this), r = pe(e, void 0);
    return r[T].isManual_ = !0, de(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[T];
    (!r || !r.isManual_) && D(9);
    const { scope_: n } = r;
    return Ne(n, t), De(void 0, n);
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
    const n = j("Patches").applyPatches_;
    return M(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function pe(e, t) {
  const r = ee(e) ? j("MapSet").proxyMap_(e, t) : te(e) ? j("MapSet").proxySet_(e, t) : vt(e, t);
  return (t ? t.scope_ : Ve()).drafts_.push(r), r;
}
function Fe(e) {
  return M(e) || D(10, e), Ue(e);
}
function Ue(e) {
  if (!A(e) || re(e))
    return e;
  const t = e[T];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = ue(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = ue(e, !0);
  return G(r, (n, o) => {
    je(r, n, Ue(o));
  }), t && (t.finalized_ = !1), r;
}
var k = new Ot(), We = k.produce;
k.produceWithPatches.bind(
  k
);
k.setAutoFreeze.bind(k);
k.setUseStrictShallowCopy.bind(k);
k.applyPatches.bind(k);
k.createDraft.bind(k);
k.finishDraft.bind(k);
var Dt = (e, t, r) => {
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
}, St = (e, t, r) => {
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
}, Tt = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function kt(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Ct(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Rt(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Te = (e) => Array.isArray(e) ? e : [e];
function At(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Rt(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function ke(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var It = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...Tt,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: Dt
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: St
    }
  };
}, xt = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Mt = typeof WeakRef < "u" ? WeakRef : xt, Pt = 0, Ce = 1;
function q() {
  return {
    s: Pt,
    v: void 0,
    o: null,
    p: null
  };
}
function Ee(e, t = {}) {
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
      l != null && n(l, a) && (a = l, i !== 0 && i--), o = typeof a == "object" && a !== null || typeof a == "function" ? new Mt(a) : a;
    }
    return f.v = a, a;
  }
  return s.clearCache = () => {
    r = q(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function Le(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...o) => {
    let i = 0, s = 0, c, u = {}, f = o.pop();
    typeof f == "object" && (u = f, f = o.pop()), kt(
      f,
      `createSelector expects an output function after the inputs, but received: [${typeof f}]`
    );
    const a = {
      ...r,
      ...u
    }, {
      memoize: d,
      memoizeOptions: l = [],
      argsMemoize: h = Ee,
      argsMemoizeOptions: y = [],
      devModeChecks: b = {}
    } = a, p = Te(l), _ = Te(y), g = At(o), m = d(function() {
      return i++, f.apply(
        null,
        arguments
      );
    }, ...p);
    let E = !0;
    const v = h(function() {
      s++;
      const S = ke(
        g,
        arguments
      );
      if (c = m.apply(null, S), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: N, inputStabilityCheck: F } = It(E, b);
        if (N.shouldRun && N.run(
          f,
          S,
          c
        ), F.shouldRun) {
          const oe = ke(
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
    return Object.assign(v, {
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
var $t = /* @__PURE__ */ Le(Ee), jt = Object.assign(
  (e, t = $t) => {
    Ct(
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
  { withTypes: () => jt }
);
function Be(e) {
  return ({ dispatch: r, getState: n }) => (o) => (i) => typeof i == "function" ? i(r, n, e) : o(i);
}
var Vt = Be(), zt = Be, Ft = (...e) => {
  const t = Le(...e), r = Object.assign((...n) => {
    const o = t(...n), i = (s, ...c) => o(M(s) ? Fe(s) : s, ...c);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => r
  });
  return r;
};
Ft(Ee);
var Ut = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? X : X.apply(null, arguments);
}, Wt = (e) => e && typeof e.match == "function";
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Me(n) && n.type === e, r;
}
function Lt(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Wt(e);
}
function Bt(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function Kt(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = Lt
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(Bt(n.type)), r(n));
}
function Ke(e, t) {
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
var qe = class U extends Array {
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
function Re(e) {
  return A(e) ? We(e, () => {
  }) : e;
}
function Ae(e, t, r) {
  if (e.has(t)) {
    let o = e.get(t);
    return r.update && (o = r.update(o, t, e), e.set(t, o)), o;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? w(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function qt(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Yt(e, t, r) {
  const n = Ye(e, t, r);
  return {
    detectMutations() {
      return He(e, t, n, r);
    }
  };
}
function Ye(e, t = [], r, n = "", o = /* @__PURE__ */ new Set()) {
  const i = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), i.children = {};
    for (const s in r) {
      const c = n ? n + "." + s : s;
      t.length && t.indexOf(c) !== -1 || (i.children[s] = Ye(e, t, r[s], c));
    }
  }
  return i;
}
function He(e, t = [], r, n, o = !1, i = "") {
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
    const l = He(e, t, r.children[a], n[a], c, d);
    if (l.wasMutated)
      return l;
  }
  return {
    wasMutated: !1
  };
}
function Ht(e = {}) {
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
      isImmutable: n = qt,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const s = Yt.bind(null, n, o);
    return ({
      getState: c
    }) => {
      let u = c(), f = s(u), a;
      return (d) => (l) => {
        const h = Ke(i, "ImmutableStateInvariantMiddleware");
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
function Xe(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || K(e);
}
function he(e, t = "", r = Xe, n, o = [], i) {
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
  return i && Ge(e) && i.add(e), !1;
}
function Ge(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Ge(t))
      return !1;
  return !0;
}
function Xt(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = Xe,
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
      if (!Me(h))
        return l(h);
      const y = l(h), b = Ke(s, "SerializableStateInvariantMiddleware");
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
var Gt = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new qe();
  if (r && (Y(r) ? s.push(Vt) : s.push(zt(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let c = {};
      Y(n) || (c = n), s.unshift(Ht(c));
    }
    if (o) {
      let c = {};
      Y(o) || (c = o), s.push(Xt(c));
    }
    if (i) {
      let c = {};
      Y(i) || (c = i), s.unshift(Kt(c));
    }
  }
  return s;
}, Qt = "RTK_autoBatch", Qe = (e) => (t) => {
  setTimeout(t, e);
}, Jt = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Qe(10), Zt = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, i = !1, s = !1;
  const c = /* @__PURE__ */ new Set(), u = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Jt : e.type === "callback" ? e.queueNotification : Qe(e.timeout), f = () => {
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
        return o = !((d = a == null ? void 0 : a.meta) != null && d[Qt]), i = !o, i && (s || (s = !0, u(f))), n.dispatch(a);
      } finally {
        o = !0;
      }
    }
  });
}, er = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new qe(e);
  return n && o.push(Zt(typeof n == "object" ? n : void 0)), o;
}, I = process.env.NODE_ENV === "production";
function tr(e) {
  const t = Gt(), {
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
    c = xe(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? w(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!I && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? w(2) : "`middleware` field must be a callback");
  let u;
  if (typeof n == "function") {
    if (u = n(t), !I && !Array.isArray(u))
      throw new Error(process.env.NODE_ENV === "production" ? w(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    u = t();
  if (!I && u.some((y) => typeof y != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? w(4) : "each middleware provided to configureStore must be a function");
  let f = X;
  o && (f = Ut({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !I,
    ...typeof o == "object" && o
  }));
  const a = ht(...u), d = er(a);
  if (!I && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? w(5) : "`enhancers` field must be a callback");
  let l = typeof s == "function" ? s(d) : d();
  if (!I && !Array.isArray(l))
    throw new Error(process.env.NODE_ENV === "production" ? w(6) : "`enhancers` callback must return an array");
  if (!I && l.some((y) => typeof y != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? w(7) : "each enhancer provided to configureStore must be a function");
  !I && u.length && !l.includes(a) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const h = f(...l);
  return Ie(c, i, h);
}
function Je(e) {
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
function rr(e) {
  return typeof e == "function";
}
function nr(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? w(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = Je(t), i;
  if (rr(e))
    i = () => Re(e());
  else {
    const c = Re(e);
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
          if (A(a))
            return We(a, (l) => d(l, u));
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
var or = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", ir = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += or[Math.random() * 64 | 0];
  return t;
}, sr = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function cr(e, t) {
  return `${e}/${t}`;
}
function ar({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[sr];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? w(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const c = (typeof o.reducers == "function" ? o.reducers(dr()) : o.reducers) || {}, u = Object.keys(c), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, a = {
      addCase(m, E) {
        const v = typeof m == "string" ? m : m.type;
        if (!v)
          throw new Error(process.env.NODE_ENV === "production" ? w(12) : "`context.addCase` cannot be called with an empty action type");
        if (v in f.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? w(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + v);
        return f.sliceCaseReducersByType[v] = E, a;
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
      const E = c[m], v = {
        reducerName: m,
        type: cr(i, m),
        createNotation: typeof o.reducers == "function"
      };
      pr(E) ? yr(v, E, a, t) : lr(v, E, a);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? w(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [m = {}, E = [], v = void 0] = typeof o.extraReducers == "function" ? Je(o.extraReducers) : [o.extraReducers], C = {
        ...m,
        ...f.sliceCaseReducersByType
      };
      return nr(o.initialState, (S) => {
        for (let N in C)
          S.addCase(N, C[N]);
        for (let N of f.sliceMatchers)
          S.addMatcher(N.matcher, N.reducer);
        for (let N of E)
          S.addMatcher(N.matcher, N.reducer);
        v && S.addDefaultCase(v);
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
      function v(S) {
        let N = S[m];
        if (typeof N > "u") {
          if (E)
            N = p();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? w(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return N;
      }
      function C(S = l) {
        const N = Ae(h, E, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Ae(N, S, {
          insert: () => {
            const F = {};
            for (const [oe, ot] of Object.entries(o.selectors ?? {}))
              F[oe] = ur(ot, S, p, E);
            return F;
          }
        });
      }
      return {
        reducerPath: m,
        getSelectors: C,
        get selectors() {
          return C(v);
        },
        selectSlice: v
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
        ...v
      } = {}) {
        const C = E ?? s;
        return m.inject({
          reducerPath: C,
          reducer: b
        }, v), {
          ...g,
          ..._(C, !0)
        };
      }
    };
    return g;
  };
}
function ur(e, t, r, n) {
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
var fr = /* @__PURE__ */ ar();
function dr() {
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
function lr({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let i, s;
  if ("reducer" in n) {
    if (r && !hr(n))
      throw new Error(process.env.NODE_ENV === "production" ? w(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = n.reducer, s = n.prepare;
  } else
    i = n;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? z(e, s) : z(e));
}
function pr(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function hr(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function yr({
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
    fulfilled: s || H,
    pending: c || H,
    rejected: u || H,
    settled: f || H
  });
}
function H() {
}
var mr = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? w(32) : `${t} is not a function`);
}, be = "listenerMiddleware", wr = (e) => {
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
  return mr(i, "options.listener"), {
    predicate: o,
    type: t,
    effect: i
  };
}, Er = Object.assign((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = wr(e);
  return {
    id: ir(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? w(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Er
}), br = Object.assign(z(`${be}/add`), {
  withTypes: () => br
});
z(`${be}/removeAll`);
var _r = Object.assign(z(`${be}/remove`), {
  withTypes: () => _r
});
function w(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Ze = fr({
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
}), { ...ne } = Ze.actions, gr = Ze.reducer, vr = xe({
  This: gr
}), et = {};
let Nr = 0;
function Or(e) {
  const t = `__func_${Nr++}__`;
  return et[t] = e, t;
}
function Dr(e) {
  return et[e];
}
const ye = (e) => typeof e == "function" ? Or(e) : Array.isArray(e) ? e.map(ye) : e !== null && typeof e == "object" ? Object.keys(e).reduce((t, r) => (t[r] = ye(e[r]), t), {}) : e, Sr = () => (e) => (t) => {
  const r = ye(t);
  return e(r);
}, R = tr(
  {
    reducer: vr,
    middleware: (e) => e().concat(Sr)
  }
  // applyMiddleware(functionMiddleware)
), B = (e) => typeof e == "string" && e.startsWith("__func_") && e.endsWith("__") ? Dr(e) : Array.isArray(e) ? e.map(B) : e !== null && typeof e == "object" ? Object.keys(e).reduce((t, r) => (t[r] = B(e[r]), t), {}) : e;
function Mr(e, t = null) {
  let r = Math.floor(Math.random() * 100), n = typeof t == "string" ? Tr(t) : t;
  return {
    ["$$@@@@__upsert_hook_" + r]: {
      value: e,
      index: n,
      isFunction: typeof e == "function"
    }
  };
}
function Tr(e) {
  return e.replace(/[\[\]'"]/g, "").split(".");
}
function tt({ obj: e }, t, r = [], n = !1) {
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
      const c = tt(
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
function rt(e, t, r, n = !1, o) {
  if (t.length <= 1) {
    if (t.length > 0)
      try {
        return e[t[0]] = n ? r(e[t[0] ?? t]) : r, e;
      } catch {
        throw `Unable to set value at index [${t}], ERROR: SETTER_FAILED`;
      }
    if (e === null || typeof e != "object")
      throw Error(
        "Initial value is not a object, ERROR: INITITAL_VALUE_PARSE_FAILED"
      );
    let s = n ? r(e) : r;
    if (o.returnType == "array")
      return e.push(s), e;
    if (typeof s != "object")
      throw `Only object or array can be setted as a default value. Value given ${s}.`;
    for (const c of Object.keys(s))
      e[c] = s[c];
    return e;
  }
  let i = (e ?? [])[t[0]] ?? !1;
  if (!i) {
    let s = nt(t, r, n);
    try {
      e[t[0]] = s;
    } catch {
      throw `Unable to set value at index [${t}], ERROR: SETTER_FAILED`;
    }
    return e;
  }
  return t.shift(), rt(i, t, r, n, o);
}
function nt(e, t, r = !1) {
  let n = [...e], o;
  return n.length == 1 ? o = r ? t(null) : t : (o = {}, n.shift(), o[n[0]] = nt(n, t, r)), o;
}
function kr(e, t, r = { returnType: "object" }) {
  Array.isArray(e) && (r.returnType = "array");
  let { result: n } = tt({ obj: t }, "$$@@@@__upsert_hook");
  for (let o = 0; o < n.length; o++) {
    let i = n[o];
    rt(
      e,
      i.index,
      i.value,
      i.isFunction,
      r
    );
  }
  try {
    return ((r == null ? void 0 : r.returnType) ?? "object") == "object" ? { ...e } : [...e];
  } catch {
    throw Error(
      `Cannot return value as returnType '${r.returnType}'. Please try '${r.returnType == "array" ? "OBJECT" : "ARRAY"}' returnType, ERROR: RETURN_ERROR.`
    );
  }
}
function Cr(e, t) {
  return function(n) {
    let o = typeof n == "function" ? n(R.getState().This[e]) : n;
    return t(
      ne.update({
        data: o,
        state: e
      })
    ), B(R.getState().This[e]);
  };
}
function Rr(e, t) {
  return function(n) {
    return t(
      ne.update({
        data: n,
        state: e
      })
    ), R.getState().This[e];
  };
}
function Ar(e, t) {
  return function(n, o) {
    var i;
    try {
      t(
        ne.upsert({
          data: kr(
            structuredClone(((i = R == null ? void 0 : R.getState()) == null ? void 0 : i.This[e]) ?? {}),
            n,
            o ?? {}
          ),
          active_state: e,
          config: o ?? {}
        })
      );
    } catch {
    }
    return R.getState().This[e];
  };
}
const Pr = (e, t, r) => (n, o) => (!t[n] && o && e(
  ne.update({
    data: o,
    state: n
  })
), {
  update: Cr(n, e),
  append: Rr(n, e),
  upsert: Ar(n, e),
  dispatcher: e,
  This: B(t[n] ?? null),
  get: () => R.getState().This[n],
  fetch: () => B(R.getState().This[n]),
  info: r
});
export {
  Mr as R,
  xr as T,
  Pr as _,
  R as a,
  ye as r
};
//# sourceMappingURL=Dispatcher-vax56yhO.js.map
