import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/todos';
class TodoFooter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <span style={{lineHeight:'32px'}}>还有件{this.props.activeCount}待办事项</span>
        </div>
        <div className="col-sm-6">
          <button className="btn btn-default btn-sm filter">全部</button>
          <button className="btn btn-default btn-sm filter">未完成</button>
          <button className="btn btn-default btn-sm filter">已完成</button>
        </div>
        <div className="col-sm-3">
          <button
            onClick={this.props.delAllCompleted}
            className="btn btn-danger btn-sm">删除已完成</button>
        </div>
      </div>
    )
  }
}
export default connect(
 state=>({
   activeCount: state.todos.list.reduce((prev, next) => {
     return prev + Number(!next.completed);
   }, 0)
 }),
  actions
)(TodoFooter);