import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
//thunk可以让我们派发一个函数,thunk会拦截这个函数，并且执行它
import thunk from 'redux-thunk';
//redux-promise可以让我们派发一个promise
import promise from 'redux-promise';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory'
let history = createHistory();
let router = routerMiddleware(history);
let initState = {
  load: {
    status:'',//状态 值有 "加载中" "加载成功" "加载失败"
    text:''
  },
  router:{}
}

let store = createStore(reducer,initState,applyMiddleware(thunk,promise,router));
export default store;
