import * as types from './action-types';
import { createAction } from 'redux-actions';
//action必须只能是一个简单对象
export default {
  requestThunk(){
    return (dispatch) => {//store.dispatch
      //1.派发FETCH_TEXT_REQUEST
      dispatch({type: types.FETCH_TEXT_REQUEST});
      //2.调用后台接口请求数据，请求成功后派发FETCH_TEXT_SUCCESS,请求失败后派发FETCH_TEXT_FAILURE
      fetch('http://127.0.0.1:3000/text')
        .then(response => response.json())
        .then(function (data) {//data成功返回的数据
          let code = data.code;
          if (code == 0) {
            dispatch({type: types.FETCH_TEXT_SUCCESS, text: data.text});
          } else {
            dispatch({type: types.FETCH_TEXT_FAILURE, error: data.error});
          }
        })
    }
  },
  requestPromise(){
    return (dispatch) => {
      //store.dispatch
      //1.派发FETCH_TEXT_REQUEST
      dispatch({type: types.FETCH_TEXT_REQUEST});
      //2.调用后台接口请求数据，请求成功后派发FETCH_TEXT_SUCCESS,请求失败后派发FETCH_TEXT_FAILURE
      /*dispatch(new Promise(function(resolve,reject){
       fetch('http://127.0.0.1:3000/text')
       .then(response => response.json())
       .then(function (data) {//data成功返回的数据
       let code = data.code;
       console.log(data);
       if (code == 0) {
       //这个返回值是一个action,将会
       resolve({type: types.FETCH_TEXT_SUCCESS, text: data.text});
       }
       })
       }))*/
      dispatch({
        type:types.FETCH_TEXT_SUCCESS,
        payload:fetch('http://127.0.0.1:3000/text').then(response => response.json().then(data=>data.text))
      })
    }
  }
}