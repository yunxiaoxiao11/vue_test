<script>
import Count from "@/components/Count.vue";

export default {
  name: "App",
  components: {Count},
  data() {
    return {
      sum: 0
    }
  }
};
</script>

<template>
  <div class="container">
    <Count/>
  </div>
</template>

<style>
button {
  margin-left: 5px;
}
</style>