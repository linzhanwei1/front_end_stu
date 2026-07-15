const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    result() {
      console.log('result is changing.');
      const that = this;
      setTimeout(function () {
        console.log('timer is run.');
        that.number = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet!';
      } else if (this.number > 37) {
        return 'Too mush!';
      } else {
        return this.number;
      }
    },
  },
  methods: {
    addNumber(num) {
      return (this.number += num);
    },
  },
});

app.mount('#assignment');
