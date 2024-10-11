<template>
  <div class="todo-header">
    <input
        type="text"
        placeholder="请输入你的任务名称，按回车键确认"
        @keyup.enter="addTodo"
        v-model="content"
    />
  </div>
</template>

<script>
import {nanoid} from "nanoid";
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "InputItem",
  components: {TodoItem},
  data() {
    return {
      content: "",
    };
  },
  // props: ["add2TodoList"],
  methods: {
    addTodo() {
      if (!this.content.trim()) {
        this.content = "";
        return alert("输入不能为空");
      }
      const todoObj = {
        id: nanoid(),
        content: this.content,
        isCompleted: false,
      };
      // this.add2TodoList(todoObj);
      this.$emit("add2TodoList", todoObj);
      this.content = "";
      // event.target.value = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
  0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
