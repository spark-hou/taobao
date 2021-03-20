<template>
  <div class="AdobeFamily g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="1.windows平台安装" name="1"/>
      <el-tab-pane label="2.mac平台安装" name="2"/>
      <el-tab-pane label="定时任务补偿" name="3"/>
    </el-tabs>
    <div class="g-infoBox">
      <div v-if="activeName==='1'">
        1
      </div>
      <div v-if="activeName==='2'">
        2
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdobeFamily',
  data() {
    return {
      activeName: '1',
      title: 'Adobe全家桶安装教程',
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
