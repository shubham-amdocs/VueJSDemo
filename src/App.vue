<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <md-avatar class="md-avatar-icon">
      <md-icon>Y</md-icon>
    </md-avatar>
    {{ hello }}
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      books: 2,
      hello: "hello from app",
    };
  },

  //HOOKS
  beforeMount() {
    console.warn("beforeMount");
    console.log(`no of books : ${this.$data.books}`);
  },
  mounted() {
    console.warn("mounted");
    this.$data.hello = "hello from mounted";
  },
  beforeCreate() {
    console.warn("beforecreate");
    console.log(`books is of type ${typeof this.books}`);
  },
  created() {
    console.warn("created");
    console.log(`books is of type ${typeof this.books}`);
  },

  beforeUpdate() {
    console.warn("beforeUpdate");
  },
  updated() {
    console.warn("updated");
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
  margin-top: 60px;
}
</style>
