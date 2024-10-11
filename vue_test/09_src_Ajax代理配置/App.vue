<script>
import axios from 'axios'

export default {
  name: "App",
  methods: {
    getStudents() {
      // axios.get('http://localhost:8080/students').then(
      axios.get('http://localhost:8080/api/students').then(
          response => {
            console.log('请求成功了', response.data);
          },
          error => {
            console.log('请求失败了', error.message)
          }
      )
    },
    getCars() {
      axios.get('http://localhost:8080/2api2/cars').then(
          response => {
            console.log('请求成功了', response.data);
          },
          error => {
            console.log('请求失败了', error.message)
          }
      )
    }

  }
};
</script>

<template>
  <div>
    <button @click="getStudents">点击获取学生信息</button>
    <button @click="getCars">点击获取汽车信息</button>
  </div>
</template>

<style></style>