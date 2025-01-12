<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  mounted() {
    this.$router.push('/home');
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+15&display=swap');

body {
  padding-top: 75px;
}
</style>
