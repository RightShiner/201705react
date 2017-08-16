/**
 * redux跟react并没必然的关系
 * createStore 创建仓库
 **/
//let {createStore} = require('redux');
let createStore = (reducer) => {
  let state;//定义初始状态
  let getState = () => state;
  let listeners = [];
  let dispatch = (action) => {
    //传入老状态和本次的action,返回新状态
    state = reducer(state,action);
    //让所有的监听函数依次执行
    listeners.forEach(l=>l());
  }
  let subscribe = listener =>{
    listeners.push(listener);
  }
  //在创建仓库的时候就直接派发一次空的action,确保state有初始值
  dispatch({});
  return {
    getState,
    dispatch,
    subscribe
  }
}
//调用createStore方法可以得到一个仓库的实例
//state当前的状态 action收到的动作
//传入老状态和动作，返回新状态
//state可以是任何类型
let initState = 0;
let reducer = (state = initState, action) => {
  switch (action.type) {//判断action的类型
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}
let store = createStore(reducer);
// getState 获取当前状态
// dispatch 派发action
// subscribe 订阅状变化事件，当状态发生变化时执行回调函数
console.log(store.getState());
store.subscribe(function () {
  console.log(store.getState());
});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
