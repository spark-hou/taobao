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
      <el-tab-pane label="1.win7,8许可证教程" name="1"/>
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
          <a :href="`${$path}/file/anzhaung.zip`"
             download="anzhaung.zip"
             class="download">
            点击下载--激活工具
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const img1 = require('../assets/img/win8/1.jpg');

export default {
  name: 'win7and8',
  data() {
    return {
      activeName: '1',
      title: 'win7,8许可证教程',
      list1: [
        {
          text: '直接运行压缩包里的软件安装（安装完成后，即可成功解决问题）----（安装完后，重启电脑，将不再出现过期提示）',
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
  .win7and8 {

  }
</style>
