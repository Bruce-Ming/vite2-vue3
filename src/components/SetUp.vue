<template>
  <h1>{{ msg }}</h1>
  <p>{{ count }}</p>
  <button
    class=" ring-1 bg-blue-500 p-2 rounded-md"
    @click="changeCount"
  >
    按钮
  </button>
</template>

<script lang="ts" setup>
import { ref, defineProps,defineEmit,useContext } from 'vue'
// 获取setup中的props和ctx中的
/* 
props:{
  event:{
    type: Object as PropType<自定义接口>
     type?: PropType<T> | true | null;
    required?: boolean;
    default?: D | DefaultFactory<D> | null | undefined | object;
    validator?(value: unknown): boolean;
  }
}

*/
const props = defineProps({
  msg: String,
})
const emit = defineEmit(['change', 'delete'])
const count = ref(0)
const changeCount =()=>{
  count.value++;
  emit('delete',count.value);
}
const { slots, attrs } = useContext();
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
</style>