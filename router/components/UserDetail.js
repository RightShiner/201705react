import React, {Component} from 'react';
export default class UserDetail extends Component {
  constructor(){
    super();
    this.state = {user:{}};//定义默认状态
  }
  componentWillMount(){
    let id = this.props.match.params.id;//先从match对象拿到ID属性
    let users = this.props.model.getUsers();//得到老的用户数组
    let user = users.find(item=>item.id == id);//再得到对应的对象
    this.setState({user});//修改状态
  }
  render() {
    return (
     <div className="panel panel-default">
       <div className="panel-heading">
         <button onClick={()=>this.props.history.goBack()} className="btn btn-info">返回</button>
       </div>
       <div className="panel-body">
         <table className="table table-bordered">
           <thead>
           <tr>
             <th>ID</th>
             <th>用户名</th>
             <th>邮箱</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <td>{this.state.user.id}</td>
             <td>{this.state.user.username}</td>
             <td>{this.state.user.email}</td>
           </tr>
           </tbody>
         </table>
       </div>
     </div>
    )
  }
}