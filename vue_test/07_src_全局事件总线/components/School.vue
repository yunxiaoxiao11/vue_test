<template>
  <div class="student">
    <h2 class="test_color">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "广东海洋大学",
      address: "海大路一号",
    };
  },
  mounted() {
    this.$bus.$on("hello", (data) => {
      console.log("School组件，接收到了数据", data);
    });
  },
};
</script>

<style scoped lang="less">
.student {
  background-color: cornflowerblue;

  .test_color {
    color: orange;
  }
}
</style>
