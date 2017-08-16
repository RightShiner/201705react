import React from 'react';
import {createStore} from 'redux';
let reducer = (state=0,action)=>{
 switch(action.type){
   case 'ADD':
     return state+1;
   case 'MINUS':
     return state - 1;
   default:
     return state;
 }
}
let store = createStore(reducer);
class Counter extends React.Component{
  render(){
    return (
      <div>
        <p></p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}