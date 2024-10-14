<script>
import {mapState, mapGetters} from "vuex";

export default {
  name: 'Count',
  data() {
    return {
      num: 1,
    }
  },
  computed: {
    // 手动编写
    // sum() {
    //   return this.$store.state.sum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },
    ...mapState(['sum', 'school', 'subject']),
    ...mapGetters(['bigSum']),
    // bigSum() {
    //   return this.$store.getters.bigSum
    // },
  },
  methods: {
    increment() {
      this.$store.commit('add', this.num)
    },
    decrement() {
      this.$store.commit('sub', this.num)
    },
    incrementOdd() {
      this.$store.dispatch('addOdd', this.num)
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.num)
    }
  }
}
</script>

<template>
  <div>
    <h1>当前求和值为：{{ sum }}</h1>
    <h1>当前求和放大10倍后值为：{{ bigSum }}</h1>
    <h1>我在{{ school }}学习{{ subject }}</h1>
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