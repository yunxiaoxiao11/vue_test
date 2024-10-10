<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "欢迎参观海洋大学: ",
      studentName: "",
    };
  },
};
</script>

<template>
  <div>
    <h1 ref="h1_title">{{ msg }}{{ studentName }}</h1>
    <School />
    <Student />
  </div>
</template>

<style></style>
