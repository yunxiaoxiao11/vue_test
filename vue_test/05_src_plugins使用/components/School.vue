<script>

export default {
  name: 'School',
  data() {
    return {
      name: '广东海洋大学',
      address: '海大路一号'
    }
  },
}
</script>

<template>
  <div class="student">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<style>
.student {
  background-color: cornflowerblue;
}
</style>