import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//HashRouter是基本于hash原理实现的路由容器 as表示起一个别名
import Home from "../components/Home";
import User from "../components/User";
import Profile from "../components/Profile";
import {
  HashRouter as Router,//路由容器
  Route, //路由规则
  Link
} from 'react-router-dom';
//Hash history cannot PUSH the same path; a new entry will not be added to the history stack
//
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a href="#" className="navbar-brand">
                  用户管理系统
                </a>
              </div>
              <div>
                <ul className="nav navbar-nav">
                  <li><Link to="/">首页</Link></li>
                  <li><Link to="/user">用户管理</Link></li>
                  <li><Link to="/profile">个人设置</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <Route exact={true} path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/profile" component={Profile}/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}