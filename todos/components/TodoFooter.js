import React, {Component} from 'react';
import {connect} from 'react-redux';
import todos from '../store/actions/todos';
import filter from '../store/actions/filter';
class TodoFooter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          {
            this.props.activeCount>0? <span style={{lineHeight:'32px'}}>还有件{this.props.activeCount}待办事项</span>:null
          }

        </div>
        <div className="col-sm-6" onClick={event=>this.props.changeFilter(event.target.value)}>
          <button value="all" className={"btn btn-sm filter "+(this.props.filter == 'all'?'btn-success':'btn-default')}>全部</button>
          <button value="active" className={"btn btn-sm filter "+(this.props.filter == 'active'?'btn-success':'btn-default')}>未完成</button>
          <button value="completed" className={"btn btn-sm filter "+(this.props.filter == 'completed'?'btn-success':'btn-default')}>已完成</button>
        </div>
        <div className="col-sm-3">
          {
            this.props.completedCount>0?<button
              onClick={this.props.delAllCompleted}
              className="btn btn-danger btn-sm">删除已完成</button>:null
          }

        </div>
      </div>
    )
  }
}
export default connect(
 state=>({
   filter:state.filter,
   activeCount: state.todos.list.reduce((prev, next) => {
     return prev + Number(!next.completed);
   }, 0),
   completedCount:state.todos.list.filter(item=>item.completed).length
 }),
  {...todos,...filter}
)(TodoFooter);