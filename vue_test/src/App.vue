<script>
import List from "@/components/List.vue";
import Search from "@/components/Search.vue";

export default {
  name: "App",
  components: {Search, List},
};
</script>

<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<style>
</style>