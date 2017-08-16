import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/todos';
class Todos extends Component {
  handleKeyDown = (event)=>{
    let keyCode = event.keyCode;
    if(keyCode == 13){
      let text = event.target.value;
      this.props.addTodo(text);
      event.target.value = '';
    }
  }
  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul>
          {
            this.props.list.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          }
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
  actions
)(Todos);