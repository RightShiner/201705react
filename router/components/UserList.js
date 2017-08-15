import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class UserList extends Component{
  constructor(){
    super();
    //定义初始状态，有一个users属性，值是一个数组
    this.state = {users:[]}
  }
  //组件将要加载
  componentWillMount(){
    let users = this.props.model.getUsers();
    this.setState({users});
  }
  render(){
    return (
      <ul className="list-group">
        {
          this.state.users.map((user,index)=>(
            <li key={index} className="list-group-item">
              <Link to={`/user/detail/${user.id}`}>{user.username}</Link>
            </li>
          ))
        }
      </ul>
    )
  }
}