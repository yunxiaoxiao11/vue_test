<script>
// import {mix} from '../mixin'

export default {
  name: 'Student',
  data() {
    return {
      name: 'yuv',
      sex: '男'
    }
  },
  // mixins: [mix]
}
</script>

<template>
  <div class="student">
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<style>
.student {
  background-color: cornflowerblue;
}
</style>