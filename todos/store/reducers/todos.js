import * as types from '../action-types';
export default function (state = {list: []}, action) {
  switch (action.type) {//判断action的类型
    case types.ADD_TODO:
      return {list:[...state.list,{
        id:Date.now(),text:action.text,completed:false
      }]};
    default:
      return state;
  }
}