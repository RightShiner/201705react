import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 状态？什么是状态?状态就是一个组件内部自己初始化，只能由自己改变的数据
 * 状态对象也是组件的一个私有属性
 * 1.如何定义或者说初始化状态
 * 2.如何给React元素绑定事件
 * 3.如何修改组件的状态
 */
class Counter extends React.Component{
  constructor(){
    super();
    this.state = {number:0,name:'zfpx'};//初始化状态对象
  }
  //类上的方法，是所有的实例所公有的 .Counter.prototype.handleClick
  handleClick = ()=>{
     //这样写仅仅是能改变状态
     //this.state.number = this.state.number+1;
    //设置状态对象 1.改变状态 2.重新调用render方法进行渲染
    //新状态对象会覆盖老状态对象，可不是替换掉,意味着如果新状态对的属性老状态对里没有，会添加此属性，如果有的话会覆盖。如果老的有，新的没有，则保持不变
    this.setState({number:this.state.number+1,age:9});
  }
  render(){
    console.log(this.state);
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));