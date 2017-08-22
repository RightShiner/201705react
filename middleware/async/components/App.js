import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';
class App extends Component {
  render() {
    return (
      <div>
        <p>{this.props.status}</p>
        <p>{this.props.text}</p>
        <button onClick={()=>this.props.request()}>获取</button>
      </div>
    )
  }
}
export default connect(
  state=>state,
  actions
)(App);