import React, {Component} from 'react';
import {Prompt}  from 'react-router-dom';
export default class UserAdd extends Component {
  constructor(){
    super();
    this.state = {blocking:false};//默认不阻止
  }
  handleSubmit = (event)=>{
    event.preventDefault();//取消默认事件
    let username = this.refs.username.value;
    let email = this.refs.email.value;
    this.props.model.addUser({username,email});
    this.setState({blocking:false},()=>{
      //仅限于使用BrowserRouter才可以
      this.props.history.push('/user/list',{msg:'用户添加成功'});//指向一个新的路径
    });

  }
  handleChange = (event)=>{
    this.setState({
      blocking:event.target.value&&event.target.value.length>0
    });
  }
  render() {
    return (
      <div>
        <Prompt
          when={this.state.blocking}
          message={location=>`你是否想要跳转到${location.pathname}上去呢?`}
        />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="control-label">用户名</label>
            <input onChange={this.handleChange} ref="username" required id="username" type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="control-label">邮箱</label>
            <input ref="email" required id="email" type="email" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-info"/>
          </div>
        </form>
      </div>
    )
  }
}