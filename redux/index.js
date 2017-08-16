/**
 1. react-redux实现组件和仓库的自动连接
 2. 学习combineReducer
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from "./components/App";

ReactDOM.render(<App/>,document.querySelector('#root'));