/**
* @author  sparkHou
* @date 2021-05-04 22:35
* @Description:
*/
<template>
  <div class="BaiDuYun g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="方法一：开启p2p加速（长期有效）" name="1"/>
    </el-tabs>
    <div class="g-infoBox">
      <div v-if="activeName==='1'">
        <PicList :list="list1"></PicList>
      </div>
    </div>
  </div>
</template>
<script>
const img1 = require('../assets/img/baidu/1.png');
const img2 = require('../assets/img/baidu/2.png');
const img3 = require('../assets/img/baidu/3.png');
const img4 = require('../assets/img/baidu/4.png');

export default {
  name: 'BaiDuYun',
  data() {
    return {
      activeName: '1',
      title: '百度云加速教程',
      list1: [
        {
          text: '先把百度云客户端升级到最新版！！！！',

        }, {
          text: '',
          url: img1,
        }, {
          text: '',
          url: img2,
        }, {
          text: '',
          url: img3,
        }, {
          text: '',
          url: img4,
        }, {
          text: '开启成功',
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
  .BaiDuYun {

  }
</style>
