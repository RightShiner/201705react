import * as types from '../action-types';
export default function (state = {list: []}, action) {
  switch (action.type) {//判断action的类型
    case types.ADD_TODO://增加todo
      return {list:[...state.list,{
        id:Date.now(),text:action.text,completed:false
      }]};
    case types.TOGGLE_TODO://切换todo的状态
      return {list:JSON.parse(JSON.stringify(state.list)).map((item,index)=>{
        if(item.id == action.id){
          item.completed = !item.completed;
        }
        return item;
      })}
    default:
      return state;
  }
}