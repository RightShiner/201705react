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
  constructor(){
    super();
    //用仓库里的初始状态来初始化组件的内部本地状态
    this.state = {number:store.getState()};
  }
  componentWillMount(){
    store.subscribe(()=>{
      this.setState({number:store.getState()});
    })
  }

  add = ()=>{
    store.dispatch({type:'INCREMENT'});
  }
  minus = ()=>{
    store.dispatch({type:'DECREMENT'});
  }
  render(){
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>,document.querySelector('#root'));