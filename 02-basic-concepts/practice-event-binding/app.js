const app = Vue.createApp({
  data() {
    return {
      message1: '',
      message2: '',
      confirmedMessage1: '',
      confirmedMessage2: '',
    };
  },
  methods: {
    showAlert() {
      alert('This is a alert!');
    },
    showMessage1(event) {
      this.message1 = event.target.value;
    },
    confirmInput1() {
      this.confirmedMessage1 = this.message1;
    },
    showMessage2(event) {
      this.message2 = event.target.value;
    },
    confirmInput2() {
      this.confirmedMessage2 = this.message2;
    },
  },
});

app.mount('#assignment');
