(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8c861484"],{"15ff":function(t,a,e){t.exports=e.p+"img/7.70511308.jpg"},"2cb4":function(t,a,e){t.exports=e.p+"img/3.daa3782d.jpg"},"2f79":function(t,a,e){"use strict";e.r(a);e("b0c0");var i=e("fa6d"),s=e("aca8"),n=e("2cb4"),c=e("b1c0"),l=e("59c8"),o=e("3c97"),r=e("15ff"),d=e("c321"),u={name:"DisableUpdate",data:function(){return{activeName:"1",title:"关闭win10更新",list1:[{text:"点击下方的下载按钮，下载卸载易升工具，然后运行(这一步的目的是确保电脑里没有“易升”，成功或者显示没有易升都可以)",url:i},{text:"按图片的操作，删除文件夹（没有就不用删除了）",url:s},{text:"按图片的操作，删除文件夹（没有就不用删除了）",url:n},{text:"在C:\\Windows\\SoftwareDistribution路径下删除download文件夹",url:c},{text:"运行关闭更新软件（勾选途中的选项），然后点击apply",url:l}],list2:[{text:"找到指定的文件夹（C:\\Windows \\SoftwareDistribution \\Download），然后右键",url:o},{text:"选择安全，然后点击编辑按钮",url:r},{text:"先点击system,然后将其权限全部拒绝，然后应用，到此关闭成功",url:d}]}},mounted:function(){document.title=this.title},methods:{tabClick:function(t){console.log(t.name)}}},e=(e("a550"),e("2877")),u=Object(e.a)(u,function(){var a=this,t=a.$createElement,t=a._self._c||t;return t("div",{staticClass:"DisableUpdate g-container"},[t("div",{staticClass:"g-pageHead"},[a._v(" "+a._s(a.title)+" ")]),t("el-tabs",{on:{"tab-click":a.tabClick},model:{value:a.activeName,callback:function(t){a.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"1.关闭win10更新（可以恢复版）",name:"1"}}),t("el-tab-pane",{attrs:{label:"2.关闭win10更新（不可以恢复版，慎用）",name:"2"}})],1),t("div",{staticClass:"g-infoBox"},["1"===a.activeName?t("div",[t("div",{staticClass:"g-red g-h4"},[a._v("提示： "),t("small",{staticClass:"g-grey g-h1",on:{click:function(t){return a.$router.push("CloseAntivirus")}}},[a._v(" 使用部分的工具时，可能会发生"),t("strong",{staticClass:"g-red"},[a._v("误报")]),a._v("的情况，工具是绝对"),t("strong",{staticClass:"g-red"},[a._v("安全")]),a._v("的，请"),t("strong",{staticClass:"g-red"},[a._v("信任")]),a._v("或 "),t("strong",{staticClass:"g-red"},[a._v("暂时关闭安全软件")]),a._v("(点击跳转关闭教程) ")])]),t("el-divider"),t("PicList",{attrs:{list:a.list1}}),t("div",{staticClass:"block"},[t("a",{staticClass:"download",attrs:{href:a.$path+"/file/yisheng.exe",download:"卸载易升工具.exe"}},[a._v(" 点击下载--卸载易升工具 ")])]),t("br"),t("div",{staticClass:"block"},[t("a",{staticClass:"download",attrs:{href:a.$path+"/file/disableUpdate.exe",download:"关闭更新工具.exe"}},[a._v(" 点击下载--关闭更新工具 ")])])],1):a._e(),"2"===a.activeName?t("div",[t("PicList",{attrs:{list:a.list2}})],1):a._e()])],1)},[],!1,null,"2a9aabd0",null);a.default=u.exports},"3c97":function(t,a,e){t.exports=e.p+"img/6.f63f2878.jpg"},"59c8":function(t,a,e){t.exports=e.p+"img/5.3f161109.jpg"},a550:function(t,a,e){"use strict";var i=e("c644");e.n(i).a},aca8:function(t,a,e){t.exports=e.p+"img/1.c0ab922c.jpg"},b1c0:function(t,a,e){t.exports=e.p+"img/9.d83ebf4e.jpg"},c321:function(t,a,e){t.exports=e.p+"img/8.ed85e978.jpg"},c644:function(t,a,e){},fa6d:function(t,a,e){t.exports=e.p+"img/4.355b019c.jpg"}}]);