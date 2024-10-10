<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {Student, School},
  data() {
    return {msg: '欢迎参观海洋大学'}
  },
}
</script>

<template>
  <div>
    <h1 v-text="msg" ref="h1_title"></h1>
    <Student/>
    <School/>
  </div>
</template>

<style>
</style>