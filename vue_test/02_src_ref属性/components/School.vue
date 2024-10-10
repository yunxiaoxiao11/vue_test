<script>
export default {
  name: 'School',
  data() {
    return {
      name: '广东海洋大学',
      address: '海大路一号',
      msg:'欢迎参观海洋大学'
    }
  }
}
</script>

<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<style>
.school {
  background-color: cornflowerblue;
}
</style>