import * as pe from "react";
import ae from "react";
import { T as gr, _ as Rr, a as Or } from "./Dispatcher-CC3uGwIT.js";
var ye = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function wr() {
  if (Ue)
    return q;
  Ue = 1;
  var n = ae, u = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(w, d, c) {
    var v, E = {}, _ = null, b = null;
    c !== void 0 && (_ = "" + c), d.key !== void 0 && (_ = "" + d.key), d.ref !== void 0 && (b = d.ref);
    for (v in d)
      o.call(d, v) && !S.hasOwnProperty(v) && (E[v] = d[v]);
    if (w && w.defaultProps)
      for (v in d = w.defaultProps, d)
        E[v] === void 0 && (E[v] = d[v]);
    return { $$typeof: u, type: w, key: _, ref: b, props: E, _owner: l.current };
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
var $e;
function xr() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ae, u = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), w = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), R = Symbol.iterator, m = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = R && e[R] || e[m];
      return typeof r == "function" ? r : null;
    }
    var T = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        C("error", e, t);
      }
    }
    function C(e, r, t) {
      {
        var a = T.ReactDebugCurrentFrame, p = a.getStackAddendum();
        p !== "" && (r += "%s", t = t.concat([p]));
        var h = t.map(function(f) {
          return String(f);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var N = !1, P = !1, D = !1, U = !1, X = !1, Z;
    Z = Symbol.for("react.module.reference");
    function oe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === S || X || e === l || e === c || e === v || U || e === b || N || P || D || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === E || e.$$typeof === x || e.$$typeof === w || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function $(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
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
        case o:
          return "Fragment";
        case i:
          return "Portal";
        case S:
          return "Profiler";
        case l:
          return "StrictMode";
        case c:
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
            var a = e.displayName || null;
            return a !== null ? a : A(e.type) || "Memo";
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
    var V = Object.assign, F = 0, B, be, me, ge, Re, Oe, we;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function Xe() {
      {
        if (F === 0) {
          B = console.log, be = console.info, me = console.warn, ge = console.error, Re = console.group, Oe = console.groupCollapsed, we = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
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
        F++;
      }
    }
    function Ze() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, e, {
              value: B
            }),
            info: V({}, e, {
              value: be
            }),
            warn: V({}, e, {
              value: me
            }),
            error: V({}, e, {
              value: ge
            }),
            group: V({}, e, {
              value: Re
            }),
            groupCollapsed: V({}, e, {
              value: Oe
            }),
            groupEnd: V({}, e, {
              value: we
            })
          });
        }
        F < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = T.ReactCurrentDispatcher, ue;
    function Q(e, r, t) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (p) {
            var a = p.stack.trim().match(/\n( *(at )?)/);
            ue = a && a[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var se = !1, ee;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new Qe();
    }
    function Te(e, r) {
      if (!e || se)
        return "";
      {
        var t = ee.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      se = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = ie.current, ie.current = null, Xe();
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
            } catch (W) {
              a = W;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (W) {
              a = W;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            a = W;
          }
          e();
        }
      } catch (W) {
        if (W && a && typeof W.stack == "string") {
          for (var s = W.stack.split(`
`), j = a.stack.split(`
`), g = s.length - 1, O = j.length - 1; g >= 1 && O >= 0 && s[g] !== j[O]; )
            O--;
          for (; g >= 1 && O >= 0; g--, O--)
            if (s[g] !== j[O]) {
              if (g !== 1 || O !== 1)
                do
                  if (g--, O--, O < 0 || s[g] !== j[O]) {
                    var I = `
` + s[g].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, I), I;
                  }
                while (g >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        se = !1, ie.current = h, Ze(), Error.prepareStackTrace = p;
      }
      var z = e ? e.displayName || e.name : "", Me = z ? Q(z) : "";
      return typeof e == "function" && ee.set(e, Me), Me;
    }
    function er(e, r, t) {
      return Te(e, !1);
    }
    function rr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function re(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, rr(e));
      if (typeof e == "string")
        return Q(e);
      switch (e) {
        case c:
          return Q("Suspense");
        case v:
          return Q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return er(e.render);
          case E:
            return re(e.type, r, t);
          case _: {
            var a = e, p = a._payload, h = a._init;
            try {
              return re(h(p), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var te = Object.prototype.hasOwnProperty, Ce = {}, Pe = T.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, t = re(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    function tr(e, r, t, a, p) {
      {
        var h = Function.call.bind(te);
        for (var f in e)
          if (h(e, f)) {
            var s = void 0;
            try {
              if (typeof e[f] != "function") {
                var j = Error((a || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              s = e[f](r, f, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              s = g;
            }
            s && !(s instanceof Error) && (ne(p), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, f, typeof s), ne(null)), s instanceof Error && !(s.message in Ce) && (Ce[s.message] = !0, ne(p), y("Failed %s type: %s", t, s.message), ne(null));
          }
      }
    }
    var nr = Array.isArray;
    function ce(e) {
      return nr(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function or(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function ke(e) {
      if (or(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), je(e);
    }
    var G = T.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Ae, le;
    le = {};
    function ur(e) {
      if (te.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (te.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function cr(e, r) {
      if (typeof e.ref == "string" && G.current && r && G.current.stateNode !== r) {
        var t = A(G.current.type);
        le[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(G.current.type), e.ref), le[t] = !0);
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          De || (De = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function fr(e, r) {
      {
        var t = function() {
          Ae || (Ae = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var dr = function(e, r, t, a, p, h, f) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function vr(e, r, t, a, p) {
      {
        var h, f = {}, s = null, j = null;
        t !== void 0 && (ke(t), s = "" + t), sr(r) && (ke(r.key), s = "" + r.key), ur(r) && (j = r.ref, cr(r, p));
        for (h in r)
          te.call(r, h) && !ir.hasOwnProperty(h) && (f[h] = r[h]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (h in g)
            f[h] === void 0 && (f[h] = g[h]);
        }
        if (s || j) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && lr(f, O), j && fr(f, O);
        }
        return dr(e, s, j, p, a, G.current, f);
      }
    }
    var fe = T.ReactCurrentOwner, Le = T.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = re(e.type, e._source, r ? r.type : null);
        Le.setExtraStackFrame(t);
      } else
        Le.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function Ne() {
      {
        if (fe.current) {
          var e = A(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function pr(e) {
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
    function hr(e) {
      {
        var r = Ne();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ve(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = hr(r);
        if (Ie[t])
          return;
        Ie[t] = !0;
        var a = "";
        e && e._owner && e._owner !== fe.current && (a = " It was passed a child from " + A(e._owner.type) + "."), H(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), H(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ve(a) && Ve(a, r);
          }
        else if (ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = k(e);
          if (typeof p == "function" && p !== e.entries)
            for (var h = p.call(e), f; !(f = h.next()).done; )
              ve(f.value) && Ve(f.value, r);
        }
      }
    }
    function _r(e) {
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
          var a = A(r);
          tr(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !de) {
          de = !0;
          var p = A(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            H(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), H(null);
            break;
          }
        }
        e.ref !== null && (H(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    function We(e, r, t, a, p, h) {
      {
        var f = oe(e);
        if (!f) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = pr(p);
          j ? s += j : s += Ne();
          var g;
          e === null ? g = "null" : ce(e) ? g = "array" : e !== void 0 && e.$$typeof === u ? (g = "<" + (A(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, s);
        }
        var O = vr(e, r, t, p, h);
        if (O == null)
          return O;
        if (f) {
          var I = r.children;
          if (I !== void 0)
            if (a)
              if (ce(I)) {
                for (var z = 0; z < I.length; z++)
                  Fe(I[z], e);
                Object.freeze && Object.freeze(I);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(I, e);
        }
        return e === o ? yr(O) : _r(O), O;
      }
    }
    function Sr(e, r, t) {
      return We(e, r, t, !0);
    }
    function Er(e, r, t) {
      return We(e, r, t, !1);
    }
    var br = Er, mr = Sr;
    K.Fragment = o, K.jsx = br, K.jsxs = mr;
  }()), K;
}
process.env.NODE_ENV === "production" ? ye.exports = wr() : ye.exports = xr();
var J = ye.exports, Se = { exports: {} }, he = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Tr() {
  if (Ye)
    return he;
  Ye = 1;
  var n = ae;
  function u(d, c) {
    return d === c && (d !== 0 || 1 / d === 1 / c) || d !== d && c !== c;
  }
  var i = typeof Object.is == "function" ? Object.is : u, o = n.useSyncExternalStore, l = n.useRef, S = n.useEffect, x = n.useMemo, w = n.useDebugValue;
  return he.useSyncExternalStoreWithSelector = function(d, c, v, E, _) {
    var b = l(null);
    if (b.current === null) {
      var R = { hasValue: !1, value: null };
      b.current = R;
    } else
      R = b.current;
    b = x(function() {
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
      var T = !1, y, C, N = v === void 0 ? null : v;
      return [function() {
        return k(c());
      }, N === null ? void 0 : function() {
        return k(N());
      }];
    }, [c, v, E, _]);
    var m = o(d, b[0], b[1]);
    return S(function() {
      R.hasValue = !0, R.value = m;
    }, [m]), w(m), m;
  }, he;
}
var _e = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Cr() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = ae;
    function u(c, v) {
      return c === v && (c !== 0 || 1 / c === 1 / v) || c !== c && v !== v;
    }
    var i = typeof Object.is == "function" ? Object.is : u, o = n.useSyncExternalStore, l = n.useRef, S = n.useEffect, x = n.useMemo, w = n.useDebugValue;
    function d(c, v, E, _, b) {
      var R = l(null), m;
      R.current === null ? (m = {
        hasValue: !1,
        value: null
      }, R.current = m) : m = R.current;
      var k = x(function() {
        var N = !1, P, D, U = function($) {
          if (!N) {
            N = !0, P = $;
            var Y = _($);
            if (b !== void 0 && m.hasValue) {
              var A = m.value;
              if (b(A, Y))
                return D = A, A;
            }
            return D = Y, Y;
          }
          var V = P, F = D;
          if (i(V, $))
            return F;
          var B = _($);
          return b !== void 0 && b(F, B) ? F : (P = $, D = B, B);
        }, X = E === void 0 ? null : E, Z = function() {
          return U(v());
        }, oe = X === null ? void 0 : function() {
          return U(X());
        };
        return [Z, oe];
      }, [v, E, _, b]), T = k[0], y = k[1], C = o(c, T, y);
      return S(function() {
        m.hasValue = !0, m.value = C;
      }, [C]), w(C), C;
    }
    _e.useSyncExternalStoreWithSelector = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), _e;
}
process.env.NODE_ENV === "production" ? Se.exports = Tr() : Se.exports = Cr();
var Pr = Se.exports, L = (
  // prettier-ignore
  // @ts-ignore
  "default" in pe ? pe.default : pe
), He = Symbol.for("react-redux-context"), ze = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function jr() {
  if (!L.createContext)
    return {};
  const n = ze[He] ?? (ze[He] = /* @__PURE__ */ new Map());
  let u = n.get(L.createContext);
  return u || (u = L.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (u.displayName = "ReactRedux"), n.set(L.createContext, u)), u;
}
var M = /* @__PURE__ */ jr(), kr = () => {
  throw new Error("uSES not initialized!");
};
function Ee(n = M) {
  return function() {
    const i = L.useContext(n);
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return i;
  };
}
var qe = /* @__PURE__ */ Ee(), Ke = kr, Dr = (n) => {
  Ke = n;
}, Ar = (n, u) => n === u;
function Lr(n = M) {
  const u = n === M ? qe : Ee(n), i = (o, l = {}) => {
    const { equalityFn: S = Ar, devModeChecks: x = {} } = typeof l == "function" ? { equalityFn: l } : l;
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("You must pass a selector to useSelector");
      if (typeof o != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof S != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: w,
      subscription: d,
      getServerState: c,
      stabilityCheck: v,
      identityFunctionCheck: E
    } = u(), _ = L.useRef(!0), b = L.useCallback(
      {
        [o.name](m) {
          const k = o(m);
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
              const C = o(m);
              if (!S(k, C)) {
                let N;
                try {
                  throw new Error();
                } catch (P) {
                  ({ stack: N } = P);
                }
                console.warn(
                  "Selector " + (o.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: m,
                    selected: k,
                    selected2: C,
                    stack: N
                  }
                );
              }
            }
            if ((T === "always" || T === "once" && _.current) && k === m) {
              let C;
              try {
                throw new Error();
              } catch (N) {
                ({ stack: C } = N);
              }
              console.warn(
                "Selector " + (o.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: C }
              );
            }
            _.current && (_.current = !1);
          }
          return k;
        }
      }[o.name],
      [o, v, x.stabilityCheck]
    ), R = Ke(
      d.addNestedSub,
      w.getState,
      c || w.getState,
      b,
      S
    );
    return L.useDebugValue(R), R;
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var Nr = /* @__PURE__ */ Lr();
function Ir(n) {
  n();
}
function Vr() {
  let n = null, u = null;
  return {
    clear() {
      n = null, u = null;
    },
    notify() {
      Ir(() => {
        let i = n;
        for (; i; )
          i.callback(), i = i.next;
      });
    },
    get() {
      const i = [];
      let o = n;
      for (; o; )
        i.push(o), o = o.next;
      return i;
    },
    subscribe(i) {
      let o = !0;
      const l = u = {
        callback: i,
        next: null,
        prev: u
      };
      return l.prev ? l.prev.next = l : n = l, function() {
        !o || n === null || (o = !1, l.next ? l.next.prev = l.prev : u = l.prev, l.prev ? l.prev.next = l.next : n = l.next);
      };
    }
  };
}
var Ge = {
  notify() {
  },
  get: () => []
};
function Fr(n, u) {
  let i, o = Ge, l = 0, S = !1;
  function x(m) {
    v();
    const k = o.subscribe(m);
    let T = !1;
    return () => {
      T || (T = !0, k(), E());
    };
  }
  function w() {
    o.notify();
  }
  function d() {
    R.onStateChange && R.onStateChange();
  }
  function c() {
    return S;
  }
  function v() {
    l++, i || (i = u ? u.addNestedSub(d) : n.subscribe(d), o = Vr());
  }
  function E() {
    l--, i && l === 0 && (i(), i = void 0, o.clear(), o = Ge);
  }
  function _() {
    S || (S = !0, v());
  }
  function b() {
    S && (S = !1, E());
  }
  const R = {
    addNestedSub: x,
    notifyNestedSubs: w,
    handleChangeWrapper: d,
    isSubscribed: c,
    trySubscribe: _,
    tryUnsubscribe: b,
    getListeners: () => o
  };
  return R;
}
var Wr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mr = Wr ? L.useLayoutEffect : L.useEffect;
function Ur({
  store: n,
  context: u,
  children: i,
  serverState: o,
  stabilityCheck: l = "once",
  identityFunctionCheck: S = "once"
}) {
  const x = L.useMemo(() => {
    const c = Fr(n);
    return {
      store: n,
      subscription: c,
      getServerState: o ? () => o : void 0,
      stabilityCheck: l,
      identityFunctionCheck: S
    };
  }, [n, o, l, S]), w = L.useMemo(() => n.getState(), [n]);
  Mr(() => {
    const { subscription: c } = x;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), w !== n.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [x, w]);
  const d = u || M;
  return /* @__PURE__ */ L.createElement(d.Provider, { value: x }, i);
}
var $r = Ur;
function Je(n = M) {
  const u = n === M ? qe : (
    // @ts-ignore
    Ee(n)
  ), i = () => {
    const { store: o } = u();
    return o;
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var Yr = /* @__PURE__ */ Je();
function Br(n = M) {
  const u = n === M ? Yr : Je(n), i = () => u().dispatch;
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var Hr = /* @__PURE__ */ Br();
Dr(Pr.useSyncExternalStoreWithSelector);
function zr(n) {
  let u = Hr();
  const i = Nr((l) => l.This), o = Rr(u, i);
  return /* @__PURE__ */ J.jsx(
    gr.Provider,
    {
      ...n,
      value: o
    }
  );
}
function Kr(n) {
  return /* @__PURE__ */ J.jsx(J.Fragment, { children: /* @__PURE__ */ J.jsx($r, { store: Or, children: /* @__PURE__ */ J.jsx(zr, { ...n }) }) });
}
export {
  Kr as ThisProvider
};
//# sourceMappingURL=thisProvider.js.map
