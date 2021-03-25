<template>
  <div class="AdobeFamily g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="1.windows平台安装" name="1"/>
      <el-tab-pane label="2.mac平台安装" name="2"/>
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
