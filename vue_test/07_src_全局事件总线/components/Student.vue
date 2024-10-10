<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">点击发送学生名称给学校</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "yuv",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit("hello", this.name);
    },
  },
};
</script>

<style>
.student {
  background-color: cornflowerblue;
}
</style>
