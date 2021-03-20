<template>
  <div class="home">
    这是一个空白页面
    <el-button @click="go"></el-button>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {};
  },
  created() {
  },
  methods: {
    go() {
      this.$router.push('AdobeFamily');
    },
  },
};
</script>
