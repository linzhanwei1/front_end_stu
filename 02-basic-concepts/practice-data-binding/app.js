const app = Vue.createApp({
  data() {
    return {
      name: 'Garrod Shadowsong',
      age: 18,
      imageUrl:
        'https://pic1.zhimg.com/50/v2-c6f00e8ebc7e5e424f1f74545259ebee_720w.jpg?source=1940ef5c',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});
app.mount('#assignment');
