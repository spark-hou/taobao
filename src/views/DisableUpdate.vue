/**
* @author  sparkHou
* @date 2021-03-16 23:35
* @Description:
*/
<template>
  <div class="DisableUpdate g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="1.关闭win10更新（可以恢复版）" name="1"/>
      <el-tab-pane label="2.关闭win10更新（不可以恢复版，慎用）" name="2"/>
    </el-tabs>
    <div class="g-infoBox">
      <div v-if="activeName==='1'">
        <div class="g-red g-h4">提示：
          <small class="g-grey g-h1"
                 @click="$router.push('CloseAntivirus')">
            使用部分的工具时，可能会发生<strong class="g-red">误报</strong>的情况，工具是绝对<strong
            class="g-red">安全</strong>的，请<strong class="g-red">信任</strong>或
            <strong class="g-red">暂时关闭安全软件</strong>(点击跳转关闭教程)
          </small>
        </div>
        <el-divider></el-divider>
        <PicList :list="list1"></PicList>
        <div class="block">
          <a href="../../public/file/yisheng.exe" download="卸载易升工具.exe" class="download">
            点击下载--卸载易升工具
          </a>
        </div>
        <br>
        <div class="block">
          <a href="../../public/file/disableUpdate.exe" download="关闭更新工具.exe" class="download">
            点击下载--关闭更新工具
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
const img4 = require('../assets/img/disableUpdate/4.png');
const img1 = require('../assets/img/disableUpdate/1.png');
const img3 = require('../assets/img/disableUpdate/3.png');
const img9 = require('../assets/img/disableUpdate/9.png');
const img5 = require('../assets/img/disableUpdate/5.png');
const img6 = require('../assets/img/disableUpdate/6.png');
const img7 = require('../assets/img/disableUpdate/7.png');
const img8 = require('../assets/img/disableUpdate/8.png');

export default {
  name: 'DisableUpdate',
  data() {
    return {
      activeName: '1',
      title: '关闭win10更新',
      list1: [
        {
          text: '点击下方的下载按钮，下载卸载易升工具，然后运行(这一步的目的是确保电脑里没有“易升”，成功或者显示没有易升都可以)',
          url: img4,
        },
        {
          text: '按图片的操作，删除文件夹（没有就不用删除了）',
          url: img1,
        }, {
          text: '按图片的操作，删除文件夹（没有就不用删除了）',
          url: img3,
        }, {
          text: '在C:\\Windows\\SoftwareDistribution路径下删除download文件夹',
          url: img9,
        }, {
          text: '运行关闭更新软件（勾选途中的选项），然后点击apply',
          url: img5,
        },
      ],
      list2: [
        {
          text: '找到指定的文件夹（C:\\Windows \\SoftwareDistribution \\Download），然后右键',
          url: img6,
        }, {
          text: '选择安全，然后点击编辑按钮',
          url: img7,
        }, {
          text: '先点击system,然后将其权限全部拒绝，然后应用，到此关闭成功',
          url: img8,
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
  .DisableUpdate {

  }
</style>
