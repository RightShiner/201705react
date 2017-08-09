import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 什么叫生命周期函数
 */
class ChildCounter extends React.Component{
  //组件将要接收到父组件传过来的新的属性
  componentWillReceiveProps(newProps){
      console.log('ChildCounter newProps');
  }
  render(){
    return (
      <div>
        {this.props.number}
      </div>
    )
  }
}
class Counter extends React.Component{
  //1.获得默认属性对象
  static defaultProps = {
    name:'父计数器'
  }
  constructor(){
    super();
    //2.获得初始化的状态
    this.state = {number:0};
  }
  componentWillMount(){
    //可以在这个方法里初始化一下render的时候的数据
    console.log('3.组件将要挂载 componentWillMount');
  }
  //所有的实例能够共享的公共方法
  handleClick = ()=>{
    this.setState({number:this.state.number+1});
  }
  //组件是否需要更新 参数为新的属性对象和新的状态对象
  shouldComponentUpdate(newProps,newState){
    console.log('6.询问组件是否需要更新 shouldComponentUpdate');
     if(newState.number%5==0){
       return true; //如果返回true则会走更新组件的流程
     }else{
       return false;//如果返回false,则什么都不做
     }
  }
  componentWillUpdate(){
    console.log('7.组件将要更新 componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('8.组件更新完成 componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('9.组件将要被删除(卸载) componentWillUnmount');
  }
  killMySelf = ()=>{
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
  }
  render(){
    //把一个虚拟的DOM元素转成成真实的DOM元素的过程
    console.log('4.把组件挂载到页面中 render');
    return (
     <div>
       <p>{this.state.number}</p>
       <button onClick={this.handleClick}>+</button>
       <button onClick={this.killMySelf}>自杀</button>
       <ChildCounter number={this.state.number}/>
     </div>
    )
  }
  //组件挂载完成后
  componentDidMount(){
    //当你需要操作DOM元素的时候需要在这写
    console.log('5.组件挂载完成后 componentDidMount');
  }
}


ReactDOM.render(<Counter/>,document.querySelector('#root'));