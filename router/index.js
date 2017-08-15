import React from 'react';
import ReactDOM from 'react-dom';

import App from "./containers/App";
import model from './local';
ReactDOM.render(<App model={model}/>,document.querySelector('#root'));

//1.类
//2.函数式
//类可以有状态，但是函数没有
