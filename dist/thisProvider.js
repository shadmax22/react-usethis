import * as pe from "react";
import ae from "react";
import { T as gr, u as Rr, _ as xr } from "./context-BcLDXb4T.js";
var _e = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Or() {
  if ($e)
    return q;
  $e = 1;
  var n = ae, u = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(O, f, c) {
    var v, S = {}, y = null, E = null;
    c !== void 0 && (y = "" + c), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (E = f.ref);
    for (v in f)
      o.call(f, v) && !b.hasOwnProperty(v) && (S[v] = f[v]);
    if (O && O.defaultProps)
      for (v in f = O.defaultProps, f)
        S[v] === void 0 && (S[v] = f[v]);
    return { $$typeof: u, type: O, key: y, ref: E, props: S, _owner: d.current };
  }
  return q.Fragment = i, q.jsx = w, q.jsxs = w, q;
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
var Ue;
function wr() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ae, u = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), O = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), R = Symbol.iterator, m = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = R && e[R] || e[m];
      return typeof r == "function" ? r : null;
    }
    var T = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
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
        var h = t.map(function(l) {
          return String(l);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var V = !1, P = !1, D = !1, $ = !1, X = !1, Z;
    Z = Symbol.for("react.module.reference");
    function oe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === b || X || e === d || e === c || e === v || $ || e === E || V || P || D || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === S || e.$$typeof === w || e.$$typeof === O || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function U(e, r, t) {
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
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case i:
          return "Portal";
        case b:
          return "Profiler";
        case d:
          return "StrictMode";
        case c:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var r = e;
            return Y(r) + ".Consumer";
          case w:
            var t = e;
            return Y(t._context) + ".Provider";
          case f:
            return U(e, e.render, "ForwardRef");
          case S:
            var a = e.displayName || null;
            return a !== null ? a : A(e.type) || "Memo";
          case y: {
            var p = e, h = p._payload, l = p._init;
            try {
              return A(l(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, W = 0, B, Ee, me, ge, Re, xe, Oe;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function Xe() {
      {
        if (W === 0) {
          B = console.log, Ee = console.info, me = console.warn, ge = console.error, Re = console.group, xe = console.groupCollapsed, Oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: we,
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
        W++;
      }
    }
    function Ze() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: B
            }),
            info: N({}, e, {
              value: Ee
            }),
            warn: N({}, e, {
              value: me
            }),
            error: N({}, e, {
              value: ge
            }),
            group: N({}, e, {
              value: Re
            }),
            groupCollapsed: N({}, e, {
              value: xe
            }),
            groupEnd: N({}, e, {
              value: Oe
            })
          });
        }
        W < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (I) {
              a = I;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (I) {
              a = I;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            a = I;
          }
          e();
        }
      } catch (I) {
        if (I && a && typeof I.stack == "string") {
          for (var s = I.stack.split(`
`), j = a.stack.split(`
`), g = s.length - 1, x = j.length - 1; g >= 1 && x >= 0 && s[g] !== j[x]; )
            x--;
          for (; g >= 1 && x >= 0; g--, x--)
            if (s[g] !== j[x]) {
              if (g !== 1 || x !== 1)
                do
                  if (g--, x--, x < 0 || s[g] !== j[x]) {
                    var F = `
` + s[g].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, F), F;
                  }
                while (g >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        se = !1, ie.current = h, Ze(), Error.prepareStackTrace = p;
      }
      var G = e ? e.displayName || e.name : "", Me = G ? Q(G) : "";
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
          case f:
            return er(e.render);
          case S:
            return re(e.type, r, t);
          case y: {
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
        for (var l in e)
          if (h(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var j = Error((a || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              s = e[l](r, l, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              s = g;
            }
            s && !(s instanceof Error) && (ne(p), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, l, typeof s), ne(null)), s instanceof Error && !(s.message in Ce) && (Ce[s.message] = !0, ne(p), _("Failed %s type: %s", t, s.message), ne(null));
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
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), je(e);
    }
    var H = T.ReactCurrentOwner, ir = {
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
      if (typeof e.ref == "string" && H.current && r && H.current.stateNode !== r) {
        var t = A(H.current.type);
        le[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(H.current.type), e.ref), le[t] = !0);
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          De || (De = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ae || (Ae = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var dr = function(e, r, t, a, p, h, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
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
        var h, l = {}, s = null, j = null;
        t !== void 0 && (ke(t), s = "" + t), sr(r) && (ke(r.key), s = "" + r.key), ur(r) && (j = r.ref, cr(r, p));
        for (h in r)
          te.call(r, h) && !ir.hasOwnProperty(h) && (l[h] = r[h]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (h in g)
            l[h] === void 0 && (l[h] = g[h]);
        }
        if (s || j) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && lr(l, x), j && fr(l, x);
        }
        return dr(e, s, j, p, a, H.current, l);
      }
    }
    var fe = T.ReactCurrentOwner, Le = T.ReactDebugCurrentFrame;
    function z(e) {
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
    function Ve() {
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
    var Fe = {};
    function hr(e) {
      {
        var r = Ve();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ne(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = hr(r);
        if (Fe[t])
          return;
        Fe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== fe.current && (a = " It was passed a child from " + A(e._owner.type) + "."), z(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), z(null);
      }
    }
    function We(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ve(a) && Ne(a, r);
          }
        else if (ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = k(e);
          if (typeof p == "function" && p !== e.entries)
            for (var h = p.call(e), l; !(l = h.next()).done; )
              ve(l.value) && Ne(l.value, r);
        }
      }
    }
    function yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === S))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = A(r);
          tr(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !de) {
          de = !0;
          var p = A(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            z(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function Ie(e, r, t, a, p, h) {
      {
        var l = oe(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = pr(p);
          j ? s += j : s += Ve();
          var g;
          e === null ? g = "null" : ce(e) ? g = "array" : e !== void 0 && e.$$typeof === u ? (g = "<" + (A(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, s);
        }
        var x = vr(e, r, t, p, h);
        if (x == null)
          return x;
        if (l) {
          var F = r.children;
          if (F !== void 0)
            if (a)
              if (ce(F)) {
                for (var G = 0; G < F.length; G++)
                  We(F[G], e);
                Object.freeze && Object.freeze(F);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(F, e);
        }
        return e === o ? _r(x) : yr(x), x;
      }
    }
    function br(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function Sr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var Er = Sr, mr = br;
    K.Fragment = o, K.jsx = Er, K.jsxs = mr;
  }()), K;
}
process.env.NODE_ENV === "production" ? _e.exports = Or() : _e.exports = wr();
var J = _e.exports, be = { exports: {} }, he = {};
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
  function u(f, c) {
    return f === c && (f !== 0 || 1 / f === 1 / c) || f !== f && c !== c;
  }
  var i = typeof Object.is == "function" ? Object.is : u, o = n.useSyncExternalStore, d = n.useRef, b = n.useEffect, w = n.useMemo, O = n.useDebugValue;
  return he.useSyncExternalStoreWithSelector = function(f, c, v, S, y) {
    var E = d(null);
    if (E.current === null) {
      var R = { hasValue: !1, value: null };
      E.current = R;
    } else
      R = E.current;
    E = w(function() {
      function k(P) {
        if (!T) {
          if (T = !0, _ = P, P = S(P), y !== void 0 && R.hasValue) {
            var D = R.value;
            if (y(D, P))
              return C = D;
          }
          return C = P;
        }
        if (D = C, i(_, P))
          return D;
        var $ = S(P);
        return y !== void 0 && y(D, $) ? D : (_ = P, C = $);
      }
      var T = !1, _, C, V = v === void 0 ? null : v;
      return [function() {
        return k(c());
      }, V === null ? void 0 : function() {
        return k(V());
      }];
    }, [c, v, S, y]);
    var m = o(f, E[0], E[1]);
    return b(function() {
      R.hasValue = !0, R.value = m;
    }, [m]), O(m), m;
  }, he;
}
var ye = {};
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
    var i = typeof Object.is == "function" ? Object.is : u, o = n.useSyncExternalStore, d = n.useRef, b = n.useEffect, w = n.useMemo, O = n.useDebugValue;
    function f(c, v, S, y, E) {
      var R = d(null), m;
      R.current === null ? (m = {
        hasValue: !1,
        value: null
      }, R.current = m) : m = R.current;
      var k = w(function() {
        var V = !1, P, D, $ = function(U) {
          if (!V) {
            V = !0, P = U;
            var Y = y(U);
            if (E !== void 0 && m.hasValue) {
              var A = m.value;
              if (E(A, Y))
                return D = A, A;
            }
            return D = Y, Y;
          }
          var N = P, W = D;
          if (i(N, U))
            return W;
          var B = y(U);
          return E !== void 0 && E(W, B) ? W : (P = U, D = B, B);
        }, X = S === void 0 ? null : S, Z = function() {
          return $(v());
        }, oe = X === null ? void 0 : function() {
          return $(X());
        };
        return [Z, oe];
      }, [v, S, y, E]), T = k[0], _ = k[1], C = o(c, T, _);
      return b(function() {
        m.hasValue = !0, m.value = C;
      }, [C]), O(C), C;
    }
    ye.useSyncExternalStoreWithSelector = f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ye;
}
process.env.NODE_ENV === "production" ? be.exports = Tr() : be.exports = Cr();
var Pr = be.exports, L = (
  // prettier-ignore
  // @ts-ignore
  "default" in pe ? pe.default : pe
), ze = Symbol.for("react-redux-context"), Ge = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function jr() {
  if (!L.createContext)
    return {};
  const n = Ge[ze] ?? (Ge[ze] = /* @__PURE__ */ new Map());
  let u = n.get(L.createContext);
  return u || (u = L.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (u.displayName = "ReactRedux"), n.set(L.createContext, u)), u;
}
var M = /* @__PURE__ */ jr(), kr = () => {
  throw new Error("uSES not initialized!");
};
function Se(n = M) {
  return function() {
    const i = L.useContext(n);
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return i;
  };
}
var qe = /* @__PURE__ */ Se(), Ke = kr, Dr = (n) => {
  Ke = n;
}, Ar = (n, u) => n === u;
function Lr(n = M) {
  const u = n === M ? qe : Se(n), i = (o, d = {}) => {
    const { equalityFn: b = Ar, devModeChecks: w = {} } = typeof d == "function" ? { equalityFn: d } : d;
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("You must pass a selector to useSelector");
      if (typeof o != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof b != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: O,
      subscription: f,
      getServerState: c,
      stabilityCheck: v,
      identityFunctionCheck: S
    } = u(), y = L.useRef(!0), E = L.useCallback(
      {
        [o.name](m) {
          const k = o(m);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: T,
              stabilityCheck: _
            } = {
              stabilityCheck: v,
              identityFunctionCheck: S,
              ...w
            };
            if (_ === "always" || _ === "once" && y.current) {
              const C = o(m);
              if (!b(k, C)) {
                let V;
                try {
                  throw new Error();
                } catch (P) {
                  ({ stack: V } = P);
                }
                console.warn(
                  "Selector " + (o.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: m,
                    selected: k,
                    selected2: C,
                    stack: V
                  }
                );
              }
            }
            if ((T === "always" || T === "once" && y.current) && k === m) {
              let C;
              try {
                throw new Error();
              } catch (V) {
                ({ stack: C } = V);
              }
              console.warn(
                "Selector " + (o.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: C }
              );
            }
            y.current && (y.current = !1);
          }
          return k;
        }
      }[o.name],
      [o, v, w.stabilityCheck]
    ), R = Ke(
      f.addNestedSub,
      O.getState,
      c || O.getState,
      E,
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
function Nr() {
  let n = null, u = null;
  return {
    clear() {
      n = null, u = null;
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
      let o = n;
      for (; o; )
        i.push(o), o = o.next;
      return i;
    },
    subscribe(i) {
      let o = !0;
      const d = u = {
        callback: i,
        next: null,
        prev: u
      };
      return d.prev ? d.prev.next = d : n = d, function() {
        !o || n === null || (o = !1, d.next ? d.next.prev = d.prev : u = d.prev, d.prev ? d.prev.next = d.next : n = d.next);
      };
    }
  };
}
var He = {
  notify() {
  },
  get: () => []
};
function Wr(n, u) {
  let i, o = He, d = 0, b = !1;
  function w(m) {
    v();
    const k = o.subscribe(m);
    let T = !1;
    return () => {
      T || (T = !0, k(), S());
    };
  }
  function O() {
    o.notify();
  }
  function f() {
    R.onStateChange && R.onStateChange();
  }
  function c() {
    return b;
  }
  function v() {
    d++, i || (i = u ? u.addNestedSub(f) : n.subscribe(f), o = Nr());
  }
  function S() {
    d--, i && d === 0 && (i(), i = void 0, o.clear(), o = He);
  }
  function y() {
    b || (b = !0, v());
  }
  function E() {
    b && (b = !1, S());
  }
  const R = {
    addNestedSub: w,
    notifyNestedSubs: O,
    handleChangeWrapper: f,
    isSubscribed: c,
    trySubscribe: y,
    tryUnsubscribe: E,
    getListeners: () => o
  };
  return R;
}
var Ir = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mr = Ir ? L.useLayoutEffect : L.useEffect;
function $r({
  store: n,
  context: u,
  children: i,
  serverState: o,
  stabilityCheck: d = "once",
  identityFunctionCheck: b = "once"
}) {
  const w = L.useMemo(() => {
    const c = Wr(n);
    return {
      store: n,
      subscription: c,
      getServerState: o ? () => o : void 0,
      stabilityCheck: d,
      identityFunctionCheck: b
    };
  }, [n, o, d, b]), O = L.useMemo(() => n.getState(), [n]);
  Mr(() => {
    const { subscription: c } = w;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), O !== n.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [w, O]);
  const f = u || M;
  return /* @__PURE__ */ L.createElement(f.Provider, { value: w }, i);
}
var Ur = $r;
function Je(n = M) {
  const u = n === M ? qe : (
    // @ts-ignore
    Se(n)
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
var zr = /* @__PURE__ */ Br();
Dr(Pr.useSyncExternalStoreWithSelector);
function Gr(n) {
  const u = zr();
  Vr((o) => o.This);
  const i = Rr(u);
  return /* @__PURE__ */ J.jsx(
    gr.Provider,
    {
      ...n,
      value: i
    }
  );
}
function Kr(n) {
  return /* @__PURE__ */ J.jsx(J.Fragment, { children: /* @__PURE__ */ J.jsx(Ur, { store: xr, children: /* @__PURE__ */ J.jsx(Gr, { ...n }) }) });
}
export {
  Kr as ThisProvider
};
//# sourceMappingURL=thisProvider.js.map
