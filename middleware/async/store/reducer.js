import * as types from './action-types';
export default function (state, action) {
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