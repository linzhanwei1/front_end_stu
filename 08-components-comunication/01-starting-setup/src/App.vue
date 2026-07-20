<template>
  <div>
    <active-user :user-name="user.name" :user-age="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Lucy',
        age: 18,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      //   console.log(typeof name);
      //   console.log(typeof age);
      this.user = { name: name, age: +age };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
