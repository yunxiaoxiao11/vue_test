<script>
export default {
  name: 'Student',
  data() {
    return {
      msg: '欢迎yuv',
      myAge: this.age
    }
  },
  // props: ['name', 'age', 'sex'] // 简单接受
  // 接受的同时对类型进行限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // }
  // 接受同时进行类型和必要性以及默认值限制
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
      default: 88
    },
    sex: {
      type: String,
      required: true,
    },
  },
  methods: {
    addAge() {
      this.myAge++
    }
  }
}
</script>

<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="addAge">点击让年龄加一</button>
  </div>
</template>

<style>
.student {
  background-color: cornflowerblue;
}
</style>