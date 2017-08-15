import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import UserList from "./UserList";
import UserAdd from "./UserAdd";
export default class User extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <ul className="nav nav-pills nav-stacked">
            <li><Link to="/user/list">用户列表</Link></li>
            <li><Link to="/user/add">新增用户</Link></li>
          </ul>
        </div>
        <div className="col-md-9">
          <Route path="/user/list" component={UserList}/>
          <Route path="/user/add" render={props=><UserAdd {...props} model={this.props.model}/>}/>
        </div>
      </div>
    )
  }
}