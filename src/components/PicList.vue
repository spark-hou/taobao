/**
* @author  sparkHou
* @date 2021-03-16 22:49
* @Description:
*/
<template>
  <div class="PicList">
    <el-carousel indicator-position="outside" height="400px">
      <el-carousel-item v-for="(item,index) in list" :key="index">
        <div class="content">
          <div class="info">
            <span class="g-red g-h4">
              {{index+1}}.
            </span>
            {{item.text||''}}
            <div v-if="item.tips" @click="item.cb" class="g-red g-cursor">
              {{item.tips}}
            </div>
          </div>
          <el-image
            v-if="item.url"
            style="width: 400px"
            :src="item.url"
            :z-index="10000"
            :preview-src-list="[item.url]">
          </el-image>
        </div>

      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'PicList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="stylus">
  .PicList {
    .content {
      width 100%;
      height: 100%
      display flex;
      align-items center;
      justify-content center

      .info {
        width 400px;
        padding 20;
        word-break break-word;
      }
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }

</style>
