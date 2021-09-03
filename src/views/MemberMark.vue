/**
* @author  sparkHou
* @date 2021-09-03 15:28
* @Description:
*/
<template>
  <div class="MemberMark g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <div class="dataList">
      <div class="listItem" v-for="(item,index) in dataList" :key="index">
        <div class="bigBox">
          <div class="picContent" :id="('mmPic'+index)">
            <img :src="item.url" alt="">
          </div>
        </div>
        <br>
        <div class="info">
          {{item.title}}
        </div>
        <br>
        <el-button @click="getPicById(('mmPic'+index))">下载图片</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image';

const ADOBEAE = require('../assets/img/detail/ADOBEAE.svg');

export default {
  name: 'MemberMark',
  data() {
    return {
      title: '商品详情列表',
      dataList: [
        {
          url: ADOBEAE,
          title: 'aaa',
        },
      ],
    };
  },
  methods: {
    getPicById(id) {
      domtoimage.toPng(document.getElementById(id), { quality: 1 })
        .then((dataUrl) => {
          const a = document.createElement('a');
          a.download = `xds${new Date().getTime()}`;// 这边是文件名，可以自定义
          a.href = dataUrl;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        })
        .catch((error) => {
          console.error('oops, something went wrong!', error);
        });
    },
  },
};
</script>

<style scoped lang="stylus">
  .MemberMark {
    .dataList {
      width 100%;
      display flex;
      align-items center
      flex-wrap wrap

      .listItem {
        display block
        width 500px;
        padding-bottom 10px;

        .bigBox {
          width 480px;
          height 480px;
          overflow hidden
          margin 0 auto
        }

        .picContent {
          background-color #2aabd2
          box-sizing border-box
          width 480px;
          height 480px;
          overflow hidden
          position relative
          display flex

          img {
            width 100%
            height 100%
          }
        }

        .info {
          font-size 14px
          font-weight bolder
          color black
        }
      }
    }
  }
</style>
