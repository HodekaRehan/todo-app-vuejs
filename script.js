let id = 0;

const app = Vue.createApp({
  data() {
    return {
      title: "Todo App",
      newTask: "",
      hideCompleted: false,
      tasks: [],
    };
  },

  computed: {
    filteredTasks() {
      return this.hideCompleted
        ? this.tasks.filter((t) => !t.completed)
        : this.tasks;
    },
  },

  methods: {
    addTask() {
      this.tasks.push({ id: id++, text: this.newTask, completed: false });
      this.newTask = "";
    },

    removeTask(task) {
      this.tasks = this.tasks.filter((t) => t !== task);
    },
  },
});
