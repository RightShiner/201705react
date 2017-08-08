import React from 'react';
import ReactDOM from 'react-dom';
class Input extends React.Component{
  constructor(){
    super();
    this.state = {val:''};
  }
  //event事件对象，这个对象并非原生的事件对象。而是经过React包装过的事件对象
  //event.target事件源对象 input元素对应的真实DOM元素
  handleChange = (event)=>{
    this.setState({
      val:event.target.value
    });
  }
  render(){
    return (
      <div>
        <p>{this.state.val}</p>
        <input onChange={this.handleChange} type="text"/>
      </div>
    )
  }
}
ReactDOM.render(<Input/>,document.querySelector('#root'));
/**
 * 类里面方法的排列是有顺序的
 * 1. 类的静态方法和属性 static propTypes defaultProps
 *    方法是属于类的。是类的属性，实例无法访问
 * 2. 构造函数 constructor()
 * 3. 放生命周期函数
 * 4. 自定义方法
 * 5. render方法
 **/