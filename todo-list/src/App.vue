<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <InputItem @add2TodoList="add2TodoList" />
        <TodoList :todoLists="todoLists" />
        <TotalOperation
          :todoLists="todoLists"
          @totalCheckedChanged="totalCheckedChanged"
          @clearFinished="clearFinished"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import InputItem from "./components/InputItem.vue";
import TodoList from "@/components/TodoList.vue";
import TotalOperation from "@/components/TotalOperation.vue";

export default {
  name: "App",
  components: { InputItem, TodoList, TotalOperation },
  data() {
    return {
      todoLists: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    add2TodoList(value) {
      // console.log("app组件接收到了", value);
      this.todoLists.unshift(value);
    },
    changeTodoList(id) {
      this.todoLists.forEach((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    },
    updateTodo(id, content) {
      this.todoLists.forEach((todo) => {
        if (todo.id === id) {
          todo.content = content;
        }
      });
    },
    remove(_, id) {
      this.todoLists = this.todoLists.filter((todo) => todo.id !== id);
    },
    totalCheckedChanged(checked) {
      this.todoLists.forEach((todo) => (todo.isCompleted = checked));
    },
    clearFinished() {
      this.todoLists = this.todoLists.filter((todo) => !todo.isCompleted);
    },
  },
  watch: {
    todoLists: {
      deep: true,
      handler(newvalue, oldvalue) {
        localStorage.setItem("todos", JSON.stringify(newvalue));
      },
    },
  },
  mounted() {
    this.$bus.$on("changeTodoList", this.changeTodoList);
    this.$bus.$on("updateTodo", this.updateTodo);
    this.pubId = pubsub.subscribe("remove", this.remove);
    // this.$bus.$on("remove", this.remove);
  },
  beforeDestroy() {
    this.$bus.$off("changeTodoList");
    this.$bus.$on("updateTodo");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: dodgerblue;
  margin-right: 3px;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
