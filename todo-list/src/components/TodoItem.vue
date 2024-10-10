<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.isCompleted"
        @change="reserveChange(todo.id)"
      />
      <!--      不推荐使用-->
      <!--      <input type="checkbox" v-model="todo.isCompleted"/>-->
      <span v-show="!todo.isEdit">{{ todo.content }}</span>
      <input
        type="text"
        ref="editInput"
        :value="todo.content"
        v-show="todo.isEdit"
        @keyup.enter="editFinish(todo, $event)"
        @blur="editFinish(todo, $event)"
      />
    </label>
    <button class="btn btn-danger" @click="removeItem(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="editItem(todo)">
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    reserveChange(id) {
      this.$bus.$emit("changeTodoList", id);
    },
    removeItem(id) {
      if (confirm("确认删除吗?")) pubsub.publish("remove", id);
    },
    editItem(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.editInput.focus();
      });
    },
    editFinish(todo, event) {
      todo.isEdit = false;
      if (!event.target.value.trim()) {
        return alert("输入不能为空!");
      }
      this.$bus.$emit("updateTodo", todo.id, event.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #cccccc;
}

li:hover button {
  display: block;
}
</style>
