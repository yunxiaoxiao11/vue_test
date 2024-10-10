<template>
  <div>
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生地址：{{ studentAddress }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MyStudent',
  data() {
    return {
      studentName: 'yuv',
      studentAddress: 28
    }
  }
}
</script>

<style>

</style>