const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      confirmedName: '',
      //   fullname: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    //     name(value) {
    //       if (value === '') {
    //         this.fullname = '';
    //       } else {
    //         this.fullname = value + ' ' + this.lastName;
    //       }
    //     },
    //     lastName(value) {
    //       if (value === '') {
    //         this.fullname = '';
    //       } else {
    //         this.fullname = this.name + ' ' + value;
    //       }
    //     },
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '' || this.lastName === '') {
        return this.name;
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    sub(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    outputFullname() {
      console.log('Running again...');
      if (this.name === '') {
        return this.name;
      }
      return this.name + ' ' + 'ooppoopp';
    },
  },
});

app.mount('#events');
