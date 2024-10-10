<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {Student},
  data() {
    return {msg: '欢迎参观海洋大学'}
  },
  methods: {
    showDOM() {
      console.log(this.$refs.h1_title)
    }
  }
}
</script>

<template>
  <div>
    <h1 v-text="msg" ref="h1_title"></h1>
    <Student name='广东海洋大学' sex='海大路一号' :age='17'/>
  </div>
</template>

<style>
</style>