<script>

export default {
  name: 'Student',
  data() {
    return {
      name: 'yuvvvvvvv',
      sex: '男'
    }
  },
  methods: {
    showName() {
      this.hello()
    }
  }
}
</script>

<template>
  <div class="student">
    <h2 @click="showName">学生姓名：{{ name | slice_str}}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<style>
.student {
  background-color: cornflowerblue;
}
</style>