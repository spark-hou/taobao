(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-47fa1406'], {
  '0717': function (t, e, a) { t.exports = `${a.p}img/3.c43c6af5.png`; },
  '2f79': function (t, e, a) {
    a.r(e); a('b0c0'); const i = a('5c50'); const s = a('cd64'); const n = a('0717'); const l = a('e900'); const c = a('6843'); const o = a('a262'); const r = a('683c'); const d = a('858e'); var u = {
      name: 'DisableUpdate',
      data() {
        return {
          activeName: '1', title: '关闭win10更新', list1: [{ text: '点击下方的下载按钮，下载卸载易升工具，然后运行(这一步的目的是确保电脑里没有“易升”，成功或者显示没有易升都可以)', url: i }, { text: '按图片的操作，删除文件夹（没有就不用删除了）', url: s }, { text: '按图片的操作，删除文件夹（没有就不用删除了）', url: n }, { text: '在C:\\Windows\\SoftwareDistribution路径下删除download文件夹', url: l }, { text: '运行关闭更新软件（勾选途中的选项），然后点击apply', url: c }], list2: [{ text: '找到指定的文件夹（C:\\Windows \\SoftwareDistribution \\Download），然后右键', url: o }, { text: '选择安全，然后点击编辑按钮', url: r }, { text: '先点击system,然后将其权限全部拒绝，然后应用，到此关闭成功', url: d }],
        };
      },
      mounted() { document.title = this.title; },
      methods: { tabClick(t) { console.log(t.name); } },
    }; var a = (a('d090'), a('2877')); var u = Object(a.a)(u, function () { const e = this; var t = e.$createElement; var t = e._self._c || t; return t('div', { staticClass: 'DisableUpdate g-container' }, [t('div', { staticClass: 'g-pageHead' }, [e._v(` ${e._s(e.title)} `)]), t('el-tabs', { on: { 'tab-click': e.tabClick }, model: { value: e.activeName, callback(t) { e.activeName = t; }, expression: 'activeName' } }, [t('el-tab-pane', { attrs: { label: '1.关闭win10更新（可以恢复版）', name: '1' } }), t('el-tab-pane', { attrs: { label: '2.关闭win10更新（不可以恢复版，慎用）', name: '2' } })], 1), t('div', { staticClass: 'g-infoBox' }, [e.activeName === '1' ? t('div', [t('div', { staticClass: 'g-red g-h4' }, [e._v('提示： '), t('small', { staticClass: 'g-grey g-h1', on: { click(t) { return e.$router.push('CloseAntivirus'); } } }, [e._v(' 使用部分的工具时，可能会发生'), t('strong', { staticClass: 'g-red' }, [e._v('误报')]), e._v('的情况，工具是绝对'), t('strong', { staticClass: 'g-red' }, [e._v('安全')]), e._v('的，请'), t('strong', { staticClass: 'g-red' }, [e._v('信任')]), e._v('或 '), t('strong', { staticClass: 'g-red' }, [e._v('暂时关闭安全软件')]), e._v('(点击跳转关闭教程) ')])]), t('el-divider'), t('PicList', { attrs: { list: e.list1 } }), e._m(0), t('br'), e._m(1)], 1) : e._e(), e.activeName === '2' ? t('div', [t('PicList', { attrs: { list: e.list2 } })], 1) : e._e()])], 1); }, [function () { const t = this; var e = t.$createElement; var e = t._self._c || e; return e('div', { staticClass: 'block' }, [e('a', { staticClass: 'download', attrs: { href: '../../public/file/yisheng.exe', download: '卸载易升工具.exe' } }, [t._v(' 点击下载--卸载易升工具 ')])]); }, function () { const t = this; var e = t.$createElement; var e = t._self._c || e; return e('div', { staticClass: 'block' }, [e('a', { staticClass: 'download', attrs: { href: '../../public/file/disableUpdate.exe', download: '关闭更新工具.exe' } }, [t._v(' 点击下载--关闭更新工具 ')])]); }], !1, null, 'd4d638f4', null); e.default = u.exports;
  },
  '5c50': function (t, e, a) { t.exports = `${a.p}img/4.bd5edbd2.png`; },
  '683c': function (t, e, a) { t.exports = `${a.p}img/7.ef059e41.png`; },
  6843(t, e, a) { t.exports = `${a.p}img/5.936f4ea0.png`; },
  '77ed': function (t, e, a) {},
  '858e': function (t, e, a) { t.exports = `${a.p}img/8.c9d6aa71.png`; },
  a262(t, e, a) { t.exports = `${a.p}img/6.0f2da338.png`; },
  cd64(t, e, a) { t.exports = `${a.p}img/1.dece5b5a.png`; },
  d090(t, e, a) {
    const i = a('77ed'); a.n(i).a;
  },
  e900(t, e, a) { t.exports = `${a.p}img/9.2d326138.png`; },
}]);
