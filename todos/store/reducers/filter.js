import * as types from '../action-types';
export default function(state='all',action){
  switch (action.type){
    case types.CHANGE_FILTER:
      return action.filter;//最新的过滤类型 active completed
    default:
      return state;
  }
}