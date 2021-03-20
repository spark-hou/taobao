/**
* @author  sparkHou
* @date 2021-03-16 23:33
* @Description:
*/
<template>
  <div class="CloseAntivirus g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="1.关闭管家和Defender（激活完成后再打开安全管家即可！！）" name="1"/>
      <el-tab-pane label="2.暂时关闭实时防护（如果浏览器下载文件报毒）" name="2"/>
    </el-tabs>
    <div class="g-infoBox">
      <div v-if="activeName==='1'">
        <PicList :list="list1"></PicList>
        <div class="block">
          <a href="../../public/file/CloseWindowsDefender.exe"
             download="CloseWindowsDefender.exe" class="download">
            点击下载--一键关闭WindowsDefender--工具
          </a>
        </div>
      </div>
      <div v-if="activeName==='2'">
        <PicList :list="list2"></PicList>
      </div>
    </div>
  </div>
</template>
<script>
const img1 = require('../assets/img/defender/1.png');
const img2 = require('../assets/img/defender/2.png');
const img3 = require('../assets/img/defender/3.png');
const img4 = require('../assets/img/defender/4.png');
const img5 = require('../assets/img/defender/5.png');
const img6 = require('../assets/img/defender/6.png');
const img101 = require('../assets/img/win10/1.jpg');
const img102 = require('../assets/img/win10/2.jpg');
const img103 = require('../assets/img/win10/3.png');

export default {
  name: 'CloseAntivirus',
  data() {
    return {
      activeName: '1',
      title: '关闭管家和Defender',
      list1: [
        {
          text: '先退出管家软件',
          url: img101,
        }, {
          text: '先退出管家软件',
          url: img102,
        }, {
          text: '暂时关闭WindowsDefender（也可以关闭后不开启，Defender拖系统性能，并且没什么卵用）',
          url: img103,
        },
      ],
      list2: [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 },
        { url: img5 },
        {
          url: img6,
          text: '点击关闭实时防护（默认30分钟后会自动启动）',
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
  .CloseAntivirus {

  }
</style>
