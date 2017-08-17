import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/todos';
class TodoBody extends Component {
  render() {
    let selectAll = (
      <li className="list-group-item">
        <div className="checkbox">
          <label>
            <input type="checkbox"
                   onChange={event=>this.props.toggleAll(event.target.checked)}
                   checked={this.props.activeCount == 0}/> {this.props.activeCount==0?'全部取消':'全部选中'}
          </label>
        </div>
      </li>
    )
    return (
      <ul className="list-group">
        {
          this.props.list.length > 0 ? selectAll : null
        }
        {
          this.props.list.map((item, index) => (
            <li className="list-group-item" key={index}>
              <div className="checkbox">
                <label>
                  <input type="checkbox"
                         onChange={() => this.props.toggleTodo(item.id)}
                         checked={item.completed}/> {item.text}
                </label>
              </div>
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
  state => ({
    list: state.todos.list,
    //未完成的待办事项数量
    activeCount: state.todos.list.reduce((prev, next) => {
      return prev + Number(!next.completed);
    }, 0)
  }),
  actions
)(TodoBody);