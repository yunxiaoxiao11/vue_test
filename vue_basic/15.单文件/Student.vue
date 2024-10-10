<template>
  <div>
      <h2>学生名称：{{ studentName }}</h2>
      <h2>学学生姓名：{{ studentAge }}</h2>
    </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {
      studentName: 'yuv',
      studentAge: 28
    }
  }
}
</script>

<style>

</style>