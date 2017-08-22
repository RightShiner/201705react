import * as types from './action-types';
export default {
  request(){
    return {
      //派发一个获取数据的动作
      type:types.FETCH_TEXT_REQUEST
    }
  }
}