<template>
  <div class="Activation g-container">
    <div class="g-pageHead">
      {{title}}
    </div>
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="1.win10许可证教程(永久激活)" name="1"/>
      <el-tab-pane label="2.win10激活失败怎么办？" name="2"/>
      <el-tab-pane label="3.查看激活成功的方法" name="3"/>
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
<!--          <a href="https://yasuo.360.cn/"-->
<!--             target="_blank"-->
<!--             class="download">-->
<!--            点击下载&#45;&#45;360压缩-->
<!--          </a>   -->
          <a :href="`${$path}/file/360zip_setup.exe`"
             class="download">
            点击下载--360压缩
          </a>
        </div>
        <br>
        <div class="block">
          <a :href="`${$path}/file/永久激活工具.zip`"
             download="永久激活工具.zip"
             class="download">
            点击下载--永久激活工具
          </a>
        </div>
        <div class="block">
          <a :href="`${$path}/file/micro2019.01.18.exe`"
             download="辅助工具.exe"
             class="download">
            点击下载--辅助工具
          </a>
        </div>
      </div>
      <div v-if="activeName==='2'">
        <PicList :list="list2"></PicList>
      </div>
      <div v-if="activeName==='3'">
        <PicList :list="list3"></PicList>
      </div>
    </div>
  </div>
</template>
<script>
const img4 = require('../assets/img/win10/4.jpg');
const img5 = require('../assets/img/win10/5.jpg');
const success = require('../assets/img/win10/success.jpg');
const noNeed = require('../assets/img/win10/noNeed.jpg');
const fail = require('../assets/img/win10/fail.jpg');
const img1 = require('../assets/img/win10Fail/1.jpg');
const img7 = require('../assets/img/win10/7.jpg');
const img8 = require('../assets/img/win10/8.jpg');
const img6 = require('../assets/img/win10/6.jpg');

export default {
  name: 'Activation',
  data() {
    return {
      activeName: '1',
      title: '工具使用教程',
      list1: [
        {
          url: img4,
          text: '把整个文件夹解压到桌面(无法解压的，推荐使用360解压软件),没有安装的可以点击下方的按钮下载',
        },
        {
          url: img5,
          text: '运行软件-点击patch按钮进行激活',
        },
        {
          url: success,
          text: '出现以下情况，说明已经成功（第一次失败，请尝试第二次，第二次也失败的的话，请看第二个分页）',
          tips: '失败看我（点击）',
          cb: () => {
            this.activeName = '2';
          },
        },
        {
          url: noNeed,
          text: '出现以下情况，也说明已经成功',
        },
        {
          url: fail,
          text: '出现以下情况（弹窗中有HWID.log字样），说明已经失败了',
          tips: '失败看我（点击）',
          cb: () => {
            this.activeName = '2';
          },
        },
        {
          text: '激活成功后，可以查看激活时效',
          tips: '查看方法（点击）',
          cb: () => {
            this.activeName = '3';
          },
        },
      ],
      list2: [
        {
          text: '多数电脑失败是因为没有开启系统更新，可以开启更新后再尝试，（若果还是失败，请看下一步）',
          tips: '查看开启系统更新的方法',
          cb: () => {
            this.$router.push('EnableUpdate');
          },
        },
        {
          text: '把解压到桌面的文件夹里的HWID.log文件发送给店长或者（打开此文件，拖动到最下面，截图给店长）',
          url: img1,
        },
      ],
      list3: [
        {
          text: '查看激活成功的方法，按win+r快捷键调出运行，输入slmgr.vbs -xpr ，回车',
          url: img8,
        },
        {
          text: '查看激活成功的方法，按win+r快捷键调出运行，输入slmgr.vbs -xpr ，回车',
          url: img7,
        },
        {
          text: '查看激活成功的方法，按win+r快捷键调出运行，输入slmgr.vbs -xpr ，回车',
          url: img6,
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
</style>
