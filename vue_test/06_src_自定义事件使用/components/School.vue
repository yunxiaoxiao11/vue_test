<script>
export default {
  name: "School",
  data() {
    return {
      name: "广东海洋大学",
      address: "海大路一号",
    };
  },
  props: ["sendName"],
  methods: {
    sendStudentName() {
      this.sendName(this.name);
    },
  },
};
</script>

<template>
  <div class="student">
    <h2 class="test_color">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendStudentName">点击发送学校名称</button>
  </div>
</template>

<style scoped lang="less">
.student {
  background-color: cornflowerblue;

  .test_color {
    color: orange;
  }
}
</style>
