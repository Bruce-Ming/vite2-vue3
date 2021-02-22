import { provide, inject, computed, readonly, reactive, Ref } from 'vue'

type Todo = {
  id: number
  name: string
}

type TodoContext = {
  state: { todos: Todo[] }
  addTodo: (value: string) => void
  deleteTodo: (todo: Todo) => void
}

const TodoSymbol = Symbol()

export const useTodoListProvide = () => {
  // 定义状态
  const state = reactive({ todos: [{ name: 'todo1', id: 1212313 }] })

  // 定义方法
  const addTodo = (value: string) =>
    (state.todos = [
      ...state.todos,
      { id: Math.random() * 100000, name: value },
    ])

  const deleteTodo = (todo: Todo) =>
    (state.todos = state.todos.filter((item) => todo.id !== item.id))

  provide(TodoSymbol, {
    state: readonly(state),
    addTodo,
    deleteTodo,
  })
}

export const useTodoListInject = () => {
  const todosContext = inject<TodoContext>(TodoSymbol)

  if (!todosContext) {
    throw new Error(`useTodoListInject must be used after useTodoListProvide`)
  }
  return todosContext
}
