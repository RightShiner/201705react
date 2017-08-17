import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/todos';
class TodoHeader extends Component {
  handleKeyDown = (event) => {
    let keyCode = event.keyCode;
    if (keyCode == 13 && event.target.value.length > 0) {
      //调用此方法则直接发射action
      this.props.addTodo(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="请输入你想办的事..."
        onKeyDown={this.handleKeyDown}
        className="form-control"/>
    )
  }
}
export default connect(
  state => ({}),
  actions
)(TodoHeader);