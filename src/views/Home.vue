<template>
  <div class="home">
    <p>
      <span id="time">{{num}}</span>秒后跳转到花生日记主页
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
  }

  #time {
    color: red;
  }

</style>
