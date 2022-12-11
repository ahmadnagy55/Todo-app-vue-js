<template>
  <main class="app container">
    <section class="greeting">
      <h2 class="title">
        what's up, <input type="text" placeholder="Name here" v-model="name" />
      </h2>
    </section>
    <section class="create-todo">
      <h3>CREATE TODO</h3>
      <form @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <input
          type="text"
          placeholder="e.g. make a video"
          v-model="input_content"
        />
        <h4>pick a category</h4>
        <div class="options">
          <label>
            <input
              type="radio"
              name="category"
              value="business"
              v-model="input_category"
            />
            <span class="bubble business"></span>
            <div>Business</div>
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="personal"
              v-model="input_category"
            />
            <span class="bubble personal"></span>
            <div>Personal</div>
          </label>
        </div>
        <input type="submit" value="Add todo" />
      </form>
    </section>

    <section class="todo-list">
      <h3>TODO LIST</h3>
      <div class="list">
        <div
          v-for="(todo, index) in todos_asc"
          :class="`todo-item ${todo.done && 'done'}`"
          :key="index"
        >
          <label>
            <input type="checkbox" v-model="todo.done" />
            <span :class="`bubble ${todo.category}`"></span>
          </label>

          <div class="todo-content">
            <input type="text" v-model="todo.content" />
          </div>

          <div class="actions">
            <button class="delete" @click="removeTodo(todo)">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref, computed, onMounted, watch } from "vue";
import "./../assets/main.css";
const todos = ref([]);
const name = ref("");
const input_content = ref("");
const input_category = ref(null);

const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return b.createAt - a.createAt;
  })
);
const addTodo = () => {
  if (input_content.value.trim() === "" || input_category.value === null) {
    return;
  }
  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    createAt: new Date().getTime(),
  });
  input_content.value = "";
  input_category.value = null;
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};
watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  { deep: true }
);
watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});
onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});
// export default {
//   name: "SecondApp",
//   data() {
//     return {
//       task: "",
//       editTask: null,
//       statusType: ["to-do", "in-progress", "finished"],
//       tasks: [
//         {
//           name: "Buy banana from the supermarket",
//           status: "to-do",
//         },
//         {
//           name: "Eat chocolate in week",
//           status: "in-progress",
//         },
//         {
//           name: "Read quran",
//           status: "finished",
//         },
//       ],
//     };
//   },
//   methods: {
//     addTask(editTask) {
//       if (this.task === "") return;
//       if (this.editTask === null) {
//         this.tasks.push({ name: this.task, status: "to-do" });
//       } else {
//         this.tasks[editTask].name = this.task;
//         this.editTask = null;
//       }
//       this.task = "";
//     },
//     deleteTask(index) {
//       this.tasks.splice(index, 1);
//     },
//     updateTask(index) {
//       this.task = this.tasks[index].name;
//       this.editTask = index;
//     },
//     changeStatus(index) {
//       let statusIndex = this.statusType.indexOf(this.tasks[index].status);
//       if (statusIndex === 2) {
//         statusIndex = 0;
//       } else {
//         ++statusIndex;
//       }
//       this.tasks[index].status = this.statusType[statusIndex];
//       console.log(statusIndex);
//     },
//     firstCharUpperCase(str) {
//       return str.charAt(0).toUpperCase() + str.slice(1);
//     },
//   },
// };
</script>

<style scoped>
:root {
  --primary: #ea40a4;
  --business: #3a82ee;
  --personal: var(--primary);
  --light: #eee;
  --grey: #888;
  --dark: #313154;
  --danger: #ff5b57;

  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  --business-glow: 0px 0px 4px rgba(58, 130, 238, 0.75);
  --personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "montserrat", sans-serif;
}

input:not([type="radio"]):not([type="checkbox"]),
button {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: initial;
}

body {
  background: var(--light);
  color: var(--dark);
}

section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5em;
}

h3 {
  color: var(--dark);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

h4 {
  color: var(--grey);
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.greeting .title {
  display: flex;
}

.greeting .title input {
  margin-left: 0.5rem;
  flex: 1 1 0%;
  min-width: 0;
}

.greeting .title,
.greeting .title input {
  color: var(--dark);
  font-size: 1.5rem;
  font-weight: 700;
}

.create-todo input[type="text"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: var(--dark);
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1.5rem;
}

.create-todo .options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1.5rem;
}

.create-todo .options label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  cursor: pointer;
}

input[type="radio"],
input[type="checkbox"] {
  display: none;
}

.bubble {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--business);
  box-shadow: var(--business-glow);
}

.bubble.personal {
  border-color: var(--personal);
  box-shadow: var(--personal-glow);
}

.bubble::after {
  content: "";
  display: block;
  opacity: 0;
  width: 0px;
  height: 0px;
  background-color: var(--business);
  box-shadow: var(--business-glow);
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}

.bubble.personal::after {
  background-color: var(--personal);
  box-shadow: var(--personal-glow);
}

input:checked ~ .bubble::after {
  width: 10px;
  height: 10px;
  opacity: 1;
}

.create-todo .options label div {
  color: var(--dark);
  font-size: 1.125rem;
  margin-top: 1rem;
}

.create-todo input[type="submit"] {
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  color: #fff;
  background-color: var(--primary);
  border-radius: 0.5rem;
  box-shadow: var(--personal-glow);
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.create-todo input[type="submit"]:hover {
  opacity: 0.75;
}

.todo-list .list {
  margin: 1rem 0;
}

.todo-list .todo-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  margin-bottom: 1rem;
}

.todo-item label {
  display: block;
  margin-right: 1rem;
  cursor: pointer;
}

.todo-item .todo-content {
  flex: 1 1 0%;
}

.todo-item .todo-content input {
  color: var(--dark);
  font-size: 1.125rem;
}

.todo-item .actions {
  display: flex;
  align-items: center;
}

.todo-item .actions button {
  display: block;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.todo-item .actions button:hover {
  opacity: 0.75;
}

.todo-item .actions .edit {
  margin-right: 0.5rem;
  background-color: var(--primary);
}

.todo-item .actions .delete {
  background-color: var(--danger);
}

.todo-item.done .todo-content input {
  text-decoration: line-through;
  color: var(--grey);
}
</style>
