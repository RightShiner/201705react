import * as types from '../action-types';
export default function (state = {list: []}, action) {
  switch (action.type) {//判断action的类型
    case types.ADD_TODO://增加todo
      return {list:[...state.list,{
        id:Date.now(),text:action.text,completed:false
      }]};
    case types.TOGGLE_TODO://切换todo的状态
      return {list:state.list.map((item,index)=>{
        return {...item,completed:item.id == action.id?!item.completed:item.completed};
      })}
    case types.TOGGLE_ALL:
      return {
        list:state.list.map((item,index)=>{
          return {...item,completed:action.checked};
        })
      }
    default:
      return state;
  }
}