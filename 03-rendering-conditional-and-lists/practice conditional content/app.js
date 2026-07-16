const app = Vue.createApp({
  data() {
    return {
      showList: true,
      taskInfo: '',
      tasks: [],
    };
  },
  computed: {
    showButtonStatus() {
      return this.showList ? 'Hide' : 'Show';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInfo);
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
});

app.mount('#assignment');
