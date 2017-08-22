import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';
class App extends Component {
  handleClick = ()=>{
    //this.props.history.push('/counter');
    this.props.go('/counter');
  }
  render() {
    return (
      <div>
        App组件
        <p>{this.props.status}</p>
        <p>{this.props.text}</p>
        <button onClick={()=>this.props.requestPromise()}>获取</button>
        <button onClick={this.handleClick}>跳到counter里</button>
      </div>
    )
  }
}
export default connect(
  //把store中的状态树变成当前组件属性对象
  state=>state,
  //这是actionCreator
  actions
)(App);