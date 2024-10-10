<script>
// 引入混合组件
// import {mix} from '../mixin'

export default {
  name: 'School',
  data() {
    return {
      name: '广东海洋大学',
      address: '海大路一号'
    }
  },
  // mixins: [mix]
}
</script>

<template>
  <div class="student">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<style>
.student {
  background-color: cornflowerblue;
}
</style>