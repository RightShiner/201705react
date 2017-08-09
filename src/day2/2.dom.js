/**
 如何在React实现DOM操作
   1.如何在React获得真实的DOM对象 ， event.target 事件源对象
   2.
 什么叫受控组件? input框的值受状态控制
 非受控组件
 **/
import React from 'react';
import ReactDOM from 'react-dom';
class Calculator extends React.Component{
  constructor(){
    super();
    //定义一个初始化状态对象，a和b默认值都是a
    this.state = {a:0,b:0};
  }
  handleChange = (event,attr)=>{
    if(event.target.value){
      this.setState({
        [attr]:isNaN(event.target.value)?0:parseInt(event.target.value)
      });
    }
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.a} onChange={(event)=>this.handleChange(event,'a')}/>
        +
        <input type="text" value={this.state.b} onChange={(event)=>this.handleChange(event,'b')}/>
        = {this.state.a+this.state.b}
      </div>
    )
  }
}
ReactDOM.render(<Calculator/>,document.querySelector('#root'));