import React, {Component} from 'react';
import {createStore} from 'redux';
const ADD = 'ADD';//加1的action
let reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
}
let store = createStore(reducer);
//备份真正派发动作的方法
let next = store.dispatch;
//重写dispatch方法，添加自己的代码，并且内部也调用原来的派发方法
store.dispatch = function (action) {
  console.log(store.getState());
  next(action);
  console.log(store.getState());
}
store.dispatch({type: ADD});
store.dispatch({type: ADD});
