/**
 * 使用provide和inject 以及reactive实现vuex
 */
import { useTodoListProvide, useTodoListInject } from './todos'

export { useTodoListInject }

export const useProvider = () => {
  useTodoListProvide()
}
