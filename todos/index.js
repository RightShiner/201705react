import React from 'react';
import ReactDOM from 'react-dom';
import Todos from "./components/Todos";
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './store';
//通过Provider向下层组件传递store
ReactDOM.render(
  <Provider store={store}>
    <Todos/>
  </Provider>
  , document.querySelector('#root'));