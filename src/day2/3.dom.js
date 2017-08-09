/**
 * 1.另外一种获得DOM对象的方法
 * 2.什么叫非受控组件 表单元素的值不受状态控制
 */
import React from 'react';
import ReactDOM from 'react-dom';
class Calculator extends React.Component{
  constructor(){
    super();
    this.state = {result:0};
  }
  //如何获取真实的DOM元素
  handleChange = ()=>{
    console.log(this.refs);
    //ref reference 引用 获取到了真实的DOM元素
    let a = this.refs.a.value;
    let b = this.refs.b.value;
    this.setState({
      result:parseFloat(a)+parseFloat(b)
    });
  }
  render(){
    return (
      <div>
        <input ref="a" type="text" defaultValue={0} onChange={this.handleChange}/>
        +
        <input ref="b" type="text" defaultValue={0} onChange={this.handleChange}/>
        = {this.state.result}
      </div>
    )
  }
}
ReactDOM.render(<Calculator/>,document.querySelector('#root'));