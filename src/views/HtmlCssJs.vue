/**
* @author  sparkHou
* @date 2021-05-04 00:14
* @Description:
*/
<template>
  <div class="HtmlCssJs g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="1.前端教程资源地址" name="1"/>
    </el-tabs>
    <div class="g-infoBox">
      <div v-if="activeName==='1'">
        <div>视频课件下载地址：<a style="color:blue" target="_blank" href="https://pan.baidu.com/s/1XthmCwCKQz6JF32R_4bReA">链接:https://pan.baidu.com/s/1XthmCwCKQz6JF32R_4bReA</a>
        </div>
        <div>提取码:ik8i</div>
        <el-divider></el-divider>
        开发工具下载地址：<a style="color:blue" target="_blank"
                    href="https://www.jetbrains.com/webstorm/download/#section=windows">点击跳转</a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'EnableUpdate',
  data() {
    return {
      activeName: '1',
      title: '前端教程',
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
  .HtmlCssJs {

  }
</style>
