<template>
  <div id="app">
    <header-app />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <router-view />
  </div>
</template>
<script>
import header from "@/components/header.vue";
export default {
  name: "App",
  components: {
    "header-app": header,
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600&display=swap");
body {
  background: #fafafa;
}
#app {
  font-family: "Comfortaa";
  font-weight: 500;
  width: 80%;
  margin: 0 auto;
}
</style>
