<template>
  <nav class="bg-yellow-500 flex justify-evenly">
    <router-link to="/">
      主页
    </router-link>
    <router-link to="/about">
      关于
    </router-link>
    <router-link to="/todo">
      TODO
    </router-link>
  </nav>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <Head /> -->

  <div id="content">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'App',
  components: {

  },
  setup() {
    const store = useStore();
    console.log(store.state.todo);

  }
})
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>