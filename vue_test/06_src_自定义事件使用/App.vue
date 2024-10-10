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
  methods: {
    sendName(name) {
      console.log("学校名字", name);
    },
    getStudentName(name) {
      console.log("学生名字", name);
      this.studentName = name;
    },
    show() {
      alert("hello");
    },
  },
  mounted() {
    // setTimeout(() => {
    // this.$refs.student.$on("event_test", this.getStudentName);
    // }, 3000);
  },
};
</script>

<template>
  <div>
    <h1 ref="h1_title">{{ msg }}{{ studentName }}</h1>
    <!--    传递函数属性-->
    <School :sendName="sendName" />
    <!--    绑定自定义事件，通过自定义来用来传递参数实现信息传递-->
    <!--    <Student @event_test="getStudentName" />-->
    <!--    -->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<style></style>
