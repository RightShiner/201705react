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
  delUser = (id)=>{
    //删除之后返回最新数组
    let users = this.props.model.delUser(id);
    this.setState({users});
  }
  render(){
    return (
     <div>
       {
         this.props.location.state? <div className="alert alert-info text-center">{this.props.location.state.msg}</div>:null
       }

       <ul className="list-group">
         {
           this.state.users.map((user,index)=>(
             <li key={index} className="list-group-item">
               <Link to={`/user/detail/${user.id}`}>{user.username}</Link>
               <button className="btn btn-danger btn-xs pull-right" onClick={()=>this.delUser(user.id)}>删除</button>
             </li>
           ))
         }
       </ul>
     </div>
    )
  }
}