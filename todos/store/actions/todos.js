import * as types from '../action-types';
export default {
  addTodo(text){
    return {
      type:types.ADD_TODO,
      text
    }
  },
  toggleTodo(id){
    return {
      type:types.TOGGLE_TODO,
      id
    }
  }
}