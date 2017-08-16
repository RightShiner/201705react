import React, {Component} from 'react';
import {connect} from 'react-redux';
class Todos extends Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <ul>

        </ul>
      </div>
    )
  }
}
//把仓库中的状态对象的list映射为当前组件属性对象
let mapStateToProps = state => ({
  list:state.todos.list
})
export default connect(
  mapStateToProps,
  todos
)(Todos);