<<<<<<< HEAD
<template>
  <div class="container">
    <h1 class="text-center m-5">My Vue Todo App</h1>
    <form>
      <div class="d-flex">
        <input
          class="form-control"
          type="text"
          placeholder="Enter task"
          v-model="task"
        />
        <button
          @click.prevent="addTask(this.editTask)"
          class="btn btn-warning rounded-0"
        >
          submit
        </button>
      </div>
    </form>
    <!-- table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">status</th>
          <th scope="col" class="text-center">update</th>
          <th scope="col" class="text-center">delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span :class="{ finished: task.status === 'finished' }">
              {{ task.name }}
            </span>
          </td>
          <td style="width: 120px">
            <span
              class="pointer"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-warning': task.status === 'in-progress',
                'text-success': task.status === 'finished',
              }"
              @click="changeStatus(index)"
            >
              {{ firstCharUpperCase(task.status) }}
            </span>
          </td>
          <td>
            <div class="text-center pointer" @click="updateTask(index)">
              <i class="fa fa-pen"></i>
            </div>
          </td>
          <td>
            <div class="text-center pointer" @click="deleteTask(index)">
              <i class="fa fa-trash"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "FirstApp",
  data() {
    return {
      task: "",
      editTask: null,
      statusType: ["to-do", "in-progress", "finished"],
      tasks: [
        {
          name: "Buy banana from the supermarket",
          status: "to-do",
        },
        {
          name: "Eat chocolate in week",
          status: "in-progress",
        },
        {
          name: "Read quran",
          status: "finished",
        },
      ],
    };
  },
  methods: {
    addTask(editTask) {
      if (this.task === "") return;
      if (this.editTask === null) {
        this.tasks.push({ name: this.task, status: "to-do" });
      } else {
        this.tasks[editTask].name = this.task;
        this.editTask = null;
      }
      this.task = "";
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    updateTask(index) {
      this.task = this.tasks[index].name;
      this.editTask = index;
    },
    changeStatus(index) {
      let statusIndex = this.statusType.indexOf(this.tasks[index].status);
      if (statusIndex === 2) {
        statusIndex = 0;
      } else {
        ++statusIndex;
      }
      this.tasks[index].status = this.statusType[statusIndex];
      console.log(statusIndex);
    },
    firstCharUpperCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.finished {
  text-decoration: line-through;
}
</style>
=======
<template>
  <div class="container">
    <h1 class="text-center m-5">My Vue Todo App</h1>
    <form>
      <div class="d-flex">
        <input
          class="form-control"
          type="text"
          placeholder="Enter task"
          v-model="task"
        />
        <button
          @click.prevent="addTask(this.editTask)"
          class="btn btn-warning rounded-0"
        >
          submit
        </button>
      </div>
    </form>
    <!-- table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">status</th>
          <th scope="col" class="text-center">update</th>
          <th scope="col" class="text-center">delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span :class="{ finished: task.status === 'finished' }">
              {{ task.name }}
            </span>
          </td>
          <td style="width: 120px">
            <span
              class="pointer"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-warning': task.status === 'in-progress',
                'text-success': task.status === 'finished',
              }"
              @click="changeStatus(index)"
            >
              {{ firstCharUpperCase(task.status) }}
            </span>
          </td>
          <td>
            <div class="text-center pointer" @click="updateTask(index)">
              <i class="fa fa-pen"></i>
            </div>
          </td>
          <td>
            <div class="text-center pointer" @click="deleteTask(index)">
              <i class="fa fa-trash"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "FirstApp",
  data() {
    return {
      task: "",
      editTask: null,
      statusType: ["to-do", "in-progress", "finished"],
      tasks: [
        {
          name: "Buy banana from the supermarket",
          status: "to-do",
        },
        {
          name: "Eat chocolate in week",
          status: "in-progress",
        },
        {
          name: "Read quran",
          status: "finished",
        },
      ],
    };
  },
  methods: {
    addTask(editTask) {
      if (this.task === "") return;
      if (this.editTask === null) {
        this.tasks.push({ name: this.task, status: "to-do" });
      } else {
        this.tasks[editTask].name = this.task;
        this.editTask = null;
      }
      this.task = "";
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    updateTask(index) {
      this.task = this.tasks[index].name;
      this.editTask = index;
    },
    changeStatus(index) {
      let statusIndex = this.statusType.indexOf(this.tasks[index].status);
      if (statusIndex === 2) {
        statusIndex = 0;
      } else {
        ++statusIndex;
      }
      this.tasks[index].status = this.statusType[statusIndex];
      console.log(statusIndex);
    },
    firstCharUpperCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.finished {
  text-decoration: line-through;
}
</style>
>>>>>>> c9e38324796857ae1556d0162ceb56c2973a5fc1
