import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
let reducer = (state=0,action)=>{
 switch(action.type){
   case 'INCREMENT':
     return state+1;
   case 'DECREMENT':
     return state - 1;
   default:
     return state;
 }
}
let store = createStore(reducer);
window.store = store;
//输入 读取仓库的状态用来渲染组件
//输出 组件里的一些行动可以派发动作，从而修改仓库的状态
class Counter extends React.Component{
  add = ()=>{
    store.dispatch({type:'INCREMENT'});
  }
  minus = ()=>{
    store.dispatch({type:'DECREMENT'});
  }
  render(){
    return (
      <div>
        <p>{store.getState()}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}

function render(){
  ReactDOM.render(<Counter/>,document.querySelector('#root'));
}
store.subscribe(render);
render();