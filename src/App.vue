<template>
  <div id="app">
    <router-view/>
    <div class="box-card">
      <el-card>
        <div slot="header">
          <span class="g-red">直通车(点击直达)</span>
        </div>
        <div v-for="(item,index) in list"
             :key="index"
             @click="$router.push(item.router)"
             class="text">
          {{index+1}}.{{item.text}}
        </div>
      </el-card>
      <div class="maker">
        拼多多：榆少的小店铺
      </div>
      <div class="tips">
        <a class="g-red" href="https://huashengriji.work">省钱小妙招：淘宝，拼多多，京东多平台合一返利app</a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'app',
  data() {
    return {
      list: [
        {
          text: '关闭win10防护',
          router: 'CloseAntivirus',
        },
        {
          text: '开启win10更新',
          router: 'EnableUpdate',
        },
        {
          text: '百度云加速教程',
          router: 'BaiDuYun',
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
  #app {
    position: relative;

    .box-card {
      opacity 0.7;
      position fixed;
      z-index 8000;
      width 200px;
      top 50px;
      right 20px

      .text {
        cursor pointer;
        padding-bottom 10px

        &:hover {
          text-decoration underline
          color #3a8ee6
        }
      }
    }

    .maker {
      color: #a94442;
      font-size: 20px;
      font-weight: bolder
    }

    .tips {
      padding-top 20px;
      font-size 24px

      a {
        &:hover {
          text-decoration underline
        }
      }
    }
  }
</style>
