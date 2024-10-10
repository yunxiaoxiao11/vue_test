<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!--      <input type="checkbox" :checked="isTotal" @change="totalChange" />-->
      <input type="checkbox" v-model="isTotal" />
    </label>
    <span>
      <span>已完成{{ finish }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoOperation",
  props: ["todoLists"],
  computed: {
    total() {
      return this.todoLists.length;
    },
    finish() {
      return this.todoLists.reduce(
        (acc, current) => acc + (current.isCompleted ? 1 : 0),
        0
      );
    },
    isTotal: {
      get() {
        return this.finish === this.total && this.total > 0;
      },
      set(value) {
        // this.totalCheckedChanged(value);
        this.$emit("totalCheckedChanged", value);
      },
    },
  },
  methods: {
    totalChange(event) {
      // this.totalCheckedChanged(event.target.checked);
      this.$emit("totalCheckedChanged", event.target.checked);
    },
    clear() {
      // this.clearFinished();
      this.$emit("clearFinished");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
