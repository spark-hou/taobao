/**
* @author  sparkHou
* @date 2021-05-04 17:19
* @Description:
*/
<template>
  <div class="ScratchClassesY g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="1.Scratch课程" name="1"/>
      <el-tab-pane label="2.桌面软件安装教程（仅限win平台）" name="2"/>
      <el-tab-pane label="3.在线scratch平台" name="3"/>
    </el-tabs>
    <div class="g-infoBox">
      <div v-if="activeName==='1'">
        <div>视频课件下载地址：
          <a style="color:blue" target="_blank" href="https://pan.baidu.com/s/1R7HLiYdk_CmS8gBk7IAFzw">
            https://pan.baidu.com/s/1R7HLiYdk_CmS8gBk7IAFzw</a>
        </div>
        <div>提取码:<span style="color: red">r4cw</span></div>
        <el-divider></el-divider>
      </div>
      <div v-if="activeName==='2'">
        <PicList :list="list1"></PicList>
      </div>
      <div v-if="activeName==='3'">
        <div>在线scratch平台：
          <a style="color:blue" target="_blank" href="https://www.scratch-edu.com/#/lesson?id=1">
            点击跳转</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const img1 = require('../assets/img/scratch/one.png');
const img2 = require('../assets/img/scratch/two.png');
const img3 = require('../assets/img/scratch/three.png');
const img4 = require('../assets/img/scratch/four.png');
const img5 = require('../assets/img/scratch/five.png');

export default {
  name: 'ScratchClassesY',
  data() {
    return {
      activeName: '1',
      title: 'Scratch课程',
      list1: [
        {
          text: '先下载网盘里的，客户端软件',
          url: img1,
        }, {
          text: '下载完成后，再传输完成列表中，点击打开所在文件夹按钮',
          url: img2,
        }, {
          text: '双击打开软件压缩包',
          url: img3,
        }, {
          text: '把压缩里的文件夹拖到桌面上',
          url: img4,
        }, {
          text: '双击文件夹里的exe文件，既可以运行了',
          url: img5,
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
  .ScratchClassesY {

  }
</style>
