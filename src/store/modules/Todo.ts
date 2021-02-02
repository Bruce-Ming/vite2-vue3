import store from '../index'
import { VuexModule, Module, Mutation, Action,getModule } from 'vuex-module-decorators'

@Module({ name: 'Todo', dynamic: true, store })
class Todo extends VuexModule {
  items: any[] = [{ name: '测试', id: 1212313 }]

  get todo() {
    return this.items
  }

  get TodoLength() {
    return this.items.length
  }

  @Mutation
  SET_TODO(name: string) {
    this.items = [...this.items, { name, id: Math.random() * 1000 }]
  }

  @Action
  SetTodo(name: string) {
    this.SET_TODO(name)
  }
}

const TodoModule =  getModule(Todo);
export default TodoModule;