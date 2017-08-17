import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/todos';
class TodoBody extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.list.map((item,index)=>(
            <li className="list-group-item" key={index}>
              {item.text}
            </li>
          ))
        }
      </ul>
    )
  }
}
//mapStateToProps把store的状态树映射为当前组件的属性对象
//ActionCreator
export default connect(
   state=>({list:state.todos.list}),
   actions
)(TodoBody);