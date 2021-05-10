/**
* @author  sparkHou
* @date 2021-05-04 17:19
* @Description:
*/
<template>
  <div class="PythonClassesH g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="1.python开发培训课程" name="1"/>
    </el-tabs>
    <div class="g-infoBox">
      <div v-if="activeName==='1'">
        <div>视频课件下载地址：
          <a style="color:blue" target="_blank" href="https://pan.baidu.com/s/14rRkM-U3Y72FG2g9UQ_E3A">
            https://pan.baidu.com/s/14rRkM-U3Y72FG2g9UQ_E3A</a>
        </div>
        <div>提取码:<span style="color: red">trjy</span></div>
        <el-divider></el-divider>
        开发工具下载地址：<a style="color:blue" target="_blank"
                    href="https://www.jetbrains.com/pycharm/download/#section=windows">点击跳转</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PythonClassesH',
  data() {
    return {
      activeName: '1',
      title: 'python开发培训课程',
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
  .PythonClassesH {

  }
</style>
