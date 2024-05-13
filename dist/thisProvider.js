import * as _e from "react";
import oe from "react";
import { S as ie, _ as X, T as Or } from "./store-DeN8Hqbh.js";
var Ee = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function wr() {
  if (Ye)
    return q;
  Ye = 1;
  var n = oe, o = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(w, d, l) {
    var v, E = {}, _ = null, S = null;
    l !== void 0 && (_ = "" + l), d.key !== void 0 && (_ = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (v in d)
      a.call(d, v) && !b.hasOwnProperty(v) && (E[v] = d[v]);
    if (w && w.defaultProps)
      for (v in d = w.defaultProps, d)
        E[v] === void 0 && (E[v] = d[v]);
    return { $$typeof: o, type: w, key: _, ref: S, props: E, _owner: s.current };
  }
  return q.Fragment = i, q.jsx = x, q.jsxs = x, q;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function xr() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var n = oe, o = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), w = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), R = Symbol.iterator, g = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = R && e[R] || e[g];
      return typeof r == "function" ? r : null;
    }
    var T = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          t[u - 1] = arguments[u];
        C("error", e, t);
      }
    }
    function C(e, r, t) {
      {
        var u = T.ReactDebugCurrentFrame, p = u.getStackAddendum();
        p !== "" && (r += "%s", t = t.concat([p]));
        var h = t.map(function(f) {
          return String(f);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var V = !1, P = !1, D = !1, U = !1, Z = !1, Q;
    Q = Symbol.for("react.module.reference");
    function ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === b || Z || e === s || e === l || e === v || U || e === S || V || P || D || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === E || e.$$typeof === x || e.$$typeof === w || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function $(e, r, t) {
      var u = e.displayName;
      if (u)
        return u;
      var p = r.displayName || r.name || "";
      return p !== "" ? t + "(" + p + ")" : t;
    }
    function Y(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case i:
          return "Portal";
        case b:
          return "Profiler";
        case s:
          return "StrictMode";
        case l:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return Y(r) + ".Consumer";
          case x:
            var t = e;
            return Y(t._context) + ".Provider";
          case d:
            return $(e, e.render, "ForwardRef");
          case E:
            var u = e.displayName || null;
            return u !== null ? u : A(e.type) || "Memo";
          case _: {
            var p = e, h = p._payload, f = p._init;
            try {
              return A(f(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, I = 0, B, me, Re, Oe, we, xe, Te;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Qe() {
      {
        if (I === 0) {
          B = console.log, me = console.info, Re = console.warn, Oe = console.error, we = console.group, xe = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function er() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: B
            }),
            info: W({}, e, {
              value: me
            }),
            warn: W({}, e, {
              value: Re
            }),
            error: W({}, e, {
              value: Oe
            }),
            group: W({}, e, {
              value: we
            }),
            groupCollapsed: W({}, e, {
              value: xe
            }),
            groupEnd: W({}, e, {
              value: Te
            })
          });
        }
        I < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = T.ReactCurrentDispatcher, ce;
    function ee(e, r, t) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (p) {
            var u = p.stack.trim().match(/\n( *(at )?)/);
            ce = u && u[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var le = !1, re;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      re = new rr();
    }
    function Pe(e, r) {
      if (!e || le)
        return "";
      {
        var t = re.get(e);
        if (t !== void 0)
          return t;
      }
      var u;
      le = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = se.current, se.current = null, Qe();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (M) {
              u = M;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (M) {
              u = M;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            u = M;
          }
          e();
        }
      } catch (M) {
        if (M && u && typeof M.stack == "string") {
          for (var c = M.stack.split(`
`), j = u.stack.split(`
`), m = c.length - 1, O = j.length - 1; m >= 1 && O >= 0 && c[m] !== j[O]; )
            O--;
          for (; m >= 1 && O >= 0; m--, O--)
            if (c[m] !== j[O]) {
              if (m !== 1 || O !== 1)
                do
                  if (m--, O--, O < 0 || c[m] !== j[O]) {
                    var F = `
` + c[m].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, F), F;
                  }
                while (m >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        le = !1, se.current = h, er(), Error.prepareStackTrace = p;
      }
      var H = e ? e.displayName || e.name : "", $e = H ? ee(H) : "";
      return typeof e == "function" && re.set(e, $e), $e;
    }
    function tr(e, r, t) {
      return Pe(e, !1);
    }
    function nr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function te(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, nr(e));
      if (typeof e == "string")
        return ee(e);
      switch (e) {
        case l:
          return ee("Suspense");
        case v:
          return ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return tr(e.render);
          case E:
            return te(e.type, r, t);
          case _: {
            var u = e, p = u._payload, h = u._init;
            try {
              return te(h(p), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, je = {}, ke = T.ReactDebugCurrentFrame;
    function ae(e) {
      if (e) {
        var r = e._owner, t = te(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    function ar(e, r, t, u, p) {
      {
        var h = Function.call.bind(ne);
        for (var f in e)
          if (h(e, f)) {
            var c = void 0;
            try {
              if (typeof e[f] != "function") {
                var j = Error((u || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              c = e[f](r, f, u, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              c = m;
            }
            c && !(c instanceof Error) && (ae(p), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", t, f, typeof c), ae(null)), c instanceof Error && !(c.message in je) && (je[c.message] = !0, ae(p), y("Failed %s type: %s", t, c.message), ae(null));
          }
      }
    }
    var or = Array.isArray;
    function fe(e) {
      return or(e);
    }
    function ir(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ur(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Ae(e) {
      if (ur(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(e)), De(e);
    }
    var G = T.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ve, de;
    de = {};
    function cr(e) {
      if (ne.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (ne.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, r) {
      if (typeof e.ref == "string" && G.current && r && G.current.stateNode !== r) {
        var t = A(G.current.type);
        de[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(G.current.type), e.ref), de[t] = !0);
      }
    }
    function dr(e, r) {
      {
        var t = function() {
          Le || (Le = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function vr(e, r) {
      {
        var t = function() {
          Ve || (Ve = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var pr = function(e, r, t, u, p, h, f) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function hr(e, r, t, u, p) {
      {
        var h, f = {}, c = null, j = null;
        t !== void 0 && (Ae(t), c = "" + t), lr(r) && (Ae(r.key), c = "" + r.key), cr(r) && (j = r.ref, fr(r, p));
        for (h in r)
          ne.call(r, h) && !sr.hasOwnProperty(h) && (f[h] = r[h]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (h in m)
            f[h] === void 0 && (f[h] = m[h]);
        }
        if (c || j) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && dr(f, O), j && vr(f, O);
        }
        return pr(e, c, j, p, u, G.current, f);
      }
    }
    var ve = T.ReactCurrentOwner, Fe = T.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = te(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(t);
      } else
        Fe.setExtraStackFrame(null);
    }
    var pe;
    pe = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function We() {
      {
        if (ve.current) {
          var e = A(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function _r(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ie = {};
    function yr(e) {
      {
        var r = We();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = yr(r);
        if (Ie[t])
          return;
        Ie[t] = !0;
        var u = "";
        e && e._owner && e._owner !== ve.current && (u = " It was passed a child from " + A(e._owner.type) + "."), z(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, u), z(null);
      }
    }
    function Ne(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var t = 0; t < e.length; t++) {
            var u = e[t];
            he(u) && Me(u, r);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = k(e);
          if (typeof p == "function" && p !== e.entries)
            for (var h = p.call(e), f; !(f = h.next()).done; )
              he(f.value) && Me(f.value, r);
        }
      }
    }
    function br(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var u = A(r);
          ar(t, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !pe) {
          pe = !0;
          var p = A(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var u = r[t];
          if (u !== "children" && u !== "key") {
            z(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function Ue(e, r, t, u, p, h) {
      {
        var f = ue(e);
        if (!f) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = _r(p);
          j ? c += j : c += We();
          var m;
          e === null ? m = "null" : fe(e) ? m = "array" : e !== void 0 && e.$$typeof === o ? (m = "<" + (A(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, c);
        }
        var O = hr(e, r, t, p, h);
        if (O == null)
          return O;
        if (f) {
          var F = r.children;
          if (F !== void 0)
            if (u)
              if (fe(F)) {
                for (var H = 0; H < F.length; H++)
                  Ne(F[H], e);
                Object.freeze && Object.freeze(F);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(F, e);
        }
        return e === a ? Er(O) : br(O), O;
      }
    }
    function Sr(e, r, t) {
      return Ue(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Ue(e, r, t, !1);
    }
    var mr = gr, Rr = Sr;
    K.Fragment = a, K.jsx = mr, K.jsxs = Rr;
  }()), K;
}
process.env.NODE_ENV === "production" ? Ee.exports = wr() : Ee.exports = xr();
var J = Ee.exports, Se = { exports: {} }, ye = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Tr() {
  if (ze)
    return ye;
  ze = 1;
  var n = oe;
  function o(d, l) {
    return d === l && (d !== 0 || 1 / d === 1 / l) || d !== d && l !== l;
  }
  var i = typeof Object.is == "function" ? Object.is : o, a = n.useSyncExternalStore, s = n.useRef, b = n.useEffect, x = n.useMemo, w = n.useDebugValue;
  return ye.useSyncExternalStoreWithSelector = function(d, l, v, E, _) {
    var S = s(null);
    if (S.current === null) {
      var R = { hasValue: !1, value: null };
      S.current = R;
    } else
      R = S.current;
    S = x(function() {
      function k(P) {
        if (!T) {
          if (T = !0, y = P, P = E(P), _ !== void 0 && R.hasValue) {
            var D = R.value;
            if (_(D, P))
              return C = D;
          }
          return C = P;
        }
        if (D = C, i(y, P))
          return D;
        var U = E(P);
        return _ !== void 0 && _(D, U) ? D : (y = P, C = U);
      }
      var T = !1, y, C, V = v === void 0 ? null : v;
      return [function() {
        return k(l());
      }, V === null ? void 0 : function() {
        return k(V());
      }];
    }, [l, v, E, _]);
    var g = a(d, S[0], S[1]);
    return b(function() {
      R.hasValue = !0, R.value = g;
    }, [g]), w(g), g;
  }, ye;
}
var be = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Cr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = oe;
    function o(l, v) {
      return l === v && (l !== 0 || 1 / l === 1 / v) || l !== l && v !== v;
    }
    var i = typeof Object.is == "function" ? Object.is : o, a = n.useSyncExternalStore, s = n.useRef, b = n.useEffect, x = n.useMemo, w = n.useDebugValue;
    function d(l, v, E, _, S) {
      var R = s(null), g;
      R.current === null ? (g = {
        hasValue: !1,
        value: null
      }, R.current = g) : g = R.current;
      var k = x(function() {
        var V = !1, P, D, U = function($) {
          if (!V) {
            V = !0, P = $;
            var Y = _($);
            if (S !== void 0 && g.hasValue) {
              var A = g.value;
              if (S(A, Y))
                return D = A, A;
            }
            return D = Y, Y;
          }
          var W = P, I = D;
          if (i(W, $))
            return I;
          var B = _($);
          return S !== void 0 && S(I, B) ? I : (P = $, D = B, B);
        }, Z = E === void 0 ? null : E, Q = function() {
          return U(v());
        }, ue = Z === null ? void 0 : function() {
          return U(Z());
        };
        return [Q, ue];
      }, [v, E, _, S]), T = k[0], y = k[1], C = a(l, T, y);
      return b(function() {
        g.hasValue = !0, g.value = C;
      }, [C]), w(C), C;
    }
    be.useSyncExternalStoreWithSelector = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), be;
}
process.env.NODE_ENV === "production" ? Se.exports = Tr() : Se.exports = Cr();
var Pr = Se.exports, L = (
  // prettier-ignore
  // @ts-ignore
  "default" in _e ? _e.default : _e
), Ge = Symbol.for("react-redux-context"), qe = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function jr() {
  if (!L.createContext)
    return {};
  const n = qe[Ge] ?? (qe[Ge] = /* @__PURE__ */ new Map());
  let o = n.get(L.createContext);
  return o || (o = L.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (o.displayName = "ReactRedux"), n.set(L.createContext, o)), o;
}
var N = /* @__PURE__ */ jr(), kr = () => {
  throw new Error("uSES not initialized!");
};
function ge(n = N) {
  return function() {
    const i = L.useContext(n);
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return i;
  };
}
var Je = /* @__PURE__ */ ge(), Xe = kr, Dr = (n) => {
  Xe = n;
}, Ar = (n, o) => n === o;
function Lr(n = N) {
  const o = n === N ? Je : ge(n), i = (a, s = {}) => {
    const { equalityFn: b = Ar, devModeChecks: x = {} } = typeof s == "function" ? { equalityFn: s } : s;
    if (process.env.NODE_ENV !== "production") {
      if (!a)
        throw new Error("You must pass a selector to useSelector");
      if (typeof a != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof b != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: w,
      subscription: d,
      getServerState: l,
      stabilityCheck: v,
      identityFunctionCheck: E
    } = o(), _ = L.useRef(!0), S = L.useCallback(
      {
        [a.name](g) {
          const k = a(g);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: T,
              stabilityCheck: y
            } = {
              stabilityCheck: v,
              identityFunctionCheck: E,
              ...x
            };
            if (y === "always" || y === "once" && _.current) {
              const C = a(g);
              if (!b(k, C)) {
                let V;
                try {
                  throw new Error();
                } catch (P) {
                  ({ stack: V } = P);
                }
                console.warn(
                  "Selector " + (a.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: g,
                    selected: k,
                    selected2: C,
                    stack: V
                  }
                );
              }
            }
            if ((T === "always" || T === "once" && _.current) && k === g) {
              let C;
              try {
                throw new Error();
              } catch (V) {
                ({ stack: C } = V);
              }
              console.warn(
                "Selector " + (a.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: C }
              );
            }
            _.current && (_.current = !1);
          }
          return k;
        }
      }[a.name],
      [a, v, x.stabilityCheck]
    ), R = Xe(
      d.addNestedSub,
      w.getState,
      l || w.getState,
      S,
      b
    );
    return L.useDebugValue(R), R;
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var Vr = /* @__PURE__ */ Lr();
function Fr(n) {
  n();
}
function Wr() {
  let n = null, o = null;
  return {
    clear() {
      n = null, o = null;
    },
    notify() {
      Fr(() => {
        let i = n;
        for (; i; )
          i.callback(), i = i.next;
      });
    },
    get() {
      const i = [];
      let a = n;
      for (; a; )
        i.push(a), a = a.next;
      return i;
    },
    subscribe(i) {
      let a = !0;
      const s = o = {
        callback: i,
        next: null,
        prev: o
      };
      return s.prev ? s.prev.next = s : n = s, function() {
        !a || n === null || (a = !1, s.next ? s.next.prev = s.prev : o = s.prev, s.prev ? s.prev.next = s.next : n = s.next);
      };
    }
  };
}
var Ke = {
  notify() {
  },
  get: () => []
};
function Ir(n, o) {
  let i, a = Ke, s = 0, b = !1;
  function x(g) {
    v();
    const k = a.subscribe(g);
    let T = !1;
    return () => {
      T || (T = !0, k(), E());
    };
  }
  function w() {
    a.notify();
  }
  function d() {
    R.onStateChange && R.onStateChange();
  }
  function l() {
    return b;
  }
  function v() {
    s++, i || (i = o ? o.addNestedSub(d) : n.subscribe(d), a = Wr());
  }
  function E() {
    s--, i && s === 0 && (i(), i = void 0, a.clear(), a = Ke);
  }
  function _() {
    b || (b = !0, v());
  }
  function S() {
    b && (b = !1, E());
  }
  const R = {
    addNestedSub: x,
    notifyNestedSubs: w,
    handleChangeWrapper: d,
    isSubscribed: l,
    trySubscribe: _,
    tryUnsubscribe: S,
    getListeners: () => a
  };
  return R;
}
var Mr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Nr = Mr ? L.useLayoutEffect : L.useEffect;
function Ur({
  store: n,
  context: o,
  children: i,
  serverState: a,
  stabilityCheck: s = "once",
  identityFunctionCheck: b = "once"
}) {
  const x = L.useMemo(() => {
    const l = Ir(n);
    return {
      store: n,
      subscription: l,
      getServerState: a ? () => a : void 0,
      stabilityCheck: s,
      identityFunctionCheck: b
    };
  }, [n, a, s, b]), w = L.useMemo(() => n.getState(), [n]);
  Nr(() => {
    const { subscription: l } = x;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), w !== n.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [x, w]);
  const d = o || N;
  return /* @__PURE__ */ L.createElement(d.Provider, { value: x }, i);
}
var $r = Ur;
function Ze(n = N) {
  const o = n === N ? Je : (
    // @ts-ignore
    ge(n)
  ), i = () => {
    const { store: a } = o();
    return a;
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var Yr = /* @__PURE__ */ Ze();
function Br(n = N) {
  const o = n === N ? Yr : Ze(n), i = () => o().dispatch;
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var zr = /* @__PURE__ */ Br();
Dr(Pr.useSyncExternalStoreWithSelector);
function Hr(n, o) {
  return function(a) {
    return o(
      ie.update({
        data: a,
        state: n
      })
    ), X.getState().This[n];
  };
}
function Gr(n, o) {
  return function(a) {
    return o(
      ie.update({
        data: a,
        state: n
      })
    ), X.getState().This[n];
  };
}
function qr(n, o) {
  return function(a, s) {
    return o(
      ie.upsert({
        data: a,
        active_state: n,
        config: s ?? {}
      })
    ), X.getState().This[n];
  };
}
function Kr(n) {
  let o = zr();
  const i = Vr((a) => a.This);
  return /* @__PURE__ */ J.jsx(
    Or.Provider,
    {
      ...n,
      value: (a, s) => (!i[a] && s && o(
        ie.update({
          data: s,
          state: a
        })
      ), {
        update: Hr(a, o),
        append: Gr(a, o),
        upsert: qr(a, o),
        dispatcher: o,
        This: i[a] ?? null,
        get: () => X.getState().This[a]
      })
    }
  );
}
function Zr(n) {
  return /* @__PURE__ */ J.jsx(J.Fragment, { children: /* @__PURE__ */ J.jsx($r, { store: X, children: /* @__PURE__ */ J.jsx(Kr, { ...n }) }) });
}
export {
  Zr as ThisProvider
};
//# sourceMappingURL=thisProvider.js.map
