import Se from "react";
import { P as fr, _ as cr } from "./store-ChqbPtdO.js";
var H = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  if (Oe) return D;
  Oe = 1;
  var C = Se, w = Symbol.for("react.element"), V = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, A = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(h, f, T) {
    var p, g = {}, y = null, W = null;
    T !== void 0 && (y = "" + T), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (W = f.ref);
    for (p in f) m.call(f, p) && !I.hasOwnProperty(p) && (g[p] = f[p]);
    if (h && h.defaultProps) for (p in f = h.defaultProps, f) g[p] === void 0 && (g[p] = f[p]);
    return { $$typeof: w, type: h, key: y, ref: W, props: g, _owner: A.current };
  }
  return D.Fragment = V, D.jsx = j, D.jsxs = j, D;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function dr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var C = Se, w = Symbol.for("react.element"), V = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), h = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Z = Symbol.iterator, Ce = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var O = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1, ke = !1, De = !1, Fe = !1, Ae = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === I || Ae || e === A || e === T || e === p || Fe || e === W || xe || ke || De || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === g || e.$$typeof === j || e.$$typeof === h || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case V:
          return "Portal";
        case I:
          return "Profiler";
        case A:
          return "StrictMode";
        case T:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return ee(r) + ".Consumer";
          case j:
            var t = e;
            return ee(t._context) + ".Provider";
          case f:
            return We(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case y: {
            var o = e, u = o._payload, i = o._init;
            try {
              return E(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, x = 0, re, te, ne, ae, ie, oe, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Ye() {
      {
        if (x === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, ie = console.group, oe = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
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
        x++;
      }
    }
    function $e() {
      {
        if (x--, x === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, e, {
              value: re
            }),
            info: b({}, e, {
              value: te
            }),
            warn: b({}, e, {
              value: ne
            }),
            error: b({}, e, {
              value: ae
            }),
            group: b({}, e, {
              value: ie
            }),
            groupCollapsed: b({}, e, {
              value: oe
            }),
            groupEnd: b({}, e, {
              value: ue
            })
          });
        }
        x < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = O.ReactCurrentDispatcher, N;
    function Y(e, r, t) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            N = n && n[1] || "";
          }
        return `
` + N + e;
      }
    }
    var B = !1, $;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new Le();
    }
    function le(e, r) {
      if (!e || B)
        return "";
      {
        var t = $.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (d) {
              n = d;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (d) {
              n = d;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (d) {
            n = d;
          }
          e();
        }
      } catch (d) {
        if (d && n && typeof d.stack == "string") {
          for (var a = d.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var _ = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && $.set(e, _), _;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, U.current = u, $e(), Error.prepareStackTrace = o;
      }
      var S = e ? e.displayName || e.name : "", R = S ? Y(S) : "";
      return typeof e == "function" && $.set(e, R), R;
    }
    function Me(e, r, t) {
      return le(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ve(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case T:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Me(e.render);
          case g:
            return L(e.type, r, t);
          case y: {
            var n = e, o = n._payload, u = n._init;
            try {
              return L(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var k = Object.prototype.hasOwnProperty, fe = {}, ce = O.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, o) {
      {
        var u = Function.call.bind(k);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(o), c("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Ne = Array.isArray;
    function J(e) {
      return Ne(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function de(e) {
      if (Je(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ve(e);
    }
    var pe = O.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, ge;
    function qe(e) {
      if (k.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (k.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      typeof e.ref == "string" && pe.current;
    }
    function Xe(e, r) {
      {
        var t = function() {
          _e || (_e = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          ge || (ge = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, o) {
      {
        var u, i = {}, a = null, v = null;
        t !== void 0 && (de(t), a = "" + t), Ge(r) && (de(r.key), a = "" + r.key), qe(r) && (v = r.ref, ze(r, o));
        for (u in r)
          k.call(r, u) && !Ke.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(i, l), v && He(i, l);
        }
        return Ze(e, a, v, o, n, pe.current, i);
      }
    }
    var K = O.ReactCurrentOwner, Ee = O.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var q;
    q = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    function he() {
      {
        if (K.current) {
          var e = E(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      return "";
    }
    var ye = {};
    function rr(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + E(e._owner.type) + "."), P(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            G(n) && be(n, r);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = we(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              G(i.value) && be(i.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !q) {
          q = !0;
          var o = E(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    var me = {};
    function Te(e, r, t, n, o, u) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = er();
          v ? a += v : a += he();
          var s;
          e === null ? s = "null" : J(e) ? s = "array" : e !== void 0 && e.$$typeof === w ? (s = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = Qe(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (J(_)) {
                for (var S = 0; S < _.length; S++)
                  Re(_[S], e);
                Object.freeze && Object.freeze(_);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(_, e);
        }
        if (k.call(r, "key")) {
          var R = E(e), d = Object.keys(r).filter(function(lr) {
            return lr !== "key";
          }), z = d.length > 0 ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!me[R + z]) {
            var sr = d.length > 0 ? "{" + d.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, z, R, sr, R), me[R + z] = !0;
          }
        }
        return e === m ? nr(l) : tr(l), l;
      }
    }
    function ar(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Te(e, r, t, !1);
    }
    var or = ir, ur = ar;
    F.Fragment = m, F.jsx = or, F.jsxs = ur;
  }()), F;
}
process.env.NODE_ENV === "production" ? H.exports = vr() : H.exports = dr();
var X = H.exports;
function gr(C) {
  return /* @__PURE__ */ X.jsx(X.Fragment, { children: /* @__PURE__ */ X.jsx(fr, { store: cr, ...C }) });
}
export {
  gr as ThisProvider
};
//# sourceMappingURL=thisProvider.js.map
