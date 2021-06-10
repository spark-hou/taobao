<template>
  <div class="AdobeFamily g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <div class="g-red g-h4">提示：
      <br>
      windows电脑请到win分类里面下载，对应文件后缀.zip
      <br>
      mac电脑请到mac文件夹中下载，对应文件后缀.dmg
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="1.windows平台安装" name="1"/>
      <el-tab-pane label="2.mac平台安装" name="2"/>
      <el-tab-pane label="3.windows平台安装失败？" name="3"/>
      <el-tab-pane label="4.mac平台提示错误" name="4"/>
    </el-tabs>
    <div class="g-infoBox">
      <div v-if="activeName==='1'">
        <div class="g-h4">提示：
          <span class="g-red">
            解压密码：@vposy
          </span>
        </div>
        <el-divider></el-divider>
        <PicList :list="list1"></PicList>
      </div>
      <div v-if="activeName==='2'">
        <PicList :list="list2"></PicList>
      </div>
      <div v-if="activeName==='3'">
        <PicList :list="list3"></PicList>
        <div class="block">
          <a :href="`${$path}/file/AdobeCreativeCloudCleanerTool.exe`"
             download="AdobeCreativeCloudCleanerTool.exe" class="download">
            点击下载--adobe清理工具
          </a>
        </div>
      </div>
      <div v-if="activeName==='4'">
        <a style="color: red;display: block" href="https://www.bilibili.com/video/BV1vz4y1r7ed?from=search&seid=9704467516598308752" target="_blank">
          Big Sur 系统「您没有权限来打开应用程序 XXX」问题解决</a>
        <div class="block">
          <a :href="`${$path}/file/无权限修复.pkg.zip`"
             download="无权限修复.pkg.zip" class="download">
            点击下载--无权限修复.pkg.zip
          </a>
        </div>
        <br>
        <br>
        <br>
        <br>
        <a style="color: red;display: block" href="https://www.bilibili.com/video/BV17t411p7g1?from=search&seid=4840697584900466478" target="_blank">
          xxx已损坏，无法打开，你应该将它移到废纸篓解决办法
          <br>
          打不开 xxx，因为它来自身份不明的开发者
          <br>
          打不开xxxx，因为 Apple 无法检查其是否包含恶意软件
        </a>

      </div>
    </div>
  </div>
</template>
<script>
const img1 = require('../assets/img/adobeWin/1.jpg');
const img2 = require('../assets/img/adobeWin/2.jpg');
const img3 = require('../assets/img/adobeWin/3.jpg');
const img4 = require('../assets/img/adobeWin/4.jpg');
const img11 = require('../assets/img/adobeMac/1.png');
const img12 = require('../assets/img/adobeMac/2.png');
const img13 = require('../assets/img/adobeMac/3.png');
const img14 = require('../assets/img/adobeMac/4.png');
const img15 = require('../assets/img/adobeMac/5.png');
const img21 = require('../assets/img/adobeFail/1.png');
const img22 = require('../assets/img/adobeFail/2.png');
const img23 = require('../assets/img/adobeFail/3.png');
const img24 = require('../assets/img/adobeFail/4.png');
const img25 = require('../assets/img/adobeFail/5.png');
const img26 = require('../assets/img/adobeFail/6.png');
const img27 = require('../assets/img/adobeFail/7.png');

export default {
  name: 'AdobeFamily',
  data() {
    return {
      activeName: '1',
      title: 'Adobe全家桶安装教程',
      list1: [
        {
          text: '打开压缩包，把文件解压到桌面',
          url: img1,
        },
        {
          text: '双击set-up，开始安装',
          url: img2,
        },
        {
          text: '点击安装，开始安装',
          url: img3,
        },
        {
          text: '安装成功后，在开始列表中，可以查看到新安装的软件',
          url: img4,
        },
      ],
      list2: [
        {
          text: '先断网！先断网！先断网！',
          url: img11,
        },
        {
          text: '右键，打开压缩包',
          url: img12,
        },
        {
          text: '双击install，开始安装',
          url: img13,
        },
        {
          text: '输入mac的密码授权',
          url: img14,
        },
        {
          text: '点击安装开始安装',
          url: img15,
        },
        {
          text: '安装完成后，在启动台启动软件',
        },
      ],
      list3: [
        {
          text: 'C:\\Program Files (x86)\\Common Files\\Adobe\\backup '
              + 'C:\\Program Files (x86)\\Common Files\\Adobe\\caps'
              + 'C:\\Program Files (x86)\\Common Files\\Adobe\\installers'
              + '先删除这几个文件夹（没有就不管）',
          url: img21,
        },
        {
          text: '下载下方的清理工具，双击打开',
          url: img22,
        },
        {
          text: '按e，回车',
          url: img23,
        },
        {
          text: '按y，回车',
          url: img24,
        },
        {
          text: '输入‘all’对应的数字，图中对应的是1',
          url: img25,
        },
        {
          text: '输入‘clean all’对应的数字，图中对应的是3',
          url: img26,
        },
        {
          text: '按y，回车',
          url: img27,
        },
        {
          text: '等待清理成功，再重新安装adobe软件',
        },
      ],
    };
  },
  mounted() {
    document.title = this.title;
  },
  methods: {
    tabClick(e) {
      console.log(e.name);
    },
  },
};
</script>
<style lang="stylus" scoped>
  .AdobeFamily {

  }
</style>
