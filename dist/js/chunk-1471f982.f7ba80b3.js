(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-1471f982'], {
  1567(e, a, t) {
    t.r(a); t('b0c0'); var n = {
      name: 'AdobeFamily', data() { return { activeName: '1', title: 'Adobe全家桶安装教程' }; }, mounted() { document.title = this.title; }, methods: { tabClick(e) { console.log(e.name); } },
    }; var t = (t('b88d'), t('2877')); var n = Object(t.a)(n, function () { const a = this; var e = a.$createElement; var e = a._self._c || e; return e('div', { staticClass: 'AdobeFamily g-container' }, [e('div', { staticClass: 'g-pageHead' }, [a._v(` ${a._s(a.title)} `)]), e('el-tabs', { on: { 'tab-click': a.tabClick }, model: { value: a.activeName, callback(e) { a.activeName = e; }, expression: 'activeName' } }, [e('el-tab-pane', { attrs: { label: '1.windows平台安装', name: '1' } }), e('el-tab-pane', { attrs: { label: '2.mac平台安装', name: '2' } }), e('el-tab-pane', { attrs: { label: '定时任务补偿', name: '3' } })], 1), e('div', { staticClass: 'g-infoBox' }, [a.activeName === '1' ? e('div', [a._v(' 1 ')]) : a._e(), a.activeName === '2' ? e('div', [a._v(' 2 ')]) : a._e()])], 1); }, [], !1, null, '8b4c6566', null); a.default = n.exports;
  },
  '653e': function (e, a, t) {},
  b88d(e, a, t) {
    const n = t('653e'); t.n(n).a;
  },
}]);
