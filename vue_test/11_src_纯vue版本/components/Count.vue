<script>
export default {
  name: 'Count',
  data() {
    return {
      num: 1,
      sum: 0,
    }
  },
  methods: {
    increment() {
      this.sum += this.num
    },
    decrement() {
      this.sum -= this.num
    },
    incrementOdd() {
      if (this.num % 2) {
        return;
      } else {
        this.sum += this.num
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.num
      }, 500)
    }
  }
}
</script>

<template>
  <div>
    <h1>当前求和值为：{{ sum }}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数是+</button>
    <button @click="incrementWait">等等后+</button>
  </div>
</template>

<style scoped>

</style>