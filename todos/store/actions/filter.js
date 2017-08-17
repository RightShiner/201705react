import * as types from '../action-types';
export default {
  changeFilter(filter){
    return {
      type:types.CHANGE_FILTER,
      filter
    }
  }
}