import * as Be from "react";
import xe from "react";
import { _ as Kr, T as qr } from "./js-upsert-DwgPhQGi.js";
var Je = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Gr() {
  if (Pt)
    return le;
  Pt = 1;
  var e = xe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, f) {
    var c, p = {}, h = null, v = null;
    f !== void 0 && (h = "" + f), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (c in l)
      n.call(l, c) && !a.hasOwnProperty(c) && (p[c] = l[c]);
    if (u && u.defaultProps)
      for (c in l = u.defaultProps, l)
        p[c] === void 0 && (p[c] = l[c]);
    return { $$typeof: t, type: u, key: h, ref: v, props: p, _owner: i.current };
  }
  return le.Fragment = r, le.jsx = s, le.jsxs = s, le;
}
var de = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function Hr() {
  return jt || (jt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = xe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), E = Symbol.iterator, _ = "@@iterator";
    function m(o) {
      if (o === null || typeof o != "object")
        return null;
      var d = E && o[E] || o[_];
      return typeof d == "function" ? d : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(o) {
      {
        for (var d = arguments.length, y = new Array(d > 1 ? d - 1 : 0), w = 1; w < d; w++)
          y[w - 1] = arguments[w];
        b("error", o, y);
      }
    }
    function b(o, d, y) {
      {
        var w = O.ReactDebugCurrentFrame, T = w.getStackAddendum();
        T !== "" && (d += "%s", y = y.concat([T]));
        var k = y.map(function(C) {
          return String(C);
        });
        k.unshift("Warning: " + d), Function.prototype.apply.call(console[o], console, k);
      }
    }
    var S = !1, R = !1, x = !1, j = !1, P = !1, B;
    B = Symbol.for("react.module.reference");
    function ee(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === a || P || o === i || o === f || o === c || j || o === v || S || R || x || typeof o == "object" && o !== null && (o.$$typeof === h || o.$$typeof === p || o.$$typeof === s || o.$$typeof === u || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === B || o.getModuleId !== void 0));
    }
    function Y(o, d, y) {
      var w = o.displayName;
      if (w)
        return w;
      var T = d.displayName || d.name || "";
      return T !== "" ? y + "(" + T + ")" : y;
    }
    function oe(o) {
      return o.displayName || "Context";
    }
    function F(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            var d = o;
            return oe(d) + ".Consumer";
          case s:
            var y = o;
            return oe(y._context) + ".Provider";
          case l:
            return Y(o, o.render, "ForwardRef");
          case p:
            var w = o.displayName || null;
            return w !== null ? w : F(o.type) || "Memo";
          case h: {
            var T = o, k = T._payload, C = T._init;
            try {
              return F(C(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, q = 0, ie, lt, dt, pt, ht, yt, vt;
    function mt() {
    }
    mt.__reactDisabledLog = !0;
    function _r() {
      {
        if (q === 0) {
          ie = console.log, lt = console.info, dt = console.warn, pt = console.error, ht = console.group, yt = console.groupCollapsed, vt = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: mt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        q++;
      }
    }
    function gr() {
      {
        if (q--, q === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, o, {
              value: ie
            }),
            info: K({}, o, {
              value: lt
            }),
            warn: K({}, o, {
              value: dt
            }),
            error: K({}, o, {
              value: pt
            }),
            group: K({}, o, {
              value: ht
            }),
            groupCollapsed: K({}, o, {
              value: yt
            }),
            groupEnd: K({}, o, {
              value: vt
            })
          });
        }
        q < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ie = O.ReactCurrentDispatcher, Ve;
    function be(o, d, y) {
      {
        if (Ve === void 0)
          try {
            throw Error();
          } catch (T) {
            var w = T.stack.trim().match(/\n( *(at )?)/);
            Ve = w && w[1] || "";
          }
        return `
` + Ve + o;
      }
    }
    var $e = !1, we;
    {
      var Sr = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Sr();
    }
    function Et(o, d) {
      if (!o || $e)
        return "";
      {
        var y = we.get(o);
        if (y !== void 0)
          return y;
      }
      var w;
      $e = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = Ie.current, Ie.current = null, _r();
      try {
        if (d) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (G) {
              w = G;
            }
            Reflect.construct(o, [], C);
          } else {
            try {
              C.call();
            } catch (G) {
              w = G;
            }
            o.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            w = G;
          }
          o();
        }
      } catch (G) {
        if (G && w && typeof G.stack == "string") {
          for (var N = G.stack.split(`
`), V = w.stack.split(`
`), A = N.length - 1, M = V.length - 1; A >= 1 && M >= 0 && N[A] !== V[M]; )
            M--;
          for (; A >= 1 && M >= 0; A--, M--)
            if (N[A] !== V[M]) {
              if (A !== 1 || M !== 1)
                do
                  if (A--, M--, M < 0 || N[A] !== V[M]) {
                    var U = `
` + N[A].replace(" at new ", " at ");
                    return o.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", o.displayName)), typeof o == "function" && we.set(o, U), U;
                  }
                while (A >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        $e = !1, Ie.current = k, gr(), Error.prepareStackTrace = T;
      }
      var se = o ? o.displayName || o.name : "", xt = se ? be(se) : "";
      return typeof o == "function" && we.set(o, xt), xt;
    }
    function Or(o, d, y) {
      return Et(o, !1);
    }
    function Nr(o) {
      var d = o.prototype;
      return !!(d && d.isReactComponent);
    }
    function _e(o, d, y) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Et(o, Nr(o));
      if (typeof o == "string")
        return be(o);
      switch (o) {
        case f:
          return be("Suspense");
        case c:
          return be("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return Or(o.render);
          case p:
            return _e(o.type, d, y);
          case h: {
            var w = o, T = w._payload, k = w._init;
            try {
              return _e(k(T), d, y);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, bt = {}, wt = O.ReactDebugCurrentFrame;
    function Se(o) {
      if (o) {
        var d = o._owner, y = _e(o.type, o._source, d ? d.type : null);
        wt.setExtraStackFrame(y);
      } else
        wt.setExtraStackFrame(null);
    }
    function Rr(o, d, y, w, T) {
      {
        var k = Function.call.bind(ge);
        for (var C in o)
          if (k(o, C)) {
            var N = void 0;
            try {
              if (typeof o[C] != "function") {
                var V = Error((w || "React class") + ": " + y + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              N = o[C](d, C, w, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              N = A;
            }
            N && !(N instanceof Error) && (Se(T), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", y, C, typeof N), Se(null)), N instanceof Error && !(N.message in bt) && (bt[N.message] = !0, Se(T), g("Failed %s type: %s", y, N.message), Se(null));
          }
      }
    }
    var Cr = Array.isArray;
    function Fe(o) {
      return Cr(o);
    }
    function Tr(o) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, y = d && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return y;
      }
    }
    function Dr(o) {
      try {
        return _t(o), !1;
      } catch {
        return !0;
      }
    }
    function _t(o) {
      return "" + o;
    }
    function gt(o) {
      if (Dr(o))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(o)), _t(o);
    }
    var fe = O.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, St, Ot, ze;
    ze = {};
    function xr(o) {
      if (ge.call(o, "ref")) {
        var d = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Pr(o) {
      if (ge.call(o, "key")) {
        var d = Object.getOwnPropertyDescriptor(o, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function jr(o, d) {
      if (typeof o.ref == "string" && fe.current && d && fe.current.stateNode !== d) {
        var y = F(fe.current.type);
        ze[y] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(fe.current.type), o.ref), ze[y] = !0);
      }
    }
    function Ar(o, d) {
      {
        var y = function() {
          St || (St = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        y.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function Mr(o, d) {
      {
        var y = function() {
          Ot || (Ot = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        y.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var Ir = function(o, d, y, w, T, k, C) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: d,
        ref: y,
        props: C,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function Vr(o, d, y, w, T) {
      {
        var k, C = {}, N = null, V = null;
        y !== void 0 && (gt(y), N = "" + y), Pr(d) && (gt(d.key), N = "" + d.key), xr(d) && (V = d.ref, jr(d, T));
        for (k in d)
          ge.call(d, k) && !kr.hasOwnProperty(k) && (C[k] = d[k]);
        if (o && o.defaultProps) {
          var A = o.defaultProps;
          for (k in A)
            C[k] === void 0 && (C[k] = A[k]);
        }
        if (N || V) {
          var M = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          N && Ar(C, M), V && Mr(C, M);
        }
        return Ir(o, N, V, T, w, fe.current, C);
      }
    }
    var Le = O.ReactCurrentOwner, Nt = O.ReactDebugCurrentFrame;
    function ae(o) {
      if (o) {
        var d = o._owner, y = _e(o.type, o._source, d ? d.type : null);
        Nt.setExtraStackFrame(y);
      } else
        Nt.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function Ue(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Rt() {
      {
        if (Le.current) {
          var o = F(Le.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function $r(o) {
      {
        if (o !== void 0) {
          var d = o.fileName.replace(/^.*[\\\/]/, ""), y = o.lineNumber;
          return `

Check your code at ` + d + ":" + y + ".";
        }
        return "";
      }
    }
    var Ct = {};
    function Fr(o) {
      {
        var d = Rt();
        if (!d) {
          var y = typeof o == "string" ? o : o.displayName || o.name;
          y && (d = `

Check the top-level render call using <` + y + ">.");
        }
        return d;
      }
    }
    function Tt(o, d) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var y = Fr(d);
        if (Ct[y])
          return;
        Ct[y] = !0;
        var w = "";
        o && o._owner && o._owner !== Le.current && (w = " It was passed a child from " + F(o._owner.type) + "."), ae(o), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, w), ae(null);
      }
    }
    function Dt(o, d) {
      {
        if (typeof o != "object")
          return;
        if (Fe(o))
          for (var y = 0; y < o.length; y++) {
            var w = o[y];
            Ue(w) && Tt(w, d);
          }
        else if (Ue(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var T = m(o);
          if (typeof T == "function" && T !== o.entries)
            for (var k = T.call(o), C; !(C = k.next()).done; )
              Ue(C.value) && Tt(C.value, d);
        }
      }
    }
    function zr(o) {
      {
        var d = o.type;
        if (d == null || typeof d == "string")
          return;
        var y;
        if (typeof d == "function")
          y = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === p))
          y = d.propTypes;
        else
          return;
        if (y) {
          var w = F(d);
          Rr(y, o.props, "prop", w, o);
        } else if (d.PropTypes !== void 0 && !We) {
          We = !0;
          var T = F(d);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(o) {
      {
        for (var d = Object.keys(o.props), y = 0; y < d.length; y++) {
          var w = d[y];
          if (w !== "children" && w !== "key") {
            ae(o), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), ae(null);
            break;
          }
        }
        o.ref !== null && (ae(o), g("Invalid attribute `ref` supplied to `React.Fragment`."), ae(null));
      }
    }
    function kt(o, d, y, w, T, k) {
      {
        var C = ee(o);
        if (!C) {
          var N = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = $r(T);
          V ? N += V : N += Rt();
          var A;
          o === null ? A = "null" : Fe(o) ? A = "array" : o !== void 0 && o.$$typeof === t ? (A = "<" + (F(o.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : A = typeof o, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, N);
        }
        var M = Vr(o, d, y, T, k);
        if (M == null)
          return M;
        if (C) {
          var U = d.children;
          if (U !== void 0)
            if (w)
              if (Fe(U)) {
                for (var se = 0; se < U.length; se++)
                  Dt(U[se], o);
                Object.freeze && Object.freeze(U);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dt(U, o);
        }
        return o === n ? Lr(M) : zr(M), M;
      }
    }
    function Wr(o, d, y) {
      return kt(o, d, y, !0);
    }
    function Ur(o, d, y) {
      return kt(o, d, y, !1);
    }
    var Br = Ur, Yr = Wr;
    de.Fragment = n, de.jsx = Br, de.jsxs = Yr;
  }()), de;
}
process.env.NODE_ENV === "production" ? Je.exports = Gr() : Je.exports = Hr();
var pe = Je.exports;
function I(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Jr = typeof Symbol == "function" && Symbol.observable || "@@observable", At = Jr, Ye = () => Math.random().toString(36).substring(7).split("").join("."), Xr = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Ye()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Ye()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ye()}`
}, re = Xr;
function me(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Qr(e) {
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
  if (tn(e))
    return "date";
  if (en(e))
    return "error";
  const r = Zr(e);
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
function Zr(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function en(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function tn(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function X(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Qr(e)), t;
}
function Xt(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? I(2) : `Expected the root reducer to be a function. Instead, received: '${X(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? I(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? I(1) : `Expected the enhancer to be a function. Instead, received: '${X(r)}'`);
    return r(Xt)(e, t);
  }
  let n = e, i = t, a = /* @__PURE__ */ new Map(), s = a, u = 0, l = !1;
  function f() {
    s === a && (s = /* @__PURE__ */ new Map(), a.forEach((m, O) => {
      s.set(O, m);
    }));
  }
  function c() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? I(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function p(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? I(4) : `Expected the listener to be a function. Instead, received: '${X(m)}'`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? I(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let O = !0;
    f();
    const g = u++;
    return s.set(g, m), function() {
      if (O) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? I(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        O = !1, f(), s.delete(g), a = null;
      }
    };
  }
  function h(m) {
    if (!me(m))
      throw new Error(process.env.NODE_ENV === "production" ? I(7) : `Actions must be plain objects. Instead, the actual type was: '${X(m)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof m.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? I(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof m.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? I(17) : `Action "type" property must be a string. Instead, the actual type was: '${X(m.type)}'. Value was: '${m.type}' (stringified)`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? I(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = n(i, m);
    } finally {
      l = !1;
    }
    return (a = s).forEach((g) => {
      g();
    }), m;
  }
  function v(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? I(10) : `Expected the nextReducer to be a function. Instead, received: '${X(m)}`);
    n = m, h({
      type: re.REPLACE
    });
  }
  function E() {
    const m = p;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(O) {
        if (typeof O != "object" || O === null)
          throw new Error(process.env.NODE_ENV === "production" ? I(11) : `Expected the observer to be an object. Instead, received: '${X(O)}'`);
        function g() {
          const S = O;
          S.next && S.next(c());
        }
        return g(), {
          unsubscribe: m(g)
        };
      },
      [At]() {
        return this;
      }
    };
  }
  return h({
    type: re.INIT
  }), {
    dispatch: h,
    subscribe: p,
    getState: c,
    replaceReducer: v,
    [At]: E
  };
}
function Mt(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function rn(e, t, r, n) {
  const i = Object.keys(t), a = r && r.type === re.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!me(e))
    return `The ${a} has unexpected type of "${X(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const s = Object.keys(e).filter((u) => !t.hasOwnProperty(u) && !n[u]);
  if (s.forEach((u) => {
    n[u] = !0;
  }), !(r && r.type === re.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function nn(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: re.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? I(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: re.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? I(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${re.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function on(e) {
  const t = Object.keys(e), r = {};
  for (let s = 0; s < t.length; s++) {
    const u = t[s];
    process.env.NODE_ENV !== "production" && typeof e[u] > "u" && Mt(`No reducer provided for key "${u}"`), typeof e[u] == "function" && (r[u] = e[u]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let a;
  try {
    nn(r);
  } catch (s) {
    a = s;
  }
  return function(u = {}, l) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const p = rn(u, r, l, i);
      p && Mt(p);
    }
    let f = !1;
    const c = {};
    for (let p = 0; p < n.length; p++) {
      const h = n[p], v = r[h], E = u[h], _ = v(E, l);
      if (typeof _ > "u") {
        const m = l && l.type;
        throw new Error(process.env.NODE_ENV === "production" ? I(14) : `When called with an action of type ${m ? `"${String(m)}"` : "(unknown type)"}, the slice reducer for key "${h}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      c[h] = _, f = f || _ !== E;
    }
    return f = f || n.length !== Object.keys(u).length, f ? c : u;
  };
}
function Ce(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function an(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(process.env.NODE_ENV === "production" ? I(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const s = {
      getState: i.getState,
      dispatch: (l, ...f) => a(l, ...f)
    }, u = e.map((l) => l(s));
    return a = Ce(...u)(i.dispatch), {
      ...i,
      dispatch: a
    };
  };
}
function Qt(e) {
  return me(e) && "type" in e && typeof e.type == "string";
}
var Zt = Symbol.for("immer-nothing"), It = Symbol.for("immer-draftable"), L = Symbol.for("immer-state"), sn = process.env.NODE_ENV !== "production" ? [
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
function $(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = sn[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ue = Object.getPrototypeOf;
function Q(e) {
  return !!e && !!e[L];
}
function H(e) {
  var t;
  return e ? er(e) || Array.isArray(e) || !!e[It] || !!((t = e.constructor) != null && t[It]) || je(e) || Ae(e) : !1;
}
var un = Object.prototype.constructor.toString();
function er(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ue(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === un;
}
function Te(e, t) {
  Pe(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Pe(e) {
  const t = e[L];
  return t ? t.type_ : Array.isArray(e) ? 1 : je(e) ? 2 : Ae(e) ? 3 : 0;
}
function Xe(e, t) {
  return Pe(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function tr(e, t, r) {
  const n = Pe(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function cn(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function je(e) {
  return e instanceof Map;
}
function Ae(e) {
  return e instanceof Set;
}
function te(e) {
  return e.copy_ || e.base_;
}
function Qe(e, t) {
  if (je(e))
    return new Map(e);
  if (Ae(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && er(e))
    return ue(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[L];
  let n = Reflect.ownKeys(r);
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = r[a];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[a] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
      value: e[a]
    });
  }
  return Object.create(ue(e), r);
}
function it(e, t = !1) {
  return Me(e) || Q(e) || !H(e) || (Pe(e) > 1 && (e.set = e.add = e.clear = e.delete = fn), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => it(n, !0))), e;
}
function fn() {
  $(2);
}
function Me(e) {
  return Object.isFrozen(e);
}
var ln = {};
function ne(e) {
  const t = ln[e];
  return t || $(0, e), t;
}
var ye;
function rr() {
  return ye;
}
function dn(e, t) {
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
function Vt(e, t) {
  t && (ne("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ze(e) {
  et(e), e.drafts_.forEach(pn), e.drafts_ = null;
}
function et(e) {
  e === ye && (ye = e.parent_);
}
function $t(e) {
  return ye = dn(ye, e);
}
function pn(e) {
  const t = e[L];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Ft(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[L].modified_ && (Ze(t), $(4)), H(e) && (e = De(t, e), t.parent_ || ke(t, e)), t.patches_ && ne("Patches").generateReplacementPatches_(
    r[L].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = De(t, r, []), Ze(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Zt ? e : void 0;
}
function De(e, t, r) {
  if (Me(t))
    return t;
  const n = t[L];
  if (!n)
    return Te(
      t,
      (i, a) => zt(e, n, t, i, a, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return ke(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let a = i, s = !1;
    n.type_ === 3 && (a = new Set(i), i.clear(), s = !0), Te(
      a,
      (u, l) => zt(e, n, i, u, l, r, s)
    ), ke(e, i, !1), r && e.patches_ && ne("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function zt(e, t, r, n, i, a, s) {
  if (process.env.NODE_ENV !== "production" && i === r && $(5), Q(i)) {
    const u = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Xe(t.assigned_, n) ? a.concat(n) : void 0, l = De(e, i, u);
    if (tr(r, n, l), Q(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && r.add(i);
  if (H(i) && !Me(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    De(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && ke(e, i);
  }
}
function ke(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && it(t, r);
}
function hn(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : rr(),
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
  let i = n, a = at;
  r && (i = [n], a = ve);
  const { revoke: s, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = s, u;
}
var at = {
  get(e, t) {
    if (t === L)
      return e;
    const r = te(e);
    if (!Xe(r, t))
      return yn(e, r, t);
    const n = r[t];
    return e.finalized_ || !H(n) ? n : n === Ke(e.base_, t) ? (qe(e), e.copy_[t] = rt(n, e)) : n;
  },
  has(e, t) {
    return t in te(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(te(e));
  },
  set(e, t, r) {
    const n = nr(te(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Ke(te(e), t), a = i == null ? void 0 : i[L];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (cn(r, i) && (r !== void 0 || Xe(e.base_, t)))
        return !0;
      qe(e), tt(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ke(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, qe(e), tt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = te(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    $(11);
  },
  getPrototypeOf(e) {
    return ue(e.base_);
  },
  setPrototypeOf() {
    $(12);
  }
}, ve = {};
Te(at, (e, t) => {
  ve[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
ve.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && $(13), ve.set.call(this, e, t, void 0);
};
ve.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && $(14), at.set.call(this, e[0], t, r, e[0]);
};
function Ke(e, t) {
  const r = e[L];
  return (r ? te(r) : e)[t];
}
function yn(e, t, r) {
  var i;
  const n = nr(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function nr(e, t) {
  if (!(t in e))
    return;
  let r = ue(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = ue(r);
  }
}
function tt(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && tt(e.parent_));
}
function qe(e) {
  e.copy_ || (e.copy_ = Qe(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var vn = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const s = this;
        return function(l = a, ...f) {
          return s.produce(l, (c) => r.call(this, c, ...f));
        };
      }
      typeof r != "function" && $(6), n !== void 0 && typeof n != "function" && $(7);
      let i;
      if (H(t)) {
        const a = $t(this), s = rt(t, void 0);
        let u = !0;
        try {
          i = r(s), u = !1;
        } finally {
          u ? Ze(a) : et(a);
        }
        return Vt(a, n), Ft(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === Zt && (i = void 0), this.autoFreeze_ && it(i, !0), n) {
          const a = [], s = [];
          ne("Patches").generateReplacementPatches_(t, i, a, s), n(a, s);
        }
        return i;
      } else
        $(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (s, ...u) => this.produceWithPatches(s, (l) => t(l, ...u));
      let n, i;
      return [this.produce(t, r, (s, u) => {
        n = s, i = u;
      }), n, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    H(e) || $(8), Q(e) && (e = or(e));
    const t = $t(this), r = rt(e, void 0);
    return r[L].isManual_ = !0, et(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[L];
    (!r || !r.isManual_) && $(9);
    const { scope_: n } = r;
    return Vt(n, t), Ft(void 0, n);
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
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = ne("Patches").applyPatches_;
    return Q(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function rt(e, t) {
  const r = je(e) ? ne("MapSet").proxyMap_(e, t) : Ae(e) ? ne("MapSet").proxySet_(e, t) : hn(e, t);
  return (t ? t.scope_ : rr()).drafts_.push(r), r;
}
function or(e) {
  return Q(e) || $(10, e), ir(e);
}
function ir(e) {
  if (!H(e) || Me(e))
    return e;
  const t = e[L];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Qe(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Qe(e, !0);
  return Te(r, (n, i) => {
    tr(r, n, ir(i));
  }), t && (t.finalized_ = !1), r;
}
var W = new vn(), ar = W.produce;
W.produceWithPatches.bind(
  W
);
W.setAutoFreeze.bind(W);
W.setUseStrictShallowCopy.bind(W);
W.applyPatches.bind(W);
W.createDraft.bind(W);
W.finishDraft.bind(W);
var mn = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const i = {};
      e(i) === i && (n = !0);
    } catch {
    }
    if (n) {
      let i;
      try {
        throw new Error();
      } catch (a) {
        ({ stack: i } = a);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, En = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: a, inputSelectorResultsCopy: s } = e, u = n(() => ({}), ...i);
  if (!(u.apply(null, a) === u.apply(null, s))) {
    let f;
    try {
      throw new Error();
    } catch (c) {
      ({ stack: f } = c);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: a,
        secondInputs: s,
        stack: f
      }
    );
  }
}, bn = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function wn(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function _n(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function gn(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Lt = (e) => Array.isArray(e) ? e : [e];
function Sn(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return gn(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Wt(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var On = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...bn,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: mn
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: En
    }
  };
}, Nn = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Rn = typeof WeakRef < "u" ? WeakRef : Nn, Cn = 0, Ut = 1;
function Oe() {
  return {
    s: Cn,
    v: void 0,
    o: null,
    p: null
  };
}
function st(e, t = {}) {
  let r = Oe();
  const { resultEqualityCheck: n } = t;
  let i, a = 0;
  function s() {
    var p;
    let u = r;
    const { length: l } = arguments;
    for (let h = 0, v = l; h < v; h++) {
      const E = arguments[h];
      if (typeof E == "function" || typeof E == "object" && E !== null) {
        let _ = u.o;
        _ === null && (u.o = _ = /* @__PURE__ */ new WeakMap());
        const m = _.get(E);
        m === void 0 ? (u = Oe(), _.set(E, u)) : u = m;
      } else {
        let _ = u.p;
        _ === null && (u.p = _ = /* @__PURE__ */ new Map());
        const m = _.get(E);
        m === void 0 ? (u = Oe(), _.set(E, u)) : u = m;
      }
    }
    const f = u;
    let c;
    if (u.s === Ut ? c = u.v : (c = e.apply(null, arguments), a++), f.s = Ut, n) {
      const h = ((p = i == null ? void 0 : i.deref) == null ? void 0 : p.call(i)) ?? i;
      h != null && n(h, c) && (c = h, a !== 0 && a--), i = typeof c == "object" && c !== null || typeof c == "function" ? new Rn(c) : c;
    }
    return f.v = c, c;
  }
  return s.clearCache = () => {
    r = Oe(), s.resetResultsCount();
  }, s.resultsCount = () => a, s.resetResultsCount = () => {
    a = 0;
  }, s;
}
function sr(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let a = 0, s = 0, u, l = {}, f = i.pop();
    typeof f == "object" && (l = f, f = i.pop()), wn(
      f,
      `createSelector expects an output function after the inputs, but received: [${typeof f}]`
    );
    const c = {
      ...r,
      ...l
    }, {
      memoize: p,
      memoizeOptions: h = [],
      argsMemoize: v = st,
      argsMemoizeOptions: E = [],
      devModeChecks: _ = {}
    } = c, m = Lt(h), O = Lt(E), g = Sn(i), b = p(function() {
      return a++, f.apply(
        null,
        arguments
      );
    }, ...m);
    let S = !0;
    const R = v(function() {
      s++;
      const j = Wt(
        g,
        arguments
      );
      if (u = b.apply(null, j), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: P, inputStabilityCheck: B } = On(S, _);
        if (P.shouldRun && P.run(
          f,
          j,
          u
        ), B.shouldRun) {
          const ee = Wt(
            g,
            arguments
          );
          B.run(
            { inputSelectorResults: j, inputSelectorResultsCopy: ee },
            { memoize: p, memoizeOptions: m },
            arguments
          );
        }
        S && (S = !1);
      }
      return u;
    }, ...O);
    return Object.assign(R, {
      resultFunc: f,
      memoizedResultFunc: b,
      dependencies: g,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => u,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: p,
      argsMemoize: v
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Tn = /* @__PURE__ */ sr(st), Dn = Object.assign(
  (e, t = Tn) => {
    _n(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (a) => e[a]
    );
    return t(
      n,
      (...a) => a.reduce((s, u, l) => (s[r[l]] = u, s), {})
    );
  },
  { withTypes: () => Dn }
);
function ur(e) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, e) : i(a);
}
var kn = ur(), xn = ur, Pn = (...e) => {
  const t = sr(...e), r = Object.assign((...n) => {
    const i = t(...n), a = (s, ...u) => i(Q(s) ? or(s) : s, ...u);
    return Object.assign(a, i), a;
  }, {
    withTypes: () => r
  });
  return r;
};
Pn(st);
var jn = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ce : Ce.apply(null, arguments);
}, An = (e) => e && typeof e.match == "function";
function ce(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? D(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Qt(n) && n.type === e, r;
}
function Mn(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  An(e);
}
function In(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function Vn(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = Mn
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(In(n.type)), r(n));
}
function cr(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const i = Date.now();
      try {
        return n();
      } finally {
        const a = Date.now();
        r += a - i;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var fr = class he extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, he.prototype);
  }
  static get [Symbol.species]() {
    return he;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new he(...t[0].concat(this)) : new he(...t.concat(this));
  }
};
function Bt(e) {
  return H(e) ? ar(e, () => {
  }) : e;
}
function Yt(e, t, r) {
  if (e.has(t)) {
    let i = e.get(t);
    return r.update && (i = r.update(i, t, e), e.set(t, i)), i;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? D(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function $n(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Fn(e, t, r) {
  const n = lr(e, t, r);
  return {
    detectMutations() {
      return dr(e, t, n, r);
    }
  };
}
function lr(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const a = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), a.children = {};
    for (const s in r) {
      const u = n ? n + "." + s : s;
      t.length && t.indexOf(u) !== -1 || (a.children[s] = lr(e, t, r[s], u));
    }
  }
  return a;
}
function dr(e, t = [], r, n, i = !1, a = "") {
  const s = r ? r.value : void 0, u = s === n;
  if (i && !u && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: a
    };
  if (e(s) || e(n))
    return {
      wasMutated: !1
    };
  const l = {};
  for (let c in r.children)
    l[c] = !0;
  for (let c in n)
    l[c] = !0;
  const f = t.length > 0;
  for (let c in l) {
    const p = a ? a + "." + c : c;
    if (f && t.some((E) => E instanceof RegExp ? E.test(p) : p === E))
      continue;
    const h = dr(e, t, r.children[c], n[c], u, p);
    if (h.wasMutated)
      return h;
  }
  return {
    wasMutated: !1
  };
}
function zn(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(u, l, f, c) {
      return JSON.stringify(u, r(l, c), f);
    }, r = function(u, l) {
      let f = [], c = [];
      return l || (l = function(p, h) {
        return f[0] === h ? "[Circular ~]" : "[Circular ~." + c.slice(0, f.indexOf(h)).join(".") + "]";
      }), function(p, h) {
        if (f.length > 0) {
          var v = f.indexOf(this);
          ~v ? f.splice(v + 1) : f.push(this), ~v ? c.splice(v, 1 / 0, p) : c.push(p), ~f.indexOf(h) && (h = l.call(this, p, h));
        } else
          f.push(h);
        return u == null ? h : u.call(this, p, h);
      };
    }, {
      isImmutable: n = $n,
      ignoredPaths: i,
      warnAfter: a = 32
    } = e;
    const s = Fn.bind(null, n, i);
    return ({
      getState: u
    }) => {
      let l = u(), f = s(l), c;
      return (p) => (h) => {
        const v = cr(a, "ImmutableStateInvariantMiddleware");
        v.measureTime(() => {
          if (l = u(), c = f.detectMutations(), f = s(l), c.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? D(19) : `A state mutation was detected between dispatches, in the path '${c.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const E = p(h);
        return v.measureTime(() => {
          if (l = u(), c = f.detectMutations(), f = s(l), c.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? D(20) : `A state mutation was detected inside a dispatch, in the path: ${c.path || ""}. Take a look at the reducer(s) handling the action ${t(h)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), v.warnIfExceeded(), E;
      };
    };
  }
}
function pr(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || me(e);
}
function nt(e, t = "", r = pr, n, i = [], a) {
  let s;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || a != null && a.has(e))
    return !1;
  const u = n != null ? n(e) : Object.entries(e), l = i.length > 0;
  for (const [f, c] of u) {
    const p = t ? t + "." + f : f;
    if (!(l && i.some((v) => v instanceof RegExp ? v.test(p) : p === v))) {
      if (!r(c))
        return {
          keyPath: p,
          value: c
        };
      if (typeof c == "object" && (s = nt(c, p, r, n, i, a), s))
        return s;
    }
  }
  return a && hr(e) && a.add(e), !1;
}
function hr(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !hr(t))
      return !1;
  return !0;
}
function Ln(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = pr,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: a = [],
      warnAfter: s = 32,
      ignoreState: u = !1,
      ignoreActions: l = !1,
      disableCache: f = !1
    } = e, c = !f && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (p) => (h) => (v) => {
      if (!Qt(v))
        return h(v);
      const E = h(v), _ = cr(s, "SerializableStateInvariantMiddleware");
      return !l && !(n.length && n.indexOf(v.type) !== -1) && _.measureTime(() => {
        const m = nt(v, "", t, r, i, c);
        if (m) {
          const {
            keyPath: O,
            value: g
          } = m;
          console.error(`A non-serializable value was detected in an action, in the path: \`${O}\`. Value:`, g, `
Take a look at the logic that dispatched this action: `, v, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), u || (_.measureTime(() => {
        const m = p.getState(), O = nt(m, "", t, r, a, c);
        if (O) {
          const {
            keyPath: g,
            value: b
          } = O;
          console.error(`A non-serializable value was detected in the state, in the path: \`${g}\`. Value:`, b, `
Take a look at the reducer(s) handling this action type: ${v.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), _.warnIfExceeded()), E;
    };
  }
}
function Ne(e) {
  return typeof e == "boolean";
}
var Wn = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let s = new fr();
  if (r && (Ne(r) ? s.push(kn) : s.push(xn(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let u = {};
      Ne(n) || (u = n), s.unshift(zn(u));
    }
    if (i) {
      let u = {};
      Ne(i) || (u = i), s.push(Ln(u));
    }
    if (a) {
      let u = {};
      Ne(a) || (u = a), s.unshift(Vn(u));
    }
  }
  return s;
}, Un = "RTK_autoBatch", yr = (e) => (t) => {
  setTimeout(t, e);
}, Bn = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : yr(10), Yn = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, a = !1, s = !1;
  const u = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Bn : e.type === "callback" ? e.queueNotification : yr(e.timeout), f = () => {
    s = !1, a && (a = !1, u.forEach((c) => c()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(c) {
      const p = () => i && c(), h = n.subscribe(p);
      return u.add(c), () => {
        h(), u.delete(c);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(c) {
      var p;
      try {
        return i = !((p = c == null ? void 0 : c.meta) != null && p[Un]), a = !i, a && (s || (s = !0, l(f))), n.dispatch(c);
      } finally {
        i = !0;
      }
    }
  });
}, Kn = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new fr(e);
  return n && i.push(Yn(typeof n == "object" ? n : void 0)), i;
}, J = process.env.NODE_ENV === "production";
function qn(e) {
  const t = Wn(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    preloadedState: a = void 0,
    enhancers: s = void 0
  } = e || {};
  let u;
  if (typeof r == "function")
    u = r;
  else if (me(r))
    u = on(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? D(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!J && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? D(2) : "`middleware` field must be a callback");
  let l;
  if (typeof n == "function") {
    if (l = n(t), !J && !Array.isArray(l))
      throw new Error(process.env.NODE_ENV === "production" ? D(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    l = t();
  if (!J && l.some((E) => typeof E != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? D(4) : "each middleware provided to configureStore must be a function");
  let f = Ce;
  i && (f = jn({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !J,
    ...typeof i == "object" && i
  }));
  const c = an(...l), p = Kn(c);
  if (!J && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? D(5) : "`enhancers` field must be a callback");
  let h = typeof s == "function" ? s(p) : p();
  if (!J && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? D(6) : "`enhancers` callback must return an array");
  if (!J && h.some((E) => typeof E != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? D(7) : "each enhancer provided to configureStore must be a function");
  !J && l.length && !h.includes(c) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const v = f(...h);
  return Xt(u, a, v);
}
function vr(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(a, s) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? D(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? D(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const u = typeof a == "string" ? a : a.type;
      if (!u)
        throw new Error(process.env.NODE_ENV === "production" ? D(28) : "`builder.addCase` cannot be called with an empty action type");
      if (u in t)
        throw new Error(process.env.NODE_ENV === "production" ? D(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${u}'`);
      return t[u] = s, i;
    },
    addMatcher(a, s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? D(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: a,
        reducer: s
      }), i;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? D(31) : "`builder.addDefaultCase` can only be called once");
      return n = a, i;
    }
  };
  return e(i), [t, r, n];
}
function Gn(e) {
  return typeof e == "function";
}
function Hn(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? D(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = vr(t), a;
  if (Gn(e))
    a = () => Bt(e());
  else {
    const u = Bt(e);
    a = () => u;
  }
  function s(u = a(), l) {
    let f = [r[l.type], ...n.filter(({
      matcher: c
    }) => c(l)).map(({
      reducer: c
    }) => c)];
    return f.filter((c) => !!c).length === 0 && (f = [i]), f.reduce((c, p) => {
      if (p)
        if (Q(c)) {
          const v = p(c, l);
          return v === void 0 ? c : v;
        } else {
          if (H(c))
            return ar(c, (h) => p(h, l));
          {
            const h = p(c, l);
            if (h === void 0) {
              if (c === null)
                return c;
              throw new Error(process.env.NODE_ENV === "production" ? D(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return h;
          }
        }
      return c;
    }, u);
  }
  return s.getInitialState = a, s;
}
var Jn = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Xn = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += Jn[Math.random() * 64 | 0];
  return t;
}, Qn = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Zn(e, t) {
  return `${e}/${t}`;
}
function eo({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[Qn];
  return function(i) {
    const {
      name: a,
      reducerPath: s = a
    } = i;
    if (!a)
      throw new Error(process.env.NODE_ENV === "production" ? D(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const u = (typeof i.reducers == "function" ? i.reducers(no()) : i.reducers) || {}, l = Object.keys(u), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(b, S) {
        const R = typeof b == "string" ? b : b.type;
        if (!R)
          throw new Error(process.env.NODE_ENV === "production" ? D(12) : "`context.addCase` cannot be called with an empty action type");
        if (R in f.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? D(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + R);
        return f.sliceCaseReducersByType[R] = S, c;
      },
      addMatcher(b, S) {
        return f.sliceMatchers.push({
          matcher: b,
          reducer: S
        }), c;
      },
      exposeAction(b, S) {
        return f.actionCreators[b] = S, c;
      },
      exposeCaseReducer(b, S) {
        return f.sliceCaseReducersByName[b] = S, c;
      }
    };
    l.forEach((b) => {
      const S = u[b], R = {
        reducerName: b,
        type: Zn(a, b),
        createNotation: typeof i.reducers == "function"
      };
      io(S) ? so(R, S, c, t) : oo(R, S, c);
    });
    function p() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? D(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [b = {}, S = [], R = void 0] = typeof i.extraReducers == "function" ? vr(i.extraReducers) : [i.extraReducers], x = {
        ...b,
        ...f.sliceCaseReducersByType
      };
      return Hn(i.initialState, (j) => {
        for (let P in x)
          j.addCase(P, x[P]);
        for (let P of f.sliceMatchers)
          j.addMatcher(P.matcher, P.reducer);
        for (let P of S)
          j.addMatcher(P.matcher, P.reducer);
        R && j.addDefaultCase(R);
      });
    }
    const h = (b) => b, v = /* @__PURE__ */ new Map();
    let E;
    function _(b, S) {
      return E || (E = p()), E(b, S);
    }
    function m() {
      return E || (E = p()), E.getInitialState();
    }
    function O(b, S = !1) {
      function R(j) {
        let P = j[b];
        if (typeof P > "u") {
          if (S)
            P = m();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? D(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return P;
      }
      function x(j = h) {
        const P = Yt(v, S, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Yt(P, j, {
          insert: () => {
            const B = {};
            for (const [ee, Y] of Object.entries(i.selectors ?? {}))
              B[ee] = to(Y, j, m, S);
            return B;
          }
        });
      }
      return {
        reducerPath: b,
        getSelectors: x,
        get selectors() {
          return x(R);
        },
        selectSlice: R
      };
    }
    const g = {
      name: a,
      reducer: _,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: m,
      ...O(s),
      injectInto(b, {
        reducerPath: S,
        ...R
      } = {}) {
        const x = S ?? s;
        return b.inject({
          reducerPath: x,
          reducer: _
        }, R), {
          ...g,
          ...O(x, !0)
        };
      }
    };
    return g;
  };
}
function to(e, t, r, n) {
  function i(a, ...s) {
    let u = t(a);
    if (typeof u > "u") {
      if (n)
        u = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? D(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(u, ...s);
  }
  return i.unwrapped = e, i;
}
var ro = /* @__PURE__ */ eo();
function no() {
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
function oo({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let a, s;
  if ("reducer" in n) {
    if (r && !ao(n))
      throw new Error(process.env.NODE_ENV === "production" ? D(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = n.reducer, s = n.prepare;
  } else
    a = n;
  i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, s ? ce(e, s) : ce(e));
}
function io(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function ao(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function so({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? D(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: a,
    fulfilled: s,
    pending: u,
    rejected: l,
    settled: f,
    options: c
  } = r, p = i(e, a, c);
  n.exposeAction(t, p), s && n.addCase(p.fulfilled, s), u && n.addCase(p.pending, u), l && n.addCase(p.rejected, l), f && n.addMatcher(p.settled, f), n.exposeCaseReducer(t, {
    fulfilled: s || Re,
    pending: u || Re,
    rejected: l || Re,
    settled: f || Re
  });
}
function Re() {
}
var uo = (e, t) => {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? D(32) : `${t} is not a function`);
}, ut = "listenerMiddleware", co = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: a
  } = e;
  if (t)
    i = ce(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? D(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return uo(a, "options.listener"), {
    predicate: i,
    type: t,
    effect: a
  };
}, fo = Object.assign((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = co(e);
  return {
    id: Xn(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? D(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => fo
}), lo = Object.assign(ce(`${ut}/add`), {
  withTypes: () => lo
});
ce(`${ut}/removeAll`);
var po = Object.assign(ce(`${ut}/remove`), {
  withTypes: () => po
});
function D(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const mr = ro({
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
      let { data: r, active_state: n } = t.payload, i = e[n];
      Kr(i, r);
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
}), { ...ct } = mr.actions, ho = mr.reducer, Ee = qn({
  reducer: {
    This: ho
  }
});
var ot = { exports: {} }, Ge = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function yo() {
  if (Kt)
    return Ge;
  Kt = 1;
  var e = xe;
  function t(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, u = e.useDebugValue;
  return Ge.useSyncExternalStoreWithSelector = function(l, f, c, p, h) {
    var v = i(null);
    if (v.current === null) {
      var E = { hasValue: !1, value: null };
      v.current = E;
    } else
      E = v.current;
    v = s(function() {
      function m(R) {
        if (!O) {
          if (O = !0, g = R, R = p(R), h !== void 0 && E.hasValue) {
            var x = E.value;
            if (h(x, R))
              return b = x;
          }
          return b = R;
        }
        if (x = b, r(g, R))
          return x;
        var j = p(R);
        return h !== void 0 && h(x, j) ? x : (g = R, b = j);
      }
      var O = !1, g, b, S = c === void 0 ? null : c;
      return [function() {
        return m(f());
      }, S === null ? void 0 : function() {
        return m(S());
      }];
    }, [f, c, p, h]);
    var _ = n(l, v[0], v[1]);
    return a(function() {
      E.hasValue = !0, E.value = _;
    }, [_]), u(_), _;
  }, Ge;
}
var He = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function vo() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = xe;
    function t(f, c) {
      return f === c && (f !== 0 || 1 / f === 1 / c) || f !== f && c !== c;
    }
    var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, u = e.useDebugValue;
    function l(f, c, p, h, v) {
      var E = i(null), _;
      E.current === null ? (_ = {
        hasValue: !1,
        value: null
      }, E.current = _) : _ = E.current;
      var m = s(function() {
        var S = !1, R, x, j = function(Y) {
          if (!S) {
            S = !0, R = Y;
            var oe = h(Y);
            if (v !== void 0 && _.hasValue) {
              var F = _.value;
              if (v(F, oe))
                return x = F, F;
            }
            return x = oe, oe;
          }
          var K = R, q = x;
          if (r(K, Y))
            return q;
          var ie = h(Y);
          return v !== void 0 && v(q, ie) ? q : (R = Y, x = ie, ie);
        }, P = p === void 0 ? null : p, B = function() {
          return j(c());
        }, ee = P === null ? void 0 : function() {
          return j(P());
        };
        return [B, ee];
      }, [c, p, h, v]), O = m[0], g = m[1], b = n(f, O, g);
      return a(function() {
        _.hasValue = !0, _.value = b;
      }, [b]), u(b), b;
    }
    He.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), He;
}
process.env.NODE_ENV === "production" ? ot.exports = yo() : ot.exports = vo();
var mo = ot.exports, z = (
  // prettier-ignore
  // @ts-ignore
  "default" in Be ? Be.default : Be
), Gt = Symbol.for("react-redux-context"), Ht = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Eo() {
  if (!z.createContext)
    return {};
  const e = Ht[Gt] ?? (Ht[Gt] = /* @__PURE__ */ new Map());
  let t = e.get(z.createContext);
  return t || (t = z.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(z.createContext, t)), t;
}
var Z = /* @__PURE__ */ Eo(), bo = () => {
  throw new Error("uSES not initialized!");
};
function ft(e = Z) {
  return function() {
    const r = z.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var Er = /* @__PURE__ */ ft(), br = bo, wo = (e) => {
  br = e;
}, _o = (e, t) => e === t;
function go(e = Z) {
  const t = e === Z ? Er : ft(e), r = (n, i = {}) => {
    const { equalityFn: a = _o, devModeChecks: s = {} } = typeof i == "function" ? { equalityFn: i } : i;
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error("You must pass a selector to useSelector");
      if (typeof n != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof a != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: u,
      subscription: l,
      getServerState: f,
      stabilityCheck: c,
      identityFunctionCheck: p
    } = t(), h = z.useRef(!0), v = z.useCallback(
      {
        [n.name](_) {
          const m = n(_);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: O,
              stabilityCheck: g
            } = {
              stabilityCheck: c,
              identityFunctionCheck: p,
              ...s
            };
            if (g === "always" || g === "once" && h.current) {
              const b = n(_);
              if (!a(m, b)) {
                let S;
                try {
                  throw new Error();
                } catch (R) {
                  ({ stack: S } = R);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: _,
                    selected: m,
                    selected2: b,
                    stack: S
                  }
                );
              }
            }
            if ((O === "always" || O === "once" && h.current) && m === _) {
              let b;
              try {
                throw new Error();
              } catch (S) {
                ({ stack: b } = S);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: b }
              );
            }
            h.current && (h.current = !1);
          }
          return m;
        }
      }[n.name],
      [n, c, s.stabilityCheck]
    ), E = br(
      l.addNestedSub,
      u.getState,
      f || u.getState,
      v,
      a
    );
    return z.useDebugValue(E), E;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var So = /* @__PURE__ */ go();
function Oo(e) {
  e();
}
function No() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Oo(() => {
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
      const i = t = {
        callback: r,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var Jt = {
  notify() {
  },
  get: () => []
};
function Ro(e, t) {
  let r, n = Jt, i = 0, a = !1;
  function s(_) {
    c();
    const m = n.subscribe(_);
    let O = !1;
    return () => {
      O || (O = !0, m(), p());
    };
  }
  function u() {
    n.notify();
  }
  function l() {
    E.onStateChange && E.onStateChange();
  }
  function f() {
    return a;
  }
  function c() {
    i++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = No());
  }
  function p() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Jt);
  }
  function h() {
    a || (a = !0, c());
  }
  function v() {
    a && (a = !1, p());
  }
  const E = {
    addNestedSub: s,
    notifyNestedSubs: u,
    handleChangeWrapper: l,
    isSubscribed: f,
    trySubscribe: h,
    tryUnsubscribe: v,
    getListeners: () => n
  };
  return E;
}
var Co = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", To = Co ? z.useLayoutEffect : z.useEffect;
function Do({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: i = "once",
  identityFunctionCheck: a = "once"
}) {
  const s = z.useMemo(() => {
    const f = Ro(e);
    return {
      store: e,
      subscription: f,
      getServerState: n ? () => n : void 0,
      stabilityCheck: i,
      identityFunctionCheck: a
    };
  }, [e, n, i, a]), u = z.useMemo(() => e.getState(), [e]);
  To(() => {
    const { subscription: f } = s;
    return f.onStateChange = f.notifyNestedSubs, f.trySubscribe(), u !== e.getState() && f.notifyNestedSubs(), () => {
      f.tryUnsubscribe(), f.onStateChange = void 0;
    };
  }, [s, u]);
  const l = t || Z;
  return /* @__PURE__ */ z.createElement(l.Provider, { value: s }, r);
}
var ko = Do;
function wr(e = Z) {
  const t = e === Z ? Er : (
    // @ts-ignore
    ft(e)
  ), r = () => {
    const { store: n } = t();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var xo = /* @__PURE__ */ wr();
function Po(e = Z) {
  const t = e === Z ? xo : wr(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var jo = /* @__PURE__ */ Po();
wo(mo.useSyncExternalStoreWithSelector);
function Ao(e, t) {
  return function(n) {
    return t(ct.update({
      data: n,
      state: e
    })), Ee.getState().This[e];
  };
}
function Mo(e, t) {
  return function(n) {
    return t(ct.update({
      data: n,
      state: e
    })), Ee.getState().This[e];
  };
}
function Io(e, t) {
  return function(n) {
    return t(ct.upsert({
      data: n,
      active_state: e
    })), Ee.getState().This[e];
  };
}
function Vo(e) {
  let t = jo();
  const r = So((n) => n.This);
  return /* @__PURE__ */ pe.jsx(
    qr.Provider,
    {
      ...e,
      value: (n) => ({
        update: Ao(n, t),
        append: Mo(n, t),
        upsert: Io(n, t),
        dispatcher: t,
        This: r[n] ?? null,
        get: () => Ee.getState().This[n]
      })
    }
  );
}
function zo(e) {
  return /* @__PURE__ */ pe.jsx(pe.Fragment, { children: /* @__PURE__ */ pe.jsx(ko, { store: Ee, children: /* @__PURE__ */ pe.jsx(Vo, { ...e }) }) });
}
export {
  zo as ThisProvider
};
//# sourceMappingURL=thisProvider.js.map
