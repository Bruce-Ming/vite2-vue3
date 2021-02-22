<template>
  <h1 class="text-center">
    vueUse示例
  </h1>
  <div>鼠标轨迹X:{{ mouse.x }},Y:{{ mouse.y }}</div>

  <div>nextTick示例</div>
  <h3 id="h">
    {{ testMsg }}
  </h3>
  <button
    class="mt-auto bg-violet-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
    @click="changeText"
  >
    更改文本
  </button>

  <div class="text-center">
    provide状态管理实现todolist
  </div>
  <div>
    <div
      v-for="(todo) in state.todos"
      :key="todo.id"
      @click="deleteTodo(todo)"
    >
      {{ todo.name }}
    </div>
    <input
      v-model="todoName"
      class="ring-1 "
      type="text"
    >
    <button
      class="mt-auto bg-violet-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
      @click="add"
    >
      添加
    </button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, nextTick } from 'vue'
import { useMouse } from '@vueuse/core'
import { useTodoListInject } from '../context/'
const mouse = reactive(useMouse());
const testMsg = ref('测试文本')
const changeText = async () => {
  testMsg.value = "修改后的文本值";  //vue数据改变，改变dom结构
  let domTxt = document?.getElementById('h')?.innerText;  //后续js对dom的操作
  console.log(domTxt);  //输出可以看到vue数据修改后DOM并没有立即更新，后续的dom都不是最新的
  await nextTick()
  let dom = document?.getElementById('h')?.innerText;  //后续js对dom的操作
  console.log('Now DOM is updated', dom)
}
const todoName = ref('')
const { state, addTodo, deleteTodo } = useTodoListInject();
const add = () => { addTodo(todoName.value); todoName.value = '' }
</script>