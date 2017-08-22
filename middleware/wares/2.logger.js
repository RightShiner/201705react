import React, {Component} from 'react';
import {createStore,applyMiddleware} from 'redux';
//用来在动作派发前后写日志的
import logger from 'redux-logger';
const ADD = 'ADD';//加1的action
let reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
}
//这是旧的写法 let store = createStore(reducer);
//第一种用法
//let store = applyMiddleware(logger)(createStore)(reducer);
//第二种写法
let store = createStore(reducer,applyMiddleware(logger));
store.dispatch({type:ADD})
