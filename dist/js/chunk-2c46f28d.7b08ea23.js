(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-2c46f28d'], {
  '0370': function (e, t, n) {
    const i = n('a5e4'); n.n(i).a;
  },
  '0525': function (e, t, n) { e.exports = `${n.p}img/2.fa9eb763.jpg`; },
  3945(e, t, n) { e.exports = `${n.p}img/2.fc57b259.png`; },
  4325(e, t, n) { e.exports = `${n.p}img/5.95d5b21e.png`; },
  6065(e, t, n) { e.exports = `${n.p}img/1.3ebd9d9c.jpg`; },
  7938(e, t, n) {
    n.r(t); n('b0c0'); const i = n('fa83'); const a = n('3945'); const s = n('893e'); const c = n('7b18'); const l = n('4325'); const o = n('84b9'); const r = n('6065'); const f = n('0525'); const u = n('cf68'); var d = {
      name: 'CloseAntivirus',
      data() {
        return {
          activeName: '1', title: '关闭管家和Defender', list1: [{ text: '先退出管家软件', url: r }, { text: '先退出管家软件', url: f }, { text: '暂时关闭WindowsDefender（也可以关闭后不开启，Defender拖系统性能，并且没什么卵用）', url: u }], list2: [{ url: i }, { url: a }, { url: s }, { url: c }, { url: l }, { url: o, text: '点击关闭实时防护（默认30分钟后会自动启动）' }],
        };
      },
      mounted() { document.title = this.title; },
      methods: { tabClick(e) { console.log(e.name); } },
    }; var n = (n('0370'), n('2877')); var d = Object(n.a)(d, function () { const t = this; var e = t.$createElement; var e = t._self._c || e; return e('div', { staticClass: 'CloseAntivirus g-container' }, [e('div', { staticClass: 'g-pageHead' }, [t._v(` ${t._s(t.title)} `)]), e('el-tabs', { on: { 'tab-click': t.tabClick }, model: { value: t.activeName, callback(e) { t.activeName = e; }, expression: 'activeName' } }, [e('el-tab-pane', { attrs: { label: '1.关闭管家和Defender（激活完成后再打开安全管家即可！！）', name: '1' } }), e('el-tab-pane', { attrs: { label: '2.暂时关闭实时防护（如果浏览器下载文件报毒）', name: '2' } })], 1), e('div', { staticClass: 'g-infoBox' }, [t.activeName === '1' ? e('div', [e('PicList', { attrs: { list: t.list1 } }), t._m(0)], 1) : t._e(), t.activeName === '2' ? e('div', [e('PicList', { attrs: { list: t.list2 } })], 1) : t._e()])], 1); }, [function () { const e = this; var t = e.$createElement; var t = e._self._c || t; return t('div', { staticClass: 'block' }, [t('a', { staticClass: 'download', attrs: { href: '../../public/file/CloseWindowsDefender.exe', download: 'CloseWindowsDefender.exe' } }, [e._v(' 点击下载--一键关闭WindowsDefender--工具 ')])]); }], !1, null, '189eaba2', null); t.default = d.exports;
  },
  '7b18': function (e, t, n) { e.exports = `${n.p}img/4.5f850657.png`; },
  '84b9': function (e, t, n) { e.exports = `${n.p}img/6.a6b42e83.png`; },
  '893e': function (e, t, n) { e.exports = `${n.p}img/3.df4dc7df.png`; },
  a5e4(e, t, n) {},
  cf68(e, t, n) { e.exports = `${n.p}img/3.7011d74e.png`; },
  fa83(e, t, n) { e.exports = `${n.p}img/1.e9f96fcc.png`; },
}]);
