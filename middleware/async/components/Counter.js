import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';
class Counter extends Component {
  render() {
    return (
      <div>
        Counter组件
        <p>{this.props.status}</p>
        <p>{this.props.text}</p>
        <button onClick={()=>this.props.requestPromise()}>获取</button>
      </div>
    )
  }
}
export default connect(
  //把store中的状态树变成当前组件属性对象
  state=>state,
  //这是actionCreator
  actions
)(Counter);