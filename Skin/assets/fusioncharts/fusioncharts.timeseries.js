!function (t) {
  "object" == typeof module && "undefined" != typeof module.exports ? module.exports = t : t()
}((function () {
  (window.webpackJsonpFusionCharts = window.webpackJsonpFusionCharts || []).push([[3], {
    690: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(691));
      e.TimeSeries = a["default"];
      var r = n(i(189)), o = n(i(349)), l = i(378), s = i(406), c = i(407);
      r["default"].DataStore = o["default"], r["default"].DataStore.Operators = {
        between: l.between,
        equals: l.equals,
        less: l.less,
        lessEquals: l.lessEquals,
        greater: l.greater,
        greaterEquals: l.greaterEquals,
        filter: l.filter,
        select: l.select,
        groupBy: l.groupBy,
        pipe: l.pipe,
        sort: l.sort,
        pivot: l.pivot
      }, r["default"].Utils = {
        duration: c.duration,
        before: c.before,
        after: c.after,
        parseDate: c.parseDate,
        formatDate: c.formatDate,
        DatetimeUnits: c.DatetimeUnits,
        Weekdays: c.Weekdays
      }, r["default"].DataStore.Aggregators = {aggregatorStore: s.aggregatorStore};
      var u = {
        name: "timeseries", type: "package", requiresFusionCharts: !0, extension: function (t) {
          return t.addDep(a["default"])
        }
      };
      e["default"] = u
    }, 691: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      var n = i(692).TimeSeries;
      e["default"] = n
    }, 692: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0;
      var a = n(i(693));
      e.TimeSeries = a["default"]
    }, 693: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = n(i(192)), l = n(i(694)), s = n(i(720)), c = n(i(724)), u = n(i(737)),
        d = n(i(731)), f = n(i(738)), h = i(193), g = i(379), p = n(i(436)), m = n(i(438)), v = i(386), y = i(394),
        b = n(i(377)), x = n(i(740)), k = n(i(741)), S = n(i(331)), _ = i(366), C = n(i(742)), w = n(i(419)),
        E = n(i(430)), D = i(744), M = i(746), T = n(i(467)), F = n(i(747)), I = n(i(748)), L = n(i(765)),
        O = n(i(766)), A = n(i(833)), P = n(i(835)), B = i(837), N = n(i(838)), H = n(i(842)), j = n(i(843)),
        R = n(i(793)), V = n(i(845)), G = n(i(854)), Y = n(i(863)), U = n(i(865)), z = n(i(866)), X = n(i(868)),
        W = n(i(870)), q = n(i(249)), Z = n(i(358)), $ = i(749);

      function Q(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.push.apply(i, n)
        }
        return i
      }

      var K = {
        day: v.timeDay,
        hour: v.timeHour,
        week: v.timeWeek,
        year: v.timeYear,
        month: v.timeMonth,
        minute: v.timeMinute,
        second: v.timeSecond,
        millisecond: v.timeMillisecond
      }, J = {
        day: y.utcDay,
        hour: y.utcHour,
        week: y.utcWeek,
        year: y.utcYear,
        month: y.utcMonth,
        minute: y.utcMinute,
        second: y.utcSecond,
        millisecond: y.utcMillisecond
      }, tt = h.regex.dropHash, et = function (t) {
        return void 0 === t && (t = 0), new Date(t)
      }, it = function (t) {
        return void 0 === t && (t = ""), t.toString()
      }, nt = function (t, e) {
        return t.getSchema().filter(e).map((function (t) {
          return t.name
        }))
      }, at = function (t) {
        return t.map((function (t) {
          return {
            x: t.x, y: t.y, plots: (0, u["default"])(t.x.map((function (t) {
              return t.index
            })), t.y.map((function (t) {
              return t.index
            }))).map((function (t) {
              return {x: t[0], y: t[1]}
            }))
          }
        }))
      }, rt = function (t, e) {
        return t + e
      }, ot = function (t) {
        return Object.assign({}, t, {
          filter: t.plot.map((function (t) {
            return t.value
          })), filterInfo: {}
        })
      }, lt = function (t) {
        return +t.split("_").pop()
      }, st = function (t) {
        return "date" === t.type
      }, ct = function (t) {
        return st(t) || function (t) {
          return "interval" === t.type
        }(t)
      }, ut = function (t) {
        return "number" === t.type
      }, dt = function (t) {
        return "string" === t.type
      }, ft = (0, f["default"])(l["default"]), ht = function (t, e) {
        void 0 === t && (t = new Set), void 0 === e && (e = []);
        var i = Array.from(t);
        (0, T["default"])(i, e).forEach((function (e) {
          return t["delete"](e)
        })), e.forEach((function (e) {
          return t.add(e)
        }))
      }, gt = function (t, e) {
        return ft((function (t, i) {
          return e.map((function (t, e, n) {
            return {x: [{index: i, visible: e === n.length - 1}], y: [{index: e, align: "left"}]}
          }))
        }), t)
      }, pt = function (t, e) {
        return ft((function (t, i) {
          return {
            x: [{index: i, visible: !0}], y: e.map((function (t, e) {
              return {index: e, align: e % 2 == 0 ? "left" : "right"}
            }))
          }
        }), t)
      }, mt = function (t, e) {
        for (var i in t) t.hasOwnProperty(i) && (t[i]._fc_info.table || (t[i]._fc_info.table = t[i]._fc_info.filter ? e.table.query([t[i]._fc_info.filterInfo.query]) : e.table, t[i]._fc_info.filterInfo.table = t[i]._fc_info.table), St(t[i]))
      }, vt = function (t, e) {
        for (var i in t) t.hasOwnProperty(i) && (t[i]._fc_info.table = e.table, t[i]._fc_info.group = i, St(t[i]))
      }, yt = function (t, e) {
        for (var i in t) t.hasOwnProperty(i) && (t[i]._fc_info.table = e.table, t[i]._fc_info.groupItems = e.groupItems, t[i]._fc_info.group = e.group, St(t[i]))
      }, bt = function (t) {
        var e = t.operands, i = [];
        if (t.filter) {
          for (var n in e) if (e.hasOwnProperty(n)) for (var a in e[n]) e[n].hasOwnProperty(a) && (0, q["default"])(e[n][a]) && (i.push(a), e[n][a].length = 0);
          i = (0, c["default"])(i)
        } else for (var r in e) e.hasOwnProperty(r) && (0, q["default"])(e[r]) && (i.push(r), e[r].length = 0);
        return i.map((function (e) {
          return {column: e, operation: t.op}
        }))
      }, xt = function (t, e, i, n) {
        void 0 === e && (e = []);
        var a = function (a) {
          if ("plottype" !== a) {
            var r = function (t) {
              return t.column === a && t.operation === n
            };
            (e.length > 0 ? (0, l["default"])((function (t) {
              return i.filter(r).map((function (e) {
                return [t, e.column, e.operation]
              }))
            }), e).map((function (t) {
              return t.join(" - ")
            })) : i.filter(r).map((function (t) {
              return [t.column, t.operation].join(" - ")
            }))).forEach((function (e) {
              return t[a].push(e)
            }))
          }
        };
        for (var r in t) a(r)
      }, kt = function (t, e) {
        for (var i in t) t.hasOwnProperty(i) && function () {
          var n = t[i]._fc_info, a = n.binDecider, r = n.chart, o = a.getRangeThreshold(), s = [{
            column: n.bin,
            timeUnit: _.DatetimeUnits[(0, F["default"])(o[0].name())],
            binSize: o[1],
            startValue: n.totalStart
          }], c = e.group, u = e.groupItems, f = e.pivot, h = e.table;
          if (t[i].aggregate) {
            var p, m, v = t[i].aggregate._fc_info, y = [], b = [], x = [], k = [], S = [], C = !1;
            for (var w in v) v.hasOwnProperty(w) && y.push({op: w, operands: v[w], filter: c});
            if (p = (0, l["default"])(bt, y), c) {
              var E = u.map((function (t) {
                for (var e, i, n = 0; n < y.length && !e; ++n) y[n].operands[t].table && (i = (e = y[n].operands[t].table)._parentTable);
                return {
                  table: e, filterQuery: !e && (0, g.filter)((function (e, i) {
                    return e[i[c]] === t
                  })), parentTable: i
                }
              })).map((function (t) {
                var e = t.table, i = t.filterQuery, n = t.parentTable;
                return {newTable: !e, table: e || h.query([i]), parentTable: n}
              }));
              f ? (m = (0, g.pivot)(s, f, p), E.forEach((function (t) {
                var i, n = t.table, a = t.newTable, o = t.parentTable;
                if (a) C = !0, i = n.unique(f), k.push(new Set(i)), x.push(i), b.push(n.query([m])); else {
                  var l = Array.from(n.__set);
                  ht(n.__set, o.unique(f)), i = Array.from(n.__set), x.push(i), (0, d["default"])(i, l) ? b.push(n) : (n.disposed || (o.disposeChildren(), r.removeEventListener("focusLimitChanged", e.query)), b.push(o.query([m])), C = !0)
                }
              }))) : (m = (0, g.groupBy)(s, p), b = E.map((function (t) {
                var e = t.table, i = t.newTable;
                return i && (C = !0), i ? e.query([m]) : e
              })))
            } else if (f ? (m = (0, g.pivot)(s, f, p), S = h.unique(f)) : m = (0, g.groupBy)(s, p), y[0].operands.table) {
              var D = y[0].operands.table.__set, M = Array.from(D);
              ht(D, S), S = Array.from(D), k.push(D), (0, d["default"])(M, S) && !y[0].operands.table.diposed ? b = [y[0].operands.table] : (y[0].operands.table.dispose(), b = [h.query([m])], C = !0)
            } else k.push(new Set(S)), b = [h.query([m])], C = !0;
            C && r.addEventListener("focusLimitChanged", e.query = function (t) {
              b.filter((function (t) {
                return t && !t.disposed
              })).length ? (o = a.getRangeThreshold(), s = [{
                column: n.bin,
                timeUnit: _.DatetimeUnits[(0, F["default"])(o[0].name())],
                binSize: o[1],
                startValue: n.totalStart
              }], f ? m._updateArgs(s, f, p) : (s.startValue = n.totalStart, m._updateArgs(s, p))) : t.detachHandler()
            }), y.forEach((function (t) {
              var e = t.operands;
              c ? u.forEach((function (i, a) {
                var r = e[i];
                r.table = b[a], r.position = n.bin, r.filterItem = i, r.table.__set = k[a], xt(r, x[a], p, t.op)
              })) : (e.table = b[0], e.position = n.bin, e.table.__set = k[0], xt(e, S, p, t.op))
            }))
          }
        }()
      }, St = function (t) {
        for (var e in t) if (t.hasOwnProperty(e)) {
          var i = t[e];
          "filter" === e ? mt(i, t._fc_info) : "group" === e ? vt(i, t._fc_info) : "pivot" === e ? yt(i, t._fc_info) : "bin" === e && kt(i, t._fc_info)
        }
      }, _t = function (t, e) {
        var i, n, a, r, o, l, s, c = t.config;
        e ? (i = c.contextPanels, n = c.contextAxesX, a = c.contextAxesY, r = t.getFromEnv("contextBins"), o = t.getFromEnv("contextScalesX"), l = t.getFromEnv("contextScalesY"), s = c.contextTableMap) : (i = c.focusPanels, n = c.focusAxesX, a = c.focusAxesY, r = t.getFromEnv("focusBins"), o = t.getFromEnv("focusScalesX"), l = t.getFromEnv("focusScalesY"), s = c.focusTableMap);
        for (var u = 0, d = i.length; u < d; u++) for (var f = i[u].plots, p = function (e, i) {
          var u = f[e], d = n[u.x], p = a[u.y], m = r[u.x], y = m.getRangeThreshold(), b = m.getBinDomain().map(Number),
            x = o[u.x], k = l[u.y], S = s;
          u.plots = [], d.binDecider = m, d.scale = x, p.scale = k, d.filter && (S.filter || (S.filter = {}), S = S.filter, d.filterInfo.query || (d.filterInfo.query = (0, g.between)(d.filter[0], b[0] - 2 * y[2], b[1] + 2 * y[2])), S["x__FC_OP_SEP__" + u.x] || (S["x__FC_OP_SEP__" + u.x] = {
            _fc_info: {
              filter: d.filter[0],
              filterInfo: d.filterInfo,
              start: b[0],
              end: b[1]
            }
          }), S = S["x__FC_OP_SEP__" + u.x]), p.filter && (S || (S.filter = {}), (S = S.filter)["y__FC_OP_SEP__" + u.y] || (S["y__FC_OP_SEP__" + u.y] = {_fc_info: {filter: p.filter[0]}}), S = S["y__FC_OP_SEP__" + u.y]), p.plot.forEach((function (e, i) {
            var n = S, a = [];
            if (e.group) {
              var r = e.group;
              if (S.group || (S.group = {}), (S = S.group)[r] || (S[r] = {_fc_info: {}}), a = c.dataTable.unique(r), S[r]._fc_info.groupItemsSet) {
                var o = S[r]._fc_info.groupItemsSet;
                ht(o, a), S[r]._fc_info.groupItems = a = Array.from(o)
              } else S[r]._fc_info.groupItemsSet = new Set(a), S[r]._fc_info.groupItems = a;
              S = S[r]
            }
            if (e.stack) {
              var l = e.stack;
              S.pivot || (S.pivot = {}), (S = S.pivot)[l] || (S[l] = {_fc_info: {pivot: l}}), S = S[l]
            }
            if (d.bin && (S.bin || (S.bin = {}), (S = S.bin)["x__FC_OP_SEP__" + u.x] || (S["x__FC_OP_SEP__" + u.x] = {
              _fc_info: {
                chart: t,
                bin: d.bin[0],
                binDecider: m
              }
            }), (S = S["x__FC_OP_SEP__" + u.x])._fc_info.totalStart = +v.timeYear.floor(c.rawDataXStart)), p.bin && (S.bin || (S.bin = {}), (S = S.bin)["y__FC_OP_SEP__" + u.y] || (S["y__FC_OP_SEP__" + u.y] = {_fc_info: {bin: p.bin[0]}}), S = S["y__FC_OP_SEP__" + u.y]), S.aggregate || (S.aggregate = {_fc_info: {}}), "candlestick" === e.type || "ohlc" === e.type) for (var s = e.group ? a.length : 1, f = 0; f < s; ++f) {
              var g = {plottype: e.type, typeinnavigator: e.typeinnavigator}, y = e.group ? a[f] : h.UNDEF;
              if (e.open) {
                S.aggregate._fc_info.first || (S.aggregate._fc_info.first = {});
                var b = S.aggregate._fc_info.first;
                y && !b[y] && (b[y] = {}), y ? b[y][e.open] || (b[y][e.open] = []) : b[e.open] || (b[e.open] = []), g.open = y ? b[y][e.open] : b[e.open]
              }
              if (e.high) {
                S.aggregate._fc_info.max || (S.aggregate._fc_info.max = {});
                var x = S.aggregate._fc_info.max;
                y && !x[y] && (x[y] = {}), y ? x[y][e.high] || (x[y][e.high] = []) : x[e.high] || (x[e.high] = []), g.high = y ? x[y][e.high] : x[e.high]
              }
              if (e.low) {
                S.aggregate._fc_info.min || (S.aggregate._fc_info.min = {});
                var k = S.aggregate._fc_info.min;
                y && !k[y] && (k[y] = {}), y ? k[y][e.low] || (k[y][e.low] = []) : k[e.low] || (k[e.low] = []), g.low = y ? k[y][e.low] : k[e.low]
              }
              if (e.close) {
                S.aggregate._fc_info.last || (S.aggregate._fc_info.last = {});
                var _ = S.aggregate._fc_info.last;
                y && !_[y] && (_[y] = {}), y ? _[y][e.close] || (_[y][e.close] = []) : _[e.close] || (_[e.close] = []), g.close = y ? _[y][e.close] : _[e.close]
              }
              var C = S.aggregate._fc_info;
              g.tableInfo = (y ? [C.first[y], C.max[y], C.min[y], C.last[y]] : [C.first, C.max, C.min, C.last]).filter((function (t) {
                return !!t
              }))[0], g.value = e.value, g.plotInAxisIndex = i, u.plots.push(g)
            } else if ("column-range" === e.type || "area-range" === e.type) for (var w = e.group ? a.length : 1, E = 0; E < w; ++E) {
              var D = {plottype: e.type, typeinnavigator: e.typeinnavigator, name: e.name},
                M = e.group ? a[E] : h.UNDEF;
              if (e.high) {
                S.aggregate._fc_info.max || (S.aggregate._fc_info.max = {});
                var T = S.aggregate._fc_info.max;
                M && !T[M] && (T[M] = {}), M ? T[M][e.high] || (T[M][e.high] = []) : T[e.high] || (T[e.high] = []), D.high = M ? T[M][e.high] : T[e.high]
              }
              if (e.low) {
                S.aggregate._fc_info.min || (S.aggregate._fc_info.min = {});
                var F = S.aggregate._fc_info.min;
                M && !F[M] && (F[M] = {}), M ? F[M][e.low] || (F[M][e.low] = []) : F[e.low] || (F[e.low] = []), D.low = M ? F[M][e.low] : F[e.low]
              }
              var I = S.aggregate._fc_info;
              D.tableInfo = (M ? [I.max[M], I.min[M]] : [I.max, I.min]).filter((function (t) {
                return !!t
              }))[0], D.plotInAxisIndex = i, u.plots.push(D)
            } else {
              S.aggregate._fc_info[e.aggregation] || (S.aggregate._fc_info[e.aggregation] = {});
              var L = S.aggregate._fc_info[e.aggregation];
              if (e.group) for (var O = 0; O < a.length; ++O) {
                var A = a[O];
                L[A] || (L[A] = {}), L[A][e.value] || (L[A][e.value] = []), u.plots.push({
                  plottype: e.type,
                  typeinnavigator: e.typeinnavigator,
                  tableInfo: L[A],
                  value: L[A][e.value],
                  stack: e.stack,
                  plotInAxisIndex: i
                })
              } else L[e.value] || (L[e.value] = []), u.plots.push({
                plottype: e.type,
                typeinnavigator: e.typeinnavigator,
                tableInfo: L,
                value: L[e.value],
                stack: e.stack,
                plotInAxisIndex: i
              })
            }
            S = n
          }))
        }, m = 0, y = f.length; m < y; m++) p(m)
      }, Ct = function (t, e, i, n, a, r) {
        var o = a;
        (0, k["default"])(o) && 0 !== o || (o = 10);
        var l = t > 0 && isFinite(t) ? function (t, e) {
          var i = .9 * t;
          return e ? Math.min(i, 1) : i
        }(t, r) : 1, s = (0, k["default"])(i) && i > 0 && i < t ? i : l, c = e > 0 && isFinite(e) ? e : l + +o;
        return [s, (0, k["default"])(n) && n > s ? n : 1.2 * c]
      }, wt = function (t, e, i, n, a) {
        var r, o, l, s = e, c = t, u = i, d = n;
        !isFinite(c) && (c = h.UNDEF), !isFinite(s) && (s = h.UNDEF), !isFinite(u) && (u = h.UNDEF), !isFinite(d) && (d = h.UNDEF), o = c === s ? c - Math.abs(.1 * c) : c - Math.abs(.2 * (s - c)), l = c === s ? s + Math.abs(.2 * s) : s + Math.abs(.2 * (s - c));
        var f = u < c ? u : c !== h.UNDEF ? function (t, e, i) {
          var n = t - Math.abs(.1 * t);
          return (n = n < i ? i : n) > 0 && e ? 0 : n
        }(c, a, o) : 0, g = f < 0 && (d < 0 || s < 0);
        return [f, r = d > s ? d : s !== h.UNDEF ? g && a ? 0 : l < (r = s + Math.abs(.2 * s)) ? l : r : f + 1]
      }, Et = function (t, e) {
        var i = t.bin;
        for (var n in i) {
          if (i.hasOwnProperty(n) && /x__FC_OP_SEP__/.test(n)) i[n]._fc_info.totalStart = e
        }
      }, Dt = function (t, e) {
        var i = +v.timeYear.floor(e);
        if (t.filter) {
          var n = t.filter;
          for (var a in n) n.hasOwnProperty(a) && /x__FC_OP_SEP__/.test(a) && Et(n[a], i)
        } else Et(t, i)
      }, Mt = function (t) {
        t.dispose && t.dispose()
      }, Tt = function Nt(t, e, i) {
        void 0 === t && (t = {}), void 0 === i && (i = h.stubFN);
        for (var n = Object.keys(t), a = n.length, r = !0, o = 0; o < a && r; ++o) {
          var l = n[o], s = t[l];
          if ("_fc_info" === l || "table" === l) {
            var c = "table" === l ? s : s.table;
            c && c !== e && (i(c), r = !1)
          } else "aggregate" === l ? Nt(s._fc_info, e, i) : (0, b["default"])(s) && Nt(s, e, i)
        }
      }, Ft = function (t, e, i) {
        switch (t) {
          case"plot":
            i.showWarning("02362480", "param", " Timeseries", " Some plot configurations were ignored. Please provide valid values to the plot attribute within a " + e + "Axis configuration.");
            break;
          case"axis":
            i.showWarning("08927060", "param", " Timeseries", "Some " + e + "Axis configurations were ignored. Please provide a valid value to the plot attribute within the " + e + "Axis configurations.");
            break;
          case"fullaxis":
            i.showWarning("08963401", "param", " Timeseries", "All " + e + "Axis configurations were ignored. Please provide a valid value to the plot attribute within the " + e + "Axis configurations. Defaulting to showing all numeric columns in separate canvases.")
        }
      }, It = function (t) {
        void 0 === t && (t = {});
        var e, i = "style='";
        for (e in t) t.hasOwnProperty(e) && (i += e + ": " + t[e] + "; ");
        return i += "'"
      };

      function Lt(t, e, i) {
        return t["get" + i + e]()
      }

      function Ot(t, e, i) {
        var n, a, r, o, l, s, c = t._getRangeThreshold(), u = t.showPlotOverTick(), d = u ? Math.round : Math.floor,
          f = new Date(i), h = new Date(e), g = c[2];
        return "year" === c[0].name() ? d(c[0].count(i, e) / c[1]) : "month" === c[0].name() ? (o = Lt(f, "FullYear", t.getType()), l = Lt(h, "FullYear", t.getType()), a = Lt(f, "Month", t.getType()), r = Lt(h, "Month", t.getType()), n = Math.max(0, l - o - 1), o === l ? s = Math.floor(r / c[1]) - Math.floor(a / c[1]) : (s = 12 * n / c[1], s += 12 / c[1] - Math.floor(a / c[1]), s += Math.floor(r / c[1])), u && h.getDate() > 14 && s++, s) : d((e - i) / g)
      }

      function At(t) {
        var e = t.data, i = e.parsedRows, n = void 0 === i ? [] : i, a = e.tableID, r = this.config,
          l = r.focusAxesX[0], s = r.clipDates, c = this.getFromEnv("dateColumn").name,
          u = this.getFromEnv("contextBins"), f = this.getFromEnv("focusBins"), h = this.getFromEnv("focusScalesX"),
          m = this.getFromEnv("contextScalesX"), y = r.dataTable.getData().data,
          b = (0, p["default"])(n, (function (t) {
            return (0, S["default"])(t) && t[r.dateColumnIndex]
          })), x = [], k = this.getContextLimit(), _ = v.timeYear.floor(k[0]), C = this.getFocusLimit(), w = C.slice(),
          E = C[1] - C[0], T = Math.min(y[0][r.dateColumnIndex], b[0]), F = !1, I = [];
        if (r.dataTable.getID() === a) {
          if (s.length && (I = [(0, g.filter)((function (t, e) {
            var i = t[e[c]];
            return s.some((function (t) {
              var e = t.from, n = t.to;
              return i >= e && i <= n
            }))
          }))]), m.some((function (t) {
            var e, i = Ot(t, k[1], _);
            return Ot(t, b[1], _) - i > 0 && (e = u[0].getRangeThreshold()[0], T = +e.offset(k[0], e.count(k[1], b[1])), I = I.concat((0, g.less)(c, T - (1 === u[0].getRangeThreshold()[2] ? 0 : 1))), F = !0, !0)
          })), I.length && (r.dataTable.getDataStore().deleteRows(g.pipe.apply(void 0, I), r.dataTable.getID()), y = r.dataTable.getData().data, T = Math.max(T, Math.min(y[0][r.dateColumnIndex], b[0]))), r.contextAxesX.forEach((function (t) {
            var e = t.binDecider, i = t.scale;
            r.atomicity.minBin = (0, D.getAtomicity)(function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Q(Object(i), !0).forEach((function (e) {
                  (0, o["default"])(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Q(Object(i)).forEach((function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
              }
              return t
            }({}, r.atomicity, {
              index: r.dateColumnIndex,
              data: y.slice(-n.length - 1),
              bins: e.getStandardBins(),
              intervalIndexMap: e.intervalIndexMap,
              ms: i.getTimeInterval().Millisecond
            })), e.setBinMin(r.atomicity.minBin), i.setRangeThreshold(e.getRangeThreshold())
          })), r.focusAxesX.forEach((function (t) {
            var e = t.binDecider, i = t.scale;
            e.setBinMin(r.atomicity.minBin), i.setRangeThreshold(e.getRangeThreshold())
          })), F || y.length - n.length == 0) {
            var L = u[0].getBinMin(), O = u[0].getRangeThreshold();
            r.timeSpread ? (x[1] = b[1], x[0] = Math.min(r.timeSpread.interval.offset(b[1], -r.timeSpread.multiplier), O[0].offset(b[1], -2))) : F ? (x[1] = b[1], x[0] = Math.min(b[1] - (k[1] - k[0]), b[1] - (b[1] - T), L[0].offset(b[1], -3))) : y.length - n.length == 0 ? (x[1] = b[1], x[0] = Math.min(b[1] - (k[1] - k[0]), b[1] - (b[1] - T), L[0].offset(b[1], -3))) : x = (0, p["default"])([].concat(k, b), Number)
          } else if (r.timeSpread) {
            var A = Math.min(k[0], b[0]), P = Math.max(k[1], b[1]);
            x = [A + Math.max(0, b[1] - k[1]), P]
          } else x = (0, p["default"])([].concat(k, b), Number);
          var B = r.rawDataXStart !== T && !r.hasSeries;
          if (B && (Dt(r.focusTableMap, T), Dt(r.contextTableMap, T)), r.rawDataXStart = T, this.setContextLimit(x), C[0] <= k[0] && (w[0] = x[0], C[1] !== k[1] && (w[1] = w[0] + E)), C[1] >= k[1] && (w[1] = x[1], C[0] !== k[0] && (w[0] = w[1] - E)), w[0] < x[0] && (w[0] = x[0], w[1] = w[0] + E), w[1] > x[1] && (w[1] = x[1], w[0] = w[1] - E), r.hasSeries) {
            (0, d["default"])(w, C) || f[0].setBinDomain(w);
            var N = f[0].getRangeThreshold();
            h[0].setRangeThreshold(N), l.filterInfo && l.filterInfo.query && l.filterInfo.query._updateArgs(+N[0].offset(+w[0], -2 * N[1]), +N[0].offset(+w[1], 2 * N[1])), _t(this), _t(this, !0), St(r.focusTableMap), St(r.contextTableMap), this._createLegendMap(!0);
            for (var H = 0; H < u.length; ++H) {
              var j = r.pixelMultiplier * M.DEFAULT_THRESHOLD_PIXELS;
              u[H].setRangeThreshold(j), f[H].setRangeThreshold(j), m[H].setRangeThreshold(u[H].getRangeThreshold()), h[H].setRangeThreshold(f[H].getRangeThreshold())
            }
          }
          this.setFocusLimit(w, !1) || (r.focusAxesX[0].filterInfo.table.flushResults(), B && this.fireEvent("focusLimitChanged"), this._updateAffectedVisuals({legendInteracted: null}))
        }
      }

      function Pt() {
        this.config.dataTable.getDataStore().off("itemsAdded", this._onDataUpdate)
      }

      var Bt = function (t) {
        function e() {
          var e;
          e = t.call(this) || this;
          var i = (0, a["default"])(e);
          return e._onDataUpdate = At.bind((0, a["default"])(e)), e._offDataUpdate = Pt.bind((0, a["default"])(e)), i.eiMethods = {
            getCurrentBin: function () {
              var t = i.getFromEnv("focusBins")[0].getRangeThreshold();
              return {unit: t[0].name(), multiplier: t[1]}
            }, setCurrentBin: function (t) {
              var e = (0, B.validateUserBin)(t, i);
              return e && i.setFocusLimit((0, B.calculateDomainForUserCustomBin)(e, i)), this
            }, getTimeSelection: function () {
              var t = i.getFocusLimit();
              return {start: t[0], end: t[1]}
            }, setTimeSelection: function (t) {
              var e = (0, B.validateFocusLimit)(t, this.getTimeSelection(), i);
              return e && i.setFocusLimit(e), this
            }, getBinning: function () {
              return (0, B.filterStandarBinsToUserConfig)(i.getFromEnv("contextBins")[0].getStandardBins())
            }, setBinning: B.setBinningRules, feedData: function (t) {
              if ((0, S["default"])(t)) {
                var e = i.config, n = i.getContextLimit(), a = e.baseTimeConverter, r = e.dateColumnIndex;
                i.cloneTable() && (e.focusTableMap = {_fc_info: {table: e.dataTable}}, e.contextTableMap = {_fc_info: {table: e.dataTable}}, _t(i), _t(i, !0), St(e.focusTableMap), St(e.contextTableMap), e.dataTable.getDataStore().on("itemsAdded", i._onDataUpdate));
                var o = t.filter((function (t) {
                  return +a.parse(t[r]) >= n[0]
                }));
                o.length && e.dataTable.getDataStore().appendRows(o, e.dataTable.getID())
              }
              return i
            }
          }, i.addToEnv("getStyleDef", (function (t) {
            void 0 === t && (t = {});
            var e, n, a, r = t, o = i.getFromEnv("textStyle");
            if ("string" == typeof r) {
              var l = i.getFromEnv("dataSource").styledefinition;
              e = {}, l && r.split(/\s+/g).forEach((function (t) {
                return (0, h.extend2)(e, l[t])
              }))
            }
            return e && (r = e), function s(t) {
              for (var e in t) if (t.hasOwnProperty(e)) {
                var i = "stroke-dasharray" === e;
                "object" == typeof t[e] ? s(t[e]) : i && ("string" == typeof (n = t[e]) && "none" !== n) && (t[e] = t[e].replace(/^\s+|\s+$/g, "").replace(/,/g, " ").split(" ").map((function (t) {
                  return +t
                })))
              }
              var n
            }(r), function c(t) {
              for (var e in t) t.hasOwnProperty(e) && ("object" == typeof t[e] ? c(t[e]) : "opacity" !== e && "stroke-opacity" !== e && "fill-opacity" !== e || (t[e] = Math.max(0, Math.min(1, +t[e]))))
            }(r), (r["font-size"] || 0 === r["font-size"]) && (n = r, a = o["font-size"], "object" == typeof n && (n["line-height"] || (n["line-height"] = 1.2 * (parseFloat(n["font-size"]) || a || 10) + h.PXSTRING))), r
          })), i.deregisterFactory("canvas"), i.registerFactory("background", j["default"]), i.registerFactory("caption", A["default"]), i.registerFactory("legend", U["default"]), i.registerFactory("panel", O["default"]), i.registerFactory("selectorToolbar", z["default"], ["timeNavigator", "canvas"]), i.registerFactory("timeNavigator", V["default"]), i.registerFactory("standardRangeSelector", W["default"], ["selectorToolbar"]), i.registerFactory("customRangeSelector", G["default"], ["selectorToolbar"]), i.registerFactory("multicanvasCrosslineManager", X["default"], ["mouseTracker"]), i.registerFactory("toolbarManager", Y["default"], ["standardRangeSelector", "customRangeSelector"]), e
        }

        (0, r["default"])(e, t), e.getName = function () {
          return "timeseries"
        };
        var i = e.prototype;
        return i.getName = function () {
          return "timeseries"
        }, i.__setDefaultConfig = function () {
          var t = this.config;
          t.skipConfigureIteration = {}, t.canvasAxisMap = {}, t.scaleDsMap = {}, t.palettecolors = ["#5D62B5", "#29C3BE", "#F2726F", "#FFC533", "#62B58F", "#BC95DF", "#67CDF2"], t.defaultLegendTextStyle = {
            "font-family": h.DEFAULT_FT_FONT,
            "font-weight": "normal",
            "font-style": "normal",
            "font-size": "12px",
            fill: "#5F5F5F",
            "line-height": "14px",
            opacity: "1",
            "fill-opacity": "1"
          }, t.defaultTooltipStyle = {
            "background-color": (0, h.convertColor)("#ffffff", "90"),
            color: "#5f5f5f",
            "border-color": "#e8e8e8",
            "border-width": "1px",
            "border-radius": "0px",
            "line-height": 1,
            "font-family": h.DEFAULT_FT_FONT,
            padding: "3px",
            opacity: .9
          }, this.addToEnv("textStyle", {
            "font-family": "sans-serif",
            "font-size": "10",
            fill: "#000000",
            "line-height": "12"
          }), t.contextPanels = [], t.contextLimit = t.focusLimit = h.UNDEF, t.legendMap = {}, t.isXMLUnsupported = !0, t.uniqueItemsMap = {}, t.isTableCloned = !1, t.hasSeries = !1, t.clipDates = h.UNDEF
        }, i.cloneTable = function () {
          var t = this.config, e = t.dataTable.getData(), i = e.data, n = e.schema;
          if (!t.isTableCloned) {
            var a = t.dataTable.getDataStore().createDataTable(i.map((function (e) {
              return e.map((function (e, i) {
                return st(n[i]) ? t.baseTimeConverter.format(e) : e
              }))
            })), n);
            return Tt(t.focusTableMap, t.dataTable, Mt), Tt(t.contextTableMap, t.dataTable, Mt), t.dataTable = a, t.isTableCloned = !0, !0
          }
          return !1
        }, i.setTooltipStyle = function () {
          var t = this.getFromEnv("tooltipStyle"), e = this.getFromEnv("baseTextStyle"),
            i = this.getFromEnv("toolTipController");
          t.container = Object.assign({}, this.config.defaultTooltipStyle, e, t.text, t.container), t.header = Object.assign({
            "font-size": (0, h.pluck)(t.container["font-size"], "12px"),
            "font-weight": (0, h.pluck)(t.container["font-weight"], "bold"),
            "font-family": t.container["font-family"],
            padding: "5px 5px 0",
            color: (0, h.getLightColor)("#5f5f5f", 76)
          }, t.header), t.body = Object.assign({
            "font-size": (0, h.pluck)(t.container["font-size"], "11px"),
            "font-weight": (0, h.pluck)(t.container["font-weight"], "normal"),
            "font-family": t.container["font-family"],
            padding: "0 5px 5px"
          }, t.body), i.setStyle(t.container), i.setRestrictionWithinCanvas({bottom: !0}), t.headerStyleString = It(t.header), t.bodyStyleString = It(t.body)
        }, i.sanitizeData = function (e) {
          var i = this;
          e.yaxis && e.yaxis.format && (e.yaxis.format.suffix && (e.yaxis.format.suffix = (0, h.parseUnsafeString)(e.yaxis.format.suffix)), e.yaxis.format.prefix && (e.yaxis.format.prefix = (0, h.parseUnsafeString)(e.yaxis.format.prefix))), t.prototype.sanitizeData.call(this, e);
          var n = (0, P["default"])(nt(e.data, ct), e.xaxis, !1), a = n.expandedAxis, r = n.actions,
            o = (0, P["default"])(nt(e.data, ut), e.yaxis), l = o.expandedAxis, s = o.actions;
          e.xaxis = a, e.yaxis = l, r.forEach((function (t) {
            return Ft(t, "x", i)
          })), s.forEach((function (t) {
            return Ft(t, "y", i)
          }))
        }, i.getDSdef = function () {
          return R["default"]
        }, i._updateVisuals = function () {
          t.prototype._updateVisuals.call(this), this.getFromEnv("paper").config.noDefaultAttribs = !0
        }, i.setPixelLimit = function (t, e, i, n) {
          void 0 === i && (i = ["up", "up"]);
          var a, r = t[0], o = t[1], l = e.applicableClippings, s = l.repeatClips, c = l.singleClips,
            u = (0, $.getUnclippedValue)(e.getDomainValue(r), s, c, {clampDirection: i[0]}),
            d = (0, $.getUnclippedValue)(e.getDomainValue(o), s, c, {clampDirection: i[1]});
          return (a = this.setFocusLimit([u, d])) && n && this.getFromEnv("fireChartEvents")(n.name, [u, d], n.eventArgs, n.options), a
        }, i.domainValidator = function (t, e, i) {
          void 0 === i && (i = []);
          var n, a, r = this.getFromEnv("contextBins")[0].getBinMin(), o = this.getFromEnv("focusScalesX")[0], l = t[0],
            s = t[1], c = e[0], u = e[1], d = +t[0], f = +t[1], g = +e[0], p = +e[1], m = 0;
          if (i.length && (n = Math.abs(f - d - (+i[1] - +i[0])) > 1 ? "squeeze" : "drag"), d < g && (l = c, s = "drag" === n ? new Date(f + (g - d)) : s), f > p && (s = u, l = "drag" === n ? new Date(d - (f - p)) : l), f < g && (s = c), d > p && (l = u), d > f) {
            var v = [s, l];
            l = v[0], s = v[1]
          }
          return a = Object.keys(o.applicableClippings).length ? o.distance(l, s) : s - l, "month" === r[0].name() && 1 === r[1] && (m = 864e5), a >= 3 * r[2] - m ? (this.fireEvent("domainValidated"), [+(l = (0, h.clampNumber)(+l, g, p)), +(s = (0, h.clampNumber)(+s, g, p))]) : this.getFocusLimit() || this.getContextLimit()
        }, i.configureAttributes = function (t) {
          var e, i, n, a, r = this, o = r.config, l = new E["default"](r), c = new x["default"], u = t.chart,
            d = function (t) {
              void 0 === t && (t = []);
              var e = [];
              return (0, S["default"])(t) ? e = t.slice() : (0, C["default"])(t) && (e = t.split(/\s*,\s*/)), (e = e.filter((function (t) {
                return !!t
              }))).map((function (t) {
                return (0, h.hashify)(t)
              }))
            }(u.palettecolors), f = u.canvasheightproportion, g = r.getFromEnv("getStyleDef"), p = t.legend,
            v = g(u.style && u.style.text), y = Object.assign({}, u.timespread),
            k = _.DatetimeUnits[(0, F["default"])(String(y.unit))], w = r.getFromEnv("dataSource"),
            D = (0, h.extend2)(r.getFromEnv("textStyle"), v), M = (0, b["default"])(t.tooltip) ? t.tooltip : {},
            T = (0, b["default"])(M.style) ? M.style : {}, O = g(p && p.style && p.style.text), A = [];
          r.addToEnv("baseTextStyle", Object.assign({
            "font-family": h.DEFAULT_FT_FONT,
            stroke: "none"
          }, v)), O = Object.assign({}, r.getFromEnv("baseTextStyle"), O), o.mergedLegendStyle = (0, h.extend2)((0, h.extend2)({}, o.defaultLegendTextStyle), O), o.focusTableMap && (Tt(o.focusTableMap, o.focusTableMap._fc_info.table, Mt), o.focusTableMap = h.UNDEF), o.contextTableMap && (Tt(o.contextTableMap, o.contextTableMap._fc_info.table, Mt), o.contextTableMap = h.UNDEF), r.addToEnv("chart-attrib", u), l.configure(), r.addToEnv("color-manager", l), d.length && (o.palettecolors = d), c.setRange(o.palettecolors), r.addToEnv("ordinalScale", c), o.dataTable = t.data, o.showLegend = (0, h.pluckNumber)(p && p.enabled, u.showlegend, 1), o.navigatorEnabled = (0, h.pluckNumber)(w.navigator && w.navigator.enabled, u.enablenavigator, 1), o.navigatorHeight = (0, h.pluckNumber)(w.navigator && w.navigator.height), o.showTooltip = (0, h.pluckNumber)(M.enabled, u.showtooltip, 1), o.interCanvasSpace = (0, h.pluckNumber)(u.intercanvasspace, 20), o.multiCanvas = (0, h.pluckNumber)(u.multicanvas, 1), o.applycsstransform = (0, h.pluckNumber)(u.applycsstransform, 0), i = (0, h.pluck)(u.enableutc, !1), r.addToEnv("UTC", i), r.addToEnv("dateAPI", (function (t, e, i) {
            return t["get" + (i ? "UTC" : "") + e]()
          })), A = t.xaxis.slice(0, 1).map((function (t) {
            return Object.assign({}, t, {
              bin: t.plot.map((function (t) {
                return t.value
              }))
            })
          })), o.focusAxesX = A.map(ot), o.focusAxesY = (0, H["default"])(nt(o.dataTable, dt), t.yaxis, t.series, t.stack, t.group), o.contextAxesX = (0, s["default"])(A), o.contextAxesY = (0, s["default"])(o.focusAxesY), o.dateColumnIndex = o.dataTable.indexOf(o.contextAxesX[0].plot[0].value), e = o.dataTable.getSchema()[o.dateColumnIndex], a = e.format ? i ? Z["default"].utcParser(e.format) : Z["default"].parser(e.format) : {parse: et}, n = e.format ? i ? Z["default"].utcFormatter(e.format) : Z["default"].formatter(e.format) : {format: it}, o.baseTimeConverter = {
            toString: function () {
              return a.toString()
            }, parse: function (t) {
              return a.parse(t)
            }, format: function (t) {
              return n.format(t)
            }
          }, r.addToEnv("baseTimeConverter", o.baseTimeConverter), r.addToEnv("dateColumn", e), k && (y.unit = k, y.multiplier = (0, m["default"])([(0, h.pluckNumber)(y.multiplier - 1), 1], Number), y.duration = y.unit.ms * y.multiplier, y.interval = i ? J[k.name.toLowerCase()] : K[k.name.toLowerCase()], o.timeSpread = y), o.focusPanels = at((0, N["default"])(o.focusAxesX, o.focusAxesY, t.canvas, o.multiCanvas ? gt : pt)), o.canvasHeightProportion = function (t, e) {
            for (var i = {}, n = t, a = [], r = 0; r < e; r++) a.push(1);
            return i.proportions = a, i.totalProportions = e, "string" == typeof n && (n = n.split(":")), Array.isArray(n) && (n = n.filter((function (t) {
              return t && !isNaN(Number(t)) && Number(t) > 0
            }))).length === e && (n = n.map((function (t) {
              return Number(t)
            })), i.proportions = n, i.totalProportions = n.reduce(rt, 0)), i
          }(f, o.focusPanels.length), r._createLegendMap(), r.addToEnv("fireChartEvents", (function (t, e, i, n) {
            void 0 === i && (i = {}), void 0 === n && (n = {});
            var a, o, l = r.getFocusLimit(), s = r.getContextLimit(), c = r.domainValidator(e, s, l);
            a = {
              start: c[0],
              end: c[1]
            }, (o = n.timeFormatter) && (a.startText = o.format(c[0]), a.endText = o.format(c[1])), (0, h.extend2)(a, i), r.fireChartInstanceEvent(t, a)
          })), (0, I["default"])(r), (0, L["default"])(r), o.focusTableMap = {_fc_info: {table: o.dataTable}}, _t(r), o.contextPanels = at((0, N["default"])(o.contextAxesX, o.contextAxesY, [], (function (t, e) {
            return t.map((function (t, i) {
              return {
                x: [{index: i}], y: e.map((function (t, e) {
                  return {index: e, visible: !1}
                }))
              }
            }))
          }))), o.contextTableMap = {_fc_info: {table: o.dataTable}}, _t(r, !0), St(o.focusTableMap), St(o.contextTableMap), o.printOption = {enabled: (0, h.pluckNumber)(u.printshowbutton, u.showprintmenuitem, 0)}, o.toolbarPosition = function (t) {
            var e = t;
            switch (e) {
              case"tr":
              case"rt":
              case"top right":
              case"right top":
                e = "tr";
                break;
              case"br":
              case"rb":
              case"bottom right":
              case"right bottom":
                e = "br";
                break;
              case"tl":
              case"lt":
              case"top left":
              case"left top":
                e = "tl";
                break;
              case"bl":
              case"lb":
              case"bottom left":
              case"left bottom":
                e = "bl";
                break;
              default:
                e = "tr"
            }
            return e
          }((0, h.pluck)(u.toolbarposition, "tr").toLowerCase()), o.toolbarHAlign = "left" === ("" + u.toolbarhalign).toLowerCase() ? "l" : o.toolbarPosition.charAt(1), o.toolbarVAlign = "bottom" === ("" + u.toolbarvalign).toLowerCase() ? "b" : o.toolbarPosition.charAt(0), o.link = u.clickurl, r.addToEnv("linkClickFN", (0, h.getLinkAction)(r.getFromEnv("dataSource"), r)), r.addToEnv("chartConfig", o), r.addToEnv("tooltipStyle", {
            container: g(T.container),
            text: g(T.text),
            header: g(T.header),
            body: g(T.body)
          }), r.addToEnv("style", {
            outCancolor: D.fill,
            fontSize: D["font-size"],
            outCanfontFamily: D["font-family"]
          }), r.createBaseComponent(), r.getFromEnv("animationManager").setAnimationState(r._firstConfigure ? "initial" : "update"), o.prediction = function (t, e) {
            var i = {}, n = {};
            if (t.extensions && (0, b["default"])(t.extensions.prediction) ? (i = t.extensions.prediction).enabled = !0 : i = {enabled: !1}, (0, b["default"])(i.style)) for (n in i.style) i.style.hasOwnProperty(n) && (i.style[n] = e(i.style[n])); else i.style = {};
            return i
          }(w, g), r.addToEnv("prediction", o.prediction), r.configureChildren(), r.setTooltipStyle()
        }, i._createLegendMap = function (t) {
          void 0 === t && (t = !1);
          var e = this, i = e.config, n = i.legendMap = {}, a = e.getFromEnv("dataSource").legend, r = {},
            o = e.getFromEnv("legendMap"), l = e.getChildren("legend") && e.getChildren("legend")[0];
          for (var s in i.pixelMultiplier = 1, i.focusAxesY.forEach((function (t) {
            var e, n = t.plot, a = 0;
            n.forEach((function (t) {
              var n = t.stack, o = t.group, l = t.value, s = t.type, c = t.name, u = "column" === s;
              u && (e = o ? i.dataTable.unique(o) : new Array(1), a += e.length), n ? (r[n] = i.dataTable.unique(n), i.hasSeries = !0) : o ? (r[o] = u ? e : i.dataTable.unique(o), i.hasSeries = !0) : "column-range" === s || "area-range" === s ? c && (r[c] = [c]) : "ohlc" !== s && "candlestick" !== s && (r[l] = [l])
            })), i.pixelMultiplier = Math.max(a, i.pixelMultiplier)
          })), r) {
            if (r.hasOwnProperty(s)) r[s].forEach((function (t) {
              if (!n[t]) {
                var e = i.showLegend && a && a.item && Array.isArray(a.item) && a.item.find((function (e) {
                  return e.value === t
                })), r = (0, h.pluckNumber)(e && e.initiallyhidden, 0);
                n[t] = {visibility: !r, initiallyhidden: !!r, series: t}
              }
            }))
          }
          if (e.addToEnv("legendMap", n), o) {
            !function e(i, n) {
              for (var a in i) if (i.hasOwnProperty(a)) {
                var r = n && n[a], o = i[a];
                o.hasOwnProperty("visibility") ? r ? (t || (o.visibility || (l && l.getItem(o.legendItemId).removeLegendState("hidden"), o.visibility = !0), r.initiallyhidden ? r.initiallyhidden && (l && l.getItem(o.legendItemId).setLegendState("hidden"), o.visibility = !1, o.initiallyhidden = !0) : (l && l.getItem(o.legendItemId).removeLegendState("hidden"), o.visibility = !0, o.initiallyhidden = !1)), n[a] = o) : l && l.disposeItem(o.legendItemId) : e(o, r)
              }
            }(o, n)
          }
          l && (!function c(t) {
            for (var i in void 0 === t && (t = {}), t) if (t.hasOwnProperty(i)) {
              var n = t[i];
              n.hasOwnProperty("visibility") ? e._addLegend(n) : c(n)
            }
          }(e.getFromEnv("legendMap")), l.asyncDraw())
        }, i._updateAffectedVisuals = function (t) {
          void 0 === t && (t = {});
          var e = this.config, i = this.getChildren();
          Object.keys(e.canvasAxisMap).forEach((function (e) {
            return i[e].forEach((function (e) {
              return !e.getState("removed") && e.setData(t, !0)
            }))
          })), i.timeNavigator && i.timeNavigator.forEach((function (e) {
            e.getState("removed") || (e.setData(t, !0), e.setDimension())
          })), this.manageSpace()
        }, i._addLegend = function (t) {
          var e, i, n, a, r = this, o = r.config, l = o.mergedLegendStyle, s = t.series,
            c = r.getFromEnv("ordinalScale").getRangeValue(s), u = r.getFromEnv("legend"),
            d = (0, h.getLightColor)(c, 60).replace(tt, h.HASHSTRING);
          o.showLegend && (e = {
            FCcolor: {
              color: c,
              angle: 0,
              ratio: "0",
              alpha: "100"
            }
          }, n = u.getItem(t.legendItemId), i = {
            label: s,
            eventArguments: {datasetName: s, visible: t.visibility}
          }, n || (t.legendItemId = u.createItem(), n = u.getItem(t.legendItemId), t.initiallyhidden && (t.visibility = !1, n.config.eventArguments.visible = !1, n.setLegendState("hidden")), r.addExtEventListener("fc-click", (function () {
            var e = t.visibility;
            a = n.config, e ? (t.visibility = !1, a.eventArguments.visible = !1, n.setLegendState("hidden")) : (t.visibility = !0, a.eventArguments.visible = !0, n.removeLegendState("hidden")), r._updateAffectedVisuals({legendInteracted: !0})
          }), n)), n.configure(i), n.setStateCosmetics("default", {
            symbol: {
              fill: (0, h.toRaphaelColor)(e),
              rawFillColor: c,
              stroke: (0, h.toRaphaelColor)(d)
            }, text: Object.assign({}, l, {fill: (0, h.convertColor)(l.fill, l.opacity * l["fill-opacity"] * 100)})
          }))
        }, i._createGroup = function (t, e) {
          return void 0 === t && (t = {}), this.getFromEnv("animationManager").setAnimation({
            attr: t,
            container: e,
            el: "group",
            component: this,
            label: "group"
          })
        }, i._createLayers = function () {
          var t, e = this.getFromEnv("animationManager"), i = this.getContainer("parentgroup");
          !i && (i = this.addContainer("parentgroup", e.setAnimation({
            el: i || "group",
            attr: {name: "parentgroup"},
            component: this
          }))), this.getChildContainer("tropo") || this.addChildContainer("tropo", this._createGroup({name: "chart-tropo"}, i)), this.getChildContainer("strato") || this.addChildContainer("strato", this._createGroup({name: "chart-strato"}, i)), this.getChildContainer("meso") || this.addChildContainer("meso", this._createGroup({name: "chart-meso"}, i)), this.getChildContainer("thermo") || this.addChildContainer("thermo", this._createGroup({name: "chart-thermo"}, i)), this.getChildContainer("exo") || (t = this.addChildContainer("exo", this._createGroup({name: "chart-exo"}, i))), this.getChildContainer("toolbar-master") || this.addChildContainer("toolbar-master", this._createGroup({name: "toolbar-master"}, t)), this.getChildContainer("legendGroup") || this.addChildContainer("legendGroup", this._createGroup({name: "legend-group"}, t))
        }, i.manageSpace = function () {
          var t, e, i, n, a, r, o, l, s, c, u, d, f, g, p, v, y = this, b = y.config, x = b.focusPanels,
            k = b.canvasAxisMap, S = y.getFromEnv("focusScalesX"), _ = y.getChildren("caption"),
            C = y.getFromEnv("selectorToolbar"), w = y.getFromEnv("toolbar"), E = w.getLogicalSpace(),
            D = y.getChildren("legend") && y.getChildren("legend")[0], M = y.getChildren("background")[0],
            T = y.getChildren("canvas_0"), F = y.getChildren("timeNavigator"), I = b.navigatorHeight, L = 0,
            O = {left: 0, right: 0}, A = 0, P = 0, B = t = +y.getFromEnv("chartWidth"),
            N = e = +y.getFromEnv("chartHeight"), H = 0, j = 0, R = .03 * t, V = .03 * e, G = 0,
            Y = {topBorder: 0, bottomBorder: 0, leftBorder: 0, rightBorder: 0}, U = b.canvasHeightProportion,
            z = b.interCanvasSpace;
          P += (0, h.pluckNumber)(b.marginTop, V), N -= (0, h.pluckNumber)(b.marginBottom, V), A += (0, h.pluckNumber)(b.marginLeft, R), B -= (0, h.pluckNumber)(b.marginRight, R), M.setDimension({
            height: e,
            width: t
          }), M.setTranslation(0, 0), x.forEach((function (t, e) {
            var i = k["canvas_" + e].y, n = .6 * (B - A) / (i.length || 1);
            i.map((function (e) {
              var i = lt(e), a = y.getChildren(e)[0].setDimension({width: n});
              return t.y[i].overlap ? {} : a
            })).forEach((function (t) {
              "number" == typeof t.left ? O.left = Math.max(O.left, t.left) : O.right = Math.max(O.right, t.right)
            }))
          })), x.forEach((function (t, e) {
            var i, n, a, r = k["canvas_" + e].y, o = 0, l = 0;
            r.forEach((function (t) {
              i = y.getChildren(t)[0], a = i.getAlignment(), n = i.updateMaxLabelSpace(O[a]), o += (0, h.pluckNumber)(n.left, 0), l += (0, h.pluckNumber)(n.right, 0)
            })), H = (0, m["default"])([H, o]), j = (0, m["default"])([j, l])
          })), x.forEach((function (t, e) {
            var i = k["canvas_" + e].x, n = .6 * (N - P) / (i.length || 1);
            i.map((function (e) {
              var i = lt(e), a = y.getChildren(e)[0].setDimension({height: n});
              return t.x[i].overlap ? {} : a
            })).forEach((function (t) {
              G += (0, h.pluckNumber)(t.top, t.bottom, 0)
            }))
          })), A += H, B -= j, i = N - P, E.height && (w.setDimension({
            x: B - E.width,
            y: P
          }), w.manageSpace()), "right" === _[0].config.captionAlignment || "right" === _[0].config.subCaptionAlignment ? (P += E.height, v = B - A) : v = B - A - E.width, _ && _.length ? (o = _[0].setDimension({
            width: v,
            height: .3 * i
          }), _[0].setTranslation(A, P), p = Math.max(o.height, E.height)) : p = E.height, P += p, a = Math.max(0, B - A), g = C.getLogicalSpace().height, C.setDimension({
            x: A,
            y: P,
            width: a
          }), C.manageSpace(), P += g, l = G + (x.length - 1) * z, i = Math.max(0, N - P - l), D && (f = Math.max(0, D.setDimension({
            height: .1 * i,
            width: a
          }).height), N -= f, i -= f, D.setTranslation(A, N)), F && F.length && (r = .7 * i / (x.length || 1), s = .3 * i / (F.length || 1), F.forEach((function (t, e) {
            t.getState("removed") || (d = t.getChildren("brush")[0], n = d.getLabelSpace() + t.config.scrollbarHeight, c = I ? Math.min(Math.max(I, 44), 84) : Math.min(Math.max(Math.min(s, .8 * r), 48), 60), u = c + n, t.setDimension({
              width: a,
              height: u
            }), t.setTranslation(A, N - (F.length - e) * u), L += u)
          })), L > i ? F.forEach((function (t) {
            return t.setDimension({width: 0, height: 0})
          })) : i -= L), T && T[0] && (Y = T[0].getCanvasBorder()), S.forEach((function (t) {
            return t.setRange([Y.leftBorder, a - (Y.leftBorder + Y.rightBorder) / 2])
          })), x.forEach((function (t, e) {
            var n = "canvas_" + e, r = k[n], o = r.x, l = r.y, s = t.x, c = t.y, u = A, d = A + a,
              f = y.getChildren(n)[0], h = P + Y.topBorder, g = h + i / U.totalProportions * U.proportions[e], p = [];
            c.forEach((function (t, n) {
              t.scale.setRange([i / U.totalProportions * U.proportions[e] - Y.bottomBorder - 6, Y.topBorder])
            })), f.getState("removed") || (Y = f.getCanvasBorder(), f.setPadding({top: 6}), f.setDimension({
              width: a,
              height: i / U.totalProportions * U.proportions[e]
            }), o.forEach((function (t) {
              var e = s[lt(t)], i = y.getChildren(t)[0], n = i.getDimension();
              e.overlap ? p.push(t) : "top" === e.align ? (i.setTranslation(A + Y.leftBorder, h), h += n.top) : "bottom" === e.align && (i.setTranslation(A + Y.leftBorder, g), g += n.bottom)
            })), f.setTranslation(A, h), p.forEach((function (t) {
              var n = s[lt(t)], a = y.getChildren(t)[0], r = a.getDimension();
              "top" === n.align ? a.setTranslation(A + Y.leftBorder, h) : "bottom" === n.align && a.setTranslation(A + Y.leftBorder, h + i / U.totalProportions * U.proportions[e] - r.bottom)
            })), l.forEach((function (t) {
              var e = h + 6, i = c[lt(t)], n = y.getChildren(t)[0], r = n.getDimension();
              i.overlap ? "left" === i.align ? n.setTranslation(A, e) : "right" === i.align && n.setTranslation(A + a - r.right, e) : "left" === i.align ? (u -= r.left, n.setTranslation(u, e)) : "right" === i.align && (n.setTranslation(d, e), d += r.right)
            })), P = g + z)
          }))
        }, i._setDataLabelStyle = function () {
          return this
        }, i._checkInvalidData = function () {
          var t = this.getFromEnv("dataSource"), e = this.getFromEnv("chartInstance");
          return !t.data && (e.__state.dataReady = !1, e.jsVars.hasNativeMessage = !0, e.jsVars.drawCount += 1, !0)
        }, i._checkInvalidSpecificData = function () {
          var t = this.getFromEnv("dataSource");
          if (t.data && "function" == typeof t.data.getData) {
            var e = t.data.getData().schema;
            return !(Array.isArray(e) && e.filter((function (t) {
              return "date" === t.type
            })).length && e.filter((function (t) {
              return "number" === t.type
            })).length)
          }
          return !0
        }, i.setYScaleLimit = function (t, e, i, n) {
          void 0 === n && (n = !0);
          var a, r, o, l, s = this, c = s.config, u = c.scaleDsMap, d = u[t], f = {start: h.UNDEF, end: h.UNDEF},
            g = function (e) {
              var i = e.scale;
              return i && i.getId() === t
            }, m = c.focusAxesY.find(g), v = c.contextAxesY.find(g), y = m || v, b = y && y.scale;
          if (b) {
            for (var x in d || (d = u[t] = {}), (a = d[e]) || (a = d[e] = {}), a.limit = i, a.baseRequired = n, d) if (d.hasOwnProperty(x)) {
              var k = d[x], S = (0, p["default"])([r, o].concat(k.limit));
              r = S[0], o = S[1], l = l || k.baseRequired
            }
            "log" === b.getType() ? b.setDomain(Ct(r, o, y.min, y.max, y.base, l)) : b.setDomain(wt(r, o, y.min, y.max, l)), (0, h.defined)(r) && (f.start = -Infinity, f.end = Infinity), m && c.focusPanels.forEach((function (t, e) {
              var i = "canvas_" + e, n = c.canvasAxisMap[i], a = n && n.y;
              a && a.forEach((function (t) {
                s.getChildren(t).forEach((function (t) {
                  t.getScale() === b && (t.setTickVisibilityLimit(f), t.placeAxis(), t.asyncDraw())
                }))
              }))
            }))
          }
        }, i.setXScaleLimit = function (t, e, i) {
          var n, a, r, o, l, s = this, c = s.config, u = c.scaleDsMap, d = u[t], f = s.getFromEnv("UTC") ? J : K,
            g = {start: c.rawDataXStart, end: Infinity}, m = s.getContextLimit(), v = m[0], y = m[1], b = function (e) {
              var i = e.scale;
              return i && i.getId() === t
            }, x = c.focusAxesX.find(b), S = c.contextAxesX.find(b), _ = x || S, C = this.getFromEnv("contextBins")[0],
            w = C.getBinMin()[2], E = C.getRangeThreshold(), D = E[0]._name, M = _ && _.scale;
          if (M) {
            for (var T in d || (d = u[t] = {}), (n = d[e]) || (n = d[e] = {}), n.limit = i, d) if (d.hasOwnProperty(T)) {
              var F = d[T], I = (0, p["default"])([a, r].concat(F.limit));
              a = I[0], r = I[1]
            }
            if ((0, h.defined)(a) && (g.start = Math.min(a, c.rawDataXStart), g.end = Infinity), x) {
              var L = s.getFocusLimit();
              o = L[0], l = L[1], +o === v && (0, k["default"])(a) && (o = Math.min(o, a)), +l === y && (0, k["default"])(r) && (l = Math.max(l, r)), Math.ceil((l - o) / E[2]) < 3 && w === E[2] && (o = +f[D].offset(l, -3 * E[1])), M.setDomain([o, l]), c.focusPanels.forEach((function (t, e) {
                var i = "canvas_" + e, n = s.getChildren(i), a = n && n[0], r = c.canvasAxisMap[i], o = r && r.x;
                o && a && (a.asyncDraw(), o.forEach((function (t) {
                  s.getChildren(t).forEach((function (t) {
                    t.getScale() === M && (t.setTickVisibilityLimit(g), t.placeAxis(), t.asyncDraw())
                  }))
                })))
              }))
            } else o = (0, k["default"])(a) ? Math.min(v, a) : v, l = (0, k["default"])(r) ? Math.max(y, r) : y, Math.ceil((l - o) / E[2]) < 3 && w === E[2] && (o = +f[D].offset(l, -3 * E[1])), M.setDomain([o, l]), s.getChildren("timeNavigator") && s.getChildren("timeNavigator").forEach((function (t) {
              if (!t.getState("removed")) {
                var e = t.getChildren("timeAxis") && t.getChildren("timeAxis")[0];
                e.getState("removed") || (e.setTickVisibilityLimit(g), e.placeAxis(), e.asyncDraw())
              }
            }))
          }
        }, i.setFocusLimit = function (t, e) {
          void 0 === t && (t = []), void 0 === e && (e = !0);
          var i = this.config, n = e ? this.domainValidator(t, this.getContextLimit(), i.focusLimit) : t,
            a = i.focusAxesX[0], r = this.getFromEnv("focusBins")[0], o = this.getFromEnv("focusScalesX")[0],
            l = this.getFocusLimit(), s = r.getRangeThreshold();
          if (i.focusLimit = n, this.fireChartInstanceEvent("selectionChange", {
            start: +n[0],
            end: +n[1],
            binUnit: s[0].name(),
            binMuliplier: s[1]
          }), (0, d["default"])(n, l)) return !1;
          r.setBinDomain(n);
          var c = r.getRangeThreshold();
          return o.setRangeThreshold(c), this.fireEvent("focusLimitChanged"), a.filterInfo && a.filterInfo.query && (a.filterInfo.query._updateArgs(+c[0].offset(+n[0], -2 * c[1]), +c[0].offset(+n[1], 2 * c[1])), a.filterInfo.table.flushResults(), this.updateVerticalAxesWidth()), l !== h.UNDEF && this._updateAffectedVisuals({legendInteracted: null}), !0
        }, i.updateVerticalAxesWidth = function () {
          var t, e = this, i = e.config.canvasAxisMap, n = Object.keys(i), a = {left: 0, right: 0};
          n.forEach((function (n) {
            i[n].y.forEach((function (i) {
              e.getChildren(i).forEach((function (e) {
                "number" == typeof (t = e.getDimension()).left ? a.left = Math.max(a.left, t.left) : "number" == typeof t.right && (a.right = Math.max(a.right, t.right))
              }))
            }))
          })), n.forEach((function (t) {
            i[t].y.forEach((function (t) {
              e.getChildren(t).forEach((function (t) {
                t.updateMaxLabelSpace(a[t.getAlignment()])
              }))
            }))
          }))
        }, i.getFocusLimit = function () {
          var t = this.config.focusLimit;
          return t && t.slice()
        }, i.setContextLimit = function (t) {
          void 0 === t && (t = []);
          var e = this.config, i = this.getFromEnv("contextScalesX")[0], n = this.getFromEnv("contextBins");
          (0, d["default"])(t, this.getContextLimit()) || (e.contextLimit = t.slice(), n[0].setBinDomain(t), i.setRangeThreshold(n[0].getRangeThreshold()), !e.navigatorEnabled && i.setDomain(e.contextLimit), this.fireEvent("contextLimitChanged"))
        }, i.getContextLimit = function () {
          return (this.config.contextLimit || []).slice()
        }, e
      }(w["default"]);
      e["default"] = Bt
    }, 740: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      var n = function () {
        function t() {
          this.unknown = "implicit", this.domain = [], this.ordinalRange = [], this.map = new Map
        }

        var e = t.prototype;
        return e.setDomain = function (t) {
          var e, i, n;
          for (void 0 === t && (t = []), this.domain = [], this.map.clear(), e = 0; e < t.length; ++e) n = (i = t[e]).toString(), this.map.has(i) || this.map.set(n, this.domain.push(i));
          return this
        }, e.getDomain = function () {
          return this.domain.slice()
        }, e.setRange = function (t) {
          return this.ordinalRange = t.slice(), this
        }, e.getRange = function () {
          return this.ordinalRange.slice()
        }, e.setUnknown = function (t) {
          return this.unknown = t, this
        }, e.getUnknown = function () {
          return this.unknown
        }, e.copy = function () {
          return (new t).setDomain(this.getDomain()).setRange(this.getRange()).setUnknown(this.geUnknownn())
        }, e.getRangeValue = function (t) {
          var e = this.map, i = t.toString(), n = this.getRange(), a = e.get(i);
          if (!a) {
            if ("implicit" !== this.getUnknown()) return this.getUnknown();
            a = this.domain.push(t), e.set(i, a)
          }
          return n[(a - 1) % n.length]
        }, e.getType = function () {
          return "ordinal"
        }, t
      }();
      e["default"] = n
    }, 741: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t) {
        return "" !== t && "number" == typeof +t && !isNaN(+t) && t !== Infinity && t !== -Infinity
      }
    }, 742: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(743));
      e["default"] = function (t) {
        return (0, a["default"])(t) && t.length
      }
    }, 743: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t) {
        return "string" == typeof t
      }
    }, 744: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e.getFormatStore = e.getAtomicity = void 0;
      var a = i(366), r = n(i(745));
      e.getAtomicity = function (t) {
        var e, i, n, a, o, l, s, c = t.timeUnits, u = void 0 === c ? [] : c, d = t.store, f = void 0 === d ? {} : d,
          h = t.index, g = t.data, p = void 0 === g ? [] : g, m = t.bins, v = t.intervalIndexMap, y = t.ms,
          b = {count: 0}, x = p.length;
        if (!u.length) return [];
        if (1 === x || 0 === x) return [u[0].ms, 1, u[0].ms];
        for (u.forEach((function (t) {
          var e = t.name, i = f[e];
          i && Object.keys(i).forEach((function (t) {
            var n = i[t];
            b.count <= n && (b.count = n, Object.assign(b, {
              multiplier: Number(t),
              unit: {name: e, ms: m[v[e.toLowerCase()]][2]}
            }))
          }))
        })), e = 1; e < x; ++e) n = p[e - 1][h], a = p[e][h], i = y.count(n, a), Math.max(0, i) && (o = (0, r["default"])(m, v, u, i), (s = f[o.unit.name])[o.multiplier] || (s[o.multiplier] = 0), l = ++s[o.multiplier], (b.count < l || b.count === l && b.unit.ms * b.multiplier > o.unit.ms * o.multiplier) && (b.count = l, Object.assign(b, o)));
        return b.count ? [b.unit.ms, b.multiplier, b.multiplier * b.unit.ms] : [u[0].ms, 1, u[0].ms]
      }, e.getFormatStore = function (t) {
        void 0 === t && (t = "");
        var e = [], i = {};
        return /%[_ -]?[cfLQ]/.test(t) && (e.push(a.DatetimeUnits.Millisecond), i[a.DatetimeUnits.Millisecond.name] = {}), /%[_ -]?[sSX]/.test(t) && (e.push(a.DatetimeUnits.Second), i[a.DatetimeUnits.Second.name] = {}), /%[_ -]?M/.test(t) && (e.push(a.DatetimeUnits.Minute), i[a.DatetimeUnits.Minute.name] = {}), /%[_ -]?[HI]/.test(t) && (e.push(a.DatetimeUnits.Hour), i[a.DatetimeUnits.Hour.name] = {}), /%[_ -]?[dejuwx]/.test(t) && (e.push(a.DatetimeUnits.Day), i[a.DatetimeUnits.Day.name] = {}), /%[_ -]?[bBm]/.test(t) && (e.push(a.DatetimeUnits.Month), i[a.DatetimeUnits.Month.name] = {}), /%[_ -]?[yY]/.test(t) && (e.push(a.DatetimeUnits.Year), i[a.DatetimeUnits.Year.name] = {}), {
          timeUnits: e,
          store: i
        }
      }
    }, 745: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t, e, i, n) {
        var a, r, o, l, s = i.length, c = n;
        for (c > 2592e6 && c <= 157248e5 && c / 30 % 1 < .067 && (c = 2592e6 * Math.floor(c / 2592e6)), a = 0; a < s; a++) for (r = e[(o = i[a]).name.toLowerCase()]; t[r] && t[r][0].name() === o.name.toLowerCase();) {
          if (c <= (l = t[r])[2]) return {unit: o, multiplier: l[1]};
          r++
        }
        return {unit: i[a - 1], multiplier: Math.round(c / i[a - 1].ms)}
      }
    }, 746: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e.DEFAULT_THRESHOLD_PIXELS = e._calculateIndexOfIntervals = e["default"] = void 0;
      var a = n(i(474)), r = function (t) {
        return new Date(t)
      }, o = function (t, e) {
        for (var i = 0, n = t.length - 1, a = n, r = Math.floor((n + i) / 2), o = e instanceof Array ? e[2] : e.unit.ms * e.multiplier; i < n;) {
          if (o < t[r][2]) a = n = r - 1; else {
            if (!(o > t[r][2])) {
              a = r;
              break
            }
            i = r + 1
          }
          r = Math.floor((n + i) / 2)
        }
        return e instanceof Array ? t[a] : t[a][2] === o ? t[a] : [t[a - 1][0], e.multiplier, o]
      }, l = function (t) {
        var e, i = {};
        for (e = t.length - 1; e >= 0; e--) i[t[e][0].name()] = e;
        return i
      };
      e._calculateIndexOfIntervals = l, e.DEFAULT_THRESHOLD_PIXELS = 4;
      var s = function () {
        function t(t) {
          this.setStandardBins(t), this.binRange = [0, 1], this.binDomain = [0, 1], this.thresholdPixels = 4, this.intervalIndexMap = l(this.getStandardBins()), this.minBin = []
        }

        var e = t.prototype;
        return e.setStandardBins = function (t) {
          this.standardBins = t
        }, e.getStandardBins = function () {
          return this.standardBins
        }, e.setScale = function (t) {
          this.scale = t
        }, e.getScale = function () {
          return this.scale
        }, e._computeRangeThreshold = function (t) {
          var e, i, n, a = this.getBinRange(), r = a[0], o = a[1],
            l = (e = t, i = 1, n = Math.abs(r - o), Math.min(Math.max(e, i), n)),
            s = +this.getScale().getDomainValue(0), c = +this.getScale().getDomainValue(l), u = Math.abs(c - s),
            d = this.getBinMin(), f = this.getBinMax(), h = this.standardBins.findIndex((function (t) {
              return t[2] >= u
            })), g = -1 === h ? this.standardBins.length - 1 : h;
          this.standardBins[g][2] < d[2] ? this._threshold = d : f && this.standardBins[g][2] > f[2] && f[2] >= d[2] ? this._threshold = f : this._threshold = this.standardBins[g]
        }, e.setBinRange = function (t) {
          return this.binRange = t.slice(), this.getScale().setRange(this.binRange), this.getScale().setDomain(this.binDomain), this._computeRangeThreshold(this.thresholdPixels), this
        }, e.getBinRange = function () {
          return this.binRange
        }, e.setBinDomain = function (t) {
          return this.binDomain = t.slice(), this.getScale().setRange(this.binRange), this.getScale().setDomain(this.binDomain), this._computeRangeThreshold(this.thresholdPixels), this
        }, e.getBinDomain = function () {
          return this.binDomain.slice().map(r)
        }, e.setBinMin = function (t) {
          var e = o(this.standardBins, t);
          return (0, a["default"])(e, t) || (this.minBin = e, this._computeRangeThreshold(this.thresholdPixels)), this
        }, e.getBinMin = function () {
          return this.minBin
        }, e.setBinMax = function (t) {
          this.maxBin = o(this.standardBins, t)
        }, e.getBinMax = function () {
          return this.maxBin
        }, e.setRangeThreshold = function (t) {
          return void 0 === t && (t = 4), t !== this.thresholdPixels && this._computeRangeThreshold(this.thresholdPixels = t), this
        }, e.getRangeThreshold = function () {
          return this._threshold
        }, t
      }();
      e["default"] = s
    }, 747: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t) {
        return void 0 === t && (t = ""), t.charAt(0).toUpperCase() + t.slice(1)
      }
    }, 748: function (t, e, i) {
      "use strict";
      var n = i(191), a = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var r = a(i(192)), o = n(i(746)), l = i(193), s = i(749), c = i(386), u = i(394), d = a(i(750)), f = a(i(436)),
        h = a(i(439)), g = a(i(377)), p = a(i(753)), m = a(i(358)), v = a(i(761)), y = a(i(747)), b = i(762),
        x = i(744), k = i(760), S = i(379), _ = i(759), C = a(i(363)), w = a(i(763)), E = a(i(764)), D = a(i(249));

      function M(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.push.apply(i, n)
        }
        return i
      }

      function T(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2 ? M(Object(i), !0).forEach((function (e) {
            (0, r["default"])(t, e, i[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : M(Object(i)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }))
        }
        return t
      }

      var F = {
        time: p["default"],
        utctime: v["default"],
        scaletime: w["default"],
        scaleutctime: E["default"],
        numeric: h["default"],
        log: d["default"]
      };
      e["default"] = function (t) {
        var e, i, n, a, r, d, h, p, v, w, E, M, I, L = t.config, O = L.contextAxesX,
          A = (0, D["default"])(O[0].clip) ? O[0].clip : [], P = L.focusAxesX, B = t.getFromEnv("dateColumn").name,
          N = P[0].binning, H = L.dataTable, j = H.getData(), R = j.data, V = j.schema, G = t.getFromEnv("UTC"),
          Y = G ? {
            Year: new C["default"](u.utcYearObj),
            Month: new C["default"](u.utcMonthObj),
            Week: new C["default"](u.utcWeekObj),
            Day: new C["default"](u.utcDayObj),
            Hour: new C["default"](u.utcHourObj),
            Minute: new C["default"](u.utcMinuteObj),
            Second: new C["default"](c.secondObj),
            Millisecond: new C["default"](c.millisecondObj)
          } : {
            Year: new C["default"](c.yearObj),
            Month: new C["default"](c.monthObj),
            Week: new C["default"](c.weekObj),
            Day: new C["default"](c.dayObj),
            Hour: new C["default"](c.hourObj),
            Minute: new C["default"](c.minuteObj),
            Second: new C["default"](c.secondObj),
            Millisecond: new C["default"](c.millisecondObj)
          }, U = G ? {
            Day: u.utcDay,
            Hour: u.utcHour,
            Week: u.utcWeek,
            Year: u.utcYear,
            Month: u.utcMonth,
            Minute: u.utcMinute,
            Second: u.utcSecond,
            Millisecond: u.utcMillisecond
          } : {
            Day: c.timeDay,
            Hour: c.timeHour,
            Week: c.timeWeek,
            Year: c.timeYear,
            Month: c.timeMonth,
            Minute: c.timeMinute,
            Second: c.timeSecond,
            Millisecond: c.timeMillisecond
          }, z = [0, .8 * t.getFromEnv("chartWidth") / P.length], X = A.map((function (t) {
            var e, i, n, a, r, o = L.baseTimeConverter, s = l.BLANKSTRING;
            if (t.format && (o = G ? m["default"].utcParser(t.format) : m["default"].parser(t.format)), s = (0, _.getMinPlaceHolder)(o.toString()), n = Y[(0, y["default"])(s)], t.repeat && ((e = T({}, t.repeat)).multiplier = Math.abs(parseInt(e.multiplier, 10))), (a = +n.floor(o.parse(t.from))) > (r = +n.floor(o.parse(t.to)))) {
              var c = [r, a];
              a = c[0], r = c[1]
            }
            return r = +n.offset(r), i = T({}, t, {
              format: o.toString(),
              to: r,
              from: a,
              level: (0, _.getMinPlaceHolder)(o.toString())
            }), e && (i.repeat = e), i
          })), W = (0, s.segregateClips)(X), q = W.repeatClips, Z = W.singleClips, $ = function (t, e) {
            var i, n = t.type, a = void 0 === n ? "time" : n,
              r = (t.plot, new (("time" === a && G ? F["scaleutc" + a] : F["scale" + a]) || F.scaletime));
            return (i = N ? new o["default"]((0, b.getCustomBins)(Y.Year, Y.Month, Y.Week, Y.Day, Y.Hour, Y.Minute, Y.Second, Y.Millisecond, N)) : new o["default"]((0, b.getDefaultBins)(Y.Year, Y.Month, Y.Week, Y.Day, Y.Hour, Y.Minute, Y.Second, Y.Millisecond))).setScale(r), i.setBinRange(z), i.setRangeThreshold(L.pixelMultiplier * o.DEFAULT_THRESHOLD_PIXELS), i
          }, Q = function (t) {
            var e, i, n, a, r = [], o = [], l = t.length;
            for (e = 0; e < l; e++) r[e] = (i = t[e], n = void 0, a = void 0, n = i.type, new (("time" === (a = void 0 === n ? "time" : n) && G ? F["utc" + a] : F[a]) || F.time)), r[e].setTimeInterval(Y), r[e].setUnclippedTimeIntervals(U), o[e] = $(t[e]), X.length && r[e].setClippings(X), r[e].setThresholdIntervals((0, b.getDefaultBins)(Y.Year, Y.Month, Y.Week, Y.Day, Y.Hour, Y.Minute, Y.Second, Y.Millisecond));
            return {scales: r, bins: o}
          }, K = function (t) {
            var e = t.value;
            return [H.min(e), H.max(e)]
          }, J = [];
        if (v = O[0].plot.map(K), d = (p = (0, f["default"])((e = []).concat.apply(e, v), Number))[0], h = p[1], X.length) {
          J = [(0, S.filter)((function (t, e) {
            var i = t[e[B]];
            return i !== (0, s.getUnclippedValue)(i, q, Z)
          }))], w = d, E = h, M = X, (I = Y).Day.setClipDates(M), I.Day.setTimeUniverse([w, E]), I.Hour.setClipDates(M), I.Hour.setTimeUniverse([w, E]), I.Week.setClipDates(M), I.Week.setTimeUniverse([w, E]), I.Year.setClipDates(M), I.Year.setTimeUniverse([w, E]), I.Month.setClipDates(M), I.Month.setTimeUniverse([w, E]), I.Minute.setClipDates(M), I.Minute.setTimeUniverse([w, E]), I.Second.setClipDates(M), I.Second.setTimeUniverse([w, E]), I.Millisecond.setClipDates(M), I.Millisecond.setTimeUniverse([w, E]), t.cloneTable();
          var tt = (H = L.dataTable).getData();
          R = tt.data, V = tt.schema
        }
        if (n = Q(O), a = Q(P), H.getDataStore().on("itemsAdded", t._onDataUpdate), t.addEventListener("beforeremove", t._offDataUpdate), t.addToEnv("timeIntervals", Y), t.addToEnv("unclippedTimeIntervals", U), L.timeSpread && L.timeSpread.duration && (i = R.length ? R[R.length - 1][L.dateColumnIndex] : +k.TIME_SPAN[0], J = J.concat((0, S.less)(B, Math.min(L.timeSpread.interval.offset(i, -L.timeSpread.multiplier), n.bins[0].getRangeThreshold()[0].offset(i, -2))))), J.length && H.getDataStore().deleteRows(S.pipe.apply(void 0, J), H.getID()), R = H.getData().data, !L.atomicity) {
          var et = L.atomicity = T({}, (0, x.getFormatStore)(V[L.dateColumnIndex].format));
          et.minBin = (0, x.getAtomicity)(T({}, et, {
            index: L.dateColumnIndex,
            data: R,
            bins: n.bins[0].getStandardBins(),
            intervalIndexMap: n.bins[0].intervalIndexMap,
            ms: Y.Millisecond
          }))
        }
        a.bins[0].setBinMin(L.atomicity.minBin), a.scales[0].setBinMin(a.bins[0].getBinMin()).setRangeThreshold(a.bins[0].getRangeThreshold()), n.bins[0].setBinMin(L.atomicity.minBin), n.scales[0].setBinMin(n.bins[0].getBinMin()).setRangeThreshold(n.bins[0].getRangeThreshold()), r = function (t) {
          var e, i, a, r, o, l, s, c, u = t.plot.map(K), d = (0, f["default"])((e = []).concat.apply(e, u), Number),
            h = n.bins[0].getBinMin()[2], p = t.plot[0].value, v = t.format || V.find((function (t) {
              return t.name === p
            })).format, y = m["default"].parser(v), b = (0, g["default"])(t.initialinterval) ? t.initialinterval : {};
          return L.rawDataXStart = d[0], R.length || "undefined" != typeof d[0] && "undefined" != typeof d[1] || (d[0] = +k.TIME_SPAN[0], d[1] = +k.TIME_SPAN[1]), L.timeSpread && L.timeSpread.duration >= 3 * h ? d[0] = +Y[L.timeSpread.unit.name].offset(d[1], -L.timeSpread.multiplier) : R.length < 3 && (0 === R.length ? (d[0] = +k.TIME_SPAN[0], d[1] = d[0] + 3 * h) : d[0] = d[1] - 2 * h), (i = d.slice())[0] = (a = b.from, r = i[0], null === (o = y.parse(a)) ? r : o > r ? +o : r), i[1] = (l = b.to, s = i[1], null === (c = y.parse(l)) ? s : c < s ? +c : s), {
            focus: i = (0, f["default"])(i),
            context: d
          }
        }(O[0]), n.scales.forEach((function (t) {
          t.setFirstData(L.rawDataXStart)
        })), a.scales.forEach((function (t) {
          t.setFirstData(L.rawDataXStart)
        })), t.addToEnv("contextScalesX", n.scales), t.addToEnv("focusScalesX", a.scales), t.addToEnv("contextBins", n.bins), t.addToEnv("focusBins", a.bins), L.clipDates = X, t.setContextLimit(r.context), t.setFocusLimit(r.focus)
      }
    }, 749: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e.segregateClips = function (t) {
        void 0 === t && (t = []);
        var e, i, n = [], a = [], r = t.length;
        for (i = 0; i < r; i++) (e = t[i]).repeat ? n.push(e) : a.push(e);
        return {repeatClips: n, singleClips: a}
      }, e.getUnclippedValue = h, e.getClipType = function (t, e, i) {
        void 0 === t && (t = []);
        void 0 === e && (e = []);
        void 0 === i && (i = []);
        var n, a, r, o, l, s = +t[0], c = +t[1];
        if (h(s, e, i, {upperLimit: c}) >= c) return 2;
        for (n = 0, a = i.length; n < a; n++) if (r = i[n], s <= +r.from && +r.from < c || s < +r.to && +r.to < c) return 1;
        for (n = 0, a = e.length; n < a; n++) {
          if (r = e[n], l = u(s, r)[1], u(c - 1, r)[1] - l > 1) return 1;
          if (o = d(s, r), s <= o[0] && o[0] < c || s < o[1] && o[1] < c) return 1;
          if (o = d(c - 1, r), s <= o[0] && o[0] < c || s < o[1] && o[1] < c) return 1
        }
        return 0
      };
      var a = n(i(363)), r = i(393), o = i(370),
        l = {millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, month: 2592e6, year: 31536e6},
        s = new a["default"](r.monthObj), c = new a["default"](o.yearObj);

      function u(t, e, i) {
        void 0 === i && (i = l);
        var n = e.repeat.multiplier * i[e.repeat.unit.toLowerCase()], a = Math.floor((t - e.from) / n);
        return [n, a = +e.repeat.duration < 0 ? Math.min(0, a) : Math.max(0, a)]
      }

      function d(t, e, i) {
        void 0 === i && (i = l);
        var n, a, r, o, d = e.repeat.unit.toLowerCase(), f = e.repeat.multiplier || 1, h = u(t, e, i), g = h[0],
          p = h[1];
        if ("month" === d || "year" === d) {
          if (p *= f, a = +(o = "year" === d ? c : s).offset(new Date(e.from), p), r = +o.offset(new Date(e.to), p), p >= 0) if (+a > t) for (; +a > t && !((n = o.offset(a, -1 * f)) <= t);) a = n, r = o.offset(r, -1 * f); else for (; +a < t && !((n = o.offset(a, f)) > t);) a = n, r = o.offset(r, f); else +a < t && (a = o.offset(a, -1 * f), r = o.offset(r, -1 * f));
          return [+a, +r]
        }
        return [+e.from + g * p, +e.to + g * p]
      }

      function f(t, e, i) {
        void 0 === e && (e = {}), void 0 === i && (i = "up");
        var n = +e.from, a = +e.to;
        if (e.repeat) {
          var r = d(t, e);
          n = r[0], a = r[1]
        }
        return t >= n && t < a ? "up" === i ? a : n - 1 : t
      }

      function h(t, e, i, n) {
        if (void 0 === e && (e = []), void 0 === i && (i = []), void 0 === n && (n = {}), isNaN(+t)) return t;
        for (var a, r, o, l, s = n, c = s.upperLimit, u = s.lowerLimit, d = s.clampDirection, h = +t, g = h, p = h, m = 5, v = i.length || 1; v > 0 || m > 0;) {
          for (a = 0, o = e.length; a < o; a++) {
            for (r = 0; r < o; r++) if ((p = f(h, e[r], d)) !== h) if ("down" === d) {
              if ((g = Math.min(g, p)) <= u) return u
            } else if ((g = Math.max(g, p)) >= c) return c;
            if (g === h) break;
            h = g
          }
          if (l === h) break;
          for (a = 0, o = i.length; a < o; a++) {
            if ((h = f(h, i[a], d)) >= c) return c;
            if (h <= u) return u
          }
          for (a = 0; a < o; a++) "down" === d ? h < i[a].from && v-- : h >= i[a].to && v--;
          g === h && (v = 0), l = h, m--
        }
        return h
      }

      window.getUnclippedValue = h
    }, 750: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = n(i(751)), o = n(i(456)), l = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        return (0, a["default"])(e, t), e.prototype.ticks = function (t) {
          var e, i, n, a, r, l, s, c, u, d, f, h = this.getDomain(), g = h[0], p = h[1], m = 0, v = [], y = [], b = 0,
            x = this.base, k = x > 1 ? -1 : 1, S = Math.log(x) / Math.log(10) % 1 ? 4 : 8;
          if (g <= 0 || p <= 0) return v;
          if (g > p) {
            var _ = this.getDomain();
            p = _[0], g = _[1], m = 1
          }
          for (x > 1 ? (a = e = Math.ceil(Math.log(p) / Math.log(x)), n = i = Math.floor(Math.log(g) / Math.log(x))) : x > 0 && x < 1 && (e = Math.floor(Math.log(p) / Math.log(x)), a = i = Math.ceil(Math.log(g) / Math.log(x)), n = e), l = i, s = n; s <= a; ++s) {
            if (r = this.pows(l), void 0 !== f) for (x > 1 ? e = Math.ceil(Math.log(r) / Math.log(x)) : x > 0 && x < 1 && (e = Math.floor(Math.log(r) / Math.log(x))), u = (Math.pow(x, e) - Math.pow(x, e + k)) / (S + 1), c = 1; c <= S; ++c) d = Math.pow(x, e + k) + u * c, v.push(d), y.push("minor"), (g > d || p < d) && ++b;
            v.push(r), y.push("major"), (g > r || p < r) && ++b, f = r, x > 1 ? l++ : l--
          }
          return this._tickType = y, v.length - b <= 2 && (v = (0, o["default"])(g, p, t), this._tickType = void 0), this.majorTicks = m ? v.reverse() : v
        }, e
      }(r["default"]);
      e["default"] = l
    }, 753: function (t, e, i) {
      "use strict";
      var n = i(191), a = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var r = a(i(207)), o = i(386), l = n(i(754)), s = i(760), c = function (t) {
        function e() {
          var e;
          return (e = t.call(this, o.timeYear, o.timeMonth, o.timeWeek, o.timeDay, o.timeHour, o.timeMinute, o.timeSecond, o.timeMillisecond) || this).setTimeFormat(), e.setDomain([].concat(s.TIME_SPAN)), e
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.getType = function () {
          return ""
        }, i.setTimeFormat = function (t) {
          void 0 === t && (t = {});
          var e = this._localeConverter, i = t, n = i.millisecond, a = i.second, r = i.minute, o = i.hour, l = i.day,
            s = i.month, c = i.year;
          this.formatters = {
            millisecond: {
              major: e.formatter(n || "%I:%M:%S.%L %p"),
              minor: e.formatter(n || "%L ms"),
              context: e.formatter(n || "%b %d, %Y, %I:%M:%S.%L %p")
            },
            second: {
              major: e.formatter(a || "%I:%M:%S %p"),
              minor: e.formatter(a || "%S s"),
              context: e.formatter(a || "%b %d, %Y, %I:%M:%S %p")
            },
            minute: {
              major: e.formatter(r || "%I:%M %p"),
              minor: e.formatter(r || "%M m"),
              context: e.formatter(r || "%b %d, %Y, %I:%M %p")
            },
            hour: {
              major: e.formatter(o || "%I %p"),
              minor: e.formatter(o || "%I %p"),
              context: e.formatter(o || "%b %d, %Y, %I %p")
            },
            day: {
              major: e.formatter(l || "%b %d"),
              minor: e.formatter(l || "%d"),
              context: e.formatter(l || "%b %d, %Y")
            },
            month: {major: e.formatter(s || "%b"), minor: e.formatter(s || "%b"), context: e.formatter(s || "%b %Y")},
            year: {major: e.formatter(c || "%Y"), minor: e.formatter(c || "%Y"), context: e.formatter(c || "%Y")}
          }
        }, i.setTimeInterval = function (e) {
          this.timeIntervals = e, t.prototype.setTimeInterval.call(this, e)
        }, i.setUnclippedTimeIntervals = function (e) {
          this.unclippedTimeIntervals = e, t.prototype.setUnclippedTimeIntervals.call(this, e)
        }, i.getTimeInterval = function () {
          return this.timeIntervals
        }, i.getUnclippedTimeIntervals = function () {
          return this.unclippedTimeIntervals
        }, i.tickFormat = function (t) {
          var e = this;
          return t ? function (i) {
            return e._localeConverter.formatter(t).format(i)
          } : function (t, i, n) {
            return e._timeFormat[i] ? e._localeConverter.formatter(e._timeFormat[i]).format(t) : e.formatters[i][n].format(t)
          }
        }, i.copy = function () {
          return (0, l.copyScaleBin)(this, new e)
        }, e
      }(l["default"]);
      e["default"] = c
    }, 754: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = e.copyScaleBin = void 0;
      var a = n(i(207)), r = n(i(755)), o = i(758);
      e.getFloorOfDate = o.getFloorOfDate, e.modifyDate = o.modifyDate;
      var l = n(i(199)), s = i(759), c = n(i(358)), u = n(i(370)), d = i(749), f = n(i(747)),
        h = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        g = ["day", "month", "year"],
        p = [{ratio: 4, index: 8}, {ratio: 3, index: 7}, {ratio: 2.5, index: 6}, {ratio: 2, index: 5}, {
          ratio: 1.5,
          index: 4
        }, {ratio: 1, index: 3}, {ratio: .67, index: 2}, {ratio: .33, index: 1}, {ratio: 0, index: 0}],
        m = function (t, e, i, n) {
          var a, r;
          return t[0] > t[1] ? (a = i(t[1], t[0]), r = n(e[1], e[0])) : (a = i(t[0], t[1]), r = n(e[0], e[1])), function (t) {
            return r(a(t))
          }
        }, v = function (t, e) {
          return e.setInterpolate(t.getInterpolate()).setClamp(t.getClamp()).setRangeThreshold(t._threshold).setRange(t.getRange()).setThresholdIntervals(t.thresholdIntervals).setBinMin(t.getBinMin()).setClippings(t.clippings).setFirstData(t.getFirstData()).setDomain(t.getDomain())
        }, y = function (t) {
          return null !== t && !isNaN(t)
        }, b = function (t, e, i) {
          return t["get" + i + e]()
        }, x = function (t) {
          return (t < 10 ? "0" + t : t) + ""
        }, k = function (t, e) {
          return h[b(t, "Month", e)] + " " + x(b(t, "Date", e)) + ", " + b(t, "FullYear", e)
        }, S = function (t, e) {
          return x(b(t, "Hours", e)) + ":" + x(b(t, "Minutes", e)) + ":" + x(b(t, "Seconds", e))
        }, _ = function (t, e, i) {
          var n;
          for (n = e; n - 1 >= 0 && "year" === t[n - 1][0].name() && t[n - 1][2] >= i;) n--;
          return n
        };
      e.copyScaleBin = v;
      var C = function (t) {
        function e(e, i, n, a, r, o, l, s) {
          var c;
          return (c = t.call(this, e, i, n, a, r, o, l, s) || this)._type = "", c.bins = [], c.clippings = [], c.clipIndices = [], c.clips = [], c.clippedDomain = [0, 1], c.applicableClippings = {}, c
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.getType = function () {
          return this._type
        }, i.setTimeInterval = function (e) {
          this.timeIntervals = e, t.prototype.setTimeInterval.call(this, e)
        }, i.setUnclippedTimeIntervals = function (e) {
          this.unclippedTimeIntervals = e, t.prototype.setUnclippedTimeIntervals.call(this, e)
        }, i._rescale = function () {
          return this.output = null, this.input = null, this
        }, i.setClippings = function (t) {
          return this.clippings = t, this
        }, i.getClippings = function () {
          return this.clippings
        }, i.showPlotOverTick = function () {
          var t = this._getRangeThreshold();
          return ("millisecond" === this.getBinMin()[0].name() || g.indexOf(t[0].name()) > -1) && 1 === t[1]
        }, i.getBinBounds = function (t) {
          var e = this._getBinBounds(t);
          return {startDate: +e.start, endDate: +e.end}
        }, i.getBinIndex = function (t) {
          var e = this._getBinIndex(t), i = this._getBinBounds(e), n = this.bins.length,
            a = +i.start + (i.end - i.start) / 2;
          if (this.showPlotOverTick() && t >= a) for (e++; e < n && 2 === this.bins[e].clipType;) e++;
          return e
        }, i.calculateRangeValue = function (t) {
          var e, i = this.getDomain(), n = this.bins;
          return e = t < n[0].start || t >= n[n.length - 1].end ? t : +i[0] + this.distance(+i[0], +t), this.output || (this.output = m(this.clippedDomain, this.getRange(), this.deInterpolate, this.interpolate)), this.output(Number(e))
        }, i.getRangeValue = function (t, e) {
          if (void 0 !== t || void 0 !== e) return void 0 === e ? this.calculateRangeValue(t) : this.showPlotOverTick() ? this.calculateRangeValue(t) : (this.calculateRangeValue(t) + this.calculateRangeValue(e)) / 2
        }, i.getDomainValue = function (t) {
          if (isNaN(t)) return t;
          var e, i, n = this.getDomain();
          return this.input || (this.input = m(this.getRange(), this.clippedDomain, this.deInterpolate, this.interpolate)), e = this.input(Number(t)), i = this.offset(+n[0], e - n[0]), new Date(i)
        }, i.calculateIndexOfIntervals = function () {
          var t, e, i = this.thresholdIntervals, n = i.length;
          for (this.intervalIndexMap = t = {}, e = n - 1; e >= 0; e--) t[i[e][0].name()] = e
        }, i.getNiceMinorTickInterval = function (t, e, i) {
          if (0 === t) return -1;
          var n, a, r, o, s = this.thresholdIntervals, c = this._getRangeThreshold()[2], u = s[t - 1][0].name(), d = [];
          for (n = 0, r = s.length; n < r; n++) if (s[n][2] >= c) {
            o = n;
            break
          }
          for (n = t - 1; n >= o && s[n][0].name() === u; n--) s[n][2] % c || "year" === u || d.push(n);
          return a = Math.min(function (t) {
            var e, i = p.length, n = 1 / t;
            if (n > 4) return Infinity;
            for (e = 0; e < i; e++) if (n > p[e].ratio) return p[e].index
          }(i / e), d.length - 1), (0, l["default"])(d[a], -1)
        }, i.getNiceMajorTickInterval = function (t, e) {
          void 0 === e && (e = !1);
          var i, n = this.thresholdIntervals, a = n.length, r = this._getRangeThreshold()[2];
          if ("random" === this.getMode()) if (!e && "day" === n[t][0].name() && (n[t][1] > 1 || n[t][2] > r)) {
            for (i = t; i < a; i++) if ("day" !== n[i][0].name() && r < n[i][2]) return i
          } else {
            if ("year" === n[t][0].name()) return _(n, t, r);
            for (i = t; i < a; i++) if (n[i][2] > r) return i
          } else if (1 !== n[t][1] || n[t][2] <= r) {
            if ("year" === n[t][0].name()) return _(n, t, r);
            for (i = t; i < a; i++) if (1 === n[i][1] && n[i][2] > r) return i
          }
          return t
        }, i.generateContextTicks = function (t, e) {
          void 0 === e && (e = !1);
          var i, n, a, r, l = this.thresholdIntervals, s = this.intervalIndexMap, c = this.getDomain(), u = c[0],
            d = c[1], f = l[t][0].name(), h = g[g.indexOf(f) + 1], p = l.length, m = s.day, v = -1, y = [];
          if (e) v = t; else for ("day" === f && (h = "year"), i = Math.max(t, m); i < p; i++) if (l[i][0].name() === h) {
            v = i;
            break
          }
          if (v > -1) {
            if (n = (0, o.getFloorOfDate)(new Date(u), l[v][0].name(), l[v][1], this.getType()), r = function (t, e, i, n, a) {
              var r = (0, o.getFloorOfDate)(new Date(t), n[i][0].name(), n[i][1], a),
                l = (0, o.getFloorOfDate)(new Date(e), n[i][0].name(), n[i][1], a);
              return +r != +l && [r, l]
            }(new Date(u), new Date(d), v, l, this.getType())) {
              for (r = (a = r[1]) - l[v][2]; r >= +u;) y.push(new Date(r)), r -= l[v][2];
              +u != +n && y.push(new Date(n)), y.reverse(), y.push(new Date(a))
            } else y.push(n);
            this._timeFormat.context = l[v][0].name()
          }
          return y
        }, i.getClippedMinorTicks = function (t, e, i) {
          var n, a, r, o, l, s, c = this.bins, u = this._getRangeThreshold(), h = c[0], g = c[c.length - 1],
            p = this.applicableClippings, m = p.repeatClips, v = p.singleClips, y = this.thresholdIntervals[i],
            b = this.unclippedTimeIntervals[(0, f["default"])(u[0].name())] || this.unclippedTimeIntervals[u[0].name()],
            x = [], k = 0, S = y[0].range(t, e, y[1]).length, _ = -1, C = [];
          for (l = h.start, s = h.end; l > t;) l = b.offset(l, -1 * u[1]), s = b.offset(s, -1 * u[1]), o = (0, d.getClipType)([l, s], m, v), x.push({
            start: l,
            end: s,
            clipType: o
          }), 2 !== o && k++;
          for (x.reverse(), n = 0, a = c.length; n < a; n++) c[n].end < t || c[n].start > e || (x.push(c[n]), 2 !== c[n].clipType && k++);
          for (l = g.start, s = g.end; s < e;) l = b.offset(l, u[1]), s = b.offset(s, u[1]), x.push({
            start: l,
            end: s,
            clipType: (0, d.getClipType)([l, s], m, v)
          }), 2 !== o && k++;
          for (S = Math.min(S, k) + 1, r = Math.floor(k / S) || 1, n = 0, a = x.length; n < a; n++) 2 !== x[n].clipType && (!++_ || _ % r || C.push(x[n].start));
          return C
        }, i.getMajorIntervalGap = function (t, e, i) {
          var n = this.thresholdIntervals;
          return this.getClippings().length ? this.distance(t, e) : "month" === n[i][0].name() ? 2592e6 : "year" === n[i][0].name() ? 31536e6 : e - t
        }, i.ticks = function (t, e) {
          void 0 === t && (t = {});
          var i, n, a, r, l, s, c, u, h, g, p, m, v, b, x = this.thresholdIntervals,
            k = this.getUnclippedTimeIntervals(), S = this.applicableClippings, _ = S.repeatClips, C = S.singleClips,
            w = this.getDomain(), E = this._getRangeThreshold(), D = !1, M = [], T = w[0], F = w[1], I = [], L = [],
            O = [], A = this.getType();
          if (!y(T) || !y(F)) return this._tickType = [], [];
          for (this._timeFormat = b = {}, v = this.distance(T, F), i = a = x.length - 1; i >= 0; i--) if (Math.floor(v / x[i][2]) > 1) {
            for (s = x[l = this.getNiceMajorTickInterval(i, e)][0].name(), r = k[(0, f["default"])(s)] || k[s], T = (0, o.getFloorOfDate)(new Date(T), s, x[l][1], A), F = (0, o.modifyDate)(new Date(F), s, x[l][1], !1, A), F = (0, o.getFloorOfDate)(new Date(F), s, x[l][1], A), h = r.range(+T, +F + x[l][2], x[l][1]), b.major = s, n = 0; n < h.length; n++) +h[n] >= +w[0] && +h[n] <= +w[1] && (D = !0);
            M = this.generateContextTicks(l, !D) || [];
            break
          }
          if (!h) return this._tickType = [], I;
          for (i = 0, a = h.length; i < a - 1; i++) if (I.push(h[i]), L.push("major"), (u = "year" === x[l][0].name() && h.length > 10 ? -1 : this.getNiceMinorTickInterval(l, this.getMajorIntervalGap(h[i], h[i + 1], l), v)) > -1 && !t.minor) for (c = x[u][0].name(), r = k[(0, f["default"])(c)] || k[c], g = ((_ || []).length || (C || []).length) && 1 === E[1] && E[0].name() === x[u][0].name() ? this.getClippedMinorTicks(h[i], h[i + 1], u) : r.range(+h[i], +h[i + 1] + 1, x[u][1]), b.minor = x[u][0].name(), n = 0, p = g.length; n < p; n++) m = +g[n], n === p - 1 && p > 1 && +this.distance(h[i + 1], m) / this.distance(m, +g[n - 1]) < .5 || m !== +h[i] && m !== +h[i + 1] && (I.push(g[n]), L.push("minor"));
          if (I.push(h[a - 1]), L.push("major"), M.length && !t.context) for (i = 0, a = M.length; i < a; i++) I.push(M[i]), L.push("context");
          for (this._tickType = [], i = 0, a = I.length; i < a; i++) "minor" !== L[i] && (I[i] = (0, d.getUnclippedValue)(I[i], _, C));
          for (i = 0, a = I.length; i < a; i++) "major" === L[i] ? I[i] !== I[i - 1] && (O.push(I[i]), this._tickType.push(L[i])) : (O.push(I[i]), this._tickType.push(L[i]));
          return O
        }, i.setDomain = function (e) {
          var i;
          void 0 === e && (e = []);
          var n = this.getDomain();
          return e[0] > e[1] && (i = [e[0], e[1]], e[1] = i[0], e[0] = i[1]), +n[0] == +e[0] && +n[1] == +e[1] || (t.prototype.setDomain.call(this, e), this.calculateBins(e)), this
        }, i.calculateBins = function (t) {
          void 0 === t && (t = []);
          var e, i, n, a, r, o, s, c, h, g, p = +t[0], m = +t[1], v = this._getRangeThreshold(),
            y = this.getUnclippedTimeIntervals(), b = v && v[2], x = [], k = this.getFirstData(),
            S = this.getClippings(), _ = [], C = [], w = [];
          if (b) {
            for (h = v[0].name(), o = 0, c = S.length; o < c; o++) (g = S[o]).to - g.from >= b && _.push(g);
            if (a = y[(0, f["default"])(h)] || y[h], _ = this.applicableClippings = (0, d.segregateClips)(_), n = e = +u["default"].floor((0, l["default"])(k, p)), p = a.offset(new Date(t[0]), -3 * v[1]), m = a.offset(new Date(t[1]), 3 * v[1]), "year" === a.name() || "month" === a.name()) if (e > p) for (; e > p;) e = a.offset(e, -1 * v[1]); else for (; a.offset(e, v[1]) < p;) e = a.offset(e, v[1]); else e = new Date(Math.floor((p - n) / b) * b + n);
            for (i = a.offset(e, v[1]), s = 0; e <= m; s++) r = (0, d.getClipType)([+e, +i], _.repeatClips, _.singleClips), x.push({
              clipType: r,
              start: e,
              end: i
            }), 2 === r && C.push(s), w[s] = (w[s - 1] || 0) + (2 === r ? i - e : 0), e = a.offset(e, v[1]), i = a.offset(i, v[1]);
            this.clips = w, this.clipIndices = C, this.bins = x, this.clippedDomain = [+t[0], +t[0] + this.distance(+t[0], +t[1])]
          }
          return this.clips = w, this.clipIndices = C, this.bins = x, this
        }, i._getBinIndex = function (t) {
          var e, i, n = +t, a = this.bins, r = this.clips, o = !1;
          if (a[i = e = function (t, e) {
            for (var i, n = 0, a = t.length - 1; n <= a;) {
              if (e >= t[i = n + Math.ceil((a - n) / 2)].start && e < t[i].end) return i;
              t[i].end <= e ? n = i + 1 : a = i - 1
            }
            return -1
          }(a, n)] && 2 === a[i].clipType) {
            for (; i < r.length;) if (r[++i] === r[i - 1]) {
              o = !0;
              break
            }
            if (!o) for (i = e; i >= 0;) if (r[--i] === r[i + 1]) {
              i += 1, o = !0;
              break
            }
          }
          return i
        }, i._getBinBounds = function (t) {
          return this.bins[t] || {}
        }, i.distance = function (t, e) {
          var i, n, a, r, o, l, s, c, u = Math.min(+t, +e), h = Math.max(+t, +e), g = this.bins, p = [], m = [],
            v = this.applicableClippings, y = this.getUnclippedTimeIntervals(), b = this._getRangeThreshold(),
            x = this.clips, k = this._getBinIndex(u), S = this._getBinIndex(h), _ = t > e ? -1 : 1, C = [], w = 0;
          if (r = g[0], o = g[g.length - 1], !b.length) return _ * (h - u);
          if (-1 === k || -1 === S) {
            if (l = y[(0, f["default"])(b[0].name())] || y[b[0].name()], -1 === k && (u = (0, d.getUnclippedValue)(+u, v.repeatClips, v.singleClips)), -1 === S && (h = (0, d.getUnclippedValue)(+h, v.repeatClips, v.singleClips)), u < r.start) {
              for (a = r; u < a.start;) (a = {
                start: l.offset(a.start, -1 * b[1]),
                end: a.start
              }).clipType = (0, d.getClipType)([+a.start, +a.end], v.repeatClips, v.singleClips), p.push(a);
              i = a, k = p.length - 1
            } else if (u >= o.end) {
              for (a = o; h >= a.end;) (a = {
                end: l.offset(a.end, b[1]),
                start: a.end
              }).clipType = (0, d.getClipType)([+a.start, +a.end], v.repeatClips, v.singleClips), m.push(a);
              i = a, k = m.length - 1
            } else i = this._getBinBounds(k);
            if (s = -1, h < r.start) {
              for (a = r; h < a.start;) p[++s] || ((a = {
                start: l.offset(a.start, -1 * b[1]),
                end: a.start
              }).clipType = (0, d.getClipType)([+a.start, +a.end], v.repeatClips, v.singleClips), p.push(a)), a = p[s];
              n = a, S = s
            } else if (h >= o.end) {
              for (a = o; h >= a.end;) m[++s] || ((a = {
                start: a.end,
                end: l.offset(a.end, b[1])
              }).clipType = (0, d.getClipType)([+a.start, +a.end], v.repeatClips, v.singleClips), m.push(a)), a = m[s];
              n = a, S = s
            } else n = this._getBinBounds(S);
            for (p.reverse(), C = u, s = 0, c = p.length; s < c; s++) {
              if (u >= (a = p[s]).start && u < a.end) {
                if (h < a.end) {
                  w += h - u, C = a.end;
                  break
                }
                w += a.end - u
              } else {
                if (h >= a.start && h < a.end) {
                  w += h - a.start, C = a.end;
                  break
                }
                w += 2 === a.clipType ? 0 : a.end - a.start
              }
              C = a.end
            }
            if (C < h && C < o.end) for (s = 0, c = g.length; s < c; s++) if (u >= (a = g[s]).start && u < a.end) {
              if (h < a.end) {
                w += h - u, C = a.end;
                break
              }
              w += a.end - u
            } else {
              if (h >= a.start && h < a.end) {
                w += h - a.start, C = a.end;
                break
              }
              a.start >= u && (w += 2 === a.clipType ? 0 : a.end - a.start, C = a.end)
            }
            if (C < h) for (s = 0, c = m.length; s < c; s++) if (u >= (a = m[s]).start && u < a.end) {
              if (h < a.end) {
                w += h - u, C = a.end;
                break
              }
              w += a.end - u
            } else {
              if (h >= a.start && h < a.end) {
                w += h - a.start, C = a.end;
                break
              }
              a.start >= u && (w += 2 === a.clipType ? 0 : a.end - a.start, C = a.end)
            }
          } else {
            if (i = this._getBinBounds(k), n = this._getBinBounds(S), i.start > u ? u = i.start : i.end < u && (u = i.end), n.start > h ? h = n.start : n.end < h && (h = n.end), S - k <= 1) return (h - u) * _;
            w += i.end - u, w += h - n.start, w += n.start - i.end, w -= x[S] - x[k]
          }
          return w * _
        }, i.offset = function (t, e) {
          var i, n, a, r, o = Math.abs(+e), l = +t, s = this._getBinIndex(l), c = this._getBinBounds(s), u = this.bins,
            h = this.getUnclippedTimeIntervals(), g = this.applicableClippings, p = this._getRangeThreshold();
          if (!this.clipIndices.length) return Number(t) + Number(e);
          if (e >= 0) {
            if (+c.start > l && (l = +c.start), l + o < c.end) return l + o;
            for (o -= +c.end - l, l = +c.end, s++; s < u.length; s++) if (2 !== (r = u[s]).clipType) {
              if (!(o >= r.end - r.start)) {
                l += o, o = 0;
                break
              }
              o -= r.end - r.start, l = +r.end
            } else l = +r.end
          } else {
            if (+c.end < l && (l = +c.end), l - o >= c.start) return l - o;
            for (o -= l - c.start, l = c.start, i = h[(0, f["default"])(p[0].name())] || h[p[0].name()], r = c; o;) 2 !== (r = {
              start: n = i.offset(r.start, -1 * p[1]),
              end: a = r.start,
              clipType: (0, d.getClipType)([+n, +a], g.repeatClips, g.singleClips)
            }).clipType ? o >= r.end - r.start ? (o -= r.end - r.start, l = +r.start) : (l -= o, o = 0) : l = +r.start
          }
          return l
        }, i.nice = function (e, i) {
          var n = t.prototype.nice.call(this, e, i);
          return this._computeRangeThreshold(4), n
        }, i.getFormattedTime = function (t, e) {
          void 0 === t && (t = {});
          var i, n, a, r, o, l, u, d, f, h = this._getRangeThreshold(), g = t.dateRange, p = t.type, m = h[1],
            v = this.getType();
          return "crossline" === p || "tooltip" === p ? (i = h[0].name(), e && e[i] ? (n = a = e[i], l = ("UTC" === v ? c["default"].utcFormatter(n) : c["default"].formatter(n)).format(new Date(g.startDate)), m > 1 ? l + " - " + ("UTC" === v ? c["default"].utcFormatter(a) : c["default"].formatter(n)).format(new Date(g.endDate)) : l) : (n = a = (0, s.getFilterdTimeFormat)("%b %d, %Y, %I:%M:%S.%L %p", i), "hour" === i && (n = n.replace(/%M/, ""), a = a.replace(/%M/, "")), n = n.replace(/[:|.]*[\s]/g, " "), a = a.replace(/[:|.]*[\s]/g, " "), n.match(/%I/) || (g.endDate -= 1, n = n.replace(/%p/, ""), a = a.replace(/%p/, "")), r = new Date(g.startDate), o = new Date(g.endDate), u = b(r, "Date", v) === b(o, "Date", v), d = b(r, "Month", v) === b(o, "Month", v), f = b(r, "FullYear", v) === b(o, "FullYear", v), m > 1 ? f && (d ? u ? n.match(/%I/) ? (n = n.replace(/%p/, ""), a = (a = (a = a.replace(/%b/, "")).replace(/%d/, "")).replace(/%Y/, "")) : (n = n.replace(/%b/, "%B"), a = "") : (n = n.replace(/%Y/, "")).match(/%I/) || (a = a.replace(/%b/, ""), n = n.replace(/%b/, "%B")) : 1 !== m && (n = n.replace(/%Y/, ""))) : n.match(/%I/) || (n = n.replace(/%b/, "%B")), n = n.trim(), a = a.trim(), n = n.replace(/^[,|\s|:]*/, "").replace(/(\W+$)/, "").replace(/([,]+[\s]*[,]+)|([\s]+[,]+)/g, ","), (a = a.replace(/^[,|\s|:]*/, "").replace(/(\W+$)/, "").replace(/([,]+[\s]*[,]+)|([\s]+[,]+)/g, ",")) && 1 !== m ? ((l = ("UTC" === v ? c["default"].utcFormatter(n) : c["default"].formatter(n)).format(new Date(g.startDate))) + " - " + ("UTC" === v ? c["default"].utcFormatter(a) : c["default"].formatter(a)).format(new Date(g.endDate))).trim() : (l = ("UTC" === v ? c["default"].utcFormatter(n) : c["default"].formatter(n)).format(new Date(g.startDate))).trim())) : "CRS" === p ? ((l = k(g.startDate, v) + (t.showTimeInLabel ? ", " + S(g.startDate, v) : "")) + " - " + (k(g.endDate, v) + (t.showTimeInLabel ? ", " + S(g.endDate, v) : ""))).trim() : void 0
        }, i.setBinMin = function (t) {
          return this.minBin = t, this
        }, i.getBinMin = function () {
          return this.minBin
        }, i.setRangeThreshold = function (t) {
          return this._threshold = t, this
        }, i._getRangeThreshold = function () {
          return this._threshold || []
        }, i.setMode = function (t) {
          this.mode = t
        }, i.getMode = function () {
          return this.mode
        }, i.setThresholdIntervals = function (t) {
          return this.thresholdIntervals = t, this.calculateIndexOfIntervals(), this
        }, i.setFirstData = function (t) {
          return this.binStart = t, this
        }, i.getFirstData = function () {
          return this.binStart
        }, i.copy = function () {
          return v(this, new e)
        }, e
      }(r["default"]);
      e["default"] = C
    }, 755: function (t, e, i) {
      "use strict";
      var n = i(191), a = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var r = a(i(207)), o = n(i(440)), l = a(i(433)), s = n(i(756)), c = a(i(374)), u = i(358), d = function (t) {
        return new Date(t)
      }, f = function (t) {
        return t instanceof Date ? +t : +new Date(+t)
      }, h = function (t) {
        function e(e, i, n, a, r, s, d, f) {
          var h;
          return (h = t.call(this, o.deInterpolateLinear, l["default"]) || this).timeIntervals = {
            year: e,
            month: i,
            week: n,
            day: a,
            hour: r,
            minute: s,
            second: d,
            millisecond: f
          }, h.unclippedTimeIntervals = {
            year: e,
            month: i,
            week: n,
            day: a,
            hour: r,
            minute: s,
            second: d,
            millisecond: f
          }, h.tickIntervals = [[h.timeIntervals.second, 1, 1e3], [h.timeIntervals.second, 5, 5e3], [h.timeIntervals.second, 15, 15e3], [h.timeIntervals.second, 30, 3e4], [h.timeIntervals.minute, 1, 6e4], [h.timeIntervals.minute, 5, 3e5], [h.timeIntervals.minute, 15, 9e5], [h.timeIntervals.minute, 30, 18e5], [h.timeIntervals.hour, 1, 36e5], [h.timeIntervals.hour, 3, 108e5], [h.timeIntervals.hour, 6, 216e5], [h.timeIntervals.hour, 12, 432e5], [h.timeIntervals.day, 1, 864e5], [h.timeIntervals.day, 2, 1728e5], [h.timeIntervals.week, 1, 6048e5], [h.timeIntervals.month, 1, 2592e6], [h.timeIntervals.month, 3, 7776e6], [h.timeIntervals.year, 1, 31536e6]], h.locale = c["default"], h._localeConverter = new u.TimeConverter(c["default"]), h
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.setDomain = function (e) {
          return t.prototype.setDomain.call(this, e.map(f))
        }, i.setTimeInterval = function (t) {
          this.timeIntervals = t
        }, i.setUnclippedTimeIntervals = function (t) {
          this.unclippedTimeIntervals = t
        }, i.getDomain = function () {
          return t.prototype.getDomain.call(this).map(d)
        }, i.ticks = function (e, i) {
          var n = t.prototype.getDomain.call(this);
          return (0, s["default"])(n[0], n[n.length - 1], e, i, this.tickIntervals, this.timeIntervals)
        }, i.nice = function (e, i) {
          var n = t.prototype.getDomain.call(this),
            a = (0, s.tickInterval)(n[0], n[n.length - 1], e, i, this.tickIntervals, this.timeIntervals);
          return a ? t.prototype.setDomain.call(this, function (t, e) {
            var i, n = t.slice(), a = 0, r = n.length - 1, o = n[a], l = n[r];
            return l < o && (i = a, a = r, r = i, i = o, o = l, l = i), n[a] = e.floor(o), n[r] = e.ceil(l), n
          }(n, a)) : this
        }, i.getDomainValue = function (e) {
          return new Date(t.prototype.getDomainValue.call(this, e))
        }, i.setLocale = function (t) {
          return void 0 === t && (t = c["default"]), this.locale = t, this._localeConverter = new u.TimeConverter(this.locale), this
        }, i.copy = function () {
          var t = this.timeIntervals, i = t.year, n = t.month, a = t.week, r = t.day, l = t.hour, s = t.minute,
            c = t.second, u = t.millisecond;
          return (0, o.copyScale)(this, new e(i, n, a, r, l, s, c, u))
        }, e
      }(o["default"]);
      e["default"] = h
    }, 756: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = e.tickFormat = e.tickInterval = void 0;
      var a = n(i(757)), r = i(457), o = function (t, e, i, n, o, l) {
        void 0 === i && (i = 10);
        var s, c, u = i, d = n;
        return "number" == typeof u && (s = Math.abs(e - t) / u, (c = (0, a["default"])((function (t) {
          return t[2]
        })).right(o, s)) === o.length ? (d = (0, r.tickStep)(t / 31536e6, e / 31536e6, u), u = l.year) : c ? (d = (c = o[s / o[c - 1][2] < o[c][2] / s ? c - 1 : c])[1], u = c[0]) : (d = Math.max((0, r.tickStep)(t, e, u), 1), u = l.millisecond)), null == d ? u : u.every(d)
      };
      e.tickFormat = function (t, e, i) {
        return (t.second.floor(i) < i ? e.millisecond : t.minute.floor(i) < i ? e.second : t.hour.floor(i) < i ? e.minute : t.day.floor(i) < i ? e.hour : t.month.floor(i) < i ? t.week.floor(i) < i ? e.day : e.week : t.year.floor(i) < i ? e.month : e.year).format(i)
      }, e.tickInterval = o;
      var l = function (t, e, i, n, a, r) {
        var l, s, c = t, u = e, d = u < c;
        return d && (l = c, c = u, u = l), s = (s = o(c, u, i, n, a, r)) ? s.range(c, u + 1) : [], d ? s.reverse() : s
      };
      e["default"] = l
    }, 757: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      var n = function (t) {
        return function (e, i) {
          return n = t(e), a = i, r = NaN, n < a ? r = -1 : n > a ? r = 1 : n >= a && (r = 0), r;
          var n, a, r
        }
      }, a = function (t) {
        var e = t;
        return 1 === e.length && (e = n(e)), {
          left: function (t, i, n, a) {
            void 0 === t && (t = []), void 0 === n && (n = 0), void 0 === a && (a = t.length);
            for (var r = n, o = a; r < o;) {
              var l = Math.abs(Math.floor((r + o) / 2));
              e(t[l], i) < 0 ? r = l + 1 : o = l
            }
            return r
          }, right: function (t, i, n, a) {
            void 0 === t && (t = []), void 0 === n && (n = 0), void 0 === a && (a = t.length);
            for (var r = n, o = a; r < o;) {
              var l = Math.abs(Math.floor((r + o) / 2));
              e(t[l], i) > 0 ? o = l : r = l + 1
            }
            return r
          }
        }
      };
      e["default"] = a
    }, 758: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e.getFloorOfDate = function (t, e, i, r) {
        void 0 === e && (e = "day");
        void 0 === i && (i = 1);
        void 0 === r && (r = "");
        var o, l = new Date(t.valueOf()), s = i;
        switch (e) {
          case"millisecond":
            o = l[n + r + "Milliseconds"](), s = Math.min(s, 1e3), l[a + r + "Milliseconds"](Math.floor(o / s) * s);
            break;
          case"second":
            o = l[n + r + "Seconds"](), s = Math.min(s, 60), l[a + r + "Seconds"](Math.floor(o / s) * s, 0);
            break;
          case"minute":
            o = l[n + r + "Minutes"](), s = Math.min(s, 60), l[a + r + "Minutes"](Math.floor(o / s) * s, 0, 0);
            break;
          case"hour":
            o = l[n + r + "Hours"](), s = Math.min(s, 24), l[a + r + "Hours"](Math.floor(o / s) * s, 0, 0, 0);
            break;
          case"day":
            o = l[n + r + "Date"](), s = Math.min(s, 31), l[a + r + "Date"](Math.max(Math.floor(o / s) * s, 1)), l[a + r + "Hours"](0, 0, 0, 0);
            break;
          case"month":
            o = l[n + r + "Month"](), s = Math.min(s, 12), l[a + r + "Month"](Math.floor(o / s) * s, 1), l[a + r + "Hours"](0, 0, 0, 0);
            break;
          case"year":
            l[a + r + "Month"](0, 1), l[a + r + "Hours"](0, 0, 0, 0)
        }
        return l
      }, e.modifyDate = function (t, e, i, r, o) {
        void 0 === e && (e = "day");
        void 0 === i && (i = 1);
        void 0 === r && (r = !1);
        void 0 === o && (o = "");
        var l = new Date(t.valueOf());
        switch (e) {
          case"millisecond":
            l[a + o + "Milliseconds"](l[n + o + "Milliseconds"]() + i);
            break;
          case"second":
            l[a + o + "Seconds"](l[n + o + "Seconds"]() + i), r && l[a + o + "Milliseconds"](0);
            break;
          case"minute":
            l[a + o + "Minutes"](l[n + o + "Minutes"]() + i), r && l[a + o + "Seconds"](0, 0);
            break;
          case"hour":
            l[a + o + "Hours"](l[n + o + "Hours"]() + i), r && l[a + o + "Minutes"](0, 0, 0);
            break;
          case"day":
            l[a + o + "Date"](l[n + o + "Date"]() + i), r && l[a + o + "Hours"](0, 0, 0, 0);
            break;
          case"month":
            l[a + o + "Month"](l[n + o + "Month"]() + i), r && l[a + o + "Date"](0, 0, 0, 0, 0);
            break;
          case"year":
            l[a + o + "FullYear"](l[n + o + "FullYear"]() + i), r && l[a + o + "Month"](0, 0, 0, 0, 0, 0)
        }
        return l
      }, e.DAYS_IN_YEAR = e.DAYS_IN_MONTH = e.HOURS_IN_DAY = e.MONTHS_IN_YEAR = e.MINUTES_IN_HOUR = e.SECONDS_IN_MINUTE = e.MILLISECONDS_IN_SECOND = void 0;
      var n = "get", a = "set";
      e.DAYS_IN_YEAR = 365, e.DAYS_IN_MONTH = 30, e.HOURS_IN_DAY = 24, e.MINUTES_IN_HOUR = 60, e.SECONDS_IN_MINUTE = 60, e.MILLISECONDS_IN_SECOND = 1e3, e.MONTHS_IN_YEAR = 12
    }, 759: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e.getMinPlaceHolder = function (t) {
        void 0 === t && (t = "");
        var e, i, n, a;
        for (e = 0; e < d; e++) for (n = u[l[e]], a = n.length, i = 0; i < a; i++) if (t.match(n[i])) return l[e]
      }, e.getPlaceHolderIndex = function (t) {
        return s[t]
      }, e.getFilterdTimeFormat = function (t, e) {
        void 0 === t && (t = "");
        var i, n = c[e], a = t, r = function (t) {
          a = a.replace(t, "")
        };
        for (i = 0; i < n; i++) u[l[i]].forEach(r);
        return a.replace(/(\W+$)/, "").replace(/^,/, "")
      };
      var a = n(i(360)), r = "%[" + Object.keys(a["default"]).sort((function (t, e) {
          return "-" === t ? 1 : "-" === e ? -1 : 0
        })).join("") + "]?", o = function (t) {
          return new RegExp("" + r + t)
        }, l = ["millisecond", "second", "minute", "hour", "day", "month", "year"],
        s = {millisecond: 0, second: 1, minute: 2, hour: 3, day: 4, month: 5, year: 6},
        c = {millisecond: 0, second: 1, minute: 2, hour: 2, day: 4, month: 5, year: 6}, u = function (t) {
          var e = {}, i = "";
          for (i in t) t.hasOwnProperty(i) && (e[i] = t[i].map(o));
          return e
        }({
          millisecond: ["L", "Q"],
          second: ["S", "s"],
          minute: ["M"],
          hour: ["H", "I", "p"],
          day: ["d", "e", "j", "a", "A"],
          month: ["b", "B", "m"],
          year: ["y", "Y"]
        }), d = l.length
    }, 760: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e.UTC_TIME_SPAN = e.TIME_SPAN = void 0;
      var n = [new Date(2e3, 0, 1), new Date(2e3, 0, 2)], a = [Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)];
      e.UTC_TIME_SPAN = a, e.TIME_SPAN = n
    }, 761: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(394), o = i(440), l = n(i(754)), s = i(760), c = function (t) {
        function e() {
          var e;
          return (e = t.call(this, r.utcYear, r.utcMonth, r.utcWeek, r.utcDay, r.utcHour, r.utcMinute, r.utcSecond, r.utcMillisecond) || this).setTimeFormat(), e.setDomain([].concat(s.UTC_TIME_SPAN)), e
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.getType = function () {
          return "UTC"
        }, i.setTimeInterval = function (e) {
          this.timeIntervals = e, t.prototype.setTimeInterval.call(this, e)
        }, i.setTimeFormat = function (t) {
          void 0 === t && (t = {});
          var e = this._localeConverter, i = t, n = i.millisecond, a = i.second, r = i.minute, o = i.hour, l = i.day,
            s = i.month, c = i.year;
          this.formatters = {
            millisecond: {
              major: e.utcFormatter(n || "%I:%M:%S.%L %p"),
              minor: e.utcFormatter(n || "%L ms"),
              context: e.utcFormatter(n || "%b %d, %Y, %I:%M:%S.%L %p")
            },
            second: {
              major: e.utcFormatter(a || "%I:%M:%S %p"),
              minor: e.utcFormatter(a || "%S s"),
              context: e.utcFormatter(a || "%b %d, %Y, %I:%M:%S %p")
            },
            minute: {
              major: e.utcFormatter(r || "%I:%M %p"),
              minor: e.utcFormatter(r || "%M m"),
              context: e.utcFormatter(r || "%b %d, %Y, %I:%M %p")
            },
            hour: {
              major: e.utcFormatter(o || "%I %p"),
              minor: e.utcFormatter(o || "%I %p"),
              context: e.utcFormatter(o || "%b %d, %Y, %I %p")
            },
            day: {
              major: e.utcFormatter(l || "%b %d"),
              minor: e.utcFormatter(l || "%d"),
              context: e.utcFormatter(l || "%b %d, %Y")
            },
            month: {
              major: e.utcFormatter(s || "%b"),
              minor: e.utcFormatter(s || "%b"),
              context: e.utcFormatter(s || "%b %Y")
            },
            year: {
              major: e.utcFormatter(c || "%Y"),
              minor: e.utcFormatter(c || "%Y"),
              context: e.utcFormatter(c || "%Y")
            }
          }
        }, i.tickFormat = function (t) {
          var e = this;
          return t ? function (i) {
            return e._localeConverter.utcFormatter(t).format(i)
          } : function (t, i, n) {
            return e._timeFormat[i] ? e._localeConverter.utcFormatter(e._timeFormat[i]).format(t) : e.formatters[i][n].format(t)
          }
        }, i.copy = function () {
          return (0, o.copyScale)(this, new e)
        }, e
      }(l["default"]);
      e["default"] = c
    }, 762: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e.getDefaultBins = h, e.getCustomBins = function (t, e, i, a, r, o, l, s, c) {
        var g, p = d(t, e, i, a, r, o, l, s), m = [];
        g = function (t) {
          if (!t) return [];
          var e = t, i = {
            millisecond: n.MILLISECONDS_IN_SECOND,
            second: n.SECONDS_IN_MINUTE,
            minute: n.MINUTES_IN_HOUR,
            hour: n.HOURS_IN_DAY,
            day: n.DAYS_IN_MONTH,
            month: n.MONTHS_IN_YEAR
          };
          for (var a in i) i.hasOwnProperty(a) && (Array.isArray(t[a]) ? e[a] = u(i[a], t[a]) : e[a] = !1);
          Array.isArray(t.year) ? e.year = function (t) {
            for (var e = [], i = 0; i < t.length; i++) {
              var n = t[i];
              n && parseInt(n, 10) == n && n > 0 && e.push(Number(n))
            }
            return e.sort((function (t, e) {
              return t - e
            }))
          }(t.year) : e.year = !1;
          return e
        }(Object.assign({}, c));
        for (var v = 0; v < p.length; v++) {
          var y = p[v];
          g[y.binUnitName.name()] ? g[y.binUnitName.name()].length > 0 && (m = m.concat(f(y.binUnitName, g[y.binUnitName.name()], y.duration))) : m = m.concat(y.standardBinVal)
        }
        0 === m.length && (m = h(t, e, i, a, r, o, l, s));
        return m
      };
      var n = i(758), a = 1 * n.MILLISECONDS_IN_SECOND, r = a * n.SECONDS_IN_MINUTE, o = r * n.MINUTES_IN_HOUR,
        l = o * n.HOURS_IN_DAY, s = l * n.DAYS_IN_MONTH, c = l * n.DAYS_IN_YEAR;

      function u(t, e) {
        for (var i = [], n = 0; n < e.length; n++) {
          var a = e[n];
          a && parseInt(a, 10) == a && a > 0 && a <= t / 2 && t % a == 0 && i.push(Number(a))
        }
        return i.sort((function (t, e) {
          return t - e
        }))
      }

      function d(t, e, i, n, u, d, f, h) {
        return [{
          binUnitName: h,
          duration: 1,
          standardBinVal: [[h, 1, 1], [h, 2, 2], [h, 4, 4], [h, 5, 5], [h, 10, 10], [h, 20, 20], [h, 25, 25], [h, 40, 40], [h, 50, 50], [h, 100, 100], [h, 200, 200], [h, 250, 250], [h, 500, 500]]
        }, {
          binUnitName: f,
          duration: a,
          standardBinVal: [[f, 1, a, !0], [f, 2, 2 * a], [f, 3, 3 * a], [f, 4, 4 * a], [f, 5, 5 * a], [f, 6, 6 * a], [f, 10, 10 * a], [f, 12, 12 * a], [f, 15, 15 * a], [f, 20, 20 * a], [f, 30, 30 * a]]
        }, {
          binUnitName: d,
          duration: r,
          standardBinVal: [[d, 1, r, !0], [d, 2, 2 * r], [d, 3, 3 * r], [d, 4, 4 * r], [d, 5, 5 * r], [d, 6, 6 * r], [d, 10, 10 * r], [d, 12, 12 * r], [d, 15, 15 * r], [d, 20, 20 * r], [d, 30, 30 * r]]
        }, {
          binUnitName: u,
          duration: o,
          standardBinVal: [[u, 1, o, !0], [u, 2, 2 * o], [u, 3, 3 * o], [u, 4, 4 * o], [u, 6, 6 * o], [u, 8, 8 * o], [u, 12, 12 * o]]
        }, {
          binUnitName: n,
          duration: l,
          standardBinVal: [[n, 1, l, !0], [n, 2, 2 * l], [n, 3, 3 * l], [n, 5, 5 * l], [n, 6, 6 * l], [n, 10, 10 * l], [n, 15, 15 * l]]
        }, {
          binUnitName: e,
          duration: s,
          standardBinVal: [[e, 1, s], [e, 2, 2 * s], [e, 3, 3 * s], [e, 4, 4 * s], [e, 6, 6 * s]]
        }, {binUnitName: t, duration: c, standardBinVal: [[t, 1, c], [t, 2, 2 * c], [t, 3, 3 * c], [t, 5, 5 * c]]}]
      }

      function f(t, e, i) {
        for (var n = [], a = 0; a < e.length; a++) {
          var r = e[a];
          n.push([t, r, r * i])
        }
        return n
      }

      function h(t, e, i, n, a, r, o, l) {
        for (var s = d(t, e, 0, n, a, r, o, l), c = [], u = 0; u < s.length; u++) c = c.concat(s[u].standardBinVal);
        return c
      }
    }, 763: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(440), o = i(386), l = n(i(755)), s = i(756), c = function (t) {
        function e() {
          var e;
          return (e = t.call(this, o.timeYear, o.timeMonth, o.timeWeek, o.timeDay, o.timeHour, o.timeMinute, o.timeSecond, o.timeMillisecond) || this).formatters = {
            millisecond: e._localeConverter.formatter(".%L"),
            second: e._localeConverter.formatter(":%S"),
            minute: e._localeConverter.formatter("%I:%M"),
            hour: e._localeConverter.formatter("%I %p"),
            day: e._localeConverter.formatter("%a %d"),
            week: e._localeConverter.formatter("%b %d"),
            month: e._localeConverter.formatter("%B"),
            year: e._localeConverter.formatter("%Y")
          }, e.setDomain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), e
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.tickFormat = function (t) {
          var e = this;
          return t ? function (i) {
            return e._localeConverter.formatter(t).format(i)
          } : function (t) {
            return (0, s.tickFormat)(e.timeIntervals, e.formatters, t)
          }
        }, i.copy = function () {
          return (0, r.copyScale)(this, new e)
        }, e
      }(l["default"]);
      e["default"] = c
    }, 764: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(394), o = n(i(755)), l = i(440), s = i(756), c = function (t) {
        function e() {
          var e;
          return (e = t.call(this, r.utcYear, r.utcMonth, r.utcWeek, r.utcDay, r.utcHour, r.utcMinute, r.utcSecond, r.utcMillisecond) || this).formatters = {
            millisecond: e._localeConverter.utcFormatter(".%L"),
            second: e._localeConverter.utcFormatter(":%S"),
            minute: e._localeConverter.utcFormatter("%I:%M"),
            hour: e._localeConverter.utcFormatter("%I %p"),
            day: e._localeConverter.utcFormatter("%a %d"),
            week: e._localeConverter.utcFormatter("%b %d"),
            month: e._localeConverter.utcFormatter("%B"),
            year: e._localeConverter.utcFormatter("%Y")
          }, e.setDomain([[Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]]), e
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.tickFormat = function (t) {
          var e = this;
          return t ? function (i) {
            return e._localeConverter.utcFormatter(t).format(i)
          } : function (t) {
            return (0, s.tickFormat)(e.timeIntervals, e.formatters, t)
          }
        }, i.copy = function () {
          return (0, l.copyScale)(this, new e)
        }, e
      }(o["default"]);
      e["default"] = c
    }, 765: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(753)), r = n(i(439)), o = n(i(750)),
        l = {time: a["default"], linear: r["default"], log: o["default"]};
      e["default"] = function (t) {
        var e = t.config, i = e.focusAxesY, n = e.contextAxesY || [], a = function (t) {
          var e = t.type, i = t.base, n = l[e] || l.linear;
          return n === o["default"] && +i > 0 ? (new n).setBase(i) : new n
        };
        t.addToEnv("contextScalesY", n.map(a)), t.addToEnv("focusScalesY", i.map(a))
      }
    }, 766: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(767)), r = i(193), o = n(i(770)), l = n(i(771)), s = n(i(832)), c = n(i(444)), u = n(i(741)),
        d = i(445), f = n(i(449)), h = function (t) {
          return t.match(/^canvas/)
        }, g = function (t) {
          return t.remove()
        }, p = function (t, e) {
          var i = e.type, n = e.converter;
          if ("function" == typeof t.formatter) return function (e) {
            return t.formatter(e) + ""
          };
          var a = function (t) {
            if ("string" == typeof t) {
              var e = parseInt(t, 10);
              return Number.isNaN(e) ? null : e
            }
            return (0, u["default"])(t) ? t : null
          }(t.round);
          return function (e) {
            var r = "string" == typeof t.formatter ? t.formatter : function (t) {
              var e, i = t.value, n = t.type, a = (t.subType, t.defaultformat), r = void 0 === a || a, o = t.round;
              if (null != o && (e = o >= 0 ? o : Math.max(1, Math.floor(i).toString().length + o + 1)), !r) return null == o ? "$.12~r" : o >= 0 ? "$." + e + "f" : "$." + e + "~r";
              var l = Math.abs(i);
              if (0 !== l && l < 1e-4) switch (n) {
                case"axis":
                  return null == o ? "$e" : o < 0 ? "$." + e + "~e" : "$." + e + "e";
                default:
                  return null == o ? "$.2e" : o < 0 ? "$." + e + "~e" : "$." + e + "e"
              } else if (l >= 1e-4 && l < 1 || 0 === l) switch (n) {
                case"axis":
                  return null == o ? "$" : o < 0 ? "$." + e + "~" : "$." + e;
                default:
                  return null == o ? "$.2" : o < 0 ? "$." + e + "~" : "$." + e
              }
              switch (n) {
                case"axis":
                  return null == o ? "$~s" : o < 0 ? "$." + e + "~s" : "$." + e + "s";
                default:
                  return null == o ? "$.2~s" : o < 0 ? "$." + e + "~s" : "$." + e + "s"
              }
            }(Object.assign({}, t, {subType: i, value: e.value, type: e.type, round: a}));
            return "s" === new f["default"](r).type && (null == a || a >= 0) ? n.formatPrefix(r, e.value).format(e.value) : n.formatter(r).format(e.value)
          }
        }, m = function (t) {
          return !!t.visible
        }, v = function (t) {
          return "left" === t.align
        }, y = function (t) {
          return "right" === t.align
        }, b = function (t) {
          return "top" === t.align
        }, x = function (t) {
          return "bottom" === t.align
        };
      e["default"] = function (t) {
        var e = [], i = t.getFromEnv("baseTextStyle"), n = t.getFromEnv("dataSource"), u = {
            orientation: "bottom",
            align: "bottom",
            tickpadding: 2,
            visible: !0,
            overlap: !1,
            domainline: !1,
            outputtimeformat: {},
            style: {
              "label-major": Object.assign({fill: "#818181"}, i),
              "label-context": Object.assign({fill: "#818181"}, i)
            }
          }, f = {
            tickarguments: [4, "s"],
            ticksize: 5,
            tickpadding: 7,
            visible: !0,
            overlap: !1,
            domainline: !1,
            style: {"label-major": Object.assign({"font-size": "11px"}, i), "tick-mark-major": {stroke: "#efefef"}}
          }, k = (0, a["default"])(u), S = (0, a["default"])(f), _ = t.config, C = _.canvasAxisMap, w = _.focusAxesX,
          E = _.focusAxesY, D = t.getFromEnv("chart-attrib"),
          M = t.getFromEnv("getStyleDef")(D.style && D.style.canvas), T = _.focusPanels.map((function (t) {
            return (0, a["default"])(t, {
              x: t.x.map((function (t) {
                var e = w[t.index], i = (0, r.pluck)(w[t.index].format, {});
                return e.timeFormatterFn = "function" == typeof i.formatter ? function (t) {
                  return i.formatter.call(e.scale, t)
                } : function (t) {
                  return e.scale.getFormattedTime && e.scale.getFormattedTime(t, n.tooltip && n.tooltip.outputtimeformat)
                }, (0, a["default"])(k(t), (0, s["default"])(w, t.index))
              })), y: t.y.map((function (t) {
                var e, i = E[t.index], n = Object.assign({defaultformat: !0}, (0, r.pluck)(E[t.index].format, {}));
                return i.formatLabelPrefix = n.prefix || r.BLANKSTRING, i.formatLabelSuffix = n.suffix || r.BLANKSTRING, e = Object.assign({}, c["default"], {
                  prefix: i.formatLabelPrefix,
                  suffix: i.formatLabelSuffix
                }), i.scale.setLocale(e), i.formatterFn = p(n, {
                  converter: new d.NumberConverter(e),
                  type: i.type
                }), (0, a["default"])(S(t), (0, s["default"])(E, t.index))
              }))
            })
          }));
        T.forEach((function (i, n) {
          var s, c, u, d, f = i.x, h = i.y, g = i.plots, p = "canvas_" + n, k = {left: 0, right: 0};
          C[p] || (C[p] = {x: [], y: []}), f.filter(m).forEach((function (e, i) {
            var a = "axesX_" + n + "_" + i;
            e.align = e.align.toLowerCase(), ["bottom", "top"].includes(e.align) || (e.align = "bottom"), e.tickvisibilitylimit = {
              start: r.UNDEF,
              end: r.UNDEF
            }, (0, r.componentFactory)(t, o["default"], a, 1, [e]), C[p].x.includes(a) || C[p].x.push(a)
          })), h.filter(m).forEach((function (e, i) {
            var a, l = "axesY_" + n + "_" + i;
            ("left" === (a = e.orientation) || "right" === a) && (e.align = e.orientation), e.orientation = e.align, e.domainline = k[e.align] > 0, "log" === e.type && (e.tickarguments = [4, "~s"]), k[e.align]++, e.tickvisibilitylimit = {
              start: r.UNDEF,
              end: r.UNDEF
            }, (0, r.componentFactory)(t, o["default"], l, 1, [e]), C[p].y.includes(l) || C[p].y.push(l)
          })), e.push(p), (0, r.componentFactory)(t, l["default"], p, 1, [(s = {
            plotConfigs: g,
            tableMap: _.focusTableMap,
            xConfigs: f,
            yConfigs: h,
            enableGridLines: !0,
            gridBandSupported: "log" !== h[0].type,
            enableMouseTracking: 1,
            enableMarkers: 1,
            enableInteraction: 1,
            canvasStyle: M
          }, c = {
            leftBorder: !1,
            rightBorder: !1,
            topBorder: !1,
            bottomBorder: !1
          }, u = s.xConfigs, d = s.yConfigs, (u.find(v) || d.find(v)) && (c.leftBorder = !0), (u.find(y) || d.find(y)) && (c.rightBorder = !0), (u.find(b) || d.find(b)) && (c.topBorder = !0), (u.find(x) || d.find(x)) && (c.bottomBorder = !0), (0, a["default"])(s, c))])
        })), Object.keys(t.getChildren()).filter(h).filter((function (t) {
          return !e.includes(t)
        })).forEach((function (e) {
          t.getChildren(e).forEach(g)
        })), _.focusPanels = T
      }
    }, 770: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(192)), r = n(i(207)), o = i(193), l = n(i(438)), s = n(i(439)), c = i(208);

      function u(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.push.apply(i, n)
        }
        return i
      }

      var d = function (t) {
        return t
      }, f = function (t) {
        return null == t
      }, h = "top", g = "left", p = "major", m = "context", v = Math.floor, y = Math.max, b = function (t) {
        return "t" + t + ",0"
      }, x = function (t) {
        return "t0," + t
      }, k = function (t) {
        return function (e) {
          return +t.getRangeValue(e)
        }
      }, S = function (t) {
        return function (e) {
          return +t.getRangeValue(e) + t.getBandwidth() / 2
        }
      }, _ = function (t, e, i) {
        if (t && e) return t[e[i]]
      }, C = function (t, e) {
        return !(t.x > e.x + e.width || e.x > t.x + t.width) && !(t.y > e.y + e.height || e.y > t.y + t.height)
      }, w = function (t) {
        t.text = "", t.dim.width = 0, t.dim.height = 0
      }, E = function (t) {
        var e;
        switch (t) {
          case g:
            e = "end";
            break;
          case"right":
            e = "start";
            break;
          default:
            e = "middle"
        }
        return e
      }, D = function (t, e, i, n) {
        var a;
        return (a = "start" === e ? i.x : "end" === e ? i.x - t.width : i.x - t.width / 2) >= 0 && a + t.width <= n.width
      }, M = function (t, e) {
        return t >= e.start && t <= e.end
      }, T = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.getType = function () {
          return "axis"
        }, i.getName = function () {
          return "axis"
        }, i.__setDefaultConfig = function () {
          var e;
          t.prototype.__setDefaultConfig.call(this);
          var i = this.config;
          this.setScale(new s["default"]), this.setAlignment(g), this.setTickArguments(), this.setTickValues(), this.setReverse(!1), this.setTickSize(12), this.setTickPadding(1), this.setDomainLine(!0), this.setTicksDraw(!0), this.setLabelOffset(), this.setDayInMajor(!1), this.setStickyContextLabel(!0), this.setTickVisibilityLimit({
            start: -Infinity,
            end: Infinity
          }), i.alignDiff = 0, i.maxLabelSpace = 0, i.axisDimension = {}, i.defaultStyle = i.style = ((e = {})["tick-mark-minor"] = {
            stroke: "#d3d3d3",
            "stroke-width": "1px"
          }, e["tick-mark-major"] = {stroke: "#AAAAAA", "stroke-width": "1px"}, e["label-major"] = {
            fill: "#858585",
            "font-size": "12px",
            "font-weight": "normal",
            "font-style": "normal"
          }, e["label-minor"] = {
            fill: "#9A9A9A",
            "font-size": "11px",
            "font-weight": "normal",
            "font-style": "normal"
          }, e["label-context"] = {
            fill: "#858585",
            "font-size": "12px",
            "font-weight": "normal",
            "font-style": "normal"
          }, e._ticks = {
            minor: {stroke: "#d3d3d3"},
            major: {stroke: "#AAAAAA"},
            context: {}
          }, e._text = {
            major: {fill: "#858585", "font-size": "12px", "font-weight": "normal", "font-style": "normal"},
            minor: {fill: "#9A9A9A", "font-size": "11px", "font-weight": "normal", "font-style": "normal"},
            context: {fill: "#858585", "font-size": "12px", "font-weight": "normal", "font-style": "normal"}
          }, e.line = {fill: "#D6D6D6"}, e.title = {
            fill: "#5F5F5F",
            "font-size": "12px",
            "font-weight": "normal",
            "font-style": "normal"
          }, e), this.config.prevTicks || (this.config.prevTicks = [])
        }, i.configureAttributes = function (e) {
          t.prototype.configureAttributes.call(this, e);
          e.scale && this.setScale(e.scale), e.align && this.setAlignment(e.align, e.overlap), e.reverse && this.setReverse(e.reverse), e.tickarguments && this.setTickArguments.apply(this, e.tickarguments), e.title && this.setAxisName((0, o.parseUnsafeString)(e.title)), e.skipinfo && this.setSkipInfo(e.skipinfo), e.offset && this.setLabelOffset(e.offset), e.dayinmajor && this.setDayInMajor(e.dayinmajor), e.scalemode && this.setScaleMode(e.scalemode), e.minspace && this.setminSpace(e.minspace), "undefined" != typeof e.stickycontextlabel && this.setStickyContextLabel(e.stickycontextlabel), !f(e.ticksize) && this.setTickSize(e.ticksize), !f(e.tickpadding) && this.setTickPadding(e.tickpadding), this.setDomainLine(e.domainline), this.setTicksDraw(e.drawticks), !f(e.formatterFn) && this.setTickFormat(e), e.outputtimeformat && this.setTimeFormat(e.outputtimeformat), e.tickvisibilitylimit && this.setTickVisibilityLimit(e.tickvisibilitylimit), e.style && this.parseStyle(e.style), this.config.validateLabelDimensions = (0, o.pluckNumber)(e.validateLabelDimensions, 0)
        }, i.parseStyle = function (t) {
          var e;
          void 0 === t && (t = {});
          var i, n, a, r, o, l = this.config, s = l.defaultStyle, c = this.getFromEnv("getStyleDef"),
            u = this.getFromEnv("baseTextStyle"), d = c(t.label), f = c(t["tick-mark"]);
          i = Object.assign({}, s["tick-mark-major"], f, c(t["tick-mark-major"])), n = Object.assign({}, s["tick-mark-minor"], f, c(t["tick-mark-minor"])), a = Object.assign({}, s["label-major"], u, d, c(t["label-major"])), r = Object.assign({}, s["label-minor"], u, d, c(t["label-minor"])), o = Object.assign({}, s["label-context"], u, d, c(t["label-context"])), l.style = ((e = {})["tick-mark-major"] = i, e["tick-mark-minor"] = n, e["label-major"] = a, e["label-minor"] = r, e["label-context"] = o, e.title = Object.assign({}, s.title, u, c(t.title)), e.line = Object.assign({}, s.line, c(t.line)), e)
        }, i.placeAxis = function () {
          var t, e, i, n, a, r, s, c, u, v, b, x, k, S, C, w, E = this.config, D = E.isVertical,
            M = (0, o.pluckNumber)(E.minspace, -1), T = this.getScale(), F = this.getSkipInfo() || {},
            I = this.getTickPadding(), L = this.getFromEnv("smartLabel"), O = [], A = 0, P = 0, B = this.getAxisName(),
            N = [];
          for ((e = (this.getTickArguments() || []).slice(0)).push(F), e.push(E.dayInMajor), i = f(this.getTickValues()) ? T.ticks ? T.ticks.apply(T, e) : T.getDomain() : this.getTickValues(), n = f(this.getTickFormat()) ? T.tickFormat ? T.tickFormat.apply(T, this.getTickArguments()) : d : this.getTickFormat(), S = E.style["label-context"], L.setStyle(Object.assign({}, S)), C = S["font-size"] || S.fontSize, E.labelHeight = 1.2 * parseFloat(C, 10), B && (L.setStyle(Object.assign({}, E.style.title)), A += (E.axisNameDim = L.getOriSize(B, !1)).height), b = T._tickType || [], a = 0, r = i.length; a < r; a++) {
            var H;
            u = i[a], c = _(T._timeFormat, b, a), L.setStyle(Object.assign({}, E.style["label-" + (b[a] || p)])), v = E.isVertical ? n.formatFn({
              value: u,
              prefix: n.prefix,
              suffix: n.suffix,
              type: "axis"
            }, c) : n(u, c, b[a]), v = (0, o.parseUnsafeString)(v), P = y(v.length, P), x = L.getOriSize(v, !1), D && (x.width = E.vLabelWidth), s = this.getTickSize(b[a]), O.push(((H = {
              text: v,
              value: u,
              dim: x,
              tickLen: s
            })[E.x] = I + s, H)), b[a] !== m && N.push((D ? x.width : x.height) + s)
          }
          if (D && f(E.vLabelWidth)) for (E.vLabelWidth = 0, N = [], a = 0, r = i.length; a < r; a++) L.setStyle(Object.assign({}, E.style["label-" + (b[a] || p)])), +E.style["label-" + (b[a] || p)]["font-size"].toString().split("px")[0], (x = L.getOriSize(v, !1)).width = y(x.width + 10, M - A), O[a].dim = x, E.vLabelWidth = y(x.width, E.vLabelWidth), b[a] !== m && N.push((D ? x.width : x.height) + s);
          for (E.values = O, w = this.getLabelOverlapBuffer(), A += E.prevMaxLen = (0, o.pluckNumber)((0, l["default"])(N), E.prevMaxLen, 0), k = D ? 0 : E.labelHeight, E.maxLabelSpace = A + I + w + k, a = 0, r = i.length; a < r; a++) u = O[a], E.orientation === h || E.orientation === g ? u[E.x] = E.maxLabelSpace - I - w - u.tickLen : u[E.x] = I + u.tickLen;
          return E.axisDimension = ((t = {})[E.align] = E.maxLabelSpace, t), E.axisDimension
        }, i.getLabelOverlapBuffer = function () {
          var t, e, i, n, a, r = this.config, o = r.values, l = this.getScale()._tickType || [], s = 0;
          for (i = 0, n = o.length; i < n && (l[i] !== p && l[i] ? "minor" === l[i] && (e = o[i]) : t = o[i], !t || !e); i++) ;
          if (e) switch (a = {x: e.dim.width, y: e.dim.height}, r.k) {
            case 1:
              s = y(e[r.x] + a[r.x] - t[r.x], 0);
              break;
            case-1:
              s = y(t[r.x] - (e[r.x] + a[r.x]), 0)
          }
          return r.overlapBuffer = r.k * s / 3
        }, i.makeBBox = function (t, e) {
          var i;
          void 0 === e && (e = 5);
          var n = this.config, a = this.getScale(), r = {x: t.dim.width, y: t.dim.height};
          return (i = {})[n.x] = t[n.x] - e - r[n.x] / 2, i[n.xInverse] = a.getRangeValue(t.value) - e - r[n.xInverse] / 2, i.width = t.dim.width + e, i.height = t.dim.height + e, i
        }, i.setMinorSkipIndex = function () {
          var t, e, i, n, a, r, l, s, c, u, d = this.config, f = this.getScale(), h = d.values, g = f._tickType || [],
            m = [], b = h.length, x = 1, k = 1, S = !1, _ = !1;
          for (t = 0; t < b; t++) {
            if (g[t] === p || typeof g[t] === o.UNDEF) for (e = t + 1; e < b; e++) if (g[e] === p || typeof g[e] === o.UNDEF) {
              n = h[t], a = h[e], m = h.slice(t + 1, e), S = !0;
              break
            }
            if (S) break
          }
          if (m.length) if (b = m.length, u = t, i = v(b / 2), r = this.makeBBox(n), l = this.makeBBox(a), c = this.makeBBox(m[i]), C(c, r) || C(c, l)) d.minorSkip = b; else {
            for (t = i - 1; t >= 0; t--) if (s = this.makeBBox(m[t]), !C(s, c)) {
              x = i - t;
              break
            }
            for (t = i + 1; t < b + u; t++) if (s = this.makeBBox(m[t]), !C(s, c)) {
              k = t - i;
              break
            }
            for (b = m.length; !_;) {
              for (_ = !0, t = i + k; t < b; t += k) if (C(this.makeBBox(m[t]), this.makeBBox(m[t - k]))) {
                k++, _ = !1;
                break
              }
              for (t = i - x; t >= 0; t -= x) if (C(this.makeBBox(m[t]), this.makeBBox(m[t + x]))) {
                x++, _ = !1;
                break
              }
            }
            d.minorSkip = y(x, k)
          }
        }, i.cleanseMinorTicks = function () {
          var t, e, i, n, a, r, o, l, s, c, u, d = this.config, f = this.getScale()._tickType || [], h = [], g = [],
            m = d.values, b = -1,
            x = d.isVertical ? ((t = {})[d.xInverse] = "height", t[d.x] = "width", t) : ((e = {})[d.xInverse] = "width", e[d.x] = "height", e);
          for (i = 0, a = m.length; i < a; i++) f[i] !== p && f[i] || h.push(i);
          for (i = 0, a = h.length; i < a - 1; i++) if (r = m.slice(h[i] + 1, h[i + 1]), g.push(r), u = r.length, b = -1, r.length) {
            for (o = v(r.length / 2), l = this.makeBBox(m[h[i]], 0), s = this.makeBBox(m[h[i + 1]], 0), n = o; n >= 0; n -= 1) if (c = this.makeBBox(r[n], 1), d.isVertical) {
              if (l[d.xInverse] <= c[d.xInverse] + c[x[d.xInverse]]) {
                b = y(b, n);
                break
              }
            } else if (c[d.xInverse] <= l[d.xInverse] + l[x[d.xInverse]]) {
              b = y(b, n);
              break
            }
            for (n = o; n < r.length; n += 1) if (c = this.makeBBox(r[n], 1), d.isVertical) {
              if (s[d.xInverse] + s[x[d.xInverse]] >= c[d.xInverse]) {
                u = Math.min(u, n);
                break
              }
            } else if (c[d.xInverse] + c[x[d.xInverse]] >= s[d.xInverse]) {
              u = Math.min(u, n);
              break
            }
            for (n = 0; n < r.length; n++) (n <= b || n >= u || Math.abs(o - n) % d.minorSkip) && w(r[n])
          }
        }, i.cleanseMajorTicks = function () {
          var t, e, i, n, a = this.config, r = this.getScale(), o = a.values, l = [], s = [], c = [], u = [],
            d = r._tickType || [], f = 0, h = 1, g = 1, v = !1;
          if (n = o.length) {
            for (i = 0; i < n; i++) d[i] !== p && d[i] ? d[i] === m && (c.push(o[i]), u.push(i)) : (l.push(o[i]), s.push(i));
            if (u.length) for (i = 0, n = l.length; i < n; i++) +c[0].value == +l[i].value && (f = i); else f = 0;
            for (t = this.makeBBox(l[0]), i = f + 1, n = l.length; i < n; i++) if (!C(this.makeBBox(l[i]), t)) {
              g = i - f;
              break
            }
            for (i = f - 1; i >= 0; i--) if (!C(this.makeBBox(l[i]), t)) {
              h = f - i;
              break
            }
            for (; !v;) {
              for (v = !0, i = f + g; i < n; i += g) if (C(this.makeBBox(l[i]), this.makeBBox(l[i - g]))) {
                g++, v = !1;
                break
              }
              for (i = f - h; i >= 0; i -= g) if (C(this.makeBBox(l[i]), this.makeBBox(l[i + h]))) {
                h++, v = !1;
                break
              }
            }
            for (a.majorSkip = e = y(h, g), i = 0, n = l.length; i < n; i++) Math.abs(i - f) % e && w(l[i])
          }
        }, i.draw = function () {
          var t = this.config, e = this.getFromEnv("chart").config, i = this.getScale(), n = this.getLinkedParent(),
            a = i._tickType || [], r = (i.getBandwidth ? S : k)(i), l = i.getRange(), s = i.getDomain(),
            c = Number(l[0]), u = Number(l[l.length - 1]), d = this.getOrientation(), f = this.getFromEnv("smartLabel"),
            v = t.values, b = d === g || d === h ? t.maxLabelSpace + 2 : 0, x = t.isVertical, _ = t.orientation,
            C = t.xInverse, w = t.x, T = t.k, F = t.style;
          this.addGraphicalElement({
            el: "group",
            attr: {name: "meso-axis", transform: t.groupTranslation},
            container: {id: "meso", label: "group", isParent: !0},
            id: "meso-axis",
            component: this,
            label: "group"
          }), this.addGraphicalElement({
            el: "group",
            attr: {name: "axis-" + _},
            container: {id: "meso-axis", label: "group"},
            id: "axisGroup",
            component: this,
            label: "group"
          });
          var I, L, O, A, P, B, N, H, j, R, V, G, Y, U, z, X, W, q, Z = [], $ = 0, Q = this.getTickVisibilityLimit();
          if (this.setMinorSkipIndex(), this.cleanseMinorTicks(), this.cleanseMajorTicks(), (X = this.getDomainLine()) && this.addGraphicalElement({
            el: "path",
            attr: {path: X, stroke: "#d6d6d6", fill: "none", "stroke-width": 2},
            container: {id: "axisGroup", label: "group", isParent: !1},
            css: F.line,
            component: this,
            label: "path"
          }), (O = this.getAxisName()) && (z = parseFloat(t.style.title["font-size"] || t.style.title.fontSize, 10), f.setStyle(Object.assign({}, t.style.title)), A = f.getSmartText(O, Math.abs(c - u), 1.2 * z), x ? (P = d === g ? 0 + A.height / 2 : t.maxLabelSpace - A.height / 2, B = (c - u) / 2) : (P = (u - c) / 2, B = d === h ? 0 + A.height / 2 : t.maxLabelSpace - A.height / 2), this.addGraphicalElement({
            el: "text",
            attr: {
              text: A.text,
              x: P,
              y: B,
              opacity: F.title.opacity,
              "text-anchor": "middle",
              transform: x ? (0, o.getSuggestiveRotation)(90 * T, P, B) : "t0,0"
            },
            container: {id: "axisGroup", label: "group", isParent: !1},
            tooltext: e.showTooltip ? A.tooltext : o.UNDEF,
            css: F.title,
            component: this,
            id: "axis-name",
            label: "name"
          })), this.getTicksDraw()) {
            for ($ = a.length - a.indexOf(m), Y = t.values.find((function (t, e) {
              return t.value >= s[0] && t.value <= s[1] && a[e] === p
            })), N = 0, H = v.length; N < H; N++) a[N] === p && (v[N].value >= s[0] && v[N].value <= s[1] && (v[N][C] = r(v[N].value)), Z.push(N));
            for (V = Z[0], G = Z[1], R = 2, N = 0, H = t.values.length; N < H; N++) {
              var K;
              if (j = t.values[N], L = a[N] || p, (x || 0 !== j.text.length) && (L === m || !(j.value < s[0] || j.value > s[1])) && !(L === m && $ > 1 && (j.value < s[0] || j.value > s[1])) && (j[C] = L === m && 1 === $ ? this.getStickyContextLabel() || void 0 === Y ? y(r(j.value), j.dim.width / 2) : r(Y.value) : j[C] || r(j.value), N >= G && (V = G, G = Z[R], R++), ("minor" !== L || x || !(j[C] - v[V][C] < 5 || v[G][C] - j[C] < 5)) && (j[w] += t.alignDiff, I = j.value, this.addGraphicalElement({
                container: {
                  id: "axisGroup",
                  label: "group",
                  isParent: !1
                },
                attr: {name: "tick", transform: t.translate(j[C])},
                data: {value: I},
                el: "group",
                id: "tick-group-" + N,
                component: this,
                label: "group"
              }), L !== m && (W = x ? "M " + b + " 0 H " + (b + T * this.getTickSize(a[N])) : "M 0 " + b + " V " + (b + T * this.getTickSize(a[N])), this.addGraphicalElement({
                el: "path",
                attr: {path: W},
                container: {id: "tick-group-" + N, label: "group", isParent: !1},
                id: "tick-" + N,
                css: F["tick-mark-" + (L || p)],
                component: this,
                label: "path"
              })), U = F["label-" + (L || p)]["text-anchor"] || E(d), (K = {})[C] = j[C] + t[C + "Offset"], K[w] = j[w] + t[w + "Offset"] + ("minor" !== L ? t.overlapBuffer : 0), q = K, !t.validateLabelDimensions || D(j.dim, U, q, n.getDimension())))) {
                var J;
                if (!M(j.value, Q) && L !== m) continue;
                if (L === m && "undefined" == typeof Q.start) continue;
                this.addGraphicalElement({
                  el: "text",
                  attr: (J = {text: j.text + ""}, J[C] = 0 + t[C + "Offset"], J[w] = j[w] + t[w + "Offset"] + ("minor" !== L ? t.overlapBuffer : 0), J["text-anchor"] = U, J["vertical-align"] = _ === h ? "bottom" : "bottom" === _ ? "top" : "middle", J.opacity = F["label-" + (L || p)].opacity, J),
                  container: {id: "tick-group-" + N, label: "group", isParent: !1},
                  component: this,
                  id: "tick-label-" + N,
                  css: F["label-" + (L || p)],
                  label: "text"
                })
              }
            }
          }
        }, i.updateMaxLabelSpace = function (t) {
          var e = this.config, i = this.getAlignment();
          return e.alignDiff = t - e.maxLabelSpace, e.maxLabelSpace = e.axisDimension[i] = t, e.axisDimension
        }, i.setDayInMajor = function (t) {
          this.config.dayInMajor = t
        }, i.setSkipInfo = function (t) {
          void 0 === t && (t = {}), this.config.tickInfo = t
        }, i.getSkipInfo = function () {
          return this.config.tickInfo
        }, i.setStickyContextLabel = function (t) {
          void 0 === t && (t = !0), this.config.stickyContextLabel = t
        }, i.getStickyContextLabel = function () {
          return this.config.stickyContextLabel
        }, i.setminSpace = function (t) {
          this.config.minspace = t
        }, i.getminSpace = function () {
          return this.config.minspace
        }, i.setLabelOffset = function (t) {
          void 0 === t && (t = {});
          var e = this.config;
          e.xOffset = (0, o.pluckNumber)(t.x, 0), e.yOffset = (0, o.pluckNumber)(t.y, 0)
        }, i.getLabelOffset = function () {
          return {x: this.config.xOffset, y: this.config.yOffset}
        }, i.getAxisName = function () {
          return this.config.axisName
        }, i.setAxisName = function (t) {
          void 0 === t && (t = ""), this.config.axisName = t
        }, i.getAlignment = function () {
          return this.config.align
        }, i.setAlignment = function (t, e) {
          void 0 === e && (e = !1);
          var i, n, a = this.config;
          switch (t) {
            case g:
              i = e ? "right" : g;
              break;
            case"right":
              i = e ? g : "right";
              break;
            case h:
              i = e ? "bottom" : h;
              break;
            case"bottom":
              i = e ? h : "bottom"
          }
          a.align = t, a.orientation = i, a.isVertical = n = t === g || "right" === t, a.k = i === g || i === h ? -1 : 1, a.x = n ? "x" : "y", a.xInverse = n ? "y" : "x", a.translate = n ? x : b, a.translateInverse = n ? b : x
        }, i.getOrientation = function () {
          return this.config.orientation
        }, i.setTranslation = function (t, e) {
          void 0 === t && (t = 0), void 0 === e && (e = 0), this.config._translatedX = t, this.config._translatedY = e, this.config.groupTranslation = "t" + t + ", " + e
        }, i.getTranslation = function () {
          return {x: this.config._translatedX, y: this.config._translatedY}
        }, i.setDomainLine = function (t) {
          return void 0 === t && (t = !0), this.config.drawDomainLine = t, this
        }, i.getDomainLine = function () {
          var t, e, i = this.config, n = this.getScale().getRange(), a = i.isVertical, r = i.orientation,
            o = i.maxLabelSpace, l = +n[0], s = +n[1];
          return i.drawDomainLine && (t = r === g || r === h ? o + 2 : 0, e = a ? "M " + t + " " + l + " V " + s : "M " + l + " " + t + " H " + s), e
        }, i.setTicksDraw = function (t) {
          return void 0 === t && (t = !0), this.config.drawTicks = t, this
        }, i.getTicksDraw = function () {
          return this.config.drawTicks
        }, i.setScale = function (t) {
          this.config.scale = t
        }, i.getScale = function () {
          return this.config.scale
        }, i.setReverse = function (t) {
          this.config.isReverse = t
        }, i.getReverse = function () {
          return this.config.isReverse
        }, i.setTickArguments = function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
          return this.config.tickArguments = e, this
        }, i.getTickArguments = function () {
          return this.config.tickArguments.slice()
        }, i.setTickSize = function (t) {
          return this.config.tickSizeOuter = Number(t), this.config.tickSizeInner = this.config.tickSizeOuter * (2 / 3), this
        }, i.getTickSize = function (t) {
          void 0 === t && (t = p);
          var e = this.config;
          switch (t) {
            case m:
              return e.tickSizeOuter + e.labelHeight;
            case"minor":
              return e.tickSizeInner;
            case p:
              return e.tickSizeOuter
          }
        }, i.setTickPadding = function (t) {
          return this.config.tickPadding = Number(t), this
        }, i.getTickPadding = function () {
          return this.config.tickPadding
        }, i.setTickValues = function (t) {
          return this.config.tickValues = f(t) ? null : t.slice(), this
        }, i.getTickValues = function () {
          return this.config.tickValues && this.config.tickValues.slice()
        }, i.setTickFormat = function (t) {
          return this.config.tickFormat = {
            formatFn: t.formatterFn,
            prefix: t.formatLabelPrefix,
            suffix: t.formatLabelSuffix
          }, this
        }, i.getTickFormat = function () {
          return this.config.tickFormat
        }, i.getAxisEndLabelDisplaySpace = function () {
          var t, e, i, n, a = +this.getFromEnv("chartWidth"), r = +this.getFromEnv("chartHeight"),
            o = this.config.values, l = this.getReverse(), s = {};
          return this.config.isVertical ? (i = l ? o[o.length - 1] : o[0], n = l ? o[0] : o[o.length - 1], s.top = 0 - Math.min(0, i.y - i.dim.height), s.bottom = y(n.y + n.dim.height, r) - r) : (t = l ? o[o.length - 1] : o[0], e = l ? o[0] : o[o.length - 1], s.left = 0 - Math.min(0, t.x - t.dim.width), s.right = y(e.x + e.dim.width, a) - a), s
        }, i.getDimension = function () {
          return this.config.axisDimension
        }, i.setDimension = function (t) {
          return this.placeAxis(t)
        }, i.setScaleMode = function (t) {
          this.config.scale.setMode(t)
        }, i.getScaleMode = function () {
          return this.config.scale.getMode()
        }, i.setTimeFormat = function (t) {
          var e = this.config, i = e.scale;
          e.timeFormat = t, i.setTimeFormat && i.setTimeFormat(t)
        }, i.getTimeFormat = function () {
          return this.config.timeFormat
        }, i.setTickVisibilityLimit = function (t) {
          this.config.tickVisibilityLimit = function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = null != arguments[e] ? arguments[e] : {};
              e % 2 ? u(Object(i), !0).forEach((function (e) {
                (0, a["default"])(t, e, i[e])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
              }))
            }
            return t
          }({}, t)
        }, i.getTickVisibilityLimit = function () {
          return this.config.tickVisibilityLimit
        }, e
      }(c.SmartRenderer);
      e["default"] = T
    }, 771: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = n(i(212)), o = i(197), l = i(193), s = n(i(772)), c = n(i(776)), u = n(i(778)),
        d = n(i(780)), f = n(i(782)), h = n(i(784)), g = n(i(786)), p = n(i(788)), m = n(i(789)), v = n(i(790)),
        y = n(i(791)), b = n(i(827)), x = n(i(829)), k = n(i(830)), S = "M", _ = function (t, e) {
          var i = t - 2, n = t + 2;
          return ["\n    M " + (i + 4) + ", " + (e - 6) + " L " + (i - 4) + ", " + (e + 6) + "\n    M " + (n + 4) + ", " + (e - 6) + " L " + (n - 4) + ", " + (e + 6) + "\n    ", "\n    M " + (t + 4) + ", " + (e - 6) + " L " + (t - 4) + ", " + (e + 6) + "\n    "]
        }, C = function (t) {
          function e() {
            var e;
            return (e = t.call(this) || this).registerFactory("dataset", y["default"]), e.registerFactory("gridLine", d["default"]), e.registerFactory("gridBand", k["default"]), e.registerFactory("timeMarker", s["default"]), e.registerFactory("referenceLine", c["default"]), e.registerFactory("referenceZone", u["default"], ["mouseTracker"]), e.registerFactory("mouseTracker", f["default"]), e.registerFactory("tooltip", h["default"], ["mouseTracker"]), e.registerFactory("wheel", g["default"]), e.registerFactory("dbTap", p["default"]), e.registerFactory("swipe", m["default"]), e.registerFactory("pinchZoom", v["default"]), e.registerFactory("verticalCrossline", b["default"], ["dataset"]), e.registerFactory("horizontalCrossline", x["default"], ["dataset"]), e
          }

          (0, a["default"])(e, t);
          var i = e.prototype;
          return i.__setDefaultConfig = function () {
            t.prototype.__setDefaultConfig.call(this);
            var e = this.config;
            e.padding = {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, e.multiSeriesDatasetMap = {}, e.enableMouseTracking = 1, e.enableMarkers = 1, e.enableTimeMarkers = 1, e.enableReferenceLine = 1, e.enableReferenceZone = 1, e.enableInteraction = 0, e.includeLegend = 1, e.gridLineDirection = "horizontal", e.styleGridLines = 1
          }, i.getName = function () {
            return "canvas"
          }, i.highlightDataPoints = function (t, e, i) {
            var n, a = this.getChildren("dataset"), r = this.getChildren("mouseTracker")[0];
            a.filter((function (t) {
              return t.getFromEnv("yScale") === e
            })).forEach((function (e) {
              (n = e.getHighlightedIndices(i)).length && (t ? (r.deactivate(), e.setHoverInEffect(n)) : (r.activate(), e.setHoverOutEffect(n)))
            }))
          }, i.getType = function () {
            return "canvas"
          }, i.configureAttributes = function (t) {
            void 0 === t && (t = {});
            var e = this.config, i = e.borderConfig || (e.borderConfig = {});
            Object.assign(e, t);
            var n = e.canvasStyle;
            ["leftBorder", "topBorder", "rightBorder", "bottomBorder"].forEach((function (e) {
              i[e] = t[e] ? (0, l.pluckNumber)(n["stroke-width"], 2) : i[e] || 0
            })), e.canvasBorderColor = (0, o.convertColor)((0, l.pluck)(n.stroke, "D6D6D6"), (0, l.pluckNumber)(100 * n["stroke-opacity"], 100)), e.canvasBGColor = (0, o.convertColor)((0, l.pluck)(n.fill, "ffffff"), (0, l.pluckNumber)(100 * n["fill-opacity"], 100)), e.opacity = n.opacity, e.showGridBand = e.gridBandSupported && (0, l.pluckNumber)(e.yConfigs[0].showgridband, 0), e.gridBandStyle = e.yConfigs[0].style ? e.yConfigs[0].style["grid-band"] : {}
          }, i.setDimension = function (t) {
            void 0 === t && (t = {});
            var e = this.config, i = e.borderConfig, n = this.getFromEnv("chartConfig");
            e.canvasTop = t.top || 0, e.canvasLeft = t.left || 0, e.canvasWidth = t.width || n.origRenderWidth, e.canvasHeight = t.height || n.origRenderHeight, e.canvasBGTop = e.canvasTop + i.topBorder, e.canvasBGLeft = e.canvasLeft + i.leftBorder, e.canvasBGWidth = Math.max(0, e.canvasWidth - i.rightBorder - i.leftBorder), e.canvasBGHeight = Math.max(0, e.canvasHeight - i.bottomBorder)
          }, i.isWithinCanvas = function (t, e) {
            var i = t, n = e, a = this.config, r = a.canvasBGLeft, o = Math.floor(r + a.canvasBGWidth), l = a.canvasBGTop,
              s = a.padding, c = Math.floor(l + a.canvasBGHeight), u = this.getTranslation();
            return i = i - (u.x || 0) + (s.left || 0), n = n - (u.y || 0) + (s.top || 0), i > r && i < o && n > l && n < c
          }, i.draw = function () {
            this._createGroup(), this._drawCanvas(), !this.config.isContext && this._setTooltipBounding()
          }, i._setTooltipBounding = function () {
            var t = this.config, e = this.getTranslation(), i = this.getFromEnv("toolTipController"),
              n = t.canvasLeft + (e.x || 0), a = t.canvasTop + (e.y || 0);
            i._setRelativePosition({left: n, right: n + t.canvasWidth, top: a, bottom: a + t.canvasHeight, canvas: this})
          }, i._drawCanvas = function () {
            var t, e, i = this.config, n = i.borderConfig, a = i.canvasTop + n.topBorder / 2,
              r = i.canvasLeft + n.leftBorder / 2, o = i.canvasWidth - (n.rightBorder / 2 + n.leftBorder / 2),
              l = i.canvasHeight - (n.bottomBorder / 2 + n.topBorder / 2), s = {
                leftBorder: [S, r, a, "V", a + l],
                rightBorder: [S, r + o, a, "V", a + l],
                topBorder: [S, r, a, "H", r + o],
                bottomBorder: [S, r, a + l, "H", r + o]
              };
            for (t in this.addGraphicalElement({
              el: "rect",
              component: this,
              label: "canvas",
              container: {id: "tropo", label: "group", isParent: !1},
              attr: {
                y: i.canvasBGTop,
                x: i.canvasBGLeft,
                width: i.canvasBGWidth,
                height: i.canvasBGHeight,
                fill: i.canvasBGColor,
                "stroke-width": 0,
                stroke: "none",
                opacity: i.opacity
              },
              id: "background"
            }, !0), n) "bottomBorder" === t ? ((e = this.getBottomBorderPaths()).normalLine.length && this.addGraphicalElement({
              el: "path",
              component: this,
              label: "canvas",
              container: {id: "tropo", label: "group", isParent: !1},
              attr: {path: e.normalLine.join(""), stroke: i.canvasBorderColor, "stroke-width": n[t], opacity: i.opacity},
              id: t + "-normal"
            }, !0), e.dashedLine.length && this.addGraphicalElement({
              el: "path",
              component: this,
              label: "canvas",
              container: {id: "tropo", label: "group", isParent: !1},
              attr: {
                path: e.dashedLine.join(""),
                stroke: i.canvasBorderColor,
                "stroke-width": n[t],
                opacity: i.opacity,
                "stroke-dasharray": [3, 4]
              },
              id: t + "-dashed"
            }, !0), e.clippedLine.length && (this.addGraphicalElement({
              el: "path",
              component: this,
              label: "canvas",
              container: {id: "tropo", label: "group", isParent: !1},
              attr: {path: e.clippedLine.join(""), stroke: i.canvasBorderColor, "stroke-width": n[t], opacity: i.opacity},
              id: t + "-clipped"
            }, !0), this.addGraphicalElement({
              el: "path",
              component: this,
              label: "canvas",
              container: {id: "tropo", label: "group", isParent: !1},
              attr: {path: e.clippedLineMid.join(""), stroke: "#ffffff", "stroke-width": n[t], opacity: i.opacity},
              id: t + "-clipped"
            }, !0))) : this.addGraphicalElement({
              el: "path",
              component: this,
              label: "canvas",
              container: {id: "tropo", label: "group", isParent: !1},
              attr: {path: s[t], stroke: i.canvasBorderColor, "stroke-width": n[t], opacity: i.opacity},
              id: t
            }, !0)
          }, i.getBottomBorderPaths = function () {
            var t, e, i, n, a, r, o = this.getFromEnv("focusScalesX")[0], s = this.config, c = s.borderConfig, u = o.bins,
              d = o.getDomain(), f = o.getRange(), h = (0, l.pluckNumber)(s.xConfigs[0].showclippingcue, 1),
              g = s.canvasTop + c.topBorder / 2, p = s.canvasHeight - (c.bottomBorder / 2 + c.topBorder / 2),
              m = u.length, v = g + p, y = [], b = [], x = [], k = [];
            for (t = 0, m = u.length; t < m; t++) if (u[t].end > +d[0] && u[t].start < +d[1] && (a = "M " + o.getRangeValue(Math.max(+d[0], +u[t].start)) + ", " + v + " \n          L " + o.getRangeValue(Math.min(+u[t].end, +d[1])) + ", " + v, u[t].clipType && h ? 1 === u[t].clipType && (b.push(a), e = t) : (y.push(a), e = t)), 2 === u[t].clipType && h) {
              if (i === t - 1) {
                i = t;
                continue
              }
              if ((n = e ? (o.getRangeValue(u[e].start) + o.getRangeValue(u[t].end)) / 2 : o.getRangeValue(u[t].end)) < f[0] + 2 || n > f[1] - 2) continue;
              r = _(n, v), x.push(r[0]), k.push(r[1]), i = t
            }
            return {normalLine: y, dashedLine: b, clippedLine: x, clippedLineMid: k}
          }, i._createGroup = function () {
            var t = this.config, e = t.padding, i = t.canvasBGLeft - e.left, n = t.canvasBGTop - e.top,
              a = t.canvasBGWidth, r = t.canvasBGHeight,
              o = ["M" + i + "," + n, "L" + (i + a) + "," + n, "L" + (i + a) + "," + (n + r), "L" + i + "," + (n + r) + "Z"];
            this.addGraphicalElement({
              el: "group",
              container: {id: "tropo", label: "group", isParent: !0},
              component: this,
              label: "group",
              attr: {name: "canvas-tropo", transform: t.canvasTranslation},
              id: "tropo"
            }), this.addGraphicalElement({
              el: "group",
              container: {id: "strato", label: "group", isParent: !0},
              component: this,
              label: "strato",
              attr: {name: "canvas-strato", transform: t.translate},
              id: "strato"
            }), this.addGraphicalElement({
              el: "group",
              container: {id: "meso", label: "group", isParent: !0},
              component: this,
              label: "meso",
              attr: {name: "canvas-meso", transform: t.translate, "clip-path": o},
              id: "meso"
            }), this.addGraphicalElement({
              el: "group",
              container: {id: "thermo", label: "group", isParent: !0},
              component: this,
              label: "thermo",
              attr: {name: "canvas-thermo", transform: t.translate},
              id: "thermo"
            }), this.addGraphicalElement({
              el: "group",
              container: {id: "exo", label: "group", isParent: !0},
              component: this,
              label: "exo",
              attr: {name: "canvas-exo", transform: t.translate},
              id: "exo"
            }), this.addToEnv("dsGroupclipPath", o)
          }, i.setTranslation = function (t, e) {
            var i = this.config, n = i.borderConfig, a = i.padding;
            i._translateX = t + n.leftBorder, i._translateY = e + n.topBorder, i.canvasTranslation = "t" + i._translateX + "," + i._translateY, i._translateX += a.left, i._translateY += a.top, i.translate = "t" + i._translateX + "," + i._translateY
          }, i.getCanvasBorder = function () {
            return this.config.borderConfig
          }, i.setPadding = function (t) {
            void 0 === t && (t = {}), Object.assign(this.config.padding, t)
          }, e
        }(r["default"]);
      e["default"] = C
    }, 772: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(773)), r = n(i(774)), o = n(i(775));
      e["default"] = function (t) {
        var e = t.config.xConfigs;
        t.config.enableTimeMarkers && e.forEach((function (e) {
          var i, n, l, s = e.timemarker || [], c = e.plot[0].value,
            u = t.getFromEnv("chartConfig").dataTable.getSchema().find((function (t) {
              return t.name === c
            })).format, d = [], f = [], h = [], g = t.getFromEnv("chart"), p = t.config.xConfigs[0].scale;
          s.forEach((function (t) {
            t.end ? "full" === t.type ? f.push(t) : d.push(t) : h.push(t)
          })), i = t.attachChild(a["default"], "timeSpanMinMarker"), n = t.attachChild(r["default"], "timeSpanFullMarker"), i.configure({
            timeMarker: d,
            defaultFormat: u,
            xScale: p
          }), i.addExtEventListener("timeSpanMinMarkerHovered", (function (t) {
            t.data.senderTimeMarker !== i && i.setData({hoveredIndex: t.data.hoveredIndex, hoveredFromOutside: !0}, !0)
          }), g), n.configure({
            timeMarker: f,
            defaultFormat: u,
            xScale: p
          }), n.addExtEventListener("timeSpanFullMarkerHovered", (function (t) {
            t.data.senderTimeMarker !== n && n.setData({hoveredIndex: t.data.hoveredIndex, hoveredFromOutside: !0}, !0)
          }), g), (l = t.attachChild(o["default"], "timeInstanceMarker")).configure({
            timeMarker: h,
            defaultFormat: u,
            xScale: p
          }), l.addExtEventListener("timeInstanceMarkerHovered", (function (t) {
            t.data.senderTimeMarker !== l && l.setData({
              hoveredMarkerIndex: t.data.hoveredMarkerIndex,
              hoveredDomainIndex: t.data.hoveredDomainIndex,
              hoveredFromOutside: !0
            }, !0)
          }), g)
        }))
      }
    }, 773: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = i(394), l = i(386), s = i(193), c = n(i(358)), u = i(749);

      function d(t) {
        switch (t) {
          case"year":
          case"quarter":
          case"month":
          case"week":
          case"day":
          case"hour":
          case"minute":
          case"second":
          case"millisecond":
            return !0;
          default:
            return !1
        }
      }

      function f(t, e) {
        switch (t) {
          case"year":
            return e ? o.utcYear : l.timeYear;
          case"quarter":
          case"month":
            return e ? o.utcMonth : l.timeMonth;
          case"week":
            return e ? o.utcWeek : l.timeWeek;
          case"day":
            return e ? o.utcDay : l.timeDay;
          case"hour":
            return e ? o.utcHour : l.timeHour;
          case"minute":
            return e ? o.utcMinute : l.timeMinute;
          case"second":
            return e ? o.utcSecond : l.timeSecond;
          case"millisecond":
            return e ? o.utcMillisecond : l.timeMillisecond
        }
      }

      function h(t, e, i, n) {
        var a, r, o, l = !1, s = n.markerDim;
        for (r = 0, o = s.length; r < o; r++) if (e >= s[r].x && e <= s[r].x + s[r].width && i >= s[r].y && i <= s[r].y + s[r].height) {
          l = !0, t.config.previouslyHoveredIndex = n.index, a = s[r];
          break
        }
        return {
          pointIndex: n.index,
          hovered: l,
          pointObj: {hoveredMarkerDim: a, index: l && r, type: n.type},
          previouslyHoveredIndex: t.config.previouslyHoveredIndex,
          component: t
        }
      }

      function g(t, e, i, n) {
        return t >= i && t <= n || e <= n && e >= i || i >= t && n <= e
      }

      var p = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this);
          var e = this.config;
          e.defaultStyle = {
            text: {
              fill: "#808080",
              opacity: 1,
              "font-size": "10px",
              "font-weight": "normal",
              "font-style": "normal",
              "text-anchor": "middle",
              "fill-opacity": 1,
              "stroke-opacity": 1
            },
            marker: {
              fill: "#62b58f",
              opacity: .2,
              "fill-opacity": 1,
              "stroke-opacity": 1,
              "border-thickness": 0,
              "border-padding": 1,
              "border-radius": 0,
              "border-dash": "none",
              "stroke-width": 1,
              "stroke-dasharray": "none",
              stroke: "none"
            }
          }, this.config.lastHoveredMarkerIndex = void 0, this.config.lastHoveredDomainIndex = void 0, e.hoveredIndex = void 0, e.previouslyHoveredIndex = void 0, e.hoveredOpacity = .5, e.valueArr = [], e.textArr = [], e.styleArr = [], e.domainArr = [], e.markerDetails = [], e.type = "minimal"
        }, i.getHoveredMarker = function (t, e) {
          var i, n, a = t, r = e, o = this.config, l = this.getLinkedParent().getTranslation(), s = o.markerDetails;
          for (a -= l.x, r -= l.y, n = s.length - 1; n >= 0 && !(i = h(this, a, r, s[n])).hovered; n--) ;
          return i
        }, i.setHoverInEffect = function (t, e) {
          var i = this.getFromEnv("chart");
          this.setData({
            hoveredIndex: t,
            hoveredDomainIndex: e
          }, !0), i.fireEvent("timeSpanMinMarkerHovered", {
            senderTimeMarker: this,
            hoveredIndex: t,
            hoveredFromOutside: !0
          })
        }, i.setHoverOutEffect = function () {
          var t = this.config, e = this.getFromEnv("chart");
          this.setData({
            hoveredIndex: void 0,
            lastHoveredMarkerIndex: t.hoveredIndex,
            lastHoveredDomainIndex: t.hoveredDomainIndex
          }, !0), e.fireEvent("timeSpanMinMarkerHovered", {
            senderTimeMarker: this,
            hoveredIndex: void 0,
            hoveredFromOutside: !0
          })
        }, i.fireMarkerEvents = function (t, e, i) {
          var n, a, r, o, l, s, u, d = this.config, f = d.valueArr, h = d.textArr, g = d.domainArr,
            p = this.getFromEnv("isUTC"), m = this.getFromEnv("chart");
          switch (t) {
            case"fc-mouseover":
              u = "timeMarkerRollOver", n = e, a = i;
              break;
            case"fc-mouseout":
              n = d.lastHoveredMarkerIndex, a = d.lastHoveredDomainIndex, void 0 !== n && void 0 !== a && (u = "timeMarkerRollOut");
              break;
            case"fc-click":
              u = "timeMarkerClick", n = e, a = i
          }
          u && (s = f[n].timeFormat, r = p ? c["default"].utcFormatter(s) : c["default"].formatter(s), o = +g[n][a].start, l = +g[n][a].end, m.fireChartInstanceEvent(u, {
            start: o,
            startText: r.format(o),
            end: l,
            endText: r.format(l),
            formatter: s,
            type: f[n].type,
            label: h[n]
          }))
        }, i.getToolTextConfiguration = function (t, e) {
          var i, n = this.getFromEnv("tooltipStyle"), a = n.header, r = n.body, o = 40, l = 26,
            s = this.getFromEnv("smartLabel");
          return s.setStyle({
            "font-size": a["font-size"],
            "font-family": a["font-family"],
            "font-weight": a["font-weight"]
          }), o += (i = s.getOriSize(t[0])).width, l += i.height, t[1] ? (s.setStyle({
            "font-size": r["font-size"],
            "font-family": r["font-family"],
            "font-weight": r["font-weight"]
          }), l += (i = s.getOriSize(t[1])).height, o = Math.max(o, i.width), {
            header: "<div style='margin: 5px;'>" + t[0] + "</div>",
            body: "<div style='margin: 5px;'>" + t[1] + "</div>",
            dimensions: {width: o, height: "full" !== e ? l : 0}
          }) : {
            header: "<div style='padding: 5px;'>" + t[0] + "</div>",
            body: "",
            dimensions: {width: o, height: "full" !== e ? l : 0}
          }
        }, i.getMarkerAndLabelConfiguration = function (t, e) {
          var i, n, a, r, o, l, s, c, u, d, f = this.config, h = this.getLinkedParent().config, p = h.padding,
            m = p.left, v = p.right, y = p.top, b = p.bottom, x = this.config.xScale, k = x.getDomain(),
            S = f.valueArr[t], _ = S.repeat;
          return i = x.getRangeValue(S.start), d = x.getRangeValue(S.end), a = "full" === (r = S.type) ? h.canvasTop + 2 + y : h.canvasTop + h.canvasHeight - 2 - y + b, o = "full" === r ? h.canvasTop - h.padding.top : h.canvasTop + h.canvasHeight - (e + 4) - y + b, l = "full" === r ? h.canvasHeight : e + 4, f.markerDetails[t].markerDim = [], f.domainArr[t] = [], f.markerDetails[t].index = t, !_ && g(+S.start, +S.end, +k[0], +k[1]) ? (f.domainArr[t].push({
            start: S.start,
            end: S.end
          }), f.markerDetails[t].markerDim.push({
            x: i - m + v,
            y: o,
            width: d - i,
            height: l
          }), n = i - m + v, c = S.start, u = S.end) : _ && (f.domainArr[t] = s = this.getAllValidDomains(S.start, S.end, S.repeat), s.length && (n = x.getRangeValue(s[0].start) - m + v, c = s[0].start, u = s[0].end, s.forEach((function (e) {
            i = x.getRangeValue(e.start), d = x.getRangeValue(e.end), f.markerDetails[t].markerDim.push({
              x: i - m + v,
              y: o,
              width: d - i,
              height: l
            }), _.multiplier < 0 && (n = i - m + v, c = e.start, u = e.end)
          })))), f.markerDetails[t].type = r, {
            labelConfiguration: {
              x: n,
              y: a,
              width: d - i - 4,
              startDomain: c,
              endDomain: u
            }
          }
        }, i.getAllValidDomains = function (t, e, i) {
          var n = this.config.xScale.getDomain(), a = t, r = e, o = [], l = Number(r) - Number(a);
          if (+a < +n[0] && i.multiplier > 0) for (; !g(+a, +r, +n[0], +n[1]) && +a <= +n[1];) a = i.interval.offset(a, i.multiplier), r = new Date(Number(a) + l);
          for (; g(+a, +r, +n[0], +n[1]);) o.push({
            start: a,
            end: r
          }), a = i.interval.offset(a, i.multiplier), r = new Date(Number(a) + l);
          return o
        }, i.configureAttributes = function (e) {
          void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
          var i, n, a, r, o, l, h, g, p, m, v, y, b = this.config, x = [], k = [], S = this.getFromEnv("isUTC"),
            _ = this.getFromEnv("focusScalesX")[0].applicableClippings, C = _.repeatClips, w = _.singleClips, E = [],
            D = this.getFromEnv("getStyleDef"), M = this.getFromEnv("textStyle"), T = this.getFromEnv("baseTextStyle"),
            F = e.timeMarker || [], I = Object.assign({}, M, b.defaultStyle.text, T);
          for (F.sort((function (t, e) {
            return +new Date(t.start) - +new Date(e.start)
          })), h = 0, g = F.length; h < g; h++) if ((p = F[h]).start && p.start !== s.BLANKSTRING && (r = (0, s.pluck)(p.timeformat, e.defaultFormat), a = (n = S ? c["default"].utcParser(r) : c["default"].parser(r)).parse(p.start), o = n.parse(p.end), a && o)) {
            if (+a > +o) {
              var L = [o, a];
              a = L[0], o = L[1]
            }
            (a = (0, u.getUnclippedValue)(+a, C, w, {clampDirection: "up"})) > (o = (0, u.getUnclippedValue)(+o, C, w, {clampDirection: "down"})) || (i = {
              start: new Date(a),
              end: new Date(o),
              startString: p.start,
              endString: p.end,
              timeFormat: r,
              type: p.type || b.type
            }, p.repeat && p.repeat.unit && 0 !== Math.floor(+p.repeat.multiplier) && d(l = p.repeat.unit.toLowerCase()) && (i.repeat = {
              interval: f(l, S),
              multiplier: ("quarter" === l ? 3 : 1) * (0, s.pluckNumber)(p.repeat.multiplier, 1)
            }), y = p.style || {}, v = Object.assign({}, I, {"vertical-align": "full" === i.type ? "top" : "bottom"}, D(y.text)), m = Object.assign({}, b.defaultStyle.marker, D(y.marker)), E.push(i), x.push({
              text: v,
              "text:hover": Object.assign({}, v, D(y["text:hover"])),
              marker: m,
              "marker:hover": Object.assign({}, m, D(y["marker:hover"]))
            }), k.push((0, s.pluck)(p.label, "")))
          }
          e.xScale && (b.xScale = e.xScale), b.hoveredIndex = e.hoveredIndex, b.hoveredDomainIndex = e.hoveredDomainIndex, b.lastHoveredMarkerIndex = e.lastHoveredMarkerIndex, b.lastHoveredDomainIndex = e.lastHoveredDomainIndex, e.timeMarker && (b.valueArr = E, b.styleArr = x, b.textArr = k)
        }, i.getAllLabelsProps = function (t, e) {
          var i, n, a, r, o, l, d, f, h, g = this.config, p = this.getFromEnv("smartLabel"), m = g.valueArr,
            v = g.domainArr[t], y = g.markerDetails[t], b = this.getFromEnv("focusScalesX")[0].applicableClippings,
            x = b.repeatClips, k = b.singleClips, S = (0, u.getUnclippedValue)(+e.startDomain, x, k),
            _ = (0, u.getUnclippedValue)(+e.endDomain, x, k), C = this.getFromEnv("isUTC"), w = e.x, E = e.y,
            D = e.width, M = p._lineHeight, T = [], F = g.textArr[t];
          if (_ <= S) return [];
          for (F && (r = p.getSmartText((0, s.parseUnsafeString)(F), D, M), T.push({
            dim: {x: w + D / 2 + 2, y: E - 2},
            text: (0, s.parseUnsafeString)(r.text)
          })), n = m[t].timeFormat, f = 0, h = v.length; f < h; f++) d = [], i = v[f], a = y.markerDim[f], o = (l = C ? c["default"].utcFormatter(n) : c["default"].formatter(n)).format(i.start) + " - " + l.format(i.end), d.push(o), F && d.push(r.oriText), a.toolTextArr = d;
          return T
        }, i.createGroup = function () {
          var t = this.getLinkedParent().config, e = t.padding, i = t.canvasBGLeft - e.left, n = t.canvasBGTop - e.top,
            a = t.canvasBGWidth, r = t.canvasBGHeight,
            o = ["M" + i + "," + n, "L" + (i + a) + "," + n, "L" + (i + a) + "," + (n + r), "L" + i + "," + (n + r) + "Z"];
          this.addGraphicalElement({
            el: "group",
            container: {id: "thermo", label: "group", isParent: !0},
            component: this,
            label: "timeMarker",
            attr: {name: "time-marker-min-group", "clip-path": o},
            id: "timeMarker"
          })
        }, i.drawAllLabels = function (t, e) {
          var i = this;
          t.forEach((function (t, n) {
            i.addGraphicalElement({
              el: "text",
              attr: {text: t.text, x: t.dim.x, y: t.dim.y, opacity: e.opacity},
              css: e,
              container: {label: "timeMarker"},
              id: "time-marker-label-" + n,
              component: i,
              label: "label"
            }, !0)
          }))
        }, i.draw = function () {
          var t, e, i, n, a, r, o, l, c, u, d = this.config, f = this.getFromEnv("smartLabel"), h = d.valueArr,
            g = d.styleArr;
          for (this.createGroup(), d.markerDetails = [], a = 0, u = h.length; a < u; a++) if (o = a === d.hoveredIndex, d.markerDetails[a] = {}, l = o ? g[a]["text:hover"] : g[a].text, c = o ? g[a]["marker:hover"] : g[a].marker, f.setStyle({
            "font-size": l["font-size"] || g[a].text["font-size"],
            "font-family": l["font-family"] || g[a].text["font-family"],
            "font-weight": l["font-weight"] || g[a].text["font-weight"]
          }), f.getOriSize((0, s.parseUnsafeString)(d.textArr[a])), e = this.getMarkerAndLabelConfiguration(a, d.textArr[a] ? f._lineHeight : 13), i = d.markerDetails[a].markerDim, n = e.labelConfiguration, i.length) {
            for (t = this.getAllLabelsProps(a, n), r = 0; r < i.length; r++) this.addGraphicalElement({
              el: "rect",
              attr: {x: i[r].x, y: i[r].y, width: i[r].width, height: i[r].height, opacity: c.opacity},
              container: {label: "timeMarker"},
              css: c,
              id: "time-span-marker-" + a + r,
              component: this,
              label: "line"
            });
            this.drawAllLabels(t, l)
          }
        }, i.getType = function () {
          return "timeMarker"
        }, i.getName = function () {
          return "timeSpanMinMarker"
        }, e
      }(r.SmartRenderer);
      e["default"] = p
    }, 774: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.setHoverInEffect = function (t, e) {
          var i = this.getFromEnv("chart");
          this.setData({
            hoveredIndex: t,
            hoveredDomainIndex: e
          }, !0), i.fireEvent("timeSpanFullMarkerHovered", {
            senderTimeMarker: this,
            hoveredIndex: t,
            hoveredFromOutside: !0
          })
        }, i.setHoverOutEffect = function () {
          var t = this.config, e = this.getFromEnv("chart");
          this.setData({
            hoveredIndex: void 0,
            lastHoveredMarkerIndex: t.hoveredIndex,
            lastHoveredDomainIndex: t.hoveredDomainIndex
          }, !0), e.fireEvent("timeSpanFullMarkerHovered", {
            senderTimeMarker: this,
            hoveredIndex: void 0,
            hoveredFromOutside: !0
          })
        }, i.createGroup = function () {
          var t = this.getLinkedParent().config, e = t.padding, i = t.canvasBGLeft - e.left, n = t.canvasBGTop - e.top,
            a = t.canvasBGWidth, r = t.canvasBGHeight,
            o = ["M" + i + "," + n, "L" + (i + a) + "," + n, "L" + (i + a) + "," + (n + r), "L" + i + "," + (n + r) + "Z"];
          this.addGraphicalElement({
            el: "group",
            container: {id: "strato", label: "group", isParent: !0},
            component: this,
            label: "timeMarker",
            attr: {name: "time-marker-full-group", "clip-path": o},
            id: "timeMarker"
          })
        }, i.getName = function () {
          return "timeSpanFullMarker"
        }, e
      }(n(i(773))["default"]);
      e["default"] = r
    }, 775: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = i(394), l = i(386), s = i(193), c = n(i(358)), u = i(749);

      function d(t) {
        switch (t) {
          case"year":
          case"quarter":
          case"month":
          case"week":
          case"day":
          case"hour":
          case"minute":
          case"second":
          case"millisecond":
            return !0;
          default:
            return !1
        }
      }

      function f(t, e) {
        switch (t) {
          case"year":
            return e ? o.utcYear : l.timeYear;
          case"quarter":
          case"month":
            return e ? o.utcMonth : l.timeMonth;
          case"week":
            return e ? o.utcWeek : l.timeWeek;
          case"day":
            return e ? o.utcDay : l.timeDay;
          case"hour":
            return e ? o.utcHour : l.timeHour;
          case"minute":
            return e ? o.utcMinute : l.timeMinute;
          case"second":
            return e ? o.utcSecond : l.timeSecond;
          case"millisecond":
            return e ? o.utcMillisecond : l.timeMillisecond
        }
      }

      function h(t, e, i, n) {
        var a, r, o, l = !1, s = n.markerDim;
        for (r = 0, o = s.length; r < o; r++) if (e >= s[r].x && e <= s[r].x + s[r].width && i >= s[r].y && i <= s[r].y + s[r].height) {
          l = !0, t.config.previouslyHoveredIndex = n.index, a = s[r];
          break
        }
        return {
          pointIndex: n.index,
          hovered: l,
          pointObj: {hoveredMarkerDim: a, index: l && r},
          previouslyHoveredIndex: t.config.previouslyHoveredIndex,
          component: t
        }
      }

      var g = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this), this.config.defaultStyle = {
            text: {
              fill: "#808080",
              "font-size": "11px",
              "font-weight": "normal",
              "font-style": "normal",
              "vertical-align": "middle",
              "text-anchor": "middle",
              "fill-opacity": "1",
              "stroke-opacity": "1",
              opacity: 1
            },
            marker: {
              fill: "#f8b8b7",
              opacity: 1,
              stroke: "#666666",
              r: 2,
              "stroke-width": "1",
              "stroke-dasharray": "none",
              "fill-opacity": "1",
              "stroke-opacity": "1"
            }
          }, this.config.hoveredMarkerIndex = void 0, this.config.hoveredDomainIndex = void 0, this.config.lastHoveredMarkerIndex = void 0, this.config.lastHoveredDomainIndex = void 0, this.config.previouslyHoveredIndex = void 0, this.config.hoveredFromOutside = !1, this.config.hoveredLabelFill = "#ffffff", this.config.hoveredMarkerRadius = "1.5", this.config.valueArr = [], this.config.textArr = [], this.config.styleArr = [], this.config.domainArr = [], this.config.repeatationArr = [], this.config.markerDetails = [], this.config.type = "minimal"
        }, i.getHoveredMarker = function (t, e) {
          var i, n, a = t, r = e, o = this.config, l = this.getLinkedParent().getTranslation(), s = o.markerDetails;
          for (a -= l.x, r -= l.y, n = s.length - 1; n >= 0 && !(i = h(this, a, r, s[n])).hovered; n--) ;
          return i
        }, i.setHoverInEffect = function (t, e, i) {
          var n = this.getFromEnv("chart");
          this.setData({
            hoveredMarkerIndex: t,
            hoveredDomainIndex: e,
            hoveredFromOutside: i
          }, !0), n.fireEvent("timeInstanceMarkerHovered", {
            senderTimeMarker: this,
            hoveredMarkerIndex: t,
            hoveredDomainIndex: e,
            hoveredFromOutside: !0
          })
        }, i.setHoverOutEffect = function () {
          var t = this.config, e = this.getFromEnv("chart");
          this.setData({
            lastHoveredMarkerIndex: t.hoveredMarkerIndex,
            lastHoveredDomainIndex: t.hoveredDomainIndex,
            hoveredMarkerIndex: void 0,
            hoveredDomainIndex: void 0
          }, !0), e.fireEvent("timeInstanceMarkerHovered", {
            senderTimeMarker: this,
            hoveredMarkerIndex: void 0,
            hoveredDomainIndex: void 0,
            hoveredFromOutside: !0
          })
        }, i.fireMarkerEvents = function (t, e, i) {
          var n, a, r, o, l, u, d = this.config, f = d.valueArr, h = d.domainArr, g = d.repeatationArr,
            p = this.getFromEnv("chart"), m = this.getFromEnv("isUTC");
          switch (t) {
            case"fc-mouseover":
              u = "timeMarkerRollOver", n = e, a = i;
              break;
            case"fc-mouseout":
              n = d.lastHoveredMarkerIndex, a = d.lastHoveredDomainIndex, void 0 !== n && void 0 !== a && (u = "timeMarkerRollOut");
              break;
            case"fc-click":
              u = "timeMarkerClick", n = e, a = i
          }
          u && (l = f[n].timeFormat, r = m ? c["default"].utcFormatter(l) : c["default"].formatter(l), o = +h[n][a], p.fireChartInstanceEvent(u, {
            start: o,
            startText: r.format(o),
            end: void 0,
            endText: s.BLANKSTRING,
            formatter: l,
            type: f[n].type,
            label: g[n][a].labels
          }))
        }, i.getToolTextConfiguration = function (t) {
          var e, i, n, a = this.getFromEnv("tooltipStyle"), r = a.header, o = a.body, l = 40, s = 46,
            c = this.getFromEnv("smartLabel"), u = {};
          if (c.setStyle({
            "font-size": r["font-size"],
            "font-family": r["font-family"],
            "font-weight": r["font-weight"]
          }), l += (n = c.getOriSize(t[0])).width, s += n.height, u.header = "<div style='margin: 5px;'>" + t[0] + "</div>", u.body = "<div>", c.setStyle({
            "font-size": o["font-size"],
            "font-family": o["font-family"],
            "font-weight": o["font-weight"]
          }), t.length > 2) for (u.body += "</br>", e = 1, i = t.length; e < i; e++) t[e] && (s += (n = c.getOriSize(t[e])).height, l = Math.max(l, n.width), u.body += "<div style= 'margin: 5px;'>" + e + ". " + t[e] + "</div>"); else 2 === t.length && t[1] && (s += (n = c.getOriSize(t[1])).height, l = Math.max(l, n.width), u.body += "<div style= 'margin: 5px;'>" + t[1] + "</div>");
          return u.body += "</div>", u.dimensions = {width: l, height: s}, u
        }, i.reCalculateDimension = function (t, e, i) {
          var n = this.config, a = n.domainArr[t][e], r = this.config.xScale, o = this.getLinkedParent().config,
            l = o.padding, s = l.left, c = l.right, u = l.top, d = l.bottom, f = r.getRangeValue(a),
            h = n.markerDetails[t].markerDim[e], g = f - i / 2 - s + c,
            p = o.canvasBGTop + o.canvasBGHeight - i / 2 - u + d, m = 2 * i / 2, v = 2 * i / 2;
          h.x = g, h.y = p, h.width = m, h.height = v, h.thresholdX = g < o.canvasBGLeft ? g - o.canvasBGLeft : g + m > o.canvasBGLeft + o.canvasBGWidth ? g + m - (o.canvasBGLeft + o.canvasBGWidth) : 0, h.thresholdY = i / 2
        }, i.getMarkerDimension = function (t, e) {
          var i = this.config.xScale, n = this.getLinkedParent().config, a = n.padding, r = a.left, o = a.right,
            l = a.top, s = a.bottom, c = i.getRangeValue(t) - e / 2 - r + o, u = 2 * e / 2;
          return {
            x: c,
            y: n.canvasBGTop + n.canvasBGHeight - e / 2 - l + s,
            width: u,
            height: 2 * e / 2,
            thresholdX: c < n.canvasBGLeft ? c - n.canvasBGLeft : c + u > n.canvasBGLeft + n.canvasBGWidth ? c + u - (n.canvasBGLeft + n.canvasBGWidth) : 0,
            thresholdY: e / 2
          }
        }, i.getMarkerAndLabelConfiguration = function (t, e) {
          var i, n = this, a = n.config, r = n.config.xScale, o = r.applicableClippings, l = o.repeatClips,
            s = o.singleClips, c = r.getDomain(), d = a.valueArr[t], f = d.repeat,
            h = parseFloat(e.text["line-height"]);
          a.markerDetails[t].markerDim = [], a.markerDetails[t].index = t, a.domainArr[t] = [], isNaN(+d.start) || (0, u.getUnclippedValue)(+d.start, l, s) !== +d.start || (!f && +d.start >= +c[0] && +d.start <= +c[1] ? (a.domainArr[t].push(d.start), a.markerDetails[t].markerDim.push(n.getMarkerDimension(d.start, h))) : f && (a.domainArr[t] = i = n.getAllValidDomains(d.start, d.repeat), i.length && i.forEach((function (e) {
            a.markerDetails[t].markerDim.push(n.getMarkerDimension(e, h))
          }))))
        }, i.getAllValidDomains = function (t, e) {
          var i = t, n = this.config.xScale.getDomain(), a = [];
          if (+i < +n[0] && e.multiplier > 0) for (; +i < +n[0];) i = e.interval.offset(i, e.multiplier);
          for (; +i <= +n[1];) a.push(i), i = e.interval.offset(i, e.multiplier);
          return a
        }, i.configureAttributes = function (e) {
          void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
          var i, n, a, r, o, l, u, h, g, p, m, v, y, b, x, k = this.config, S = [], _ = [],
            C = this.getFromEnv("isUTC"), w = [], E = this.getFromEnv("getStyleDef"), D = this.getFromEnv("textStyle"),
            M = this.getFromEnv("baseTextStyle"), T = e.timeMarker || [],
            F = Object.assign({}, D, k.defaultStyle.text, M);
          for (o = 0, l = T.length; o < l; o++) (u = T[o]).start && u.start !== s.BLANKSTRING && (r = (0, s.pluck)(u.timeformat, e.defaultFormat), (n = (C ? c["default"].utcParser(r) : c["default"].parser(r)).parse(u.start)) && (i = {
            start: n,
            startString: u.start,
            timeFormat: r,
            type: u.type || k.type
          }, u.repeat && u.repeat.unit && 0 !== Math.floor(+u.repeat.multiplier) && d(a = u.repeat.unit.toLowerCase()) && (i.repeat = {
            interval: f(a, C),
            multiplier: ("quarter" === a ? 3 : 1) * (0, s.pluckNumber)(u.repeat.multiplier, 1)
          }), h = u.style || {}, w.push(i), g = Object.assign({}, F, {}, E(h.text)), p = Object.assign({}, k.defaultStyle.marker, E(h.marker)), x = E(h["marker:hover"]), m = Object.assign({}, p, x), v = Object.assign({}, p, E(h["marker-box"])), y = Object.assign({}, p, E(h["marker-notch"])), b = Object.assign({}, p, E(h["marker-line"])), S.push({
            text: g,
            "text:hover": Object.assign({}, g, E(h["text:hover"])),
            marker: p,
            "marker:hover": m,
            "marker-box": v,
            "marker-box:hover": Object.assign({}, v, x, E(h["marker-box:hover"])),
            "marker-notch": y,
            "marker-notch:hover": Object.assign({}, y, x, E(h["marker-notch:hover"])),
            "marker-line": b,
            "marker-line:hover": Object.assign({}, b, x, E(h["marker-line:hover"]))
          }), _.push((0, s.pluck)((0, s.parseUnsafeString)(u.label, !1), ""))));
          e.xScale && (k.xScale = e.xScale), k.hoveredMarkerIndex = e.hoveredMarkerIndex, k.hoveredDomainIndex = e.hoveredDomainIndex, k.lastHoveredMarkerIndex = e.lastHoveredMarkerIndex, k.lastHoveredDomainIndex = e.lastHoveredDomainIndex, k.hoveredFromOutside = e.hoveredFromOutside, e.timeMarker && (k.valueArr = w, k.styleArr = S, k.textArr = _)
        }, i.createToolipConfiguration = function () {
          var t, e, i, n, a, r, o = this.config, l = o.markerDetails, s = o.domainArr, u = o.repeatationArr,
            d = o.valueArr, f = this.getFromEnv("isUTC"), h = [];
          for (a = 0; a < s.length; a++) for (t = s[a], e = d[a].timeFormat, i = f ? c["default"].utcFormatter(e) : c["default"].formatter(e), r = 0; r < t.length; r++) h = [], n = i.format(t[r]), h = h.concat([n], u[a][r].labels), l[a].markerDim[r].toolTextArr = h
        }, i.getRepeatationArr = function () {
          var t, e, i, n, a, r, o, l = this.config, s = l.domainArr, c = l.textArr, u = l.markerDetails, d = [];
          for (r = 0; r < s.length; r++) for (n = s[r], d[r] = [], o = 0; o < n.length; o++) for (t = r, a = n[o], d[r][o] = {
            domainValue: a,
            labels: [],
            markerDimIndex: o
          }, c[r] && d[r][o].labels.push(c[r]); t + 1 < s.length;) i = s[t + 1].map((function (t) {
            return +t
          })), -1 !== (e = i.indexOf(+a)) && (c[t + 1] && d[r][o].labels.push(c[t + 1]), s[t + 1] = s[t + 1].filter((function (t) {
            return +t != +a
          })), u[t + 1].markerDim = u[t + 1].markerDim.filter((function (t, i) {
            return i !== e
          }))), t++;
          return d
        }, i.draw = function () {
          var t, e, i = this.config, n = i.valueArr, a = i.styleArr;
          for (this.addGraphicalElement({
            el: "group",
            container: {id: "thermo", label: "thermo", isParent: !0},
            component: this,
            label: "timeMarkerHoverGroup",
            attr: {name: "time-marker-hover-elem-group"},
            id: "timeMarker"
          }), this.addGraphicalElement({
            el: "group",
            container: {id: "thermo", label: "thermo", isParent: !0},
            component: this,
            label: "timeMarker",
            attr: {name: "time-marker-group"},
            id: "timeMarker"
          }), i.markerDetails = [], t = 0, e = n.length; t < e; t++) i.markerDetails[t] = {}, this.getMarkerAndLabelConfiguration(t, a[t]);
          i.repeatationArr = this.getRepeatationArr(), this.createToolipConfiguration(), this.drawTimeMarkers(), this.drawTimeMarkerLabels()
        }, i.drawTimeMarkers = function () {
          var t, e, i, n, a, r, o, l, s = this.config, c = s.markerDetails, u = this.getLinkedParent().config,
            d = u.padding, f = s.styleArr;
          for (o = 0; o < c.length; o++) for (t = c[o].markerDim, n = s.valueArr[o].type, l = 0; l < t.length; l++) i = o === s.hoveredMarkerIndex && l === s.hoveredDomainIndex, r = f[o], (a = parseFloat(i ? r["text:hover"]["line-height"] : r.text["line-height"], 10)) !== parseFloat(r.text["line-height"], 10) && this.reCalculateDimension(o, l, a), e = t[l], (i || "full" === n) && (this.addGraphicalElement({
            el: "path",
            attr: {
              path: ["M", e.x + e.width / 2, e.y + e.height / 2, "v", -u.canvasBGHeight],
              opacity: i ? r["marker-line:hover"].opacity : r["marker-line"].opacity
            },
            container: {label: "timeMarkerHoverGroup"},
            id: "time-instance-marker-path-" + o + l,
            css: i ? r["marker-line:hover"] : r["marker-line"],
            component: this,
            label: "path"
          }), this.addGraphicalElement({
            el: "circle",
            attr: {
              cx: e.x + e.width / 2,
              cy: u.canvasTop + s.hoveredMarkerRadius + d.bottom - d.top,
              r: s.hoveredMarkerRadius,
              opacity: i ? r["marker-notch:hover"].opacity : r["marker-notch"].opacity
            },
            container: {label: "timeMarkerHoverGroup"},
            css: i ? r["marker-notch:hover"] : r["marker-notch"],
            id: "time-instance-marker-circle-" + o + l,
            component: this,
            label: "path"
          })), this.addGraphicalElement({
            el: "rect",
            attr: {
              x: e.x,
              y: e.y,
              width: e.width,
              height: e.height,
              opacity: i ? r["marker-box:hover"].opacity : r["marker-box"].opacity
            },
            container: {label: "timeMarker"},
            css: i ? r["marker-box:hover"] : r["marker-box"],
            id: "time-instance-marker-rect-" + o + l,
            component: this,
            label: "rect"
          })
        }, i.drawTimeMarkerLabels = function () {
          var t, e, i, n, a, r, o, l = this.config, s = l.markerDetails, c = l.repeatationArr, u = l.styleArr;
          for (r = 0; r < c.length; r++) for (e = c[r], o = 0; o < e.length; o++) n = e[o], i = r === l.hoveredMarkerIndex && o === l.hoveredDomainIndex, (a = n.labels.length) > 1 && (t = s[r].markerDim[n.markerDimIndex], this.addGraphicalElement({
            el: "text",
            attr: {
              x: t.x + t.width / 2,
              y: t.y + t.height / 2,
              text: a,
              opacity: i ? u[r]["text:hover"].opacity : u[r].text.opacity
            },
            container: {label: "timeMarker"},
            css: i ? u[r]["text:hover"] : u[r].text,
            id: "time-instance-marker-text-" + r + o,
            component: this,
            label: "text"
          }, !0))
        }, i.getType = function () {
          return "timeMarker"
        }, i.getName = function () {
          return "timeInstanceMarker"
        }, e
      }(r.SmartRenderer);
      e["default"] = g
    }, 776: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(777));
      e["default"] = function (t) {
        t.config.yConfigs.forEach((function (e) {
          var i = e.scale;
          t.config.enableReferenceLine && Array.isArray(e.referenceline) && e.referenceline.forEach((function (n) {
            var r = t.attachChild(a["default"], "referenceLine");
            r.addEventListener("fc-mouseover", r.hoverInHandler), r.addEventListener("fc-mousemove", r.moveHandler), r.addEventListener("fc-mouseout", r.hoverOutHandler), r.addEventListener("fc-click", r.clickHandler), r.configure({
              yScale: i,
              direction: "left" === e.align ? "right" : "left",
              formatterFn: e.formatterFn,
              prefix: e.formatLabelPrefix,
              suffix: e.formatLabelSuffix,
              referenceLine: n
            })
          }))
        }))
      }
    }, 777: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = i(208), l = i(193), s = n(i(741)), c = "L", u = "h", d = function (t) {
        return t.toString()
      }, f = function (t) {
        function e() {
          var e;
          e = t.call(this) || this;
          var i, n, r = (0, a["default"])(e);
          return r.hoverInHandler = function (t) {
            t.stopPropagation(), r.setData({isHovered: !0}, !0), n = r.config, (i = r.getFromEnv("chart")).fireChartInstanceEvent("referenceLineRollOver", {
              label: n.label,
              value: n.value,
              valueFormatted: n.formattedMakerText
            })
          }, r.moveHandler = function (t) {
            t.stopPropagation()
          }, r.hoverOutHandler = function (t) {
            t.stopPropagation(), r.setData({isHovered: !1}, !0), i.fireChartInstanceEvent("referenceLineRollOut", {
              label: n.label,
              value: n.value,
              valueFormatted: n.formattedMakerText
            })
          }, r.clickHandler = function (t) {
            t.stopPropagation(), i.fireChartInstanceEvent("referenceLineClick", {
              label: n.label,
              value: n.value,
              valueFormatted: n.formattedMakerText
            })
          }, e
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this), this.config.defaultStyle = {
            text: {
              fill: "#5F5F5F",
              "vertical-align": "top",
              opacity: "1",
              "fill-opacity": "1",
              "stroke-opacity": "1",
              "font-size": "11px",
              "font-style": "normal"
            },
            marker: {
              fill: "#B70000",
              stroke: "#B70000",
              "fill-opacity": "1",
              "stroke-opacity": "1",
              opacity: "1",
              borderthickness: 0,
              borderpadding: 2,
              borderradius: 0,
              borderdash: "none",
              "stroke-width": "1"
            }
          }, this.config.isHovered = !1, this.config.formatterFn = d, this.config.direction = "right"
        }, i.configureAttributes = function (t) {
          void 0 === t && (t = {});
          var e = this.config, i = this.getFromEnv("getStyleDef");
          if (t.referenceLine) {
            var n = t.referenceLine || {};
            n.style ? (e.markerStyle = i(n.style.marker || {}), e.textStyle = i(n.style.text || {})) : (e.markerStyle = {}, e.textStyle = {}), e.label = (0, l.pluck)(n.label, ""), e.value = (0, l.pluckNumber)(n.value, 0)
          }
          t.yScale && (e.yScale = t.yScale), t.formatterFn && (e.formatterFn = t.formatterFn), t.prefix && (e.prefix = t.prefix), t.suffix && (e.suffix = t.suffix), t.direction && (e.direction = t.direction), null != t.isHovered && (e.isHovered = t.isHovered), e.formattedValue = e.formatterFn({
            value: e.value,
            type: "referenceline",
            prefix: e.prefix,
            suffix: e.suffix
          })
        }, i.getPathArr = function () {
          var t, e = this.config, i = e.direction, n = this.getLinkedParent().config, a = e.yScale, r = a.getDomain(),
            o = e.value, l = [];
          if ((0, s["default"])(r[0]) && (0, s["default"])(r[1]) && o >= r[0] && o <= r[1]) switch (t = a.getRangeValue(o), i) {
            case"left":
              l = ["M", n.canvasLeft + n.canvasWidth - n.borderConfig.rightBorder, t, "h", -n.canvasWidth];
              break;
            case"top":
            case"bottom":
              l = ["M", t, n.canvasTop, "v", n.canvasHeight - n.borderConfig.bottomBorder];
              break;
            case"right":
            default:
              l = ["M", n.canvasLeft + n.borderConfig.leftBorder, t, "h", n.canvasWidth]
          }
          return l
        }, i.getLabelsProps = function (t, e) {
          var i = this.config, n = i.direction, a = {isValidLabel: !1};
          if (t.length && i.label) switch (a.isValidLabel = !0, n) {
            case"top":
              a.x = t[1], a.y = t[2], a.textAnchor = "start";
              break;
            case"bottom":
              a.x = t[1], a.y = t[4], a.textAnchor = "start";
              break;
            case"left":
              a.x = t[1] + t[4] + 3, a.y = t[2] + e.borderpadding, a.textAnchor = "start";
              break;
            case"right":
            default:
              a.x = t[1] + t[4] - e.borderpadding - 1, a.y = t[2] + e.borderpadding, a.textAnchor = "end"
          }
          return a
        }, i.getBulbPoints = function (t) {
          var e = this.config.direction, i = {};
          if (t) switch (e) {
            case"left":
              i.cx = t[1] + t[4] - 3, i.cy = t[2];
              break;
            case"right":
            default:
              i.cx = t[1] + t[4] + 3, i.cy = t[2]
          }
          return i
        }, i.getTagProps = function (t, e, i) {
          var n, a, r, o, l = this.config, s = l.value, d = l.yScale, f = l.direction, h = l.formattedValue,
            g = this.getFromEnv("smartLabel"), p = this.getLinkedParent().config, m = p.canvasLeft, v = p.canvasWidth,
            y = p.borderConfig.leftBorder, b = m + v, x = {}, k = {value: h};
          switch (a = d.getRangeValue(s), g.setStyle({
            fontFamily: i["font-family"],
            fontWeight: i["font-weight"],
            fontSize: i["font-size"],
            fontStyle: i["font-style"]
          }), r = (n = g.getSmartText(h)).width + 2 * t.borderpadding, f) {
            case"left":
              o = ["M", b, a, c, b + 5, a, c, b + 10, a - n.height / 2 - 2 * e.marker.borderpadding, u, r, "v", n.height + 4 * e.marker.borderpadding, u, -r, c, b + 5, a, "z"], x.x = b + 10 + r / 2, x.y = a;
              break;
            case"right":
            default:
              o = ["M", m + y, a, c, m - 5, a, c, m - 10, a - n.height / 2 - 2 * e.marker.borderpadding, u, -r, "v", n.height + 4 * e.marker.borderpadding, u, r, c, m - 5, a, "z"], x.x = m - 10 - r / 2, x.y = a
          }
          return k.value = h, k.tagPath = o, k.tagTextPosition = x, k
        }, i.draw = function () {
          var t, e, i, n, a, r, o, s, c, u, d, f, h = this.config, g = h.defaultStyle, p = h.textStyle,
            m = h.markerStyle, v = h.label, y = h.value, b = h.isHovered, x = this.getFromEnv("baseTextStyle");
          this.addGraphicalElement({
            el: "group",
            container: {id: "thermo", label: "group", isParent: !0},
            component: this,
            label: "refLine",
            attr: {name: "reference-line-thermo"},
            id: "thermo"
          }, !0), this.addGraphicalElement({
            el: "group",
            container: {id: "thermo", label: "refLine"},
            component: this,
            label: "refLine-thermo-hover-group",
            attr: {name: "reference-line-hover-elem-group"},
            id: "thermo"
          }, !0), this.addGraphicalElement({
            el: "group",
            container: {id: "thermo", label: "refLine"},
            component: this,
            label: "refLine-thermo-group",
            attr: {name: "reference-line-group"},
            id: "thermo"
          }, !0), Object.assign(g.text, x), t = (0, l.extend2)((0, l.extend2)({}, g.text), p), e = (0, l.extend2)((0, l.extend2)({}, g.marker), m), n = (0, l.extend2)({}, e), o = this.getPathArr(), s = this.getLabelsProps(o, e), c = this.getBulbPoints(o), o.length && (this.addGraphicalElement({
            el: "path",
            attr: {
              path: o,
              stroke: e.stroke || e.fill,
              "fill-opacity": e["fill-opacity"],
              "stroke-opacity": e["stroke-opacity"],
              "stroke-width": e["stroke-width"],
              "stroke-linecap": e["stroke-linecap"],
              opacity: e.opacity * (b ? 1 : .4),
              "stroke-dasharray": e["stroke-dasharray"] || "none"
            },
            container: {label: "refLine-thermo-group"},
            component: this,
            label: "line"
          }, !0), n["stroke-width"] = b ? e["stroke-width"] || 1 : 0, n.stroke = m && m.stroke || "#595959", this.addGraphicalElement({
            el: "circle",
            attr: {cx: c.cx, cy: c.cy, r: 3},
            container: {label: "refLine-thermo-group"},
            css: n,
            component: this,
            label: "anchor"
          }), h.formattedMakerText = h.formatterFn({
            value: y,
            type: "referenceline",
            prefix: h.prefix,
            suffix: h.suffix
          }), b && (i = (0, l.extend2)((0, l.extend2)((0, l.extend2)({}, g), {text: {fill: "#f3f3f3"}}), {
            text: p,
            marker: m
          }), s.isValidLabel && this.addGraphicalElement({
            el: "text",
            attr: {
              text: v,
              x: s.x,
              y: s.y - e.borderpadding * ("top" === t["vertical-align"] ? -1 : 1),
              opacity: t.opacity,
              "text-anchor": s.textAnchor,
              "text-bound": [e.fill, e.fill, e.borderthickness, e.borderpadding, e.borderradius, e.borderdash, .2]
            },
            css: t,
            container: {label: "refLine-thermo-hover-group"},
            component: this,
            label: "label"
          }, !0), d = (u = this.getTagProps(e, i, t)).tagPath, f = u.tagTextPosition, !(a = (0, l.extend2)({}, i.marker)).stroke && (a.stroke = "none"), this.addGraphicalElement({
            el: "path",
            attr: {path: d},
            container: {label: "refLine-thermo-hover-group"},
            css: a,
            component: this,
            label: "tag"
          }, !0), !(r = (0, l.extend2)({}, i.text))["text-anchor"] && (r["text-anchor"] = "middle"), r["vertical-align"] = "middle", this.addGraphicalElement({
            el: "text",
            attr: {text: h.formattedValue, x: f.x, y: f.y},
            css: r,
            container: {label: "refLine-thermo-hover-group"},
            component: this,
            label: "tag-text"
          }, !0)))
        }, e
      }(o.SmartRenderer);
      e["default"] = f
    }, 778: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(779)), r = i(193), o = function (t) {
        return void 0 === t ? void 0 : 1
      };
      e["default"] = function (t) {
        t.config.yConfigs.forEach((function (e) {
          var i = e.scale, n = t.getFromEnv("chart-attrib");
          t.config.enableReferenceZone && Array.isArray(e.referencezone) && e.referencezone.forEach((function (l) {
            if (o(l.valuemin) && o(l.valuemax)) {
              var s = t.attachChild(a["default"], "referenceZone");
              s.addEventListener("fc-mouseover", s.hoverInHandler), s.addEventListener("fc-mousemove", s.moveHandler), s.addEventListener("fc-mouseout", s.hoverOutHandler), s.addEventListener("fc-click", s.clickHandler), s.configure({
                yScale: i,
                direction: "left" === e.align ? "right" : "left",
                formatterFn: e.formatterFn,
                prefix: e.formatLabelPrefix,
                suffix: e.formatLabelSuffix,
                referenceLine: l,
                extStyle: l.style || {},
                yAxisAlign: e.align,
                showTextOutline: (0, r.pluckNumber)(n.textoutline, 0)
              }), t.addExtEventListener("referenceZoneHovered", s.referenceZoneHoveredHandler, s), s.addExtEventListener("canvasHovered", s.canvasHoveredHandler, t.getFromEnv("mouseTracker"))
            }
          }))
        }))
      }
    }, 779: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = i(208), l = i(193), s = "M", c = "h", u = "v", d = "Z", f = "L",
        h = function (t, e) {
          return t >= e[1] && t <= e[0]
        }, g = {
          marker: {
            fill: "#f76260",
            stroke: "#f76260",
            "fill-opacity": "1",
            "stroke-opacity": "1",
            opacity: "1",
            borderthickness: 0,
            borderpadding: 2,
            borderradius: 0,
            borderdash: "none",
            "stroke-width": 1
          },
          "marker-zone": {stroke: "#f76260", "fill-opacity": .2, fill: "#f76260", "stroke-opacity": 1, "stroke-width": 0},
          "marker-zone:hover": {
            stroke: "#f76260",
            "fill-opacity": .3,
            fill: "#f76260",
            "stroke-opacity": 1,
            "stroke-width": 1
          },
          "marker-notch": {"stroke-width": 0, stroke: "#f76260", fill: "#f76260", "fill-opacity": 1},
          "marker-notch:hover": {"stroke-width": 1, stroke: "#f76260", fill: "#f76260", "fill-opacity": .5},
          "marker-tag": {
            fill: "#f76260",
            stroke: "#f76260",
            "fill-opacity": "1",
            "stroke-opacity": "1",
            opacity: "1",
            borderthickness: 0,
            borderpadding: 2,
            borderradius: 0,
            borderdash: "none",
            "stroke-width": 1
          },
          "marker-notch-connector": {
            fill: "none",
            stroke: "#f76260",
            "fill-opacity": "1",
            "stroke-opacity": "1",
            opacity: "1",
            "stroke-width": 1
          },
          text: {
            fill: "#5F5F5F",
            "vertical-align": "top",
            opacity: "1",
            "fill-opacity": "1",
            "stroke-opacity": "1",
            "font-size": "11px",
            "font-style": "normal"
          },
          "marker-text": {
            fill: "#f3f3f3",
            "vertical-align": "middle",
            "text-anchor": "middle",
            opacity: "1",
            "fill-opacity": "1",
            "stroke-opacity": "1",
            "font-size": "11px",
            "font-style": "normal"
          }
        }, p = function (t) {
          function e() {
            var e;
            e = t.call(this) || this;
            var i, n, r, o, l = (0, a["default"])(e), s = l.config;
            return l.hoverInHandler = function (t) {
              t.stopPropagation(), i = l.getFromEnv("chart"), n = s.yScale, l.setState("hovered", !0), l.asyncDraw(), l.fireEvent("referenceZoneHovered", {
                hovered: !0,
                scale: s.yScale,
                range: {minValue: n.getRangeValue(s.minValue), maxValue: n.getRangeValue(s.maxValue)}
              }), r = s.formatterFn({
                value: s.maxValue,
                type: "referenceline",
                prefix: s.prefix,
                suffix: s.suffix
              }), o = s.formatterFn({
                value: s.minValue,
                type: "referenceline",
                prefix: s.prefix,
                suffix: s.suffix
              }), i.fireChartInstanceEvent("referenceZoneRollOver", {
                label: s.label,
                valueMax: s.maxValue,
                valueMin: s.minValue,
                valueMaxFormatted: r,
                valueMinFormatted: o
              })
            }, l.moveHandler = function (t) {
              t.stopPropagation()
            }, l.hoverOutHandler = function (t) {
              t.stopPropagation(), l.setState("hovered", !1), l.asyncDraw(), l.fireEvent("referenceZoneHovered", {
                hovered: !1,
                scale: s.yScale,
                range: {minValue: n.getRangeValue(s.minValue), maxValue: n.getRangeValue(s.maxValue)}
              }), i.fireChartInstanceEvent("referenceZoneRollOut", {
                label: s.label,
                valueMax: s.maxValue,
                valueMin: s.minValue,
                valueMaxFormatted: r,
                valueMinFormatted: o
              })
            }, l.clickHandler = function (t) {
              t.stopPropagation(), i.fireChartInstanceEvent("referenceZoneClick", {
                label: s.label,
                valueMax: s.maxValue,
                valueMin: s.minValue,
                valueMaxFormatted: r,
                valueMinFormatted: o
              })
            }, l.referenceZoneHoveredHandler = function (t) {
              var e = t.data;
              l.getLinkedParent().highlightDataPoints(e.hovered, e.scale, e.range)
            }, l.canvasHoveredHandler = function (t) {
              var e = l.getLinkedParent(), i = l.config, n = i.yScale, a = i.minValue, r = i.maxValue;
              l.getState("hovered") && (l.setState("hovered", !1), l.asyncDraw(), e.highlightDataPoints(!1, n, {
                minValue: n.getRangeValue(a),
                maxValue: n.getRangeValue(r)
              }))
            }, e
          }

          (0, r["default"])(e, t);
          var i = e.prototype;
          return i.__setDefaultConfig = function () {
            t.prototype.__setDefaultConfig.call(this), this.config.extStyle = {}
          }, i.configureAttributes = function (e) {
            void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
            var i, n, a = this.config, r = e.referenceLine || {};
            if (i = (0, l.pluckNumber)(r.valuemin, 0), n = (0, l.pluckNumber)(r.valuemax, 0), a.label = (0, l.pluck)(r.label, ""), i > n) {
              var o = [n, i];
              i = o[0], n = o[1]
            }
            for (var s in a.minValue = i, a.maxValue = n, e) e.hasOwnProperty(s) && (this.config[s] = e[s]);
            a.formattedMinValue = a.formatterFn({
              value: a.minValue,
              type: "referenceline",
              prefix: a.prefix,
              suffix: a.suffix
            }), a.formattedMaxValue = a.formatterFn({
              value: a.maxValue,
              type: "referenceline",
              prefix: a.prefix,
              suffix: a.suffix
            }), this.createStyleDefinition()
          }, i.createStyleDefinition = function () {
            var t = this.config, e = t.extStyle, i = this.getFromEnv("getStyleDef"), n = this.getFromEnv("baseTextStyle"),
              a = i(e.marker), r = i(e["marker:hover"]), o = i(e["marker-zone"]), l = i(e["marker-zone:hover"]),
              s = i(e["marker-tag"]), c = i(e.text), u = i(e["marker-text"]), d = i(e["marker-notch"]),
              f = i(e["marker-notch:hover"]), h = i(e["marker-notch-connector"]),
              p = i(e["marker-notch-connector:hover"]);
            t.styleDefinition = {
              marker: Object.assign({}, g.marker, a),
              "marker:hover": Object.assign({}, g.marker, r),
              "marker-zone": Object.assign({}, g["marker-zone"], a, o),
              "marker-zone:hover": Object.assign({}, a, o, g["marker-zone:hover"], r, l),
              "marker-tag": Object.assign({}, g["marker-tag"], a, s),
              text: Object.assign({}, n, g.text, c),
              "marker-text": Object.assign({}, n, g["marker-text"], c, u),
              "marker-notch": Object.assign({}, g["marker-notch"], a, d),
              "marker-notch:hover": Object.assign({}, a, d, g["marker-notch:hover"], r, f),
              "marker-notch-connector": Object.assign({}, g["marker-notch-connector"], a, h),
              "marker-notch-connector:hover": Object.assign({}, g["marker-notch-connector"], a, h, r, p)
            }
          }, i.getMarkerPath = function () {
            var t, e, i, n = this.config, a = n.direction, r = this.getLinkedParent().config, o = r.canvasLeft,
              l = r.canvasWidth, f = r.canvasTop, h = r.canvasHeight, g = o + l, p = f + h,
              m = r.borderConfig.rightBorder, v = r.borderConfig.leftBorder, y = r.borderConfig.topBorder,
              b = r.borderConfig.bottomBorder, x = n.yScale, k = n.minValue, S = n.maxValue, _ = [], C = [];
            switch (i = (t = x.getRangeValue(k)) - (e = x.getRangeValue(S)), a) {
              case"left":
                _ = [s, g - m, e, c, -l, u, i, c, l, d], C = [s, g - m - l, e, u, i];
                break;
              case"right":
                _ = [s, o + v, e, c, l, u, i, c, -l, d], C = [s, o + v + l, e, u, i];
                break;
              case"top":
                _ = [s, t, p - b, u, -h, c, i, u, h, d], C = [s, t, p - b - h, c, i];
                break;
              case"bottom":
                _ = [s, t, f + y, u, h, c, i, u, -h, d], C = [s, t, f + y + h, c, i]
            }
            return {connectorPath: C, zonePath: _}
          }, i.getLabelsProps = function (t, e) {
            var i = e.marker, n = e.text, a = this.config, r = this.getLinkedParent().config, o = a.direction,
              l = {isValidLabel: !1};
            if (t.length && a.label) {
              switch (l.isValidLabel = !0, o) {
                case"top":
                case"bottom":
                  l.x = t[1], l.y = t[2] + t[4], l.textAnchor = "start";
                  break;
                case"left":
                  l.x = t[1] + t[4] + 3, l.y = t[2] + t[6] + i.borderpadding, l.textAnchor = "start";
                  break;
                case"right":
                  l.x = t[1] + t[4] - i.borderpadding - 1, l.y = t[2] + t[6] + i.borderpadding, l.textAnchor = "end"
              }
              r.canvasBGHeight < l.y ? (l.y = r.canvasBGHeight - 2 * i.borderpadding, n["vertical-align"] = "bottom") : n["vertical-align"] = "top"
            }
            return l
          }, i.getBulbPoints = function (t) {
            var e = this.config, i = e.direction, n = e.yScale.getRange(), a = [];
            if (t) switch (i) {
              case"left":
                h(t[2], n) && a.push({cx: t[1] + t[4], cy: t[2]}), h(t[2] + t[6], n) && a.push({
                  cx: t[1] + t[4],
                  cy: t[2] + t[6]
                });
                break;
              case"right":
                h(t[2], n) && a.push({cx: t[1] + t[4], cy: t[2]}), h(t[2] + t[6], n) && a.push({
                  cx: t[1] + t[4],
                  cy: t[2] + t[6]
                })
            }
            return a
          }, i.getTagProps = function (t, e, i) {
            var n, a, r, o, l, g = this.config, p = g.yScale, m = g.minValue, v = g.maxValue, y = g.direction,
              b = g.formattedMinValue, x = g.formattedMaxValue, k = p.getRange(), S = this.getFromEnv("smartLabel"),
              _ = 2 * e.borderpadding, C = 2 * (t.borderpadding + 1), w = this.getLinkedParent().config, E = w.canvasLeft,
              D = w.canvasWidth, M = w.borderConfig.leftBorder, T = E + D, F = [];
            switch (r = p.getRangeValue(m), o = p.getRangeValue(v), S.setStyle({
              fontFamily: i["font-family"],
              fontWeight: i["font-weight"],
              fontSize: i["font-size"],
              fontStyle: i["font-style"]
            }), y) {
              case"left":
                n = S.getSmartText(b), a = S.getSmartText(x), l = Math.max(n.width, a.width) + C, h(r, k) && F.push({
                  tagPath: [s, T, r, f, T + 5, r, f, T + 10, r - n.height / 2 - _, c, l, u, n.height + 4 * e.borderpadding, c, -l, f, T + 5, r, d],
                  tagTextProps: {x: T + 10 + l / 2, y: r, value: b}
                }), h(o, k) && F.push({
                  tagPath: [s, T, o, f, T + 5, o, f, T + 10, o - a.height / 2 - _, c, l, u, a.height + 4 * e.borderpadding, c, -l, f, T + 5, o, d],
                  tagTextProps: {x: T + 10 + l / 2, y: o, value: x}
                });
                break;
              case"right":
              default:
                n = S.getSmartText(b), a = S.getSmartText(x), l = Math.max(n.width, a.width) + C, h(r, k) && F.push({
                  tagPath: [s, E + M, r, f, E - 5, r, f, E - 10, r - n.height / 2 - _, c, -l, u, n.height + 4 * e.borderpadding, c, l, f, E - 5, r, d],
                  tagTextProps: {x: E - 10 - l / 2, y: r, value: b}
                }), h(o, k) && F.push({
                  tagPath: [s, E + M, o, f, E - 5, o, f, E - 10, o - a.height / 2 - _, c, -l, u, a.height + 4 * e.borderpadding, c, l, f, E - 5, o, d],
                  tagTextProps: {x: E - 10 - l / 2, y: o, value: x}
                })
            }
            return F
          }, i.draw = function () {
            var t, e, i, n, a, r, o = this, l = o.config, s = l.styleDefinition, c = l.label, u = o.getState("hovered"),
              d = o.getLinkedParent().config, f = d.padding,
              h = u ? s["marker-notch-connector:hover"] : s["marker-notch-connector"],
              g = Number.parseFloat(h["stroke-width"]) + 1,
              p = d.canvasBGLeft - f.left - 3 - ("left" === l.direction ? g : 0), m = d.canvasBGTop - f.top - 3,
              v = d.canvasBGWidth + 6 + g, y = d.canvasBGHeight + 6,
              b = ["M" + p + "," + m, "L" + (p + v) + "," + m, "L" + (p + v) + "," + (m + y), "L" + p + "," + (m + y) + "Z"];
            o.addGraphicalElement({
              el: "group",
              container: {id: "exo", label: "group", isParent: !0},
              component: o,
              label: "refZone",
              attr: {name: "reference-zone-exo"},
              id: "exo"
            }, !0), o.addGraphicalElement({
              el: "group",
              container: {id: "exo", label: "refZone"},
              component: o,
              label: "refZone-exo-group",
              attr: {name: "reference-zone-group", "clip-path": b},
              id: "exo"
            }, !0), o.addGraphicalElement({
              el: "group",
              container: {id: "exo", label: "refZone"},
              component: o,
              label: "refZone-exo-hover-group",
              attr: {name: "reference-zone-hover-elem-group"},
              id: "exo"
            }, !0), e = (t = o.getMarkerPath()).zonePath, i = o.getLabelsProps(e, s), n = o.getBulbPoints(e), e.length && (o.addGraphicalElement({
              el: "path",
              attr: {path: e},
              container: {label: "refZone-exo-group"},
              css: u ? s["marker-zone:hover"] : s["marker-zone"],
              component: o,
              label: "line"
            }, !0), n.forEach((function (t) {
              o.addGraphicalElement({
                el: "circle",
                attr: {cx: t.cx, cy: t.cy, r: 3},
                container: {label: "refZone-exo-hover-group"},
                css: u ? s["marker-notch:hover"] : s["marker-notch"],
                component: o,
                label: "anchor"
              })
            })), o.addGraphicalElement({
              el: "path",
              attr: {path: t.connectorPath},
              container: {label: "refZone-exo-group"},
              css: h,
              component: o,
              label: "anchorConnector"
            }), u && (i.isValidLabel && o.addGraphicalElement({
              el: "text",
              attr: {
                text: c,
                x: i.x,
                y: i.y - s.marker.borderpadding * ("top" === s.text["vertical-align"] ? -1 : 1),
                "text-anchor": i.textAnchor
              },
              css: s.text,
              container: {label: "refZone-exo-hover-group"},
              outlineText: l.showTextOutline,
              component: o,
              label: "label"
            }, !0), o.getTagProps(s.marker, s["marker-tag"], s.text).forEach((function (t) {
              a = t.tagPath, r = t.tagTextProps, o.addGraphicalElement({
                el: "path",
                attr: {path: a},
                container: {label: "refZone-exo-hover-group"},
                css: s["marker-tag"],
                component: o,
                label: "tag"
              }, !0), o.addGraphicalElement({
                el: "text",
                attr: {text: r.value, x: r.x, y: r.y},
                css: s["marker-text"],
                container: {label: "refZone-exo-hover-group"},
                component: o,
                label: "tag-text"
              }, !0)
            }))))
          }, e
        }(o.SmartRenderer);
      e["default"] = p
    }, 780: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(781));
      e["default"] = function (t) {
        t.config.enableGridLines && t.attachChild(a["default"], "gridLine").configure({
          direction: t.config.gridLineDirection,
          styleGridLines: t.config.styleGridLines,
          defaultStyle: t.config.gridLineStyle
        })
      }
    }, 781: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = i(193), l = /\S/, s = "stroke-dasharray", c = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this), this.config.direction = "horizontal", this.config.showgridlines = 1, this.config.showboundarygridlines = 1, this.config.style = {}, this.config.defaultStyle = {
            stroke: "#EFEFEF",
            "stroke-width": "1",
            "stroke-opacity": "1"
          }
        }, i.configureAttributes = function (e) {
          void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
          var i = this.config;
          for (var n in e) e.hasOwnProperty(n) && "undefined" != typeof e[n] && (i[n] = e[n])
        }, i.getPathArr = function () {
          var t, e, i, n, a, r, o, l, s, c, u, d, f, h, g = this.config, p = this.getFromEnv("getStyleDef"),
            m = this.getLinkedParent().config, v = [], y = [];
          if ("vertical" !== g.direction ? (l = (i = m.yConfigs[0]).scale, o = "H", n = m.canvasBGLeft, a = l.getRangeValue, r = m.canvasBGLeft + m.canvasBGWidth) : (o = "V", n = (l = (i = m.xConfigs[0]).scale).getRangeValue, a = m.canvasBGTop + m.canvasBGHeight - m.padding.top, r = m.canvasBGTop - m.padding.top), i.tickarguments && (y = i.tickarguments), e = i.style || {}, g.style = p(e["grid-line"] || {}), y.push(i.skipinfo || {}), y.push(i.dayinmajor || !1), c = (t = l).ticks.apply(t, y), g.showgridlines) for (s = l.getDomain(), u = 0, d = c.length; u < d; u++) (g.showboundarygridlines || 0 !== u && u !== d - 1) && (+(f = c[u]) >= +(h = s)[0] && +f <= +h[1]) && v.push(["M", "function" == typeof n ? n.call(l, c[u]) : n, "function" == typeof a ? a.call(l, c[u]) : a, o, r]);
          return v
        }, i.draw = function () {
          var t = this, e = t.config, i = e.styleGridLines, n = t.getPathArr(),
            a = (0, o.extend2)((0, o.extend2)({}, e.defaultStyle), i && e.style);
          a[s] && (a[s] = "string" == typeof a[s] ? a[s].split(" ").filter((function (t) {
            return l.test(t)
          })).map((function (t) {
            return +t
          })) : a[s]), t.addGraphicalElement({
            el: "group",
            container: {id: "strato", label: "strato", isParent: !0},
            component: t,
            label: "gridLine",
            attr: {name: "grid-line-group"},
            id: "gridLine"
          }), n.forEach((function (e, i) {
            t.addGraphicalElement({
              el: "path",
              attr: {path: e},
              css: a,
              container: {label: "gridLine"},
              id: "grid-line-" + i,
              component: t,
              label: "line"
            })
          }))
        }, e
      }(r.SmartRenderer);
      e["default"] = c
    }, 782: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = function (t) {
        var e;
        t.config.enableMouseTracking && (e = t.attachChild(a["default"], "mouseTracker"), t.addToEnv("mouseTracker", e), e.config.mouseTrackerEventAdded || (e.addEvents(), e.config.mouseTrackerEventAdded = !0))
      };
      var a = n(i(783))
    }, 783: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = n(i(490)), l = i(193), s = function (t) {
        return function () {
          t.deactivate(), t.fireEvent("canvasHovered", {
            hoveredInfo: {},
            e: {}
          }), clearTimeout(t.domainValidationTimer), t.domainValidationTimer = setTimeout((function () {
            t.activate()
          }), 100)
        }
      }, c = function (t) {
        function e() {
          var e, i;
          return (e = t.call(this) || this).handler = (i = (0, a["default"])(e), function (t) {
            i.mouseEvtHandler(t)
          }), e.eventsList.push("fc-mouseout"), e.active = !0, e
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.mouseEvtHandler = function (t) {
          if (this.active) {
            var e, i, n, a, r, o, s, c, u = t.originalEvent, d = this.getLinkedParent(),
              f = d.getChild(void 0, "dataset") || [], h = d.getChild(void 0, "timeInstanceMarker")[0],
              g = d.getChild(void 0, "timeSpanMinMarker")[0], p = d.getChild(void 0, "timeSpanFullMarker")[0],
              m = f.length;
            if (m) if (i = (e = (0, l.getMouseCoordinate)(this.getFromEnv("chart-container"), u, this.getFromEnv("chart"))).chartX, n = e.chartY, (o = h.getHoveredMarker(i, n)) && o.hovered) this.fireEvent("canvasHovered", {
              hoveredInfo: o,
              e: t,
              i: m,
              chartX: i,
              chartY: n
            }); else if (o && void 0 !== o.previouslyHoveredIndex && (this.fireEvent("canvasHovered", {
              hoveredInfo: o,
              e: t,
              i: m,
              chartX: i,
              chartY: n
            }), h.config.previouslyHoveredIndex = void 0), (o = g.getHoveredMarker(i, n)) && o.hovered) this.fireEvent("canvasHovered", {
              hoveredInfo: o,
              e: t,
              i: m,
              chartX: i,
              chartY: n
            }); else {
              for (o && void 0 !== o.previouslyHoveredIndex && (this.fireEvent("canvasHovered", {
                hoveredInfo: o,
                e: t,
                i: m,
                chartX: i,
                chartY: n
              }), g.config.previouslyHoveredIndex = void 0); m--;) (r = (a = f[m])._getHoveredPlot && a._getHoveredPlot(i, n)) && r.hovered && (s = r, c = m);
              if (!s) {
                if ((o = p.getHoveredMarker(i, n)) && o.hovered) return void this.fireEvent("canvasHovered", {
                  hoveredInfo: o,
                  e: t,
                  i: m,
                  chartX: i,
                  chartY: n
                });
                o && void 0 !== o.previouslyHoveredIndex && (this.fireEvent("canvasHovered", {
                  hoveredInfo: o,
                  e: t,
                  i: m,
                  chartX: i,
                  chartY: n
                }), p.config.previouslyHoveredIndex = void 0)
              }
              this.fireEvent("canvasHovered", {hoveredInfo: s || r, e: t, i: c, chartX: i, chartY: n})
            }
          }
        }, i.addEvents = function () {
          var t, e = this.getLinkedParent(), i = this.eventsList;
          for (t in this._removeListners(), i) e.addEventListener(i[t], this.handler);
          this.config.onDomainValidated = s(this), this.addExtEventListener("focusLimitChanged", this.config.onDomainValidated, this.getFromEnv("chart"))
        }, i._removeListners = function () {
          var t, e = this.getLinkedParent(), i = this.eventsList;
          for (t in i) e.removeEventListener(i[t], this.handler);
          this.removeExtEventListener("domainValidated", this.config.onDomainValidated, this.getFromEnv("chart"))
        }, i.remove = function () {
          var e;
          this._removeListners();
          for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
          (e = t.prototype.remove).call.apply(e, [this].concat(n))
        }, i.activate = function () {
          this.active = !0
        }, i.deactivate = function () {
          this.active = !1, s()
        }, e
      }(o["default"]);
      e["default"] = c
    }, 784: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = function (t) {
        t.config.enableMouseTracking && t.attachChild(a["default"], "tooltipHover").configure()
      };
      var a = n(i(785))
    }, 785: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e.createDivString = e["default"] = void 0;
      var a = n(i(207)), r = n(i(212)), o = "fc-mouseover", l = "fc-click", s = function (t, e) {
        return void 0 === t && (t = ""), void 0 === e && (e = ""), e && "<div " + t + ">" + e + "</div>"
      };
      e.createDivString = s;
      var c = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.configure = function () {
          t.prototype.configure.call(this);
          var e, i = this.config, n = this.getFromEnv("chartConfig"), a = this.getFromEnv("mouseTracker");
          i.showTooltip = n.showTooltip, !i.eventAdded && this.addExtEventListener("canvasHovered", (e = this, i.eventAdded = !0, function () {
            switch (arguments[1].hoveredInfo && arguments[1].hoveredInfo.component && arguments[1].hoveredInfo.component.getType()) {
              case"timeMarker":
                arguments[1].e.type === o && e._triggerMouseActions({
                  data: {
                    hoveredInfo: {},
                    e: {}
                  }
                }), e._triggerMarkerMouseActions.apply(e, arguments);
                break;
              default:
                e._triggerMouseActions.apply(e, arguments)
            }
          }), a)
        }, i.mouseoutHandler = function (t, e, i, n) {
          var a = this.config;
          n && n.config && (n.setHoverOutEffect([i]), n._firePlotEvent && n._firePlotEvent("fc-mouseout", i, t)), a.showTooltip && this.getFromEnv("toolTipController").hide(a.currentToolTip), delete a._lastDatasetIndex, delete a._lastPointIndex
        }, i._triggerMarkerMouseActions = function (t) {
          var e, i, n, a, r, o = t.data, l = o.e, c = this.getFromEnv("toolTipController"),
            u = this.getFromEnv("tooltipStyle"), d = o.chartX, f = o.chartY, h = this.getLinkedParent(),
            g = h.getTranslation(), p = o.hoveredInfo, m = p.hovered, v = this.config, y = v.showTooltip,
            b = p.component, x = p.pointObj.hoveredMarkerDim || {}, k = "",
            S = p.hovered && b.getToolTextConfiguration(x.toolTextArr, p.pointObj.type),
            _ = h.isWithinCanvas(d - (x.thresholdX || 0), f - (x.thresholdY || 0));
          if (m && _) {
            var C = S.header, w = S.body;
            if (k = s(u.headerStyleString, C) + s(u.bodyStyleString, w), e = d, i = x.y - S.dimensions.height + g.y, y && (v.currentToolTip = c.drawAt(e, i, k, v.currentToolTip, h)), b.setHoverInEffect(p.pointIndex, p.pointObj.index, !1), r = (n = this.getMakerMouseEvents(l, p.pointIndex, p.pointObj.index)).length) for (v._lastMarkerIndex = p.pointIndex, v._lastDomainIndex = p.pointObj.index, a = 0; a < r; a++) b.fireMarkerEvents(n[a], p.pointIndex, p.pointObj.index)
          } else y && c.hide(v.currentToolTip), b.setHoverOutEffect(), void 0 !== v._lastMarkerIndex && void 0 !== v._lastDomainIndex && b.fireMarkerEvents("fc-mouseout", p.pointIndex, p.pointObj.index), v._lastMarkerIndex = void 0, v._lastDomainIndex = void 0
        }, i._triggerMouseActions = function (t) {
          var e, i, n, a, r, o, l, c, u, d, f = this, h = t.data, g = f.getFromEnv("toolTipController"),
            p = f.getFromEnv("tooltipStyle"), m = h.i, v = h.e, y = h.chartX, b = h.chartY, x = h.hoveredInfo,
            k = m >= 0, S = f.getLinkedParent(), _ = S.getChild(void 0, "dataset"), C = f.config,
            w = C._lastDatasetIndex, E = C._lastPointIndex, D = S.getTranslation(), M = "", T = "", F = "",
            I = x && x.pointIndex, L = S.isWithinCanvas(y, b);
          if (x) {
            if (k && (x.datasetIndex = m, d = f.getMouseEvents(v, x.datasetIndex, I, x.component.getName(), x.markerObj)), (!L || (!k || d && d.fireOut) && void 0 !== w) && (d && !d.events.length ? C.mouseoutTimer = setTimeout((function () {
              f.mouseoutHandler(v, w, E, C._lastComponentHovered)
            }), 20) : (f.mouseoutHandler(v, w, E, C._lastComponentHovered), clearTimeout(C.mouseoutTimer))), L && _.length && C.showTooltip) {
              if (o = x.component.getFromEnv("xScale").getRange(), _.forEach((function (t, e) {
                "visible" === (u = t.config).visibility && (a = t._getTooltext(k, m === e, t._getHoveredBin()), F += a, u.dataInfo[t._getHoveredBin()] && a && (r = u.dataInfo[t._getHoveredBin()], c = t))
              })), c) {
                var O = c._getDateForToolText(c._getHoveredBin());
                M = O.header, T = O.body
              }
              F = s(p.headerStyleString, M) + s(p.bodyStyleString, T + F), (e = k ? x.pointObj : r) && "" !== F && e.endXPosition > o[0] && e.x < o[1] ? C.currentToolTip = g.drawAt(e.x + (e.width || 0) / 2 + 5 + D.x, (e.colY || e.y) + D.y, F, C.currentToolTip, S) : g.hide(C.currentToolTip)
            }
            if (k && (i = d.events && d.events.length)) {
              if (C._lastDatasetIndex = x.datasetIndex, C._lastPointIndex = I, l = C._lastComponentHovered = x.component, C._lastComponentHoveredName = l && l.getName(), l.setHoverInEffect([I]), C.showTooltip && "dataMarker" === l.getType()) {
                var A = l._getTooltext(I);
                M = A.header, T = A.body, F = s(p.headerStyleString, M) + s(p.bodyStyleString, T), C.currentToolTip = g.draw(v, F, C.currentToolTip)
              }
              for (n = 0; n < i; n += 1) l && l._firePlotEvent && l && l._firePlotEvent && l._firePlotEvent(d.events[n], I, v)
            }
          }
        }, i.getMouseEvents = function (t, e, i, n) {
          var a = this.config, r = a._lastDatasetIndex, s = a._lastPointIndex, c = a._lastComponentHoveredName,
            u = {fireOut: !1, events: []};
          switch (t.type) {
            case l:
              u.events.push(l);
              break;
            case"fc-mousemove":
              c === n && r === e && s === i ? (clearTimeout(a.mouseoutTimer), u.events.push("fc-mousemove")) : (u.events.push(o), u.fireOut = !0);
              break;
            case"fc-mousedown":
              c === n && r === e && s === i || (u.fireOut = !0, u.events.push(o)), u.events.push("fc-mousedown");
              break;
            case o:
              c === n && r === e && s === i ? clearTimeout(a.mouseoutTimer) : (u.fireOut = !0, u.events.push(o));
              break;
            case"fc-mouseup":
              u.events.push("fc-mouseup");
              break;
            case"fc-mouseout":
              u.fireOut = !0
          }
          return u
        }, i.getMakerMouseEvents = function (t, e, i) {
          var n = this.config, a = n._lastMarkerIndex, r = n._lastDomainIndex, s = [];
          switch (t.type) {
            case l:
              s.push(l);
              break;
            case"fc-mousemove":
              a === e && r === i ? s.push("fc-mousemove") : s.push(o);
              break;
            case o:
              a !== e && r !== i && s.push(o)
          }
          return s
        }, e
      }(r["default"]);
      e["default"] = c
    }, 786: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = function (t) {
        var e = t.config;
        e.enableInteraction && !e.wheelEventAdded && (t.addEventListener("fc-wheel", function (t) {
          return function (e) {
            var i, r, o, l, s, c, u, d, f, h, g, p = t.getLinkedParent(), m = t.config.xConfigs[0].scale,
              v = m.getRange(), y = v[0], b = v[1], x = e.originalEvent;
            if (Math.abs(x.deltaY) > Math.abs(x.deltaX) ? (i = "vertical", l = x.deltaY) : (i = "horizontal", l = x.deltaX), "vertical" === i) {
              s = (0, n.getMouseCoordinate)(t.getFromEnv("chart-container"), e.originalEvent, p), u = (c = t.getTranslation()) ? c.x : 0, y -= 2 * l * (f = (d = s.chartX - u) - y) / (g = f + (h = b - d)), b += 2 * l * h / g;
              var k = (0, a.clampWithinContextRange)([y, b], m, t.getFromEnv("contextScalesX")[0]);
              y = k[0], b = k[1], r = l < 0 ? "up" : "down", o = l >= 0 ? "up" : "down", p.setPixelLimit([y, b], m, [r, o], {name: "canvasWheel"})
            } else b += l, y += l, o = r = l >= 0 ? "up" : "down", p.setPixelLimit([y, b], m, [r, o], {name: "canvasWheel"})
          }
        }(t)), e.wheelEventAdded = !0)
      };
      var n = i(193), a = i(787)
    }, 787: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e.isWithinMinRange = e.clampWithinContextRange = void 0;
      e.isWithinMinRange = function (t, e) {
        var i = 3 * e.getBinMin()[2], n = e.getRangeValue(i) - e.getRangeValue(0);
        return t[1] - t[0] >= n
      }, e.clampWithinContextRange = function (t, e, i) {
        var n = i.getDomain().map((function (t) {
          return e.getRangeValue(t)
        }));
        return t[0] = Math.max(t[0], n[0]), t[1] = Math.min(t[1], n[1]), t
      }
    }, 788: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = function (t) {
        var e = t.config;
        e.enableInteraction && !e.dbTapEventAdded && (t.addEventListener("fc-dbclick", function (t) {
          return function (e) {
            var i, r = t.getLinkedParent(), o = t.config.xConfigs[0].scale, l = o.getRange(), s = l[0], c = l[1];
            s += a, c -= a, i = (0, n.clampWithinContextRange)([s, c], o, t.getFromEnv("contextScalesX")[0]), r.setPixelLimit([].concat(i), o, ["up", "down"], {name: "canvasDblTap"})
          }
        }(t)), e.dbTapEventAdded = !0)
      };
      var n = i(787), a = 20
    }, 789: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = function (t) {
        var e = t.config;
        e.enableInteraction && !e.swipeEventAdded && (t.addEventListener("fc-dragstart", function (t) {
          return function () {
            var e = t.getFromEnv("chart"), i = e.getFocusLimit();
            n = 0, t.getChildren("mouseTracker")[0].deactivate(), e.fireChartInstanceEvent("canvasDragStart", {
              start: +i[0],
              end: +i[1]
            })
          }
        }(t)), t.addEventListener("fc-dragmove", function (t) {
          return function (e) {
            var i, a = t.getLinkedParent(), r = t.config.xConfigs[0].scale, o = r.getRange(), l = o[0], s = o[1],
              c = e.originalEvent.data, u = c[0] - n;
            s -= u, l -= u, i = u < 0 ? "up" : "down", a.setPixelLimit([l, s], r, [i, i], {name: "canvasDrag"}) && (n = c[0])
          }
        }(t)), t.addEventListener("fc-dragend", function (t) {
          return function () {
            var e = t.getFromEnv("chart"), i = e.getFocusLimit();
            t.getChildren("mouseTracker")[0].activate(), e.fireChartInstanceEvent("canvasDragEnd", {
              start: +i[0],
              end: +i[1]
            })
          }
        }(t)), e.swipeEventAdded = !0)
      };
      var n
    }, 790: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = function (t) {
        var e = t.config;
        e.enableInteraction && !e.pinchEventAdded && (t.addEventListener("fc-pinchstart", o), t.addEventListener("fc-pinchmove", function (t) {
          return function (e) {
            var i, o = t.getLinkedParent(), l = t.config.xConfigs[0].scale, s = l.getRange(), c = s[0], u = s[1],
              d = e.originalEvent.data.distanceX, f = d - n,
              h = (0, a.getMouseCoordinate)(t.getFromEnv("chart-container"), e.originalEvent, o),
              g = t.getTranslation(), p = g ? g.x : 0, m = h.chartX - p, v = m - c, y = u - m, b = v + y;
            n = d, c += 2 * f * v / b, u -= 2 * f * y / b, i = (0, r.clampWithinContextRange)([c, u], l, t.getFromEnv("contextScalesX")[0]), o.setPixelLimit([].concat(i), l, ["down", "up"])
          }
        }(t)), e.pinchEventAdded = !0)
      };
      var n, a = i(193), r = i(787), o = function (t) {
        n = t.originalEvent.data.distanceX
      }
    }, 791: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(792)), r = n(i(793)), o = n(i(806)), l = n(i(815)), s = n(i(817)), c = n(i(819)), u = n(i(822)),
        d = n(i(823)), f = i(193), h = n(i(824)), g = n(i(826)), p = function (t) {
          return t.split(" - ")[0]
        }, m = function (t) {
          return t.split(" - ").slice(1).join(" - ")
        }, v = function (t) {
          return t ? "visible" : "hidden"
        }, y = function (t) {
          return "ohlc" === t || "candlestick" === t
        }, b = function (t) {
          return "column-range" === t || "area-range" === t
        }, x = function (t) {
          return "avg" === t ? "average" : t
        }, k = function (t) {
          var e, i = {};
          return "string" == typeof t ? (e = t.split(" - "), x(e[e.length - 1])) : (t.forEach((function (t) {
            t && (e = t.split("-"), i[e[0].trim()] = x(e[1].trim()))
          })), i)
        }, S = function (t) {
          var e, i;
          return t.stack || !t.tableInfo.filterItem ? ((i = {})[t.value[0]] = p(t.value[0]), i) : ((e = {})[t.value[0]] = t.tableInfo.filterItem, e)
        };
      e["default"] = function (t) {
        var e = t.getFromEnv("chart"), i = t.getFromEnv("legendMap"), n = t.config,
          x = t.getFromEnv("dataSource").plotconfig || {}, _ = t.getFromEnv("ordinalScale"), C = n.isContext,
          w = n.multiSeriesDatasetMap, E = n.enableMarkers, D = C ? e.config.contextAxesX : e.config.focusAxesX,
          M = C ? e.config.contextAxesY : e.config.focusAxesY, T = t.getFromEnv("prediction"),
          F = T ? t.getFromEnv("baseTimeConverter").parse(T.date) : f.UNDEF;
        T.dateMs = T.enabled ? F ? F.getTime() : Date.now() : f.UNDEF, C && n.plotConfigs.forEach((function (t) {
          var e = t.plots, i = e.filter((function (t) {
            return "column" === t.plottype
          })).length > 1 ? "area" : null;
          e.forEach((function (t) {
            b(t.plottype) ? (t.value = t.high, t.isRange = !0, t.plottype = "string" == typeof t.typeinnavigator && t.typeinnavigator || "line") : y(t.plottype) ? (t.value = t.close || t.low || t.high || t.open || [], t.plottype = "string" == typeof t.typeinnavigator && t.typeinnavigator || "line") : "column" === t.plottype && (t.plottype = t.typeinnavigator || i || (t.value.length > 1 ? "area" : "line"))
          }))
        })), n.plotConfigs.forEach((function (e, F) {
          var I = D[e.x], L = M[e.y], O = I.binDecider, A = I.scale, P = L.scale, B = L.plotstyle || {},
            N = e.plots.filter((function (t) {
              return "column" === t.plottype
            })), H = N.length, j = N.map(S), R = 0;
          e.plots.forEach((function (e, S) {
            var D, M, N, V, G, Y, U, z, X = e.tableInfo, W = X.table, q = X.filterItem, Z = L.plot[e.plotInAxisIndex],
              $ = Z.style || {}, Q = Z.connectnulldata, K = W.getData().data, J = W, tt = I.timeFormatterFn,
              et = [Z.value], it = {};
            if (Z.group && (it[Z.group] = q), D = (0, f.extend2)((0, f.extend2)({}, B), $), !C && (y(e.plottype) || b(e.plottype))) {
              var nt = e.close || e.open || e.high || e.low;
              (nt.length > 1 || q) && (e.plottype = "line", e.value = nt)
            }
            if (V = e.plottype, M = x[V] || {}, N = x.generic || {}, U = function (t) {
              switch (t) {
                case"column":
                  return o["default"];
                case"candlestick":
                  return l["default"];
                case"column-range":
                  return h["default"];
                case"area-range":
                  return g["default"];
                case"ohlc":
                  return s["default"];
                default:
                  return r["default"]
              }
            }(V), "column" === V && (G = R++, Y = H), y(V)) {
              var at = (0, a["default"])([e.open || [e.open], e.high || [e.high], e.low || [e.low], e.close || [e.close]].filter((function (t) {
                return !!t
              }))), rt = Z.open, ot = Z.high, lt = Z.low, st = Z.close;
              (rt || ot || lt || st) && (et[0] = {
                open: rt,
                high: ot,
                low: lt,
                close: st
              }), at.forEach((function (i, n) {
                var a = t.attachChild(U, "dataset", "" + e.value + n + S + F);
                a.addToEnv("binDecider", O), a.addToEnv("xScale", A), a.addToEnv("yScale", P), a.configure({
                  data: K,
                  scaleX: A,
                  scaleY: P,
                  formatterFn: L.formatterFn,
                  timeFormatterFn: tt,
                  yAxisAlign: (0, f.pluck)(L.align, "left"),
                  styleConfig: D,
                  plotCosmetics: M,
                  genericCosmetics: N,
                  aggregation: k(i),
                  prefix: L.formatLabelPrefix,
                  suffix: L.formatLabelSuffix,
                  indices: [J.indexOf(X.position)].concat(i.map((function (t) {
                    return J.indexOf(t)
                  }))),
                  enableMarkers: E,
                  primaryColor: !0,
                  type: V,
                  series: e.value,
                  measures: et,
                  calculateFromContext: C,
                  prediction: T,
                  useNullStyles: !C
                })
              }))
            } else if (b(V)) {
              var ct = (0, a["default"])([e.high || [e.high], e.low || [e.low]].filter((function (t) {
                return !!t
              }))), ut = Z.high, dt = Z.low;
              (ut || dt) && (et[0] = {
                high: ut,
                low: dt
              }), e.name ? (z = i[e.name] && i[e.name].visibility) === f.UNDEF && (z = !0) : z = !0, ct.forEach((function (i, n) {
                var a = t.attachChild(U, "dataset", "" + e.value + n + S + F);
                a.addToEnv("binDecider", O), a.addToEnv("xScale", A), a.addToEnv("yScale", P), a.configure({
                  data: K,
                  scaleX: A,
                  scaleY: P,
                  visibility: v(z),
                  formatterFn: L.formatterFn,
                  timeFormatterFn: tt,
                  yAxisAlign: (0, f.pluck)(L.align, "left"),
                  styleConfig: D,
                  plotCosmetics: M,
                  genericCosmetics: N,
                  aggregation: k(i),
                  prefix: L.formatLabelPrefix,
                  suffix: L.formatLabelSuffix,
                  connectNullData: Q,
                  indices: [J.indexOf(X.position)].concat(i.map((function (t) {
                    return J.indexOf(t)
                  }))),
                  enableMarkers: E,
                  primaryColor: e.name ? _.getRangeValue(e.name) : _.getRangeValue(e.high[0] + "-" + e.low[0]),
                  type: V,
                  series: e.value,
                  measures: et,
                  calculateFromContext: C,
                  prediction: T,
                  useNullStyles: !C
                })
              }))
            } else if (e.stack && function (t) {
              return "area" === t || "smooth-area" === t || "step-area" === t || "column" === t
            }(V)) {
              var ft = J.indexOf(X.position), ht = m(e.value[0]) + " - sum",
                gt = (new c["default"]).setValueAccessor((function (t, e) {
                  return (i[p(e)] || {}).visibility ? t[J.indexOf(e)] : 0
                })).setKeysAccessor((function () {
                  return e.value.filter((function (t) {
                    return J.indexOf(t) >= 0
                  }))
                })).setOffset("log" === P.getType() ? d["default"] : u["default"]);
              J.addColumns({
                name: ht, type: "number", calcFn: function (t, n) {
                  return e.value.reduce((function (e, a) {
                    return (i[p(a)] || {}).visibility ? e + t[n[a]] : e
                  }), 0)
                }
              });
              var pt = gt.generate(J.getData().data), mt = pt.length;
              pt.forEach((function (e, a) {
                var r = t.attachChild(U, "dataset", e.key + a + S + F), o = p(e.key), l = e.map((function (t) {
                  return [t.data[ft], t[0], t[1], t.data[J.indexOf(ht)]]
                }));
                (z = i[o] && i[o].visibility) === f.UNDEF && (z = !0), Z.stack && (it[Z.stack] = o), r.addToEnv("binDecider", O), r.addToEnv("xScale", A), r.addToEnv("yScale", P), q ? w[q + " - " + e.key] = r : w[e.key] = r, r.configure({
                  data: l,
                  datasetIndex: a,
                  seriesLength: mt,
                  aggregation: k(e.key),
                  visibility: v(z),
                  scaleX: A,
                  scaleY: P,
                  timeFormatterFn: tt,
                  legendInteracted: n.legendInteracted,
                  groupIndex: G,
                  yAxisAlign: (0, f.pluck)(L.align, "left"),
                  totalGroups: Y,
                  formatterFn: L.formatterFn,
                  prefix: L.formatLabelPrefix,
                  suffix: L.formatLabelSuffix,
                  styleConfig: D,
                  plotCosmetics: M,
                  genericCosmetics: N,
                  connectNullData: Q,
                  indices: [0, 2, 1, 3],
                  primaryColor: _.getRangeValue(o),
                  type: V,
                  series: o,
                  enableMarkers: E,
                  measures: et,
                  calculateFromContext: C,
                  seriesInfo: Object.assign({}, it),
                  prediction: T,
                  useNullStyles: !C
                })
              }))
            } else {
              var vt;
              if (e.isRange) {
                var yt, bt = (0, a["default"])([e.high || [e.high], e.low || [e.low]].filter((function (t) {
                  return !!t
                })));
                vt = m(e.high[0]) + " - " + m(e.low[0]) + " - mean", bt.forEach((function (t) {
                  yt = t.map((function (t) {
                    return J.indexOf(t)
                  })), J.addColumns({
                    type: "number", name: vt, calcFn: function (t) {
                      return (t[yt[0]] + t[yt[1]]) / 2
                    }
                  })
                }))
              }
              e.value.forEach((function (a, r) {
                var o, l, s, c = e.stack ? p(a) : e.isRange ? e.name ? e.name : e.high[0] + "-" + e.low[0] : q || p(a),
                  u = t.attachChild(U, "dataset", c + r + S + F);
                (z = i[c] && i[c].visibility) === f.UNDEF && (z = !0), "column" === V && (-1 !== (l = (o = j.filter((function (t) {
                  return i[Object.values(t)[0]].visibility
                }))).findIndex((function (t) {
                  var e = Object.keys(t)[0];
                  return q ? e === a && t[e] === q : e === a
                }))) ? s = o.length : l = f.UNDEF), e.stack && (it[e.stack] = c), u.addToEnv("binDecider", O), u.addToEnv("xScale", A), u.addToEnv("yScale", P), u.configure({
                  data: K,
                  scaleX: A,
                  scaleY: P,
                  timeFormatterFn: tt,
                  legendInteracted: n.legendInteracted,
                  groupIndex: l,
                  totalGroups: s,
                  visibility: v(z),
                  yAxisAlign: (0, f.pluck)(L.align, "left"),
                  formatterFn: L.formatterFn,
                  prefix: L.formatLabelPrefix,
                  suffix: L.formatLabelSuffix,
                  styleConfig: D,
                  aggregation: k(a),
                  plotCosmetics: M,
                  genericCosmetics: N,
                  connectNullData: Q,
                  indices: [J.indexOf(X.position), e.isRange ? J.indexOf(vt) : J.indexOf(a)],
                  primaryColor: _.getRangeValue(c),
                  type: V,
                  series: c,
                  enableMarkers: E,
                  measures: et,
                  calculateFromContext: C,
                  seriesInfo: Object.assign({}, it),
                  prediction: T,
                  useNullStyles: !C
                })
              }))
            }
          }))
        }))
      }
    }, 793: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(192)), r = n(i(207)), o = n(i(731)), l = i(193), s = n(i(794)), c = i(201), u = i(197), d = n(i(741)),
        f = n(i(800)), h = n(i(803)), g = n(i(804)), p = n(i(802)), m = n(i(805)), v = n(i(358)), y = n(i(806)),
        b = n(i(814));

      function x(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.push.apply(i, n)
        }
        return i
      }

      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2 ? x(Object(i), !0).forEach((function (e) {
            (0, a["default"])(t, e, i[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : x(Object(i)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }))
        }
        return t
      }

      var S = function (t, e) {
        return (t + e) / 2
      }, _ = function (t, e) {
        return Object.assign(t, e)
      }, C = function (t) {
        return void 0 === t && (t = ""), "" === t ? "M0,0" : t
      }, w = function (t) {
        var e = t.x, i = t.y, n = t.width;
        return {y: i, height: t.height, x: e - .0625, width: n + .125}
      }, E = function (t, e) {
        return t + "M" + e.x + "," + e.y + "L" + (e.x + e.width) + "," + e.y + "L" + (e.x + e.width) + "," + (e.y + e.height) + "L" + e.x + "," + (e.y + e.height) + "Z"
      }, D = function (t, e, i, n, a) {
        var r, o;
        return t ? (r = i - t.x, o = n - t.y, {
          pointIndex: e,
          hovered: Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)) <= 5,
          pointObj: t,
          component: a
        }) : {pointIndex: e, hovered: !1, component: a}
      };

      function M(t) {
        return "area" === t || "smooth-area" === t || "step-area" === t
      }

      function T(t) {
        return "line" === t || "smooth-line" === t || "step-line" === t
      }

      (0, c.addDep)({name: "continuousAnimation", type: "animationRule", extension: b["default"]});
      var F = function (t) {
        function e() {
          var e;
          return (e = t.call(this) || this).getHoverInConfig = function (t, e, i) {
            return void 0 === i && (i = !1), {
              hoverIndices: t,
              hovered: !0,
              radius: e ? 5.5 : 3.5,
              isDsHovered: e,
              isOtherDsHovered: i
            }
          }, e.getHoverOutConfig = function (t) {
            return {hoverIndices: t, hovered: !1}
          }, e
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.getName = function () {
          return "continuous"
        }, i.getHighlightedIndices = function (t) {
          var e = this.config.dataInfo, i = [];
          return e.forEach((function (e, n) {
            e.y <= t.minValue && e.y >= t.maxValue && i.push(n)
          })), i
        }, i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this);
          var e = this.config;
          e["default-stroke"] = "9194CC", e["default-fill"] = "9194CC", e["default-anchor-stroke"] = (0, u.convertColor)("#ffffff"), e.type = "line", e.plotStyle = {}, e.nullPlotStyle = {}, e.linePlotStyle = {}, e.nullLinePlotStyle = {}, e.areaPlotStyle = {}, e.nullAreaPlotStyle = {}, e.anchorStyle = {}, e.anchorHoverInStyle = {}, e.anchorHoverOutStyle = {}, e.anchorHighlightObj = {}, e.defaultLineStyle = {
            "stroke-opacity": 1,
            "stroke-width": 2,
            "stroke-dasharray": "none",
            fill: "none"
          }, e.defaultNullLineStyle = {
            "stroke-opacity": 1,
            "stroke-width": 2,
            "stroke-dasharray": [10, 5],
            fill: "none"
          }, e.defaultLinePredictiveStyle = {
            "stroke-opacity": 1,
            "stroke-width": 1,
            "stroke-dasharray": 5,
            fill: "none"
          }, e.defaultAreaStyle = {
            "stroke-opacity": 1,
            "stroke-width": 0,
            "fill-opacity": .6
          }, e.defaultNullAreaStyle = {
            "stroke-opacity": 1,
            "stroke-width": 0,
            "fill-opacity": .3
          }, e.defaultAreaPredictiveStyle = {
            "stroke-opacity": 1,
            opacity: .5
          }, e.defaultAnchorStyle = {"fill-opacity": 1, "stroke-width": 1}, e.willInjectNulls = !0
        }, i.configureAttributes = function (t) {
          var e = this, i = this.config, n = this.getId(), a = this.getFromEnv("getStyleDef"), r = !0;
          if (t.hasOwnProperty("hoverIndices")) t.hovered ? (i.mode = "show", i.sharedAnchorIndices = t.hoverIndices) : (i.mode = "hide", i.hideIndices = i.lastShownIndices), i.radius = t.radius, i.isDsHovered = t.isDsHovered, i.isOtherDsHovered = t.isOtherDsHovered, i.hoverMode = !0; else {
            Object.entries(t).forEach((function (n) {
              var r = n[0], o = n[1];
              if ("primaryColor" === r) {
                e.parsePrediction(t);
                var s = o, c = t.plotCosmetics, d = t.genericCosmetics, f = t.styleConfig, h = t.type, g = i.plotStyle,
                  p = i.predictiveStyleAttributes, m = i.nullPlotStyle, v = i.linePlotStyle,
                  y = i.predictiveStyleAttributesLine, b = i.predictiveStyleAttributesArea, x = i.nullLinePlotStyle,
                  k = i.areaPlotStyle, S = i.nullAreaPlotStyle, C = i.anchorStyle, w = i.anchorHoverInStyle,
                  E = i.anchorHighlightObj, D = a(d.style && d.style.plot), T = a(d.style && d.style["plot.null"]),
                  F = a(d.style && d.style["plot:hover"]), I = a(d.style && d.style["plot:highlight"]),
                  L = a(d.style && d.style.line), O = a(d.style && d.style["line.null"]),
                  A = a(d.style && d.style.area), P = a(d.style && d.style["area.null"]),
                  B = a(d.style && d.style.anchor), N = a(d.style && d.style["anchor:hover"]),
                  H = a(d.style && d.style["anchor:highlight"]), j = a(c.style && c.style.plot),
                  R = a(c.style && c.style["plot.null"]), V = a(c.style && c.style["plot.predictive"]),
                  G = a(c.style && c.style["plot:hover"]), Y = a(c.style && c.style["plot:highlight"]),
                  U = a(c.style && c.style.line), z = a(c.style && c.style["line.null"]),
                  X = a(c.style && c.style["line.predictive"]), W = a(c.style && c.style.area),
                  q = a(c.style && c.style["area.null"]), Z = a(c.style && c.style["area.predictive"]),
                  $ = a(c.style && c.style.anchor), Q = a(c.style && c.style["anchor:hover"]),
                  K = a(c.style && c.style["anchor:highlight"]), J = a(f.plot), tt = a(f["plot.null"]),
                  et = a(f["plot.predictive"]), it = a(f["plot:hover"]), nt = a(f["plot:highlight"]), at = a(f.line),
                  rt = a(f["line.null"]), ot = a(f["line.predictive"]), lt = a(f.area), st = a(f["area.null"]),
                  ct = a(f["area.predictive"]), ut = a(f.anchor), dt = a(f["anchor:hover"]),
                  ft = a(f["anchor:highlight"]);
                i.defaultLineStyle["stroke-linecap"] = M(h) ? "butt" : "round", i.defaultNullLineStyle["stroke-linecap"] = M(h) ? "butt" : "round", i.defaultLinePredictiveStyle["stroke-linecap"] = M(h) ? "butt" : "round", [v, i.defaultLineStyle, D, L, J, j, U, at].reduce(_), [x, i.defaultNullLineStyle, T, O, tt, R, z, rt].reduce(_), [y, et, V, X, ot].reduce(_), [k, i.defaultAreaStyle, D, A, J, j, W, lt].reduce(_), [S, i.defaultNullAreaStyle, T, P, tt, R, q, st].reduce(_), [b, et, V, Z, ct].reduce(_), [C, i.defaultAnchorStyle, D, B, J, j, $, ut].reduce(_), g.fill = k.fill = (0, u.convertColor)((0, l.pluck)(s, i["default-fill"]), 100 * k["fill-opacity"]), m.fill = S.fill = (0, u.convertColor)((0, l.pluck)(S.fill, s, i["default-fill"]), 100 * S["fill-opacity"]), p.fill = b.fill = (0, u.convertColor)((0, l.pluck)(b.fill, s, i["default-fill"]), 100 * b["fill-opacity"]), v.fill = "none", x.fill = "none", y.fill = "none", k.stroke = (0, u.convertColor)((0, l.pluck)(s, i["default-stroke"]), 100 * k["stroke-opacity"]), S.stroke = (0, u.convertColor)((0, l.pluck)(S.stroke, s, i["default-stroke"]), 100 * S["stroke-opacity"]), b.stroke = (0, u.convertColor)((0, l.pluck)(b.stroke, s, i["default-stroke"]), 100 * b["stroke-opacity"]), v.stroke = (0, u.convertColor)((0, l.pluck)(s, i["default-stroke"]), 100 * v["stroke-opacity"]), x.stroke = (0, u.convertColor)((0, l.pluck)(x.stroke, s, i["default-stroke"]), 100 * x["stroke-opacity"]), y.stroke = (0, u.convertColor)((0, l.pluck)(y.stroke, s, i["default-stroke"]), 100 * y["stroke-opacity"]), g.stroke = M(h) ? k.stroke : v.stroke, m.stroke = M(h) ? S.stroke : x.stroke, p.stroke = M(h) ? b.stroke : y.stroke, C.fill = (0, u.convertColor)((0, l.pluck)(s, i["default-stroke"])), C.stroke = i["default-anchor-stroke"], [w, C, F, N, G, it, Q, dt].reduce(_), [E, C, I, H, Y, nt, K, ft].reduce(_), Object.keys(Object.assign(Object.assign({}, w), E)).forEach((function (t) {
                  i.anchorHoverOutStyle[t] = C[t] || ""
                })), Object.keys(E).length || (E = i.anchorHighlightObj = (0, l.extend2)({}, i.anchorHoverOutStyle)), i.connectNullData = (0, l.pluckNumber)(i.connectNullData, c.connectnulldata, d.connectnulldata, 0), delete k["fill-opacity"], delete S["fill-opacity"], delete k["stroke-opacity"], delete S["stroke-opacity"], delete v["stroke-opacity"], delete x["stroke-opacity"], delete i.predictiveStyleAttributesArea["fill-opacity"], delete i.predictiveStyleAttributesArea["stroke-opacity"], delete i.predictiveStyleAttributesLine["stroke-opacity"]
              } else i[r] = o
            })), i.useNullStyles || (i.nullAreaPlotStyle = Object.assign({}, i.areaPlotStyle), i.nullLinePlotStyle = Object.assign({}, i.linePlotStyle)), r = (0, o["default"])(i.areaPlotStyle, i.nullAreaPlotStyle) && (0, o["default"])(i.linePlotStyle, i.nullLinePlotStyle), i.connectNullData && r ? i.willInjectNulls = !1 : i.willInjectNulls = !0;
            var s = this.getFromEnv("chart");
            i.limit = this._calculateLimits(), s.setYScaleLimit(i.scaleY.getId(), n, i.limit.y, i.limit.baseRequired), s.setXScaleLimit(i.scaleX.getId(), n, i.limit.x)
          }
        }, i.parsePrediction = function (t) {
          this.config.prediction = t.prediction || this.config.prediction, this.parsePredictiveStyleAttributes()
        }, i.parsePredictiveStyleAttributes = function () {
          var t = {}, e = this.config;
          e.predictiveStyleAttributesLine = {}, e.predictiveStyleAttributesArea = {}, e.prediction.enabled && (Object.assign(t, e.prediction.style.plot), Object.assign(e.predictiveStyleAttributesLine, e.defaultLinePredictiveStyle, e.prediction.style.plot, e.prediction.style.line), Object.assign(e.predictiveStyleAttributesArea, e.defaultAreaPredictiveStyle, e.prediction.style.plot, e.prediction.style.area)), e.predictiveStyleAttributes = t
        }, i.getPadding = function () {
          var t, e, i = this.getLinkedParent().config, n = this.config;
          return t = this.getValueFromPx(5.5), e = i.enableMarkers ? this.getValueFromPx(n.dataMarkerPadding) : 0, Math.ceil(Math.max(t, e))
        }, i._getRelevantInfo = function () {
          var t = this.config;
          return {
            firstTimeStamp: t.firstTimeStamp,
            timeStampGap: t.timeStampGap,
            dataInfo: t.dataInfo,
            fill: t.plotStyle.stroke
          }
        }, i.allocatePosition = function () {
          var t, e, i, n, a, r, o, c, u, y, b, x, k, _, D, T, F, I, L, O = this.config, A = O.indices, P = A[0],
            B = A[1], N = A[2], H = A[3], j = O.seriesInfo, R = this.getFromEnv("dateColumn"),
            V = this.getFromEnv("isUTC"), G = O.type, Y = O.data, U = O.dataInfo, z = [],
            X = this.getFromEnv("binDecider"), W = this.getFromEnv("xScale"), q = this.getFromEnv("yScale"),
            Z = X.getRangeThreshold()[2], $ = Number.parseFloat(O.nullLinePlotStyle["stroke-width"]),
            Q = Number.parseFloat(O.predictiveStyleAttributesLine["stroke-width"]),
            K = Number.parseFloat(O.linePlotStyle["stroke-width"]), J = Y.length, tt = W.getDomain(), et = tt[0],
            it = tt[1], nt = W.bins, at = R.format, rt = V ? v["default"].utcFormatter(at) : v["default"].formatter(at),
            ot = W.showPlotOverTick();
          if (O.firstTimeStamp = Y && Y[0] && Y[0][P] && Y[0][P].start, O.repositioningDone = this._isRepositioningNeeded()) {
            if ("visible" !== O.visibility) return;
            for (U = O.dataInfo = [], O.timeStampGap = Z, O.availableWidth = 0, _ = 0, D = nt.length; _ < D; _++) if (2 !== nt[_].clipType) {
              O.availableWidth = W.getRangeValue(nt[_].end) - W.getRangeValue(nt[_].start);
              break
            }
            k = +W.getDomainValue(5.5) - +W.getDomainValue(0), O.actualStartDomain = +et - k, O.actualEndDomain = +it + k, Y.forEach((function (e, s, f) {
              if (T = e[P], c = e[B], F = T.config.duration, i = T.start, n = T.end, a = S(i, n), r = f[s + 1], x = e[N], y = q.getRangeValue(x || Math.max(q.getDomain()[0], 0)), b = q.getRangeValue(c), s || (O.firstTimeStamp = i), "area" !== G || (0, d["default"])(y)) if ((0, d["default"])(c) && (0, d["default"])(b)) if (u = W.getBinIndex(i), t = {
                startDate: i,
                endDate: n,
                timeInstant: ot ? i : a,
                value: c,
                paddingInTimestamp: k,
                yBaseValue: "area" === G ? x : l.UNDEF,
                x: W.getRangeValue(new Date(i), new Date(n)),
                endXPosition: W.getRangeValue(new Date(i), new Date(n)),
                totalStackSum: (0, l.defined)(e[H]) ? e[H] : l.UNDEF,
                y: b,
                base: y
              }, I = {
                index: s,
                dataValue: c,
                start: i,
                startText: rt.format(i),
                end: n,
                endText: rt.format(n),
                binUnit: F.Unit,
                binMultiplier: F.number,
                plotType: O.type,
                timeFormatter: at,
                aggregation: O.aggregation,
                measure: O.measures[0],
                binValue: c,
                binValueFormatted: O.formatterFn && O.formatterFn({
                  value: c,
                  type: "tooltip",
                  prefix: O.prefix,
                  suffix: O.suffix
                })
              }, (L = Object.keys(j)[0]) && (I.series = L, I.seriesValue = j[L]), t.eventArgs = I, U[u] = t, r) {
                var h = W.getBinIndex(r[P].start);
                z.push(t), o = S(r[P].start, r[P].end), O.willInjectNulls && o - a - (W.clips[h] - W.clips[u]) > 1.5 * Z && z.push(null)
              } else J - s == 1 && z.push(t); else O.willInjectNulls && z.push(null)
            })), e = new s["default"](function (t) {
              switch (t) {
                case"area":
                case"smooth-area":
                case"step-area":
                  return f["default"];
                case"line":
                case"smooth-line":
                case"step-line":
                default:
                  return h["default"]
              }
            }(G)).setConnectUndefineds(O.connectNullData).setChunks({
              def: {clipAdjustment: K},
              undef: {clipAdjustment: $},
              predictive: {clipAdjustment: Q}
            }).setCurve(function (t) {
              switch (t) {
                case"smooth-line":
                case"smooth-area":
                  return m["default"];
                case"step-area":
                case"step-line":
                  return g["default"];
                case"line":
                case"area":
                default:
                  return p["default"]
              }
            }(G)).setDefined((function (t) {
              return !!t
            })).setChunkDecider((function (t) {
              return t.startDate >= O.prediction.dateMs ? "predictive" : "def"
            })).setXAccessor((function (t) {
              return t.x
            })).setYAccessor((function (t) {
              return t.y
            })), M(G) && e.setYBaseAccessor((function (t) {
              return t.base
            })), O.chunks = e.generate(z), O.path = C(O.chunks.def.path), O.clipPath = C(O.chunks.def.clipRects.map(w).reduce(E, "")), O.nullPath = C(O.chunks.undef.path), O.nullClipPath = C(O.chunks.undef.clipRects.map(w).reduce(E, "")), O.predictivePath = C(O.chunks.predictive.path), O.predictiveClipPath = C(O.chunks.predictive.clipRects.map(w).reduce(E, "")), M(G) && (O.topChunks = e.getLineChunkerYTop().generate(z), O.topPath = C(O.topChunks.def.path), O.topClipPath = C(O.topChunks.def.clipRects.map(w).reduce(E, "")), O.topNullPath = C(O.topChunks.undef.path), O.topNullClipPath = C(O.topChunks.undef.clipRects.map(w).reduce(E, "")), O.topPredictivePath = C(O.topChunks.predictive.path), O.topPredictiveClipPath = C(O.topChunks.predictive.clipRects.map(w).reduce(E, "")))
          }
        }, i._isInvalidTooltext = function (t) {
          var e = this.config;
          if (!t || t.timeInstant < e.actualStartDomain || t.timeInstant > e.actualEndDomain) return !0
        }, i._drawPlot = function () {
          var t, e = this, i = e.config, n = k({}, i.linePlotStyle, {fill: "none"}), a = i.areaPlotStyle,
            r = k({}, i.nullLinePlotStyle, {fill: "none"}), o = i.nullAreaPlotStyle,
            s = k({}, i.predictiveStyleAttributesLine, {fill: "none"}), c = i.predictiveStyleAttributesArea,
            u = i.dataInfo;
          e.addGraphicalElement({
            el: "group",
            container: {id: "meso", label: "group"},
            component: e,
            label: "group",
            id: "meso-line",
            attr: {name: "line-common-meso", visibility: i.visibility}
          }), e.addGraphicalElement({
            el: "group",
            container: {id: "thermo", label: "group"},
            component: e,
            label: "group",
            id: "thermo-line",
            attr: {name: "line-common-thermo", visibility: i.visibility}
          }), e.addGraphicalElement({
            el: "group",
            container: {id: "meso-line", label: "group"},
            component: e,
            label: "group",
            id: "meso-plot",
            attr: {name: "line-plot-meso", visibility: i.visibility}
          }, !0), e.addGraphicalElement({
            el: "group",
            container: {id: "thermo-line", label: "group"},
            component: e,
            label: "group",
            id: "thermo-plot",
            attr: {name: "line-plot-thermo", visibility: i.visibility}
          }, !0), e.addGraphicalElement({
            el: "group",
            container: {id: "thermo-line", label: "group"},
            component: e,
            label: "group",
            id: "thermo-anchor",
            attr: {name: "line-anchor-thermo", visibility: i.visibility}
          }, !0), i.connectNullData && e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "meso-plot"},
            attr: Object.assign({path: i.nullPath, "clip-path": i.nullClipPath}, T(i.type) ? r : o),
            label: "path",
            component: e
          }, !0), e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "meso-plot"},
            attr: Object.assign({path: i.path, "clip-path": i.clipPath}, T(i.type) ? n : a),
            label: "path",
            component: e
          }, !0), i.prediction.enabled && e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "meso-plot"},
            attr: Object.assign({path: i.predictivePath, "clip-path": i.predictiveClipPath}, T(i.type) ? s : c),
            label: "path",
            component: e
          }, !0), i.topPath && (i.connectNullData && e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "thermo-plot"},
            attr: Object.assign({path: i.topNullPath, "clip-path": i.topNullClipPath}, r),
            label: "topPath",
            component: e
          }, !0), e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "thermo-plot"},
            attr: Object.assign({path: i.topPath, "clip-path": i.topClipPath}, n),
            label: "topPath",
            component: e
          }, !0), i.prediction.enabled && e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "meso-plot"},
            attr: Object.assign({path: i.topPredictivePath, "clip-path": i.topPredictiveClipPath}, s),
            label: "path",
            component: e
          }, !0)), "show" === i.mode ? i.sharedAnchorIndices && i.sharedAnchorIndices.length && i.sharedAnchorIndices.forEach((function (n) {
            t = u[n], i.lastShownIndices = i.sharedAnchorIndices, t && !isNaN(t.value) && e.addGraphicalElement({
              el: "path",
              container: {label: "group", id: "thermo-anchor"},
              attr: Object.assign({
                path: (0, l.polyPathToPath)([2, t.x, t.y, i.radius, 0, 0]),
                visibility: "show"
              }, i.isDsHovered ? i.anchorHoverInStyle : i.isOtherDsHovered ? i.anchorStyle : i.anchorHighlightObj),
              id: "shared-anchor-" + n,
              label: i.dsType + "-anchor"
            })
          })) : i.hideIndices && i.hideIndices.length && i.hideIndices.forEach((function (n) {
            (t = u[n]) && !isNaN(t.value) && e.addGraphicalElement({
              el: "path",
              container: {label: "group", id: "meso-anchor"},
              attr: {visibility: "hidden"},
              id: "shared-anchor-" + n,
              label: i.dsType + "-anchor"
            })
          }))
        }, i.setHoverInEffect = function (t, e, i) {
          var n, a = this.getFromEnv("chart"), r = this.config.dataInfo;
          this.getFromEnv("animationManager").setAnimationState("mouseOver"), e || t.forEach((function (t) {
            r[t] && (n = r[t].eventArgs, a.fireChartInstanceEvent("DataPlotHighlight", n))
          })), this.setData(this.getHoverInConfig(t, e, i), !0)
        }, i._getHoveredPlot = function (t, e) {
          var i, n, a, r, o, l, s = t, c = e, u = this.getFromEnv("xScale"), d = u.getRange(),
            f = [this.getChildren("dataMarker")], h = this.config, g = "visible" === h.visibility, p = h.dataInfo,
            m = p.length, v = this.getLinkedParent().getTranslation(), y = v.x, b = v.y;
          if (c -= b, (s -= y) < d[0] || s > d[1]) return {component: this};
          if (l = u.getBinIndex(u.getDomainValue(s)), n = Math.floor(Math.max(l, 0)), a = Math.ceil(Math.min(l, m - 1)), f.forEach((function (t) {
            var e = t;
            !r && e && (e = e[0]) && (r = e._checkPointOverMarker(l, s, c, h.availableWidth))
          })), !r) for (o = a; o >= n && (i = p[o], !(r = g ? D(i, o, s, c, this) : {}).hovered); o--) ;
          return !r && (r = {}), r.hovered ? r.binIndexHovered = r.pointIndex : (r.binIndexHovered = u.getBinIndex(u.getDomainValue(s)), r.pointObj = h.dataInfo[r.binIndexHovered] || u.getBinBounds(l), r.component = this), h.binIndexHovered = r.binIndexHovered, r
        }, e
      }(y["default"]);
      e["default"] = F
    }, 794: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(694)), r = n(i(795)), o = n(i(436)), l = n(i(438)), s = n(i(437)), c = n(i(442)), u = n(i(752)),
        d = n(i(800)), f = n(i(803)), h = function (t) {
          return "undef" !== t[0]
        }, g = (0, a["default"])((function (t) {
          t[0];
          return t[1].clipRects
        })), p = function (t, e) {
          return t.x - e.x
        }, m = function (t) {
          var e = t[0], i = t[1];
          return {
            x: e.x + e.width,
            y: (0, s["default"])([e.y, i.y, e.y + e.height, i.y + i.height]),
            width: i.x - (e.x + e.width),
            height: (0, l["default"])([e.y, i.y, e.y + e.height, i.y + i.height]) - (0, s["default"])([e.y, i.y, e.y + e.height, i.y + i.height])
          }
        }, v = function (t) {
          return !(t.width < 1 || t.height < 1)
        }, y = function (t) {
          var e = t[0], i = t[1];
          return [e, Object.assign(i, {clipRects: i.clipRects.filter(v)})]
        }, b = (0, c["default"])("def"), x = function (t, e, i) {
          return i.indexOf(t) > i.indexOf(e) ? t : e
        }, k = {def: {}, undef: {}}, S = function () {
          function t(t) {
            void 0 === t && (t = d["default"]), this.generator = new t, this.defined = (0, c["default"])(!0), this.chunkDecider = b, this.chunks = k, this.connectUndefineds = !1
          }

          var e = t.prototype;
          return e.generate = function (t) {
            var e, i = this, n = this._getChunks(), a = Object.entries(n).filter(h), r = this.getDefined(),
              l = t.filter(r), s = this.getConnectUndefineds(), c = this._computeDefinedSegments(s ? t : l),
              d = this.getXAccessor(), f = this.getYAccessor(), b = this.getYBaseAccessor(), x = "", k = [];
            return x = s ? this.generator.generate(l) : this.generator.setDefined(r).generate(t), k = a.map((function (t) {
              var e = t[0], n = t[1];
              return [e, {
                path: x, clipRects: i._computeSegmentChunks(e, c).map((function (t) {
                  return function (t, e) {
                    var i = e.clipAdjustment, n = void 0 === i ? 0 : i, a = (0, o["default"])(t, f), r = a[0], l = a[1],
                      s = (0, o["default"])(t, d), c = s[0], u = s[1], h = (0, o["default"])(t, b), g = h[0], p = h[1],
                      m = (0, o["default"])([c, u]), v = m[0], y = m[1], x = (0, o["default"])([r, l, g, p]), k = x[0],
                      S = x[1], _ = k - n;
                    return {x: v, y: _, width: Math.abs(y - v), height: Math.abs(S + n - _)}
                  }(t, n)
                }))
              }]
            })), e = s ? (0, u["default"])(g(k).sort(p)).map(m).filter(v) : [], Object.fromEntries(k.map(y).concat([["undef", {
              path: s && e.length > 0 ? x : "",
              clipRects: e
            }]]))
          }, e.setXAccessor = function (t) {
            return this.generator.setXAccessor(t), this
          }, e.getXAccessor = function () {
            return this.generator.getXAccessor()
          }, e.setYAccessor = function (t) {
            return this.generator.setYAccessor(t), this
          }, e.getYAccessor = function () {
            return this.generator.getYAccessor()
          }, e.setYTopAccessor = function (t) {
            return this.generator.setYTopAccessor ? this.generator.setYTopAccessor(t) : this.generator.setYAccessor(t), this
          }, e.getYTopAccessor = function () {
            return this.generator.getYTopAccessor ? this.generator.getYTopAccessor() : this.generator.getYAccessor()
          }, e.setYBaseAccessor = function (t) {
            return this.generator.setYBaseAccessor ? this.generator.setYBaseAccessor(t) : this.generator.setYAccessor(t), this
          }, e.getYBaseAccessor = function () {
            return this.generator.getYBaseAccessor ? this.generator.getYBaseAccessor() : this.generator.getYAccessor()
          }, e.setDefined = function (t) {
            return void 0 === t && (t = (0, c["default"])(!0)), this.defined = "function" == typeof t ? t : (0, c["default"])(!!t), this
          }, e.getDefined = function () {
            return this.defined
          }, e.setCurve = function (t) {
            return this.generator.setCurve(t), this
          }, e.getCurve = function () {
            return this.generator.getCurve()
          }, e.getLineChunkerYTop = function () {
            return this._areaLineChunker().setXAccessor(this.getXAccessor()).setYAccessor(this.getYTopAccessor())
          }, e.getLineChunkerYBase = function () {
            return this._areaLineChunker().setXAccessor(this.getXAccessor()).setYAccessor(this.getYBaseAccessor())
          }, e.setChunkDecider = function (t) {
            return void 0 === t && (t = b), this.chunkDecider = t, this
          }, e.getChunkDecider = function () {
            return this.chunkDecider
          }, e.setChunks = function (t) {
            return void 0 === t && (t = k), this._userChunks = Object.assign({}, t), this.chunks = (0, r["default"])(t, k), this
          }, e.getChunks = function () {
            return this._userChunks || this.chunks
          }, e._getChunks = function () {
            return this.chunks
          }, e.setConnectUndefineds = function (t) {
            return void 0 === t && (t = !1), this.connectUndefineds = t, this
          }, e.getConnectUndefineds = function () {
            return this.connectUndefineds
          }, e._areaLineChunker = function () {
            return new t(f["default"]).setChunkDecider(this.getChunkDecider()).setChunks(this.getChunks()).setConnectUndefineds(this.getConnectUndefineds()).setCurve(this.getCurve()).setDefined(this.getDefined())
          }, e._computeDefinedSegments = function (t) {
            var e = this, i = !0;
            return t.reduce((function (t, n) {
              if (!e.defined(n)) return i = !0, t;
              i ? (t.push([n]), i = !1) : t[t.length - 1].push(n);
              return t
            }), [])
          }, e._computeSegmentChunks = function (t, e) {
            var i = this, n = Object.keys(this.chunks);
            return e.reduce((function (e, a) {
              var r = !0, o = a.reduce((function (e, o, l) {
                var s = i.getChunkDecider()(o), c = a[l - 1], u = a[l + 1];
                if (s === t) r ? (e.push([o]), r = !1) : e[e.length - 1].push(o); else {
                  var d = !1;
                  if (null != c) x(i.getChunkDecider()(c), s, n) === t && (r ? (e.push([o]), r = !1) : e[e.length - 1].push(o), d = !0, r = !1);
                  if (d || null == u) d || (r = !0); else x(s, i.getChunkDecider()(u), n) === t ? (e.push([o]), d = !0, r = !1) : r = !0
                }
                return e
              }), []);
              return o && o.length ? e.concat(o) : e
            }), [])
          }, t
        }();
      e["default"] = S
    }, 800: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(801)), r = n(i(442)), o = n(i(802)), l = n(i(803)), s = function () {
        function t() {
          this.xTopAccessor = function (t) {
            return t[0]
          }, this.xBaseAccessor = null, this.yTopAccessor = (0, r["default"])(0), this.yBaseAccessor = function (t) {
            return t[1]
          }, this.isDefined = (0, r["default"])(!0), this.Curve = o["default"], this.ctx = null, this._output = null
        }

        var e = t.prototype;
        return e.generate = function (t) {
          void 0 === t && (t = []);
          var e, i, n, r, o, l = t.length, s = !1, c = new Array(l), u = new Array(l);
          for (null !== this.ctx && "undefined" != typeof this.ctx || (o = new a["default"], this._output = new this.Curve(o)), e = 0; e <= l; ++e) {
            if (r = t[e], !(e < l && this.isDefined(r, e, t)) === s) if (s = !s) i = e, this._output.areaStart(), this._output.lineStart(); else {
              for (this._output.lineEnd(), this._output.lineStart(), n = e - 1; n >= i; --n) this._output.point(c[n], u[n]);
              this._output.lineEnd(), this._output.areaEnd()
            }
            s && (c[e] = +this.xTopAccessor(r, e, t), u[e] = +this.yTopAccessor(r, e, t), this._output.point(this.xBaseAccessor ? +this.xBaseAccessor(r, e, t) : c[e], this.yBaseAccessor ? +this.yBaseAccessor(r, e, t) : u[e]))
          }
          if (o) return this._output = null, o.toString()
        }, e.setXAccessor = function (t) {
          return void 0 === t && (t = function (t) {
            return t[0]
          }), this.xTopAccessor = "function" == typeof t ? t : (0, r["default"])(+t), this.xBaseAccessor = null, this
        }, e.getXAccessor = function () {
          return this.xTopAccessor
        }, e.setXTopAccessor = function (t) {
          return void 0 === t && (t = function (t) {
            return t[0]
          }), this.xTopAccessor = "function" == typeof t ? t : (0, r["default"])(+t), this
        }, e.getXTopAccessor = function () {
          return this.xTopAccessor
        }, e.setXBaseAccessor = function (t) {
          return this.xBaseAccessor = null == t ? null : "function" == typeof t ? t : (0, r["default"])(+t), this
        }, e.getXBaseAccessor = function () {
          return this.xBaseAccessor
        }, e.setYAccessor = function (t) {
          return void 0 === t && (t = function (t) {
            return t[1]
          }), this.yTopAccessor = "function" == typeof t ? t : (0, r["default"])(+t), this.yBaseAccessor = null, this
        }, e.getYAccessor = function () {
          return this.yTopAccessor
        }, e.setYTopAccessor = function (t) {
          return void 0 === t && (t = function (t) {
            return t[1]
          }), this.yTopAccessor = "function" == typeof t ? t : (0, r["default"])(+t), this
        }, e.getYTopAccessor = function () {
          return this.yTopAccessor
        }, e.setYBaseAccessor = function (t) {
          return this.yBaseAccessor = null == t ? null : "function" == typeof t ? t : (0, r["default"])(+t), this
        }, e.getYBaseAccessor = function () {
          return this.yBaseAccessor
        }, e.setDefined = function (t) {
          return void 0 === t && (t = (0, r["default"])(!0)), this.isDefined = "function" == typeof t ? t : (0, r["default"])(!!t), this
        }, e.getDefined = function () {
          return this.isDefined
        }, e.setCurve = function (t) {
          return void 0 === t && (t = o["default"]), this.Curve = t, null !== this.ctx && "undefined" != typeof this.ctx && (this._output = new this.Curve(this.ctx)), this
        }, e.getCurve = function () {
          return this.Curve
        }, e.setContext = function (t) {
          return null == t ? (this.ctx = null, this._output = this._ctx) : (this.ctx = t, this._output = new this.Curve(this.ctx)), this
        }, e.getContext = function () {
          return this.ctx
        }, e._areaLine = function () {
          return (new l["default"]).setDefined(this.isDefined).setCurve(this.Curve).setContext(this.ctx)
        }, e.getLineXBase = function () {
          return this._areaLine().setXAccessor(this.xTopAccessor).setYAccessor(this.yTopAccessor)
        }, e.getLineYBase = function () {
          return this._areaLine().setXAccessor(this.xTopAccessor).setYAccessor(this.yTopAccessor)
        }, e.getLineYTop = function () {
          return this._areaLine().setXAccessor(this.xTopAccessor).setYAccessor(this.yTopAccessor)
        }, e.getLineXTop = function () {
          return this._areaLine().setXAccessor(this.xBaseAccessor).setYAccessor(this.yBaseAccessor)
        }, t
      }();
      e["default"] = s
    }, 801: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      var n = Math.PI, a = 2 * n, r = a - 1e-6, o = function () {
        function t() {
          this._clear()
        }

        var e = t.prototype;
        return e.moveTo = function (t, e) {
          this._x0 = this._x1 = +t, this._y0 = this._y1 = +e, this.pathStr += "M" + this._x0 + "," + this._y0
        }, e.lineTo = function (t, e) {
          this._x1 = +t, this._y1 = +e, this.pathStr += "L" + this._x1 + "," + this._y1
        }, e.quadraticCurveTo = function (t, e, i, n) {
          this._x1 = +i, this._y1 = +n;
          var a = +t, r = +e;
          this.pathStr += "Q" + a + "," + r + "," + this._x1 + "," + this._y1
        }, e.bezierCurveTo = function (t, e, i, n, a, r) {
          this._x1 = +a, this._y1 = +r;
          var o = +t, l = +e, s = +i, c = +n;
          this.pathStr += "C" + o + "," + l + "," + s + "," + c + "," + this._x1 + "," + this._y1
        }, e.rect = function (t, e, i, n) {
          var a = +i, r = +n;
          this._x0 = this._x1 = +t, this._y0 = this._y1 = +e, this.pathStr += "M" + this._x0 + "," + this._y0 + "h" + a + "v" + r + "h" + -a + "Z"
        }, e.arcTo = function (t, e, i, a, r) {
          var o, l, s, c, u, d, f, h, g, p, m, v, y, b, x, k, S = +t, _ = +i, C = +e, w = +a, E = +r;
          s = _ - S, c = w - C, f = (u = (x = this._x1) - S) * u + (d = (k = this._y1) - C) * d, E = Math.max(E, 0), null === this._x1 ? (this._x1 = S, this._y1 = C, this.pathStr += "M" + this._x1 + "," + this._y1) : f > 1e-6 && (Math.abs(d * s - c * u) > 1e-6 && E ? (p = s * s + c * c, g = (o = _ - x) * o + (l = w - k) * l, m = Math.sqrt(p), h = Math.sqrt(f), v = (b = E * Math.tan((n - Math.acos((p + f - g) / (2 * m * h))) / 2)) / h, y = b / m, Math.abs(v - 1) > 1e-6 && (this.pathStr += "L" + (S + v * u) + "," + (C + v * d)), this._x1 = S + y * s, this._y1 = C + y * c, this.pathStr += "A" + E + "," + E + ",0,0," + +(d * o > u * l) + "," + this._x1 + "," + this._y1) : (this._x1 = S, this._y1 = C, this.pathStr += "L" + this._x1 + "," + this._y1))
        }, e.arc = function (t, e, i, o, l, s) {
          void 0 === s && (s = !1);
          var c = +t, u = +e, d = +i, f = +o, h = +l, g = !!s, p = d * Math.cos(f), m = d * Math.sin(f), v = c + p,
            y = u + m, b = Number(!g), x = g ? f - h : h - f;
          Math.max(d, 0), null === this._x1 ? this.pathStr += "M" + v + "," + y : (Math.abs(this._x1 - v) > 1e-6 || Math.abs(this._y1 - y) > 1e-6) && (this.pathStr += "L" + v + "," + y), d && (x < 0 && (x = x % a + a), x > r ? (this._x1 = v, this._y1 = y, this.pathStr += "A" + d + "," + d + ",0,1," + b + "," + (c - p) + "," + (u - m), this.pathStr += "A" + d + "," + d + ",0,1," + b + "," + this._x1 + "," + this._y1) : x > 1e-6 && (this._x1 = c + d * Math.cos(h), this._y1 = u + d * Math.sin(h), this.pathStr += "A" + d + "," + d + ",0," + +(x >= n) + "," + b + "," + this._x1 + "," + this._y1))
        }, e.closePath = function () {
          null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this.pathStr += "Z")
        }, e.toString = function () {
          return this.pathStr
        }, e._clear = function () {
          this._x0 = this._y0 = this._x1 = this._y1 = null, this.pathStr = ""
        }, t
      }();
      e["default"] = o
    }, 802: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      var n = function () {
        function t(t) {
          this._ctx = t
        }

        var e = t.prototype;
        return e.areaStart = function () {
          this._line = 0
        }, e.areaEnd = function () {
          this._line = NaN
        }, e.lineStart = function () {
          this._point = 0
        }, e.lineEnd = function () {
          (this._line || 0 !== this._line && 1 === this._point) && this._ctx.closePath(), this._line = 1 - this._line
        }, e.point = function (t, e) {
          var i = +t, n = +e;
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._ctx.lineTo(i, n) : this._ctx.moveTo(i, n);
              break;
            case 1:
              this._point = 2;
            default:
              this._ctx.lineTo(i, n)
          }
        }, t
      }();
      e["default"] = n
    }, 803: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(801)), r = n(i(442)), o = n(i(802)), l = function () {
        function t() {
          this.xAccessor = function (t) {
            return t[0]
          }, this.yAccessor = function (t) {
            return t[1]
          }, this.isDefined = (0, r["default"])(!0), this.Curve = o["default"], this.ctx = null, this._output = null
        }

        var e = t.prototype;
        return e.generate = function (t) {
          void 0 === t && (t = []);
          var e, i, n, r = 0, o = t.length;
          for (null !== this.ctx && "undefined" != typeof this.ctx || (n = new a["default"], this._output = new this.Curve(n)), r = 0; r <= o; ++r) e = t[r], i ? r < o && this.isDefined(e, r, t) ? this._output.point(this.xAccessor(e, r, t), this.yAccessor(e, r, t)) : (this._output.lineEnd(), i = !1) : r < o && this.isDefined(e, r, t) && (i = !0, this._output.lineStart(), this._output.point(this.xAccessor(e, r, t), this.yAccessor(e, r, t)));
          if (n) return this._output = null, n.toString()
        }, e.setXAccessor = function (t) {
          return void 0 === t && (t = function (t) {
            return t[0]
          }), this.xAccessor = "function" == typeof t ? t : (0, r["default"])(+t), this
        }, e.getXAccessor = function () {
          return this.xAccessor
        }, e.setYAccessor = function (t) {
          return void 0 === t && (t = function (t) {
            return t[1]
          }), this.yAccessor = "function" == typeof t ? t : (0, r["default"])(+t), this
        }, e.getYAccessor = function () {
          return this.yAccessor
        }, e.setDefined = function (t) {
          return void 0 === t && (t = (0, r["default"])(!0)), this.isDefined = "function" == typeof t ? t : (0, r["default"])(!!t), this
        }, e.getDefined = function () {
          return this.isDefined
        }, e.setCurve = function (t) {
          return void 0 === t && (t = o["default"]), this.Curve = t, "undefined" == typeof this.ctx && null === this.ctx || (this._output = new this.Curve(this.ctx)), this
        }, e.getCurve = function () {
          return this.Curve
        }, e.setContext = function (t) {
          return null == t ? (this.ctx = null, this._output = this.ctx) : (this.ctx = t, this._output = new this.Curve(this.ctx)), this
        }, e.getContext = function () {
          return this.ctx
        }, t
      }();
      e["default"] = l
    }, 804: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = e.StepAfter = e.StepBefore = void 0;
      var a = n(i(207)), r = function () {
        function t(t, e) {
          void 0 === e && (e = .5), this._ctx = t, this._factor = e
        }

        var e = t.prototype;
        return e.areaStart = function () {
          this._line = 0
        }, e.areaEnd = function () {
          this._line = NaN
        }, e.lineStart = function () {
          this._x = this._y = NaN, this._point = 0
        }, e.lineEnd = function () {
          this._factor > 0 && this._factor < 1 && 2 === this._point && this._ctx.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._ctx.closePath(), this._line >= 0 && (this._factor = 1 - this._factor, this._line = 1 - this._line)
        }, e.point = function (t, e) {
          var i = +t, n = +e;
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._ctx.lineTo(i, n) : this._ctx.moveTo(i, n);
              break;
            case 1:
              this._point = 2;
            default:
              if (this._factor <= 0) this._ctx.lineTo(this._x, n), this._ctx.lineTo(i, n); else {
                var a = this._x * (1 - this._factor) + i * this._factor;
                this._ctx.lineTo(a, this._y), this._ctx.lineTo(a, n)
              }
          }
          this._x = i, this._y = n
        }, t
      }(), o = function (t) {
        function e(e) {
          return t.call(this, e, 1) || this
        }

        return (0, a["default"])(e, t), e
      }(r);
      e.StepAfter = o;
      var l = function (t) {
        function e(e) {
          return t.call(this, e, 0) || this
        }

        return (0, a["default"])(e, t), e
      }(r);
      e.StepBefore = l;
      var s = r;
      e["default"] = s
    }, 805: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      var n = function (t) {
        return t < 0 ? -1 : 1
      }, a = function () {
        function t(t) {
          this._ctx = t
        }

        var e = t.prototype;
        return e.areaStart = function () {
          this._line = 0
        }, e.areaEnd = function () {
          this._line = NaN
        }, e.lineStart = function () {
          this._x0 = this._x1 = NaN, this._y0 = this._y1 = NaN, this._t0 = NaN, this._point = 0
        }, e.lineEnd = function () {
          switch (this._point) {
            case 2:
              this._ctx.lineTo(this._x1, this._y1);
              break;
            case 3:
              this._monotoneCurveTo(this._t0, this._slope2(this._t0))
          }
          (this._line || 0 !== this._line && 1 === this._point) && this._ctx.closePath(), this._line = 1 - this._line
        }, e.point = function (t, e) {
          var i = NaN, n = +t, a = +e;
          if (n !== this._x1 || a !== this._y1) {
            switch (this._point) {
              case 0:
                this._point = 1, this._line ? this._ctx.lineTo(n, a) : this._ctx.moveTo(n, a);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3, i = this._slope3(n, a), this._monotoneCurveTo(this._slope2(i), i);
                break;
              default:
                i = this._slope3(n, a), this._monotoneCurveTo(this._t0, i)
            }
            this._x0 = this._x1, this._x1 = n, this._y0 = this._y1, this._y1 = a, this._t0 = i
          }
        }, e._monotoneCurveTo = function (t, e) {
          var i = this._x0, n = this._y0, a = this._x1, r = this._y1, o = (a - i) / 3;
          this._ctx.bezierCurveTo(i + o, n + o * t, a - o, r - o * e, a, r)
        }, e._slope2 = function (t) {
          var e = this._x1 - this._x0;
          return e ? (3 * (this._y1 - this._y0) / e - t) / 2 : t
        }, e._slope3 = function (t, e) {
          var i = this._x1 - this._x0, a = t - this._x1, r = (this._y1 - this._y0) / (i || a < 0 && -0),
            o = (e - this._y1) / (a || i < 0 && -0), l = (r * a + o * i) / (i + a);
          return (n(r) + n(o)) * Math.min(Math.abs(r), Math.abs(o), .5 * Math.abs(l)) || 0
        }, t
      }();
      e["default"] = a
    }, 806: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = i(193), l = n(i(437)), s = n(i(438)), c = i(201), u = n(i(741)),
        d = n(i(212)), f = n(i(358)), h = n(i(807)), g = n(i(808)), p = n(i(436)), m = function (t, e) {
          return Object.assign(t, e)
        }, v = function (t) {
          return [t.start, t.end]
        }, y = function (t, e, i, n) {
          return t && e <= 0 || i[1] < n[0] || i[0] > n[1]
        }, b = o.hasTouch ? o.TOUCH_THRESHOLD_PIXELS : o.CLICK_THRESHOLD_PIXELS;
      (0, c.addDep)({name: "timeseriesColumnAnimation", type: "animationRule", extension: h["default"]});
      var x = function (t) {
        function e() {
          var e;
          e = t.call(this) || this;
          var i = (0, a["default"])(e), n = e.config;
          return e.registerFactory("markerFactory", g["default"]), e._getFirstValidData = function (t, e) {
            var i, n = t.length;
            for (i = 0; i < n; i++) if (t[0] && t[0][e] !== o.UNDEF) return t[0][e];
            return o.UNDEF
          }, n.hoverInfo = [], e.addEventListener("beforeremove", (function () {
            i.getFromEnv("chart").setXScaleLimit(n.scaleX.getId(), i.getId()), i.getFromEnv("chart").setYScaleLimit(n.scaleY.getId(), i.getId())
          })), e
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.getHoverInConfig = function (t) {
          return {style: this.config.hoverInStyle, hoverIndices: t, hovered: !0}
        }, i.getHighlightConfig = function (t) {
          return {style: this.config.highlightStyle, hoverIndices: t, hovered: !1}
        }, i.getHoverOutConfig = function (t) {
          return {style: this.config.hoverOutStyle, hoverIndices: t, hovered: !1}
        }, i.getType = function () {
          return "dataset"
        }, i.getName = function () {
          return "timeseriesColumn"
        }, i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this);
          var e = this.config;
          e["default-plotSpacePercent"] = 30, e.visibility = "visible", e.prevBoundaryInfo = {}, e.dataMarkerPadding = 0, e.style = {}, e.hoverInStyle = {}, e.highlightStyle = {}, e.hoverOutStyle = {}, e.defaultStyle = {
            "stroke-width": 1,
            "fill-opacity": 1,
            "stroke-opacity": 1,
            opacity: 1
          }, e.defaultPredictedDataStyle = {
            "stroke-width": 1,
            "fill-opacity": .2,
            "stroke-opacity": 1,
            "stroke-dasharray": 5
          }, e.defaultHoverInStyle = {opacity: .8}, e.defaultHighlightStyle = {opacity: .8}, e.dataInfo = [], e.prevPerBinYExtents = [], e.dataIndices = [1, 2]
        }, i.configureAttributes = function (t) {
          var e, i = this.getFromEnv("chart-attrib"), n = this.config;
          if (t.hasOwnProperty("hoverIndices")) n.hoverInfo.push(t), n.hoverMode = !0; else {
            for (e in t) if ("primaryColor" === e) {
              var a = t.plotCosmetics, r = t.genericCosmetics, l = t[e], s = void 0, c = this.getFromEnv("getStyleDef"),
                u = c(r.style && r.style.plot), d = c(r.style && r.style["plot:hover"]),
                f = c(r.style && r.style["plot:highlight"]), h = c(a.style && a.style.plot),
                g = c(t.styleConfig && t.styleConfig.plot), p = c(a.style && a.style.column),
                v = c(t.styleConfig && t.styleConfig.column), y = c(a.style && a.style["plot:hover"]),
                b = c(a.style && a.style["plot:highlight"]), x = c(t.styleConfig && t.styleConfig["plot:hover"]),
                k = c(t.styleConfig && t.styleConfig["plot:highlight"]), S = c(a.style && a.style["column:hover"]),
                _ = c(a.style && a.style["column:highlight"]), C = c(t.styleConfig && t.styleConfig["column:hover"]),
                w = c(t.styleConfig && t.styleConfig["column:highlight"]), E = n.style, D = n.hoverOutStyle,
                M = n.hoverInStyle, T = n.highlightStyle;
              for (s in[E, n.defaultStyle, u, h, g, p, v].reduce(m), [M, n.defaultHoverInStyle, d, y, S, x, C].reduce(m), [T, n.defaultHighlightStyle, f, b, _, k, w].reduce(m), E.stroke = (0, o.convertColor)((0, o.pluck)(E.stroke, l, n["default-stroke"]), 100 * (0, o.pluckNumber)(E["stroke-opacity"], 1)), E.fill = (0, o.convertColor)((0, o.pluck)(l, E.stroke, n["default-fill"]), 100 * (0, o.pluckNumber)(E["fill-opacity"], 1)), M.fill && (M.fill = (0, o.convertColor)(M.fill, 100 * (0, o.pluckNumber)(M["fill-opacity"], E["fill-opacity"]))), M.stroke && (M.stroke = (0, o.convertColor)(M.stroke, 100 * (0, o.pluckNumber)(M["stroke-opacity"], E["stroke-opacity"]))), T.fill && (T.fill = (0, o.convertColor)(T.fill, 100 * (0, o.pluckNumber)(T["fill-opacity"], E["fill-opacity"]))), T.stroke && (T.stroke = (0, o.convertColor)(T.stroke, 100 * (0, o.pluckNumber)(T["stroke-opacity"], E["stroke-opacity"]))), Object.assign(Object.assign({}, M), T)) D[s] = (0, o.pluck)(E[s], "");
              (0, o.defined)(D["stroke-dasharray"]) && (D["stroke-dasharray"] = null), n.plotBorderThickness = E["stroke-width"], n.opacity = E.opacity, n["fill-opacity"] = E["fill-opacity"], n["stroke-opacity"] = E["stroke-opacity"], delete E.opacity, delete E["fill-opacity"], delete E["stroke-opacity"]
            } else n[e] = t[e];
            n.plotSpacePercent = (0, o.pluckNumber)(i.plotspacepercent, n["default-plotSpacePercent"]), n.limit = this._calculateLimits();
            var F = this.getFromEnv("chart");
            F.setYScaleLimit(n.scaleY.getId(), this.getId(), n.limit.y, n.limit.baseRequired), F.setXScaleLimit(n.scaleX.getId(), this.getId(), n.limit.x)
          }
          this.parsePrediction(t)
        }, i.getValueFromPx = function (t) {
          var e = this.getFromEnv("binDecider").getBinRange(), i = e[1] - e[0], n = this.getFromEnv("chart"),
            a = this.config.calculateFromContext ? n.getContextLimit() : n.getFocusLimit();
          return t * (a[1] - a[0]) / (i - t)
        }, i.getPadding = function () {
          var t = this.config, e = t.scaleX, i = this.getFromEnv("binDecider").getRangeThreshold(), n = 0,
            a = this.getValueFromPx(t.dataMarkerPadding);
          return e.showPlotOverTick() && (n = i[2] / 2), Math.ceil(Math.max(n, a))
        }, i._calculateLimits = function () {
          var t, e = this.config, i = e.indices, n = e.data, a = e.type, r = e.scaleY, c = e.scaleX,
            u = e.calculateFromContext, d = /continuous/.test(this.getName()), f = c.showPlotOverTick(), h = {},
            g = n[0], p = n[n.length - 1], m = "log" === r.getType(), b = "visible" === this.config.visibility,
            x = this.getFromEnv("chart"), k = u ? x.getContextLimit() : x.getFocusLimit();
          return t = this.getPadding(), h.x = f ? [g && g[i[0]].start - t, p && p[i[0]].start + t] : d ? [g && (g[i[0]].start + g[i[0]].end) / 2 - t, p && (p[i[0]].start + p[i[0]].end) / 2 + t] : [g && g[i[0]].start - t, p && p[i[0]].end - t], h.y = b ? [(0, l["default"])(n, (function (t) {
            var e = (0, o.pluckNumber)(t[i[2]], t[i[1]]), n = v(t[0]);
            return y(m, e, n, k) ? null : e
          })), (0, s["default"])(n, (function (t) {
            var e = t[i[1]], n = v(t[0]);
            return y(m, e, n, k) ? null : e
          }))] : o.UNDEF, h.baseRequired = !/line/.test(a), h
        }, i.draw = function () {
          this._createContainer(), this._drawPlot(), this.config.hoverInfo = [], this.config.hoverMode = !1, this.config.repositioningDone = !1
        }, i._createContainer = function () {
          this.addGraphicalElement({
            el: "group",
            container: {id: "meso", label: "group", isParent: !0},
            component: this,
            label: "group",
            id: "meso",
            attr: {name: "dataset-meso"}
          }, !0), this.addGraphicalElement({
            el: "group",
            container: {id: "thermo", label: "group", isParent: !0},
            component: this,
            label: "group",
            id: "thermo",
            attr: {name: "dataset-thermo", "clip-path": this.getFromEnv("dsGroupclipPath")}
          }, !0)
        }, i.isDrawingRequired = function () {
          var t = this.config;
          if (t.repositioningDone || t.hoverMode) return !0
        }, i._drawPlot = function () {
          var t, e = this, i = e.config, n = i.style, a = (0, o.defined)(i.opacity),
            r = (0, o.defined)(i["stroke-opacity"]), l = (0, o.defined)(i["fill-opacity"]), s = !1,
            c = e.config.predictiveStyleAttributes, d = (0, o.defined)(c.predictiveOpacity),
            f = (0, o.defined)(c.predictiveStrokeOpacity), h = (0, o.defined)(c.predictiveFillOpacity), g = i.dataInfo;
          e.addGraphicalElement({
            el: "group",
            container: {id: "meso", label: "group"},
            component: e,
            label: "group",
            id: "meso-plot",
            attr: Object.assign({name: "column-plot-meso", visibility: i.visibility}, n)
          }, !0), e.addGraphicalElement({
            el: "group",
            container: {id: "meso", label: "group"},
            component: e,
            label: "group",
            id: "meso-plot-predictive",
            attr: Object.assign({name: "column-predictive-plot-meso", visibility: i.visibility}, n, c)
          }, !0), g.forEach((function (n, p) {
            ((0, u["default"])(n.value) || (0, u["default"])(n.high) && (0, u["default"])(n.low)) && (t = {
              x: n.x,
              y: n.y,
              width: n.width,
              height: n.height
            }, s = e.isPlotPredictive(n), a && (t.opacity = i.opacity), r && (t["stroke-opacity"] = i["stroke-opacity"]), l && (t["fill-opacity"] = i["fill-opacity"]), n.style && Object.assign(t, n.style), s && (d && (t.opacity = c.predictiveOpacity), f && (t["stroke-opacity"] = c.predictiveStrokeOpacity), h && (t["fill-opacity"] = c.predictiveFillOpacity)), e.addGraphicalElement({
              el: "rect",
              container: {label: "group", id: s ? "meso-plot-predictive" : "meso-plot"},
              props: {dataLength: g.length},
              label: "rect",
              attr: t,
              component: e,
              index: p
            }, !0), n.style = o.UNDEF)
          })), i.hoverInfo = []
        }, i._isRepositioningNeeded = function () {
          var t, e = this.config, i = this.getFromEnv("xScale"), n = this.getFromEnv("yScale"), a = i.getDomain(),
            r = a[0], o = a[1], l = i.getRange(), s = l[0], c = l[1], u = n.getDomain(), d = u[0], f = u[1],
            h = n.getRange(), g = h[0], p = h[1], m = e.prevBoundaryInfo, v = this.hasDataYExtentChangedInAnyBin();
          return (+r != +m.xDomainStart || +o != +m.xDomainEnd || +d != +m.yDomainStart || +f != +m.yDomainEnd || s !== m.xRangeStart || c !== +m.xRangeEnd || g !== m.yRangeStart || p !== +m.yRangeEnd || e.prevVisibility !== e.visibility || e.legendInteracted || v) && (e.legendInteracted = !1, t = !0, e.prevBoundaryInfo = {
            xDomainStart: r,
            xDomainEnd: o,
            xRangeStart: s,
            xRangeEnd: c,
            yDomainStart: d,
            yDomainEnd: f,
            yRangeStart: g,
            yRangeEnd: p
          }, e.prevVisibility = e.visibility), t
        }, i.hasDataYExtentChangedInAnyBin = function () {
          var t = this.config, e = t.data, i = t.prevPerBinYExtents, n = this.config.dataIndices,
            a = e.map((function (t) {
              return (0, p["default"])(n.map((function (e) {
                return t[e]
              })), Number)
            }));
          if (a.length === i.length) {
            var r = a.some((function (t, e) {
              var n = i[e];
              return t[0] !== n[0] || t[1] !== n[1]
            }));
            return t.prevPerBinYExtents = a, r
          }
          return t.prevPerBinYExtents = a, !0
        }, i.allocatePosition = function () {
          var t, e, i, n, a, r, l, s, c, d, h, g, p, m, v, y, b, x, k, S, _, C, w, E, D, M = this.config, T = M.indices,
            F = T[0], I = T[1], L = T[2], O = T[3], A = this.getFromEnv("binDecider"), P = this.getFromEnv("xScale"),
            B = this.getFromEnv("yScale"), N = M.dataInfo, H = M.seriesInfo, j = this.getFromEnv("dateColumn"),
            R = this.getFromEnv("isUTC"), V = M.groupIndex || 0, G = M.totalGroups || 1, Y = M.data, U = j.format,
            z = R ? f["default"].utcFormatter(U) : f["default"].formatter(U), X = P.bins, W = M.plotBorderThickness,
            q = M.fillColor === M.strokeColor && W > 0, Z = A.getRangeThreshold()[2], $ = P.getDomain(), Q = $[0],
            K = $[1];
          if (M.firstTimeStamp = Y && Y[0] && Y[0][F] && Y[0][F].start, M.repositioningDone = this._isRepositioningNeeded()) {
            if ("visible" !== M.visibility) return;
            for (N = M.dataInfo = [], M.availableWidth = m = 0, C = 0, w = X.length; C < w; C++) if (2 !== X[C].clipType) {
              M.availableWidth = m = P.getRangeValue(X[C].end) - P.getRangeValue(X[C].start);
              break
            }
            M.timeStampGap = Z, p = Math.max(m * (1 - M.plotSpacePercent / 100), 1), e = p / G, S = Math.round(G / 2), _ = G % 2 == 0 ? 0 : .5, h = S - V > 0 ? -e * (S - V - _) : e * (V - S + _), E = +P.getDomainValue(m * (M.plotSpacePercent / 200)) - +P.getDomainValue(0), M.actualStartDomain = +Q + E, M.actualEndDomain = +K - E, q && (e = Math.max(e - W, 1)), Y.forEach((function (c, f) {
              i = c[F], n = c[I], v = i.config.duration, x = i.start, k = i.end, f || (M.firstTimeStamp = i.start), r = c[L], s = B.getRangeValue(r || Math.max(B.getDomain()[0], 0)), l = B.getRangeValue(n), (0, u["default"])(n) && (0, u["default"])(s) && (0, u["default"])(l) && (a = P.getRangeValue(new Date(i.start), new Date(i.end)), q && (a += W / 2), g = (a += h) + e, t = Math.abs(s - l), D = {
                startDate: x,
                endDate: k,
                value: n,
                yBaseValue: r,
                yBase: s,
                x: a,
                endXPosition: g,
                y: l > s ? s : l,
                width: e,
                height: t,
                totalStackSum: (0, o.defined)(c[O]) ? c[O] : o.UNDEF,
                eventArgs: {index: f, dataValue: n}
              }, y = {
                index: f,
                dataValue: n,
                start: x,
                startText: z.format(x),
                end: k,
                endText: z.format(k),
                binUnit: v.Unit,
                binMultiplier: v.number,
                plotType: M.type,
                timeFormatter: U,
                aggregation: M.aggregation,
                measure: M.measures[0],
                binValue: n,
                binValueFormatted: M.formatterFn && M.formatterFn({
                  value: n,
                  type: "tooltip",
                  prefix: M.prefix,
                  suffix: M.suffix
                })
              }, (b = Object.keys(H)[0]) && (y.series = b, y.seriesValue = H[b]), D.eventArgs = y, d = P.getBinIndex(i.start), N[d] = D)
            }))
          }
          (c = M.hoverInfo) && c.forEach((function (t) {
            t.hoverIndices.forEach((function (e) {
              "object" == typeof N[e] && "object" == typeof t.style && (N[e].style = (0, o.extend2)(N[e].style, t.style))
            }))
          }))
        }, i._getRelevantInfo = function () {
          var t = this.config;
          return {
            firstTimeStamp: t.firstTimeStamp,
            timeStampGap: t.timeStampGap,
            dataInfo: t.dataInfo,
            fill: t.style.stroke
          }
        }, i._getHoveredPlot = function (t, e) {
          var i, n, a, r, o = t, l = e, s = this.getFromEnv("xScale"), c = s.getRange(), u = this.getLinkedParent(),
            d = this.config, f = "visible" === d.visibility, h = [this.getChildren("dataMarker")],
            g = u.getTranslation(), p = g ? g.x : 0, m = g ? g.y : 0;
          return l -= m, (o -= p) < c[0] || o > c[1] ? {component: this} : (r = s.getBinIndex(s.getDomainValue(o)), d.timeStampGap <= 1 && -1 === r && (r = 0), h.forEach((function (t) {
            !n && t && (i = t[0], n = i._checkPointOverMarker(r, o, l, d.availableWidth))
          })), (a = n) || (a = f ? this._checkPointerOverColumn(r, o, l) : {}), a.hovered ? a.binIndexHovered = a.pointIndex : (a.binIndexHovered = s.getBinIndex(s.getDomainValue(o)), a.pointObj = d.dataInfo[a.binIndexHovered] || s.getBinBounds(r), a.component = this), d.binIndexHovered = a.binIndexHovered, a)
        }, i._getHoveredBin = function () {
          return this.config.binIndexHovered
        }, i._getTooltext = function (t, e, i) {
          var n, a = this.config, r = this.getName(), l = function (t) {
              switch (t) {
                case"line":
                case"smooth-line":
                case"step-line":
                  return "line";
                case"area":
                case"smooth-area":
                case"step-area":
                case"area-range":
                  return "area"
              }
            }(a.type), s = this.getFromEnv("tooltipStyle").body,
            c = this.getFromEnv("tooltipStyle").container["line-height"] || 1, d = 1 === c ? s["font-size"] : c,
            f = a.dataInfo[i], h = t ? e ? 1 : .5 : 1,
            g = "continuous" === r ? "line" === l ? a.plotStyle.stroke : a.plotStyle.fill : a.style.fill;
          return this._isInvalidTooltext(f) ? "" : (f.tooltipValue || (n = (0, u["default"])(f.yBaseValue) ? f.yBaseValue >= 0 ? f.value - f.yBaseValue : f.yBaseValue - f.value : f.value, f.tooltipValue = (0, u["default"])(n) ? a.formatterFn({
            value: n,
            type: "tooltip",
            prefix: a.prefix,
            suffix: a.suffix
          }) : ""), "<div style='margin-top:6px; overflow: hidden; opacity:" + h + "'>\n      <span style='float:left; height: " + d + "; width: " + d + "; position:relative;margin-right: 2px;'>\n        <span style='display:block;height:64%;width:64%;position:absolute;top:50%;transform:translateY(-50%);background-color:" + g + ";'></span>\n      </span>\n      <div style='float:left;'>" + (0, o.parseUnsafeString)(a.series) + "&nbsp</div>\n      <div style='float: right;'>&nbsp" + (f.tooltipValue || "") + "</div>\n      </div>")
        }, i._isInvalidTooltext = function (t) {
          var e = this.config;
          if (!t || t.endDate < e.actualStartDomain || t.startDate > e.actualEndDomain) return !0
        }, i._getDateForToolText = function (t) {
          var e, i = this.config, n = "", a = i.dataInfo[t];
          return this._isInvalidTooltext(a) ? {
            body: "",
            header: ""
          } : (a.tooltextTime || (a.tooltextTime = i.timeFormatterFn({
            type: "tooltip",
            dateRange: a
          })), !a.totalStackSumTooltip && (0, u["default"])(a.totalStackSum) && (a.totalStackSumTooltip = i.formatterFn({
            value: a.totalStackSum,
            type: "tooltip",
            prefix: i.prefix,
            suffix: i.suffix
          })), e = "<div style='margin-bottom:8px;'>" + a.tooltextTime + "</div>", a.totalStackSumTooltip && (n = "<div style='margin-bottom: 2px;'>Total: " + a.totalStackSumTooltip + "</div>"), {
            header: e,
            body: n
          })
        }, i._checkPointerOverColumn = function (t, e, i) {
          var n, a, r, l, s, c, u, d = this.config, f = d.plotBorderThickness;
          return (n = d.dataInfo[t]) ? (s = n.height < b ? b : n.height, l = n.width < b ? b : n.width, u = n.height < b ? n.y - (b - n.height) : n.y, f !== o.UNDEF ? c = f / 2 : f = c = 0, r = i - u + c, {
            pointIndex: t,
            hovered: (a = e - n.x + c) >= 0 && a <= l + f && r >= 0 && r <= s + f,
            pointObj: n,
            component: this
          }) : {pointIndex: t, hovered: !1, component: this}
        }, i._firePlotEvent = function (t, e, i) {
          var n, a, r = this.config.dataInfo, l = r[e] && r[e].eventArgs || {}, s = this.getFromEnv("chart"),
            c = (0, o.getMouseCoordinate)(s.getFromEnv("chart-container"), i, s), u = function (t) {
              var e, i = !0;
              for (e in t) t.hasOwnProperty(e) && (i = i && !isNaN(t[e]));
              return i
            }(c), d = (0, o.extend2)(c, l);
          if (e !== o.UNDEF && u) switch (t) {
            case"fc-mouseover":
              s.fireChartInstanceEvent("DataPlotRollOver", d, o.UNDEF, o.UNDEF, (function (t, e) {
                i.FusionChartsPreventEvent = !0
              }));
              break;
            case"fc-mouseout":
              s.fireChartInstanceEvent("DataPlotRollOut", d);
              break;
            case"fc-click":
            case"touchend":
            case"mouseup":
              s.fireChartInstanceEvent("DataPlotClick", d), a = (n = s.getFromEnv()) && n.linkClickFN, d.link && a && a.call({link: d.link}, !0)
          }
        }, i.setHoverInEffect = function (t, e) {
          var i, n = this.getFromEnv("chart"), a = this.config.dataInfo;
          this.getFromEnv("animationManager").setAnimationState("mouseOver"), e || t.forEach((function (t) {
            a[t] && (i = a[t].eventArgs, n.fireChartInstanceEvent("DataPlotHighlight", i))
          })), this.setData(e ? this.getHoverInConfig(t) : this.getHighlightConfig(t), !0)
        }, i.setHoverOutEffect = function (t) {
          this.getFromEnv("animationManager").setAnimationState("mouseOut"), this.setData(this.getHoverOutConfig(t), !0)
        }, i.getHighlightedIndices = function (t) {
          var e = this.config.dataInfo, i = [];
          return e.forEach((function (e, n) {
            e.y <= t.minValue && e.y >= t.maxValue && i.push(n)
          })), i
        }, i.show = function () {
          this.setData({visibility: "visible"}, !0)
        }, i.hide = function () {
          this.setData({visibility: "hidden"}, !0)
        }, i.isPlotPredictive = function (t) {
          return t.startDate >= this.config.prediction.dateMs
        }, i.parsePrediction = function (t) {
          this.config.prediction = t.prediction || this.config.prediction, this.parsePredictiveStyleAttributes()
        }, i.parsePredictiveStyleAttributes = function () {
          var t, e, i = {}, n = this.config;
          n.prediction.enabled && (t = n.prediction.style.plot, e = n.prediction.style.column, Object.assign(i, n.defaultPredictedDataStyle), Object.assign(i, t), Object.assign(i, e)), i.predictiveOpacity = i.opacity, i.predictiveFillOpacity = i["fill-opacity"], i.predictiveStrokeOpacity = i["stroke-opacity"], delete i.opacity, delete i["fill-opacity"], delete i["stroke-opacity"], n.predictiveStyleAttributes = i || {}
        }, e
      }(d["default"]);
      e["default"] = x
    }, 807: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      var n = i(193);

      function a(t, e, i) {
        return {y: i ? e : e + t, height: 0}
      }

      function r(t, e) {
        var i = 1 / e, n = i * t;
        return {start: n, end: n + i}
      }

      var o = {
        "initial.dataset.timeseriesColumn": function () {
          var t = this, e = t.getFromEnv("yScale");
          return void 0 !== t.config.indices[3] ? function (t) {
            var e = t.config.datasetIndex, i = t.config.seriesLength;
            return {
              "rect.appearing": function (n) {
                var o = n.index, l = t.config.dataInfo[o].yBaseValue < 0;
                return [{
                  initialAttr: a(n.attr.height, n.attr.y, l),
                  slot: "middle",
                  startEnd: r(e, i),
                  effect: "linear"
                }]
              }
            }
          }(t) : {
            "rect.appearing": function (i) {
              var a, r, o, l, s = i.props && i.props.originalIndex || i.index, c = t.config.data[s], u = i.attr,
                d = e.getRangeValue(0);
              return a = u.y, r = u.height, l = Math.sign(a + r / 2 - d), o = 1 === l ? a : a + r, c && (c._posWRT0 = l), [{
                initialAttr: function () {
                  var t = {};
                  return t.y = o, t.height = 0, t
                }, finalAttr: {}, startEnd: function () {
                  var t = n.animHelperFN.animByWeight(i.index, i.props.dataLength, .6);
                  return t
                }, hookFn: function () {
                  this.attr({opacity: 1})
                }, effect: "easeInOutQuart", slot: "plot"
              }]
            }, "*": null
          }
        }
      };
      e["default"] = o
    }, 808: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = function (t) {
        var e, i = t.getFromEnv("dataSource"), n = t.config.series,
          d = t.getFromEnv("focusScalesX")[0].applicableClippings, f = d.repeatClips, h = d.singleClips, g = t.config,
          p = g.measures, m = g.seriesInfo, v = void 0 === m ? {} : m, y = g.enableMarkers, b = g.visibility,
          x = g.isStock, k = g.isRange, S = [];
        y && (e = i.datamarker) && (e.forEach((function (t) {
          var e = Object.assign({}, t), i = e.value, a = e.series, d = !0,
            g = c["default"].parser(t.timeformat).parse(t.time);
          if (!isNaN(+g) && (0, u.getUnclippedValue)(g, f, h) === +g) {
            if (i && ((0, r["default"])(i) && (i = [i]), (0, o["default"])(i))) if (i = i.filter(r["default"]), (k || x) && (0, s["default"])(p[0])) for (var m = Object.values(p[0]), y = 0; y < i.length && d; ++y) d = m.includes(i[y]); else d = (0, l["default"])(i, p);
            if (Object.keys(v).length && (0, s["default"])(a)) for (var b, _ = Object.keys(a), C = _.length; d && C--;) b = _[C], (0, r["default"])(a[b]) && a[b] !== v[b] && (d = !1);
            d && (x || k ? e.measures = p : e.seriesname = n, S.push(e))
          }
        })), 0 !== S.length && t.attachChild(a["default"], "dataMarker").configure({
          data: S,
          isStock: x,
          isRange: k,
          visibility: b
        }))
      };
      var a = n(i(809)), r = n(i(742)), o = n(i(331)), l = n(i(731)), s = n(i(377)), c = n(i(358)), u = i(749)
    }, 809: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = n(i(212)), o = n(i(358)), l = i(193), s = i(197), c = i(759), u = i(201), d = n(i(810)),
        f = n(i(249)), h = n(i(377)), g = n(i(811)), p = n(i(812)), m = n(i(731)), v = n(i(813)),
        y = {flagHeight: 16, flagWidth: 16, stickLength: 10, pinHeight: 23, pinWidth: 23, totalFlagHeight: 26},
        b = function (t) {
          if (void 0 === t && (t = []), !(0, f["default"])(t)) return {};
          var e, i, n, a = {}, r = (0, h["default"])(t[0]) ? t[0] : {}, o = t.length;
          for (e in r) if (r.hasOwnProperty(e)) {
            var l = !0;
            for (i = 1; i < o; ++i) if (n = t[i], !(0, h["default"])(n) || !n.hasOwnProperty(e) || n[e] != r[e]) {
              l = !1;
              break
            }
            l && (a[e] = r[e])
          }
          return a
        };
      (0, u.addDep)({name: "dataMarkerAnimation", type: "animationRule", extension: d["default"]});
      var x = function (t) {
        (0, a["default"])(i, t);
        var e = i.prototype;

        function i() {
          var e;
          return (e = t.call(this) || this).config.styleInfo = {}, e
        }

        return e.configure = function (e) {
          t.prototype.configure.call(this, e);
          var i, n, a = this.config, r = a.styleInfo;
          if ((0, f["default"])(e.data)) {
            var s = a.unsortedData;
            a.unsortedData = e.data.slice(), (0, m["default"])(s, a.unsortedData) || (a.data = e.data.slice(), a.data.sort((function (t, e) {
              return o["default"].parser(t.timeformat).parse(t.time) - o["default"].parser(e.timeformat).parse(e.time)
            })))
          }
          if (a.isStock = (0, l.pluck)(e.isStock, a.isStock), a.isRange = (0, l.pluck)(e.isRange, a.isRange), n = e.style) for (var c in i = r[e.index] || (r[e.index] = {}), n) n.hasOwnProperty(c) && (i[c] = n[c]);
          a.skipGrouping = e.skipGrouping, (0, l.defined)(e.visibility) && (a.visibility = e.visibility)
        }, e.setHoverInEffect = function (t) {
          var e = this.config, i = e.markerInfo[t].markers, n = i[0].style || {}, a = {}, r = {}, o = {}, l = {},
            s = this.getFromEnv("getStyleDef");
          i.multipleMarkers ? (r = i.markers.map((function (t) {
            return t.style && s(t.style["marker:hover"]) || {}
          })), l = i.markers.map((function (t) {
            return t.style && s(t.style["text:hover"]) || {}
          })), Object.assign(a, e.defaultHoverStyle, b(r)), Object.assign(o, e.defaultHoverStyle, b(l))) : (Object.assign(a, e.defaultHoverStyle, s(n["marker:hover"])), Object.assign(o, e.defaultHoverStyle, s(n["text:hover"]))), this.getFromEnv("animationManager").setAnimationState("mouseOver"), this.setData({
            style: {
              marker: a,
              text: o
            }, index: t, skipGrouping: !0
          }, !0)
        }, e.setHoverOutEffect = function (t) {
          this.getFromEnv("animationManager").setAnimationState("mouseOut"), this.setData({
            style: {
              marker: {},
              text: {}
            }, index: t, skipGrouping: !0
          }, !0)
        }, e._firePlotEvent = function (t, e, i, n) {
          var a = this.config.markerInfo, r = a[e] && a[e].eventArgs || {}, o = this.getFromEnv("chart"),
            s = (0, l.getMouseCoordinate)(o.getFromEnv("chart-container"), i, o), c = function (t) {
              var e, i = !0;
              for (e in t) t.hasOwnProperty(e) && (i = i && !isNaN(t[e]));
              return i
            }(s), u = (0, l.extend2)(s, r);
          if (c && e !== l.UNDEF) switch (t) {
            case"fc-mouseover":
              o.fireChartInstanceEvent("DataMarkerRollOver", u);
              break;
            case"fc-mouseout":
              o.fireChartInstanceEvent("DataMarkerRollOut", u);
              break;
            case"fc-click":
              o.fireChartInstanceEvent("dataMarkerClick", u)
          }
        }, e.__setDefaultConfig = function () {
          var t = this.config;
          t.isStock = !1, t.isRange = !1, t["default-stroke-width"] = 1, t["default-fill-opacity"] = .5, t["default-stroke-opacity"] = .5, t["default-font-color"] = "#ffffff", t["default-stroke-color-multiple"] = "#8c8c8c", t["default-tooltip-background"] = "#f2eded", t.defaultMarkerStyle = {
            "stroke-width": 1,
            "fill-opacity": .5,
            "stroke-opacity": .5
          }, t.defaultTextStyle = {
            fill: "#ffffff",
            "font-size": "12px",
            "line-height": "14.4px",
            "fill-opacity": 1,
            "stroke-opacity": 1,
            "text-anchor": "middle",
            "font-weight": "normal",
            "font-style": "normal"
          }, t.defaultHoverStyle = {opacity: 1, "fill-opacity": 1, "stroke-opacity": 1}
        }, e.draw = function () {
          "visible" === this.config.visibility && (this._createGroup(), this._drawMarkers())
        }, e.getType = function () {
          return "dataMarker"
        }, e.getName = function () {
          return "dataMarker"
        }, e._checkPointOverMarker = function (t, e, i, n) {
          for (var a, r, o, l, s, c, u, d, f, h = this, g = h.config, p = g.dataInfo, m = y, v = g.markerInfo, b = Math.ceil(t), x = Math.floor(t), k = n, S = [b, x]; k < m.flagWidth || k < m.pinWidth;) S.unshift(++b), S.push(--x), k += n;
          return S.forEach((function (t) {
            r = v[t], !u && r && (a = p[t], o = a.x, l = a.y, s = (a.width || 0) / 2, c = o + s, r && r.markers && "pin" === r.markers[0].type ? (d = m.pinWidth, f = m.pinHeight) : (d = m.flagWidth, f = m.totalFlagHeight), function (t, e, i, n, a, r) {
              return i >= a - t / 2 && i <= a + t / 2 && n <= r && n >= r - e
            }(d, f, e, i, c, l) && (u = {pointIndex: t, hovered: !0, pointObj: a, markerObj: r, component: h}))
          })), u
        }, e._getTooltext = function (t) {
          var e, i, n = this.config, a = n.markerInfo[t], r = a.markers, o = r.length,
            s = this.getFromEnv("yScale").tickFormat(4, ".2s"), c = a.multipleMarkers, u = {};
          return a.formatedTime || (a.formatedTime = this.getFromEnv("xScale").getFormattedTime({
            type: "tooltip",
            dateRange: a
          })), e = "<div style='margin-bottom: 6px'>" + a.formatedTime + "</div>", n.isStock ? i = "<div style='display: grid; display: -ms-grid; grid-template-columns: auto auto auto auto 1fr; -ms-grid-columns: auto auto auto auto 1fr; grid-template-rows: auto auto; -ms-grid-rows: auto auto; margin-bottom:6px;'>\n      <div style='grid-column-start: 1; -ms-grid-column: 1; grid-row-start: 1; -ms-grid-row: 1;'>\n      Open:\n      </div>\n      <div style='grid-column-start: 2; -ms-grid-column: 2; grid-row-start: 1; -ms-grid-row: 1; text-align: center;  margin-left: 6px;'>\n      " + ((0, v["default"])(a.openValue) ? (0, l.parseUnsafeString)(s(a.openValue)) : "—") + "\n      </div>\n      <div style='grid-column-start: 3; -ms-grid-column: 3; grid-row-start: 1; -ms-grid-row: 1; margin-left: 12px;'>\n      High:\n      </div>\n      <div style='grid-column-start: 4; -ms-grid-column: 4; grid-row-start: 1; -ms-grid-row: 1; text-align: center; margin-left: 6px;'>\n      " + ((0, v["default"])(a.highValue) ? (0, l.parseUnsafeString)(s(a.highValue)) : "—") + "\n      </div>\n      <div style='grid-column-start: 1; -ms-grid-column: 1; grid-row-start: 2; -ms-grid-row: 2;'>\n      Low:\n      </div>\n      <div style='grid-column-start: 2; -ms-grid-column: 2; grid-row-start: 2; -ms-grid-row: 2; text-align: center; margin-left: 6px;'>\n      " + ((0, v["default"])(a.lowValue) ? (0, l.parseUnsafeString)(s(a.lowValue)) : "—") + "\n      </div>\n      <div style='grid-column-start: 3; -ms-grid-column: 3; grid-row-start: 2; -ms-grid-row: 2; margin-left: 12px;'>\n      Close:\n      </div>\n      <div style='grid-column-start: 4; -ms-grid-column: 4; grid-row-start: 2; -ms-grid-row: 2; text-align: center; margin-left: 6px;'>\n      " + ((0, v["default"])(a.closeValue) ? (0, l.parseUnsafeString)(s(a.closeValue)) : "—") + "\n      </div>\n    </div>" : n.isRange ? i = "<div style='display: grid; display: -ms-grid; grid-template-columns: auto auto auto auto 1fr; -ms-grid-columns: auto auto auto auto 1fr; grid-template-rows: auto auto; -ms-grid-rows: auto auto; margin-bottom:6px;'>\n      <div style='grid-column-start: 1; -ms-grid-column: 1; grid-row-start: 1; -ms-grid-row: 1;'>\n      High:\n      </div>\n      <div style='grid-column-start: 2; -ms-grid-column: 2; grid-row-start: 1; -ms-grid-row: 1; text-align: center;  margin-left: 6px;'>\n      " + ((0, v["default"])(a.highValue) ? s(a.highValue) : "—") + "\n      </div>\n      <div style='grid-column-start: 1; -ms-grid-column: 1; grid-row-start: 2; -ms-grid-row: 2;'>\n      Low:\n      </div>\n      <div style='grid-column-start: 2; -ms-grid-column: 2; grid-row-start: 2; -ms-grid-row: 2; text-align: center; margin-left: 6px;'>\n      " + ((0, v["default"])(a.lowValue) ? s(a.lowValue) : "—") + "\n      </div>\n    </div>" : (a.tooltipValue || (a.tooltipValue = s(a.value)), i = "<div style='margin-bottom:6px; height: 14px;'>\n    <div style='float: left;'>" + (0, l.parseUnsafeString)(a.seriesname) + ":<span style='padding-left:8px'>" + (0, l.parseUnsafeString)(a.tooltipValue) + "</span></div>\n    </div>"), r.forEach((function (t, e) {
            var n = 6;
            c && !u[t.time] && (u[t.time] = !0, i += "<div style='clear: both; margin-bottom:2px; font-weight: 600;'>" + t.time + "</div>", e + 1 < o && u[r[e + 1].time] && (n = 2)), i += t.tooltext ? "<div style='clear: both; " + (e < o - 1 ? "margin-bottom: " + n + "px" : "") + "'>" + (0, l.parseUnsafeString)(t.tooltext, !1) + "</div>" : ""
          })), {header: e, body: i}
        }, e.allocatePosition = function () {
          !this.config.skipGrouping && this._groupMarkers()
        }, e._groupMarkers = function () {
          var t, e, i, n, a, r, l, s, u = this.getLinkedParent()._getRelevantInfo(), d = u.firstTimeStamp,
            f = u.dataInfo, g = this.config, p = g.markerInfo = {}, m = this.getFromEnv("xScale"), v = m.getDomain(),
            y = this.getFromEnv("binDecider").getRangeThreshold()[0].name(), b = g.data;
          g.dataInfo = f, b.forEach((function (u) {
            i = o["default"].parser(u.timeformat).parse(u.time), n = (0, c.getPlaceHolderIndex)(y) - (0, c.getPlaceHolderIndex)((0, c.getMinPlaceHolder)(u.timeformat)), i && n >= 0 && n <= 1 && (i = i.getTime()) >= d && i >= v[0] && i <= v[1] && (e = m.getBinIndex(i), (a = f[e]) && (r = u.series || {}, l = Object.keys(r)[0], s = (g.isRange || g.isStock) && ((0, h["default"])(u.measures[0]) ? Object.keys(u.measures[0]).toString() : u.measures[0]), p[e] || (p[e] = {
              markers: [],
              id: (g.isStock || g.isRange ? s : u.seriesname) + u.time,
              startDate: a.startDate,
              seriesname: u.seriesname,
              endDate: f[e].endDate,
              eventArgs: {
                timestamp: i,
                timeText: u.time,
                tooltipText: [u.tooltext],
                timeFormatter: u.timeformat,
                binStart: a.startDate,
                binEnd: a.endDate,
                binValue: a.eventArgs.binValue,
                binValueFormatted: a.eventArgs.binValueFormatted,
                measure: u.value,
                series: l,
                seriesName: l && r[l],
                identifier: u.identifier
              }
            }), t = p[e], g.isStock ? (t.openValue = a.openValue, t.highValue = a.highValue, t.lowValue = a.lowValue, t.closeValue = a.closeValue) : g.isRange ? (t.highValue = a.highValue, t.lowValue = a.lowValue) : t.value = a.value, t.markers.push(u), t.markers.length > 1 && (t.multipleMarkers = !0, t.eventArgs.tooltipText.push(u.tooltext), t.eventArgs.identifier = t.markers.length)))
          }))
        }, e._createGroup = function () {
          this.addGraphicalElement({
            el: "group",
            container: {label: "group", id: "thermo", isParent: !0},
            component: this,
            label: "group",
            attr: {name: "markerGroup-thermo"}
          }), this.addGraphicalElement({
            el: "group",
            container: {label: "group", id: "thermo", isParent: !0},
            component: this,
            label: "group-pin",
            attr: {name: "markerGroup-thermo-pin"}
          })
        }, e._drawMarkers = function () {
          var t, e, i, n = !0, a = this.config.markerInfo, r = function (t) {
            "pin" !== t.type && (n = !1)
          };
          for (e in a) t = a[e], i = !1, n = !0, t.multipleMarkers && (t.markers.forEach(r), i = !n), "pin" !== t.markers[0].type || i ? (0, g["default"])(this, e, y) : (0, p["default"])(this, e, y);
          this.styleInfo = {}
        }, e.getStyleInformation = function (t) {
          var e, i, n, a, r, o, c, u, d, f = this.config, h = f.styleInfo, g = f.markerInfo[t],
            p = this.getFromEnv("getStyleDef"), m = f.defaultMarkerStyle, v = f.defaultTextStyle,
            y = this.getLinkedParent()._getRelevantInfo(t), x = this.getFromEnv("baseTextStyle");
          return r = {}, o = {}, i = (c = h[t] || {}).marker || {}, a = g.markers[0].style || {}, e = p(a.marker), n = p(a.text), g.multipleMarkers ? (d = g.markers.map((function (t) {
            return t.style && p(t.style.marker) || {}
          })), u = g.markers.map((function (t) {
            return t.style && p(t.style.text) || {}
          })), e = b(d), n = b(u), e.fill || (e.fill = g.fill = f["default-stroke-color-multiple"]), e.stroke || (e.stroke = f["default-stroke-color-multiple"])) : (!e.fill && !n.fill && f.isStock && y.text && (n = Object.assign({}, n, y.text)), e.fill = g.fill = (0, s.convertColor)((0, l.pluck)(e.fill, y.fill), 100 * (0, l.pluck)(i["fill-opacity"], e["fill-opacity"], m["fill-opacity"])), e.stroke = g.stroke = (0, s.convertColor)((0, l.pluck)(e.stroke, y.stroke, y.fill), 100 * (0, l.pluck)(i["stroke-opacity"], e["stroke-opacity"], m["fill-opacity"]))), Object.assign(r, m, e, c.marker), Object.assign(o, v, x, n, c.text), {
            marker: r,
            text: o
          }
        }, i
      }(r["default"]);
      e["default"] = x
    }, 810: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      var n = i(193), a = function (t) {
        return [{initialAttr: {opacity: 0}, finalAttr: {opacity: (0, n.pluckNumber)(t.attr.opacity, 1)}, slot: "final"}]
      }, r = {
        "initial.dataMarker.dataMarker": function () {
          return {"*.appearing": a}
        }
      };
      e["default"] = r
    }, 811: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t, e, i) {
        var n, a, r, o, l, s, c, u, d, f, h = t.config, g = h.markerInfo[e], p = h.dataInfo[e],
          m = t.getStyleInformation(e), v = i.flagHeight, y = i.stickLength, b = i.flagWidth;
        u = g.multipleMarkers, o = g.id, n = p.y, r = p.x + (p.width || 0) / 2, c = n - y, a = g.markers[0], d = m.marker.opacity, f = m.text.opacity, s = {
          path: ["M", r, n, "V", c],
          opacity: d
        }, t.addGraphicalElement({
          el: "path",
          container: {label: "group"},
          id: o,
          component: t,
          attr: s,
          css: m.marker,
          label: "flagStick"
        }, !0), s = {
          path: "M12.4444444,0 L1.55555556,0 C0.7,0 0,0.654545455 0,1.45454545 L0,10.8363636 C0,11.3454545 0.233333333,11.7817897 0.7,12.0727273 L7,16 L13.3,12.0727273 C13.6888889,11.7818182 14,11.3454545 14,10.8363636 L14,1.45454545 C14,0.654545455 13.3,0 12.4444444,0 Z",
          transform: "t" + (r - b / 2 + 1) + "," + (c - v),
          opacity: d
        }, t.addGraphicalElement({
          el: "path",
          container: {label: "group"},
          id: o,
          component: t,
          attr: s,
          css: m.marker,
          label: "flagTriangle"
        }, !0), (u || (l = a.identifier)) && (s = {
          text: u ? g.markers.length : l.charAt(0),
          x: r,
          y: c - v / 2,
          opacity: f
        }, t.addGraphicalElement({
          el: "text",
          container: {label: "group"},
          id: o,
          component: t,
          attr: s,
          css: m.text,
          label: "markerText"
        }, !0))
      }
    }, 812: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t, e, i) {
        var n, a, r, o, l, s, c, u, d = t.config, f = d.markerInfo[e], h = d.dataInfo[e], g = t.getStyleInformation(e),
          p = i.pinHeight, m = i.pinWidth;
        u = f.multipleMarkers, o = f.id, n = h.y - (p + 2), a = h.x + (h.width || 0) / 2 - m / 2, u || (r = f.markers[0]), s = g.marker.opacity, c = g.text.opacity, l = {
          path: "M12.0047766,4 L12.2491793,4.00380682 C16.5521622,4.13545713 20,7.66508574 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,11.9105612 4.0014677,11.8214651 4.00438034,11.7327347 L4,4 L12,4 L12.0047766,4 Z",
          transform: "t" + a + "," + n + "r225",
          opacity: s
        }, t.addGraphicalElement({
          el: "path",
          container: {label: "group-pin"},
          id: o,
          attr: l,
          css: g.marker,
          label: "pinMarker"
        }, !0), (u || r.identifier) && (l = {
          text: u ? f.markers.length : r.identifier.charAt(0),
          x: a + m / 2,
          y: n + p / 2 + 2,
          opacity: c
        }, t.addGraphicalElement({
          el: "text",
          container: {label: "group-pin"},
          id: o,
          attr: l,
          css: g.text,
          label: "markerText"
        }, !0))
      }
    }, 813: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t) {
        return "number" == typeof t && !isNaN(t)
      }
    }, 814: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      var n = function (t, e) {
        var i = t.getFromEnv("yScale"), n = t.getFromEnv("xScale"), a = i.getDomain(), r = n.getDomain(),
          o = n.getRangeValue(r[0]), l = i.getRangeValue(a[0]), s = i.getRangeValue(a[1]), c = l - s, u = c < 0 ? l : s,
          d = "init" === e ? 0 : Math.abs(n.getRangeValue(r[1]) - o), f = Math.abs(c);
        return "M" + o + "," + u + "L" + (o + d) + "," + u + "L" + (o + d) + "," + (u + f) + "L" + o + "," + (u + f) + "Z"
      }, a = {
        "initial.dataset.continuous": function () {
          var t = this;
          return {
            "group.appearing": function () {
              return [{
                initialAttr: {"clip-path": n(t, "init")},
                finalAttr: {"clip-path": n(t, "canvas")},
                slot: "middle"
              }]
            }, "*": null
          }
        }
      };
      e["default"] = a
    }, 815: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(193), o = n(i(438)), l = n(i(437)), s = n(i(436)), c = i(201), u = n(i(741)),
        d = n(i(358)), f = n(i(806)), h = n(i(816)), g = function (t, e) {
          return Object.assign(t, e)
        };
      (0, c.addDep)({name: "timeseriesCandlestickAnimation", type: "animationRule", extension: h["default"]});
      var p = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.getHoverInConfig = function (t) {
          var e = this.config;
          return {bullStyle: e.bullHoverInStyle, bearStyle: e.bearHoverInStyle, hoverIndices: t, hovered: !0}
        }, i.getHighlightConfig = function (t) {
          var e = this.config;
          return {bullStyle: e.bullHighlightStyle, bearStyle: e.bearHighlightStyle, hoverIndices: t, hovered: !0}
        }, i.getHoverOutConfig = function (t) {
          var e, i = this.config, n = Object.assign({}, i.bullHoverOutStyle),
            a = Object.assign({}, i.bearHoverOutStyle);
          for (e in n) n[e] = null;
          for (e in a) a[e] = null;
          return {bullStyle: n, bearStyle: a, hoverIndices: t, hovered: !1}
        }, i.__setDefaultConfig = function () {
          var t = this.config;
          t.isStock = !0, t.bullStyle = {}, t.bullHoverInStyle = {}, t.bullHighlightStyle = {}, t.bullHoverOutStyle = {}, t.bearStyle = {}, t.bearHoverInStyle = {}, t.bearHighlightStyle = {}, t.bearHoverOutStyle = {}, t.plotSpacePercent = 40, t.dataMarkerPadding = 0, t.visibility = r.VISIBLE, t.prevBoundaryInfo = {}, t.defaultBullStyle = {
            "stroke-width": 1,
            opacity: 1,
            stroke: "000000",
            fill: "ffffff"
          }, t.defaultBearStyle = {
            "stroke-width": 1,
            opacity: 1,
            stroke: "000000",
            fill: "868AC8"
          }, t.defaultBullHighlightStyle = {"stroke-width": 2}, t.defaultBearHighlightStyle = {"stroke-width": 2}, t.defaultBearHoverInStyle = {"stroke-width": 2}, t.defaultBullHoverInStyle = {"stroke-width": 2}, t.legendDefaultTextStyle = {
            "font-family": r.DEFAULT_FT_FONT,
            "font-weight": "normal",
            "font-style": "normal",
            "font-size": "12px",
            fill: "#5F5F5F"
          }, t.defaultBearPredictiveStyle = {fill: "#62B58F"}, t.defaultBullPredictiveStyle = {fill: "#F76363"}, t.strokeColor = "#464E56", t.hoverInfo = [], t.prevPerBinYExtents = [], t.dataIndices = [1, 2, 3, 4]
        }, i.configureAttributes = function (t) {
          var e, i = this.getFromEnv("dataSource"), n = this.getFromEnv("getStyleDef"), a = i.legend,
            o = n(a && a.item && a.item.style && a.item.style.text), s = this.config;
          if (s.mergedLegendStyle = (0, r.extend2)((0, r.extend2)({}, s.legendDefaultTextStyle), o), t.hasOwnProperty("hoverIndices")) s.hoverInfo.push(t), s.hoverMode = !0; else {
            for (e in t) if ("primaryColor" === e) {
              var c = t.plotCosmetics, u = t.genericCosmetics, d = s.bullStyle, f = s.bearStyle, h = s.bullHoverInStyle,
                p = s.bearHoverInStyle, m = s.bullHighlightStyle, v = s.bearHighlightStyle, y = s.bullHoverOutStyle,
                b = s.bearHoverOutStyle, x = void 0, k = n(c.style && c.style.bear), S = n(c.style && c.style.bull),
                _ = n(u.style && u.style.plot), C = n(u.style && u.style["plot:hover"]),
                w = n(u.style && u.style["plot:highlight"]), E = n(u.style && u.style.bull),
                D = n(u.style && u.style["bull:hover"]), M = n(u.style && u.style["bull:highlight"]),
                T = n(u.style && u.style.bear), F = n(u.style && u.style["bear:hover"]),
                I = n(u.style && u.style["bear:highlight"]), L = n(c.style && c.style["bear:hover"]),
                O = n(c.style && c.style["bear:highlight"]), A = n(c.style && c.style["bull:hover"]),
                P = n(c.style && c.style["bull:highlight"]), B = n(t.styleConfig && t.styleConfig.bear),
                N = n(t.styleConfig && t.styleConfig.bull), H = n(t.styleConfig && t.styleConfig["bear:hover"]),
                j = n(t.styleConfig && t.styleConfig["bear:highlight"]),
                R = n(t.styleConfig && t.styleConfig["bull:hover"]),
                V = n(t.styleConfig && t.styleConfig["bull:highlight"]), G = n(c.style && c.style.plot),
                Y = n(t.styleConfig && t.styleConfig.plot), U = n(c.style && c.style["generic:hover"]),
                z = n(c.style && c.style["generic:highlight"]), X = n(t.styleConfig && t.styleConfig["plot:hover"]),
                W = n(t.styleConfig && t.styleConfig["plot:highlight"]);
              for (x in delete _.fill, delete G.fill, delete Y.fill, "timeseries-ohlc" === this.getName() && (delete Y.stroke, delete _.stroke, delete G.stroke), [d, s.defaultBullStyle, _, G, Y, E, S, N].reduce(g), [f, s.defaultBearStyle, _, G, Y, T, k, B].reduce(g), [h, s.defaultBullHoverInStyle, C, U, X, D, A, R].reduce(g), [m, s.defaultBullHighlightStyle, w, z, W, M, P, V].reduce(g), [p, s.defaultBearHoverInStyle, C, U, X, F, L, H].reduce(g), [v, s.defaultBearHighlightStyle, w, z, W, I, O, j].reduce(g), d.stroke = (0, r.convertColor)(d.stroke, 100 * (0, r.pluckNumber)(d["stroke-opacity"], 1)), d.fill = (0, r.convertColor)(d.fill, 100 * (0, r.pluckNumber)(d["fill-opacity"], 1)), f.stroke = (0, r.convertColor)(f.stroke, 100 * (0, r.pluckNumber)(f["fill-opacity"], 1)), f.fill = (0, r.convertColor)(f.fill, 100 * (0, r.pluckNumber)(f["fill-opacity"], 1)), h.fill && (h.fill = (0, r.convertColor)(h.fill, 100 * (0, r.pluckNumber)(h["fill-opacity"], d["fill-opacity"]))), h.stroke && (h.stroke = (0, r.convertColor)(h.stroke, 100 * (0, r.pluckNumber)(h["stroke-opacity"], d["stroke-opacity"]))), p.fill && (p.fill = (0, r.convertColor)(p.fill, 100 * (0, r.pluckNumber)(p["fill-opacity"], f["fill-opacity"]))), p.stroke && (p.stroke = (0, r.convertColor)(p.stroke, 100 * (0, r.pluckNumber)(p["stroke-opacity"], f["stroke-opacity"]))), m.fill && (m.fill = (0, r.convertColor)(m.fill, 100 * (0, r.pluckNumber)(m["fill-opacity"], d["fill-opacity"]))), m.stroke && (m.stroke = (0, r.convertColor)(m.stroke, 100 * (0, r.pluckNumber)(m["stroke-opacity"], d["stroke-opacity"]))), p.fill && (p.fill = (0, r.convertColor)(p.fill, 100 * (0, r.pluckNumber)(p["fill-opacity"], f["fill-opacity"]))), p.stroke && (p.stroke = (0, r.convertColor)(p.stroke, 100 * (0, r.pluckNumber)(p["stroke-opacity"], f["stroke-opacity"]))), s.plotBorderThickness = f["stroke-width"] = d["stroke-width"] = (0, r.pluckNumber)((0, l["default"])([f["stroke-width"], d["stroke-width"]], Number.parseFloat)), Object.assign(Object.assign({}, h), m)) y[x] = (0, r.pluck)(d[x], "");
              for (x in(0, r.defined)(y["stroke-dasharray"]) && (y["stroke-dasharray"] = ""), Object.assign(Object.assign({}, p), v)) b[x] = f[x] || "";
              (0, r.defined)(b["stroke-dasharray"]) && (y["stroke-dasharray"] = ""), s.bullOpacity = d.opacity, s["bull-fill-opacity"] = d["fill-opacity"], s["bull-stroke-opacity"] = d["stroke-opacity"], s.bearOpacity = f.opacity, s["bear-fill-opacity"] = f["fill-opacity"], s["bear-stroke-opacity"] = f["stroke-opacity"], delete d.opacity, delete d["fill-opacity"], delete d["stroke-opacity"], delete f.opacity, delete f["fill-opacity"], delete f["stroke-opacity"]
            } else s[e] = t[e];
            s.limit = this._calculateLimits();
            var q = this.getFromEnv("chart");
            q.setYScaleLimit(s.scaleY.getId(), this.getId(), s.limit.y, s.limit.baseRequired), q.setXScaleLimit(s.scaleX.getId(), this.getId(), s.limit.x)
          }
          this.parsePrediction(t)
        }, i.parsePrediction = function (t) {
          this.config.prediction = t.prediction || this.config.prediction, this.parsePredictiveStyleAttributes()
        }, i.parsePredictiveStyleAttributes = function () {
          var t = {}, e = this.config;
          e.predictiveStyleAttributesBear = {}, e.predictiveStyleAttributesBull = {}, e.prediction.enabled && (Object.assign(t, e.prediction.style.plot), Object.assign(e.predictiveStyleAttributesBear, e.defaultBearPredictiveStyle, e.prediction.style.plot, e.prediction.style.bear), Object.assign(e.predictiveStyleAttributesBull, e.defaultBullPredictiveStyle, e.prediction.style.plot, e.prediction.style.bull)), e.predictiveStyleAttributes = t || {}
        }, i._calculateLimits = function () {
          var t, e = this.config, i = e.indices, n = e.data, a = e.scaleY, s = e.scaleX, c = e.calculateFromContext,
            u = n[0], d = n[n.length - 1], f = s.showPlotOverTick(), h = "visible" === this.config.visibility,
            g = "log" === a.getType(), p = this.getFromEnv("chart"), m = c ? p.getContextLimit() : p.getFocusLimit(),
            v = m[0], y = m[1], b = {}, x = function (t) {
              return g && t <= 0 ? null : t
            };
          return t = this.getPadding(), b.x = [u && u[i[0]].start - t, d && d[i[0]][f ? "start" : "end"] + t], b.y = h ? [(0, l["default"])(n, (function (t) {
            if (!(t[0].end < v || t[0].start > y)) return (0, l["default"])([t[i[1]], t[i[2]], t[i[3]], t[i[4]]], x)
          })), (0, o["default"])(n, (function (t) {
            if (!(t[0].end < v || t[0].start > y)) return (0, o["default"])([t[i[1]], t[i[2]], t[i[3]], t[i[4]]], x)
          }))] : r.UNDEF, b.baseRequired = !1, b
        }, i._getRelevantInfo = function (t) {
          var e, i, n, a = this.config;
          if (t !== r.UNDEF) {
            var o = "bull" === a.dataInfo[t].groupId ? a.bullStyle : a.bearStyle;
            e = o.fill, n = o.stroke, "#ffffff" === (0, r.rgbaToHex)(e) && (i = {fill: n})
          }
          return {
            firstTimeStamp: a.firstTimeStamp,
            timeStampGap: a.timeStampGap,
            dataInfo: a.dataInfo,
            fill: e,
            stroke: n,
            text: i
          }
        }, i._createContainer = function () {
          t.prototype._createContainer.call(this);
          var e = this.config, i = e.bullStyle, n = e.bearStyle;
          this.addGraphicalElement({
            el: "group",
            container: {id: "meso", label: "group", isParent: !0},
            component: this,
            label: "group",
            id: "meso",
            attr: {name: "candlestick-dataset-meso"}
          }), this.addGraphicalElement({
            el: "group",
            container: {id: "meso", label: "group"},
            component: this,
            label: "group",
            id: "meso-bull",
            attr: Object.assign({name: "bullGroup-meso", visibility: e.visibility}, i)
          }), this.addGraphicalElement({
            el: "group",
            container: {id: "meso", label: "group"},
            component: this,
            label: "group",
            id: "meso-bear",
            attr: Object.assign({name: "bearGroup-meso", visibility: e.visibility}, n)
          }), this.addGraphicalElement({
            el: "group",
            container: {id: "meso", label: "group"},
            component: this,
            label: "group",
            id: "meso-bull-predictive",
            attr: Object.assign({
              name: "predictive-bullGroup-meso",
              visibility: e.visibility
            }, i, e.predictiveStyleAttributesBull)
          }), this.addGraphicalElement({
            el: "group",
            container: {id: "meso", label: "group"},
            component: this,
            label: "group",
            id: "meso-bear-predictive",
            attr: Object.assign({
              name: "predictive-bearGroup-meso",
              visibility: e.visibility
            }, n, e.predictiveStyleAttributesBear)
          })
        }, i.getName = function () {
          return "timeseriesCandlestick"
        }, i.getHighlightedIndices = function (t) {
          var e = this.config.dataInfo, i = [];
          return e.forEach((function (e, n) {
            e.closeValuePx <= t.minValue && e.closeValuePx >= t.maxValue && i.push(n)
          })), i
        }, i.allocatePosition = function () {
          var t, e, i, n, a, o, c, f, h, g, p, m, v, y, b, x, k, S, _, C, w, E, D, M, T, F, I, L, O, A, P,
            B = this.getFromEnv("binDecider"), N = this.getFromEnv("xScale"), H = this.getFromEnv("yScale"),
            j = this.config, R = j.measures[0], V = j.indices, G = V[0], Y = V[1], U = V[2], z = V[3], X = V[4],
            W = this.getFromEnv("dateColumn"), q = this.getFromEnv("isUTC"), Z = j.dataInfo, $ = W.format,
            Q = q ? d["default"].utcFormatter($) : d["default"].formatter($), K = N.bins, J = B.getRangeThreshold()[2],
            tt = N.getDomain(), et = tt[0], it = tt[1], nt = j.data;
          if (j.repositioningDone = this._isRepositioningNeeded()) {
            for (j.timeStampGap = J, j.availableWidth = S = 0, T = 0, F = K.length; T < F; T++) if (2 !== K[T].clipType) {
              j.availableWidth = S = N.getRangeValue(K[T].end) - N.getRangeValue(K[T].start);
              break
            }
            e = Math.max(S * (1 - j.plotSpacePercent / 100) - j.plotBorderThickness, 1), I = +N.getDomainValue(S * (j.plotSpacePercent / 200)) - +N.getDomainValue(0), j.actualStartDomain = +et + I, j.actualEndDomain = +it - I, Z = j.dataInfo = [], nt.forEach((function (r, d) {
              if (i = r[G], g = r[Y], p = r[X], m = r[U], v = r[z], E = i.config.duration, D = i.start, M = i.end, d || (j.firstTimeStamp = i.start), w = H.getRangeValue(p), C = H.getRangeValue(g), k = H.getRangeValue(m), x = H.getRangeValue(v), (0, u["default"])(C) || (0, u["default"])(w) || (0, u["default"])(k) || (0, u["default"])(x)) {
                (0, u["default"])(C) && (0, u["default"])(w) && (g > p ? (f = w, c = C, h = "bear") : (c = w, f = C, h = "bull"), t = Math.max(Math.abs(f - c), 1), a = c > f ? f : c), o = N.getRangeValue(new Date(i.start), new Date(i.end)), (y = {
                  startDate: D,
                  endDate: M
                }).x = n = o - e / 2, y.endXPosition = n + e, y.midX = o, y.colHeight = t || 0, y.colY = a || C || w, y.highStickYExtend = k, y.y = (0, l["default"])([k, w, C, x]), y.closeValuePx = w, y.width = e, y.openValue = g, y.closeValue = p, y.highValue = m, y.lowValue = v, y.value = p, y.lowStickYEntend = x, L = j.formatterFn({
                  value: g,
                  type: "tooltip",
                  prefix: j.prefix,
                  suffix: j.suffix
                }), P = j.formatterFn({
                  value: p,
                  type: "tooltip",
                  prefix: j.prefix,
                  suffix: j.suffix
                }), O = j.formatterFn({
                  value: m,
                  type: "tooltip",
                  prefix: j.prefix,
                  suffix: j.suffix
                }), A = j.formatterFn({
                  value: v,
                  type: "tooltip",
                  prefix: j.prefix,
                  suffix: j.suffix
                }), y.eventArgs = {
                  index: d,
                  start: D,
                  startText: Q.format(D),
                  end: M,
                  endText: Q.format(M),
                  binUnit: E.Unit,
                  binMultiplier: E.number,
                  plotType: j.type,
                  timeFormatter: $,
                  aggregation: j.aggregation,
                  measure: R.close,
                  measureHigh: R.high,
                  measureLow: R.low,
                  measureOpen: R.open,
                  measuresClose: R.close,
                  binValue: p,
                  binOpen: g,
                  binHigh: m,
                  binLow: v,
                  binClose: p,
                  binValueFomatted: P,
                  binOpenFormatted: L,
                  binHighFormatted: O,
                  binCloseFormatted: P,
                  binLowFormatted: A
                };
                var S = (0, s["default"])([C, w, k, x]);
                y.height = Math.abs(S[0] - S[1]) || 0, y.groupId = h || "bull", y.groupConfig = "bull" === h ? "bullConfig" : "bearConfig", b = N.getBinIndex(i.start), Z[b] = y
              }
            }))
          }
          (_ = j.hoverInfo) && _.forEach((function (t) {
            t.hoverIndices.forEach((function (e) {
              "object" == typeof Z[e] && (Z[e].style = (0, r.extend2)(Z[e].style, t[Z[e].groupId + "Style"]))
            }))
          }))
        }, i._drawPlot = function () {
          var t, e, i = this, n = i.config, a = n.dataInfo, o = (0, r.defined)(n.bullOpacity),
            l = (0, r.defined)(n["bull-fill-opacity"]), s = (0, r.defined)(n["bull-stroke-opacity"]),
            c = n.predictiveStyleAttributesBull, u = (0, r.defined)(c.opacity), d = (0, r.defined)(c["fill-opacity"]),
            f = (0, r.defined)(c["stroke-opacity"]), h = (0, r.defined)(n.bearOpacity),
            g = (0, r.defined)(n["bear-fill-opacity"]), p = (0, r.defined)(n["bear-stroke-opacity"]),
            m = n.predictiveStyleAttributesBear, v = (0, r.defined)(m.opacity), y = (0, r.defined)(m["fill-opacity"]),
            b = (0, r.defined)(m["stroke-opacity"]), x = {}, k = {}, S = r.BLANKSTRING, _ = !1, C = function (t, e) {
              v && (t.opacity = m.opacity), y && (t.opacity = m["fill-opacity"]), b && (t.opacity = m["stroke-opacity"]), u && (e.opacity = c.opacity), d && (e.opacity = c["fill-opacity"]), f && (e.opacity = c["stroke-opacity"])
            };
          o && (x.opacity = n.bullOpacity), l && (x.opacity = n["bull-fill-opacity"]), s && (x.opacity = n["bull-stroke-opacity"]), h && (k.opacity = n.bearOpacity), g && (k.opacity = n["bear-fill-opacity"]), p && (k.opacity = n["bear-stroke-opacity"]), a.forEach((function (n, r) {
            n.groupConfig && (e = "bull" === n.groupId ? x : k, _ = i.isPlotPredictive(n), S = _ ? n.groupId + "-predictive" : n.groupId, n.colHeight > 0 ? (t = Object.assign({
              x: n.x,
              y: n.colY,
              height: n.colHeight,
              width: n.width
            }, e), n.style && Object.assign(t, n.style), _ && C(k, x), i.addGraphicalElement({
              el: "rect",
              component: i,
              props: {index: r, dataLength: a.length},
              container: {label: "group", id: "meso-" + S},
              label: "rect",
              attr: t
            }, !0)) : (n.openValue || n.closeValue) && (t = Object.assign({path: "M" + n.x + "," + n.colY + ",H" + (n.x + n.width)}, e), n.style && Object.assign(t, n.style), _ && C(k, x), i.addGraphicalElement({
              el: "path",
              component: i,
              props: {index: r, dataLength: a.length},
              container: {label: "group", id: "meso-" + S},
              label: "line",
              attr: t
            }, !0)), n.highStickYExtend && (t = Object.assign({
              path: "M" + n.midX + "," + n.highStickYExtend + ",V" + (n.colY || n.highStickYExtend + n.height),
              "stroke-linecap": "round"
            }, e), n.style && Object.assign(t, n.style), i.addGraphicalElement({
              el: "path",
              component: i,
              props: {index: r, dataLength: a.length},
              container: {label: "group", id: "meso-" + n.groupId},
              label: "high",
              attr: t
            }, !0)), n.lowStickYEntend && (t = Object.assign({
              path: "M" + n.midX + "," + n.lowStickYEntend + ",V" + (n.colY + n.colHeight || n.lowStickYEntend - n.height),
              "stroke-linecap": "round"
            }, e), n.style && Object.assign(t, n.style), i.addGraphicalElement({
              el: "path",
              component: i,
              props: {index: r, dataLength: a.length},
              container: {label: "group", id: "meso-" + n.groupId},
              label: "low",
              attr: t
            }, !0)))
          })), n.hoverInfo = []
        }, i._getTooltext = function (t, e, i) {
          var n, a, o = this.config, l = o.dataInfo[i], s = t ? e ? 1 : .5 : 1;
          return this._isInvalidTooltext(l) ? "" : (n = (0, r.defined)(l.groupConfig), a = "<div style='margin-bottom: 5px; opacity:" + s + "'>\n      <div>" + (0, r.parseUnsafeString)(o.series) + "</div>\n      </div>", n ? (o.series ? a : "") + ["open", "high", "low", "close"].reduce((function (t, e) {
            var i = l[e + "TooltipValue"] || (l[e + "TooltipValue"] = l[e + "Value"] && o.formatterFn({
              value: l[e + "Value"],
              type: "tooltip",
              prefix: o.prefix,
              suffix: o.suffix
            }));
            return t + (i !== r.UNDEF ? "<div style = 'overflow: hidden;margin-top:4px;'>\n        <div style = 'float: left;'>" + e + "</div>\n        <div style = 'float: right;'>" + i + "</div>\n       </div>" : "")
          }), "") : a)
        }, e
      }(f["default"]);
      e["default"] = p
    }, 816: function (t, e, i) {
      "use strict";

      function n(t) {
        var e = /M(.*)V(.*)/g.exec(t), i = e[1], n = e[2];
        return {MX: parseFloat(i.split(",")[0]), MY: parseFloat(i.split(",")[1]), VY: n = parseFloat(n)}
      }

      e.__esModule = !0, e["default"] = void 0;
      var a = {
        "initial.dataset.timeseriesCandlestick": function () {
          var t = this.getFromEnv("yScale").getRangeValue(0), e = -1, i = null, a = function (t, n) {
            if (t === e) return i;
            var a = function (t, e) {
              return {start: 2e-5 * t, end: 1}
            }(t);
            return e = t, i = a, a
          };
          return {
            "rect.appearing": function (e) {
              var i = e.props.index;
              e.props.dataLength;
              return [{
                initialAttr: {y: t}, startEnd: function () {
                  return a(i)
                }, effect: "easeInOutQuart", slot: "middle"
              }]
            }, "line.appearing": function (e) {
              var i = e.attr.path, n = e.props.index, r = (e.props.dataLength, function (t) {
                var e = /M(.*)H(.*)/g.exec(t), i = e[1], n = e[2];
                return {MX: parseFloat(i.split(",")[0]), MY: parseFloat(i.split(",")[1]), HX: n = parseFloat(n)}
              }(i));
              return [{
                initialAttr: {path: "M" + r.MX + "," + t + "H" + r.HX},
                finalAttr: {path: "M" + r.MX + "," + r.MY + "H" + r.HX},
                startEnd: function () {
                  return a(n)
                },
                effect: "easeInOutQuart",
                slot: "middle"
              }]
            }, "high.appearing": function (e) {
              var i = e.attr.path, r = e.props.index, o = (e.props.dataLength, n(i));
              return [{
                initialAttr: {path: "M" + o.MX + "," + t + "V" + (o.VY + (t - o.MY))},
                finalAttr: {path: "M" + o.MX + "," + o.MY + "V" + o.VY},
                startEnd: function () {
                  return a(r)
                },
                effect: "easeInOutQuart",
                slot: "middle"
              }]
            }, "low.appearing": function (e) {
              var i = e.attr.path, r = e.props.index, o = (e.props.dataLength, n(i));
              return [{
                initialAttr: {path: "M" + o.MX + "," + t + "V" + (o.VY + (t - o.MY))},
                finalAttr: {path: "M" + o.MX + "," + o.MY + "V" + o.VY},
                startEnd: function () {
                  return a(r)
                },
                effect: "easeInOutQuart",
                slot: "middle"
              }]
            }
          }
        }
      };
      e["default"] = a
    }, 817: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = n(i(815)), o = n(i(741)), l = i(193), s = i(201), c = n(i(818)), u = n(i(437)),
        d = n(i(436)), f = n(i(358));
      (0, s.addDep)({name: "ohlcAnimation", type: "animationRule", extension: c["default"]});
      var h = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          var e = this.config;
          t.prototype.__setDefaultConfig.call(this), e.defaultBearStyle.stroke = "868AC8", e.defaultBearPredictiveStyle = {}, e.defaultBullPredictiveStyle = {}
        }, i._getRelevantInfo = function (t) {
          var e = this.config;
          return {
            firstTimeStamp: e.firstTimeStamp,
            timeStampGap: e.timeStampGap,
            dataInfo: e.dataInfo,
            fill: void 0 !== t && "bull" === e.dataInfo[t].groupId ? e.bullStyle.stroke : e.bearStyle.stroke
          }
        }, i._drawPlot = function () {
          var t, e, i = this, n = i.config, a = n.dataInfo, r = (0, l.defined)(n.bullOpacity),
            o = (0, l.defined)(n["bull-fill-opacity"]), s = (0, l.defined)(n["bull-stroke-opacity"]),
            c = n.predictiveStyleAttributesBull, u = (0, l.defined)(c.opacity), d = (0, l.defined)(c["fill-opacity"]),
            f = (0, l.defined)(c["stroke-opacity"]), h = (0, l.defined)(n.bearOpacity),
            g = (0, l.defined)(n["bear-fill-opacity"]), p = (0, l.defined)(n["bear-stroke-opacity"]),
            m = n.predictiveStyleAttributesBear, v = (0, l.defined)(m.opacity), y = (0, l.defined)(m["fill-opacity"]),
            b = (0, l.defined)(m["stroke-opacity"]), x = {}, k = {}, S = "", _ = !1;
          r && (x.opacity = n.bullOpacity), o && (x.opacity = n["bull-fill-opacity"]), s && (x.opacity = n["bull-stroke-opacity"]), h && (k.opacity = n.bearOpacity), g && (k.opacity = n["bear-fill-opacity"]), p && (k.opacity = n["bear-stroke-opacity"]), a.forEach((function (n, r) {
            var o, l;
            n.groupConfig && (_ = i.isPlotPredictive(n), S = _ ? n.groupId + "-predictive" : n.groupId, _ && (o = k, l = x, v && (o.opacity = m.opacity), y && (o.opacity = m["fill-opacity"]), b && (o.opacity = m["stroke-opacity"]), u && (l.opacity = c.opacity), d && (l.opacity = c["fill-opacity"]), f && (l.opacity = c["stroke-opacity"])), e = "bull" === n.groupId ? x : k, !!n.lowStickYEntend + !!n.highStickYExtend + !!n.open + !!n.close > 1 ? "bull" === n.groupId ? (t = Object.assign({
              path: "M" + n.midX + "," + (n.highStickYExtend || n.open || n.close) + ",V" + (n.lowStickYEntend || n.close || n.open),
              "stroke-linecap": "round"
            }, e), n.style && Object.assign(t, n.style), i.addGraphicalElement({
              el: "path",
              component: i,
              container: {label: "group", id: "meso-" + S},
              props: {index: r, dataLength: a.length},
              label: "highlow",
              attr: t
            }, !0)) : (t = Object.assign({
              path: "M" + n.midX + "," + (n.highStickYExtend || n.close) + ",V" + (n.lowStickYEntend || n.open),
              "stroke-linecap": "round"
            }, e), n.style && Object.assign(t, n.style), i.addGraphicalElement({
              el: "path",
              component: i,
              container: {label: "group", id: "meso-" + S},
              props: {index: r, dataLength: a.length},
              label: "highlow",
              attr: t
            }, !0)) : (n.lowStickYEntend || n.highStickYExtend) && (t = Object.assign({
              path: "M" + n.midX + "," + (n.lowStickYEntend || n.highStickYExtend) + ",V" + (n.lowStickYEntend || n.highStickYExtend),
              "stroke-linecap": "round"
            }, e), n.style && Object.assign(t, n.style), i.addGraphicalElement({
              el: "path",
              component: i,
              container: {label: "group", id: "meso-" + n.groupId},
              props: {index: r, dataLength: a.length},
              label: "highlow",
              attr: t
            }, !0)), n.open && (t = Object.assign({path: "M" + n.midX + "," + n.open + ",H" + n.leftExtend}, e), n.style && Object.assign(t, n.style), i.addGraphicalElement({
              el: "path",
              component: i,
              container: {label: "group", id: "meso-" + S},
              props: {index: r, dataLength: a.length},
              label: "open",
              attr: t
            }, !0)), n.close && (t = Object.assign({path: "M" + n.midX + "," + n.close + ",H" + n.rightExtend}, e), n.style && Object.assign(t, n.style), i.addGraphicalElement({
              el: "path",
              component: i,
              container: {label: "group", id: "meso-" + S},
              props: {index: r, dataLength: a.length},
              label: "close",
              attr: t
            }, !0), n.style = void 0))
          })), n.hoverInfo = []
        }, i.allocatePosition = function () {
          var t, e, i, n, a, r, s, c, h, g, p, m, v, y, b, x, k, S, _, C, w, E, D, M, T,
            F = this.getFromEnv("binDecider"), I = this.getFromEnv("xScale"), L = this.getFromEnv("yScale"),
            O = this.config, A = O.indices, P = A[0], B = A[1], N = A[2], H = A[3], j = A[4], R = O.dataInfo,
            V = this.getFromEnv("dateColumn"), G = this.getFromEnv("isUTC"), Y = I.bins, U = O.data, z = V.format,
            X = O.measures[0], W = G ? f["default"].utcFormatter(z) : f["default"].formatter(z);
          if (O.repositioningDone = this._isRepositioningNeeded()) {
            for (O.timeStampGap = F.getRangeThreshold()[2], O.availableWidth = y = 0, _ = 0, C = Y.length; _ < C; _++) if (2 !== Y[_].clipType) {
              O.availableWidth = y = I.getRangeValue(Y[_].end) - I.getRangeValue(Y[_].start);
              break
            }
            t = y * (1 - O.plotSpacePercent / 100), R = O.dataInfo = [], U.forEach((function (f, p) {
              if (e = f[P], i = I.getRangeValue(new Date(e.start), new Date(e.end)), n = f[B], a = f[j], r = f[N], s = f[H], w = e.config.duration, k = e.start, S = e.end, p || (O.firstTimeStamp = e.start), b = L.getRangeValue(a), x = L.getRangeValue(n), v = L.getRangeValue(r), m = L.getRangeValue(s), (0, o["default"])(x) || (0, o["default"])(b) || (0, o["default"])(v) || (0, o["default"])(m)) {
                (0, o["default"])(x) && (0, o["default"])(b) && (g = n > a ? "bear" : "bull"), (h = {
                  startDate: k,
                  endDate: S
                }).rightExtend = i + t / 2, h.leftExtend = h.x = i - t / 2, h.endXPosition = h.x + t, h.y = (0, u["default"])([v, x, b, m]), h.closeValuePx = L.getRangeValue(a), h.width = t, h.close = b, h.openValue = n, h.closeValue = a, h.highValue = r, h.lowValue = s, h.value = a, h.open = x, h.midX = i, h.groupId = g || "bull", h.lowStickYEntend = m, h.highStickYExtend = v, E = O.formatterFn({
                  value: n,
                  type: "tooltip",
                  prefix: O.prefix,
                  suffix: O.suffix
                }), T = O.formatterFn({
                  value: a,
                  type: "tooltip",
                  prefix: O.prefix,
                  suffix: O.suffix
                }), D = O.formatterFn({
                  value: r,
                  type: "tooltip",
                  prefix: O.prefix,
                  suffix: O.suffix
                }), M = O.formatterFn({
                  value: s,
                  type: "tooltip",
                  prefix: O.prefix,
                  suffix: O.suffix
                }), h.eventArgs = {
                  index: p,
                  start: k,
                  startText: W.format(k),
                  end: S,
                  endText: W.format(S),
                  binUnit: w.Unit,
                  binMultiplier: w.number,
                  plotType: O.type,
                  timeFormatter: z,
                  aggregation: O.aggregation,
                  measure: X.close,
                  measureHigh: X.high,
                  measureLow: X.low,
                  measureOpen: X.open,
                  measuresClose: X.close,
                  binValue: a,
                  binOpen: n,
                  binHigh: r,
                  binLow: s,
                  binClose: a,
                  binValueFomatted: T,
                  binOpenFormatted: E,
                  binHighFormatted: D,
                  binCloseFormatted: T,
                  binLowFormatted: M
                };
                var y = (0, d["default"])([x, b, v, m]);
                h.height = Math.abs(y[0] - y[1]) || 0, h.colY = h.height / 2 + v - 10, h["stroke-width"] = (0, l.pluckNumber)(O["default-stroke-width"], 1), h.groupConfig = "bull" === g ? "bullConfig" : "bearConfig", c = I.getBinIndex(e.start), R[c] = h
              }
            }))
          }
          (p = O.hoverInfo) && p.forEach((function (t) {
            t.hoverIndices.forEach((function (e) {
              "object" == typeof R[e] && (R[e].style = t[R[e].groupId + "Style"])
            }))
          }))
        }, i.getName = function () {
          return "timeseries-ohlc"
        }, e
      }(r["default"]);
      e["default"] = h
    }, 818: function (t, e, i) {
      "use strict";

      function n(t, e) {
        var i, n, a, r, o, l, s = /M(.*)V(.*)/g;
        return e && (s = /M(.*)H(.*)/g), n = (i = s.exec(t))[1], e && (l = i[2]) || (a = i[2]), r = parseFloat(n.split(",")[0]), o = parseFloat(n.split(",")[1]), a = parseFloat(a), l = parseFloat(l), e ? {
          MX: r,
          MY: o,
          HX: l
        } : {MX: r, MY: o, VY: a}
      }

      e.__esModule = !0, e["default"] = void 0;
      var a = {
        "initial.dataset.timeseries-ohlc": function () {
          var t = this.getFromEnv("yScale").getRangeValue(0), e = -1, i = null, a = function (t, n) {
            if (t === e) return i;
            var a = function (t, e) {
              return {start: 2e-5 * t, end: 1}
            }(t);
            return e = t, i = a, a
          };
          return {
            "highlow.appearing": function (e) {
              var i = n(e.attr.path), r = e.props.index;
              e.props.dataLength;
              return [{
                initialAttr: {path: "M" + i.MX + "," + t + "V" + (i.VY + (t - i.MY))},
                startEnd: a(r),
                effect: "easeInOutQuart"
              }]
            }, "open.appearing": function (e) {
              var i = n(e.attr.path, !0), r = e.props.index;
              e.props.dataLength;
              return [{
                initialAttr: {path: "M" + i.MX + "," + t + "H" + i.HX},
                startEnd: a(r),
                effect: "easeInOutQuart"
              }]
            }, "close.appearing": function (e) {
              var i = n(e.attr.path, !0), r = e.props.index;
              e.props.dataLength;
              return [{
                initialAttr: {path: "M" + i.MX + "," + t + "H" + i.HX},
                startEnd: a(r),
                effect: "easeInOutQuart"
              }]
            }
          }
        }
      };
      e["default"] = a
    }, 819: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(249)), r = n(i(442)), o = n(i(820)), l = n(i(821)), s = function (t, e) {
        return t[e]
      }, c = function () {
        function t() {
          this.keysAccessor = (0, r["default"])([]), this.order = o["default"], this.offset = l["default"], this.valueAccessor = s
        }

        var e = t.prototype;
        return e.generate = function (t) {
          var e, i, n = this.keysAccessor(t), a = t.length, r = n.length, o = new Array(r);
          for (e = 0; e < r; ++e) {
            var l = n[e], s = new Array(a), c = void 0, u = void 0;
            for (o[e] = s, u = 0; u < a; ++u) (c = [0, +this.valueAccessor(t[u], l, u, t)]).data = t[u], s[u] = c;
            s.key = l
          }
          for (i = this.order(o), e = 0; e < r; ++e) o[i[e]].index = e;
          return this.offset(o, i), o
        }, e.setKeysAccessor = function (t) {
          return void 0 === t && (t = (0, r["default"])([])), this.keysAccessor = "function" == typeof t ? t : (0, r["default"])((0, a["default"])(t) ? t.slice() : []), this
        }, e.getKeysAccessor = function () {
          return this.keysAccessor
        }, e.setValueAccessor = function (t) {
          return void 0 === t && (t = s), this.valueAccessor = "function" == typeof t ? t : (0, r["default"])(+t), this
        }, e.getValueAccessor = function () {
          return this.valueAccessor
        }, e.setOrder = function (t) {
          return void 0 === t && (t = o["default"]), this.order = "function" == typeof t ? t : (0, r["default"])((0, a["default"])(t) ? t.slice() : []), this
        }, e.getOrder = function () {
          return this.order
        }, e.setOffset = function (t) {
          return void 0 === t && (t = l["default"]), this.offset = t, this
        }, e.getOffset = function () {
          return this.offset
        }, t
      }();
      e["default"] = c
    }, 820: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t) {
        for (var e = t.length, i = new Array(e); --e >= 0;) i[e] = e;
        return i
      }
    }, 821: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t, e) {
        var i = t.length;
        if (i > 1) {
          var n, a, r, o = t[e[0]], l = o.length;
          for (a = 1; a < i; ++a) for (n = o, o = t[e[a]], r = 0; r < l; ++r) o[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1], o[r][1] += o[r][0]
        }
      }
    }, 822: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t, e) {
        var i = t.length;
        if (i > 1) {
          var n, a, r, o, l = t[e[0]].length, s = 0, c = 0;
          for (c = 0; c < l; ++c) for (r = o = 0, s = 0; s < i; ++s) (a = (n = t[e[s]][c])[1] - n[0]) >= 0 ? (n[0] = r, r += a, n[1] = r) : a < 0 ? (n[1] = o, o += a, n[0] = o) : n[0] = r
        }
      }
    }, 823: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t, e) {
        var i = t.length;
        if (i > 1) {
          var n, a, r, o = t[e[0]], l = o.length;
          for (a = 0; a < o.length; a++) o[a][0] = null;
          for (a = 1; a < i; ++a) for (n = o, o = t[e[a]], r = 0; r < l; ++r) o[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1], o[r][1] += o[r][0]
        }
      }
    }, 824: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(201), o = n(i(806)), l = n(i(807)), s = n(i(358)), c = n(i(741)), u = i(193), d = i(825);
      (0, r.addDep)({name: "timeseriesColumnAnimation", type: "animationRule", extension: l["default"]});
      var f = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this);
          var e = this.config;
          e["default-plotSpacePercent"] = 30, e.visibility = "visible", e.isRange = !0, e.prevBoundaryInfo = {}, e.dataMarkerPadding = 0, e.style = {}, e.hoverInStyle = {}, e.highlightStyle = {}, e.hoverOutStyle = {}, e.defaultStyle = {
            "stroke-width": 1,
            "fill-opacity": 1,
            "stroke-opacity": 1,
            opacity: 1
          }, e.defaultPredictedDataStyle = {
            "stroke-width": 1,
            "fill-opacity": .2,
            "stroke-opacity": 1,
            "stroke-dasharray": 5
          }, e.defaultHoverInStyle = {opacity: .8}, e.defaultHighlightStyle = {opacity: .8}, e.dataInfo = [], e.prevPerBinYExtents = [], e.dataIndices = [1, 2]
        }, i.allocatePosition = function () {
          var t, e, i, n, a, r, o, l, d, f, h, g, p, m, v, y, b, x, k, S, _, C, w, E, D, M = this.config, T = M.indices,
            F = T[0], I = T[1], L = T[2], O = this.getFromEnv("binDecider"), A = this.getFromEnv("xScale"),
            P = this.getFromEnv("yScale"), B = M.dataInfo, N = (M.seriesInfo, this.getFromEnv("dateColumn")),
            H = this.getFromEnv("isUTC"), j = M.groupIndex || 0, R = M.totalGroups || 1, V = M.data, G = N.format,
            Y = H ? s["default"].utcFormatter(G) : s["default"].formatter(G), U = A.bins, z = M.plotBorderThickness,
            X = M.fillColor === M.strokeColor && z > 0, W = O.getRangeThreshold()[2], q = A.getDomain(), Z = q[0],
            $ = q[1];
          if (M.firstTimeStamp = V && V[0] && V[0][F] && V[0][F].start, M.repositioningDone = this._isRepositioningNeeded()) {
            if ("visible" !== M.visibility) return;
            for (B = M.dataInfo = [], M.availableWidth = v = 0, C = 0, w = U.length; C < w; C++) if (2 !== U[C].clipType) {
              M.availableWidth = v = A.getRangeValue(U[C].end) - A.getRangeValue(U[C].start);
              break
            }
            M.timeStampGap = W, m = Math.max(v * (1 - M.plotSpacePercent / 100), 1), e = m / R, S = Math.round(R / 2), _ = R % 2 == 0 ? 0 : .5, g = S - j > 0 ? -e * (S - j - _) : e * (j - S + _), E = +A.getDomainValue(v * (M.plotSpacePercent / 200)) - +A.getDomainValue(0), M.actualStartDomain = +Z + E, M.actualEndDomain = +$ - E, X && (e = Math.max(e - z, 1)), V.forEach((function (s, u) {
              i = s[F], a = Math.max(s[I], s[L]), r = Math.min(s[L], s[I]), y = i.config.duration, x = i.start, k = i.end, u || (M.firstTimeStamp = i.start), o = r, d = P.getRangeValue(o || Math.max(P.getDomain()[0], 0)), l = P.getRangeValue(a), (0, c["default"])(a) && (0, c["default"])(r) && (0, c["default"])(d) && (0, c["default"])(l) && (n = A.getRangeValue(new Date(i.start), new Date(i.end)), X && (n += z / 2), p = (n += g) + e, t = Math.max(1, Math.abs(d - l)), D = {
                startDate: x,
                endDate: k,
                high: a,
                low: r,
                highValue: a,
                lowValue: r,
                yBaseValue: o,
                yBase: d,
                x: n,
                endXPosition: p,
                y: l > d ? d : l,
                width: e,
                height: t,
                eventArgs: {index: u, high: a, low: r, highValue: a, lowValue: r}
              }, b = {
                index: u,
                high: a,
                low: r,
                highValue: a,
                lowValue: r,
                start: x,
                startText: Y.format(x),
                end: k,
                endText: Y.format(k),
                binUnit: y.Unit,
                binMultiplier: y.number,
                plotType: M.type,
                timeFormatter: G,
                aggregation: M.aggregation,
                measure: M.measures[0]
              }, !1, D.eventArgs = b, h = A.getBinIndex(i.start), B[h] = D)
            }))
          }
          (f = M.hoverInfo) && f.forEach((function (t) {
            t.hoverIndices.forEach((function (e) {
              "object" == typeof B[e] && "object" == typeof t.style && (B[e].style = (0, u.extend2)(B[e].style, t.style))
            }))
          }))
        }, i._calculateLimits = function () {
          return (0, d.calculateLimits)(this)
        }, i.getName = function () {
          return "column-range"
        }, i._getTooltext = function (t, e, i) {
          return (0, d.getTooltext)(this, t, e, i)
        }, e
      }(o["default"]);
      e["default"] = f
    }, 825: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e.isWithinShape = function (t, e, i, n, a, r) {
        var o, l, s, c, u, d;
        if (!t) return {pointIndex: e, hovered: !1, component: a};
        return o = t.x, s = t.x, l = t.y, c = t.base, u = Math.sqrt(Math.pow(i - o, 2) + Math.pow(n - l, 2)), d = Math.sqrt(Math.pow(i - s, 2) + Math.pow(n - c, 2)), {
          pointIndex: e,
          hovered: u <= r || d < r,
          pointObj: t,
          component: a
        }
      }, e.calculateLimits = function (t) {
        var e, i = t.config, n = i.indices, l = i.data, s = i.type, c = i.scaleY, u = i.scaleX,
          d = i.calculateFromContext, f = /continuous/.test(t.getName()), h = u.showPlotOverTick(), g = {}, p = l[0],
          m = l[l.length - 1], v = "log" === c.getType(), y = "visible" === t.config.visibility,
          b = t.getFromEnv("chart"), x = d ? b.getContextLimit() : b.getFocusLimit(), k = x[0], S = x[1],
          _ = function (t) {
            return v && t <= 0 ? null : t
          };
        e = t.getPadding(), g.x = h ? [p && p[n[0]].start - e, m && m[n[0]].start + e] : f ? [p && (p[n[0]].start + p[n[0]].end) / 2 - e, m && (m[n[0]].start + m[n[0]].end) / 2 + e] : [p && p[n[0]].start - e, m && m[n[0]].end - e];
        return g.y = y ? [(0, r["default"])(l, (function (t) {
          if (!(t[0].end < k || t[0].start > S)) return (0, r["default"])([t[n[1]], t[n[2]], t[n[3]], t[n[4]]], _);
          return null
        })), (0, o["default"])(l, (function (t) {
          if (!(t[0].end < k || t[0].start > S)) return (0, o["default"])([t[n[1]], t[n[2]], t[n[3]], t[n[4]]], _);
          return null
        }))] : a.UNDEF, g.baseRequired = !0, g.type = s, g
      }, e.getTooltext = function (t, e, i, n) {
        var r, o = t.config, l = o.dataInfo[n], s = e ? i ? 1 : .5 : 1;
        if (t._isInvalidTooltext(l)) return "";
        return r = ["high", "low"].reduce((function (t, e) {
          var i = l[e + "TooltipValue"] || (l[e + "TooltipValue"] = l[e + "Value"] && o.formatterFn({
            value: l[e + "Value"],
            type: "tooltip",
            prefix: o.prefix,
            suffix: o.suffix
          }));
          return t + (i !== a.UNDEF ? "<div style = 'overflow: hidden;margin-top:4px;'>\n      <div style = 'float: left; padding-right: 5px'>" + e + "</div>\n      <div style = 'float: right; padding-right: 5px'>" + i + "</div>\n     </div>" : "")
        }), ""), r = "<div style='margin-top:6px; overflow: hidden; opacity:" + s + "'>\n              " + r + "\n            </div>"
      };
      var a = i(193), r = n(i(437)), o = n(i(438))
    }, 826: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(193), o = n(i(794)), l = i(201), s = i(197), c = n(i(741)), u = n(i(800)), d = n(i(803)),
        f = n(i(804)), h = n(i(802)), g = n(i(805)), p = n(i(358)), m = n(i(814)), v = n(i(793)), y = i(825),
        b = function (t, e) {
          return (t + e) / 2
        }, x = function (t) {
          return void 0 === t && (t = ""), "" === t ? "M0,0" : t
        }, k = function (t) {
          var e = t.x, i = t.y, n = t.width;
          return {y: i, height: t.height, x: e - .0625, width: n + .125}
        }, S = function (t, e) {
          return t + "M" + e.x + "," + e.y + "L" + (e.x + e.width) + "," + e.y + "L" + (e.x + e.width) + "," + (e.y + e.height) + "L" + e.x + "," + (e.y + e.height) + "Z"
        };

      function _(t) {
        return "line" === t || "smooth-line" === t || "step-line" === t
      }

      (0, l.addDep)({name: "continuousAnimation", type: "animationRule", extension: m["default"]});
      var C = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.getName = function () {
          return "continuous-range"
        }, i.getHighlightedIndices = function (t) {
          var e = this.config.dataInfo, i = [];
          return e.forEach((function (e, n) {
            e.y <= t.minValue && e.y >= t.maxValue && i.push(n)
          })), i
        }, i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this);
          var e = this.config;
          e["default-stroke"] = "9194CC", e["default-fill"] = "9194CC", e["default-anchor-stroke"] = (0, s.convertColor)("#ffffff"), e.type = "line", e.isRange = !0, e.plotStyle = {}, e.nullPlotStyle = {}, e.linePlotStyle = {}, e.nullLinePlotStyle = {}, e.areaPlotStyle = {}, e.nullAreaPlotStyle = {}, e.anchorStyle = {}, e.anchorHoverInStyle = {}, e.anchorHoverOutStyle = {}, e.anchorHighlightObj = {}, e.defaultLineStyle = {
            "stroke-opacity": 1,
            "stroke-width": 2,
            "stroke-dasharray": "none",
            fill: "none"
          }, e.defaultNullLineStyle = {
            "stroke-opacity": 1,
            "stroke-width": 2,
            "stroke-dasharray": [10, 5],
            fill: "none"
          }, e.defaultLinePredictiveStyle = {
            "stroke-opacity": 1,
            "stroke-width": 1,
            "stroke-dasharray": 5,
            fill: "none"
          }, e.defaultAreaStyle = {
            "stroke-opacity": 1,
            "stroke-width": 0,
            "fill-opacity": .6
          }, e.defaultNullAreaStyle = {
            "stroke-opacity": 1,
            "stroke-width": 0,
            "fill-opacity": .3
          }, e.defaultAreaPredictiveStyle = {
            "stroke-opacity": 1,
            opacity: .5
          }, e.defaultAnchorStyle = {"fill-opacity": 1, "stroke-width": 1}, e.willInjectNulls = !0
        }, i.allocatePosition = function () {
          var t, e, i, n, a, l, s, m, v, y, _, C, w, E, D, M, T, F, I, L, O = this.config, A = O.indices, P = A[0],
            B = A[1], N = A[2], H = (O.seriesInfo, this.getFromEnv("dateColumn")), j = this.getFromEnv("isUTC"),
            R = O.type, V = O.data, G = O.dataInfo, Y = [], U = this.getFromEnv("binDecider"),
            z = this.getFromEnv("xScale"), X = this.getFromEnv("yScale"), W = U.getRangeThreshold()[2],
            q = Number.parseFloat(O.nullLinePlotStyle["stroke-width"]),
            Z = Number.parseFloat(O.predictiveStyleAttributesLine["stroke-width"]),
            $ = Number.parseFloat(O.linePlotStyle["stroke-width"]), Q = z.bins, K = V.length, J = z.getDomain(),
            tt = J[0], et = J[1], it = H.format, nt = j ? p["default"].utcFormatter(it) : p["default"].formatter(it),
            at = z.showPlotOverTick();
          if (O.firstTimeStamp = V && V[0] && V[0][P] && V[0][P].start, O.repositioningDone = this._isRepositioningNeeded()) {
            if ("visible" !== O.visibility) return;
            for (G = O.dataInfo = [], O.timeStampGap = W, O.availableWidth = 0, E = 0, D = Q.length; E < D; E++) if (2 !== Q[E].clipType) {
              O.availableWidth = z.getRangeValue(Q[E].end) - z.getRangeValue(Q[E].start);
              break
            }
            T = +z.getDomainValue(5.5) - +z.getDomainValue(0), O.actualStartDomain = +tt - T, O.actualEndDomain = +et + T, V.forEach((function (e, o, u) {
              if (F = e[P], v = Math.max(e[B], e[N]), y = Math.min(e[N], e[B]), m = v, I = F.config.duration, i = F.start, n = F.end, a = b(i, n), l = u[o + 1], M = y, C = X.getRangeValue(M || Math.max(X.getDomain()[0], 0)), w = X.getRangeValue(m), o || (O.firstTimeStamp = i), "area" !== R || (0, c["default"])(C)) if ((0, c["default"])(m) && (0, c["default"])(w)) if (_ = z.getBinIndex(i), t = {
                startDate: i,
                endDate: n,
                highValue: v,
                lowValue: y,
                timeInstant: at ? i : a,
                value: m,
                paddingInTimestamp: T,
                yBaseValue: "area" === R ? M : r.UNDEF,
                x: z.getRangeValue(new Date(i), new Date(n)),
                endXPosition: z.getRangeValue(new Date(i), new Date(n)),
                y: w,
                base: C
              }, L = {
                index: o,
                dataValue: m,
                highValue: v,
                lowValue: y,
                start: i,
                startText: nt.format(i),
                end: n,
                endText: nt.format(n),
                binUnit: I.Unit,
                binMultiplier: I.number,
                plotType: O.type,
                timeFormatter: it,
                aggregation: O.aggregation,
                measure: O.measures[0],
                binValue: m,
                binValueFormatted: O.formatterFn && O.formatterFn({
                  value: m,
                  type: "tooltip",
                  prefix: O.prefix,
                  suffix: O.suffix
                })
              }, null, t.eventArgs = L, G[_] = t, l) {
                var d = z.getBinIndex(l[P].start);
                Y.push(t), s = b(l[P].start, l[P].end), O.willInjectNulls && s - a - (z.clips[d] - z.clips[_]) > 1.5 * W && Y.push(null)
              } else K - o == 1 && Y.push(t); else O.willInjectNulls && Y.push(null)
            })), e = new o["default"](function (t) {
              switch (t) {
                case"area":
                case"area-range":
                case"smooth-area":
                case"step-area":
                  return u["default"];
                case"line":
                case"smooth-line":
                case"mean-line":
                case"step-line":
                default:
                  return d["default"]
              }
            }(R)).setConnectUndefineds(O.connectNullData).setChunks({
              def: {clipAdjustment: $},
              undef: {clipAdjustment: q},
              predictive: {clipAdjustment: Z}
            }).setCurve(function (t) {
              switch (t) {
                case"smooth-line":
                case"smooth-area":
                  return g["default"];
                case"step-area":
                case"step-line":
                  return f["default"];
                case"line":
                case"area":
                case"area-range":
                default:
                  return h["default"]
              }
            }(R)).setDefined((function (t) {
              return !!t
            })).setChunkDecider((function (t) {
              return t.startDate >= O.prediction.dateMs ? "predictive" : "def"
            })).setXAccessor((function (t) {
              return t.x
            })).setYAccessor((function (t) {
              return t.y
            })), R, e.setYBaseAccessor((function (t) {
              return t.base
            })), O.chunks = e.generate(Y), O.path = x(O.chunks.def.path), O.clipPath = x(O.chunks.def.clipRects.map(k).reduce(S, "")), O.nullPath = x(O.chunks.undef.path), O.nullClipPath = x(O.chunks.undef.clipRects.map(k).reduce(S, "")), O.predictivePath = x(O.chunks.predictive.path), O.predictiveClipPath = x(O.chunks.predictive.clipRects.map(k).reduce(S, "")), O.topChunks = e.getLineChunkerYTop().generate(Y), O.topPath = x(O.topChunks.def.path), O.topClipPath = x(O.topChunks.def.clipRects.map(k).reduce(S, "")), O.topNullPath = x(O.topChunks.undef.path), O.topNullClipPath = x(O.topChunks.undef.clipRects.map(k).reduce(S, "")), O.topPredictivePath = x(O.topChunks.predictive.path), O.topPredictiveClipPath = x(O.topChunks.predictive.clipRects.map(k).reduce(S, "")), O.bottomChunks = e.getLineChunkerYBase().generate(Y), O.bottomPath = x(O.bottomChunks.def.path), O.bottomClipPath = x(O.bottomChunks.def.clipRects.map(k).reduce(S, "")), O.bottomNullPath = x(O.bottomChunks.undef.path), O.bottomNullClipPath = x(O.bottomChunks.undef.clipRects.map(k).reduce(S, "")), O.bottomPredictivePath = x(O.bottomChunks.predictive.path), O.bottomPredictiveClipPath = x(O.bottomChunks.predictive.clipRects.map(k).reduce(S, ""))
          }
        }, i._drawPlot = function () {
          var t, e = this, i = e.config, n = i.linePlotStyle, a = i.areaPlotStyle, o = i.nullLinePlotStyle,
            l = i.nullAreaPlotStyle, s = i.predictiveStyleAttributesLine, c = i.predictiveStyleAttributesArea,
            u = i.dataInfo;
          e.addGraphicalElement({
            el: "group",
            container: {id: "meso", label: "group"},
            component: e,
            label: "group",
            id: "meso-line",
            attr: {name: "line-common-meso", visibility: i.visibility}
          }), e.addGraphicalElement({
            el: "group",
            container: {id: "thermo", label: "group"},
            component: e,
            label: "group",
            id: "thermo-line",
            attr: {name: "line-common-thermo", visibility: i.visibility}
          }), e.addGraphicalElement({
            el: "group",
            container: {id: "meso-line", label: "group"},
            component: e,
            label: "group",
            id: "meso-plot",
            attr: {name: "line-plot-meso", visibility: i.visibility}
          }, !0), e.addGraphicalElement({
            el: "group",
            container: {id: "thermo-line", label: "group"},
            component: e,
            label: "group",
            id: "thermo-plot",
            attr: {name: "line-plot-thermo", visibility: i.visibility}
          }, !0), e.addGraphicalElement({
            el: "group",
            container: {id: "thermo-line", label: "group"},
            component: e,
            label: "group",
            id: "thermo-anchor",
            attr: {name: "line-anchor-thermo", visibility: i.visibility}
          }, !0), i.connectNullData && e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "meso-plot"},
            attr: Object.assign({path: i.nullPath, "clip-path": i.nullClipPath}, _(i.type) ? o : l),
            label: "path",
            component: e
          }, !0), e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "meso-plot"},
            attr: Object.assign({path: i.path, "clip-path": i.clipPath}, _(i.type) ? n : a),
            label: "path",
            component: e
          }, !0), i.prediction.enabled && e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "meso-plot"},
            attr: Object.assign({path: i.predictivePath, "clip-path": i.predictiveClipPath}, _(i.type) ? s : c),
            label: "path",
            component: e
          }, !0), i.topPath && (i.connectNullData && e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "thermo-plot"},
            attr: Object.assign({path: i.topNullPath, "clip-path": i.topNullClipPath}, o),
            label: "topPath",
            component: e
          }, !0), e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "thermo-plot"},
            attr: Object.assign({path: i.topPath, "clip-path": i.topClipPath}, n),
            label: "topPath",
            component: e
          }, !0), i.prediction.enabled && e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "meso-plot"},
            attr: Object.assign({path: i.topPredictivePath, "clip-path": i.topPredictiveClipPath}, s),
            label: "path",
            component: e
          }, !0)), i.bottomPath && (i.connectNullData && e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "thermo-plot"},
            attr: Object.assign({path: i.bottomNullPath, "clip-path": i.bottomNullClipPath}, o),
            label: "topPath",
            component: e
          }, !0), e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "thermo-plot"},
            attr: Object.assign({path: i.bottomPath, "clip-path": i.bottomClipPath}, n),
            label: "bottomPath",
            component: e
          }, !0), i.prediction.enabled && e.addGraphicalElement({
            el: "path",
            container: {label: "group", id: "meso-plot"},
            attr: Object.assign({path: i.bottomPredictivePath, "clip-path": i.bottomPredictiveClipPath}, s),
            label: "path",
            component: e
          }, !0)), "show" === i.mode ? i.sharedAnchorIndices && i.sharedAnchorIndices.length && i.sharedAnchorIndices.forEach((function (n) {
            t = u[n], i.lastShownIndices = i.sharedAnchorIndices, t && !isNaN(t.value) && e.addGraphicalElement({
              el: "path",
              container: {label: "group", id: "thermo-anchor"},
              attr: Object.assign({
                path: (0, r.polyPathToPath)([2, t.x, t.y, i.radius, 0, 0]),
                visibility: "show"
              }, i.isDsHovered ? i.anchorHoverInStyle : i.isOtherDsHovered ? i.anchorStyle : i.anchorHighlightObj),
              id: "shared-anchor-" + n,
              label: i.dsType + "-anchor"
            }), t && !isNaN(t.value) && e.addGraphicalElement({
              el: "path",
              container: {label: "group", id: "thermo-anchor"},
              attr: Object.assign({
                path: (0, r.polyPathToPath)([2, t.x, t.base, i.radius, 0, 0]),
                visibility: "show"
              }, i.isDsHovered ? i.anchorHoverInStyle : i.isOtherDsHovered ? i.anchorStyle : i.anchorHighlightObj),
              id: "shared-anchor-" + n,
              label: i.dsType + "-anchor"
            })
          })) : i.hideIndices && i.hideIndices.length && i.hideIndices.forEach((function (n) {
            (t = u[n]) && !isNaN(t.value) && e.addGraphicalElement({
              el: "path",
              container: {label: "group", id: "meso-anchor"},
              attr: {visibility: "hidden"},
              id: "shared-anchor-" + n,
              label: i.dsType + "-anchor"
            })
          }))
        }, i._getHoveredPlot = function (t, e) {
          var i, n, a, r, o, l, s = t, c = e, u = this.getFromEnv("xScale"), d = u.getRange(),
            f = [this.getChildren("dataMarker")], h = this.config, g = "visible" === h.visibility, p = h.dataInfo,
            m = p.length, v = this.getLinkedParent().getTranslation(), b = v.x, x = v.y;
          if (c -= x, (s -= b) < d[0] || s > d[1]) return {component: this};
          if (l = u.getBinIndex(u.getDomainValue(s)), n = Math.floor(Math.max(l, 0)), a = Math.ceil(Math.min(l, m - 1)), f.forEach((function (t) {
            var e = t;
            !r && e && (e = e[0]) && (r = e._checkPointOverMarker(l, s, c, h.availableWidth))
          })), !r) for (o = a; o >= n && (i = p[o], !(r = g ? (0, y.isWithinShape)(i, o, s, c, this, 5) : {}).hovered); o--) ;
          return !r && (r = {}), r.hovered ? r.binIndexHovered = r.pointIndex : (r.binIndexHovered = u.getBinIndex(u.getDomainValue(s)), r.pointObj = h.dataInfo[r.binIndexHovered] || u.getBinBounds(l), r.component = this), h.binIndexHovered = r.binIndexHovered, r
        }, i._calculateLimits = function () {
          return (0, y.calculateLimits)(this)
        }, i._getTooltext = function (t, e, i) {
          return (0, y.getTooltext)(this, t, e, i)
        }, e
      }(v["default"]);
      e["default"] = C
    }, 827: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(828));
      e["default"] = function (t) {
        var e = t.attachChild(a["default"], "verticalCrossLine"), i = t.getFromEnv("dataSource");
        e.configure({
          scale: t.config.xConfigs[0].scale,
          type: "vertical",
          timeFormatterFn: t.config.xConfigs[0].timeFormatterFn,
          inputStyle: i.crossline && i.crossline.style || {}
        })
      }
    }, 828: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = i(193), l = n(i(741)), s = "M", c = "L", u = "l", d = "h", f = "v",
        h = function (t) {
          function e() {
            return t.apply(this, arguments) || this
          }

          (0, a["default"])(e, t);
          var i = e.prototype;
          return i.__setDefaultConfig = function () {
            t.prototype.__setDefaultConfig.call(this);
            var e = this.config;
            e.type = "vertical", e.values = [], e._defaultLineStyle = {
              stroke: "#9a9a9a",
              "stroke-width": 1,
              "stroke-opacity": 1
            }, e._defaultTextStyle = {
              fill: "#ffffff",
              "font-size": "10px",
              "font-weight": "normal",
              "font-style": "normal",
              "text-anchor": "middle"
            }, e._defaultTagStyle = {fill: "#5f5f5f"}, e._defaultPadding = 2
          }, i.configureAttributes = function (e) {
            t.prototype.configureAttributes.call(this, e);
            var i, n, a = this.config, r = this.getFromEnv("baseTextStyle"), o = this.getFromEnv("getStyleDef");
            for (var l in e) e.hasOwnProperty(l) && (a[l] = e[l]);
            i = a.type, n = a.inputStyle, a._lineStyle = Object.assign({}, a._defaultLineStyle, o(n.line), o(n[i + "-line"])), a._textStyle = Object.assign({}, a._defaultTextStyle, r, o(n.label), o(n[i + "-label"])), a._tagStyle = Object.assign({}, a._defaultTagStyle, o(n.tag), o(n[i + "-tag"]))
          }, i.getPathArrs = function () {
            var t, e = this.config, i = "vertical" === e.type, n = e.scale, a = e.values, r = [],
              o = this.getLinkedParent().config, l = o.padding, c = o.canvasLeft - l.left, u = o.canvasTop - l.top,
              h = o.canvasWidth, g = o.canvasHeight;
            return a.forEach((function (e) {
              var a = n.getRangeValue(e);
              a && (t = i ? [s, a, u, f, g] : [s, c, a, d, h], r.push(t))
            })), r
          }, i.drawVerticalCrosslineText = function () {
            var t, e, i, n, a = this, r = a.config, u = r.dateRange,
              h = r.timeFormatterFn({dateRange: u, type: "crossline"}), g = r.values, p = r.scale,
              m = (0, o.pluckNumber)(r.padding, r._defaultPadding), v = a.getLinkedParent().config, y = v.padding,
              b = v.canvasLeft - y.left, x = v.canvasTop - y.top, k = v.canvasWidth, S = x + v.canvasHeight, _ = b + k,
              C = a.getFromEnv("smartLabel"), w = 0;
            g.forEach((function (o, u) {
              (0, l["default"])(o) && (C.setStyle(r._textStyle), i = C.getOriSize(h), e = p.getRangeValue(o), n = "crossline-" + u, a.addGraphicalElement({
                el: "group",
                container: {id: "thermo", label: "thermo", isParent: !0},
                component: a,
                label: n,
                attr: {name: "veritcal-crossline-marker-group"},
                id: n
              }), e + i.width / 2 + 2 * m > _ ? (t = [s, e, S, c, e, S + m, f, i.height + 2 * m, d, -(i.width + 4 * m), f, -(i.height + 2 * m), c, e - m, S + m, "z"], r._textStyle["text-anchor"] = "end", w = -2 * m) : e - i.width / 2 - 2 * m < b ? (t = [s, e, S, c, e, S + m, f, i.height + 2 * m, d, i.width + 4 * m, f, -(i.height + 2 * m), c, e + m, S + m, "z"], r._textStyle["text-anchor"] = "start", w = 2 * m) : (t = [s, e, S, c, e - m, S + m, c, e - i.width / 2 - 2 * m, S + m, f, i.height + 2 * m, d, i.width + 4 * m, f, -(i.height + 2 * m), c, e + m, S + m, "z"], r._textStyle["text-anchor"] = "middle"), a.addGraphicalElement({
                el: "path",
                attr: {path: t},
                css: r._tagStyle,
                id: "vertical-crossline-marker-" + u,
                container: {label: n}
              }), a.addGraphicalElement({
                el: "text",
                attr: {text: h, x: e + w, y: S + 2 * m + i.height / 2},
                css: r._textStyle,
                id: "vertical-crossline-text-" + u,
                container: {label: n}
              }), C.setStyle(r._textStyle), i = C.getOriSize(h), e = p.getRangeValue(o))
            }))
          }, i.drawHorizontalCrosslineText = function () {
            var t, e, i, n = this, a = this, r = a.config;
            r.values.forEach((function (s, c) {
              (0, l["default"])(s) && (t = r.formatterFn({
                value: r.texts[c],
                type: "crossline",
                prefix: r.prefix,
                suffix: r.suffix
              }), i = n.getHorizontalMarkerProps(s, c), e = "crossline-" + c, a.addGraphicalElement({
                el: "group",
                container: {id: "thermo", label: "thermo", isParent: !0},
                component: a,
                label: e,
                attr: {name: "horizontal-crossline-marker-group"},
                id: e
              }), r._tagStyle.fill = (0, o.pluck)(r.markerFill, r._tagStyle.fill), r._tagStyle.stroke = (0, o.pluck)(r._tagStyle.stroke, r.markerFill), a.addGraphicalElement({
                el: "path",
                attr: {path: i.markerPath},
                css: r._tagStyle,
                id: "horizontal-crossline-marker-" + c,
                container: {label: e}
              }), a.addGraphicalElement({
                el: "text",
                attr: {text: t, x: i.markerText.x, y: i.markerText.y},
                css: r._textStyle,
                id: "horizontal-crossline-text-" + c,
                outlineText: r.showTextOutline,
                container: {label: e}
              }))
            }))
          }, i.getHorizontalMarkerProps = function (t, e) {
            var i, n, a, r = this.config, l = r.scale, c = r.yAxisAlignment,
              h = (0, o.pluckNumber)(r.padding, r._defaultPadding), g = this.getLinkedParent().config,
              p = r.formatterFn({value: r.texts[e], type: "crossline", prefix: r.prefix, suffix: r.suffix}),
              m = g.borderConfig, v = g.padding, y = g.canvasLeft + m.leftBorder - v.left,
              b = y + (g.canvasWidth - m.rightBorder + v.left), x = this.getFromEnv("smartLabel"), k = {}, S = {};
            switch (x.setStyle(r._textStyle), n = x.getSmartText(p), i = l.getRangeValue(t), c) {
              case"left":
                a = [s, y, i, d, -5, u, -5, -n.height / 2 - 2 * h, d, -(n.width + 2 * h), f, n.height + 4 * h, d, n.width + 2 * h, u, 5, -n.height / 2 - 2 * h], k.x = y - 10 - (n.width + 2 * h) / 2, k.y = i;
                break;
              case"right":
                a = [s, b, i, d, 5, u, 10, -n.height / 2 - 2 * h, d, n.width + 2 * h, f, n.height + 4 * h, d, -(n.width + 2 * h), u, -10, -n.height / 2 - 2 * h], k.x = b + 10 + (n.width + 2 * h) / 2, k.y = i
            }
            return S.markerPath = a, S.markerText = k, S
          }, i.draw = function () {
            var t = this, e = t.config;
            t.getPathArrs().forEach((function (i, n) {
              t.addGraphicalElement({
                el: "group",
                container: {id: "strato", label: "strato", isParent: !0},
                component: t,
                label: "verticalcrossline-" + n,
                attr: {name: "vertical-crossline-group"},
                id: "crossline-" + n
              }), t.addGraphicalElement({
                el: "group",
                container: {id: "strato", label: "strato", isParent: !0},
                component: t,
                label: "horizontalcrossline-" + n,
                attr: {name: "horizontal-crossline-group"},
                id: "crossline-" + n
              }), i.length && t.addGraphicalElement({
                el: "path",
                attr: {path: i},
                css: e._lineStyle,
                container: {label: e.type + "crossline-" + n},
                id: e.type + "-crossline-path-" + n,
                component: t
              }), e.showMarker && ("vertical" === e.type ? t.drawVerticalCrosslineText() : t.drawHorizontalCrosslineText())
            }))
          }, e
        }(r.SmartRenderer);
      e["default"] = h
    }, 829: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(828)), r = i(193);
      e["default"] = function (t) {
        var e = t.getFromEnv("dataSource"), i = t.getFromEnv("chart-attrib");
        t.attachChild(a["default"], "horizontalCrossLine").configure({
          type: "horizontal",
          inputStyle: e.crossline && e.crossline.style || {},
          showTextOutline: (0, r.pluckNumber)(i.textoutline, 0)
        })
      }
    }, 830: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(831));
      e["default"] = function (t) {
        var e = t.config;
        e.gridBandSupported && e.showGridBand && t.attachChild(a["default"], "gridBand").configure({style: e.gridBandStyle})
      }
    }, 831: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = i(193), l = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this), this.config.direction = "horizontal", this.config.style = {}, this.config.defaultStyle = {
            stroke: "#EFEFEF",
            "stroke-width": "0",
            fill: "#EFEFEF",
            "fill-opacity": "1"
          }
        }, i.configureAttributes = function (e) {
          void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
          var i = this.config;
          for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n])
        }, i.getBands = function () {
          var t, e, i, n, a, r, o, l, s, c, u, d = this.getLinkedParent().config, f = [], h = [];
          for (l = (e = d.yConfigs[0]).scale, i = d.canvasBGLeft, a = l.getRangeValue.bind(l), r = d.canvasBGLeft + d.canvasBGWidth, e.tickarguments && (h = e.tickarguments), h.push(e.skipinfo || {}), h.push(e.dayinmajor || !1), o = a((s = (t = l).ticks.apply(t, h))[0]) - a(s[1]), c = 0, u = s.length; c < u; c += 2) n = a(s[c]) - o, f.push({
            x: i,
            y: n,
            width: r,
            height: o
          });
          return f
        }, i.draw = function () {
          var t, e = this, i = e.config, n = e.getLinkedParent().config, a = n.canvasLeft, r = n.canvasTop,
            l = n.canvasWidth, s = n.canvasHeight,
            c = ["M" + a + "," + (r - n.padding.top), "h" + l, "v" + s, "h" + -l, "Z"];
          i.style = e.getFromEnv("getStyleDef")(i.style), (t = (0, o.extend2)((0, o.extend2)({}, i.defaultStyle), i.style))["stroke-width"] = 0, e.addGraphicalElement({
            el: "group",
            container: {id: "strato", label: "group", isParent: !0},
            component: e,
            label: "gridBand",
            attr: {name: "grid-band-group", "clip-path": c},
            id: "gridBand"
          }), e.getBands().forEach((function (i, n) {
            i.opacity = t.opacity, e.addGraphicalElement({
              el: "rect",
              attr: i,
              css: t,
              container: {label: "gridBand"},
              id: "grid-band-" + n,
              component: e,
              label: "band"
            })
          }))
        }, e
      }(r.SmartRenderer);
      e["default"] = l
    }, 832: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t, e) {
        var i = t[e];
        return Object.assign({}, i, {columnname: i.columnname})
      }
    }, 833: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = i(193), r = n(i(834)), o = ["left", "center", "right"];
      e["default"] = function (t) {
        var e, i, n, l, s = t.getFromEnv("dataSource"), c = s.caption || {}, u = s.subcaption || {},
          d = t.getFromEnv("getStyleDef");
        n = (c.position || "").toLowerCase(), o.indexOf(n) < 0 && (n = "left"), "center" === n && (n = "middle"), l = (u.position || "").toLowerCase(), o.indexOf(l) < 0 && (l = "left"), "center" === l && (l = "middle"), e = (0, a.parseUnsafeString)(c.text) || "", i = d(c.style && c.style.text);
        var f = {
          caption: e,
          subCaption: u.text && (0, a.parseUnsafeString)(u.text),
          captionAlignment: n,
          subCaptionAlignment: l,
          captionCss: i,
          subCaptionCss: d(u.style && u.style.text)
        };
        (0, a.componentFactory)(t, r["default"], "caption", 1, [f])
      }
    }, 834: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a, r, o = n(i(207)), l = i(208), s = i(193),
        c = ((a = {})["font-size"] = "16px", a["font-style"] = "normal", a["font-weight"] = "bold", a.fill = "#5F5F5F", a),
        u = ((r = {})["font-size"] = "12px", r["font-style"] = "normal", r["font-weight"] = "normal", r.fill = "#B1B1B1", r),
        d = function (t) {
          function e() {
            return t.apply(this, arguments) || this
          }

          (0, o["default"])(e, t);
          var i = e.prototype;
          return i.__setDefaultConfig = function () {
            t.prototype.__setDefaultConfig.call(this);
            var e = this.config;
            e.captionCss = c, e.subCaptionCss = u, e.alignment = "left", e.gap = 0
          }, i.configureAttributes = function (e) {
            void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
            var i = this.config, n = this.getFromEnv("baseTextStyle");
            Object.keys(e).forEach((function (t) {
              return i[t] = e[t]
            })), i.captionCss = Object.assign({}, c, n, i.captionCss || {}), i.subCaptionCss = Object.assign({}, u, n, i.subCaptionCss || {})
          }, i.setDimension = function (t) {
            var e, i, n, a, r = this.config, o = this.getFromEnv("smartLabel"), l = t.height - 10, s = t.width, c = 0,
              u = 0;
            return r.subCaption ? (c = .7 * (e = l - (a = r.gap = .02 * l)), u = r.caption ? .3 * e : l) : e = c = l, o.useEllipsesOnOverflow(!0), o.setStyle(r.captionCss), i = r.captionDim = o.getSmartText(r.caption, s, c), o.setStyle(r.subCaptionCss), n = r.subCaptionDim = o.getSmartText(r.subCaption, s, u), l = i.height + (r.subCaption ? a : 0) + n.height, l += 0 === l ? 0 : 10, r.spaceTaken = {
              width: s,
              height: l
            }, {height: l, width: s}
          }, i.draw = function () {
            var t, e, i, n, a = this.config, r = this.getFromEnv("chart").config, o = a.captionDim, l = a.subCaptionDim,
              c = a.spaceTaken, u = {text: o.text}, d = {text: l.text};
            switch (a.captionAlignment) {
              case"right":
                t = c.width, i = "end";
                break;
              case"middle":
                t = c.width / 2, i = "middle";
                break;
              case"left":
              default:
                t = 0, i = "start"
            }
            switch (a.subCaptionAlignment) {
              case"right":
                e = c.width, n = "end";
                break;
              case"middle":
                e = c.width / 2, n = "middle";
                break;
              case"left":
              default:
                e = 0, n = "start"
            }
            u.x = t, d.x = e, u["text-anchor"] = i, d["text-anchor"] = n, u["vertical-align"] = d["vertical-align"] = "top", u.y = 0, d.y = a.gap + o.height, this.addGraphicalElement({
              el: "group",
              container: {id: "strato", label: "group", isParent: !0},
              component: this,
              label: "group",
              attr: {name: "caption-strato", transform: a.translate},
              id: "strato"
            }), a.caption && this.addGraphicalElement({
              el: "text",
              attr: {
                x: u.x,
                y: u.y,
                text: u.text,
                "vertical-align": u["vertical-align"],
                opacity: a.captionCss.opacity,
                "text-anchor": u["text-anchor"]
              },
              css: a.captionCss,
              container: {id: "strato", label: "group", isParent: !1},
              tooltext: r.showTooltip ? o.tooltext : s.UNDEF,
              component: this,
              id: "caption",
              label: "text"
            }), a.subCaption && this.addGraphicalElement({
              el: "text",
              attr: {
                x: d.x,
                y: d.y,
                text: d.text,
                "vertical-align": d["vertical-align"],
                opacity: a.subCaptionCss.opacity,
                "text-anchor": d["text-anchor"]
              },
              css: a.subCaptionCss,
              container: {id: "strato", label: "group", isParent: !1},
              tooltext: r.showTooltip ? l.tooltext : s.UNDEF,
              component: this,
              id: "subCaption",
              label: "text"
            })
          }, e
        }(l.SmartRenderer);
      e["default"] = d
    }, 835: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(401)), r = n(i(331)), o = n(i(249)), l = n(i(377)), s = n(i(743)), c = n(i(742)), u = n(i(724)),
        d = n(i(836)),
        f = ["column", "line", "step-line", "smooth-line", "area", "step-area", "smooth-area", "candlestick", "ohlc", "column-range", "area-range"],
        h = {millisecond: !0, second: !0, minute: !0, hour: !0, day: !0, month: !0, year: !0},
        g = (0, d["default"])(a["default"]), p = function () {
          return !0
        }, m = function (t) {
          return f.includes(t)
        }, v = function (t) {
          return (0, l["default"])(t) && (e = t, (0, c["default"])(e.plot) || (0, r["default"])(e.plot) || (0, l["default"])(e.plot) || function (t) {
            return (0, r["default"])(t.clip)
          }(t));
          var e
        }, y = function (t, e, i) {
          void 0 === i && (i = {});
          var n = [];
          if ((0, c["default"])(t) && e(t)) {
            var a = (0, l["default"])(i.plot) ? Object.assign({}, i.plot) : {}, r = a.type || i.plottype;
            a.type = m(r) ? r : "line", a.value = t, a.aggregation = g(a.aggregation || i.aggregation), n.push(Object.assign({}, i, {plot: [a]}))
          }
          return n
        }, b = function (t, e) {
          var i, n, a, r, o, s = m(t.type) ? t.type : "line", c = "candlestick" === s || "ohlc" === s,
            u = "column-range" === s || "area-range" === s, d = function (t) {
              return e(t) ? t : void 0
            }, f = {};
          return i = (0, l["default"])(t.value) ? d(t.value.value) : d(t.value), c ? ((0, l["default"])(t.value) && (n = d(t.value.open), a = d(t.value.close), r = d(t.value.high), o = d(t.value.low)), f = n && r && o && a ? Object.assign({}, t, {
            type: s,
            high: r,
            low: o,
            open: n,
            close: a,
            value: null
          }) : n || r || o || a ? Object.assign({}, t, {
            type: s,
            high: r,
            low: o,
            open: n,
            close: a,
            value: null
          }) : Object.assign({}, t, {
            type: s,
            high: i,
            low: i,
            open: i,
            close: i,
            value: i
          })) : u ? ((0, l["default"])(t.value) && (r = d(t.value.high), o = d(t.value.low)), r && o ? f = Object.assign({}, t, {
            type: s,
            high: r,
            low: o,
            value: null
          }) : r || o || (f = Object.assign({}, t, {
            type: s,
            high: i,
            low: i,
            value: i
          }))) : f = Object.assign({}, t, {
            type: s,
            value: i
          }), f.typeinnavigator = m(f.typeinnavigator) ? f.typeinnavigator : void 0, c && (i || n || a || r || o) || i ? f : u && r && o ? f : void 0
        }, x = function (t, e) {
          var i = [], n = t.plot, a = (0, l["default"])(n),
            u = t.hasOwnProperty("plot") && !(a && !n.hasOwnProperty("value")) && "axis", d = function (t) {
              return (0, c["default"])(t) && e(t)
            };
          if (v(t)) {
            var f = [], p = (0, r["default"])(t.clip) ? t.clip.map((function (t) {
              return (0, s["default"])(t.to) || (t.to = t.from), t.hasOwnProperty("format") && !(0, s["default"])(t.format) && delete t.format, (0, l["default"])(t.repeat) && (0, s["default"])(t.repeat.unit) && h[t.repeat.unit.toLowerCase()] ? (t.repeat.unit = t.repeat.unit.toLowerCase(), t.repeat.multiplier = Number(t.repeat.multiplier), t.repeat.multiplier || (t.repeat.multiplier = 1)) : delete t.repeat, t
            })).filter((function (t) {
              return (0, s["default"])(t.from) && (0, l["default"])(t.repeat) && (0, s["default"])(t.repeat.unit)
            })) : [];
            if (i.push(Object.assign({}, t, t.aggregation ? p.length ? {
              plot: f,
              aggregation: g(t.aggregation),
              clip: p
            } : {plot: f, aggregation: g(t.aggregation)} : (0, o["default"])(t.clips) ? {
              plot: f,
              clip: p
            } : {plot: f})), (a || (0, c["default"])(n)) && (n = [n]), (0, r["default"])(n)) n.filter((function (t) {
              return !!t
            })).forEach((function (e) {
              var i;
              if ((0, l["default"])(e)) {
                var n = e.type || t.plottype;
                i = b(Object.assign({}, e, {aggregation: g(e.aggregation || t.aggregation), type: n}), d)
              } else d(e) && (i = b({value: e, type: t.plottype, aggregation: g(t.aggregation)}, d));
              i && f.push(i)
            }))
          }
          return i[0] && i[0].plot.length ? {
            output: i,
            action: !!((0, o["default"])(n) && n.length > i[0].plot.length) && "plot"
          } : {output: [], action: u}
        }, k = function (t, e, i) {
          var n = [], a = [];
          if ((0, s["default"])(t)) n = y(t, e); else if ((0, l["default"])(t)) {
            var r, c = x(t, e);
            n = c.output, (r = c.action) && a.push(r)
          } else if ((0, o["default"])(t)) {
            var u = function (t, e, i) {
              var n, a = [], r = [];
              return t.forEach((function (t) {
                (0, s["default"])(t) ? a = a.concat(y(t, e, i)) : (0, l["default"])(t) && (n = x(t, e), a = a.concat(n.output), n.action && r.push(n.action))
              })), {output: a, actions: r}
            }(t, e, i);
            n = u.output, a = u.actions
          }
          return {output: n, actions: a}
        }, S = function (t, e, i) {
          void 0 === t && (t = []), void 0 === i && (i = !0);
          var n = [], a = [], r = 0, c = (0, l["default"])(e);
          if (e) {
            var d = k(e, (function (e) {
              return t.indexOf(e) >= 0
            }));
            n = d.output, a = d.actions, r = n.length;
            var f = a.includes("axis");
            c ? f && (a = ["fullaxis"]) : (0, o["default"])(e) && r < e.length && (r ? !f && a.push("axis") : a = ["fullaxis"])
          }
          n.length || (n = k(t, p, c && e).output);
          return i && n.forEach((function (t) {
            if (!(0, s["default"])(t.title)) {
              for (var e = [], i = 0; i < t.plot.length; i++) t.plot[i].value && e.push(t.plot[i].value);
              t.title = e.join(" - ")
            }
          })), {expandedAxis: n, actions: (0, u["default"])(a)}
        };
      e["default"] = S
    }, 836: function (t, e, i) {
      "use strict";
      e.__esModule = !0, e["default"] = void 0;
      e["default"] = function (t) {
        return function (e) {
          var i = null == e ? "avg" : e, n = i.toLowerCase();
          return t.getDefaultAggregations()[n] ? n : t.getRegisteredAggregations()[i] ? i : "avg"
        }
      }
    }, 837: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e.validateFocusLimit = function (t, e, i) {
        var n = i.getFromEnv("contextBins")[0].getBinDomain(), a = n[1].getTime(), r = n[0].getTime(), o = t.start,
          l = t.end;
        if (null == o && null == l) return !1;
        if (isNaN(o) && isNaN(l)) return !1;
        isNaN(o) || !isNaN(l) && null !== l ? !isNaN(o) && null !== o || isNaN(l) || (o = e.start) : l = e.end;
        o > l && (o += l, o -= l = o - l);
        return o = Math.max(r, o), l = Math.min(a, l), [o, l]
      }, e.filterStandarBinsToUserConfig = function (t) {
        for (var e = {}, i = 0; i < t.length; i++) {
          var n = t[i], a = n[0].name();
          e[a] ? e[a].push(n[1]) : e[a] = [n[1]]
        }
        return e
      }, e.setBinningRules = function (t) {
        var e = this.getJSONData();
        null == e.xaxis && (e.xaxis = {});
        return e.xaxis.binning = t, this.setJSONData(e), this
      }, e.validateUserBin = function (t, e) {
        var i = t.unit, n = t.multiplier, r = e.getFromEnv("contextBins")[0], o = r.getBinMin()[2],
          l = r.getStandardBins(), s = r.intervalIndexMap;
        if (n = (0, a["default"])(n, 1), i = i.toLowerCase(), null == s[i]) return !1;
        for (var c = s[i]; c < l.length; c++) {
          var u = l[c];
          if (u[0].name() !== i || u[2] < o) break;
          if (u[1] === n) return {unit: i, multiplier: n, duration: u[2]}
        }
        return !1
      }, e.calculateDomainForUserCustomBin = function (t, e) {
        var i = t.duration, n = e.getFromEnv("contextBins")[0], a = n.getBinDomain(), r = n.getBinRange(),
          o = e.getFocusLimit()[1], l = a[0].getTime(), s = a[1].getTime(), c = o - i * r[1] / n.thresholdPixels,
          u = o + (l - c);
        if (c >= l) return [c, o];
        if (u <= s) return [l, u];
        return [l, s]
      };
      var a = n(i(199))
    }, 838: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(767)), r = n(i(839)), o = n(i(377)), l = n(i(249)), s = n(i(813)), c = function (t, e) {
        return (0, s["default"])(e) && function (t, e) {
          return e >= 0 && e < t.length
        }(t, e)
      }, u = function (t, e) {
        return c(t, +e) || function (t, e) {
          return (0, o["default"])(e) && c(t, +e.index)
        }(t, e)
      }, d = function (t) {
        return (0, o["default"])(t) ? (0, a["default"])(t, {index: +t.index}) : {index: +t}
      }, f = function (t) {
        return (0, a["default"])(t, {
          x: (0, l["default"])(t.x) ? t.x.map(d) : [d(t.x)],
          y: (0, l["default"])(t.y) ? t.y.map(d) : [d(t.y)]
        })
      }, h = function (t, e) {
        return (0, l["default"])(e) ? (0, r["default"])((function (e) {
          return u(t, e)
        }), e) : u(t, e)
      };
      e["default"] = function (t, e, i, n) {
        void 0 === t && (t = []), void 0 === e && (e = []), void 0 === i && (i = []);
        var a, r = function (i) {
          return (0, o["default"])(i) && h(t, i.x) && h(e, i.y)
        }, s = (a = i, (0, l["default"])(a) && a.length > 0 ? a.filter(r).map(f) : r(a) ? [f(a)] : []);
        return s.length ? s : n(t, e)
      }
    }, 842: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(742)), r = i(193);
      e["default"] = function (t, e, i, n, o) {
        void 0 === t && (t = []), void 0 === e && (e = []), void 0 === i && (i = ""), void 0 === n && (n = ""), void 0 === o && (o = "");
        var l = function (e) {
          return (0, a["default"])(e) && t.indexOf(e) >= 0 ? e : r.UNDEF
        }, s = l(i), c = l(n), u = l(o);
        return e.map((function (t) {
          var e = l(t.series) || s, i = l(t.stack) || c, n = l(t.group) || u;
          return t.plot = t.plot.map((function (t) {
            var a = t.type;
            return "column" === a || /area/.test(a) ? (t.stack = l(t.stack) || i || e, t.group = l(t.group) || n) : (t.stack = l(t.stack) || i, t.group = l(t.group) || n || e), t
          })), t
        }))
      }
    }, 843: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(844)), r = i(193);
      e["default"] = function (t) {
        (0, r.componentFactory)(t, a["default"], "background", 1, [{}])
      }
    }, 844: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          this.config.backgroundCss = {fill: "#ffffff"}
        }, i.configureAttributes = function (e) {
          void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
          var i = this.config, n = this.getFromEnv("chart-attrib"), a = n.style && n.style.background;
          Object.keys(e).forEach((function (t) {
            return i[t] = e[t]
          })), i.backgroundCss = Object.assign(i.backgroundCss, this.getFromEnv("getStyleDef")(a))
        }, i.setDimension = function (t) {
          void 0 === t && (t = {}), Object.assign(this.config, t)
        }, i.draw = function () {
          var t = this.config;
          this.addGraphicalElement({
            el: "rect",
            attr: {
              x: 0,
              y: 0,
              height: t.height,
              width: t.width,
              transform: t.translate,
              opacity: t.backgroundCss.opacity
            },
            container: {id: "tropo", label: "group", isParent: !0},
            css: t.backgroundCss,
            component: this,
            id: "background",
            label: "rect"
          })
        }, e
      }(i(208).SmartRenderer);
      e["default"] = r
    }, 845: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(767)), r = n(i(846)), o = i(193), l = n(i(832)), s = (0, a["default"])({
        orientation: "bottom",
        align: "bottom",
        visible: !0,
        overlap: !0,
        dayinmajor: !0,
        stickycontextlabel: !1,
        scalemode: "random",
        skipinfo: {minor: !0},
        offset: {x: 2, y: 2}
      }), c = (0, a["default"])({orientation: "left", align: "left", visible: !0, overlap: !1});
      e["default"] = function (t) {
        var e, i, n = t.config, u = n.contextAxesX, d = n.contextAxesY, f = n.contextPanels.map((function (t) {
          return (0, a["default"])(t, {
            x: t.x.map((function (t) {
              return (0, a["default"])(s(t), (0, l["default"])(u, t.index))
            })), y: t.y.map((function (t) {
              return (0, a["default"])(c(t), (0, a["default"])((0, l["default"])(d, t.index), {plottype: "line"}))
            }))
          })
        })), h = n.contextTableMap;
        if (e = f.map((function (e, i) {
          var l = (0, a["default"])(e, {tableMap: h});
          return (0, o.componentFactory)(t, r["default"], "timeNavigator", n.navigatorEnabled ? 1 : 0, [{
            contextScale: l.x[i].scale.copy(),
            xConfigs: l.x,
            yConfigs: l.y,
            plotConfigs: l.plots,
            dataTable: l.dataTable,
            tableMap: l.tableMap,
            focusScale: t.getFromEnv("focusScalesX")[0]
          }]), l
        })), n.contextPanels = e, i = t.getChildren("timeNavigator") && t.getChildren("timeNavigator")[0]) {
          if (!i || i.getState("removed")) return;
          i.attachHandlers(), i.addExtEventListener("focusLimitChanged", (function () {
            i.asyncDraw()
          }), t)
        }
      }
    }, 846: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = n(i(771)), l = n(i(793)), s = n(i(847)), c = n(i(848)), u = n(i(849)),
        d = n(i(358)), f = i(193), h = {stroke: "#F1F1F1", "stroke-width": "1", "stroke-opacity": "1"},
        g = function (t) {
          var e = t.config, i = t.getFromEnv("getStyleDef"), n = t.getFromEnv("chart-attrib"),
            a = e.xConfigs[0].style ? e.xConfigs[0].style : {}, r = Object.assign({}, h, i(a["grid-line"]));
          t.attachChild(o["default"], "canvas").configure({
            xConfigs: e.xConfigs,
            yConfigs: e.yConfigs,
            plotConfigs: e.plotConfigs,
            tableMap: e.tableMap,
            enableGridLines: !0,
            gridBandSupported: !1,
            gridLineDirection: "vertical",
            enableMarkers: !1,
            enableReferenceLine: !1,
            enableReferenceZone: !1,
            leftBorder: e.border.left,
            bottomBorder: e.border.bottom,
            topBorder: e.border.top,
            rightBorder: e.border.right,
            enableTimeMarkers: !1,
            styleGridLines: 0,
            includeLegend: 0,
            enableMouseTracking: 0,
            isContext: !0,
            dataTable: e.dataTable,
            gridLineStyle: r,
            legendInteracted: e.legendInteracted,
            canvasStyle: i(n.style && n.style.canvas)
          })
        }, p = function (t) {
          return t.scale
        }, m = function (t) {
          function e() {
            var e;
            return (e = t.call(this) || this)._dimensions = {}, e._translation = {}, e._scrollbarConfig = {}, e.registerFactory("timeNavigatorAxis", s["default"]), e.registerFactory("scrollbar", c["default"]), e.registerFactory("brush", u["default"]), e.registerFactory("canvas", g), e
          }

          (0, a["default"])(e, t);
          var i = e.prototype;
          return i.__setDefaultConfig = function (e) {
            void 0 === e && (e = {}), t.prototype.__setDefaultConfig.call(this, e);
            var i = this.config;
            i.startX = 0, i.startY = 0, i.scrollbarHeight = 18, i.scrollbarStart = -17.5, i.scrollbarButtonWidth = 17, i.yScalePadding = 20, i.formatter = d["default"].formatter("%b %d, %Y"), i.border = {
              left: 1,
              right: 1,
              top: 1,
              bottom: 0
            }, i.labels = {}
          }, i.setContextScaleLimit = function () {
            var t = this.getFromEnv("contextBins")[0];
            this.config.contextScale.setBinMin(t.getBinMin()).setRangeThreshold(t.getRangeThreshold()).setDomain(this.getFromEnv("chart").getContextLimit())
          }, i.setDimension = function (t) {
            var e = this;
            void 0 === t && (t = {});
            var i = this.config, n = this.getChildren("canvas")[0], a = this.getChildren("brush")[0], r = i.border;
            this._dimensions.width = (0, f.pluckNumber)(t.width, this._dimensions.width), this._dimensions.height = (0, f.pluckNumber)(t.height, this._dimensions.height), i.xConfigs.map(p).forEach((function (t) {
              t.setRange([r.left, e._dimensions.width - (r.left + r.right) / 2])
            })), i.contextScale.setRange(i.xConfigs[0].scale.getRange()), a.setBrushValue(this.getFromEnv("chart").getFocusLimit());
            var o = a.getLabelSpace();
            n.setDimension({
              left: i.startX,
              top: o,
              width: this._dimensions.width,
              height: Math.max(this._dimensions.height - o - i.scrollbarHeight, 0)
            }), this.getChildren("timeAxis").forEach((function (t) {
              t.setTranslation(0, o), t.placeAxis()
            })), i.yConfigs.map(p).forEach((function (t) {
              return t.setRange([e._dimensions.height - i.scrollbarHeight - r.top - r.bottom, o])
            })), this.setChildDimension()
          }, i.getPosition = function () {
            return {x: this.config._translateX, y: this.config._translateY}
          }, i.setChildDimension = function () {
            var t = this.config, e = this.getChildren("brush")[0], i = e.getLabelSpace(),
              n = this.getChildren("scrollbar")[0], a = t.contextScale, r = a.getRange(),
              o = this.getFromEnv("chart").getFocusLimit().map((function (t) {
                return a.getRangeValue(t)
              }));
            e.setMaxBrushDimensions({
              x: r[0],
              y: i,
              width: r[1] - r[0],
              height: this._dimensions.height - i - t.scrollbarHeight
            }), e.setCurrentBrushDimensions({
              x: o[0],
              y: i,
              width: o[1] - o[0],
              height: this._dimensions.height - i - t.scrollbarHeight
            }), n.setDimension({
              x: t.scrollbarStart,
              y: this._dimensions.height - t.scrollbarHeight,
              height: t.scrollbarHeight,
              width: this._dimensions.width + 2 * t.scrollbarButtonWidth + 1
            }), this.setScrollbarConfig("width", this._dimensions.width + 2 * t.scrollbarButtonWidth + 1), n.config.scrollRatio = this.getScrollRatio(), this.setScrollbarConfig("scrollRatio", n.config.scrollRatio), n.config.scrollPosition = this.getScrollPosition(), this.setScrollbarConfig("scrollPosition", n.config.scrollPosition), this.setScrollbarConfig("height", t.scrollbarHeight)
          }, i.getDimension = function () {
            return this._dimensions
          }, i.configureAttributes = function (e) {
            void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
            var i = this.config;
            Object.assign(i, e), this.setContextScaleLimit(), this.addToEnv("timeNavigator", this), this.addToEnv("timeNavigatorConfig", i)
          }, i.attachHandlers = function () {
            var t, e, i, n = this;
            n.addEventListener("fc-mouseover", n.mouseoverHandler || (n.mouseoverHandler = function () {
              clearTimeout(n.mouseoutTimer), t = this.getChildren("brush")[0], e = t.getChildren("leftLabel")[0], i = t.getChildren("rightLabel")[0], e.config.showLabel || i.config.showLabel || (e.setData({showLabel: !0}, !0), i.setData({showLabel: !0}, !0))
            })), n.addEventListener("fc-mouseup", n.mouseupHandler || (n.mouseupHandler = function () {
              t.config.pointerReleasedOnParent = !0
            })), n.addEventListener("fc-mouseout", n.mouseoutHandler || (n.mouseoutHandler = function () {
              n.config.labelsGettingDragged || (n.mouseoutTimer = setTimeout((function () {
                e.setData({showLabel: !1}, !0), i.setData({showLabel: !1}, !0)
              }), 20))
            }))
          }, i.draw = function () {
            this.addGraphicalElement({
              el: "group",
              container: {id: "tropo", label: "group", isParent: !0},
              component: this,
              label: "group",
              attr: {name: "timenav-tropo", transform: this.config.translate},
              id: "tropo"
            }), this.addGraphicalElement({
              el: "group",
              container: {id: "strato", label: "group", isParent: !0},
              component: this,
              label: "group",
              attr: {name: "timenav-strato", transform: this.config.translate},
              id: "strato"
            }), this.addGraphicalElement({
              el: "group",
              container: {id: "meso", label: "group", isParent: !0},
              component: this,
              label: "group",
              attr: {name: "timenav-meso", transform: this.config.translate},
              id: "meso"
            }), this.addGraphicalElement({
              el: "group",
              container: {id: "thermo", label: "group", isParent: !0},
              component: this,
              label: "group",
              attr: {name: "timenav-thermo", transform: this.config.translate},
              id: "thermo"
            }), this.addGraphicalElement({
              el: "group",
              container: {id: "exo", label: "group", isParent: !0},
              component: this,
              label: "group",
              attr: {name: "timenav-exo", transform: this.config.translate},
              id: "exo"
            }), this.addGraphicalElement({
              el: "group",
              attr: {name: "time-axis-group"},
              id: "axisTopGroup",
              label: "group",
              container: {id: "strato", label: "group"},
              component: this
            }, !0), this.addGraphicalElement({
              el: "group",
              attr: {name: "scrollbar-group"},
              id: "scrollbarContainer",
              label: "scrollbar",
              container: {id: "thermo", label: "group"},
              component: this
            }, !0)
          }, i.setScrollbarConfig = function (t, e) {
            this._scrollbarConfig[t] = e
          }, i.getScrollbarConfig = function (t) {
            return t ? this._scrollbarConfig[t] : this._scrollbarConfig
          }, i.validateDomain = function (t, e, i) {
            var n = t[0], a = t[1], r = this.config.contextScale, o = r.getRange(), l = this.getFromEnv("chart");
            if (n > a) {
              var s = [a, n];
              n = s[0], a = s[1]
            }
            n = f.clampNumber.apply(void 0, [n].concat(o)), a = f.clampNumber.apply(void 0, [a].concat(o)), l.setPixelLimit([n, a], r, [].concat(e), {
              name: i.eventName,
              eventArgs: i.eventArgs,
              options: i.eventArgs
            })
          }, i.getScrollRatio = function () {
            var t = this.getChildren("scrollbar")[0].config, e = this.getChildren("canvas")[0].config, i = e.leftBorder,
              n = e.rightBorder, a = t.width, r = t.height, o = 2 * Math.min(r, .5 * a), l = (i + n) / a,
              s = (this.getChildren("brush")[0].getCurrentBrushDimensions().width + 1) / Math.max(.001, a - o);
            return s >= 1 - l ? 1 : s
          }, i.getScrollPosition = function () {
            var t = this.getChildren("scrollbar")[0].config, e = t.width, i = t.height, n = 2 * Math.min(i, .5 * e),
              a = this.getChildren("brush")[0], r = a.getCurrentBrushDimensions().x,
              o = a.getCurrentBrushDimensions().width, l = this.getScrollbarConfig("scrollRatio") * (e - n),
              s = e - (n + l);
            return (r + o / 2 - (n / 2 + l / 2 - this.config.scrollbarButtonWidth)) / s
          }, i.getDSdef = function () {
            return l["default"]
          }, i.getName = function () {
            return "TimeNavigator"
          }, e
        }(r.SmartRenderer);
      e["default"] = m
    }, 847: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(770));
      e["default"] = function (t) {
        var e = t.getFromEnv("baseTextStyle");
        t.attachChild(a["default"], "timeAxis"), t.getChildren("timeAxis").forEach((function (i) {
          i.configure({
            skipinfo: {minor: !0},
            overlap: !0,
            validateLabelDimensions: 1,
            offset: {x: 2, y: 2},
            style: {
              "label-major": Object.assign({fill: "#5f5f5f", "font-size": 11, "text-anchor": "start"}, e),
              "label-minor": Object.assign({"text-anchor": "start"}, e),
              "label-context": Object.assign({"text-anchor": "start"}, e)
            },
            ticksize: 0,
            domainline: !1,
            align: "top",
            dayinmajor: !0,
            stickycontextlabel: !1,
            scalemode: "random",
            scale: t.config.xConfigs[0].scale,
            tickvisibilitylimit: {start: void 0, end: void 0}
          })
        }))
      }
    }, 848: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(305)), r = i(193), o = "#e3e3e3", l = "none", s = "#f8f8f8", c = "none", u = "#e3e3e3", d = "none",
        f = "#" + (0, r.getDarkColor)(o, 60), h = "#" + (0, r.getDarkColor)(u, 60);
      e["default"] = function (t) {
        var e, i, n = t.attachChild(a["default"], "scrollbar"), r = t.getFromEnv("chart"), g = t.config,
          p = g.contextScale, m = n.getFromEnv("dataSource"), v = n.getFromEnv("getStyleDef"),
          y = m.navigator && m.navigator.scrollbar && m.navigator.scrollbar.style || {},
          b = {timeFormatter: g.formatter}, x = Object.assign({forceFire: !0}, b),
          k = {formatter: "%b %d, %Y", action: "translate"};
        i = {
          button: Object.assign({stroke: l, fill: o}, v(y.button)),
          arrow: Object.assign({fill: f}, v(y.arrow)),
          scroller: Object.assign({stroke: d, fill: u}, v(y.scroller)),
          grip: Object.assign({stroke: h}, v(y.grip)),
          track: Object.assign({stroke: c, fill: s}, v(y.track))
        }, n.configure({
          isHorizontal: !0,
          displayFlat: !0,
          width: t.getScrollbarConfig("width"),
          height: t.getScrollbarConfig("height"),
          style: i,
          drawStripes: 1,
          restrictScrollAnchor: 0,
          scrollRatio: t.getScrollbarConfig("scrollRatio")
        }), n.attachEventHandlers({
          scroll: function (e) {
            var i, n = t.getChildren("scrollbar")[0].config, a = n.width, o = n.height,
              l = t.getScrollbarConfig("scrollRatio"), s = Math.min(o, .5 * a), c = (a - 2 * s) * l - 1,
              u = n.x + s + .5 + (a - 2 * s - c) * e;
            i = void 0 > e ? "down" : "up", r.setPixelLimit([u, u + c], p, [i, i], {name: "timeNavBrush"})
          }, scrollStart: function () {
            e = r.getFocusLimit(), r.getFromEnv("fireChartEvents")("timeNavBrushStart", [+e[0], +e[1]], k, x)
          }, scrollEnd: function () {
            e = r.getFocusLimit(), r.getFromEnv("fireChartEvents")("timeNavBrushEnd", [+e[0], +e[1]], k, x)
          }
        })
      }
    }, 849: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(850));
      e["default"] = function (t) {
        var e = t.attachChild(a["default"], "brush"), i = t.getFromEnv("dataSource");
        e.configure({
          values: t.config.values,
          style: i.navigator && i.navigator.window && i.navigator.window.style || {}
        })
      }
    }, 850: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = n(i(851)), l = n(i(852)), s = n(i(853)), c = function (t) {
        function e() {
          var e;
          return (e = t.call(this) || this)._maxDimensions = {}, e._currDimensions = {}, e
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function (e) {
          void 0 === e && (e = {}), t.prototype.__setDefaultConfig.call(this, e);
          var i = this.config;
          i.handleWidth = 12, i.handleHeight = 20
        }, i.configureAttributes = function (e) {
          void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
          this.config.style = e.style, this.createChildComponents()
        }, i.setChildDimension = function () {
          var t = this.config, e = this.getChildren("selection")[0], i = this.getChildren("leftHandle")[0],
            n = this.getChildren("rightHandle")[0], a = this.getChildren("leftLabel")[0],
            r = this.getChildren("rightLabel")[0], o = this.getCurrentBrushDimensions(), l = o.x, s = o.x + o.width;
          e.setDimension({x: l, y: o.y, width: o.width, height: o.height}), i.setDimension({
            x: l - t.handleWidth,
            y: o.y + o.height / 2 - t.handleHeight / 2,
            width: t.handleWidth,
            height: t.handleHeight
          }), n.setDimension({
            x: s,
            y: o.y + o.height / 2 - t.handleHeight / 2,
            width: t.handleWidth,
            height: t.handleHeight
          }), a.setDimension({x: l, y: o.y}), r.setDimension({x: s, y: o.y})
        }, i.getLabelSpace = function () {
          var t = this.getChildren("leftLabel")[0], e = this.getChildren("rightLabel")[0];
          return Math.max(t.getLabelDimension().height, e.getLabelDimension().height)
        }, i.draw = function () {
          this.addGraphicalElement({
            el: "group",
            attr: {name: "brush-group"},
            id: "brushGroup",
            label: "brushGroup",
            component: this,
            container: {id: "exo", label: "group", isParent: !0}
          })
        }, i.hideAllLabels = function () {
          var t = this.getChildren("leftLabel")[0], e = this.getChildren("rightLabel")[0];
          this.config.pointerReleasedOnParent || (t.config.showLabel = e.config.showLabel = !1, t.asyncDraw(), e.asyncDraw())
        }, i.setBrushValue = function (t) {
          var e = this.getChildren("leftLabel")[0], i = this.getChildren("rightLabel")[0];
          e.setValue(t[0]), i.setValue(t[1])
        }, i.createChildComponents = function () {
          var t, e, i, n, a, r = this.config, c = this.getFromEnv("getStyleDef");
          (a = this.attachChild(s["default"], "selection")).attachHandlers(), a.configure({
            orientation: "horizontal",
            style: {mask: c(r.style.mask)}
          }), (t = this.attachChild(o["default"], "leftHandle")).attachHandlers(), t.configure({
            orientation: "horizontal",
            type: "leftHandle",
            style: {handle: c(r.style.handle), "handle-grip": c(r.style["handle-grip"])}
          }), (e = this.attachChild(o["default"], "rightHandle")).attachHandlers(), e.configure({
            orientation: "horizontal",
            type: "rightHandle",
            style: {handle: c(r.style.handle), "handle-grip": c(r.style["handle-grip"])}
          }), (i = this.attachChild(l["default"], "leftLabel")).attachHandlers(), i.configure({
            orientation: "horizontal",
            type: "leftLabel",
            style: {label: c(r.style.label), labelBg: c(r.style["label-background"])}
          }), (n = this.attachChild(l["default"], "rightLabel")).attachHandlers(), n.configure({
            orientation: "horizontal",
            type: "rightLabel",
            style: {label: c(r.style.label), labelBg: c(r.style["label-background"])}
          })
        }, i.setMaxBrushDimensions = function (t) {
          this._maxDimensions = t
        }, i.getMaxBrushDimensions = function () {
          return this._maxDimensions
        }, i.setCurrentBrushDimensions = function (t) {
          this._currDimensions = t, this.setChildDimension()
        }, i.getCurrentBrushDimensions = function () {
          return this._currDimensions
        }, e
      }(r.SmartRenderer);
      e["default"] = c
    }, 851: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = i(193), l = function (t) {
        function e() {
          var e;
          return (e = t.call(this) || this)._dimensions = {}, e
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this);
          var e = this.config;
          e._defaultHandleStyle = {
            fill: "#dfdfdf",
            stroke: "none",
            cursor: "ew-resize"
          }, e._defaultHandleGripStyle = {
            cursor: "ew-resize",
            stroke: "#808080",
            "stroke-width": 1,
            "stroke-linecap": "round"
          }
        }, i.configureAttributes = function (e) {
          void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
          var i = this.config;
          i.style = {
            handle: Object.assign({}, i._defaultHandleStyle, e.style.handle),
            "handle-grip": Object.assign({}, i._defaultHandleGripStyle, e.style["handle-grip"])
          }, i.orientation = e.orientation, i.type = e.type
        }, i.setDimension = function (t) {
          this._dimensions = t
        }, i.getDimension = function () {
          return this._dimensions
        }, i.attachHandlers = function () {
          var t, e, i, n, a, r, l, s, c = this, u = c.getLinkedParent(), d = u.getFromEnv("timeNavigator"),
            f = d.config, h = c.getFromEnv("chart"), g = {timeFormatter: f.formatter},
            p = Object.assign({forceFire: !0}, g), m = {formatter: "%b %d, %Y", action: "scale"};
          c.addEventListener("fc-dragstart", c.dragstartHandler || (c.dragstartHandler = function (n) {
            a = (0, o.getTouchEvent)(n).clientX, i = 0, e = u.getCurrentBrushDimensions(), t = h.getFocusLimit(), h.getFromEnv("fireChartEvents")("timeNavBrushStart", [+t[0], +t[1]], m, p)
          })), c.addEventListener("fc-dragmove", c.dragmoveHandler || (c.dragmoveHandler = function (t) {
            r = (0, o.getTouchEvent)(t).clientX - a, n = r >= i ? "up" : "down", i = r, "leftHandle" === c.config.type ? (l = e.x + r, s = e.x + e.width) : (l = e.x, s = e.x + e.width + r), c.getFromEnv("animationManager").setAnimationState("timenavSqueeze"), d.validateDomain([l, s], [n, n], {
              eventName: "timeNavBrush",
              eventArgs: m,
              options: g
            })
          })), c.addEventListener("fc-dragend", c.dragendHandler || (c.dragendHandler = function (e) {
            t = h.getFocusLimit(), h.getFromEnv("fireChartEvents")("timeNavBrushEnd", [+t[0], +t[1]], m, p)
          }))
        }, i.draw = function () {
          var t = this.config, e = t.style.handle, i = t.style["handle-grip"], n = this.getDimension(), a = n.x,
            r = n.y, o = n.width, l = n.height;
          this.addGraphicalElement({
            el: "rect",
            attr: {x: a, y: r, width: o, height: l, opacity: e.opacity},
            css: e,
            label: "handleButton",
            component: this,
            container: {id: "brushGroup", label: "brushGroup", isParent: !0}
          }), this.addGraphicalElement({
            el: "path",
            attr: {path: "M " + (a + 3.5) + "," + (r + 6) + " v " + (l - 12) + "\n               M " + (a + 6.5) + "," + (r + 6) + " v " + (l - 12)},
            label: "handlePath",
            component: this,
            css: i,
            container: {id: "brushGroup", label: "brushGroup", isParent: !0}
          })
        }, e
      }(r.SmartRenderer);
      e["default"] = l
    }, 852: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = i(193), l = function (t) {
        function e() {
          var e;
          return (e = t.call(this) || this)._dimensions = {}, e
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.configureAttributes = function (e) {
          void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
          var i = this.config, n = this.getFromEnv("baseTextStyle");
          for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
          i.style = {
            label: Object.assign({}, i._defaultLabelStyle, n, i.style.label),
            labelBg: Object.assign({}, i._defaultLabelBgStyle, i.style.labelBg)
          }
        }, i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this);
          var e = this.config;
          e.showLabel = !1, e._defaultLabelStyle = {
            fill: "#f3f3f3",
            "font-size": "11px",
            "font-weight": 600,
            "vertical-align": "middle",
            cursor: "move"
          }, e._defaultLabelBgStyle = {
            fill: "#5f5f5f",
            cursor: "move"
          }, e["border-horizontal-padding"] = 5, e["border-vertical-padding"] = 3
        }, i.setDimension = function (t) {
          this._dimensions = t
        }, i.getDimension = function () {
          return this._dimensions
        }, i.attachHandlers = function () {
          var t, e, i, n, a, r, l, s, c, u = this, d = u.getFromEnv("animationManager"), f = u.getLinkedParent(),
            h = f.getFromEnv("timeNavigator"), g = h.config, p = h.getFromEnv("chart"),
            m = {timeFormatter: g.formatter}, v = Object.assign({forceFire: !0}, m),
            y = {formatter: "%b %d, %Y", action: "scale"};
          u.addEventListener("fc-dragstart", u.dragstartHandler || (u.dragstartHandler = function (n) {
            a = (0, o.getTouchEvent)(n).clientX, r = 0, e = f.getCurrentBrushDimensions(), h.config.labelsGettingDragged = !0, i = n.originalEvent.target, f.config.pointerReleasedOnParent = !1, t = p.getFocusLimit(), p.getFromEnv("fireChartEvents")("timeNavBrushStart", [+t[0], +t[1]], y, v)
          })), u.addEventListener("fc-dragmove", u.dragmoveHandler || (u.dragmoveHandler = function (t) {
            d.setAnimationState("timenavSqueeze"), l = (0, o.getTouchEvent)(t).clientX - a, n = l >= r ? "up" : "down", r = l, "leftLabel" === u.config.type ? (s = e.x + l, c = e.x + e.width) : (s = e.x, c = e.x + e.width + l), h.validateDomain([s, c], [n, n], {
              eventName: "timeNavBrush",
              eventArgs: y,
              options: m
            })
          })), u.addEventListener("fc-dragend", u.dragendHandler || (u.dragendHandler = function (e) {
            d.setAnimationState("timenavSqueeze"), h.config.labelsGettingDragged = !1, i !== e.originalEvent.target && f.hideAllLabels(), t = p.getFocusLimit(), p.getFromEnv("fireChartEvents")("timeNavBrushEnd", [+t[0], +t[1]], y, v)
          }))
        }, i.setValue = function (t) {
          this.config.value = t
        }, i.getValue = function () {
          return this.config.value
        }, i.getLabelDimension = function () {
          var t = this.config, e = this.getFromEnv("smartLabel"), i = this.getFromEnv("timeNavigatorConfig").formatter;
          return e.setStyle(t.style.label), e.getOriSize(i.format(t.value))
        }, i.draw = function () {
          var t, e, i, n, a, r, o, l, s, c = this.config, u = c.style.label, d = c.style.labelBg,
            f = this.getLinkedParent(), h = this.getFromEnv("timeNavigatorConfig"), g = this.getFromEnv("smartLabel"),
            p = f.getMaxBrushDimensions(), m = this.getDimension(), v = m.x, y = h.formatter, b = this.getValue(),
            x = y.format(b), k = m.y;
          g.setStyle(u), i = g.getOriSize(x), "leftLabel" === c.type ? v - i.width >= p.x ? (e = "end", t = 1) : (e = "start", t = -1) : v + i.width <= p.x + p.width ? (e = "start", t = -1) : (e = "end", t = 1), u["text-anchor"] = e, c.showLabel && (r = i.width, o = i.height, l = r + 2 * c["border-horizontal-padding"], s = o + 2 * c["border-vertical-padding"], n = v - t * c["border-horizontal-padding"], a = k - (o + 2 * c["border-vertical-padding"]) / 2, this.addGraphicalElement({
            el: "rect",
            attr: {x: "start" === e ? v : v - l, y: k - s, width: l, height: s},
            css: d,
            shadow: [!0, 1],
            label: "dragableLabelBackground",
            id: c.type + "dragableLabelBackground",
            component: this,
            container: {id: "brushGroup", label: "brushGroup", isParent: !0}
          }), this.addGraphicalElement({
            el: "text",
            attr: {x: n, y: a, text: x},
            css: u,
            id: c.type + "dragableLabel",
            label: "dragableLabel",
            component: this,
            container: {id: "brushGroup", label: "brushGroup", isParent: !0}
          }))
        }, e
      }(r.SmartRenderer);
      e["default"] = l
    }, 853: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = i(193),
        l = ["stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-color"],
        s = function (t) {
          function e() {
            var e;
            return (e = t.call(this) || this)._dimensions = {}, e
          }

          (0, a["default"])(e, t);
          var i = e.prototype;
          return i.__setDefaultConfig = function () {
            t.prototype.__setDefaultConfig.call(this), this.config.defaultStyle = {
              fill: (0, o.toRaphaelColor)({
                FCcolor: {
                  color: "#fdfdfd,#f7fffe",
                  ratio: "0,100",
                  angle: 90,
                  alpha: "50,50"
                }
              }), stroke: "#e3e3e3", "stroke-width": 1, opacity: 1, "fill-opacity": .5, cursor: "move"
            }
          }, i.configureAttributes = function (e) {
            void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
            var i = this.config, n = i.defaultStyle;
            i.style = Object.assign({}, n, e.style.mask), i.orientation = e.orientation
          }, i.setDimension = function (t) {
            this._dimensions = t
          }, i.getDimension = function () {
            return this._dimensions
          }, i.attachHandlers = function () {
            var t, e, i, n, a, r, l, s, c = this.getFromEnv("animationManager"), u = this.getLinkedParent(),
              d = u.getFromEnv("timeNavigator").config, f = d.contextScale, h = this.getFromEnv("chart"),
              g = {timeFormatter: d.formatter}, p = Object.assign({forceFire: !0}, g),
              m = {formatter: "%b %d, %Y", action: "translate"};
            this.addEventListener("fc-dragstart", this.dragstartHandler || (this.dragstartHandler = function (a) {
              i = (0, o.getTouchEvent)(a).clientX, n = 0, e = u.getCurrentBrushDimensions(), t = h.getFocusLimit(), h.getFromEnv("fireChartEvents")("timeNavBrushStart", [+t[0], +t[1]], m, p)
            })), this.addEventListener("fc-dragmove", this.dragmoveHandler || (this.dragmoveHandler = function (t) {
              c.setAnimationState("timenavScroll"), r = (0, o.getTouchEvent)(t).clientX - i, a = n >= r ? "down" : "up", n = r, l = e.x + r, s = l + e.width, h.setPixelLimit([l, s], f, [a, a], {
                name: "timeNavBrush",
                eventArgs: m,
                options: g
              })
            })), this.addEventListener("fc-dragend", this.dragendHandler || (this.dragendHandler = function (e) {
              t = h.getFocusLimit(), h.getFromEnv("fireChartEvents")("timeNavBrushEnd", [+t[0], +t[1]], m, p)
            }))
          }, i.draw = function () {
            var t, e = this.config, i = Object.assign({}, e.style), n = Object.assign({}, e.style), a = l.length,
              r = this.getDimension();
            for (t = 0; t < a; t++) delete i[l[t]];
            this.addGraphicalElement({
              el: "rect",
              attr: {
                x: r.x,
                y: r.y,
                width: Math.max(r.width, 0),
                height: Math.max(r.height, 0),
                opacity: i.opacity,
                stroke: "none"
              },
              css: i,
              id: "selectionBox",
              label: "selectionBox",
              component: this,
              container: {id: "brushGroup", label: "brushGroup", isParent: !0}
            }), n.fill = "none", this.addGraphicalElement({
              el: "path",
              attr: {path: ["M", r.x, r.y, "v", r.height, "h", r.width, "v", -r.height], opacity: n.opacity},
              id: "selectionBoxBorder",
              label: "selectionBoxBorder",
              css: n,
              component: this,
              container: {id: "brushGroup", label: "brushGroup", isParent: !0}
            })
          }, e
        }(r.SmartRenderer);
      e["default"] = s
    }, 854: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = i(193), r = n(i(855));
      e["default"] = function (t) {
        var e = t.getFromEnv("dataSource").extensions || {},
          i = (0, a.pluckNumber)(e.customrangeselector && e.customrangeselector.enabled, 1);
        (0, a.componentFactory)(t, r["default"], "customRangeSelector", +i, [{
          domain: t.getFocusLimit(),
          style: e.customrangeselector && e.customrangeselector.style || {}
        }])
      }
    }, 855: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = n(i(856)), l = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.configureAttributes = function (t) {
          void 0 === t && (t = {}), Object.assign(this.config, t)
        }, i.updateOnLimitChange = function () {
          this.setData({domain: this.getFromEnv("chart").getFocusLimit(), limitChanged: !0}, !0)
        }, i.getToolInfo = function () {
          var t = Object.assign({}, this.config.style);
          return t["title:hoverout"] = {title: t["title-text"], icon: t["title-icon"]}, {
            "selector-0": {
              type: "tool",
              def: o["default"],
              configuration: {
                domain: this.config.domain,
                hAlign: "right",
                scale: 1,
                marginTop: 2,
                marginBottom: 2,
                marginLeft: 2,
                marginRight: 2,
                extStyle: t,
                limitChanged: this.config.limitChanged
              }
            }
          }
        }, e
      }(r.SmartRenderer);
      e["default"] = l
    }, 856: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = n(i(857)), l = i(303), s = i(193), c = n(i(862)), u = n(i(232)),
        d = ["hour", "minute", "second", "millisecond"];

      function f() {
        var t = this.config.extStyle;
        this.setData({
          interactionStyle: {text: t["title-text:hover"], icon: t["title-icon:hover"]},
          hoverConfig: !0
        }, !0)
      }

      function h() {
        !this.config.blockUpdate && this.setData({
          interactionStyle: this.config.extStyle["title:hoverout"],
          hoverConfig: !0
        }, !0)
      }

      function g(t) {
        this.removeDocumentListener(), t.detachHandler()
      }

      var p = function (t) {
        function e(e) {
          var i;
          i = t.call(this, e) || this;
          var n = (0, a["default"])(i), r = n.config;
          return r.wrapper = new u["default"], r.documentClicked = function (t) {
            var e, i, a = (0, s.getMouseCoordinate)(n.getFromEnv("chart-container"), t, n.getFromEnv("chart")),
              o = a.chartX, l = a.chartY, c = a.clientX, u = a.clientY, d = n.getChildren("manager")[0], f = t.target;
            ("mobile" === d.config.visualMode ? (e = c, i = u) : (e = o, i = l), d.isWithinWidget(e, i)) || ("fc__crs__str" === (f instanceof SVGElement && f.className.baseVal) || "fc__select__time" === f.className || f.parentElement && "fc__select__time" === f.parentElement.className || (r.wrapper.off(document, "fc-click", r.documentClicked), n.setData({}, !0)))
          }, n.keyDownHandler = function (t) {
            ("key" in t ? "Escape" === t.key || "Esc" === t.key : 27 === t.keyCode) && i.setData({}, !0)
          }, n.clickHandler = function (t) {
            var e, i, a = n, o = r.domain, l = a.getFromEnv("chart"), s = l.getFromEnv("UTC"),
              c = l.getFromEnv("dateAPI"), u = l.getContextLimit(), d = new Date(u[0]), f = new Date(u[1]),
              h = new Date(o[0]), g = new Date(o[1]);
            a.setData({
              blockUpdate: !0,
              interactionStyle: {text: r.extStyle["title-text:active"], icon: r.extStyle["title-icon:active"]}
            }, !0), a.getChildren("cover")[0].setData({visibility: "visible"}, !0), e = {
              year: c(h, "FullYear", s),
              month: c(h, "Month", s) + 1,
              day: c(h, "Date", s),
              hours: c(h, "Hours", s),
              minutes: c(h, "Minutes", s),
              seconds: c(h, "Seconds", s)
            }, i = {
              year: c(g, "FullYear", s),
              month: c(g, "Month", s) + 1,
              day: c(g, "Date", s),
              hours: c(g, "Hours", s),
              minutes: c(g, "Minutes", s),
              seconds: c(g, "Seconds", s)
            }, a.getChildren("manager")[0].setData({
              visibility: "visible",
              position: a.config.containerPos,
              drawCalendars: !0,
              startDate: e,
              endDate: i,
              leftCalSelectedDate: e,
              rightCalSelectedDate: i,
              contextStart: {year: c(d, "FullYear", s), month: c(d, "Month", s) + 1, day: c(d, "Date", s)},
              contextEnd: {year: c(f, "FullYear", s), month: c(f, "Month", s) + 1, day: c(f, "Date", s)}
            }, !0), r.wrapper.on(document, "fc-click", n.config.documentClicked), r.wrapper.on(document, "keydown", n.keyDownHandler)
          }, n.addEventListener("fc-click", n.clickHandler), n.addEventListener("fc-mouseover", f.bind((0, a["default"])(i))), n.addEventListener("fc-mouseout", h.bind((0, a["default"])(i))), n.addEventListener("beforeremove", g.bind((0, a["default"])(i))), i
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this);
          var e = this.config;
          e.containerState = 0, e.showDate = !0, e.calendarIconPath = "M15.604605,2.6231875 C15.3617479,2.39715625 15.0736134,2.284125 14.7409412,2.284125 L13.5126723,2.284125 L13.5126723,1.4275625 C13.5126723,1.0350625 13.3621849,0.69896875 13.0615126,0.41940625 C12.7606723,0.13984375 12.3993613,0 11.9769748,0 L11.3629244,0 C10.9405714,0 10.5791261,0.13984375 10.2784202,0.4194375 C9.97761345,0.69896875 9.8272605,1.03509375 9.8272605,1.42759375 L9.8272605,2.28415625 L6.14221849,2.28415625 L6.14221849,1.42759375 C6.14221849,1.03509375 5.99179832,0.699 5.69105882,0.4194375 C5.39038655,0.13984375 5.02890756,0 4.60655462,0 L3.99240336,0 C3.57015126,0 3.20863866,0.13984375 2.90789916,0.4194375 C2.60722689,0.69896875 2.45677311,1.03509375 2.45677311,1.42759375 L2.45677311,2.28415625 L1.22847059,2.28415625 C0.895697479,2.28415625 0.607831933,2.3971875 0.364705882,2.62321875 C0.121579832,2.84921875 0,3.11696875 0,3.42625 L0,14.8466563 C0,15.1557188 0.121579832,15.4234063 0.364705882,15.6495625 C0.607798319,15.8755312 0.895663866,15.9885937 1.22847059,15.9885937 L14.7407059,15.9885937 C15.0733782,15.9885937 15.3615462,15.8755625 15.6043697,15.6495625 C15.8475294,15.4235 15.9691429,15.1556875 15.9691429,14.8466563 L15.9691429,3.42621875 C15.9691092,3.11684375 15.8476303,2.84921875 15.604605,2.6231875 Z M11.0558319,1.4276875 C11.0558319,1.34434375 11.0843697,1.275875 11.1418824,1.22246875 C11.199395,1.169 11.2730084,1.14221875 11.3627227,1.14221875 L11.9767731,1.14221875 C12.066521,1.14221875 12.1398992,1.16890625 12.1976134,1.22246875 C12.2551597,1.27596875 12.2838992,1.3444375 12.2838992,1.4276875 L12.2838992,3.9971875 C12.2838992,4.0805 12.2551597,4.14884375 12.1976134,4.20240625 C12.1398655,4.2558125 12.066521,4.28265625 11.9767731,4.28265625 L11.3627227,4.28265625 C11.2730084,4.28265625 11.199395,4.2559375 11.1418824,4.20240625 C11.0843697,4.1488125 11.0558319,4.0805 11.0558319,3.9971875 L11.0558319,1.4276875 Z M3.68534454,1.4276875 C3.68534454,1.34434375 3.71408403,1.275875 3.77166387,1.22246875 C3.82927731,1.169 3.90278992,1.14221875 3.99240336,1.14221875 L4.60655462,1.14221875 C4.69620168,1.14221875 4.76984874,1.16890625 4.82729412,1.22246875 C4.88480672,1.27596875 4.91368067,1.3444375 4.91368067,1.4276875 L4.91368067,3.9971875 C4.91368067,4.0805 4.88494118,4.1489375 4.82729412,4.20240625 C4.76971429,4.2558125 4.69620168,4.28265625 4.60655462,4.28265625 L3.99240336,4.28265625 C3.90278992,4.28265625 3.82917647,4.2559375 3.77166387,4.20240625 C3.71421849,4.1488125 3.68534454,4.0805 3.68534454,3.9971875 L3.68534454,1.4276875 Z M14.7407059,14.8465 L1.22847059,14.8465 L1.22847059,5.71025 L14.7407059,5.71025 L14.7407059,14.8465 Z", e.calendarIconDim = {
            width: 16,
            height: 16
          }, e.containerPos = {x: 100, y: 100}, e.containerInfo = {
            id: "group",
            label: "group",
            isParent: !0
          }, e.spaceNotHardCoded = !0, e.hoveredState = "normal", e._iconStyle = {
            fill: "#5648D4",
            transform: "t0,0",
            opacity: 1
          }, e._textStyle = {
            "font-size": "12px",
            "font-style": "normal",
            "font-weight": "600",
            "text-anchor": "start",
            fill: "#5648D4",
            opacity: 1
          }, e.prevDim = {height: 0, width: 0}
        }, i.configureAttributes = function (t) {
          void 0 === t && (t = {});
          var e, i, n, a = this.config, r = this.getFromEnv("focusScalesX"), l = !1, s = this.getFromEnv("getStyleDef"),
            u = this.getFromEnv("baseTextStyle");
          Object.assign(a, t), !t.blockUpdate && delete a.blockUpdate, !t.interactionStyle && delete a.interactionStyle, !t.limitChanged && delete a.limitChanged, e = a.extStyle || {}, i = a.interactionStyle || {}, this.setState("visible", !0 !== a.isHidden), a.symbolName = a.name, r.forEach((function (t) {
            d.includes(t.getBinMin()[0].name()) && (l = !0)
          })), this.attachChild(c["default"], "cover", "cover").configure(a.limitChanged ? {} : {visibility: "hidden"}), this.attachChild(o["default"], "manager", "manager").configure(a.limitChanged ? {} : {
            visibility: "hidden",
            position: a.containerPos,
            showTime: l,
            extStyle: e,
            drawCalendars: !1
          }), a.showTime = l, a._finalIconStyle = Object.assign({}, a._iconStyle, s(e["title-icon"]), s(i.icon)), a._finalTextStyle = Object.assign({}, a._textStyle, u, s(e["title-text"]), s(i.text)), a.scalingParam = (n = a._finalTextStyle["font-size"], .0278 * (parseFloat(n) - 12) + 1), a._finalIconStyle.transform += " s" + a.scalingParam
        }, i.getLabel = function () {
          var t, e = this.config, i = "", n = e.showTimeInLabel, a = +this.getFromEnv("chartWidth"),
            r = this.getLinkedParent(), o = this.getFromEnv("chart").getFromEnv("contextScalesX")[0],
            l = e.domain || o.getDomain(), s = this.getFromEnv("smartLabel"), c = new Date(l[0]), u = new Date(l[1]),
            d = Object.assign(e.prevDim), f = d;
          return s.setStyle(e._finalTextStyle), i = o.getFormattedTime({
            dateRange: {startDate: c, endDate: u},
            type: "CRS",
            showTimeInLabel: n
          }), t = s.getOriSize(i), Math.abs(t.width - d.width) > 10 && (f = e.prevDim = Object.assign(t)), a < 600 && (f.width + e.calendarIconDim.width) / r.props.width > .4 && (i = "", f.width = 0), e.label = i, {
            text: i,
            dim: f
          }
        }, i.decideTimeInLabel = function () {
          var t, e = this.config;
          return this.getFromEnv("focusScalesX").forEach((function (i) {
            d.includes(i.getBinMin()[0].name()) && (e.showTime = !0), i._timeFormat && (t = d.includes(i._timeFormat.major) || d.includes(i._timeFormat.minor) || t)
          })), t
        }, i.getLogicalSpace = function () {
          var t, e = this.config, i = this.getChildren("manager")[0], n = e.width, a = e.height, r = e.marginTop,
            o = e.marginLeft, l = e.marginRight, s = e.marginBottom;
          return e.showTimeInLabel = this.decideTimeInLabel(), i.configure({showTime: e.showTime}, !0), n = (t = this.getLabel().dim).width, a = t.height, (e.skipGraphics || e.isHidden || this.getState("removed")) && (n = a = s = o = l = r = 0), e.width = t.width, e.height = t.height, {
            width: n,
            height: a,
            marginLeft: o,
            marginBottom: s,
            marginRight: l,
            marginTop: r
          }
        }, i.draw = function () {
          var t, e, i, n, a = this.config, r = this.getLinkedParent(), o = a.scalingParam;
          this.addGraphicalElement({
            el: "group",
            attr: {name: "range-selector-text", transform: "t" + a.x + ", " + (a.y + r.props.height / 2)},
            container: a.containerInfo,
            component: this,
            id: "group",
            label: "group"
          }, !0), t = -1 * (i = o * a.calendarIconDim.width) - 5, e = 3 * (n = o * a.calendarIconDim.height) / 4 * -1, this.addGraphicalElement({
            el: "group",
            attr: {name: "range-selector-icon-group", transform: "t" + t + ", " + e},
            container: {id: "group", label: "group"},
            component: this,
            label: "group",
            id: "icon-group"
          }, !0), this.addGraphicalElement({
            el: "path",
            attr: {path: a.calendarIconPath, stroke: "none"},
            css: a._finalIconStyle,
            container: {id: "icon-group", label: "group"},
            component: this,
            label: "path",
            id: "icon"
          }, !0), this.addGraphicalElement({
            el: "text",
            attr: {text: a.label, opacity: a._finalTextStyle.opacity},
            css: a._finalTextStyle,
            container: {id: "group", label: "group"},
            component: this,
            label: "text",
            id: "display"
          }, !0), this.addGraphicalElement({
            el: "rect",
            attr: {
              "class": "fc__crs__str",
              fill: s.TRACKER_FILL,
              x: t - 5,
              y: -1 * r.props.height / 2,
              width: i + 10 + a.width,
              height: r.props.height,
              stroke: "none"
            },
            component: this,
            container: {label: "group", id: "group"},
            css: {cursor: "pointer"},
            label: "rect",
            id: "rect"
          }), a.containerPos = {x: a.x - i / 2 - 5 * o, y: a.y + r.props.height / 2 + n}
        }, i.removeDocumentListener = function () {
          var t = this.config;
          t.wrapper.off(document, "fc-click", t.documentClicked), t.wrapper.off(document, "keydown", this.keyDownHandler)
        }, e
      }(l.Tool);
      e["default"] = p
    }, 857: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = e.formatDate = void 0;
      var a = n(i(210)), r = n(i(207)), o = i(208), l = n(i(858)), s = i(193), c = n(i(859)), u = n(i(860)),
        d = n(i(861)), f = n(i(377)), h = "cal-".length, g = function (t) {
          return (t < 10 ? "0" + t : t) + ""
        };
      e.formatDate = g;
      var p = function (t) {
        function e(e) {
          var i;
          return i = t.call(this, e) || this, (0, a["default"])(i).addToEnv("fontParser", (function (t) {
            var e = parseFloat(t);
            return isNaN(e) ? 11 : e
          })), i
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          var t = this.config;
          t.paddingLeft = 10, t.paddingRight = 10, t.paddingTop = 15, t.paddingBottom = 15, t.prevVisibility = "hidden", t.contextStart = {
            year: 1970,
            month: 1,
            day: 1
          }, t.contextEnd = {year: 2070, month: 1, day: 1}, t.calendarDim = {
            height: 191,
            width: 163
          }, this._calendars = {}, t._backgroundStyle = {
            "font-size": 11 + s.PXSTRING,
            "font-family": "Verdana,sans-serif",
            border: "1px solid #cdcdcd",
            position: "absolute",
            "border-radius": "0px",
            "overflow-y": "visible",
            "background-color": "#ffffff"
          }, t._mobileBgStyle = Object.assign({}, t._backgroundStyle, {
            position: "fixed",
            "overflow-y": "scroll",
            "border-radius": "10px"
          }), t._pointerStyle = {
            "font-size": 11 + s.PXSTRING,
            "font-family": "Verdana,sans-serif",
            "border-left": "1px solid #cdcdcd",
            "border-right": "0px solid #cdcdcd",
            "border-top": "1px solid #cdcdcd",
            "border-bottom": "0px solid #cdcdcd",
            transform: "rotate(45deg)",
            "background-color": "#ffffff"
          }
        }, i.configureAttributes = function (t) {
          void 0 === t && (t = {});
          var e, i, n, a, r, o, l = this.config, g = this.getCalendars(), p = this.getFromEnv("getStyleDef"),
            m = this.getFromEnv("baseTextStyle");
          if (Object.assign(l, t), e = l.extStyle, l.visibility !== l.prevVisibility ? (i = !1, l.blockUpdate = !1) : l.blockUpdate = !0, l.prevVisibility = l.visibility, "visible" !== l.visibility) return g.left && (g.left.dispose(), delete g.left), void (g.right && (g.right.dispose(), delete g.right));
          n = {
            label: "From: ",
            date: l.leftCalSelectedDate,
            id: "left",
            labelStyle: e.label,
            inputStyle: e.input
          }, a = {
            label: "To: ",
            date: l.rightCalSelectedDate,
            id: "right",
            labelStyle: e.label,
            inputStyle: e.input
          }, void 0 !== i && (n.tempDate = a.tempDate = i), this.attachChild(c["default"], "left-date", "left-date").configure(n), this.attachChild(c["default"], "right-date", "right-date").configure(a), l.showTime && (this.attachChild(u["default"], "left-time", "left-time").configure({
            time: l.leftCalSelectedDate,
            labelStyle: e.label,
            selectStyle: e.select
          }), this.attachChild(u["default"], "right-time", "right-time").configure({
            time: l.rightCalSelectedDate,
            labelStyle: e.label,
            selectStyle: e.select
          })), r = e["button-apply"] ? Object.assign({}, m, e["button-apply"]) : Object.assign({
            color: "#ffffff",
            "font-size": 11 + s.PXSTRING
          }, m), this.attachChild(d["default"], "apply", "apply").configure({
            label: "Apply",
            type: "submit",
            customStyle: r,
            buttonStyle: r,
            "button:hoverout": r,
            "button:hover": e["button-apply:hover"] || {}
          }), o = e["button-cancel"] ? Object.assign({}, m, e["button-cancel"]) : Object.assign({
            backgroundColor: "#ffffff",
            color: "#7A7A7A",
            border: "0px",
            "font-size": 11 + s.PXSTRING
          }, m), this.attachChild(d["default"], "cancel", "cancel").configure({
            label: "Cancel",
            type: "cancel",
            customStyle: o,
            buttonStyle: o,
            "button:hoverout": o,
            "button:hover": e["button-cancel:hover"] || {}
          }), l._finalBackgroundStyle = Object.assign({}, l._backgroundStyle, p(e.container)), l._finalMobileBgStyle = Object.assign({}, l._mobileBgStyle, p(e.container)), l._finalPointerStyle = Object.assign({}, l._pointerStyle, p(e.container)), l._finalPointerStyle.border && (l._finalPointerStyle["border-left"] = l._finalPointerStyle["border-top"] = l._finalPointerStyle.border), l._finalPointerStyle["border-right"] = l._finalPointerStyle["border-bottom"] = "0px", delete l._finalPointerStyle.border, l.calStyle = function (t, e) {
            var i = {};
            if ((0, f["default"])(t)) for (var n in t) t.hasOwnProperty(n) && n.startsWith("cal-") && (i[n.substring(h)] = e(t[n]));
            return i
          }(l.extStyle, this.getFromEnv("getStyleDef"))
        }, i.manageSpace = function (t) {
          void 0 === t && (t = "desktop"), "desktop" === t ? this.manageSpaceLG() : this.manageSpaceSM()
        }, i.manageSpaceSM = function () {
          var t, e, i, n, a, r, o, l, s, c, u, d, f = this.config, h = document.documentElement.clientHeight,
            g = document.documentElement.clientWidth, p = .8 * h, m = {height: 0, width: 0}, v = {height: 0, width: 0},
            y = f.paddingTop, b = f.calendarDim;
          "visible" === f.visibility && (t = this.getChildren("left-date")[0], e = this.getChildren("right-date")[0], i = this.getChildren("left-time"), n = this.getChildren("right-time"), o = this.getChildren("apply")[0], l = this.getChildren("cancel")[0], i && (m = (i = i[0]).getDimension()), n && (v = (n = n[0]).getDimension()), a = t.getDimension(), r = e.getDimension(), u = o.getDimension(), d = l.getDimension(), c = Math.max(b.width, a.width, r.width, m.width, v.width, u.width + d.width + 8), t.setTranslation(50, y), s = 50 + c / 2 - b.width / 2, y += a.height + 8, f.leftCalendarPosition = {
            x: s,
            y: y
          }, y += b.height + 8, i && i.setTranslation(50, y), y += m.height + 16, e.setTranslation(50, y), s = 50 + c / 2 - b.width / 2, y += r.height + 8, f.rightCalendarPosition = {
            x: s,
            y: y
          }, y += b.height + 8, n && n.setTranslation(50, y), y += v.height + 8, o.setTranslation(50, y), l.setTranslation(50 + u.width + 8, y), p > y + u.height + f.paddingBottom ? (f.height = y + u.height + f.paddingBottom, f.y = h / 2 - f.height / 2) : (f.height = p, f.y = .1 * h), f.width = b.width + 50 + 50, f.x = g / 2 - f.width / 2)
        }, i.manageSpaceLG = function () {
          var t, e, i, n, a, r, o, l, s, c, u, d, f = this.config, h = 4, g = {height: 0, width: 0},
            p = {height: 0, width: 0}, m = f.calendarDim, v = this.getLinkedParent().config.containerPos;
          "visible" === f.visibility && (i = this.getChildren("left-date")[0], n = this.getChildren("right-date")[0], a = this.getChildren("left-time"), r = this.getChildren("right-time"), o = this.getChildren("apply")[0], l = this.getChildren("cancel")[0], a && (g = (a = a[0]).getDimension()), r && (p = (r = r[0]).getDimension()), !g.height && (h = 2), t = i.getDimension(), e = n.getDimension(), u = o.getDimension(), d = l.getDimension(), s = Math.max(g.width, t.width, m.width), f.leftCalendarPosition = {
            x: f.paddingLeft,
            y: f.paddingTop + t.height + 8
          }, f.rightCalendarPosition = {
            x: f.paddingLeft + s + 25,
            y: f.paddingTop + e.height + 8
          }, i.setTranslation(f.paddingLeft, f.paddingTop), n.setTranslation(f.paddingLeft + s + 25, f.paddingTop), a && a.setTranslation(f.paddingLeft, f.leftCalendarPosition.y + m.height + 16), r && r.setTranslation(f.paddingLeft + s + 25, f.rightCalendarPosition.y + m.height + 16), o.setTranslation(f.paddingLeft, f.leftCalendarPosition.y + m.height + 8 * h + g.height), l.setTranslation(f.paddingLeft + u.width + 5, f.leftCalendarPosition.y + m.height + 8 * h + g.height), c = Math.max(f.paddingLeft + u.width + 5 + d.width, f.rightCalendarPosition.x + m.width, f.paddingLeft + s + 25 + p.width, f.paddingLeft + s + 25 + e.width), f.width = c + f.paddingRight, f.height = f.leftCalendarPosition.y + m.height + u.height + 8 * h + g.height + f.paddingBottom, f.x = v.x - f.width / 2, f.y = v.y + 4)
        }, i.isWithinWidget = function (t, e) {
          var i = this.config, n = i.x, a = i.y, r = a + i.height, o = n + i.width;
          return t > n && t < o && e > a && e < r
        }, i.draw = function () {
          var t = this.config, e = t._finalMobileBgStyle, i = t._finalBackgroundStyle,
            n = t.visualMode = window.innerWidth < 576 ? "mobile" : "desktop", a = "mobile" === n ? e : i;
          "hidden" !== t.visibility && ("mobile" === n && (a["overflow-y"] = "scroll"), this.manageSpace(n), this.addGraphicalElement({
            el: "html",
            attr: {
              x: t.x,
              y: t.y,
              width: t.width,
              height: t.height,
              type: "div",
              fill: "ffffff",
              display: "block",
              "class": "fc-crs-widget",
              visibility: t.visibility
            },
            css: a,
            component: this,
            label: "box-container",
            id: "box-container"
          }), "mobile" !== n && this.addGraphicalElement({
            el: "html",
            attr: {
              x: t.width / 2 - 10,
              y: -9,
              width: 15,
              height: 15,
              type: "div",
              display: "block",
              visibility: t.visibility
            },
            css: t._finalPointerStyle,
            container: {label: "box-container", id: "box-container"},
            component: this,
            label: "box-pointer",
            id: "box-pointer"
          }), t.drawCalendars && this.drawCalendars(), t.mode = n)
        }, i.getCalendars = function () {
          return this._calendars
        }, i.drawCalendars = function () {
          var t, e = this, i = e.config, n = e.getCalendars(), a = i.leftCalendarPosition, r = i.rightCalendarPosition,
            o = e.getGraphicalElement("box-container", "box-container").element,
            c = window.innerWidth < 576 ? "mobile" : "desktop", u = i.calStyle;
          i.mode === c && i.blockUpdate && n.left && n.right || (n.left ? n.left.configure({
            weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
            selectedDate: i.leftCalSelectedDate,
            posX: a.x,
            posY: a.y,
            rangeStart: i.contextStart,
            rangeEnd: i.contextEnd,
            customCssClass: u,
            showInactiveMonths: !0,
            container: o
          }) : n.left = new l["default"]({
            weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
            selectedDate: i.leftCalSelectedDate,
            posX: a.x,
            posY: a.y,
            container: o,
            id: "left",
            rangeStart: i.contextStart,
            rangeEnd: i.contextEnd,
            showInactiveMonths: !0,
            customCssClass: u,
            events: {
              onDateChange: function (t) {
                e.updateDate(t, "left")
              }, onMonthChange: function (t) {
                e.updateDate(t, "left")
              }, onYearChange: function (t) {
                e.updateDate(t, "left")
              }
            },
            "font-family": s.DEFAULT_FT_FONT + " !important"
          }), n.right ? n.right.configure({
            weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
            selectedDate: i.rightCalSelectedDate,
            posX: r.x,
            posY: r.y,
            rangeStart: i.contextStart,
            rangeEnd: i.contextEnd,
            customCssClass: u,
            showInactiveMonths: !0,
            container: o
          }) : n.right = new l["default"]({
            weekLabel: ["S", "M", "T", "W", "T", "F", "S"],
            selectedDate: i.rightCalSelectedDate,
            posX: r.x,
            posY: r.y,
            rangeStart: i.contextStart,
            rangeEnd: i.contextEnd,
            showInactiveMonths: !0,
            customCssClass: u,
            container: o,
            id: "right",
            events: {
              onDateChange: function (t) {
                e.updateDate(t, "right")
              }, onMonthChange: function (t) {
                e.updateDate(t, "right")
              }, onYearChange: function (t) {
                e.updateDate(t, "right")
              }
            },
            "font-family": s.DEFAULT_FT_FONT + " !important"
          }), (t = n.left.getDimension()).width === i.calendarDim.width && t.height === i.calendarDim.height || (i.calendarDim = t, e.asyncDraw()))
        }, i.updateDate = function (t, e) {
          var i = this.getChildren(e + "-date")[0], n = i.getGraphicalElement("box", "box");
          i.setData({date: t, tempDate: !1}, !0), n.element.value = g(t.day) + "/" + g(t.month) + "/" + g(t.year)
        }, i.updateCalendar = function (t, e) {
          var i = this.config, n = this.getCalendars(), a = i[e + "CalSelectedDate"];
          !function (t, e, i) {
            var n = new Date(e.year, e.month, e.day), a = new Date(i.year, i.month, i.day),
              r = new Date(t.year, t.month, t.day);
            return +r >= +n && +r <= +a
          }(t, i.contextStart, i.contextEnd) ? this.getChildren(e + "-date")[0].setData({}, !0) : (i[e + "CalSelectedDate"] = t, a.day = t.day, a.month = t.month, a.year = t.year, n[e] && n[e].configure({selectedDate: t}))
        }, i.submitData = function (t) {
          void 0 === t && (t = "cancel");
          var e, i, n, a, r = this.getLinkedParent(), o = r.getFromEnv("chart"), l = o.getFromEnv("contextScalesX")[0],
            s = [], c = this.getCalendars(), u = o.getFromEnv("UTC"), d = c.left.getDate(), f = c.right.getDate(),
            h = this.getChildren("left-time"), g = this.getChildren("right-time"),
            p = {hours: 0, minutes: 0, seconds: 0}, m = {hours: 0, minutes: 0, seconds: 0};
          h && (p = h[0].getTime()), g && (m = g[0].getTime()), r.setData({}, !0), "submit" === t && (n = u ? Date.UTC(d.year, d.month - 1, d.day, p.hours, p.minutes, p.seconds) : new Date(d.year, d.month - 1, d.day, p.hours, p.minutes, p.seconds), a = u ? Date.UTC(f.year, f.month - 1, f.day, m.hours, m.minutes, m.seconds) : new Date(f.year, f.month - 1, f.day, m.hours, m.minutes, m.seconds), s.push(+n), s.push(+a), o.setFocusLimit(s), i = r.decideTimeInLabel(), e = l.getFormattedTime({
            dateRange: {
              startDate: n,
              endDate: a
            }, type: "CRS", showTimeInLabel: i
          }).split(" - "), o.fireChartInstanceEvent("customRangeSelect", {
            start: +n,
            end: +a,
            startText: e[0],
            endText: e[1],
            formatter: "%b %d, %Y" + (i ? ", %H:%M:%S" : "")
          })), r.removeDocumentListener()
        }, e
      }(o.SmartRenderer);
      e["default"] = p
    }, 858: function (t, e, i) {
      "use strict";
      var n;
      window, n = function () {
        return function (t) {
          var e = {};

          function i(n) {
            if (e[n]) return e[n].exports;
            var a = e[n] = {i: n, l: !1, exports: {}};
            return t[n].call(a.exports, a, a.exports, i), a.l = !0, a.exports
          }

          return i.m = t, i.c = e, i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
          }, i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
          }, i.t = function (t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
              enumerable: !0,
              value: t
            }), 2 & e && "string" != typeof t) for (var a in t) i.d(n, a, function (e) {
              return t[e]
            }.bind(null, a));
            return n
          }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
              return t["default"]
            } : function () {
              return t
            };
            return i.d(e, "a", e), e
          }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
          }, i.p = "/dist/", i(i.s = 0)
        }([function (t, e, i) {
          function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }

          function a(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
          }

          function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
              return typeof t
            } : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
          }

          i.r(e), i(1), i(55), i(58), i(64);
          var o = 0, l = undefined, s = new Map, c = function (t) {
              return null !== t && "object" === r(t) && !Array.isArray(t)
            }, u = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            f = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            h = ["container", "container:hover", "header-container", "header-container:hover", "header", "header:hover", "year", "year:hover", "headername", "headername:hover", "yearname", "yearname:hover", "nav", "nav:hover", "navprev", "navprev:hover", "navnext", "navnext:hover", "navinactive", "navinactive:hover", "navmonth", "navmonth:hover", "navyear", "navyear:hover", "subheader", "subheader:hover", "body", "body:hover", "days", "days:hover", "indexeddays", "indexeddays:hover", "dateLI", "dateLI:hover", "date", "date:hover", "daycol", "daycol:hover", "normaldatedefault", "normaldatedefault:hover", "activedate", "activedate:hover", "disableddatedefault", "disableddatedefault:hover", "disableddate", "disableddate:hover", "weekenddefault", "weekenddefault:hover", "weekend", "weekend:hover", "selecteddatedefault", "selecteddatedefault:hover", "selecteddate", "selecteddate:hover", "highlighteddatedefault", "highlighteddatedefault:hover", "highlighteddate", "highlighteddate:hover"],
            g = {
              dateLI: {
                "box-sizing": "border-box!important",
                float: "left!important",
                "list-style-type": "none!important",
                width: "14.28571%!important",
                height: "auto!important",
                padding: "2px 0 2px !important",
                margin: "0 !important",
                "background-color": "#fff !important"
              },
              navinactive: {opacity: 0, cursor: "default !important"},
              weekenddefault: {"background-color": "#F7F6FF!important"},
              normaldatedefault: {cursor: "pointer!important"},
              "normaldatedefault:hover": {color: "#5F5F5F!important", "background-color": "#dcdcdc!important"},
              selecteddatedefault: {"background-color": "#5648D4!important", color: "#F3F3F3!important"},
              "selecteddatedefault:hover": {"background-color": "#5648D4!important", color: "#F3F3F3!important"},
              disableddatedefault: {color: "#cacaca!important"}
            }, p = {
              container: "fc-cal-container",
              "header-container": "fc-cal-header-container",
              header: "fc-cal-month-header",
              year: "fc-cal-year-header",
              headername: "fc-cal-month",
              yearname: "fc-cal-year",
              nav: "fc-cal-nav",
              navprev: "fc-cal-nav-prev",
              navnext: "fc-cal-nav-next",
              navinactive: "fc-cal-nav-inactive",
              navmonth: "fc-cal-nav-month",
              navyear: "fc-cal-nav-year",
              subheader: "fc-cal-sub-header",
              body: "fc-cal-body",
              days: "fc-cal-day",
              indexeddays: "fc-cal-day-",
              dateLI: "fc-cal-date-li",
              date: "fc-cal-date",
              daycol: "fc-cal-day-col",
              normaldatedefault: "fc-cal-date-normal-default",
              activedate: "fc-cal-date-normal",
              disableddatedefault: "fc-cal-date-disabled-default",
              disableddate: "fc-cal-date-disabled",
              weekenddefault: "fc-cal-weekend-default",
              weekend: "fc-cal-weekend",
              selecteddatedefault: "fc-cal-date-selected-default",
              selecteddate: "fc-cal-date-selected",
              highlighteddatedefault: "fc-cal-date-highlight-default",
              highlighteddate: "fc-cal-date-highlight"
            }, m = {
              container: "box-sizing: border-box !important; -webkit-touch-callout: none !important; -webkit-user-select: none !important; -khtml-user-select: none !important; -moz-user-select: none !important; -ms-user-select: none !important; user-select: none !important; text-align: center !important; vertical-align: top !important; padding-bottom: 0 !important; margin: 0px 0px 0px 0px !important; float: left;font-size: 11px !important; max-width: 163px !important; background-color: #fff !important; border: 1px solid #a5a4a4;",
              header: "box-sizing: border-box !important; overflow: hidden !important; height: 26px !important; line-height: 2.4 !importantfont-size: 12px !important; background-color: #5648D4 !important;",
              month: "display: block !important; width: 100% !important; float: left !important; height: 100% !important;font-weight: bold !important; color: #F3F3F3 !important; font-size: 13px !important;",
              year: "display: block !important; width: 35% !important; float: right !important;",
              monthname: "display: inline-block !important; padding: 4px !important;",
              yearname: "display: inline-block !important; padding-right: 5px !important; padding-left: 5px !important;",
              nav: "display: inline-block !important; cursor: pointer !important; padding: 4px;",
              navprev: "float: left !important; padding-left: 8px !important;",
              navnext: "float: right !important; padding-right: 8px !important;",
              navinactive: "cursor: default !important;",
              navmonth: "",
              navyear: "",
              subheader: "text-transform: uppercase !important; overflow: hidden !important; color: #666 !important;",
              days: "box-sizing: border-box !important; display: block !important; float: left !important; width: 14.28571% !important; line-height: 2.3 !important;",
              indexeddays: "",
              body: "width: 100% !important;",
              date: "box-sizing: border-box !important; text-align: center !important; display: block !important; margin: 0 auto !important;border: 0px solid transparent !important; width: 14.2857% !important; padding: 0px !important;",
              dateLI: "box-sizing: border-box !important; float: left !important; list-style-type: none !important; width: 14.28571% !important; height: auto!important;",
              selecteddate: "",
              disableddate: "",
              normaldate: "cursor: pointer !important;",
              highlightedDate: "",
              daycol: "",
              weekenddefault: "background-color: #F7F6FF!important;",
              weekend: ""
            }, v = {padding: "0", margin: 0}, y = "px", b = " ", x = {top: 0, middle: -.5, bottom: -1},
            k = {left: 0, center: -.5, right: -1}, S = function () {
              return "fc_calendar-".concat(o++)
            }, _ = function (t, e) {
              if (e && t && t.style) for (var i in e) e.hasOwnProperty(i) && (t.style[i] = e[i])
            }, C = function (t, e) {
              var i = e && e.className;
              i && t && (e.className = i.replace(new RegExp("(?:^|\\s*)" + t.trim() + "(?:\\s*|$)"), " "))
            }, w = function (t, e) {
              var i, n, a, r, o;
              if (t && t.getElementsByClassName) for (a = 0, r = (o = e.trim().split(b)).length; a < r; a += 1) for (e = o[a], n = (i = t.getElementsByClassName(e)).length - 1; n >= 0; n--) C(e, i[n])
            }, E = function (t) {
              var e, i = t.info, n = i.weekStartingDay, a = t.graphic.dayElements;
              for (e = 0; e < 7; e++) a[e].innerHTML = i.weekLabel[(e + n) % 7]
            }, D = function (t) {
              var e = t.classNames, i = t.info, n = i.selectedDate, a = i.active, r = i.startingPos, o = t.graphic,
                l = o.container, s = o.dateLiElements, c = o.dateElements;
              n.month === a.month && n.year === a.year && (w(l, e.selecteddatedefault), w(l, e.selecteddate), s[n.day + r - 1].className += b + e.selecteddatedefault, c[n.day + r - 1].className += b + e.selecteddate)
            }, M = function (t, e) {
              var i = e.appendTo, n = e.className, a = e.inline, r = e.id, o = e.innerHTML, l = e.events,
                s = document.createElement(t);
              if (n && (s.className = n), a && s.setAttribute("style", a), r && (s.id = r), o && (s.innerHTML = o), l) for (var c in l) s.addEventListener(c, l[c]), "click" === c && (s["_" + c + "Handler"] = l[c], s.eventAttached = !0);
              return i && i.appendChild(s), s
            }, T = function (t, e) {
              var i, n, a, r, o = t.graphic, l = t.info.weekLabel, s = o.dateElements, c = o.dayElements,
                u = o.dateLiElements, d = e["font-family"] && " font-family: ".concat(e["font-family"], ";") || "",
                f = t.classNames = Object.assign({}, p, t._customCssClass), h = o.container = M("div", {
                  appendTo: o.parentElement,
                  inline: m.container + d,
                  className: f.container,
                  id: t.id
                }), g = o.calendarHeader = M("div", {appendTo: h, inline: m.header}), y = o.headerUl = M("ul", {
                  appendTo: g,
                  className: f["header-container"],
                  inline: "height: 100% !important;"
                }), x = o.headerMonthLi = M("li", {appendTo: y, inline: m.month}),
                k = o.headerMonthUl = M("ul", {appendTo: x, className: f.header, inline: "height: 100% !important;"}),
                S = o.calendarSubHeader = M("div", {appendTo: h, inline: m.subheader}),
                w = o.weekDays = M("ul", {appendTo: S, className: f.subheader}),
                E = o.calendarBody = M("div", {appendTo: h, inline: m.body}), T = o.days = o.dayCell = M("ul", {
                  appendTo: E,
                  inline: "padding: 1px !important; margin: 0px !important;",
                  className: f.body
                });
              for (_(h, t.style), _(y, v), _(w, v), _(T, v), _(k, v), o.prevMonth = M("li", {
                appendTo: k,
                inline: m.nav + b + m.navprev + b,
                events: {
                  click: function () {
                    var e = t.info, i = t.graphic, n = (e.active && e.active.month) - 1, a = e.active && e.active.year,
                      r = e.rangeStart;
                    n < 1 && (n = 12, a--), !r || a > r.year ? (C(f.navinactive, i.prevMonth), C(f.navinactive, i.nextMonth), t.configure({
                      active: {
                        month: n,
                        year: a
                      }, doNotUpdateStyle: !0
                    })) : a === r.year && n >= r.month && (C(f.navinactive, i.nextMonth), n === r.month && (i.prevMonth.className += b + f.navinactive), t.configure({
                      active: {
                        month: n,
                        year: a
                      }, doNotUpdateStyle: !0
                    }))
                  }
                }
              }), o.prevMonthPointer = M("span", {
                appendTo: o.prevMonth,
                className: f.navprev,
                innerHTML: "&#10094;"
              }), o.monthStrLi = M("li", {
                appendTo: k,
                inline: m.monthname
              }), o.monthStr = M("span", {
                appendTo: o.monthStrLi,
                className: f.headername
              }), o.nextMonth = M("li", {
                appendTo: k, inline: m.nav + b + m.navnext + b, events: {
                  click: function () {
                    var e = t.info, i = t.graphic, n = (e.active && e.active.month) + 1, a = e.active && e.active.year,
                      r = e.rangeEnd;
                    n > 12 && (n = 1, a++), !r || a < r.year ? (C(f.navinactive, i.prevMonth), C(f.navinactive, i.nextMonth), t.configure({
                      active: {
                        month: n,
                        year: a
                      }, doNotUpdateStyle: !0
                    })) : a === r.year && n <= r.month && (n === r.month && (i.nextMonth.className += b + f.navinactive), C(f.navinactive, i.prevMonth), t.configure({
                      active: {
                        month: n,
                        year: a
                      }, doNotUpdateStyle: !0
                    }))
                  }
                }
              }), o.nextMonthPointer = M("span", {
                appendTo: o.nextMonth,
                className: f.navnext,
                innerHTML: "&#10095;"
              }), n = 1; n < 8; n++) a = b + (n > 5 ? f.weekend : ""), r = b + (n > 5 ? f.weekenddefault : ""), i = M("li", {
                appendTo: w,
                inline: m.days,
                className: r
              }), i = M("span", {
                appendTo: i,
                innerHTML: l[n % 7],
                inline: "display: block !important;",
                className: f.days + b + f.indexeddays + n % 7 + a
              }), c.push(i);
              for (var L = function (e) {
                r = b + (e % 7 == 5 || e % 7 == 6 ? f.weekenddefault : ""), a = b + (e % 7 == 5 || e % 7 == 6 ? f.weekend : ""), i = M("li", {
                  appendTo: T,
                  inline: m.date,
                  className: f.dateLI + r
                }), u.push(i), i = M("span", {
                  appendTo: i,
                  className: f.date + b + f.daycol + "-" + e % 7 + a,
                  inline: "display: block !important; padding: 4px 0px !important;",
                  innerHTML: "&nbsp;",
                  events: {
                    click: function () {
                      var i = t.info, n = t.events, a = i.selectedDate, r = i.active,
                        o = {day: e - i.startingPos + 1, month: r.month, year: r.year};
                      o.day >= 1 && o.day <= i.curMonthInfo.end - i.startingPos && F(o, i.rangeStart) && I(o, i.rangeEnd) && (a.day = o.day, a.month = o.month, a.year = o.year, D(t), n.onDateChange && n.onDateChange(a))
                    }
                  }
                }), s.push(i)
              }, O = 0; O < 42; O++) L(O)
            }, F = function (t, e) {
              var i = t.day, n = t.month, a = t.year;
              return !(e && (e.year > a || e.year === a && (e.month > n || e.month === n && e.day > i)))
            }, I = function (t, e) {
              var i = t.day, n = t.month, a = t.year;
              return !(e && (e.year < a || e.year === a && (e.month < n || e.month === n && e.day < i)))
            }, L = function (t, e) {
              var i = "fc-cal-user-".concat(t), n = "";
              for (t in e) e.hasOwnProperty(t) && (n += "".concat(t, ": ").concat(e[t], "; "));
              return {className: i, cssString: ".".concat(i, " { ").concat(n, "}")}
            }, O = function () {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, e = {},
                i = document.getElementById("fc__calendar__style"), n = i && i.sheet;
              return n ? (h.forEach((function (i) {
                if (t.hasOwnProperty(i) || g[i]) {
                  var a = t[i] || g[i];
                  if ("string" == typeof a) e[i] = a; else if (c(a)) {
                    var r = L(i, a), o = r.className, l = r.cssString;
                    if (!i.endsWith(":hover") && (e[i] = o), !s.has(o) || s.get(o).cssStr !== l) {
                      var u = n.cssRules.length;
                      s.has(o) && (u = s.get(o).index, n.deleteRule(u)), s.set(o, {
                        cssStr: l,
                        index: u
                      }), n.insertRule(l, u)
                    }
                  }
                }
              })), e) : e
            }, A = function () {
              function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                n(this, t);
                var i = this, a = new Date, r = {day: a.getDate(), month: a.getMonth() + 1, year: a.getFullYear()};
                i._customCssClass = {}, i.graphic = {
                  parentElement: e.container || document.body,
                  dateElements: [],
                  dateLiElements: [],
                  dayElements: []
                }, i.style = {
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: 300 + y,
                  overflow: "hidden"
                }, i.id = e.id || S(), i.events = {}, i.info = {
                  selectedDate: r,
                  active: {month: r.month, year: r.year},
                  weekLabel: [].concat(d),
                  monthLabel: [].concat(f),
                  weekStartingDay: 1,
                  posX: 0,
                  posY: 0,
                  height: 300,
                  width: 300,
                  vAlignment: "top",
                  hAlignment: "left",
                  highlightClasses: []
                }, i._customCssClass = O(e.customCssClass), T(i, e), e.doNotUpdateStyle = !0, i.configure(e, !0)
              }

              var e, i, r;
              return e = t, (i = [{
                key: "configure", value: function (t, e) {
                  var i, n, a = this.graphic, r = this.events, o = this.info, s = this.style, c = t && t.events, d = !1;
                  t && (t.doNotUpdateStyle || (this._customCssClass = O(t.customCssClass)), this.classNames = Object.assign({}, p, this._customCssClass), t.container && (i = document.getElementById(t.container)) ? (a.parentElement = i, i.appendChild(a.container)) : t.container instanceof Element && (a.parentElement = t.container), t.style && t.style.position && (s.position = t.style.position, _(a.container, s)), isNaN(n = Number(t.posX)) || (o.posX = n, d = !0), isNaN(n = Number(t.posY)) || (o.posY = n, d = !0), !isNaN(n = Number(t.width)) && n > 300 && (o.width = n, s.width = n + y, d = !0), t.vAlignment && (n = t.vAlignment.toLowerCase()) && x[n] !== l && (o.vAlignment = n, d = !0), t.hAlignment && (n = t.hAlignment.toLowerCase()) && k[n] !== l && (o.hAlignment = n, d = !0), c && ("function" == typeof c.onDateChange && (r.onDateChange = c.onDateChange), "function" == typeof c.onYearChange && (r.onYearChange = c.onYearChange), "function" == typeof c.onMonthChange && (r.onMonthChange = c.onMonthChange)), t.highlight ? (o.highlight = t.highlight, e = !0) : null === t.highlight && (delete o.highlight, e = !0), (n = t.selectedDate) && !isNaN(Date.parse(n.month + "/" + n.day + "/" + n.year)) && (o.selectedDate = t.selectedDate, o.active.month = o.selectedDate.month, o.active.year = o.selectedDate.year, e = !0), t.showInactiveMonths !== l && (o.showInactiveMonths = !!t.showInactiveMonths), t.active && (n = {
                    month: t.active.month || o.active.month,
                    year: t.active.year || o.active.year
                  }, o.active.month === n.month && o.active.year === n.year || !(o.showInactiveMonths || F(n, o.rangeStart) && I(n, o.rangeEnd)) || (o.active.month = n.month, o.active.year = n.year, e = !0)), t.monthLabel && 12 === t.monthLabel.length && (o.monthLabel = t.monthLabel, e = !0), t.weekLabel && 7 === t.weekLabel.length && (o.weekLabel = t.weekLabel, E(this)), t.weekStart !== l && o.weekStartingDay !== t.weekStart && (o.weekStartingDay = t.weekStart, E(this)), t.rangeStart && F(o.selectedDate, t.rangeStart) ? (o.rangeStart = t.rangeStart, e = !0) : null === t.rangeStart && (delete o.rangeStart, e = !0), t.rangeEnd && I(o.selectedDate, t.rangeEnd) ? (o.rangeEnd = t.rangeEnd, e = !0) : null === t.rangeEnd && (delete o.rangeEnd, e = !0), e && function (t) {
                    var e, i, n, a, r, o, l, s, c, d, f = t.info, h = t.graphic, g = t.classNames, p = f.active,
                      m = f.rangeStart, v = f.rangeEnd, y = f.weekStartingDay, x = f.highlight, k = f.highlightClasses,
                      S = (f.showInactiveMonths, h.monthStr), _ = (h.yearStr, h.dateElements), E = h.dateLiElements,
                      T = h.container, L = h.prevMonth, O = h.prevMonthPointer, A = h.nextMonth, P = h.nextMonthPointer,
                      B = (h.prevYear, h.nextYear, p.month), N = p.year, H = x && x[N] && x[N][B],
                      j = new Date("".concat(B, "/1/").concat(N)).getDay(), R = f.startingPos = j - y + (y <= j ? 0 : 7),
                      V = u[B - 1] + (function (t) {
                        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                      }(N) && 2 === B ? 1 : 0), G = V + R, Y = F({day: 1, month: B, year: N}, m),
                      U = I({day: V, month: B, year: N}, v), z = Y ? 0 : m.month === B && m.year === N ? m.day - 1 : V,
                      X = U ? V + 1 : v.month === B && v.year === N ? v.day + 1 : 1,
                      W = m && m.year === p.year && m.month === p.month,
                      q = v && v.year === p.year && v.month === p.month;
                    for (f.curMonthInfo = {
                      start: j,
                      end: G
                    }, l = h.calendarBody.children[0], w(T, g.normaldatedefault), w(T, g.selecteddatedefault), w(T, g.disableddatedefault), w(T, g.activedate), w(T, g.selecteddate), w(T, g.disableddate), w(T, g.navinactive), q ? P.className += b + g.navinactive : C(g.navinactive, A), W ? O.className += b + g.navinactive : C(g.navinactive, L); k.length;) o = k.pop(), w(T, o);
                    if (l.childElementCount < 42) for (; l.childElementCount < 42;) e = l.childElementCount, s = b + (e % 7 == 5 || e % 7 == 6 ? g.weekenddefault : ""), c = b + (e % 7 == 5 || e % 7 == 6 ? g.weekend : ""), d = M("li", {
                      appendTo: l,
                      className: s,
                      events: {
                        click: function () {
                          var i = t.info, n = t.events, a = i.selectedDate, r = i.active,
                            o = {day: e - i.startingPos + 1, month: r.month, year: r.year};
                          o.day >= 1 && o.day <= i.curMonthInfo.end - i.startingPos && F(o, i.rangeStart) && I(o, i.rangeEnd) && (a.day = o.day, a.month = o.month, a.year = o.year, D(t), n.onDateChange && n.onDateChange(a))
                        }
                      }
                    }), E.push(d), d = M("span", {
                      appendTo: d,
                      className: g.date + b + g.daycol + "-" + e % 7 + c,
                      innerHTML: "&nbsp;"
                    }), _.push(d);
                    for (S.innerHTML = f.monthLabel[B - 1] + b + N, e = 0, n = _.length; e < n; e++) e < R ? (_[e].innerHTML = new Date(N, B - 1, e - R + 1).getDate(), E[e].className += b + g.disableddatedefault, _[e].className += b + g.disableddate, E[e].eventAttached && E[e].removeEventListener("click", _[e]._clickHandler), E[e].eventAttached = !1) : e >= G ? (a = new Date(N, B - 1, e - R + 1).getDate(), _[e].innerHTML = a < 10 ? "0" + a : a, E[e].className += b + g.disableddatedefault, _[e].className += b + g.disableddate, E[e].eventAttached && E[e].removeEventListener("click", _[e]._clickHandler), E[e].eventAttached = !1) : (i = e - R + 1, _[e].innerHTML = i < 10 ? "0" + i : i, (r = H && H[i]) && (o = b + g.highlightedDate, !0 !== r && (o += b + r), k.push(o)), !E[e].eventAttached && E[e].addEventListener("click", E[e]._clickHandler), E[e].eventAttached = !0, _[e].className += b + (i <= z || i >= X ? g.disableddate : g.activedate) + (r ? o : ""), E[e].className += b + (i <= z || i >= X ? g.disableddatedefault : g.normaldatedefault) + (r ? o : ""));
                    D(t)
                  }(this), d && (s.left = o.posX + o.width * (k[o.hAlignment] || 0) + y, o.height = a.container && a.container.offsetHeight || 300, s.top = o.posY + o.height * (x[o.vAlignment] || 0) + y, _(a.container, s)))
                }
              }, {
                key: "show", value: function () {
                  var t = this.graphic.container;
                  t.style.visibility = "visible", t.style.opacity = "1"
                }
              }, {
                key: "hide", value: function () {
                  var t = this.graphic.container;
                  t.style.visibility = "hidden", t.style.opacity = "0"
                }
              }, {
                key: "getDate", value: function () {
                  return this.info.selectedDate
                }
              }, {
                key: "addEventListner", value: function (t, e) {
                  "function" == typeof e && this.events && (this.events[t] = e)
                }
              }, {
                key: "removeEventListner", value: function (t) {
                  this.events && this.events[t] && delete this.events[t]
                }
              }, {
                key: "getDimension", value: function () {
                  var t = this.graphic;
                  return {width: t.container.offsetWidth, height: t.container.offsetHeight}
                }
              }, {
                key: "dispose", value: function () {
                  var t = this.graphic, e = t.parentElement, i = t.container;
                  e.removeChild(i)
                }
              }]) && a(e.prototype, i), r && a(e, r), t
            }();
          e["default"] = A
        }, function (t, e, i) {
          t.exports = i(2)
        }, function (t, e, i) {
          i(3);
          var n = i(52);
          t.exports = n("String", "startsWith")
        }, function (t, e, i) {
          var n = i(4), a = i(41), r = i(47), o = i(15), l = i(51), s = "".startsWith, c = Math.min;
          n({target: "String", proto: !0, forced: !l("startsWith")}, {
            startsWith: function (t) {
              var e = String(o(this));
              r(t);
              var i = a(c(arguments.length > 1 ? arguments[1] : undefined, e.length)), n = String(t);
              return s ? s.call(e, n, i) : e.slice(i, i + n.length) === n
            }
          })
        }, function (t, e, i) {
          var n = i(5), a = i(7).f, r = i(21), o = i(24), l = i(26), s = i(34), c = i(46);
          t.exports = function (t, e) {
            var i, u, d, f, h, g = t.target, p = t.global, m = t.stat;
            if (i = p ? n : m ? n[g] || l(g, {}) : (n[g] || {}).prototype) for (u in e) {
              if (f = e[u], d = t.noTargetGet ? (h = a(i, u)) && h.value : i[u], !c(p ? u : g + (m ? "." : "#") + u, t.forced) && d !== undefined) {
                if (typeof f == typeof d) continue;
                s(f, d)
              }
              (t.sham || d && d.sham) && r(f, "sham", !0), o(i, u, f, t)
            }
          }
        }, function (t, e, i) {
          (function (e) {
            var i = "object", n = function (t) {
              return t && t.Math == Math && t
            };
            t.exports = n(typeof globalThis == i && globalThis) || n(typeof window == i && window) || n(typeof self == i && self) || n(typeof e == i && e) || Function("return this")()
          }).call(this, i(6))
        }, function (t, e) {
          var i;
          i = function () {
            return this
          }();
          try {
            i = i || new Function("return this")()
          } catch (n) {
            "object" == typeof window && (i = window)
          }
          t.exports = i
        }, function (t, e, i) {
          var n = i(8), a = i(10), r = i(11), o = i(12), l = i(16), s = i(18), c = i(19),
            u = Object.getOwnPropertyDescriptor;
          e.f = n ? u : function (t, e) {
            if (t = o(t), e = l(e, !0), c) try {
              return u(t, e)
            } catch (i) {
            }
            if (s(t, e)) return r(!a.f.call(t, e), t[e])
          }
        }, function (t, e, i) {
          var n = i(9);
          t.exports = !n((function () {
            return 7 != Object.defineProperty({}, "a", {
              get: function () {
                return 7
              }
            }).a
          }))
        }, function (t, e) {
          t.exports = function (t) {
            try {
              return !!t()
            } catch (e) {
              return !0
            }
          }
        }, function (t, e, i) {
          var n = {}.propertyIsEnumerable, a = Object.getOwnPropertyDescriptor, r = a && !n.call({1: 2}, 1);
          e.f = r ? function (t) {
            var e = a(this, t);
            return !!e && e.enumerable
          } : n
        }, function (t, e) {
          t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
          }
        }, function (t, e, i) {
          var n = i(13), a = i(15);
          t.exports = function (t) {
            return n(a(t))
          }
        }, function (t, e, i) {
          var n = i(9), a = i(14), r = "".split;
          t.exports = n((function () {
            return !Object("z").propertyIsEnumerable(0)
          })) ? function (t) {
            return "String" == a(t) ? r.call(t, "") : Object(t)
          } : Object
        }, function (t, e) {
          var i = {}.toString;
          t.exports = function (t) {
            return i.call(t).slice(8, -1)
          }
        }, function (t, e) {
          t.exports = function (t) {
            if (t == undefined) throw TypeError("Can't call method on " + t);
            return t
          }
        }, function (t, e, i) {
          var n = i(17);
          t.exports = function (t, e) {
            if (!n(t)) return t;
            var i, a;
            if (e && "function" == typeof (i = t.toString) && !n(a = i.call(t))) return a;
            if ("function" == typeof (i = t.valueOf) && !n(a = i.call(t))) return a;
            if (!e && "function" == typeof (i = t.toString) && !n(a = i.call(t))) return a;
            throw TypeError("Can't convert object to primitive value")
          }
        }, function (t, e) {
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
          }
        }, function (t, e) {
          var i = {}.hasOwnProperty;
          t.exports = function (t, e) {
            return i.call(t, e)
          }
        }, function (t, e, i) {
          var n = i(8), a = i(9), r = i(20);
          t.exports = !n && !a((function () {
            return 7 != Object.defineProperty(r("div"), "a", {
              get: function () {
                return 7
              }
            }).a
          }))
        }, function (t, e, i) {
          var n = i(5), a = i(17), r = n.document, o = a(r) && a(r.createElement);
          t.exports = function (t) {
            return o ? r.createElement(t) : {}
          }
        }, function (t, e, i) {
          var n = i(8), a = i(22), r = i(11);
          t.exports = n ? function (t, e, i) {
            return a.f(t, e, r(1, i))
          } : function (t, e, i) {
            return t[e] = i, t
          }
        }, function (t, e, i) {
          var n = i(8), a = i(19), r = i(23), o = i(16), l = Object.defineProperty;
          e.f = n ? l : function (t, e, i) {
            if (r(t), e = o(e, !0), r(i), a) try {
              return l(t, e, i)
            } catch (n) {
            }
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
            return "value" in i && (t[e] = i.value), t
          }
        }, function (t, e, i) {
          var n = i(17);
          t.exports = function (t) {
            if (!n(t)) throw TypeError(String(t) + " is not an object");
            return t
          }
        }, function (t, e, i) {
          var n = i(5), a = i(25), r = i(21), o = i(18), l = i(26), s = i(28), c = i(29), u = c.get, d = c.enforce,
            f = String(s).split("toString");
          a("inspectSource", (function (t) {
            return s.call(t)
          })), (t.exports = function (t, e, i, a) {
            var s = !!a && !!a.unsafe, c = !!a && !!a.enumerable, u = !!a && !!a.noTargetGet;
            "function" == typeof i && ("string" != typeof e || o(i, "name") || r(i, "name", e), d(i).source = f.join("string" == typeof e ? e : "")), t !== n ? (s ? !u && t[e] && (c = !0) : delete t[e], c ? t[e] = i : r(t, e, i)) : c ? t[e] = i : l(e, i)
          })(Function.prototype, "toString", (function () {
            return "function" == typeof this && u(this).source || s.call(this)
          }))
        }, function (t, e, i) {
          var n = i(5), a = i(26), r = i(27), o = n["__core-js_shared__"] || a("__core-js_shared__", {});
          (t.exports = function (t, e) {
            return o[t] || (o[t] = e !== undefined ? e : {})
          })("versions", []).push({
            version: "3.1.3",
            mode: r ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
          })
        }, function (t, e, i) {
          var n = i(5), a = i(21);
          t.exports = function (t, e) {
            try {
              a(n, t, e)
            } catch (i) {
              n[t] = e
            }
            return e
          }
        }, function (t, e) {
          t.exports = !1
        }, function (t, e, i) {
          var n = i(25);
          t.exports = n("native-function-to-string", Function.toString)
        }, function (t, e, i) {
          var n, a, r, o = i(30), l = i(5), s = i(17), c = i(21), u = i(18), d = i(31), f = i(33), h = l.WeakMap;
          if (o) {
            var g = new h, p = g.get, m = g.has, v = g.set;
            n = function (t, e) {
              return v.call(g, t, e), e
            }, a = function (t) {
              return p.call(g, t) || {}
            }, r = function (t) {
              return m.call(g, t)
            }
          } else {
            var y = d("state");
            f[y] = !0, n = function (t, e) {
              return c(t, y, e), e
            }, a = function (t) {
              return u(t, y) ? t[y] : {}
            }, r = function (t) {
              return u(t, y)
            }
          }
          t.exports = {
            set: n, get: a, has: r, enforce: function (t) {
              return r(t) ? a(t) : n(t, {})
            }, getterFor: function (t) {
              return function (e) {
                var i;
                if (!s(e) || (i = a(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return i
              }
            }
          }
        }, function (t, e, i) {
          var n = i(5), a = i(28), r = n.WeakMap;
          t.exports = "function" == typeof r && /native code/.test(a.call(r))
        }, function (t, e, i) {
          var n = i(25), a = i(32), r = n("keys");
          t.exports = function (t) {
            return r[t] || (r[t] = a(t))
          }
        }, function (t, e) {
          var i = 0, n = Math.random();
          t.exports = function (t) {
            return "Symbol(" + String(t === undefined ? "" : t) + ")_" + (++i + n).toString(36)
          }
        }, function (t, e) {
          t.exports = {}
        }, function (t, e, i) {
          var n = i(18), a = i(35), r = i(7), o = i(22);
          t.exports = function (t, e) {
            for (var i = a(e), l = o.f, s = r.f, c = 0; c < i.length; c++) {
              var u = i[c];
              n(t, u) || l(t, u, s(e, u))
            }
          }
        }, function (t, e, i) {
          var n = i(36), a = i(38), r = i(45), o = i(23);
          t.exports = n("Reflect", "ownKeys") || function (t) {
            var e = a.f(o(t)), i = r.f;
            return i ? e.concat(i(t)) : e
          }
        }, function (t, e, i) {
          var n = i(37), a = i(5), r = function (t) {
            return "function" == typeof t ? t : undefined
          };
          t.exports = function (t, e) {
            return arguments.length < 2 ? r(n[t]) || r(a[t]) : n[t] && n[t][e] || a[t] && a[t][e]
          }
        }, function (t, e, i) {
          t.exports = i(5)
        }, function (t, e, i) {
          var n = i(39), a = i(44).concat("length", "prototype");
          e.f = Object.getOwnPropertyNames || function (t) {
            return n(t, a)
          }
        }, function (t, e, i) {
          var n = i(18), a = i(12), r = i(40).indexOf, o = i(33);
          t.exports = function (t, e) {
            var i, l = a(t), s = 0, c = [];
            for (i in l) !n(o, i) && n(l, i) && c.push(i);
            for (; e.length > s;) n(l, i = e[s++]) && (~r(c, i) || c.push(i));
            return c
          }
        }, function (t, e, i) {
          var n = i(12), a = i(41), r = i(43), o = function (t) {
            return function (e, i, o) {
              var l, s = n(e), c = a(s.length), u = r(o, c);
              if (t && i != i) {
                for (; c > u;) if ((l = s[u++]) != l) return !0
              } else for (; c > u; u++) if ((t || u in s) && s[u] === i) return t || u || 0;
              return !t && -1
            }
          };
          t.exports = {includes: o(!0), indexOf: o(!1)}
        }, function (t, e, i) {
          var n = i(42), a = Math.min;
          t.exports = function (t) {
            return t > 0 ? a(n(t), 9007199254740991) : 0
          }
        }, function (t, e) {
          var i = Math.ceil, n = Math.floor;
          t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
          }
        }, function (t, e, i) {
          var n = i(42), a = Math.max, r = Math.min;
          t.exports = function (t, e) {
            var i = n(t);
            return i < 0 ? a(i + e, 0) : r(i, e)
          }
        }, function (t, e) {
          t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, function (t, e) {
          e.f = Object.getOwnPropertySymbols
        }, function (t, e, i) {
          var n = i(9), a = /#|\.prototype\./, r = function (t, e) {
            var i = l[o(t)];
            return i == c || i != s && ("function" == typeof e ? n(e) : !!e)
          }, o = r.normalize = function (t) {
            return String(t).replace(a, ".").toLowerCase()
          }, l = r.data = {}, s = r.NATIVE = "N", c = r.POLYFILL = "P";
          t.exports = r
        }, function (t, e, i) {
          var n = i(48);
          t.exports = function (t) {
            if (n(t)) throw TypeError("The method doesn't accept regular expressions");
            return t
          }
        }, function (t, e, i) {
          var n = i(17), a = i(14), r = i(49)("match");
          t.exports = function (t) {
            var e;
            return n(t) && ((e = t[r]) !== undefined ? !!e : "RegExp" == a(t))
          }
        }, function (t, e, i) {
          var n = i(5), a = i(25), r = i(32), o = i(50), l = n.Symbol, s = a("wks");
          t.exports = function (t) {
            return s[t] || (s[t] = o && l[t] || (o ? l : r)("Symbol." + t))
          }
        }, function (t, e, i) {
          var n = i(9);
          t.exports = !!Object.getOwnPropertySymbols && !n((function () {
            return !String(Symbol())
          }))
        }, function (t, e, i) {
          var n = i(49)("match");
          t.exports = function (t) {
            var e = /./;
            try {
              "/./"[t](e)
            } catch (i) {
              try {
                return e[n] = !1, "/./"[t](e)
              } catch (a) {
              }
            }
            return !1
          }
        }, function (t, e, i) {
          var n = i(5), a = i(53), r = Function.call;
          t.exports = function (t, e, i) {
            return a(r, n[t].prototype[e], i)
          }
        }, function (t, e, i) {
          var n = i(54);
          t.exports = function (t, e, i) {
            if (n(t), e === undefined) return t;
            switch (i) {
              case 0:
                return function () {
                  return t.call(e)
                };
              case 1:
                return function (i) {
                  return t.call(e, i)
                };
              case 2:
                return function (i, n) {
                  return t.call(e, i, n)
                };
              case 3:
                return function (i, n, a) {
                  return t.call(e, i, n, a)
                }
            }
            return function () {
              return t.apply(e, arguments)
            }
          }
        }, function (t, e) {
          t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
          }
        }, function (t, e, i) {
          t.exports = i(56)
        }, function (t, e, i) {
          i(57);
          var n = i(52);
          t.exports = n("String", "endsWith")
        }, function (t, e, i) {
          var n = i(4), a = i(41), r = i(47), o = i(15), l = i(51), s = "".endsWith, c = Math.min;
          n({target: "String", proto: !0, forced: !l("endsWith")}, {
            endsWith: function (t) {
              var e = String(o(this));
              r(t);
              var i = arguments.length > 1 ? arguments[1] : undefined, n = a(e.length),
                l = i === undefined ? n : c(a(i), n), u = String(t);
              return s ? s.call(e, u, l) : e.slice(l - u.length, l) === u
            }
          })
        }, function (t, e, i) {
          t.exports = i(59)
        }, function (t, e, i) {
          i(60);
          var n = i(37);
          t.exports = n.Object.assign
        }, function (t, e, i) {
          var n = i(4), a = i(61);
          n({target: "Object", stat: !0, forced: Object.assign !== a}, {assign: a})
        }, function (t, e, i) {
          var n = i(8), a = i(9), r = i(62), o = i(45), l = i(10), s = i(63), c = i(13), u = Object.assign;
          t.exports = !u || a((function () {
            var t = {}, e = {}, i = Symbol();
            return t[i] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) {
              e[t] = t
            })), 7 != u({}, t)[i] || "abcdefghijklmnopqrst" != r(u({}, e)).join("")
          })) ? function (t, e) {
            for (var i = s(t), a = arguments.length, u = 1, d = o.f, f = l.f; a > u;) for (var h, g = c(arguments[u++]), p = d ? r(g).concat(d(g)) : r(g), m = p.length, v = 0; m > v;) h = p[v++], n && !f.call(g, h) || (i[h] = g[h]);
            return i
          } : u
        }, function (t, e, i) {
          var n = i(39), a = i(44);
          t.exports = Object.keys || function (t) {
            return n(t, a)
          }
        }, function (t, e, i) {
          var n = i(15);
          t.exports = function (t) {
            return Object(n(t))
          }
        }, function (t, e, i) {
          var n = i(65);
          "string" == typeof n && (n = [[t.i, n, ""]]);
          var a = {attrs: {id: "fc__calendar__style"}, hmr: !0, transform: void 0};
          a.insertInto = undefined, i(67)(n, a), n.locals && (t.exports = n.locals)
        }, function (t, e, i) {
          (t.exports = i(66)(!1)).push([t.i, "", ""])
        }, function (t, e, i) {
          t.exports = function (t) {
            var e = [];
            return e.toString = function () {
              return this.map((function (e) {
                var i = function (t, e) {
                  var i, n, a, r = t[1] || "", o = t[3];
                  if (!o) return r;
                  if (e && "function" == typeof btoa) {
                    var l = (i = o, n = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(a, " */")),
                      s = o.sources.map((function (t) {
                        return "/*# sourceURL=".concat(o.sourceRoot).concat(t, " */")
                      }));
                    return [r].concat(s).concat([l]).join("\n")
                  }
                  return [r].join("\n")
                }(e, t);
                return e[2] ? "@media ".concat(e[2], "{").concat(i, "}") : i
              })).join("")
            }, e.i = function (t, i) {
              "string" == typeof t && (t = [[null, t, ""]]);
              for (var n = {}, a = 0; a < this.length; a++) {
                var r = this[a][0];
                null != r && (n[r] = !0)
              }
              for (var o = 0; o < t.length; o++) {
                var l = t[o];
                null != l[0] && n[l[0]] || (i && !l[2] ? l[2] = i : i && (l[2] = "(".concat(l[2], ") and (").concat(i, ")")), e.push(l))
              }
            }, e
          }
        }, function (t, e, i) {
          var n, a, r = {}, o = (n = function () {
            return window && document && document.all && !window.atob
          }, function () {
            return void 0 === a && (a = n.apply(this, arguments)), a
          }), l = function (t, e) {
            return e ? e.querySelector(t) : document.querySelector(t)
          }, s = function (t) {
            var e = {};
            return function (t, i) {
              if ("function" == typeof t) return t();
              if ("undefined" == typeof e[t]) {
                var n = l.call(this, t, i);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                  n = n.contentDocument.head
                } catch (a) {
                  n = null
                }
                e[t] = n
              }
              return e[t]
            }
          }(), c = null, u = 0, d = [], f = i(68);

          function h(t, e) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i], a = r[n.id];
              if (a) {
                a.refs++;
                for (var o = 0; o < a.parts.length; o++) a.parts[o](n.parts[o]);
                for (; o < n.parts.length; o++) a.parts.push(b(n.parts[o], e))
              } else {
                var l = [];
                for (o = 0; o < n.parts.length; o++) l.push(b(n.parts[o], e));
                r[n.id] = {id: n.id, refs: 1, parts: l}
              }
            }
          }

          function g(t, e) {
            for (var i = [], n = {}, a = 0; a < t.length; a++) {
              var r = t[a], o = e.base ? r[0] + e.base : r[0], l = {css: r[1], media: r[2], sourceMap: r[3]};
              n[o] ? n[o].parts.push(l) : i.push(n[o] = {id: o, parts: [l]})
            }
            return i
          }

          function p(t, e) {
            var i = s(t.insertInto);
            if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = d[d.length - 1];
            if ("top" === t.insertAt) n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), d.push(e); else if ("bottom" === t.insertAt) i.appendChild(e); else {
              if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
              var a = s(t.insertAt.before, i);
              i.insertBefore(e, a)
            }
          }

          function m(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = d.indexOf(t);
            e >= 0 && d.splice(e, 1)
          }

          function v(t) {
            var e = document.createElement("style");
            if (t.attrs.type === undefined && (t.attrs.type = "text/css"), t.attrs.nonce === undefined) {
              var n = i.nc;
              n && (t.attrs.nonce = n)
            }
            return y(e, t.attrs), p(t, e), e
          }

          function y(t, e) {
            Object.keys(e).forEach((function (i) {
              t.setAttribute(i, e[i])
            }))
          }

          function b(t, e) {
            var i, n, a, r;
            if (e.transform && t.css) {
              if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform["default"](t.css))) return function () {
              };
              t.css = r
            }
            if (e.singleton) {
              var o = u++;
              i = c || (c = v(e)), n = S.bind(null, i, o, !1), a = S.bind(null, i, o, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = function (t) {
              var e = document.createElement("link");
              return t.attrs.type === undefined && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), p(t, e), e
            }(e), n = C.bind(null, i, e), a = function () {
              m(i), i.href && URL.revokeObjectURL(i.href)
            }) : (i = v(e), n = _.bind(null, i), a = function () {
              m(i)
            });
            return n(t), function (e) {
              if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                n(t = e)
              } else a()
            }
          }

          t.exports = function (t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var i = g(t, e);
            return h(i, e), function (t) {
              for (var n = [], a = 0; a < i.length; a++) {
                var o = i[a];
                (l = r[o.id]).refs--, n.push(l)
              }
              for (t && h(g(t, e), e), a = 0; a < n.length; a++) {
                var l;
                if (0 === (l = n[a]).refs) {
                  for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                  delete r[l.id]
                }
              }
            }
          };
          var x, k = (x = [], function (t, e) {
            return x[t] = e, x.filter(Boolean).join("\n")
          });

          function S(t, e, i, n) {
            var a = i ? "" : n.css;
            if (t.styleSheet) t.styleSheet.cssText = k(e, a); else {
              var r = document.createTextNode(a), o = t.childNodes;
              o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(r, o[e]) : t.appendChild(r)
            }
          }

          function _(t, e) {
            var i = e.css, n = e.media;
            if (n && t.setAttribute("media", n), t.styleSheet) t.styleSheet.cssText = i; else {
              for (; t.firstChild;) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(i))
            }
          }

          function C(t, e, i) {
            var n = i.css, a = i.sourceMap, r = e.convertToAbsoluteUrls === undefined && a;
            (e.convertToAbsoluteUrls || r) && (n = f(n)), a && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
            var o = new Blob([n], {type: "text/css"}), l = t.href;
            t.href = URL.createObjectURL(o), l && URL.revokeObjectURL(l)
          }
        }, function (t, e) {
          t.exports = function (t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var i = e.protocol + "//" + e.host, n = i + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (t, e) {
              var a, r = e.trim().replace(/^"(.*)"$/, (function (t, e) {
                return e
              })).replace(/^'(.*)'$/, (function (t, e) {
                return e
              }));
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (a = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? i + r : n + r.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")")
            }))
          }
        }])
      }, t.exports = n()
    }, 859: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = i(208), l = i(193), s = [2, 2, 4], c = function (t) {
        return (t < 10 ? "0" + t : t) + ""
      };

      function u(t) {
        var e, i = this.getLinkedParent(), n = (t.originalEvent.target.value + "").split("/"), a = n.length;
        if (3 === a) {
          for (e = 0; e < a; e++) if (isNaN(n[e]) || n[e].length !== s[e]) return;
          i.updateCalendar({day: +n[0], month: +n[1], year: +n[2]}, this.config.id)
        }
      }

      var d = function (t) {
        function e(e) {
          var i;
          i = t.call(this, e) || this;
          var n = (0, a["default"])(i);
          return i.addEventListener("blur", u.bind((0, a["default"])(i))), i.addEventListener("keyup", (function (t) {
            n.setData({tempDate: t.originalEvent.target.value})
          })), i
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this);
          var e = this.config;
          e.enabled = !0, e.inputBoxWidth = 65, e.tempDate = !1, e._labelStyle = {
            "font-size": "12px",
            "font-weight": "normal",
            "font-style": "normal",
            color: "#5F5F5F"
          }, e._inputStyle = {
            "font-size": "12px",
            border: "1px solid #efefef",
            "background-color": "#fcfcfc",
            color: "#5F5F5F",
            width: e.inputBoxWidth + l.PXSTRING,
            padding: "2px"
          }, e.date = {day: 8, month: 10, year: 2018}
        }, i.configureAttributes = function (e) {
          void 0 === e && (e = {}), t.prototype.configureAttributes.call(this, e);
          var i, n = this.config, a = this.getFromEnv("getStyleDef"), r = this.getFromEnv("baseTextStyle");
          Object.assign(n, e), i = n.date, n.value = c(i.day) + "/" + c(i.month) + "/" + c(i.year), n._finalLabelStyle = Object.assign({}, n._labelStyle, r, a(n.labelStyle)), n._finalInputStyle = Object.assign({}, n._inputStyle, r, a(n.inputStyle)), delete n._finalInputStyle["line-height"]
        }, i.getDimension = function () {
          var t, e = this.config, i = this.getFromEnv("smartLabel"),
            n = this.getFromEnv("fontParser")(e._finalInputStyle["font-size"]);
          return i.setStyle(Object.assign({}, e._finalLabelStyle)), e.labelDim = t = i.getOriSize(e.label), i.setStyle(Object.assign({}, e._finalInputStyle)), e.inputBoxWidth = i.getOriSize(e.value).width + 10, e._finalInputStyle.width = Math.max(65, e.inputBoxWidth) + l.PXSTRING, {
            width: t.width + e.inputBoxWidth,
            height: Math.max(i._lineHeight, 1.5 * n)
          }
        }, i.setTranslation = function (t, e) {
          this.config.position = {x: t, y: e}
        }, i.draw = function () {
          var t = this.config, e = t.position, i = t.labelDim, n = t.date || {},
            a = c(n.day) + "/" + c(n.month) + "/" + c(n.year);
          this.addGraphicalElement({
            el: "html",
            attr: {x: e.x, y: e.y, type: "div", text: t.label},
            component: this,
            css: t._finalLabelStyle,
            container: {id: "box-container", label: "box-container", isParent: !0},
            label: "label",
            id: "label"
          }), t._finalInputStyle.width = t.inputBoxWidth + l.PXSTRING, this.addGraphicalElement({
            el: "html",
            attr: {x: e.x + i.width, y: e.y - i.height / 3, type: "input", name: t.label, value: t.tempDate || a},
            component: this,
            css: t._finalInputStyle,
            container: {id: "box-container", label: "box-container", isParent: !0},
            label: "box",
            id: "box"
          })
        }, e
      }(o.SmartRenderer);
      e["default"] = d
    }, 860: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = i(193), l = o.isIE11 ? 38 : 32,
        s = "url(data:image/svg+xml;base64," + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.95 10"><defs><style>.cls-2 {fill: #444;}</style></defs><polygon class="cls-2" points="1.41 4.67 2.48 3.18 3.54 4.67 1.41 4.67" /><polygon class="cls-2" points="3.54 5.33 2.48 6.82 1.41 5.33 3.54 5.33" /></svg>') + ") no-repeat 100% 100%",
        c = function (t) {
          return (t < 10 ? "0" + t : t) + ""
        }, u = function (t, e) {
          void 0 === e && (e = -1);
          var i, n = "";
          for (i = 0; i <= t; i++) n += i === e ? '<option value="' + c(i) + '" selected>' + c(i) + "</option>" : '<option value="' + c(i) + '">' + c(i) + "</option>";
          return n
        }, d = function (t) {
          function e() {
            return t.apply(this, arguments) || this
          }

          (0, a["default"])(e, t);
          var i = e.prototype;
          return i.__setDefaultConfig = function () {
            var t = this.config;
            t.enabled = !0, t.label = "Time: ", t._labelStyle = {
              "font-size": "12px",
              "font-weight": "normal",
              "font-style": "normal",
              color: "#5f5f5f"
            }, t._selectStyle = {
              "font-size": "12px",
              border: "0",
              outline: "1px solid #efefef",
              "outline-offset": "-1px",
              color: "#5f5f5f",
              width: l + o.PXSTRING,
              "padding-left": o.isIE11 || o.isFirefox ? "0px" : "5px",
              "padding-right": o.isIE11 || o.isFirefox ? "0px" : "5px",
              "padding-top": "5px",
              "padding-bottom": "5px",
              background: s,
              "background-color": "#FFFFFF",
              "-webkit-appearance": "none",
              "-moz-appearance": "none",
              "-o-appearance": "none",
              "border-radius": "0px",
              appearance: "none"
            }, o.isIE11 && delete t._selectStyle.background
          }, i.configureAttributes = function (t) {
            void 0 === t && (t = {});
            var e = this.config, i = this.getFromEnv("getStyleDef"), n = this.getFromEnv("baseTextStyle");
            Object.assign(e, t), e._finalLabelStyle = Object.assign({}, e._labelStyle, n, i(e.labelStyle)), e._finalSelectStyle = Object.assign({}, e._selectStyle, n, i(e.selectStyle)), delete e._finalSelectStyle["line-height"]
          }, i.getDimension = function () {
            var t, e, i = this.config, n = this.getFromEnv("fontParser"), a = n(i._finalSelectStyle["font-size"]),
              r = this.getFromEnv("smartLabel"), l = function (t) {
                return t < 21 ? 2 : t < 31 ? 1.67 : t < 51 ? 1.5 : 1.25
              }(a);
            return r.setStyle(i._finalLabelStyle), t = i.labelDim = r.getOriSize(i.label), e = r.getOriSize(":").width, i.inputBoxWidth = Math.max(n(i._finalSelectStyle.width), 2.6 * a), i.inputBoxHeight = a * l, i.spacingMultiplier = a > 30 ? 2 : 1, i._finalSelectStyle.width = i.inputBoxWidth + o.PXSTRING, {
              width: t.width + 3 * e + 3 * i.inputBoxWidth + 20,
              height: Math.max(t.height, i.inputBoxHeight)
            }
          }, i.setTranslation = function (t, e) {
            this.config.position = {x: t, y: e}
          }, i.getTime = function () {
            var t, e, i;
            return t = this.getGraphicalElement("hour-box", "hour-box"), e = this.getGraphicalElement("minute-box", "minute-box"), i = this.getGraphicalElement("second-box", "second-box"), {
              hours: +t.element.value,
              minutes: +e.element.value,
              seconds: +i.element.value
            }
          }, i.draw = function () {
            var t = this.config, e = t.position, i = t.labelDim, n = t.time || {}, a = e.x,
              r = Math.abs(i.height - t.inputBoxHeight) / 2;
            this.addGraphicalElement({
              el: "html",
              attr: {x: a, y: e.y, type: "label", text: t.label},
              component: this,
              css: t._finalLabelStyle,
              container: {id: "box-container", label: "box-container", isParent: !0},
              label: "time-label",
              id: "time-label"
            }), a += i.width + 5, this.addGraphicalElement({
              el: "html",
              attr: {x: a, y: e.y - r, type: "select", innerHTML: u(23, n.hours), "class": "fc__select__time"},
              component: this,
              css: t._finalSelectStyle,
              container: {id: "box-container", label: "box-container", isParent: !0},
              label: "hour-box",
              id: "hour-box"
            }), a += t.inputBoxWidth, this.addGraphicalElement({
              el: "html",
              attr: {x: a + 3, y: e.y, type: "label", text: ":"},
              component: this,
              css: t._finalLabelStyle,
              container: {id: "box-container", label: "box-container", isParent: !0},
              label: "semicolon-minute",
              id: "semicolon-minute"
            }), a += 10 * t.spacingMultiplier, this.addGraphicalElement({
              el: "html",
              attr: {x: a, y: e.y - r, type: "select", innerHTML: u(59, n.minutes), "class": "fc__select__time"},
              component: this,
              css: t._finalSelectStyle,
              container: {id: "box-container", label: "box-container", isParent: !0},
              label: "minute-box",
              id: "minute-box"
            }), a += t.inputBoxWidth, this.addGraphicalElement({
              el: "html",
              attr: {x: a + 3, y: e.y, type: "label", text: ":"},
              component: this,
              css: t._finalLabelStyle,
              container: {id: "box-container", label: "box-container", isParent: !0},
              label: "semicolon-second",
              id: "semicolon-second"
            }), a += 10 * t.spacingMultiplier, this.addGraphicalElement({
              el: "html",
              attr: {x: a, y: e.y - r, type: "select", innerHTML: u(59, n.seconds), "class": "fc__select__time"},
              component: this,
              css: t._finalSelectStyle,
              container: {id: "box-container", label: "box-container", isParent: !0},
              label: "second-box",
              id: "second-box"
            })
          }, e
        }(r.SmartRenderer);
      e["default"] = d
    }, 861: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(192)), r = n(i(210)), o = n(i(207)), l = i(208);

      function s(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.push.apply(i, n)
        }
        return i
      }

      var c = function (t) {
        function e(e) {
          var i;
          i = t.call(this, e) || this;
          var n = (0, r["default"])(i), a = n.config;
          return a.clickHandler = function () {
            n.getLinkedParent().submitData(a.type)
          }, a.mouseoverHandler = function () {
            n.setData({buttonStyle: a["button:hover"]}, !0)
          }, a.mouseoutHandler = function () {
            n.config && n.setData({buttonStyle: a["button:hoverout"]}, !0)
          }, n.addEventListener("fc-click", a.clickHandler), n.addEventListener("fc-mouseover", a.mouseoverHandler), n.addEventListener("fc-mouseout", a.mouseoutHandler), i
        }

        (0, o["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          var t = this.config;
          t.height = 10, t.width = 20, t.label = "Apply", t._buttonStyle = {
            "-webkit-border-radius": "2px",
            backgroundColor: "#5648D4",
            border: "1px solid #5648D4",
            borderRadius: "2px",
            color: "#60634E",
            cursor: "pointer",
            paddingTop: "1px",
            textAlign: "center",
            zIndex: 21,
            display: "flex",
            width: 66,
            height: 22,
            "line-height": "9px",
            "justify-content": "center",
            "align-items": "center",
            "font-size": "11px"
          }, t.clickHandler = function () {
            this.getLinkedParent().submitData()
          }
        }, i.configureAttributes = function (t) {
          void 0 === t && (t = {});
          var e = this.config, i = this.getFromEnv("getStyleDef");
          Object.assign(e, t), e._finalStyle = Object.assign({}, e._buttonStyle, this.getFromEnv("baseTextStyle"), i(e.customStyle), i(e.buttonStyle))
        }, i.getDimension = function () {
          var t = this.config, e = t._finalStyle["font-size"], i = this.getFromEnv("fontParser");
          return t.width = Math.max(+t._finalStyle.width || 0, 6 * i(e)), t.height = Math.max(+t._finalStyle.height || 0, 2 * i(e)), {
            width: t.width,
            height: t.height
          }
        }, i.setTranslation = function (t, e) {
          this.config.position = {x: t, y: e}
        }, i.draw = function () {
          var t = this.config, e = t.position, i = function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = null != arguments[e] ? arguments[e] : {};
              e % 2 ? s(Object(i), !0).forEach((function (e) {
                (0, a["default"])(t, e, i[e])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
              }))
            }
            return t
          }({}, t._finalStyle);
          i["margin-bottom"] = window.innerWidth < 576 ? "15px" : "0px", this.addGraphicalElement({
            el: "html",
            attr: {text: t.label, type: "div", width: t.width, height: t.height, x: e.x, y: e.y},
            component: this,
            container: {id: "box-container", label: "box-container", isParent: !0},
            css: i,
            label: "button",
            id: "button"
          })
        }, e
      }(l.SmartRenderer);
      e["default"] = c
    }, 862: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(208), o = i(193), l = document.body, s = document.documentElement, c = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        (0, a["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this), this.config.visibility = "hidden"
        }, i.configureAttributes = function (t) {
          void 0 === t && (t = {}), Object.assign(this.config, t)
        }, i.draw = function () {
          var t, e, i = +this.getFromEnv("chartHeight"), n = +this.getFromEnv("chartWidth"),
            a = window.innerWidth < 576 ? "mobile" : "desktop", r = this.config.visibility,
            c = Math.max(l.scrollHeight, l.offsetHeight, s.clientHeight, s.scrollHeight, s.offsetHeight);
          "mobile" === a ? (t = {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: c,
            visibility: r,
            type: "div"
          }, e = {position: "fixed", opacity: .6, "background-color": "#cdcdcd"}) : (t = {
            x: 0,
            y: 0,
            width: n,
            height: i,
            visibility: r,
            type: "div"
          }, e = {opacity: 1, "background-color": o.TRACKER_FILL}), this.addGraphicalElement({
            el: "html",
            attr: t,
            css: e,
            component: this,
            id: "cover",
            label: "cover"
          })
        }, e
      }(r.SmartRenderer);
      e["default"] = c
    }, 863: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = i(193), r = n(i(864));
      e["default"] = function (t) {
        var e, i = t.getChildren("standardRangeSelector"), n = t.getChildren("customRangeSelector");
        (0, a.componentFactory)(t, r["default"], "toolbar-manager"), e = t.getChildren("toolbar-manager")[0], i && i[0] && !i[0].getState("removed") ? e.register("srs", i[0]) : e.deRegister("srs"), n && n[0] && !n[0].getState("removed") ? e.register("crs", n[0]) : e.deRegister("crs"), e.configure()
      }
    }, 864: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = function (t) {
        function e(e) {
          var i;
          i = t.call(this, e) || this;
          var n = (0, a["default"])(i);
          return i._registry = {}, i._limitChangeHandler = function (t) {
            var e, i = n.getRegistry();
            for (e in i) i.hasOwnProperty(e) && i[e].updateOnLimitChange && i[e].updateOnLimitChange(t);
            n.setData({}, !0)
          }, i
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.configureAttributes = function (t) {
          void 0 === t && (t = {});
          var e, i = this.getRegistry(), n = [{}];
          for (e in i) i.hasOwnProperty(e) && i[e] && n.push(i[e].getToolInfo());
          this.getFromEnv("selectorToolbar").setData({
            child: Object.assign.apply(Object, n),
            toolbarhdirection: 1
          }, !0), this.addExtEventListener("focusLimitChanged", this._limitChangeHandler, this.getFromEnv("chart")), this.addExtEventListener("contextLimitChanged", this._limitChangeHandler, this.getFromEnv("chart"))
        }, i.getRegistry = function () {
          return this._registry
        }, i.register = function (t, e) {
          this._registry[t] = e
        }, i.deRegister = function (t) {
          delete this._registry[t]
        }, e
      }(i(208).SmartRenderer);
      e["default"] = o
    }, 865: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(523)), r = i(193);
      e["default"] = function (t) {
        var e, i = t.config.showLegend, n = t.config.mergedLegendStyle, o = n.color = (0, r.pluck)(n.fill, "#5f5f5f"),
          l = (0, r.pluckNumber)(n.opacity, 1), s = (0, r.pluckNumber)(n["fill-opacity"], 1),
          c = Object.assign({}, t.getFromEnv("baseTextStyle"), n);
        if (c["font-size"] = +(c["font-size"] + "").replace(/px/, ""), i) {
          (0, r.componentFactory)(t, a["default"], "legend", 1, [{
            drawcustomlegendicon: 1,
            legendiconsides: 4,
            alignlegendwithcanvas: 1,
            legendborderthickness: 0,
            legendiconscale: 1.3,
            legendbgalpha: 0,
            legendFontColor: o,
            style: {text: c}
          }]), e = t.getChildren("legend")[0], t.addToEnv("legend", e), e.setStateCosmetics("hover", (function (t, e) {
            return e.hasState("hidden") || (t.text || (t.text = {}), t.text.fill = (0, r.convertColor)(o, l * s * 100), t.text.cursor = "inherit"), t
          }));
          !function i(e) {
            for (var n in void 0 === e && (e = {}), e) if (e.hasOwnProperty(n)) {
              var a = e[n];
              a.hasOwnProperty("visibility") ? t._addLegend(a) : i(a)
            }
          }(t.getFromEnv("legendMap"))
        } else (e = t.getChildren("legend") && t.getChildren("legend")[0]) && e.remove()
      }
    }, 866: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = i(193), r = n(i(867));
      e["default"] = function (t) {
        var e, i = t.getFromEnv("dataSource").chart;
        (0, a.componentFactory)(t, r["default"], "selectorToolbar", 1, [Object.assign({toolbarhdirection: 1}, i)]), e = t.getChildren("selectorToolbar")[0], t.addToEnv("selectorToolbar", e)
      }
    }, 867: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(207)), r = i(303), o = i(193), l = function (t) {
        function e() {
          return t.apply(this, arguments) || this
        }

        return (0, a["default"])(e, t), e.prototype.configureAttributes = function (t) {
          void 0 === t && (t = {});
          var e, i, n, a, r, l = this.config, s = this.getFromEnv("chartConfig");
          if (this.props.width = (0, o.pluckNumber)(t.width, this.props.width, 0), this.props.height = (0, o.pluckNumber)(t.height, this.props.height, 0), l.orientation = (0, o.pluck)(t.toolbarorientation, l.orientation), l.hPadding = (0, o.pluck)(t.toolbarhpadding, l.hPadding), l.vPadding = (0, o.pluck)(t.toolbarvpadding, l.vPadding), l.backgroundcolor = (0, o.pluck)(t.toolbarbackgroundcolor, l.backgroundcolor), l.backgroundalpha = (0, o.pluck)(t.toolbarbackgroundalpha, l.backgroundalpha), l.bordercolor = (0, o.pluck)(t.toolbarbordercolor, l.bordercolor), l.borderalpha = (0, o.pluck)(t.toolbarborderalpha, l.borderalpha), l.borderthickness = (0, o.pluck)(t.toolbarborderthickness, l.borderthickness), l.hDirection = (0, o.pluckNumber)(t.toolbarhdirection, "r" === s.toolbarHAlign ? -1 : 1), l.vDirection = (0, o.pluckNumber)(t.toolbarvdirection, "b" === s.toolbarBAlign ? -1 : 1), l.hAlign = (0, o.pluck)(t.hAlign, "center").toLowerCase(), l.vAlign = (0, o.pluck)(t.vAlign, "middle").toLowerCase(), l.marginTop = (0, o.pluckNumber)(t.marginTop, t.spacing, l.marginTop), l.marginLeft = (0, o.pluckNumber)(t.marginLeft, t.spacing, l.marginLeft), l.marginRight = (0, o.pluckNumber)(t.marginRight, t.spacing, l.marginRight), l.marginBottom = (0, o.pluckNumber)(t.marginBottom, t.spacing, l.marginBottom), l.child = t.child || l.child, l.child) for (e = l.child, n = 0, a = (i = Object.keys(l.child)).length; n < a; n++) (r = this.attachChild(e[i[n]].def, e[i[n]].type, i[n])).setData(e[i[n]].configuration, !0), r.setState("visible", !0)
        }, e
      }(r.ToolBar);
      e["default"] = l
    }, 868: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(869)), r = i(193);
      e["default"] = function (t) {
        (0, r.componentFactory)(t, a["default"], "multicanvasCrosslineManager", 1), t.getChildren("multicanvasCrosslineManager")[0].configure()
      }
    }, 869: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = i(208), l = i(197), s = i(193), c = n(i(741)), u = i(785);

      function d(t) {
        var e, i;
        for (e = 0, i = t.length; e < i; e++) if (void 0 !== t[e] && "none" !== t[e]) return (0, l.convertColor)(t[e])
      }

      var f = {}, h = function (t) {
        function e() {
          var e;
          e = t.call(this) || this;
          var i, n, r, o, l, h, g, p, m, v, y, b = (0, a["default"])(e);
          return b.canvases = [], b._handler = function (t) {
            p = b.config.multiCanvasTooltip, i = t.sender.getLinkedParent(), m = i.config.xConfigs[0].scale, y = i.isWithinCanvas(t.data.chartX, t.data.chartY);
            var e, a, x, k, S, _, C, w, E, D, M, T, F, I = t.data.hoveredInfo || {}, L = b.getFromEnv("tooltipStyle");
            y && I.pointObj ? (F = b.getFromEnv("chart").config.focusAxesX[0].scale.getDomain(), _ = I.pointObj.startDate, C = I.pointObj.endDate, (+(r = m.getDomainValue(m.getRangeValue(_, C))) < +F[0] || +r > +F[1] || +_ == +C) && (r = void 0)) : r = void 0, b.canvases.forEach((function (e) {
              if (l = e === i, g = e.getTranslation(), D = void 0, e.getChildren("verticalCrossLine")[0].setData({
                values: r ? [r] : [],
                showMarker: l,
                dateRange: {startDate: _, endDate: C}
              }, !0), (a = e.getChildren("dataset") || []).length && ("column" !== a[0].getName() || 1 === a.length) && I.component && ("dataset" === I.component.getType() || "dataMarker" === I.component.getType()) ? a.forEach((function (e) {
                e._getHoveredPlot(t.data.chartX, t.data.chartY), E = y && e._getHoveredBin(), v = f[e.getId()], (0, s.defined)(v) && v !== E && e.setHoverOutEffect([v]), f[e.getId()] = E, I.hovered && l ? I.component === e ? e.setHoverInEffect([E], !0) : "continuous" === e.getName() ? e.setHoverInEffect([E], !1, !0) : e.setHoverOutEffect([E]) : e.setHoverInEffect([E], !1)
              })) : y || a.forEach((function (t) {
                t.setHoverOutEffect([f[t.getId()]])
              })), p && !l && (x = e.getChildren("tooltipHover")[0], (k = x.config).showTooltip)) if (h = "", n = e.getFromEnv("toolTipController"), y && I.component && "dataset" === I.component.getType()) if (a.forEach((function (t, e) {
                E = t._getHoveredBin(), "visible" === t.config.visibility && t.config.dataInfo[E] && (D = t.config.dataInfo[E], h += t._getTooltext(!1, !1, E), S = e)
              })), D) {
                E = a[S]._getHoveredBin();
                var o = a[S]._getDateForToolText(E), c = o.header, d = o.body,
                  m = I.component.getFromEnv("xScale").getRange();
                "" !== (h = (0, u.createDivString)(L.headerStyleString, c) + (0, u.createDivString)(L.bodyStyleString, d + h)) && D.endXPosition > m[0] && D.x < m[1] ? k.currentToolTip = n.drawAt(D.x + (D.width || 0) / 2 + 5 + g.x, (D.colY || D.y) + g.y, h, k.currentToolTip, e) : n.hide(k.currentToolTip)
              } else n.hide(k.currentToolTip); else n.hide(k.currentToolTip)
            })), e = i.getChildren("horizontalCrossLine")[0], I.hovered && "dataset" === I.component.getType() && y ? (w = I.pointObj.eventArgs.highValue && I.pointObj.eventArgs.lowValue ? [I.pointObj.eventArgs.highValue, I.pointObj.eventArgs.lowValue] : (0, c["default"])(I.pointObj.yBaseValue) ? I.pointObj.yBaseValue >= 0 ? [I.pointObj.value] : [I.pointObj.yBaseValue] : [I.pointObj.value], o = I.component.config, i.config.yConfigs.forEach((function (t) {
              t.scale === I.component.config.scaleY && (M = t.scale, T = t.align)
            })), "hidden" !== o.visibility && e.setData({
              values: w,
              scale: M,
              yAxisAlignment: T,
              showMarker: !0,
              texts: w,
              suffix: o.suffix,
              prefix: o.prefix,
              formatterFn: o.formatterFn,
              markerFill: d([o.style && o.style.fill, o.plotStyle && o.plotStyle.fill, o.plotStyle && o.plotStyle.stroke])
            }, !0)) : e.setData({values: []}, !0)
          }, e
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this), this.config.defaultFormat = "%A, %b %d, %Y", this.canvases = []
        }, i.configure = function () {
          t.prototype.configure.call(this);
          var e, i, n, a = this.getLinkedParent(), r = a.config.focusPanels.length;
          for (this.config.multiCanvasTooltip = (0, s.pluckNumber)(this.getFromEnv("chart-attrib").multicanvastooltip, 1), n = 0; n < r; n++) i = a.getChildren("canvas_" + n)[0], this.canvases.push(i), e = i.getFromEnv("mouseTracker"), this.addExtEventListener("canvasHovered", this._handler, e)
        }, e
      }(o.SmartRenderer);
      e["default"] = h
    }, 870: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(871)), r = i(193);
      e["default"] = function (t) {
        var e = t.getFromEnv("dataSource").extensions;
        (0, r.pluckNumber)(e && e.standardrangeselector && e.standardrangeselector.enabled, 1) ? ((0, r.componentFactory)(t, a["default"], "standardRangeSelector", 1), t.getChildren("standardRangeSelector")[0].configure({
          currentDomain: t.getFocusLimit(),
          totalDomain: t.getContextLimit(),
          style: e && e.standardrangeselector && e.standardrangeselector.style || {}
        })) : (0, r.componentFactory)(t, a["default"], "standardRangeSelector", 0)
      }
    }, 871: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = i(208), l = n(i(872)), s = i(304), c = i(193), u = i(394), d = i(386),
        f = n(i(867)), h = i(749),
        g = [31536e7, 15768e7, 94608e6, 63072e6, 31536e6, 160704e5, 80352e5, 26784e5, 1296e6, 6048e5, 864e5, 432e5, 216e5, 108e5, 36e5, 18e5],
        p = {
          0: {unit: "year", multiplier: 10, intervalName: "10Y"},
          1: {unit: "year", multiplier: 5, intervalName: "5Y"},
          2: {unit: "year", multiplier: 3, intervalName: "3Y"},
          3: {unit: "year", multiplier: 2, intervalName: "2Y"},
          4: {unit: "year", multiplier: 1, intervalName: "1Y", tilldateName: "YTD"},
          5: {unit: "month", multiplier: 6, intervalName: "6M"},
          6: {unit: "month", multiplier: 3, intervalName: "3M", tilldateName: "QTD"},
          7: {unit: "month", multiplier: 1, intervalName: "1M", tilldateName: "MTD"},
          8: {unit: "day", multiplier: 15, intervalName: "15D"},
          9: {unit: "day", multiplier: 7, intervalName: "7D", tilldateName: "WTD"},
          10: {unit: "day", multiplier: 1, intervalName: "1D"},
          11: {unit: "hour", multiplier: 12, intervalName: "12H"},
          12: {unit: "hour", multiplier: 6, intervalName: "6H"},
          13: {unit: "hour", multiplier: 3, intervalName: "3H"},
          14: {unit: "hour", multiplier: 1, intervalName: "1H"},
          15: {unit: "minute", multiplier: 30, intervalName: "30m"}
        }, m = function (t, e, i, n, a) {
          void 0 === n && (n = !1);
          var r = v(p[t].unit, this.getFromEnv("isUTC")), o = 3 * i[2];
          return n ? a - r.every(p[t].multiplier).floor(a) >= o : g[t] >= e[2] && g[t] >= o
        }, v = function (t, e) {
          switch (t) {
            case"year":
              return e ? u.utcYear : d.timeYear;
            case"quarter":
              return e ? u.utcQuarter : d.timeQuarter;
            case"month":
              return e ? u.utcMonth : d.timeMonth;
            case"week":
              return e ? u.utcWeek : d.timeWeek;
            case"day":
              return e ? u.utcDay : d.timeDay;
            case"hour":
              return e ? u.utcHour : d.timeHour;
            case"minute":
              return e ? u.utcMinute : d.timeMinute;
            case"second":
              return e ? u.utcSecond : d.timeSecond
          }
        }, y = function (t) {
          function e() {
            var e;
            e = t.call(this) || this;
            var i = (0, a["default"])(e);
            return e._handler = function () {
              var t, e, n, a = this.getFromEnv("chart"), r = a.getFromEnv("focusScalesX")[0].applicableClippings,
                o = r.repeatClips, l = r.singleClips, s = this.config, c = s.multiplier, u = this.getFromEnv("isUTC"),
                d = s.unit, f = s.fixedAtEnd, g = s.fixedAtStart, p = s.text, m = a.getFocusLimit(),
                y = a.getContextLimit();
              i.config.clickedButtonDetails = s, this.getFromEnv("animationManager").setAnimationState("selectedRange"), n = f ? y[1] : m[1], d && c ? (t = v(d, u), e = f ? t.every(c).floor(n) : t.offset(n, -c)) : g && (e = y[0]), +e < y[0] && (n = t.offset(y[0], c)), i.config.lastSelectedButtonConfig = {
                fixedAtEnd: s.fixedAtEnd,
                fixedAtStart: s.fixedAtStart,
                unit: s.unit,
                multiplier: s.multiplier
              }, i.config.updatedThroughButton = !0, e = (0, h.getUnclippedValue)(e, o, l, {clampDirection: "up"}), n = (0, h.getUnclippedValue)(n, o, l, {clampDirection: "down"}), a.setFocusLimit([e, n]), a.fireChartInstanceEvent("standardRangeSelect", {
                unit: d,
                multiplier: c,
                text: p
              })
            }, e._toolbars = {}, e
          }

          (0, r["default"])(e, t);
          var i = e.prototype;
          return i.__setDefaultConfig = function () {
            t.prototype.__setDefaultConfig.call(this);
            var e = this.config;
            e.lastSelectedButtonConfig = void 0, e.clickedButtonDetails = {}, e.labelFontSize = "12px", e.takeMaxSize = !1, e.defaultStateStyle = {
              activated: {
                config: {
                  normal: {
                    fill: "#9e9e9e",
                    stroke: "none",
                    "stroke-width": 2,
                    cursor: "pointer",
                    "stroke-opacity": 1,
                    "fill-opacity": 1,
                    opacity: "1",
                    "font-weight": 400,
                    "font-size": "12",
                    "line-height": 14.4,
                    "text-anchor": "middle"
                  },
                  hover: {
                    fill: "#5648D4",
                    stroke: "none",
                    "stroke-width": 2,
                    cursor: "pointer",
                    "stroke-opacity": 1,
                    "fill-opacity": 1,
                    opacity: "1",
                    "font-weight": 400,
                    "font-size": "12",
                    "line-height": 14.4,
                    "text-anchor": "middle"
                  },
                  normalBackground: {
                    fill: "none",
                    "fill-opacity": 1,
                    stroke: "none",
                    cursor: "pointer",
                    r: "2px",
                    "stroke-width": "1",
                    "stroke-dasharray": "none",
                    "stroke-opacity": "1",
                    opacity: 1
                  },
                  hoverBackground: {
                    fill: "none",
                    "fill-opacity": 1,
                    stroke: "none",
                    cursor: "pointer",
                    r: "2px",
                    "stroke-width": "1",
                    "stroke-dasharray": "none",
                    "stroke-opacity": "1",
                    opacity: 1
                  }
                }
              },
              pressed: {
                config: {
                  normal: {
                    fill: "#5648D4",
                    "stroke-width": 2,
                    stroke: "none",
                    "symbol-stroke": "#343434",
                    cursor: "pointer",
                    "fill-opacity": 1,
                    "stroke-opacity": 1,
                    opacity: "1",
                    "font-weight": 400,
                    "font-size": "12",
                    "line-height": 14.4,
                    "text-anchor": "middle"
                  },
                  hover: {
                    fill: "#5648D4",
                    "stroke-width": 2,
                    stroke: "none",
                    "symbol-stroke": "#5648D4",
                    cursor: "pointer",
                    "fill-opacity": 1,
                    "stroke-opacity": 1,
                    opacity: "1",
                    "font-weight": 400,
                    "font-size": "12",
                    "line-height": 14.4,
                    "text-anchor": "middle"
                  },
                  normalBackground: {
                    fill: "none",
                    "fill-opacity": 1,
                    stroke: "none",
                    cursor: "pointer",
                    r: "2px",
                    "stroke-width": "1",
                    "stroke-dasharray": "none",
                    "stroke-opacity": "1",
                    opacity: 1
                  },
                  hoverBackground: {
                    fill: "none",
                    "fill-opacity": 1,
                    stroke: "none",
                    cursor: "pointer",
                    r: "2px",
                    "stroke-width": "1",
                    "stroke-dasharray": "none",
                    "stroke-opacity": "1",
                    opacity: 1
                  }
                }
              }
            }, e.stateStyle = {}
          }, i.configureAttributes = function (e) {
            t.prototype.configureAttributes.call(this, e);
            var i, n, a, r, o, l, s, u, d = this.config, f = this.getFromEnv("getStyleDef"),
              h = this.getFromEnv("baseTextStyle");
            d.contextRangeThreshold = this.getFromEnv("contextBins")[0].getRangeThreshold(), d.focusRangeThreshold = this.getFromEnv("focusBins")[0].getRangeThreshold(), d.contextMinBin = this.getFromEnv("contextBins")[0].getBinMin(), d.focusMinBin = this.getFromEnv("focusBins")[0].getBinMin(), Object.assign(d, e), s = d.style, i = Object.assign({}, h, f(s["button-text"])), n = Object.assign({}, h, f(s["button-text:hover"])), a = Object.assign({}, h, f(s["button-text:active"])), r = f(s["button-background"]), o = f(s["button-background:hover"]), l = f(s["button-background:active"]), (r.fill || r.stroke) && (d.takeMaxSize = !0), u = {
              activated: {
                config: {
                  normal: i,
                  hover: Object.assign({}, i, n),
                  normalBackground: r,
                  hoverBackground: Object.assign({}, r, o)
                }
              },
              pressed: {
                config: {
                  normal: Object.assign({}, i, a),
                  hover: Object.assign({}, i, a, n),
                  normalBackground: Object.assign({}, r, l),
                  hoverBackground: Object.assign({}, r, l, o)
                }
              }
            }, d.stateStyle = (0, c.extend2)((0, c.extend2)({}, d.defaultStateStyle), u), d.stateStyle.separator = f(s.separator && s.separator)
          }, i.areTillDateButtonsPossible = function () {
            var t = this.getFromEnv("UTC"), e = this.getFromEnv("dateAPI"), i = new Date,
              n = this.getFromEnv("chart").getContextLimit()[1], a = new Date(n);
            return e(a, "FullYear", t) === e(i, "FullYear", t) && e(a, "Month", t) === e(i, "Month", t) && e(a, "Date", t) === e(i, "Date", t)
          }, i.getTillDateButtons = function (t, e, i) {
            var n, a, r, o = [], l = this.getFromEnv("chart").getContextLimit()[1];
            if (this.areTillDateButtonsPossible()) for (a = 0, r = g.length; a < r; a++) t >= g[a] && p[a].tilldateName && m.call(this, a, e, i, !0, l) && ((n = (0, c.extend2)({}, p[a])).fixedAtEnd = !0, n.fixedAtStart = !1, o.push(n));
            return o
          }, i.getSelectionButtonConfig = function () {
            var t, e, i, n = this.config, a = this.getFromEnv("isUTC"), r = n.currentDomain, o = n.totalDomain,
              l = +r[1] - +r[0];
            if (e = a ? u.utcYear : d.timeYear, t = a ? u.utcMonth : d.timeMonth, i = a ? u.utcDay : d.timeDay, n.lastSelectedButtonConfig) return {
              isTillDate: n.lastSelectedButtonConfig.fixedAtEnd && !n.lastSelectedButtonConfig.fixedAtStart,
              isAllButton: n.lastSelectedButtonConfig.fixedAtEnd && n.lastSelectedButtonConfig.fixedAtStart,
              isIntervalButton: !n.lastSelectedButtonConfig.fixedAtEnd && !n.lastSelectedButtonConfig.fixedAtStart,
              multiplier: n.lastSelectedButtonConfig.multiplier,
              unit: n.lastSelectedButtonConfig.unit
            };
            if (l === +o[1] - +o[0]) return {isAllButton: !0};
            if (this.areTillDateButtonsPossible()) {
              if (l === +r[1] - +e.floor(r[1])) return {isTillDate: !0, multiplier: "1", unit: "year"};
              if (l === +r[1] - +t.floor(r[1])) return {isTillDate: !0, multiplier: "1", unit: "month"};
              if (l === +r[1] - +t.every(3).floor(r[1])) return {isTillDate: !0, multiplier: "3", unit: "month"};
              if (l === +r[1] - +i.every(7).floor(r[1])) return {isTillDate: !0, multiplier: "7", unit: "day"}
            }
            return this.getHighlightedIntervalButton(l)
          }, i.getIntervalButtons = function (t, e, i, n, a) {
            var r, o = [], l = g.length, s = [], c = [];
            if (a > 0) for (r = 0; r < 5; r++) {
              var u = Math.min(a, 1 + Math.floor(Number(p[r].multiplier) / 4));
              c[r] = u, o.push(31536e6 * p[r].multiplier + 864e5 * c[r])
            }
            for (r = l - 1; r > 0 && !(a > 0 && r < 5 && o[r] >= t) && !(g[r] >= t); r--) ;
            return t && (r <= 0 ? ((a > 0 ? o[0] <= e : g[0] <= e) && m.call(this, 0, i, n) && s.push(p[0]), (a > 1 ? o[1] <= e : g[1] <= e) && m.call(this, 1, i, n) && s.push(p[1])) : r === l - 1 ? (g[r - 1] <= e && m.call(this, r - 1, i, n) && s.push(p[r - 1]), g[r] <= e && m.call(this, r, i, n) && s.push(p[r])) : ((a > 0 && r < 5 ? o[r - 1] <= e : g[r - 1] <= e) && m.call(this, r - 1, i, n) && s.push(p[r - 1]), (a > 0 && r < 5 ? o[r] <= e : g[r] <= e) && m.call(this, r, i, n) && s.push(p[r]), g[r + 1] <= e && m.call(this, r + 1, i, n) && s.push(p[r + 1]))), s
          }, i.getHighlightedIntervalButton = function (t) {
            var e, i, n = this.config, a = n.intervalButtons, r = n.currentDomain, o = this.getFromEnv("isUTC"), l = {};
            for (e = a.length - 1; e >= 0 && (i = v(a[e].unit, o), +r[1] != +i.offset(r[0], a[e].multiplier)); e--) ;
            return -1 !== e && (l = (0, c.extend2)({isIntervalButton: !0}, p[e]), l = {
              isIntervalButton: !0,
              unit: a[e].unit,
              multiplier: a[e].multiplier
            }, n.lastSelectedButtonConfig = l), l
          }, i.getToolInfo = function () {
            var t, e, i, n, a, r, o, c, u, d = this, h = d.config, g = d.getFromEnv("chart"),
              p = d.getFromEnv("selectorToolbar"), m = {}, v = d.getFromEnv("smartLabel"), y = h.stateStyle,
              b = (o = (r = y).activated.config.normal["font-size"] || 0, c = r.activated.config.hover["font-size"] || 0, u = r.pressed.config.normal["font-size"] || 0, Math.max(parseFloat(o), parseFloat(c), parseFloat(u)) + "px" || h.labelFontSize),
              x = y.activated.config.normal["font-family"], k = y.activated.config.normal["font-weight"],
              S = h.currentDomain, _ = g.getContextLimit(), C = h.contextRangeThreshold, w = h.focusRangeThreshold,
              E = h.contextMinBin, D = h.focusMinBin, M = 0, T = 0, F = h.takeMaxSize, I = +S[1] - +S[0],
              L = function (t, e) {
                var i, n, a = new Date(t), r = new Date(e), o = a.getFullYear(), l = r.getFullYear(), s = a.getMonth(),
                  c = r.getMonth(), u = r.getDate(), d = 0;
                for (s > 1 && o++, (0 === c || 1 === c && u < 29) && l--, i = o; i <= l;) ((n = i) % 4 == 0 && n % 100 != 0 || n % 400 == 0) && d++, i++;
                return d
              }(+S[0], +S[1]), O = +_[1] - +_[0], A = "intervalToolBar-" + p.getId() + "-" + g.getId(),
              P = "businessToolBar-" + p.getId() + "-" + g.getId(), B = "allToolBar-" + p.getId() + "-" + g.getId(),
              N = h.intervalButtons = d.getIntervalButtons(I, O, w, D, L),
              H = h.tillDateButtons = d.getTillDateButtons(O, C, E);
            for (v.setStyle({fontSize: b, fontFamily: x, fontWeight: k}), N.forEach((function (t) {
              var e = v.getOriSize(t.intervalName, !1), i = e.height, n = e.width;
              t.height = i, t.width = n, M = Math.max(i, M), T = Math.max(n, T)
            })), H.forEach((function (t) {
              var e = v.getOriSize(t.tilldateName, !1), i = e.height, n = e.width;
              t.height = i, t.width = n, M = Math.max(i, M), T = Math.max(n, T)
            })), n = v.getOriSize("All", !1), M = Math.max(n.height, M), T = Math.max(n.width, T), a = d.getSelectionButtonConfig(), m[A] = {
              type: "tool",
              def: f["default"],
              configuration: {hAlign: "left", toolbarhdirection: 1, child: {}}
            }, t = 0, e = N.length; t < e; t++) i = a.isIntervalButton && a.unit === N[t].unit && a.multiplier === N[t].multiplier ? "pressed" : "activated", m[A].configuration.child["intervalButton-" + p.getId() + "-" + g.getId() + "-" + t] = {
              type: "tool",
              def: l["default"],
              configuration: {
                text: N[t].intervalName,
                name: "interval",
                width: F ? T : N[t].width,
                height: F ? M : N[t].height,
                scale: 1,
                marginLeft: t ? 3 : 0,
                marginRight: t === e - 1 ? 0 : 3,
                hAlign: "left",
                symbolStrokeWidth: "2",
                hoveredState: "normal",
                state: i,
                multiplier: N[t].multiplier,
                unit: N[t].unit,
                strokeWidth: 0,
                listener: {"fc-click": d._handler},
                css: y
              }
            };
            if (e && (m["separator-" + p.getId() + "-" + g.getId() + "-0"] = {
              type: "tool",
              def: s.Separator,
              configuration: {
                marginLeft: 0,
                marginRight: 0,
                scale: 1,
                height: M < 16 ? 16 : M,
                width: 8,
                hAlign: "left",
                stroke: y.separator.stroke || "#dfdfdf",
                css: y.separator
              }
            }), e = H.length) {
              for (m[P] = {
                type: "tool",
                def: f["default"],
                configuration: {hAlign: "left", toolbarhdirection: 1, child: {}}
              }, t = 0; t < e; t++) i = a.isTillDate && a.unit === H[t].unit && a.multiplier === H[t].multiplier && +S[1] == +_[1] ? "pressed" : "activated", m[P].configuration.child["tillDateButton-" + p.getId() + "-" + g.getId() + "-" + t] = {
                type: "tool",
                def: l["default"],
                configuration: {
                  text: H[t].tilldateName,
                  name: "interval",
                  scale: 1,
                  width: F ? T : H[t].width,
                  height: F ? M : H[t].height,
                  state: i,
                  multiplier: H[t].multiplier,
                  unit: H[t].unit,
                  symbolStrokeWidth: "2",
                  hoveredState: "normal",
                  fixedAtStart: H[t].fixedAtStart,
                  fixedAtEnd: H[t].fixedAtEnd,
                  marginLeft: t ? 3 : 0,
                  marginRight: t === e - 1 ? 0 : 3,
                  hAlign: "left",
                  strokeWidth: 0,
                  listener: {"fc-click": d._handler},
                  css: y
                }
              };
              m["separator-" + p.getId() + "-" + g.getId() + "-1"] = {
                type: "tool",
                def: s.Separator,
                configuration: {
                  marginLeft: 0,
                  marginRight: 0,
                  scale: 1,
                  height: M < 16 ? 16 : M,
                  classIndex: 3,
                  itemIndex: 0,
                  width: 8,
                  hAlign: "left",
                  stroke: y.separator.stroke || "#dfdfdf",
                  css: y.separator
                }
              }
            }
            return i = a.isAllButton ? "pressed" : "activated", m[B] = {
              type: "tool",
              def: f["default"],
              configuration: {hAlign: "left", toolbarhdirection: 1, child: {}}
            }, m[B].configuration.child["allButton-" + p.getId() + "-" + g.getId() + "-0"] = {
              type: "tool",
              def: l["default"],
              configuration: {
                state: i,
                width: F ? T : n.width,
                height: F ? M : n.height,
                scale: 1,
                text: "All",
                name: "interval",
                marginLeft: 0,
                marginRight: 0,
                hAlign: "left",
                hoveredState: "normal",
                symbolStrokeWidth: "2",
                strokeWidth: 0,
                fixedAtStart: !0,
                fixedAtEnd: !0,
                fill: "#00ff00",
                labelFill: "#00ff00",
                symbolFill: "#00ff00",
                listener: {"fc-click": d._handler},
                css: y
              }
            }, m
          }, i.updateOnLimitChange = function () {
            var t = this.config, e = this.getFromEnv("chart"), i = e.getFocusLimit() || [0, 1], n = i[1] - i[0];
            t.lastSelectedRange && t.lastSelectedRange !== n && !t.updatedThroughButton && (t.lastSelectedButtonConfig = void 0), t.lastSelectedRange = n, t.updatedThroughButton = !1, this.setData({
              currentDomain: i,
              totalDomain: e.getContextLimit() || [0, 1]
            }, !0)
          }, e
        }(o.SmartRenderer);
      e["default"] = y
    }, 872: function (t, e, i) {
      "use strict";
      var n = i(187);
      e.__esModule = !0, e["default"] = void 0;
      var a = n(i(210)), r = n(i(207)), o = i(304);

      function l() {
        this.setData({hoveredState: "hover"}, !0)
      }

      function s() {
        this.setData({hoveredState: "normal"}, !0)
      }

      var c = function (t) {
        function e(e) {
          var i;
          return (i = t.call(this, e) || this).addEventListener("fc-mouseover", l.bind((0, a["default"])(i))), i.addEventListener("fc-mouseout", s.bind((0, a["default"])(i))), i
        }

        (0, r["default"])(e, t);
        var i = e.prototype;
        return i.__setDefaultConfig = function () {
          t.prototype.__setDefaultConfig.call(this);
          var e = this.config;
          e.containerInfo = {
            id: "group",
            label: "group",
            isParent: !0
          }, e.spaceNotHardCoded = !0, e.hoveredState = "normal"
        }, i.configureAttributes = function (t) {
          void 0 === t && (t = {});
          var e, i = this.config;
          for (e in t) i[e] = t[e];
          for (e in i.listener) this.addEventListener(e, i.listener[e]);
          this.setState("visible", !0 !== i.isHidden), i.symbolName = i.name
        }, i.getHoveredState = function () {
          return this.config.hoveredState
        }, i.draw = function () {
          var t = this.config, e = t.x + t.width / 2, i = t.y + t.height / 2, n = t.width, a = t.height, r = t.css,
            o = this.getCurrentState(), l = this.getHoveredState(), s = r[o].config[l],
            c = r[o].config[l + "Background"];
          this.getState("visible") && (this.addGraphicalElement({
            el: "group",
            attr: {name: "srs-tool"},
            container: t.containerInfo,
            component: this,
            id: "group",
            label: "group"
          }), this.addGraphicalElement({
            el: "rect",
            attr: {x: e - n / 2 - 2, y: i - a / 2 - 2, width: n + 4, height: a + 4, opacity: c.opacity},
            css: c,
            container: {id: "group", label: "group"},
            component: this,
            id: "rect",
            label: "rect"
          }, !0), this.addGraphicalElement({
            el: "text",
            attr: {x: e, y: i, text: t.text, opacity: s.opacity},
            container: {id: "group", label: "group"},
            css: s,
            component: this,
            id: "text",
            label: "text"
          }, !0), "pressed" === o && this.addGraphicalElement({
            el: "path",
            attr: {path: "M" + (e - n / 2 - 1) + ", " + (i + a / 2 + 1.5) + " h " + (n + 1), opacity: s.opacity},
            container: {id: "group", label: "group"},
            css: {stroke: s.fill, "stroke-linecap": "round", "stroke-opacity": s["fill-opacity"]},
            component: this,
            id: "path",
            label: "path"
          }, !0))
        }, e
      }(o.Tool);
      e["default"] = c
    }
  }])
}));
//# sourceMappingURL=http://localhost:3052/3.15.1-sr.1/map/eval/fusioncharts.timeseries.js.map
