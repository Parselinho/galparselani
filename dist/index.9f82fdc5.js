function e(e, t, i, n) {
  Object.defineProperty(e, t, {
    get: i,
    set: n,
    enumerable: !0,
    configurable: !0,
  });
}
var t = globalThis;
function i(e) {
  return e && e.__esModule ? e.default : e;
}
var n = {},
  a = {},
  r = t.parcelRequire2041;
null == r &&
  (((r = function (e) {
    if (e in n) return n[e].exports;
    if (e in a) {
      var t = a[e];
      delete a[e];
      var i = { id: e, exports: {} };
      return (n[e] = i), t.call(i.exports, i, i.exports), i.exports;
    }
    var r = Error("Cannot find module '" + e + "'");
    throw ((r.code = "MODULE_NOT_FOUND"), r);
  }).register = function (e, t) {
    a[e] = t;
  }),
  (t.parcelRequire2041 = r));
var o = r.register;
o("27Lyk", function (t, i) {
  e(
    t.exports,
    "register",
    () => n,
    (e) => (n = e)
  );
  var n,
    a = new Map();
  n = function (e, t) {
    for (var i = 0; i < t.length - 1; i += 2)
      a.set(t[i], { baseUrl: e, path: t[i + 1] });
  };
}),
  o("9cEIV", function (e, t) {
    var i = r("4M2WV");
    e.exports = i;
  }),
  o("4M2WV", function (e, t) {
    var i = r("4NpZs"),
      n = r("3K7Un"),
      a = Array.prototype;
    e.exports = function (e) {
      var t = e.map;
      return e === a || (i(a, e) && t === a.map) ? n : t;
    };
  }),
  o("4NpZs", function (e, t) {
    var i = r("eNBHQ");
    e.exports = i({}.isPrototypeOf);
  }),
  o("eNBHQ", function (e, t) {
    var i = r("3k1vX"),
      n = Function.prototype,
      a = n.call,
      o = i && n.bind.bind(a, a);
    e.exports = i
      ? o
      : function (e) {
          return function () {
            return a.apply(e, arguments);
          };
        };
  }),
  o("3k1vX", function (e, t) {
    var i = r("aLm5V");
    e.exports = !i(function () {
      var e = function () {}.bind();
      return "function" != typeof e || e.hasOwnProperty("prototype");
    });
  }),
  o("aLm5V", function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  }),
  o("3K7Un", function (e, t) {
    r("chtv0");
    var i = r("aUXOz");
    e.exports = i("Array", "map");
  }),
  o("chtv0", function (e, t) {
    var i = r("hoAQZ"),
      n = r("bBf4m").map;
    i(
      { target: "Array", proto: !0, forced: !r("8RoTw")("map") },
      {
        map: function (e) {
          return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  }),
  o("hoAQZ", function (e, t) {
    var i = r("i8sgM"),
      n = r("aCZNz"),
      a = r("gHtg3"),
      o = r("fEfxG"),
      s = r("5Wynx").f,
      l = r("cLpyd"),
      c = r("c22Gc"),
      d = r("Z5uXx"),
      u = r("fT1gV"),
      p = r("coP67"),
      h = function (e) {
        var t = function (i, a, r) {
          if (this instanceof t) {
            switch (arguments.length) {
              case 0:
                return new e();
              case 1:
                return new e(i);
              case 2:
                return new e(i, a);
            }
            return new e(i, a, r);
          }
          return n(e, this, arguments);
        };
        return (t.prototype = e.prototype), t;
      };
    e.exports = function (e, t) {
      var n,
        r,
        f,
        g,
        m,
        v,
        b,
        y,
        w,
        S = e.target,
        x = e.global,
        k = e.stat,
        T = e.proto,
        H = x ? i : k ? i[S] : (i[S] || {}).prototype,
        j = x ? c : c[S] || u(c, S, {})[S],
        I = j.prototype;
      for (g in t)
        (r =
          !(n = l(x ? g : S + (k ? "." : "#") + g, e.forced)) && H && p(H, g)),
          (v = j[g]),
          r && (b = e.dontCallGetSet ? (w = s(H, g)) && w.value : H[g]),
          (m = r && b ? b : t[g]),
          (!r || typeof v != typeof m) &&
            ((y =
              e.bind && r
                ? d(m, i)
                : e.wrap && r
                ? h(m)
                : T && o(m)
                ? a(m)
                : m),
            (e.sham || (m && m.sham) || (v && v.sham)) && u(y, "sham", !0),
            u(j, g, y),
            T &&
              (p(c, (f = S + "Prototype")) || u(c, f, {}),
              u(c[f], g, m),
              e.real && I && (n || !I[g]) && u(I, g, m)));
    };
  }),
  o("i8sgM", function (e, i) {
    var n = function (e) {
      return e && e.Math === Math && e;
    };
    e.exports =
      n("object" == typeof globalThis && globalThis) ||
      n("object" == typeof window && window) ||
      n("object" == typeof self && self) ||
      n("object" == typeof t && t) ||
      n("object" == typeof e.exports && e.exports) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  }),
  o("aCZNz", function (e, t) {
    var i = r("3k1vX"),
      n = Function.prototype,
      a = n.apply,
      o = n.call;
    e.exports =
      ("object" == typeof Reflect && Reflect.apply) ||
      (i
        ? o.bind(a)
        : function () {
            return o.apply(a, arguments);
          });
  }),
  o("gHtg3", function (e, t) {
    var i = r("iDiot"),
      n = r("eNBHQ");
    e.exports = function (e) {
      if ("Function" === i(e)) return n(e);
    };
  }),
  o("iDiot", function (e, t) {
    var i = r("eNBHQ"),
      n = i({}.toString),
      a = i("".slice);
    e.exports = function (e) {
      return a(n(e), 8, -1);
    };
  }),
  o("fEfxG", function (e, t) {
    var i = r("1p4h4"),
      n = i.all;
    e.exports = i.IS_HTMLDDA
      ? function (e) {
          return "function" == typeof e || e === n;
        }
      : function (e) {
          return "function" == typeof e;
        };
  }),
  o("1p4h4", function (e, t) {
    var i = "object" == typeof document && document.all;
    e.exports = { all: i, IS_HTMLDDA: void 0 === i && void 0 !== i };
  }),
  o("5Wynx", function (t, i) {
    e(
      t.exports,
      "f",
      () => n,
      (e) => (n = e)
    );
    var n,
      a = r("gzllY"),
      o = r("kihvd"),
      s = r("hgddS"),
      l = r("dMPtu"),
      c = r("kZ5xV"),
      d = r("b18JK"),
      u = r("coP67"),
      p = r("3bGno"),
      h = Object.getOwnPropertyDescriptor;
    n = a
      ? h
      : function (e, t) {
          if (((e = c(e)), (t = d(t)), p))
            try {
              return h(e, t);
            } catch (e) {}
          if (u(e, t)) return l(!o(s.f, e, t), e[t]);
        };
  }),
  o("gzllY", function (e, t) {
    var i = r("aLm5V");
    e.exports = !i(function () {
      return (
        7 !==
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  }),
  o("kihvd", function (e, t) {
    var i = r("3k1vX"),
      n = Function.prototype.call;
    e.exports = i
      ? n.bind(n)
      : function () {
          return n.apply(n, arguments);
        };
  }),
  o("hgddS", function (t, i) {
    e(
      t.exports,
      "f",
      () => n,
      (e) => (n = e)
    );
    var n,
      a = {}.propertyIsEnumerable,
      r = Object.getOwnPropertyDescriptor;
    n =
      r && !a.call({ 1: 2 }, 1)
        ? function (e) {
            var t = r(this, e);
            return !!t && t.enumerable;
          }
        : a;
  }),
  o("dMPtu", function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  }),
  o("kZ5xV", function (e, t) {
    var i = r("lrMH2"),
      n = r("ivpcs");
    e.exports = function (e) {
      return i(n(e));
    };
  }),
  o("lrMH2", function (e, t) {
    var i = r("eNBHQ"),
      n = r("aLm5V"),
      a = r("iDiot"),
      o = Object,
      s = i("".split);
    e.exports = n(function () {
      return !o("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" === a(e) ? s(e, "") : o(e);
        }
      : o;
  }),
  o("ivpcs", function (e, t) {
    var i = r("eKlWX"),
      n = TypeError;
    e.exports = function (e) {
      if (i(e)) throw new n("Can't call method on " + e);
      return e;
    };
  }),
  o("eKlWX", function (e, t) {
    e.exports = function (e) {
      return null == e;
    };
  }),
  o("b18JK", function (e, t) {
    var i = r("cGvUQ"),
      n = r("fPf8i");
    e.exports = function (e) {
      var t = i(e, "string");
      return n(t) ? t : t + "";
    };
  }),
  o("cGvUQ", function (e, t) {
    var i = r("kihvd"),
      n = r("gcDHH"),
      a = r("fPf8i"),
      o = r("8LHY1"),
      s = r("fxchg"),
      l = r("4De5h"),
      c = TypeError,
      d = l("toPrimitive");
    e.exports = function (e, t) {
      if (!n(e) || a(e)) return e;
      var r,
        l = o(e, d);
      if (l) {
        if ((void 0 === t && (t = "default"), !n((r = i(l, e, t))) || a(r)))
          return r;
        throw new c("Can't convert object to primitive value");
      }
      return void 0 === t && (t = "number"), s(e, t);
    };
  }),
  o("gcDHH", function (e, t) {
    var i = r("fEfxG"),
      n = r("1p4h4"),
      a = n.all;
    e.exports = n.IS_HTMLDDA
      ? function (e) {
          return "object" == typeof e ? null !== e : i(e) || e === a;
        }
      : function (e) {
          return "object" == typeof e ? null !== e : i(e);
        };
  }),
  o("fPf8i", function (e, t) {
    var i = r("kCezx"),
      n = r("fEfxG"),
      a = r("4NpZs"),
      o = r("dugKc"),
      s = Object;
    e.exports = o
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = i("Symbol");
          return n(t) && a(t.prototype, s(e));
        };
  }),
  o("kCezx", function (e, t) {
    var i = r("c22Gc"),
      n = r("i8sgM"),
      a = r("fEfxG"),
      o = function (e) {
        return a(e) ? e : void 0;
      };
    e.exports = function (e, t) {
      return arguments.length < 2
        ? o(i[e]) || o(n[e])
        : (i[e] && i[e][t]) || (n[e] && n[e][t]);
    };
  }),
  o("c22Gc", function (e, t) {
    e.exports = {};
  }),
  o("dugKc", function (e, t) {
    var i = r("25Yyh");
    e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  }),
  o("25Yyh", function (e, t) {
    var i = r("b1RrE"),
      n = r("aLm5V"),
      a = r("i8sgM").String;
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !n(function () {
        var e = Symbol("symbol detection");
        return (
          !a(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && i && i < 41)
        );
      });
  }),
  o("b1RrE", function (e, t) {
    var i,
      n,
      a = r("i8sgM"),
      o = r("50NpP"),
      s = a.process,
      l = a.Deno,
      c = (s && s.versions) || (l && l.version),
      d = c && c.v8;
    d && (n = (i = d.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
      !n &&
        o &&
        (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
        (i = o.match(/Chrome\/(\d+)/)) &&
        (n = +i[1]),
      (e.exports = n);
  }),
  o("50NpP", function (e, t) {
    e.exports =
      ("undefined" != typeof navigator && String(navigator.userAgent)) || "";
  }),
  o("8LHY1", function (e, t) {
    var i = r("1yNPM"),
      n = r("eKlWX");
    e.exports = function (e, t) {
      var a = e[t];
      return n(a) ? void 0 : i(a);
    };
  }),
  o("1yNPM", function (e, t) {
    var i = r("fEfxG"),
      n = r("4TTM0"),
      a = TypeError;
    e.exports = function (e) {
      if (i(e)) return e;
      throw new a(n(e) + " is not a function");
    };
  }),
  o("4TTM0", function (e, t) {
    var i = String;
    e.exports = function (e) {
      try {
        return i(e);
      } catch (e) {
        return "Object";
      }
    };
  }),
  o("fxchg", function (e, t) {
    var i = r("kihvd"),
      n = r("fEfxG"),
      a = r("gcDHH"),
      o = TypeError;
    e.exports = function (e, t) {
      var r, s;
      if (
        ("string" === t && n((r = e.toString)) && !a((s = i(r, e)))) ||
        (n((r = e.valueOf)) && !a((s = i(r, e)))) ||
        ("string" !== t && n((r = e.toString)) && !a((s = i(r, e))))
      )
        return s;
      throw new o("Can't convert object to primitive value");
    };
  }),
  o("4De5h", function (e, t) {
    var i = r("i8sgM"),
      n = r("k2vDD"),
      a = r("coP67"),
      o = r("7Ehvu"),
      s = r("25Yyh"),
      l = r("dugKc"),
      c = i.Symbol,
      d = n("wks"),
      u = l ? c.for || c : (c && c.withoutSetter) || o;
    e.exports = function (e) {
      return a(d, e) || (d[e] = s && a(c, e) ? c[e] : u("Symbol." + e)), d[e];
    };
  }),
  o("k2vDD", function (e, t) {
    var i = r("h5Ler"),
      n = r("7dd3Y");
    (e.exports = function (e, t) {
      return n[e] || (n[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.33.3",
      mode: i ? "pure" : "global",
      copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  }),
  o("h5Ler", function (e, t) {
    e.exports = !0;
  }),
  o("7dd3Y", function (e, t) {
    var i = r("i8sgM"),
      n = r("9bFiP"),
      a = "__core-js_shared__",
      o = i[a] || n(a, {});
    e.exports = o;
  }),
  o("9bFiP", function (e, t) {
    var i = r("i8sgM"),
      n = Object.defineProperty;
    e.exports = function (e, t) {
      try {
        n(i, e, { value: t, configurable: !0, writable: !0 });
      } catch (n) {
        i[e] = t;
      }
      return t;
    };
  }),
  o("coP67", function (e, t) {
    var i = r("eNBHQ"),
      n = r("a2Ek6"),
      a = i({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return a(n(e), t);
      };
  }),
  o("a2Ek6", function (e, t) {
    var i = r("ivpcs"),
      n = Object;
    e.exports = function (e) {
      return n(i(e));
    };
  }),
  o("7Ehvu", function (e, t) {
    var i = r("eNBHQ"),
      n = 0,
      a = Math.random(),
      o = i((1).toString);
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++n + a, 36);
    };
  }),
  o("3bGno", function (e, t) {
    var i = r("gzllY"),
      n = r("aLm5V"),
      a = r("kiHB1");
    e.exports =
      !i &&
      !n(function () {
        return (
          7 !==
          Object.defineProperty(a("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  }),
  o("kiHB1", function (e, t) {
    var i = r("i8sgM"),
      n = r("gcDHH"),
      a = i.document,
      o = n(a) && n(a.createElement);
    e.exports = function (e) {
      return o ? a.createElement(e) : {};
    };
  }),
  o("cLpyd", function (e, t) {
    var i = r("aLm5V"),
      n = r("fEfxG"),
      a = /#|\.prototype\./,
      o = function (e, t) {
        var a = l[s(e)];
        return a === d || (a !== c && (n(t) ? i(t) : !!t));
      },
      s = (o.normalize = function (e) {
        return String(e).replace(a, ".").toLowerCase();
      }),
      l = (o.data = {}),
      c = (o.NATIVE = "N"),
      d = (o.POLYFILL = "P");
    e.exports = o;
  }),
  o("Z5uXx", function (e, t) {
    var i = r("gHtg3"),
      n = r("1yNPM"),
      a = r("3k1vX"),
      o = i(i.bind);
    e.exports = function (e, t) {
      return (
        n(e),
        void 0 === t
          ? e
          : a
          ? o(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    };
  }),
  o("fT1gV", function (e, t) {
    var i = r("gzllY"),
      n = r("3TkH1"),
      a = r("dMPtu");
    e.exports = i
      ? function (e, t, i) {
          return n.f(e, t, a(1, i));
        }
      : function (e, t, i) {
          return (e[t] = i), e;
        };
  }),
  o("3TkH1", function (t, i) {
    e(
      t.exports,
      "f",
      () => n,
      (e) => (n = e)
    );
    var n,
      a = r("gzllY"),
      o = r("3bGno"),
      s = r("fuU9t"),
      l = r("CPsk9"),
      c = r("b18JK"),
      d = TypeError,
      u = Object.defineProperty,
      p = Object.getOwnPropertyDescriptor,
      h = "enumerable",
      f = "configurable",
      g = "writable";
    n = a
      ? s
        ? function (e, t, i) {
            if (
              (l(e),
              (t = c(t)),
              l(i),
              "function" == typeof e &&
                "prototype" === t &&
                "value" in i &&
                g in i &&
                !i[g])
            ) {
              var n = p(e, t);
              n &&
                n[g] &&
                ((e[t] = i.value),
                (i = {
                  configurable: f in i ? i[f] : n[f],
                  enumerable: h in i ? i[h] : n[h],
                  writable: !1,
                }));
            }
            return u(e, t, i);
          }
        : u
      : function (e, t, i) {
          if ((l(e), (t = c(t)), l(i), o))
            try {
              return u(e, t, i);
            } catch (e) {}
          if ("get" in i || "set" in i) throw new d("Accessors not supported");
          return "value" in i && (e[t] = i.value), e;
        };
  }),
  o("fuU9t", function (e, t) {
    var i = r("gzllY"),
      n = r("aLm5V");
    e.exports =
      i &&
      n(function () {
        return (
          42 !==
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      });
  }),
  o("CPsk9", function (e, t) {
    var i = r("gcDHH"),
      n = String,
      a = TypeError;
    e.exports = function (e) {
      if (i(e)) return e;
      throw new a(n(e) + " is not an object");
    };
  }),
  o("bBf4m", function (e, t) {
    var i = r("Z5uXx"),
      n = r("eNBHQ"),
      a = r("lrMH2"),
      o = r("a2Ek6"),
      s = r("lYrnX"),
      l = r("ksuFe"),
      c = n([].push),
      d = function (e) {
        var t = 1 === e,
          n = 2 === e,
          r = 3 === e,
          d = 4 === e,
          u = 6 === e,
          p = 7 === e,
          h = 5 === e || u;
        return function (f, g, m, v) {
          for (
            var b,
              y,
              w = o(f),
              S = a(w),
              x = i(g, m),
              k = s(S),
              T = 0,
              H = v || l,
              j = t ? H(f, k) : n || p ? H(f, 0) : void 0;
            k > T;
            T++
          )
            if ((h || T in S) && ((y = x((b = S[T]), T, w)), e)) {
              if (t) j[T] = y;
              else if (y)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return b;
                  case 6:
                    return T;
                  case 2:
                    c(j, b);
                }
              else
                switch (e) {
                  case 4:
                    return !1;
                  case 7:
                    c(j, b);
                }
            }
          return u ? -1 : r || d ? d : j;
        };
      };
    e.exports = {
      forEach: d(0),
      map: d(1),
      filter: d(2),
      some: d(3),
      every: d(4),
      find: d(5),
      findIndex: d(6),
      filterReject: d(7),
    };
  }),
  o("lYrnX", function (e, t) {
    var i = r("i2T7m");
    e.exports = function (e) {
      return i(e.length);
    };
  }),
  o("i2T7m", function (e, t) {
    var i = r("aN87x"),
      n = Math.min;
    e.exports = function (e) {
      return e > 0 ? n(i(e), 9007199254740991) : 0;
    };
  }),
  o("aN87x", function (e, t) {
    var i = r("3Exih");
    e.exports = function (e) {
      var t = +e;
      return t != t || 0 === t ? 0 : i(t);
    };
  }),
  o("3Exih", function (e, t) {
    var i = Math.ceil,
      n = Math.floor;
    e.exports =
      Math.trunc ||
      function (e) {
        var t = +e;
        return (t > 0 ? n : i)(t);
      };
  }),
  o("ksuFe", function (e, t) {
    var i = r("c2qIZ");
    e.exports = function (e, t) {
      return new (i(e))(0 === t ? 0 : t);
    };
  }),
  o("c2qIZ", function (e, t) {
    var i = r("aQpSo"),
      n = r("4HUxt"),
      a = r("gcDHH"),
      o = r("4De5h")("species"),
      s = Array;
    e.exports = function (e) {
      var t;
      return (
        i(e) &&
          (n((t = e.constructor)) && (t === s || i(t.prototype))
            ? (t = void 0)
            : a(t) && null === (t = t[o]) && (t = void 0)),
        void 0 === t ? s : t
      );
    };
  }),
  o("aQpSo", function (e, t) {
    var i = r("iDiot");
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" === i(e);
      };
  }),
  o("4HUxt", function (e, t) {
    var i = r("eNBHQ"),
      n = r("aLm5V"),
      a = r("fEfxG"),
      o = r("cnTKO"),
      s = r("kCezx"),
      l = r("eoG22"),
      c = function () {},
      d = [],
      u = s("Reflect", "construct"),
      p = /^\s*(?:class|function)\b/,
      h = i(p.exec),
      f = !p.test(c),
      g = function (e) {
        if (!a(e)) return !1;
        try {
          return u(c, d, e), !0;
        } catch (e) {
          return !1;
        }
      },
      m = function (e) {
        if (!a(e)) return !1;
        switch (o(e)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return f || !!h(p, l(e));
        } catch (e) {
          return !0;
        }
      };
    (m.sham = !0),
      (e.exports =
        !u ||
        n(function () {
          var e;
          return (
            g(g.call) ||
            !g(Object) ||
            !g(function () {
              e = !0;
            }) ||
            e
          );
        })
          ? m
          : g);
  }),
  o("cnTKO", function (e, t) {
    var i = r("2g3Nm"),
      n = r("fEfxG"),
      a = r("iDiot"),
      o = r("4De5h")("toStringTag"),
      s = Object,
      l =
        "Arguments" ===
        a(
          (function () {
            return arguments;
          })()
        ),
      c = function (e, t) {
        try {
          return e[t];
        } catch (e) {}
      };
    e.exports = i
      ? a
      : function (e) {
          var t, i, r;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" == typeof (i = c((t = s(e)), o))
            ? i
            : l
            ? a(t)
            : "Object" === (r = a(t)) && n(t.callee)
            ? "Arguments"
            : r;
        };
  }),
  o("2g3Nm", function (e, t) {
    var i = r("4De5h")("toStringTag"),
      n = {};
    (n[i] = "z"), (e.exports = "[object z]" === String(n));
  }),
  o("eoG22", function (e, t) {
    var i = r("eNBHQ"),
      n = r("fEfxG"),
      a = r("7dd3Y"),
      o = i(Function.toString);
    n(a.inspectSource) ||
      (a.inspectSource = function (e) {
        return o(e);
      }),
      (e.exports = a.inspectSource);
  }),
  o("8RoTw", function (e, t) {
    var i = r("aLm5V"),
      n = r("4De5h"),
      a = r("b1RrE"),
      o = n("species");
    e.exports = function (e) {
      return (
        a >= 51 ||
        !i(function () {
          var t = [];
          return (
            ((t.constructor = {})[o] = function () {
              return { foo: 1 };
            }),
            1 !== t[e](Boolean).foo
          );
        })
      );
    };
  }),
  o("aUXOz", function (e, t) {
    var i = r("i8sgM"),
      n = r("c22Gc");
    e.exports = function (e, t) {
      var a = n[e + "Prototype"],
        r = a && a[t];
      if (r) return r;
      var o = i[e],
        s = o && o.prototype;
      return s && s[t];
    };
  }),
  o("aPaY0", function (e, t) {
    r("9RiQn");
    var i = r("c22Gc");
    e.exports = i.setTimeout;
  }),
  o("9RiQn", function (e, t) {
    r("8acun"), r("7kPjv");
  }),
  o("8acun", function (e, t) {
    var i = r("hoAQZ"),
      n = r("i8sgM"),
      a = r("GRth3")(n.setInterval, !0);
    i(
      { global: !0, bind: !0, forced: n.setInterval !== a },
      { setInterval: a }
    );
  }),
  o("GRth3", function (e, t) {
    var i,
      n = r("i8sgM"),
      a = r("aCZNz"),
      o = r("fEfxG"),
      s = r("991Xn"),
      l = r("50NpP"),
      c = r("gUYxq"),
      d = r("3YTUf"),
      u = n.Function,
      p =
        /MSIE .\./.test(l) ||
        (s &&
          ((i = n.Bun.version.split(".")).length < 3 ||
            ("0" === i[0] && (i[1] < 3 || ("3" === i[1] && "0" === i[2])))));
    e.exports = function (e, t) {
      var i = t ? 2 : 1;
      return p
        ? function (n, r) {
            var s = d(arguments.length, 1) > i,
              l = o(n) ? n : u(n),
              p = s ? c(arguments, i) : [],
              h = s
                ? function () {
                    a(l, this, p);
                  }
                : l;
            return t ? e(h, r) : e(h);
          }
        : e;
    };
  }),
  o("991Xn", function (e, t) {
    e.exports =
      "function" == typeof Bun && Bun && "string" == typeof Bun.version;
  }),
  o("gUYxq", function (e, t) {
    var i = r("eNBHQ");
    e.exports = i([].slice);
  }),
  o("3YTUf", function (e, t) {
    var i = TypeError;
    e.exports = function (e, t) {
      if (e < t) throw new i("Not enough arguments");
      return e;
    };
  }),
  o("7kPjv", function (e, t) {
    var i = r("hoAQZ"),
      n = r("i8sgM"),
      a = r("GRth3")(n.setTimeout, !0);
    i({ global: !0, bind: !0, forced: n.setTimeout !== a }, { setTimeout: a });
  }),
  r("27Lyk").register(
    new URL("", import.meta.url).toString(),
    JSON.parse(
      '["izUj7","index.9f82fdc5.js","1olfx","profile.6eb053b8.jpg","74mMi","aqua3.113e1833.png","kA0eD","aqua2.41f78e7d.png","f82QI","treehouse.87e64706.svg","2QJlA","udemy-3.523b644a.svg","7GGce","weblogal.cc525e54.png","3Iupx","courses.03ce2099.png","knJg9","2311.1f8459e2.png","hYLcK","fsconf.f706bc3f.png","anXcL","phrase.b1638ed4.png","5iMUb","circle.7adb5d96.png","kkMWh","gallery.807eb8e8.png","jaTaV","webapp.94a7584e.png","1TzkO","index.6b573b8b.css"]'
    )
  );
var s = {};
s = new URL("profile.6eb053b8.jpg", import.meta.url).toString();
var l = class {
    render() {
      return `
    <div class='check'>
    <div class="heroContainer">
      <section class="hero">
        <figure class="figure aboutFigure">
          <img src="${i(s)}" alt="my profile picture" loading='lazzy'>
          <figcaption class="offscreen">Gal Parselani</figcaption>
        </figure>
      <h2 class='whiteText'>About Me</h2>
      <p class='whiteText'>Hello! My name is Gal Parselani, a 33-year-old, Jewish, happily married, and a proud resident of Tel Aviv, Israel. Originally from Ra'anana, I cherish the strong bonds with my family, including my wife Hamutal, my brothers, and my adored nephews, who are central to my world.</p>
      <p class='whiteText'>Passionate about gaming, I've been an avid player of Counter-Strike, GTA V, Destiny 2, and Football Manager for over two decades. Beyond the digital realm, I'm a culinary enthusiast, often crafting "Mama Meals" dinners for my wife and me.</p>
      <p class='whiteText'>Staying active is crucial for me. I engage in football, Muay Thai, and functional training, and I'm an enthusiastic sports fan, enjoying everything from Footbal through UFC to tennis. My social life revolves around my close-knit group of friends from school, with whom I regularly catch up.</p>
      <p class='whiteText'>Family time is sacred, particularly during Friday evenings and Saturdays. I believe in giving back and find volunteering deeply rewarding, as it resonates with my life's philosophy of helping others.</p>
      <p class='whiteText'>In every aspect, whether it's through sports, gaming, cooking, or volunteering, I strive to bring joy and positivity to both my life and those around me.</p>
  </section>
  </div>
  </div>
      `;
    }
  },
  c = {};
c = r("9cEIV");
var d = {};
d = new URL("aqua3.113e1833.png", import.meta.url).toString();
var u = class {
    constructor() {
      this.cardsData = [
        {
          title: "Web Blog",
          description:
            "In this project, I focused primarily on enhancing my JavaScript skills. While I did work with CSS and HTML, the CSS portion remains incomplete as my main objective was to refine my JavaScript expertise. I utilized Vanilla JavaScript, CSS, HTML, MongoDB (via Mongoose), and the Express framework. This was my initial full-stack project, undertaken after a considerable period of self-study and practice.",
          url: "https://weblogal.com",
          href: "#/weblogal",
        },
        {
          title: "Courses List",
          description:
            "In this project, I focused primarily on enchancing my React skills. While i also did work with Bootstrap, again the CSS part wasnt the main part of the project, but the react. I utilized React, css-Bootstrap, Express framework, Sequelize, SQLite3. this was my initial React Full Stack Project, undertaken after a considerable period of self-study practice. ",
          url: "https://react2.online",
          href: "#/courses",
        },
        {
          title: "Employees API",
          description:
            "This project is a sophisticated web application meticulously crafted to manage and exhibit a comprehensive list of students. It is a quintessential example of dynamic and responsive design, employing the foundational trio of web development: HTML, CSS, and JavaScript, to create a seamless user experience.",
          url: "https://parselinho.github.io/employees/",
          href: "#/employees",
        },
        {
          title: "FSConference",
          description:
            "This project showcases a comprehensive registration form for a Full Stack Conference, where I honed my skills in creating dynamic and interactive web forms. The core of the project lies in JavaScript's interactivity and form validation logic, alongside building a responsive layout using CSS. Key technologies include HTML CSS and JavaScript.",
          url: "https://parselinho.github.io/FSConference/",
          href: "#/fsconference",
        },
        {
          title: "Phrase",
          description:
            "In this project, I developed an engaging and interactive web game titled 'Phrase Hunter'. I implemented the game logic using vanilla JavaScript, focusing on object-oriented programming principles.",
          url: "https://parselinho.github.io/Phrase-Hunter/",
          href: "#/phrase-hunter",
        },
        {
          title: "Circle",
          description:
            "In this project, titled 'Circles UI Kit', I explored and integrated Sass for the first time in my web development studies.",
          url: "https://parselinho.github.io/circleProject/",
          href: "#/circle",
        },
        {
          title: "Gallery",
          description:
            "A visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption.",
          url: "https://parselinho.github.io/galleryProject/",
          href: "#/gallery",
        },
        {
          title: "WebApp",
          description:
            "The dashboard includes interactive data visualizations such as a line graph, bar graph, and doughnut chart, created using Chart.js to display various data metrics. These interactive charts offer insights into traffic patterns, daily activity, and mobile user demographics.",
          url: "https://parselinho.github.io/webApp/",
          href: "#/webapp",
        },
      ];
    }
    createCard(e) {
      return `
      <li class="card">
        <img src="${i(
          d
        )}" alt='description' width="928" height="1312" loading="lazy"/>
        <div class='cardContainer'>
          <h2>${e.title}</h2>
          <p>${e.description}</p>
          <div class="cardLinks">
          <a href="${e.href}" title="navigate to the project page">More Info</a>
          <a href='${
            e.url
          }' target='_blank' rel="noopener" title="navigate to the project website">Visit Website</a>
          <div>
        </div>
      </li>
    `;
    }
    setCardData() {
      var e;
      return i(c)((e = this.cardsData))
        .call(e, this.createCard)
        .join("");
    }
    render() {
      return `
    <div class="homeContainer">
    <h2>Home Page</h2>
    <div class="homeDiv">
    <p>Hello! I'm an enthusiastic and self-driven junior developer, passionate about creating seamless web experiences. My journey in web development started with a deep curiosity and a do-it-yourself attitude, leading me to teach myself a diverse set of tools and technologies.</p>
    <p>With a solid foundation in HTML, CSS, and JavaScript, I craft responsive and user-friendly websites. My skill set extends to powerful backend development with Node.js, creating dynamic and interactive web applications. In addition, I have a growing expertise in React.js, which enables me to build efficient and modern front-end interfaces.</p>
    <p>I also possess a strong understanding of databases, both SQL and MongoDB, ensuring that the data driving my applications is well-structured and efficiently managed.</p>
    <p>Each project I undertake is an opportunity for growth and learning. I'm constantly expanding my knowledge and skills, driven by a passion for technology and a commitment to delivering high-quality work.</p>
    <p>Take a look around my portfolio to see a showcase of my development journey and the projects that fuel my growth as a developer.</p>
    <aside>
          <p>
            <b>**</b> I'd like to extend my gratitude to
            <a
              href="https://www.youtube.com/@DaveGrayTeachesCode"
              target="_blank"
              rel="noopener"
              title="visit dave youtube channel"
              >Dave Gray</a
            >
            for his youtube video about css, that helped me style this project.
          </p>
        </aside>  
      </div>

    </div>

      <ul class="ul">${this.setCardData()}  </ul>

      `;
    }
  },
  p = {};
p = new URL("aqua2.41f78e7d.png", import.meta.url).toString();
var h = {};
h = new URL("treehouse.87e64706.svg", import.meta.url).toString();
var f = {};
f = new URL("udemy-3.523b644a.svg", import.meta.url).toString();
var g = class {
    render() {
      return `
        <div class="resumeMainContainer">
            <div class="resumeAndExperience">
          <section class="resumeHeader">

          <figure class="figureResume">
            <img src="${i(p)}" alt="Gals Picture" loading="lazy">
            <figcaption class="offscreen">Gal Parselani</figcaption>
          </figure>

            <h2>Gal Parselani Profile Summary</h2>
            <p>Innovative and solutions-driven Full-Stack Developer with expertise in JavaScript, HTML, CSS, React, Node.js, Express, MongoDB, and SQL. Proven abillity to leverage advanced studies in front-end and full stack development to deliver impactful projects. Knows for exceptional problem-solving skills and a keen eye for technological advancements.</p>
          </section>

          <section class="resumeExperience">
            <h3>Professional Experience</h3>
            <h5>360 Affiliate LTD, Tel-Aviv \u{2014} System Manager and Team Leader</h5>
            <p>November 2022 - Present</p>
            <ul>
                <li>    
                    Orchestrated traffic navigation using statistical analysis, enhancing conversion rates.
                </li>
                <li>    
                    Led a high-performance team to achieve ambitious goals based on data-driven insights.
                </li>
                <li>    
                    Implemented efficient systems and workflows, resulting in a significant increase in leads.
                </li>
                <li>    
                    Fostered an innovative technological culture, keeping the team abreast of industry advancements.
                </li>
            </ul>
                <div class="border"></div>
            <h5>Tomer & Alon Marketing and Publicity, Ramat Gan - System Manager and Team Leader</h5>
            <p>March 2019 - November 2022</p>
            <ul>
                <li>
                The company operates in the forex and bitcoin industry, specializing in connecting affiliates with brokers.
                </li>
                <li>
                My work involved handling operations across various countries, each with several affiliates and brands. My responsibilities included analyzing statistics and adjusting the system accordingly. For instance, if Brand 'A' performed exceptionally in the United Kingdom with Affiliate 'A' between 12:00-17:00, I would prioritize it in the system, followed by the arrangement of subsequent brands. This process was replicated for each country and affiliate based on specific regional data.
                </li>
                <li>
                Success Example: When I joined the company, there were only 0-2 deposits in Hungary per month. However, within four months, we achieved over 200 deposits during peak months, with an average of 50 deposits in subsequent months.
                </li>
                <li>
                Another Example: Initially, when I suggested exploring brand opportunities in India, my manager was skeptical, citing a lack of prior deposits in the region and extensive industry experience. Despite this, I insisted on the potential in the Indian market. As a result, we identified a brand that consistently generated an average of 70 deposits per month
                </li>
                <li>
                Additionally, I successfully managed an average of 13,000 leads per day single-handedly. Currently, this volume of work is distributed among three people, each handling 3-4K leads per day.
                </li>
                <li>
                Conducted comprehensive data analysis, extracting actionable insights to guide strategic decision-making.
                </li>
                <li>
                Utilized advanced statistical techniques to interpret complex datasets, enabling the identification of trends and patterns.
                </li>
                <li>
                Developed and maintained dashboards and reports for executive teams, providing real-time visibility into key performance indicators.
                </li>
                <li>
                Collaborated with cross-functional teams to define data requirements and ensure accurate and relevant reporting.
                </li>
                <li>
                Implemented data quality measures, contributing to a culture of accuracy and reliability in data-driven decision-making.
                </li>
            </ul>
          </section>
          </div>
          <div class="bordersolid"></div>

          <section class="resumeSide">
            <h3>Education</h3>
  
            <h4><a href="https://www.ariel.ac.il/university/minisite/" target='_blank' rel="noopener" title="visit ariel website">Ariel University</a></h4>
            <p>Bachelor's Degree in Criminology and Middle Eastern Studies (Specialization in Terrorism)
            2016-2019</p>

            <div class="nopadding">
            <div class='logoAndHeading'>
            <img src="${i(h)}" alt="treehouse logo" loading="lazy">
            <h4><a href="https://teamtreehouse.com" target='_blank' rel="noopener" title="visit treehouse website">teamTreeHouse</a></h4>
            </div>
            <p>TechDegree in Full Stack JavaScript, and Front End Web Development. 2022-2023</p>
            <div class="certDiv">
                <a href='https://www.credential.net/7a967360-dd18-4c50-ba1b-0bb865c6b2cc#gs.0q0eho' target='_blank' rel="noopener" title="navigate to the full stack certification">certification for FSJS</a>
                <a href='https://www.credential.net/1c3e2d8f-a879-46c6-a466-4b1eb0c9fc72#gs.0q0i5i' target='_blank' rel="noopener" title="navigate to the front end certification">certification for FEWD</a>
            </div>
            </div>
            <div class="nopadding">
            <div class='logoAndHeading'>
            <img src="${i(f)}" alt="udemy logo" loading="lazy">
            <h4><a href="https://udemy.com" target='_blank' rel="noopener" title="visit udemy website">Udemy</a></h4>
            </div>
            <p>TechDegree in NodeJS and Express. 2023</p>
            <div class="certDiv">
                <a href='https://www.udemy.com/certificate/UC-d36709d8-6208-4206-bf7b-5be6b8086342/' target='_blank' rel="noopener" title="navigate to the full stack certification">certification for NodeJs and Express</a>
            </div>
            </div>


            <div class="border"></div>

            <div class='logoAndHeading'>
            <h3>Skills</h3>
            </div>
            <ul>
                <li><b>HTML, CSS, JavaScript, nodeJS, express, mongoDB, SQL, ReactJS</b></li>
                <li>Proficient in Full-Stack Development, with a focus on JavaScript technologies.</li>
                <li>Strong analytical and problem-solving capabilities.</li>
                <li>Effective under pressure with a knack for efficient task execution.</li>
                <li>Excellent team leadership and project management skills.</li>
            </ul>
            <div class="border"></div>

            <h3>Languages:</h3>
            <ul>
                <li>Hebrew (Native)</li>
                <li>English (Highly Proficient)</li>
            </ul>
            <div class="border"></div>


            <h3>Millitary Service</h3>
            <p>Combat Intelligence Support, IDF (2009-2012)</p>
            <div class="border"></div>

            
            <h3>Volunteering</h3>
            <p>Active volunteer at Chabad House, Hatikva Neighborhood. Engaged in community services initiatives including meal preparation and distribution in Herzliya. also helped distribution in Rishon Leziyon at "Lichiot Bekavod"</p>
            <div class="border"></div>

        </section>

          <section class="resumeFinal">
            <h3>Seek Opportunities</h3>
            <p>As an adept Full-Stack Developer, I am looking for opportunities to leverage my comprehensive knowledge in both front-end and back-end technologies. Skilled in HTML, CSS, JavaScript, alongside server-side language nodeJS, express. and database management like mongoDB and SQL, I aim to contribute to robust and scalable web applications. I'm eager to join a dynamic team that values innovation and offers growth opportunities in full-stack developmet</p>
          <section>

          </div>
        `;
    }
  },
  m = {};
m = new URL("weblogal.cc525e54.png", import.meta.url).toString();
var v = {};
v = new URL("courses.03ce2099.png", import.meta.url).toString();
var b = {};
b = new URL("2311.1f8459e2.png", import.meta.url).toString();
var y = {};
y = new URL("fsconf.f706bc3f.png", import.meta.url).toString();
var w = {};
w = new URL("phrase.b1638ed4.png", import.meta.url).toString();
var S = {};
S = new URL("circle.7adb5d96.png", import.meta.url).toString();
var x = {};
x = new URL("gallery.807eb8e8.png", import.meta.url).toString();
var k = {};
k = new URL("webapp.94a7584e.png", import.meta.url).toString();
const T = [
  {
    title: "Web Blog",
    description:
      "my primary focus was to enhance and showcase my JavaScript development skills. This project represents a significant milestone in my journey as a developer, marking my first foray into full-stack development. It was a self-driven initiative, undertaken after an extensive period of self-study and practical experimentation.",
    url: "https://weblogal.com",
    github: "https://github.com/Parselinho/BlogWebsite",
    image: `${i(m)}`,
    backendList: [
      {
        listTitle: "Node.js and Express",
        listDescription:
          "At the core of the backend is Express, a minimalist web framework for Node.js, enabling me to create a robust server-side application with ease. Express's simplicity and flexibility were instrumental in implementing RESTful APIs and server logic.",
      },
      {
        listTitle: "mongoose with MongoDB",
        listDescription:
          "For data persistence, I used Mongoose, an elegant MongoDB object modeling tool. It provided a schema-based solution to model my application data, making data handling more structured and intuitive.",
      },
    ],
    frontendList: [
      {
        listTitle: "Webpack",
        listDescription:
          "Leveraged as the module bundler and task runner, it efficiently compiled and bundled JavaScript modules. Its configurations were enhanced with webpack-dev-server for a smoother development experience, enabling features like hot module replacement.",
      },
      {
        listTitle: "babel",
        listDescription:
          "Integrated with Webpack via babel-loader, Babel transpiled modern JavaScript code into a backward-compatible version for broader browser compatibility.",
      },
      {
        listTitle: "axios",
        listDescription:
          "Chosen for HTTP requests, Axios provided a simple yet powerful way to interact with the backend API, handling data fetching and submission seamlessly.",
      },
    ],
  },
  {
    title: "Course List",
    description:
      "In this comprehensive web project, my primary focus was on enhancing my React skills, leveraging a robust frontend and backend technology stack to create a dynamic and interactive web application.",
    url: "https://react2.online",
    github: "https://github.com/Parselinho/project-10",
    image: `${i(v)}`,
    backendList: [
      {
        listTitle: "Express",
        listDescription:
          "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      },
      {
        listTitle: "Sequelize",
        listDescription:
          "A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server, enabling a solid database integration.",
      },
      {
        listTitle: "SQLite3",
        listDescription:
          "A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.",
      },
      {
        listTitle: "Bootstrap",
        listDescription:
          "employed for styling, but the main emphasis was on React development rather than CSS.",
      },
    ],
    frontendList: [
      {
        listTitle: "React",
        listDescription:
          "A JavaScript library for building user interfaces, enabling the creation of fast, scalable, and simple web applications.",
      },
      {
        listTitle: "React Router",
        listDescription: `For declarative routing in React applications, enhancing navigation capabilities.
        Axios: Employed for making HTTP requests to the backend server.`,
      },
      {
        listTitle: "React Markdown",
        listDescription: "To render Markdown content.",
      },
      {
        listTitle: "React Hook Form",
        listDescription: "For efficient, easy-to-use form handling.",
      },
      {
        listTitle: "React Helmet",
        listDescription:
          "For managing the document head, useful for setting meta tags dynamically.",
      },
    ],
  },
  {
    title: "Employees API",
    description:
      "This project is a sophisticated web application meticulously crafted to manage and exhibit a comprehensive list of students, embodying the epitome of dynamic and responsive design. It masterfully employs the foundational trio of web development: HTML for structuring content, CSS for styling and visual appeal, and JavaScript for interactivity and functionality, thereby creating a seamless and intuitive user experience.",
    url: "https://parselinho.github.io/employees/",
    github: "https://github.com/Parselinho/employees",
    image: `${i(b)}`,
    frontendList: [
      {
        listTitle: "Dynamic Student Listing:",
        listDescription:
          "The application populates a grid with student profiles, including photos, names, email addresses, and registration dates. This data is dynamically inserted into the HTML using JavaScript, enhancing the interactivity of the page.",
      },
      {
        listTitle: "Pagination",
        listDescription:
          "The student list is paginated to improve usability, with the capability to display a specified number of student profiles per page. This is achieved through JavaScript, which dynamically creates and manages pagination buttons based on the total number of students.",
      },
      {
        listTitle: "Search Functionality",
        listDescription:
          "A search bar allows users to filter the student list in real-time. As users type a name, the list updates to display only those entries that match the search query, providing a seamless and efficient user experience.",
      },
      {
        listTitle: "Responsive Design",
        listDescription:
          "he CSS styling, aided by media queries, ensures that the application is fully responsive. It adapts to various screen sizes, making it accessible on both desktop and mobile devices.",
      },
      {
        listTitle: "Stylish Aesthetics",
        listDescription:
          "The application uses a modern color palette and fonts (imported from Google Fonts), along with CSS transitions for smooth visual effects, contributing to a professional and polished look.",
      },
    ],
  },
  {
    title: "FSConference",
    description:
      "This project presents a detailed registration form for a Full Stack Conference, a task that allowed me to focus primarily on enhancing my JavaScript skills. While the CSS styling was sourced from Team Treehouse, my contribution centered on the dynamic and interactive aspects of the web form. Using JavaScript, I implemented features such as real-time validation of form fields, conditional display of form elements, and the calculation of total costs for selected activities. This project was an invaluable opportunity for me to delve deeper into JavaScript, particularly in areas of event handling and DOM manipulation. It underscored my capability to create engaging, interactive web experiences, while the CSS provided by Team Treehouse ensured the form was also visually appealing and responsive.",
    url: "https://parselinho.github.io/FSConference/",
    github: "https://github.com/Parselinho/FSConference",
    image: `${i(y)}`,
    frontendList: [
      {
        listTitle: "Dynamic Elements",
        listDescription:
          "The form is designed to be interactive, with elements like job role selections, T-shirt design choices, and activity checkboxes, offering users a customized experience.",
      },
      {
        listTitle: "Accessibility and Semantics",
        listDescription:
          "Semantic HTML elements and attributes enhance the form's accessibility, making it usable for a diverse range of users, including those relying on screen readers.",
      },
      {
        listTitle: "Enhanced Interactivity",
        listDescription:
          "The JavaScript file adds dynamic behavior to the form. It includes scripts to focus on the first input field on load, dynamically show or hide the 'other job role' input, and manage T-shirt color options based on the selected design.",
      },
      {
        listTitle: "Real-Time Validation and Cost Calculation",
        listDescription:
          "JavaScript is used for real-time validation of form fields like name, email, and credit card information, and for calculating the total cost of selected activities.",
      },
    ],
  },
  {
    title: "Phrase Hunter",
    description:
      "In this project, I developed an engaging and interactive web game titled 'Phrase Hunter'. The game challenges players to guess a hidden phrase, similar to the classic Hangman game. I implemented the game logic using vanilla JavaScript, focusing on object-oriented programming principles.",
    url: "https://parselinho.github.io/Phrase-Hunter/",
    github: "https://github.com/Parselinho/Phrase-Hunter",
    image: `${i(w)}`,
    frontendList: [
      {
        listTitle: "Dynamic Web Game Mechanics",
        listDescription:
          "In the 'Phrase Hunter' game, I designed and implemented dynamic game mechanics using JavaScript. This involved crafting a seamless user experience where game states change based on user interaction, managing game logic, and updating the UI in real-time to reflect the progress and outcomes of the game.",
      },
      {
        listTitle: "Object-Oriented JavaScript",
        listDescription:
          "I utilized Object-Oriented Programming (OOP) principles in JavaScript to structure the game's functionality. This approach involved creating classes for different game components - 'Phrase' for phrase management and 'Game' for overall game operation, ensuring a modular, maintainable, and scalable codebase.",
      },
      {
        listTitle: "Interactive UI Elements",
        listDescription:
          "The project highlights my skills in creating interactive UI elements. I developed an on-screen keyboard that responds to both mouse clicks and physical keyboard inputs, providing an immersive and accessible gaming experience for different user preferences.",
      },
      {
        listTitle: "Enhanced Accessibility",
        listDescription:
          "A key focus of the project was enhancing accessibility. I implemented features like focus states and keyboard navigation, making the game inclusive and user-friendly for a broad audience, including those relying on assistive technologies.",
      },
    ],
  },
  {
    title: "Circles",
    description:
      "In this project, titled 'Circles UI Kit', I explored and integrated Sass for the first time in my web development studies. The project features a comprehensive UI kit, designed to provide a solid foundation for web design projects. Emphasizing a clean and refreshing aesthetic, the UI kit includes a variety of elements such as typography, buttons, form elements, and a responsive grid system. By employing Sass, I was able to streamline the styling process, making the CSS more maintainable and scalable. This was crucial in handling the kit's diverse components, from basic typography to complex grid layouts.",
    url: "https://parselinho.github.io/circleProject/",
    github: "https://github.com/Parselinho/circleProject",
    image: `${i(S)}`,
    frontendList: [
      {
        listTitle: "Sass Integration and Styling",
        listDescription:
          "This project marked my initial foray into using Sass, a powerful CSS preprocessor. The focus was on leveraging Sass to create an efficient and manageable styling workflow. Through this experience, I enhanced my skills in organizing CSS architectures and utilizing Sass features like variables, mixins, and nested rules. This approach significantly improved the project's maintainability and scalability, especially in styling complex UI components and ensuring a consistent design theme across the 'Circles UI Kit'.",
      },
    ],
  },
  {
    title: "Gallery",
    description:
      " I created 'Gal Photo Gallery', a visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption. A key feature of this gallery is the custom search functionality implemented in JavaScript, allowing users to filter photos based on keywords found in their captions. The search enhances the user experience by dynamically displaying only those images that match the user's query. The layout was meticulously styled using CSS, with a focus on creating a responsive grid that adapts to different screen sizes. The integration of the 'baguetteBox' library provided a sleek and intuitive lightbox effect for viewing images, elevating the overall aesthetic and functionality of the gallery. ",
    url: "https://parselinho.github.io/galleryProject/",
    github: "https://github.com/Parselinho/galleryProject",
    image: `${i(x)}`,
    frontendList: [
      {
        listTitle: "Interactive Photo Gallery Creation",
        listDescription:
          "In the 'Gal Photo Gallery' project, I focused on developing a user-friendly and visually engaging photo gallery. This involved creating an interactive search functionality using JavaScript, allowing users to filter images based on captions. I employed CSS to design a responsive grid layout, ensuring the gallery's adaptability across different devices. The integration of the 'baguetteBox' library for lightbox effects further enhanced the viewing experience. This project highlights my skills in combining JavaScript and CSS to deliver a seamless and dynamic user interface, showcasing my proficiency in front-end web development and design.",
      },
    ],
  },
  {
    title: "WebApp",
    description:
      "In this project, I developed an advanced web application dashboard, showcasing my skills in creating a rich user interface with diverse functionalities. Key features include an alert banner with dismissible alerts, implemented in JavaScript, enhancing the user experience through dynamic interaction. The dashboard includes interactive data visualizations such as a line graph, bar graph, and doughnut chart, created using Chart.js to display various data metrics. These interactive charts offer insights into traffic patterns, daily activity, and mobile user demographics. I also implemented an autocomplete search functionality for user messaging, enhancing the usability of the dashboard. The project demonstrates my proficiency in JavaScript for creating interactive elements and my ability to integrate third-party libraries for data visualization. The CSS, structured with grid and flexbox layouts, ensures a responsive and organized presentation of the dashboard components.",
    url: "https://parselinho.github.io/webApp/",
    github: "https://github.com/Parselinho/webApp",
    image: `${i(k)}`,
    frontendList: [
      {
        listTitle: "Advanced Web Application Dashboard Development",
        listDescription:
          "This project showcases my ability to create a comprehensive web application dashboard with multiple interactive features. I implemented a JavaScript-based alert system for dynamic notifications and integrated Chart.js for diverse data visualizations, including line, bar, and doughnut charts. These elements provide valuable insights and enhance user interaction. The project also features an autocomplete functionality for efficient user messaging, demonstrating my skill in enhancing user experience through JavaScript. The responsive design was meticulously crafted using CSS grid and flexbox layouts, ensuring seamless adaptability across various devices. This dashboard project exemplifies my expertise in front-end development, emphasizing interactive design and data presentation.",
      },
    ],
  },
];
var H = (e) => {
  var t, n;
  let a, r;
  return (
    (a = e.backendList
      ? i(c)((n = e.backendList))
          .call(
            n,
            (e) => `
      <li>${e.listTitle}<p>${e.listDescription}</p></li>`
          )
          .join("")
      : "<li>Used only frontEnd tech</li>"),
    e.frontendList ||
      (r = `<li>
        Used only BackEnd tech<p></p>
      </li>`),
    (r = i(c)((t = e.frontendList))
      .call(
        t,
        (e) => `
    <li>${e.listTitle}<p>${e.listDescription}</p></li>`
      )
      .join("")),
    `
       <div class="heroContainer">
        <section class="hero">
            <div class="projectFlex">
                <figure class="figure">
                    <img src="${e.image}" alt="${e.title} image" loading="lazy">
                    <figcaption class="offscreen">${e.url}</figcaption>
                </figure>
                <h2 class="texth2">${e.title}</h2>
                <nav class="projectNav">
                    <a href='${e.github}' target="_blank" rel="noopener" title="navigate to my github profile">GitHub Code</a>
                    <a href='${e.url}' target="_blank" rel="noopener" title="navigate to the project website">Project Site</a>
                </nav>
            </div>
            <p class="texth2">${e.description}</p>
            <div class="textBold">
                <h3>Technologies and Packages for the Backend:</h3>
                    <ul>${a}</ul>
                <h3>Technologies and Packages for the Frontend:</h3>
                    <ul>${r}</ul>
            </div>
        </section>
       </div> 
    `
  );
};
function j(e) {
  let { target: t } = e;
  if (t.matches("nav a")) {
    e.preventDefault();
    let i = t.getAttribute("href");
    i && (window.location.hash = i);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", j),
    window.addEventListener("hashchange", E),
    E();
});
const I = {
  404: class {
    render() {
      return "<h1>Not Found</h1>";
    }
  },
  "#/": u,
  "#/about": l,
  "#/resume": g,
  "#/weblogal": class {
    constructor() {
      this.data = T[0];
    }
    render() {
      return H(this.data);
    }
  },
  "#/courses": class {
    constructor() {
      this.data = T[1];
    }
    render() {
      return H(this.data);
    }
  },
  "#/employees": class {
    constructor() {
      this.data = T[2];
    }
    render() {
      return H(this.data);
    }
  },
  "#/fsconference": class {
    constructor() {
      this.data = T[3];
    }
    render() {
      return H(this.data);
    }
  },
  "#/phrase-hunter": class {
    constructor() {
      this.data = T[4];
    }
    render() {
      return H(this.data);
    }
  },
  "#/circle": class {
    constructor() {
      this.data = T[5];
    }
    render() {
      return H(this.data);
    }
  },
  "#/gallery": class {
    constructor() {
      this.data = T[6];
    }
    render() {
      return H(this.data);
    }
  },
  "#/webapp": class {
    constructor() {
      this.data = T[7];
    }
    render() {
      return H(this.data);
    }
  },
};
function E() {
  let e = new (I[window.location.hash || "#/"] || I["404"])();
  document.getElementById("content").innerHTML = e.render();
}
var D = {};
(D = r("aPaY0")),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".dropdown"),
      t = document.querySelector(".dropBtn");
    t.addEventListener("click", (e) => {
      (L.style.display = "block" === L.style.display ? "none" : "block"),
        e.stopPropagation();
    }),
      t.addEventListener("mouseover", () => P("block")),
      t.addEventListener("focus", (e) => P("block")),
      e.addEventListener("mouseleave", () => P("none")),
      e.addEventListener("focusout", () => {
        i(D)(() => {
          e.contains(document.activeElement) || P("none");
        });
      });
  });
const L = document.querySelector(".dropdownContent");
function P(e) {
  L.style.display = e;
}
//# sourceMappingURL=index.9f82fdc5.js.map
