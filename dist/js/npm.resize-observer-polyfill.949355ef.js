(window.webpackJsonp = window.webpackJsonp || []).push([['npm.resize-observer-polyfill'], {
  '6dd8': function (t, R, e) {
    e.r(R), function (t) {
      const i = typeof Map !== 'undefined' ? Map : (Object.defineProperty(e.prototype, 'size', { get() { return this.__entries__.length; }, enumerable: !0, configurable: !0 }), e.prototype.get = function (t) { t = r(this.__entries__, t), t = this.__entries__[t]; return t && t[1]; }, e.prototype.set = function (t, e) { const n = r(this.__entries__, t); ~n ? this.__entries__[n][1] = e : this.__entries__.push([t, e]); }, e.prototype.delete = function (t) { const e = this.__entries__; var t = r(e, t); ~t && e.splice(t, 1); }, e.prototype.has = function (t) { return !!~r(this.__entries__, t); }, e.prototype.clear = function () { this.__entries__.splice(0); }, e.prototype.forEach = function (t, e) { void 0 === e && (e = null); for (let n = 0, i = this.__entries__; n < i.length; n++) { const r = i[n]; t.call(e, r[1], r[0]); } }, e); function r(t, n) { let i = -1; return t.some((t, e) => t[0] === n && (i = e, !0)), i; } function e() { this.__entries__ = []; } const n = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; const o = void 0 !== t && t.Math === Math ? t : typeof self !== 'undefined' && self.Math === Math ? self : typeof window !== 'undefined' && window.Math === Math ? window : Function('return this')(); const c = typeof requestAnimationFrame === 'function' ? requestAnimationFrame.bind(o) : function (t) { return setTimeout(() => t(Date.now()), 1e3 / 60); }; const h = 2; const s = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; const a = typeof MutationObserver !== 'undefined'; const u = (f.prototype.addObserver = function (t) { ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_(); }, f.prototype.removeObserver = function (t) { const e = this.observers_; var t = e.indexOf(t); ~t && e.splice(t, 1), !e.length && this.connected_ && this.disconnect_(); }, f.prototype.refresh = function () { this.updateObservers_() && this.refresh(); }, f.prototype.updateObservers_ = function () { const t = this.observers_.filter((t) => (t.gatherActive(), t.hasActive())); return t.forEach((t) => t.broadcastActive()), t.length > 0; }, f.prototype.connect_ = function () {
        n && !this.connected_ && (document.addEventListener('transitionend', this.onTransitionEnd_), window.addEventListener('resize', this.refresh), a ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
          attributes: !0, childList: !0, characterData: !0, subtree: !0,
        })) : (document.addEventListener('DOMSubtreeModified', this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
      }, f.prototype.disconnect_ = function () { n && this.connected_ && (document.removeEventListener('transitionend', this.onTransitionEnd_), window.removeEventListener('resize', this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1); }, f.prototype.onTransitionEnd_ = function (t) { var t = t.propertyName; const e = void 0 === t ? '' : t; s.some((t) => !!~e.indexOf(t)) && this.refresh(); }, f.getInstance = function () { return this.instance_ || (this.instance_ = new f()), this.instance_; }, f.instance_ = null, f); function f() { function t() { o && (o = !1, i()), s && n(); } function e() { c(t); } function n() { const t = Date.now(); if (o) { if (t - a < h) return; s = !0; } else s = !(o = !0), setTimeout(e, r); a = t; } let i; let r; let o; let s; let a; this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = (i = this.refresh.bind(this), s = o = !(r = 20), a = 0, n); } const d = function (t, e) {
        for (let n = 0, i = Object.keys(e); n < i.length; n++) {
          const r = i[n]; Object.defineProperty(t, r, {
            value: e[r], enumerable: !1, writable: !1, configurable: !0,
          });
        } return t;
      }; const p = function (t) { return t && t.ownerDocument && t.ownerDocument.defaultView || o; }; const v = w(0, 0, 0, 0); function l(t) { return parseFloat(t) || 0; } function _(n) { for (var t = [], e = 1; e < arguments.length; e++)t[e - 1] = arguments[e]; return t.reduce((t, e) => t + l(n[`border-${e}-width`]), 0); } function b(t) { let e = t.clientWidth; let n = t.clientHeight; if (!e && !n) return v; const i = p(t).getComputedStyle(t); const r = (function (t) { for (var e = {}, n = 0, i = ['top', 'right', 'bottom', 'left']; n < i.length; n++) { const r = i[n]; const o = t[`padding-${r}`]; e[r] = l(o); } return e; }(i)); const o = r.left + r.right; const s = r.top + r.bottom; let a = l(i.width); let c = l(i.height); return i.boxSizing === 'border-box' && (Math.round(a + o) !== e && (a -= _(i, 'left', 'right') + o), Math.round(c + s) !== n && (c -= _(i, 'top', 'bottom') + s)), (t = t) !== p(t).document.documentElement && (e = Math.round(a + o) - e, n = Math.round(c + s) - n, Math.abs(e) !== 1 && (a -= e), Math.abs(n) !== 1 && (c -= n)), w(r.left, r.top, a, c); } const m = typeof SVGGraphicsElement !== 'undefined' ? function (t) { return t instanceof p(t).SVGGraphicsElement; } : function (t) { return t instanceof p(t).SVGElement && typeof t.getBBox === 'function'; }; function y(t) { return n ? m(t) ? w(0, 0, (e = (e = t).getBBox()).width, e.height) : b(t) : v; let e; } function w(t, e, n, i) {
        return {
          x: t, y: e, width: n, height: i,
        };
      } const g = (E.prototype.isActive = function () { const t = y(this.target); return (this.contentRect_ = t).width !== this.broadcastWidth || t.height !== this.broadcastHeight; }, E.prototype.broadcastRect = function () { const t = this.contentRect_; return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t; }, E); function E(t) { this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = w(0, 0, 0, 0), this.target = t; } const O = function (t, e) {
        let n; let i; let r; var o = (n = (o = e).x, i = o.y, r = o.width, e = o.height, o = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object, o = Object.create(o.prototype), d(o, {
          x: n, y: i, width: r, height: e, top: i, right: n + r, bottom: e + i, left: n,
        }), o); d(this, { target: t, contentRect: o });
      }; const M = (A.prototype.observe = function (t) { if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.'); if (typeof Element !== 'undefined' && Element instanceof Object) { if (!(t instanceof p(t).Element)) throw new TypeError('parameter 1 is not of type "Element".'); const e = this.observations_; e.has(t) || (e.set(t, new g(t)), this.controller_.addObserver(this), this.controller_.refresh()); } }, A.prototype.unobserve = function (t) { if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.'); if (typeof Element !== 'undefined' && Element instanceof Object) { if (!(t instanceof p(t).Element)) throw new TypeError('parameter 1 is not of type "Element".'); const e = this.observations_; e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this)); } }, A.prototype.disconnect = function () { this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this); }, A.prototype.gatherActive = function () { const e = this; this.clearActive(), this.observations_.forEach((t) => { t.isActive() && e.activeObservations_.push(t); }); }, A.prototype.broadcastActive = function () { let t; let e; this.hasActive() && (t = this.callbackCtx_, e = this.activeObservations_.map((t) => new O(t.target, t.broadcastRect())), this.callback_.call(t, e, t), this.clearActive()); }, A.prototype.clearActive = function () { this.activeObservations_.splice(0); }, A.prototype.hasActive = function () { return this.activeObservations_.length > 0; }, A); function A(t, e, n) { if (this.activeObservations_ = [], this.observations_ = new i(), typeof t !== 'function') throw new TypeError('The callback provided as parameter 1 is not a function.'); this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n; } const T = new (typeof WeakMap !== 'undefined' ? WeakMap : i)(); const
        x = function t(e) { if (!(this instanceof t)) throw new TypeError('Cannot call a class as a function.'); if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.'); var n = u.getInstance(); var n = new M(e, n, this); T.set(this, n); }; ['observe', 'unobserve', 'disconnect'].forEach((e) => { x.prototype[e] = function () { let t; return (t = T.get(this))[e].apply(t, arguments); }; }); t = void 0 !== o.ResizeObserver ? o.ResizeObserver : x; R.default = t;
    }.call(this, e('c8ba'));
  },
}]);
