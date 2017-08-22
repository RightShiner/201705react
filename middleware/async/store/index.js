import {createStore} from 'redux';
import reducer from './reducer';
//初始状态
let initState = {
  status:'',//状态 值有 "加载中" "加载成功" "加载失败"
  text:''
}
let store = createStore(reducer,initState);
export default store;
