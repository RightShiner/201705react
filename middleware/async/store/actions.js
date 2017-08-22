import * as types from './action-types';
//action必须只能是一个简单对象
export default {
  request(){
    return (dispatch) => {//store.dispatch
      //1.派发FETCH_TEXT_REQUEST
      dispatch({type: types.FETCH_TEXT_REQUEST});
      //2.调用后台接口请求数据，请求成功后派发FETCH_TEXT_SUCCESS,请求失败后派发FETCH_TEXT_FAILURE
      fetch('http://127.0.0.1:3000/text')
        .then(response => response.json())
        .then(function (data) {//data成功返回的数据
          dispatch({type: types.FETCH_TEXT_SUCCESS, text: data.text});
        }).catch(function (reason) {//失败的原因
        dispatch({type: types.FETCH_TEXT_FAILURE, text: reason.error});
      })
    }
  }
}