(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-311b1b3b"],{"0619":function(t,i,a){t.exports=a.p+"img/AdobeIc.0de39a3d.svg"},"082a":function(t,i,a){t.exports=a.p+"img/update.ccab75e1.jpg"},"0b9c":function(t,i,a){t.exports=a.p+"img/6.65b082be.jpg"},1e3:function(t,i,s){"use strict";s.r(i);s("159b"),s("b0c0");var a=s("70b0"),e=s.n(a),n=s("a850"),o=s("e9f4"),c=s("9313"),l=s("5f78"),r=s("44ee"),d=s("f186"),p=s("ed16"),v=s("5b07"),b=s("0619"),g=s("c307"),f=s("d1e2"),x=s("e75e"),u=s("6f01"),h=s("41dd"),C=s("5eab"),w=s("9597"),m={name:"detail",data:function(){return{list:[{title:"AcrobatReader(pdf)",val:"链接：https://pan.baidu.com/s/1ydMQaIYMipPb3BYSQXBwKQ 提取码：wh4w",ty:"https://cloud.189.cn/t/INnA7fMBr6Zf"},{title:"AfterEffects(AE)",val:"链接：https://pan.baidu.com/s/1aXXe4Rs3UP0iwD84dWMEww\n提取码：oxyv",ty:"https://cloud.189.cn/t/iyqAF3f6JJze"},{title:"Animate(AN)",val:"链接：https://pan.baidu.com/s/1riucP1QCq3WTQiCwhDBbfQ\n提取码：whdv",ty:"https://cloud.189.cn/t/feumiqjqARR3"},{title:"Audition(AU)",val:"链接：https://pan.baidu.com/s/1k04Z3zWR57vFj9vgT5wn0A\n提取码：65g3",ty:"https://cloud.189.cn/t/rmYFNjfIBRBv"},{title:"Bridge(BR)",val:"链接：https://pan.baidu.com/s/1If4BBNygNjo_DHvcKVqxgA\n提取码：gk2e",ty:"https://cloud.189.cn/t/vUZNvuQJJBJj"},{title:"Character(CH)",val:"链接：https://pan.baidu.com/s/1HH7-oKcTiskWC0vVrkvCyg\n提取码：k1ir",ty:"https://cloud.189.cn/t/RJvUfu2IN3Qz"},{title:"Dimension(DN)",val:"链接：https://pan.baidu.com/s/1A75RAUGeb7tGAHLCDXWC5w\n提取码：qumg ",ty:"https://cloud.189.cn/t/u2MJzyFNRjQz"},{title:"Dreamweaver(DW)",val:"链接：https://pan.baidu.com/s/1v6mOTqHZJJzA2PBhsTC0Vg\n提取码：c4m9 ",ty:"https://cloud.189.cn/t/f2YFfenmuym2"},{title:"Illustrator(AI)",val:"链接：https://pan.baidu.com/s/1o2Iez2XFZPlukwyTLl9bdg\n提取码：sirn",ty:"https://cloud.189.cn/t/nyUBfqziQvAn"},{title:"InCopy(IC)",val:"链接：https://pan.baidu.com/s/1sEv0hmXeH-Fhm3kLs51TWg\n提取码：xnnd ",ty:"https://cloud.189.cn/t/jQVZVzYviIna"},{title:"InDesign(ID)",val:"链接：https://pan.baidu.com/s/1v9Uq6znQ4PCCf89k9c0CVA\n提取码：5xqi ",ty:"https://cloud.189.cn/t/aUjYnijUFnua"},{title:"Lightroom(LR)",val:"链接：https://pan.baidu.com/s/1Gd1gmaBbOi2-AtWkMM9ayw\n提取码：pfp0",ty:"https://cloud.189.cn/t/vANJ7zANB3um"},{title:"MediaEncoder(ME)",val:"链接：https://pan.baidu.com/s/181zzMDrNaNvLSQ-mzYUljw\n提取码：locf",ty:"https://cloud.189.cn/t/773aMzJNz2Ij"},{title:"Photoshop(PS)",val:"链接：https://pan.baidu.com/s/13D6K5SH1rX_fuheTcgi_8A\n提取码：c4rk",ty:"https://cloud.189.cn/t/BjIbaaVb2E7b"},{title:"Prelude(PL)",val:"链接：https://pan.baidu.com/s/1MuVzvSCntN9uezvV56Pcng\n提取码：lpau",ty:"https://cloud.189.cn/t/Ariai2jIRFfm"},{title:"PremierePro(PR)",val:"链接：https://pan.baidu.com/s/1qWpjo-014u_2LbtWqF56Hg\n提取码：m9nw",ty:"https://cloud.189.cn/t/juyaEfQbiyAn"},{title:"全家桶",val:"链接：https://pan.baidu.com/s/1Ykq4wUmBLdhgD_kgx1SsTQ\n提取码：qwuz",ty:"https://cloud.189.cn/t/6zEzY3b6ZZz2"}],list2:[{title:"AfterEffects(AE)",src:n},{title:"Animate(AN)",src:c},{title:"Audition(AU)",src:l},{title:"Bridge(BR)",src:r},{title:"Character(CH)",src:d},{title:"Dimension(DN)",src:p},{title:"Dreamweaver(DW)",src:v},{title:"Illustrator(AI)",src:o},{title:"InCopy(IC)",src:b},{title:"InDesign(ID)",src:g},{title:"Lightroom(LR)",src:f},{title:"Photoshop(PS)",src:h},{title:"Prelude(PL)",src:x},{title:"PremierePro(PR)",src:u},{title:"MediaEncoder(ME)",src:C},{title:"AcrobatReader(pdf)",src:w}],activeName:"first"}},created:function(){this.activeName=sessionStorage.getItem("tabName")||"first"},mounted:function(){for(var i="",t=0;t<150;t+=1)i+="榆少的小店铺  ";document.querySelectorAll(".cover").forEach(function(t){t.innerHTML=i})},methods:{getPic:function(){var a=this;$(".picBox").each(function(t,i){a.downImg(i)})},downImg:function(a){e.a.toPng(a,{}).then(function(t){var i=document.createElement("a");i.download=a.getAttribute("data-title")||"xds".concat((new Date).getTime()),i.href=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)}).catch(function(t){console.error("oops, something went wrong!",t)})},getAdobeDetail:function(){e.a.toPng(document.getElementById("adobeDetail"),{}).then(function(t){var i=document.createElement("a");i.download="xds".concat((new Date).getTime()),i.href=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)}).catch(function(t){console.error("oops, something went wrong!",t)})},handleClick:function(t){sessionStorage.setItem("tabName",t.name)},getPicById:function(t){e.a.toPng(document.getElementById(t),{quality:1}).then(function(t){var i=document.createElement("a");i.download="xds".concat((new Date).getTime()),i.href=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)}).catch(function(t){console.error("oops, something went wrong!",t)})}}},a=(s("5cbc"),s("2877")),m=Object(a.a)(m,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"detailBox"},[e("div",{staticClass:"container"},[e("el-tabs",{on:{"tab-click":a.handleClick},model:{value:a.activeName,callback:function(t){a.activeName=t},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"奇奇怪怪",name:"1"}},[e("div",{staticStyle:{"font-size":"20px"}},[a._v(" Adobe全家桶安装教程请查看链接： "),e("br"),a._v(" win10版本请查看链接：https://tool.huashengriji.work/#/Activation "),e("br"),a._v(" win10版本请查看链接：https://pan.baidu.com/s/1cQIiKH6WuCTJXr7cBf6Kmg 提取码：j9qv 复制这段内容后打开百度网盘手机App，操作更方便哦 "),e("br"),a._v(" win7/8版本请查看链接：https://tool.huashengriji.work/#/win7and8 "),e("br"),a._v(" win7/8版本请查看链接：https://pan.baidu.com/s/1I2CEsM3Jj3YVNI1QXi-GAA 提取码：pp3h 复制这段内容后打开百度网盘手机App，操作更方便哦 "),e("br"),a._v(" 打开win10系统更新方法：https://tool.huashengriji.work/#/enableUpdate/ "),e("br"),a._v(" 打开win10系统更新方法链接：https://pan.baidu.com/s/1vj3Zo82eqGRKwlbdQk1gCA 提取码：zalk 复制这段内容后打开百度网盘手机App，操作更方便哦 "),e("br"),a._v(" 关闭win10系统更新方法：https://tool.huashengriji.work/#/disableUpdate/ "),e("br"),a._v(" 关闭win10系统更新方法链接：https://pan.baidu.com/s/1txidPH9GdF4DU7kt6jKdOQ 提取码：8n9v 复制这段内容后打开百度网盘手机App，操作更方便哦 "),e("br"),a._v(" win10激活链接:https://pan.baidu.com/s/14eHD_gYB7PD9SNbVfFRpCQ 提取码:ywp6 复制这段内容后打开百度网盘手机App，操作更方便哦 "),e("br")])]),e("el-tab-pane",{attrs:{label:"Windows软件",name:"first"}},[e("div",{staticClass:"title"},[a._v(" win10许可证过期windows许可证即将过期win8/win7问题解决服务 ")]),e("div",{staticClass:"mainPic"},[e("p",{staticClass:"text-info"},[a._v("解决windows许可证到期")]),e("p",{staticClass:"text-danger"},[a._v("win10/win8/win7(支持)")]),e("p",{staticClass:"partTwo text-warning"},[e("span",[a._v("简单的操作")]),a._v("+"),e("span",[a._v("操作指引文档")])]),e("p",{staticClass:"text-warning"},[a._v("店主服务支持")]),e("p",{staticClass:"partTwo text-warning"},[e("span",[a._v("支持远程协助")]),e("span",[a._v("无效可退款")])]),e("img",{attrs:{src:s("bc73"),alt:""}}),e("div",{staticClass:"cover"})]),e("div",{staticClass:"detail"},[e("h4",[e("p",{staticClass:"bg-danger"},[a._v("24小时自动发货，无需等待，有详细的指引。如遇疑问，请询问店主")])]),e("h4",[e("div",{staticClass:"page-header"},[e("h1",{staticClass:"text-danger"},[a._v("提示： "),e("small",[a._v("本店提供的工具是安全的，请根据指引文档操作，外加细致全面的引导文档，小白无惧")])])])]),e("h1",[a._v("简单的操作，一直有效，详细的指引文档（无效包退）")]),e("p",{staticClass:"text-info"},[a._v("解决windows许可证到期")]),e("p",{staticClass:"text-danger"},[a._v("win10/win8/win7(全支持)")]),e("p",{staticClass:"partTwo text-warning"},[e("span",[a._v("一键简单操作")]),a._v("+"),e("span",[a._v("操作指引文档")])]),e("p",{staticClass:"text-warning"},[a._v("店主在线服务支持")]),e("p",{staticClass:"partTwo text-warning"},[e("span",[a._v("支持远程协助")]),e("span",[a._v("无效退款")])]),e("p",{staticClass:"text-info"},[a._v("10系统处理后效果")]),e("img",{attrs:{src:s("3d8e"),alt:""}}),e("div",{staticClass:"cover"})]),e("div",{staticClass:"title"},[a._v(" 关闭禁止win10系统自动更新关闭windows10自动更新解决支持服务 ")]),e("div",{staticClass:"update text-info",staticStyle:{position:"relative",overflow:"hidden"}},[e("div",{staticClass:"top"},[e("p",{staticClass:"text-info"},[a._v("简单关闭Wl.n10自动更新")]),e("p",{staticClass:"partTwo text-info"},[e("span",[a._v("简单操作")]),a._v("+"),e("span",[a._v("操作指引文档")])]),e("p",{staticClass:"text-info"},[a._v("两种方案可选，自由选择")])]),e("div",{staticClass:"cover"})]),e("div",{staticClass:"detail",staticStyle:{position:"relative",overflow:"hidden"}},[e("h4",[e("p",{staticClass:"bg-danger"},[a._v("24小时自动发货，无需等待，有详细的指引。如遇疑问，请询问店主")])]),e("h4",[e("div",{staticClass:"page-header"},[e("h1",{staticClass:"text-danger"},[a._v("提示： "),e("small",[a._v("两种方式关闭win10自动更新，可以控制再开启，以备不时之需，外加细致全面的引导文档，小白无惧")])])])]),e("h1",[a._v("店主自创2种方案关闭自动更新（一次付费，给两种方案，无效退款）")]),e("h4",[e("div",{staticClass:"page-header"},[e("h4",{staticClass:"text-danger"},[a._v("方案一（可以自己控制跟更新的开关，可操控）： "),e("small",[a._v("使用工具控制开关，在特殊情况下，可以快速打开")])])])]),e("h4",[e("div",{staticClass:"page-header"},[e("h4",{staticClass:"text-danger"},[a._v("方案二（直接剥夺系统权限）： "),e("small",[a._v("暴力关闭更新，开启麻烦，从底层关闭")])])])]),e("p",{},[a._v("永久关闭win10自动更新")]),e("p",{staticClass:"partTwo text-warning"},[e("span",[a._v("一键简单操作")]),a._v("+"),e("span",[a._v("操作指引文档")])]),e("p",{staticClass:"text-warning"},[a._v("两种方案可选，自由选择")]),e("p",{staticClass:"partTwo text-warning"},[e("span",[a._v("支持远程协助")]),e("span",[a._v("无效退款")])]),e("p",[a._v("店主在线服务支持")]),e("img",{attrs:{src:s("082a"),alt:""}}),e("div",{staticClass:"cover"})]),e("div",{staticClass:"title"},[a._v(" 纯净版PE制作工具 U盘优盘启动盘远程制作 ")]),e("div",{staticClass:"update pe",staticStyle:{color:"white"}},[e("div",{staticClass:"top"},[e("p",{},[a._v("纯净PE制作工具")]),e("p",{staticClass:"partTwo text-warning"},[e("span",[a._v("一键简单操作")]),a._v("+"),e("span",[a._v("详细指引文档")])]),e("p",{staticClass:"text-warning"},[a._v("0捆绑0广告绝对纯净")]),e("p",{staticClass:"partTwo text-warning"},[e("span",[a._v("支持远程协助")])]),e("p",[e("span",{staticClass:"border-red"},[a._v("支持nvme固态")])])]),e("img",{staticStyle:{opacity:"1"},attrs:{src:s("7bfe"),alt:""}})]),e("div",{staticClass:"detail"},[e("h4",[e("p",{staticClass:"bg-danger"},[a._v("24小时自动发货，无需等待，有详细的指引。如遇疑问，请询问店主")])]),e("h4",[e("div",{staticClass:"page-header"},[e("h1",{staticClass:"text-danger"},[a._v("提示： "),e("small",[a._v("本产品，只指导PE制作，不提供后续重装系统的技术支持（需要请另付费）")])])])]),e("h2",{staticClass:"text-danger"},[a._v("收货后好评，再送纯净系统镜像")]),e("h4",[e("div",{staticClass:"page-header"},[e("h4",{staticClass:"text-danger"},[a._v("纯净PE： "),e("small",[a._v("区别于老毛桃，大白菜等pe，不会捆绑任何流氓软件")])])])]),e("h4",[e("div",{staticClass:"page-header"},[e("h4",{staticClass:"text-danger"},[a._v("一键制作超简单+贴心的教程指导")])])]),e("p",{},[a._v("纯净PE制作工具")]),e("p",{staticClass:"partTwo text-warning"},[e("span",[a._v("一键简单操作")]),a._v("+"),e("span",[a._v("详细指引文档")])]),e("p",{staticClass:"text-warning"},[a._v("0捆绑0广告绝对纯净")]),e("p",{staticClass:"partTwo text-warning"},[e("span",[a._v("支持远程协助")])]),e("p",[e("span",{staticClass:"border-red"},[a._v("支持nvme固态")])])]),e("div",{staticStyle:{"font-size":"24px"}},[e("p",{staticClass:"text-danger"},[a._v("制作人：达克越全球购店主")]),e("p",{staticClass:"text-danger"},[a._v("TB店铺名：达克越全球购")])])]),e("el-tab-pane",{staticStyle:{"text-align":"center"},attrs:{label:"adobe",name:"2"}},[e("div",{staticStyle:{display:"inline-block"},attrs:{id:"adobeOne"}},[e("div",{staticClass:"mainDetail"},[e("div",{staticClass:"cover"}),e("img",{staticClass:"pic",attrs:{src:s("a6f7"),alt:""}}),e("div",{staticStyle:{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"45px","font-size":"40px",width:"100%","font-weight":"bolder","text-align":"center",color:"red"}},[a._v(" 双网盘资源不限速下载 ")])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("adobeOne")}}},[a._v("生产图片")]),e("br"),e("div",{staticClass:"mainDetail"},[e("div",{staticClass:"cover"}),e("img",{staticClass:"pic",attrs:{src:s("a63e"),alt:""}})]),e("br"),e("div",{staticClass:"mainDetail"},[e("div",{staticClass:"cover"}),e("img",{staticClass:"pic",attrs:{src:s("9c0cb"),alt:""}})]),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"adobeDetail1"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"25px",color:"red"}},[a._v(" 每种版本的M1平台，Mac平台，windows平台的安装包都会一起发送 ")]),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"35px",color:"red"}},[a._v(" 注意⚠️： ")]),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"25px",color:"black"}},[a._v(" 本店使用网盘发货，不会用网盘的，请勿拍！！！！ ")]),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"30px",color:"red"}},[a._v(" --拍下就送，百度网盘长期免费加速教程-- ")]),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"30px",color:"red"}},[a._v(" 天翼盘+百度盘，双节点资源，告别龟速下载 ")]),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"25px",color:"red"}},[a._v(" 购买前须知： ")]),e("div",{staticStyle:{"text-align":"left","font-size":"22px",color:"red"}},[a._v(" 本店24小时自动发货，收货请在聊天窗口接收链接。 ")]),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"22px",color:"gray"}},[a._v(" 本店出售的是技术支持，其他辅助资源均为网络资源 ")])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("adobeDetail1")}}},[a._v("生产图片")]),e("br"),e("div",{staticStyle:{display:"inline-block"},attrs:{id:"adobeDetail"}},[e("div",{staticClass:"detail"},[e("img",{staticClass:"pic",attrs:{src:s("0b9c"),alt:""}}),e("div",{staticClass:"cover"})])]),e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("el-button",{attrs:{type:"danger"},on:{click:a.getAdobeDetail}},[a._v("打印adobeDetail")])],1),e("div",{staticStyle:{display:"inline-block"},attrs:{id:"adobeDetai2"}},[e("div",{staticClass:"detail"},[e("img",{staticClass:"pic",attrs:{src:s("8fbb"),alt:""}}),e("div",{staticClass:"cover"})]),e("div",{staticClass:"detail"},[e("img",{staticClass:"pic",attrs:{src:s("b01f"),alt:""}}),e("div",{staticClass:"cover"})])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("adobeDetai2")}}},[a._v("生产图片")]),e("br"),a._l(a.list,function(t,i){return e("div",{key:i,staticClass:"area"},[e("span",{staticClass:"g-red"},[a._v(a._s(t.title))]),e("br"),a._v(" 百度盘"+a._s(t.val)+" "),e("br"),a._v(" ------------------------------------------ "),e("br"),a._v(" 天翼盘链接："+a._s(t.ty)+" "),e("br"),a._v(" ------------------------------------------ "),e("br"),a._v(" 《《下载前，请先查看教程》》 全家桶安装教程网址：https://tool.huashengriji.work/#/AdobeFamily "),e("br"),a._v(" ------------------------------------------ "),e("br"),a._v(" 解压密码：@vposy ")])}),e("div",[a._v(" PS软件PR安装包AE/AI/BR全家桶MAC/WIN/M1/21/20/19/18cc技术指导 ")]),e("div",[a._v(" [软件]PS/AE/AI/LR/PR安装包photosh/premie全家桶M1/MAC/WIN21cc ")]),e("div",[a._v(" 全家桶16种应用 ")]),e("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},a._l(a.list2,function(t,i){return e("div",{key:i,staticClass:"picBox",attrs:{"data-title":t.title}},[e("div",{staticClass:"four getPic"},[e("div",{staticClass:"cover"}),e("div",{staticClass:"title",staticStyle:{"font-size":"40px","padding-top":"10px"}},[a._v(" "+a._s(t.title)+" ")]),e("div",{staticClass:"info title",staticStyle:{"font-size":"30px"}},[a._v(" 2021/20/19/18CC ")]),e("div",{staticClass:"info title",staticStyle:{"font-size":"30px"}},[a._v(" 支持mac/win/m1 ")]),e("img",{attrs:{src:t.src,alt:""}}),e("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[e("div",{staticClass:"title"},[a._v(" 简单快捷 ")]),e("div",{staticStyle:{width:"40px"}}),e("div",{staticClass:"title"},[a._v(" 一键用久 ")])]),e("div",{staticStyle:{"font-size":"50px",color:"red","font-weight":"bolder","padding-top":"20px"}},[a._v(" 买就送百度网盘加速工具 ")])])])}),0),e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("el-button",{attrs:{type:"danger"},on:{click:a.getPic}},[a._v("生成图片")])],1)],2),e("el-tab-pane",{staticStyle:{"text-align":"center"},attrs:{label:"前端课程",name:"3"}},[e("span",[a._v(" 链接:https://pan.baidu.com/s/1XthmCwCKQz6JF32R_4bReA 提取码:ik8i 复制这段内容后打开百度网盘手机App，操作更方便哦 ")]),e("div",[a._v(" 前端课程网址(复制到电脑浏览器打开)：https://tool.huashengriji.work/#/HtmlCssJs ")]),e("br"),e("br"),e("div",[a._v(" web前端开发编程零基础从入门到精通视频课程自学教程vue/react ")]),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"webVal"}},[e("div",{staticClass:"boxC",staticStyle:{"background-color":"#40B883","text-align":"center"}},[e("div",{staticClass:"cover"}),e("div",{staticStyle:{color:"white","font-size":"40px","font-weight":"bolder","padding-top":"10px"}},[a._v(" web前端开发系统课程 ")]),e("div",{staticStyle:{color:"white","font-size":"30px","padding-top":"10px"}},[a._v(" 超新超全，独家资源，学完就就业 ")]),e("div",{staticStyle:{"background-color":"white","border-radius":"5px",padding:"10px",margin:"10px 80px","font-size":"25px"}},[a._v(" 零基础从入门到精通 ")]),e("div",{staticStyle:{"background-color":"white","border-radius":"5px",padding:"10px",margin:"10px 10px","font-size":"25px"}},[a._v(" 开发工具+课件+视频+项目案例+源码 ")]),e("div",{staticStyle:{"background-color":"white","border-radius":"5px",padding:"10px",margin:"10px 20px","font-size":"25px"}},[a._v(" html + css + js + jQuery + vue全家桶 + react全家桶 + node后台 ")]),e("div",{staticStyle:{"background-color":"white","border-radius":"5px",padding:"10px",margin:"10px 5px","font-size":"25px"}},[a._v(" 全技术栈,由浅入深,百G资源,持续更新 ")]),e("div",{staticStyle:{"background-color":"white","border-radius":"5px",padding:"10px",margin:"10px 20px","font-size":"25px"}},[a._v(" 高清视频+拒绝拼凑 ")])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("webVal")}}},[a._v("生产图片")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"webVal2"}},[e("div",{staticClass:"boxC",staticStyle:{"background-color":"#40B883","text-align":"center"}},[e("div",{staticClass:"cover"}),e("div",{staticStyle:{display:"block",position:"absolute",width:"100%",height:"40px","background-color":"#22B57E"}}),e("div",{staticStyle:{display:"block",position:"absolute",bottom:"0",width:"100%",height:"60px","font-size":"40px","font-weight":"bolder",color:"white","background-color":"#22B57E"}},[a._v(" 买就送百度网盘加速教程 ")]),e("div",{staticStyle:{display:"block",position:"absolute",width:"450px",height:"60px",top:"150px",left:"10px","font-size":"40px","font-weight":"bolder","padding-left":"5px","text-align":"center",color:"black","background-color":"white"}},[a._v(" 2021前端开发培训课程 ")]),e("div",{staticStyle:{display:"block",position:"absolute",width:"390px",height:"40px",top:"337px",left:"70px","font-size":"28px","text-align":"left","font-weight":"bolder","padding-left":"5px",color:"black","background-color":"#22B57E"}},[a._v(" 完整课件/项目源码/面试题库 ")]),e("div",{staticStyle:{display:"block",position:"absolute",width:"390px",height:"40px",top:"373px",left:"70px","font-size":"28px","text-align":"left","font-weight":"bolder","padding-left":"5px",color:"black","background-color":"#22B57E"}},[a._v(" 持续免费更新 ")]),e("img",{attrs:{src:s("f982"),alt:""}})])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("webVal2")}}},[a._v("生产图片")]),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"webDetail"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"35px",color:"red"}},[a._v(" 注意⚠️： ")]),e("div",{staticStyle:{"text-align":"left","font-size":"25px",color:"black"}},[a._v(" 本店使用百度网盘发货，不会用百度网盘的，请勿拍！！！！ "),e("br"),a._v(" 本店使用百度网盘发货，不会用百度网盘的，请勿拍！！！！ "),e("br"),a._v(" 本店使用百度网盘发货，不会用百度网盘的，请勿拍！！！！ "),e("br")]),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"30px",color:"red"}},[a._v(" --拍下就送，百度网盘长期免费加速教程-- ")]),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"25px",color:"red"}},[a._v(" 购买前须知： ")]),e("div",{staticStyle:{"text-align":"left","font-size":"22px",color:"red"}},[a._v(" 本店24小时自动发货，收货请在聊天窗口接收链接。 ")]),e("div",{staticStyle:{"text-align":"left","font-size":"22px",color:"red"}},[a._v(" 由于商品的特殊性，发货后不接受退款！拍前请考虑清楚 ")])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("webDetail")}}},[a._v("生产图片")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"webDetail4"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("br"),e("div",[e("img",{attrs:{src:s("65b5"),alt:""}})])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("webDetail4")}}},[a._v("生产图片")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"webDetail3"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("br"),e("div",[e("img",{attrs:{src:s("4030"),alt:""}})])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("webDetail3")}}},[a._v("生产图片")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"webDetail2"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("div",[e("img",{attrs:{src:s("85b2"),alt:""}})])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("webDetail2")}}},[a._v("生产图片")])],1),e("el-tab-pane",{staticStyle:{"text-align":"center"},attrs:{label:"python课程",name:"4"}},[e("span",[a._v(" 链接：https://pan.baidu.com/s/14rRkM-U3Y72FG2g9UQ_E3A 提取码："),e("span",{staticStyle:{color:"red"}},[a._v("trjy")]),a._v(" 复制这段内容后打开百度网盘手机App，操作更方便哦 ")]),e("br"),e("div",[a._v(" 课程网址(复制到电脑浏览器打开)：https://tool.huashengriji.work/#/PythonClassesH ")]),e("br"),e("br"),e("div",[a._v(" python开发编程零基础从入门到精通培训课程自学视频培AI机器学习 ")]),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"pythonVal"}},[e("div",{staticClass:"boxC",staticStyle:{"background-color":"#40B883","text-align":"center"}},[e("div",{staticClass:"cover"}),e("div",{staticStyle:{color:"white","font-size":"40px","font-weight":"bolder","padding-top":"10px"}},[a._v(" python开发培训课程 ")]),e("div",{staticStyle:{color:"white","font-size":"30px","padding-top":"10px"}},[a._v(" 超新超全，独家资源，学完就就业 ")]),e("div",{staticStyle:{"background-color":"white","border-radius":"5px",padding:"10px",margin:"10px 80px","font-size":"25px"}},[a._v(" 零基础从入门到精通 ")]),e("div",{staticStyle:{"background-color":"white","border-radius":"5px",padding:"10px",margin:"10px 10px","font-size":"25px"}},[a._v(" 开发工具+课件+视频+项目案例+源码 ")]),e("div",{staticStyle:{"background-color":"white","border-radius":"5px",padding:"10px",margin:"10px 20px","font-size":"30px"}},[a._v(" 网络爬虫 + 机器学习 + 深度学习 + web服务 + 数据挖掘 + AI ")]),e("div",{staticStyle:{"background-color":"white","border-radius":"5px",padding:"10px",margin:"10px 5px","font-size":"25px"}},[a._v(" 全技术栈,由浅入深,百G资源,持续更新 ")]),e("div",{staticStyle:{"background-color":"white","border-radius":"5px",padding:"10px",margin:"10px 20px","font-size":"25px"}},[a._v(" 高清视频+拒绝拼凑 ")])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("pythonVal")}}},[a._v("生产图片")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"pythonVal2"}},[e("div",{staticClass:"boxC",staticStyle:{"background-color":"#40B883","text-align":"center"}},[e("div",{staticClass:"cover"}),e("div",{staticStyle:{display:"block",position:"absolute",width:"450px",height:"60px",top:"110px",left:"10px","font-size":"40px","font-weight":"bolder","padding-left":"5px","text-align":"center",color:"black","background-color":"white"}},[a._v(" 2021新版全套视频课程 ")]),e("div",{staticStyle:{display:"block",position:"absolute",bottom:"0",width:"100%",height:"80px","font-size":"40px","font-weight":"bolder",color:"white","background-color":"#428CA6"}},[a._v(" 买就送百度网盘加速教程 ")]),e("img",{attrs:{src:s("9f1f"),alt:""}})])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("pythonVal2")}}},[a._v("生产图片")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"pythonDetail4"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"35px",color:"red"}},[a._v(" 注意⚠️： ")]),e("div",{staticStyle:{"text-align":"left","font-size":"25px",color:"black"}},[a._v(" 本店使用百度网盘发货，不会用百度网盘的，请勿拍！！！！ "),e("br"),a._v(" 本店使用百度网盘发货，不会用百度网盘的，请勿拍！！！！ "),e("br"),a._v(" 本店使用百度网盘发货，不会用百度网盘的，请勿拍！！！！ "),e("br")]),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"30px",color:"red"}},[a._v(" --拍下就送，百度网盘长期免费加速教程-- ")]),e("br"),e("div",{staticStyle:{"text-align":"left","font-size":"25px",color:"red"}},[a._v(" 购买前须知： ")]),e("div",{staticStyle:{"text-align":"left","font-size":"22px",color:"red"}},[a._v(" 本店24小时自动发货，收货请在聊天窗口接收链接。 ")]),e("div",{staticStyle:{"text-align":"left","font-size":"22px",color:"red"}},[a._v(" 由于商品的特殊性，发货后不接受退款！拍前请考虑清楚 ")])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("pythonDetail4")}}},[a._v("生产图片")]),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"pythonDetail5"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("br"),e("div",[e("img",{attrs:{src:s("c956"),alt:""}})])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("pythonDetail5")}}},[a._v("生产图片")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"pythonDetail6"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("br"),e("div",[e("img",{attrs:{src:s("c1e0"),alt:""}})])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("pythonDetail6")}}},[a._v("生产图片")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"pythonDetail"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("br"),e("div",[e("img",{attrs:{src:s("9f80"),alt:""}})])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("pythonDetail")}}},[a._v("生产图片")]),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"pythonDetail2"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("div",[e("img",{attrs:{src:s("221a"),alt:""}})])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("pythonDetail2")}}},[a._v("生产图片")]),e("br")],1),e("el-tab-pane",{staticStyle:{"text-align":"center"},attrs:{label:"scratch",name:"5"}},[e("span",[a._v(" 链接：https://pan.baidu.com/s/1R7HLiYdk_CmS8gBk7IAFzw 提取码：r4cw ")]),e("br"),e("br"),e("div",[a._v(" scratch课程网址(复制到电脑浏览器打开)：https://tool.huashengriji.work/#/ScratchClassesY ")]),e("br"),e("div",[a._v(" scratch少儿趣味编程零基础从入门到精通视频课程带课件/软件 ")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"scratchMain"}},[e("div",{staticClass:"boxC",staticStyle:{"background-color":"#40B883","text-align":"center"}},[e("div",{staticClass:"cover"}),e("div",{staticStyle:{display:"block",position:"absolute",width:"100%",height:"40px","background-color":"#22B57E"}}),e("div",{staticStyle:{display:"block",position:"absolute",bottom:"0",width:"100%",height:"60px","font-size":"40px","font-weight":"bolder",color:"white","background-color":"#22B57E"}},[a._v(" 买就送百度网盘加速教程 ")]),e("div",{staticStyle:{display:"block",position:"absolute",width:"456px",height:"100px",top:"63px",left:"10px","font-size":"56px","font-weight":"800","padding-left":"5px","text-align":"center",color:"#1AB97B","background-color":"white"}},[a._v(" Scratch3.0 ")]),e("div",{staticStyle:{display:"block",position:"absolute",width:"450px",height:"60px",top:"150px",left:"10px","font-size":"34px","font-weight":"bolder","padding-left":"5px","text-align":"center",color:"black","background-color":"white"}},[a._v(" 少儿趣味编程全套视频自学版 ")]),e("div",{staticStyle:{display:"block",position:"absolute",width:"350px",height:"50px","line-height":"50px",top:"235px",left:"50%","border-radius":"50px",transform:"translateX(-50%)","font-size":"30px","font-weight":"800","padding-left":"5px","text-align":"center",color:"#1AB97B","background-color":"white"}},[a._v(" 零基础入门到精通课程 ")]),e("div",{staticStyle:{display:"block",position:"absolute",width:"390px",height:"40px",top:"300px",left:"70px","font-size":"28px","text-align":"left","font-weight":"bolder","padding-left":"5px",color:"black","background-color":"#22B57E"}},[a._v(" 初级+中级+高级(进阶课程) ")]),e("div",{staticStyle:{display:"block",position:"absolute",width:"390px",height:"40px",top:"337px",left:"70px","font-size":"28px","text-align":"left","font-weight":"bolder","padding-left":"5px",color:"black","background-color":"#22B57E"}},[a._v(" 教学素材+教师用课件 ")]),e("div",{staticStyle:{display:"block",position:"absolute",width:"390px",height:"40px",top:"373px",left:"70px","font-size":"28px","text-align":"left","font-weight":"bolder","padding-left":"5px",color:"black","background-color":"#22B57E"}},[a._v(" 持续免费更新 ")]),e("img",{attrs:{src:s("f982"),alt:""}})])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("scratchMain")}}},[a._v("生产图片")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"scratchDetail1"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("br"),e("div",[e("img",{attrs:{src:s("a96f"),alt:""}})])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("scratchDetail1")}}},[a._v("生产图片")]),e("br"),e("br"),e("div",{staticClass:"picContainer",attrs:{id:"scratchDetail2"}},[e("div",{staticClass:"width7"},[e("div",{staticClass:"cover"}),e("br"),e("div",[e("img",{attrs:{src:s("174b"),alt:""}})])])]),e("br"),e("el-button",{on:{click:function(t){return a.getPicById("scratchDetail2")}}},[a._v("生产图片")]),e("br")],1)],1)],1)])},[],!1,null,"041546e0",null);i.default=m.exports},"174b":function(t,i,a){t.exports=a.p+"img/2.fcdd8e85.jpg"},"1e3d":function(t,i,a){},"221a":function(t,i,a){t.exports=a.p+"img/2.d83f26eb.png"},"3d8e":function(t,i,a){t.exports=a.p+"img/6.acaf331f.jpg"},4030:function(t,i,a){t.exports=a.p+"img/1.034145a5.png"},"41dd":function(t,i,a){t.exports=a.p+"img/ADOBEPS.d5ddfd4a.svg"},"44ee":function(t,i,a){t.exports=a.p+"img/ADOBEBR.e0d734c0.svg"},"5b07":function(t,i,a){t.exports=a.p+"img/ADOBEDW.95a0bae0.svg"},"5cbc":function(t,i,a){"use strict";a("1e3d")},"5eab":function(t,i,a){t.exports=a.p+"img/ME.071a66c3.svg"},"5f78":function(t,i,a){t.exports=a.p+"img/ADOBEAU.c1714a64.svg"},"65b5":function(t,i,a){t.exports=a.p+"img/detailOne.64fdc9e9.jpg"},"6f01":function(t,i,a){t.exports=a.p+"img/ADOBEPR.db22584d.svg"},"7bfe":function(t,i,a){t.exports=a.p+"img/pe.cd5861aa.jpg"},"85b2":function(t,i,a){t.exports=a.p+"img/2.305b0f1f.png"},"8fbb":function(t,i,a){t.exports=a.p+"img/8.1710e51c.jpg"},9313:function(t,i,a){t.exports=a.p+"img/ADOBEAN.c2035e26.svg"},9597:function(t,i,a){t.exports=a.p+"img/pdf.26a87e70.svg"},"9c0cb":function(t,i,a){t.exports=a.p+"img/5.26c74700.jpg"},"9f1f":function(t,i,a){t.exports=a.p+"img/one.3a48d4a1.jpg"},"9f80":function(t,i,a){t.exports=a.p+"img/1.d60f4cc5.png"},a63e:function(t,i,a){t.exports=a.p+"img/2.c3bcaa01.jpg"},a6f7:function(t,i,a){t.exports=a.p+"img/1.60aa83c3.jpg"},a850:function(t,i,a){t.exports=a.p+"img/ADOBEAE.067ea0f9.svg"},a96f:function(t,i,a){t.exports=a.p+"img/1.b24b1d27.jpg"},b01f:function(t,i,a){t.exports=a.p+"img/9.af590389.png"},bc73:function(t,i,a){t.exports=a.p+"img/1.5b6b18f6.jpg"},c1e0:function(t,i,a){t.exports=a.p+"img/dTwo.3bc8e411.jpg"},c307:function(t,i,a){t.exports=a.p+"img/AdobeId.22d46e02.svg"},c956:function(t,i,a){t.exports=a.p+"img/dOne.adbbbb88.jpg"},d1e2:function(t,i,a){t.exports=a.p+"img/ADOBELR.3da94b5e.svg"},e75e:function(t,i,a){t.exports=a.p+"img/ADOBEPL.cef1ab9a.svg"},e9f4:function(t,i,a){t.exports=a.p+"img/ADOBEAI.6a11acef.svg"},ed16:function(t,i,a){t.exports=a.p+"img/Dn.37b84eed.svg"},f186:function(t,i,a){t.exports=a.p+"img/ADOBECH.d31498b4.svg"},f982:function(t,i,a){t.exports=a.p+"img/one.db079f8d.jpg"}}]);