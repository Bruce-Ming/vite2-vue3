<script lang="ts" setup="props,ctx">
import { defineProps, defineEmit } from 'vue'

const props = defineProps({
  foo: String,
})
const emit = defineEmit(['change', 'delete'])


const name = '测试'

</script>

<template>
  <div>关于|{{ name }}</div>
  <Use />
</template>
