<script lang="ts" >
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup: () => {
    const log = (e) => {
      console.log(e);

    }
    return { log };
  }
})
</script>

<template>
  <h1>主页</h1>
  <SetUp
    msg="hello world"
    @delete="log"
  />
</template>
