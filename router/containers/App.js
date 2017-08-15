import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//HashRouter是基本于hash原理实现的路由容器 as表示起一个别名
import Home from "../components/Home";
import User from "../components/User";
import Profile from "../components/Profile";
import {
  HashRouter as Router,//路由容器
  Route, //路由规则
  Switch
} from 'react-router-dom';
import MenuLink from '../components/MenuLink';
//Hash history cannot PUSH the same path; a new entry will not be added to the history stack
//
let NoMatch = ()=><div>路径不存在</div>;
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
                  <MenuLink exact={true} label="首页" to="/"/>
                  <MenuLink exact={false} label="用户管理" to="/user"/>
                  <MenuLink exact={true} label="个人设置" to="/profile"/>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <Switch>
                  <Route exact  path="/" component={Home}/>
                  <Route path="/user" render={(props)=><User model={this.props.model}/>}/>
                  <Route path="/profile" component={Profile}/>
                  <Route component={NoMatch}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}