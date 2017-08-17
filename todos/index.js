import React from 'react';
import ReactDOM from 'react-dom';
import Todos from "./components/Todos";
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './store';
/**
 * 1. 增加一个action type操作类型
 * 2. 在todos的reducer增加一个case
 * 3. 在actions增加一个actionCreator
 * 4. 在组件中发射action
 */
//通过Provider向下层组件传递store
ReactDOM.render(
  <Provider store={store}>
    <Todos/>
  </Provider>
  , document.querySelector('#root'));