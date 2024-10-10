<script>
import School from './components/School.vue'

export default {
  name: 'App',
  components: {School},
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
    <button @click="showDOM">点击展示上面的DOM元素</button>
    <School/>
  </div>
</template>

<style>
</style>