import React, {Component} from 'react';
export default class UserAdd extends Component {
  handleSubmit = ()=>{
    let username = this.refs.username.value;
    let email = this.refs.email.value;
    this.props.model.addUser({username,email});
    this.props.history.push('/user/list',{msg:'用户添加成功'});//指向一个新的路径
  }
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="control-label">用户名</label>
          <input ref="username" required id="username" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="control-label">邮箱</label>
          <input ref="email" required id="email" type="email" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-info"/>
        </div>
      </form>
    )
  }
}