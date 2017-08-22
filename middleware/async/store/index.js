import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
//thunk可以让我们派发一个函数,thunk会拦截这个函数，并且执行它
import thunk from 'redux-thunk';
//初始状态
let initState = {
  status:'',//状态 值有 "加载中" "加载成功" "加载失败"
  text:''
}
let store = createStore(reducer,initState,applyMiddleware(thunk));
export default store;
