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
      <div class="listItem">
        <div class="bigBox">
          <div class="picContent" id="aa">
            <img :src="mmlogo" alt="" class="mainImg">
            <img :src="logo" alt="" class="imgLogo">
          </div>
        </div>
        <el-button @click="getPicById('aa')">下载图片</el-button>
      </div>
      <div class="listItem" v-for="(item,index) in dataList" :key="index">
        <div class="bigBox">
          <div class="picContent" :id="('mmPic'+index)">
            <img :src="item.url" alt="" class="mainImg">
            <img :src="logo" alt="" class="imgLogo">
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

const logo = require('../assets/img/mm/logo.png');
const mmlogo = require('../assets/img/mm/mmlogo.png');
const dhsOne = require('../assets/img/mm/dhs/dhs-1.jpg');
const dhsTwo = require('../assets/img/mm/dhs/dhs-2.jpg');

export default {
  name: 'MemberMark',
  data() {
    return {
      title: '商品详情列表',
      logo,
      mmlogo,
      dataList: [
        {
          url: dhsOne,
          title: 'aaa',
        },
        {
          url: dhsTwo,
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

        .imgLogo {
          height 40px;
          position: absolute;
          top: 0;
          left 0;
          background black;
          padding 5px;
        }

        .picContent {
          background-color #2aabd2
          box-sizing border-box
          width 480px;
          height 480px;
          overflow hidden
          position relative
          display flex

          .mainImg {
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
