<template>
  <h2>todo组件</h2>
  <input
    v-model="todoName"
    type="text"
  >
  <button
    class="mt-auto bg-violet-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
    @click="setTodo"
  >
    添加
  </button>
  <ul>
    <li
      v-for="item in todoList"
      :key="item.name"
    >
      {{ item.name }}
    </li>
  </ul>
  <p>总计:{{ todoLength }}</p>
  <div>
    {{ state.name }}
    {{ state.num }}
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref, watch, onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onActivated,
  onUnmounted,
  onErrorCaptured,
  reactive,
  isRef,
} from 'vue'
import TodoModule from '../store/modules/Todo';
export default defineComponent({
  name: 'TodoCom',
  setup(props, ctx) {

    console.log('传入属性props', props, ctx);
    /*  const { msg } = toRefs(props); //解决props更新无法监听问题.
     console.log(msg); */

    // 依赖注入
    //const color = inject('themeColor');
    // 定义响应式变量
    const state = reactive({ num: 0, name: 'yp' });
    const todoName = ref('')
    const todoList = computed(() => TodoModule.todo);
    const todoLength = computed(() => TodoModule.TodoLength);
    const setTodo = () => {
      TodoModule.SET_TODO(todoName.value);
      todoName.value = '';
      state.name = 'name改变';
    };

    console.log(isRef(todoName));
    watch(todoLength, (value, old) => {
      console.log('watch监听', todoLength);
      console.log(value, old);

    });
    // 生命周期
    onMounted(() => {
      console.log('onMounted');

      // count.value = 15;
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });

    return {
      todoList,
      setTodo,
      todoName,
      todoLength,
      state,
    }
  }
})
</script>