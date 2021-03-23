/**
* @author  sparkHou
* @date 2021-03-16 23:35
* @Description:
*/
<template>
  <div class="win7and8 g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="1.开启win10更新" name="1"/>
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
          <a :href="`${$path}/file/disableUpdate.exe`"
             download="开启win10更新工具.exe"
             class="download">
            点击下载--开启win10更新工具
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const img1 = require('../assets/img/enableUpdate/1.jpg');

export default {
  name: 'EnableUpdate',
  data() {
    return {
      activeName: '1',
      title: '开启win10更新',
      list1: [
        {
          text: '先点击下方蓝色按钮，下载win10更新工具即可(选第一个选项，然后apply,开启成功)',
          url: img1,
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
  .EnableUpdate {

  }
</style>
