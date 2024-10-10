<script>
export default {
  name: "Student",
  data() {
    return {
      name: "yuvvvvvvv",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    showName() {
      this.hello();
    },
    sendName() {
      this.$emit("event_test", this.name);
      this.$emit("click");
    },
    unbind_event() {
      this.$off(["event_test"]);
      // this.$off();
    },
    add() {
      console.log("点击了自增按钮");
      this.number++;
    },
    destory_com() {
      this.$destroy();
    },
  },
};
</script>

<template>
  <div class="student">
    <h2 @click="showName">学生姓名：{{ name | slice_str }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>{{ number }}</h2>
    <button @click="add">点击让number++</button>
    <button @click="sendName">点击发送学生名称</button>
    <button @click="unbind_event">点击取消绑定事件</button>
    <button @click="destory_com">点击销毁student组件</button>
  </div>
</template>

<style>
.student {
  background-color: cornflowerblue;
}
</style>
