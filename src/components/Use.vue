<template>
  <h1>vueUse示例</h1>
  <div>鼠标轨迹X:{{ mouse.x }},Y:{{ mouse.y }}</div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useMouse } from '@vueuse/core'
const mouse = reactive(useMouse());
</script>