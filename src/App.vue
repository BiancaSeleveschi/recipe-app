<template>
  <div id="app" :style="{ 'background-image': `url(${image})` }">
    <nav>
      <router-link class="m-2" to="/">Home</router-link>
      <router-link class="m-2" to="/recipe/create">Add recipe</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      image: require("@/assets/image.png"),
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("@/assets/image.png");
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
div html {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
html {
  background-image: url("@/assets/image.png");
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
