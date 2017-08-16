//counter的reducer 专门处理{number:0}
//把一个大型的状态划分为若干个小状态，然后由各自的reducer维护
import * as types from '../action-types';
export default function(state={number:0},action){
  switch (action.type){
    case types.INCREMENT:
      return {number:state.number+1};
    case types.DECREMENT:
      return {number:state.number-1};
    default:
      return state;
  }
}