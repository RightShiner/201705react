/**
 1. react-redux实现组件和仓库的自动连接
 2. 学习combineReducer
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from "./components/App";
import {Provider} from 'react-redux';
//Provider 提供者,负责把接收到的属性store传递给所有的子组件以及孙子组件以及重孙重件以及.....
ReactDOM.render(<Provider store={store}>
 <App/>
</Provider>,document.querySelector('#root'));