import * as types from '../action-types';
export default {
  addTodo(text){
    return {type:types.ADD_TODO,text}
  },
  delTodo(index){
    return {type:types.DEL_TODO,index}
  }
}