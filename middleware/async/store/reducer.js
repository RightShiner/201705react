import * as types from './action-types';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
function load(state= {status:'', text:''}, action) {
  switch (action.type) {
    case types.FETCH_TEXT_REQUEST:
      return {status: '加载中...', text: ''};
    case types.FETCH_TEXT_SUCCESS:
      return {status: '加载成功', text: action.text};
    case types.FETCH_TEXT_FAILURE:
      return {status: '加载失败', text: action.error};
    default:
      return state;
  }
}
//合并自己的reducer和react-router-redux库提供的reducer
/**
 * {
 *  load:{},
 *  router:{}
 * }
 */
let reducers = combineReducers({
  load,
  router:routerReducer
})
export default  reducers;