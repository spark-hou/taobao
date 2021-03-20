(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-21c8c58a'], {
  '289d': function (t, e, a) { t.exports = `${a.p}img/1.3532830f.png`; },
  '9ddc': function (t, e, a) {},
  d60b(t, e, a) {
    const s = a('9ddc'); a.n(s).a;
  },
  de67(t, e, a) {
    a.r(e); a('b0c0'); const s = a('289d'); var i = {
      name: 'EnableUpdate', data() { return { activeName: '1', title: '开启win10更新', list1: [{ text: '先点击下方蓝色按钮，下载win10更新工具即可(选第一个选项，然后apply,开启成功)', url: s }] }; }, mounted() { document.title = this.title; }, methods: { tabClick(t) { console.log(t.name); } },
    }; var a = (a('d60b'), a('2877')); var i = Object(a.a)(i, function () { const e = this; var t = e.$createElement; var t = e._self._c || t; return t('div', { staticClass: 'win7and8 g-container' }, [t('div', { staticClass: 'g-pageHead' }, [e._v(` ${e._s(e.title)} `)]), t('el-tabs', { on: { 'tab-click': e.tabClick }, model: { value: e.activeName, callback(t) { e.activeName = t; }, expression: 'activeName' } }, [t('el-tab-pane', { attrs: { label: '1.开启win10更新', name: '1' } })], 1), t('div', { staticClass: 'g-infoBox' }, [e.activeName === '1' ? t('div', [t('div', { staticClass: 'g-red g-h4' }, [e._v('提示： '), t('small', { staticClass: 'g-grey g-h1', on: { click(t) { return e.$router.push('CloseAntivirus'); } } }, [e._v(' 使用部分的工具时，可能会发生'), t('strong', { staticClass: 'g-red' }, [e._v('误报')]), e._v('的情况，工具是绝对'), t('strong', { staticClass: 'g-red' }, [e._v('安全')]), e._v('的，请'), t('strong', { staticClass: 'g-red' }, [e._v('信任')]), e._v('或 '), t('strong', { staticClass: 'g-red' }, [e._v('暂时关闭安全软件')]), e._v('(点击跳转关闭教程) ')])]), t('el-divider'), t('PicList', { attrs: { list: e.list1 } }), e._m(0)], 1) : e._e()])], 1); }, [function () { const t = this; var e = t.$createElement; var e = t._self._c || e; return e('div', { staticClass: 'block' }, [e('a', { staticClass: 'download', attrs: { href: '../asset/file/disableUpdate.exe', download: '开启win10更新工具.exe' } }, [t._v(' 点击下载--开启win10更新工具 ')])]); }], !1, null, '417c142c', null); e.default = i.exports;
  },
}]);
