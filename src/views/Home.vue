<template>
  <div class="home">
    <p>
      <span id="time">{{num}}</span>秒后跳转到省钱返利app
    </p>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      time: '',
      num: 5,
    };
  },
  created() {
  },
  mounted() {
    this.time = setInterval(() => {
      this.count();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.time);
  },
  methods: {
    count() {
      if (!this.num) {
        window.open('https://huashengriji.work', '_self');
        return;
      }
      this.num -= 1;
    },
  },
};
</script>
<style scoped lang="stylus">
  p {
    text-align: center;
    padding 40px;
    font-family: "Helvetica Neue", Helvetica,
      "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size 20px;
    font-weight bolder
  }

  #time {
    color: red;
  }

</style>
