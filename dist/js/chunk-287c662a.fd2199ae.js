(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-287c662a'], {
  '8fd9': function (t, a, e) {},
  a22c(t, a, e) {
    e.r(a); e('b0c0'); const s = e('e49a'); var i = {
      name: 'win7and8', data() { return { activeName: '1', title: 'win7,8许可证教程', list1: [{ text: '直接运行压缩包里的软件安装（安装完成后，即可成功解决问题）----（安装完后，重启电脑，将不再出现过期提示）', url: s }] }; }, mounted() { document.title = this.title; }, methods: { tabClick(t) { console.log(t.name); } },
    }; var e = (e('bfeb'), e('2877')); var i = Object(e.a)(i, function () { const a = this; var t = a.$createElement; var t = a._self._c || t; return t('div', { staticClass: 'win7and8 g-container' }, [t('div', { staticClass: 'g-pageHead' }, [a._v(` ${a._s(a.title)} `)]), t('el-tabs', { on: { 'tab-click': a.tabClick }, model: { value: a.activeName, callback(t) { a.activeName = t; }, expression: 'activeName' } }, [t('el-tab-pane', { attrs: { label: '1.win7,8许可证教程', name: '1' } })], 1), t('div', { staticClass: 'g-infoBox' }, [a.activeName === '1' ? t('div', [t('div', { staticClass: 'g-red g-h4' }, [a._v('提示： '), t('small', { staticClass: 'g-grey g-h1', on: { click(t) { return a.$router.push('CloseAntivirus'); } } }, [a._v(' 使用部分的工具时，可能会发生'), t('strong', { staticClass: 'g-red' }, [a._v('误报')]), a._v('的情况，工具是绝对'), t('strong', { staticClass: 'g-red' }, [a._v('安全')]), a._v('的，请'), t('strong', { staticClass: 'g-red' }, [a._v('信任')]), a._v('或 '), t('strong', { staticClass: 'g-red' }, [a._v('暂时关闭安全软件')]), a._v('(点击跳转关闭教程) ')])]), t('el-divider'), t('PicList', { attrs: { list: a.list1 } }), a._m(0)], 1) : a._e()])], 1); }, [function () { const t = this; var a = t.$createElement; var a = t._self._c || a; return a('div', { staticClass: 'block' }, [a('a', { staticClass: 'download', attrs: { href: '../asset/file/anzhaung.zip', download: 'anzhaung.zip' } }, [t._v(' 点击下载--激活工具 ')])]); }], !1, null, 'e82d1dce', null); a.default = i.exports;
  },
  bfeb(t, a, e) {
    const s = e('8fd9'); e.n(s).a;
  },
  e49a(t, a, e) { t.exports = `${e.p}img/1.1ce7a4a8.png`; },
}]);
