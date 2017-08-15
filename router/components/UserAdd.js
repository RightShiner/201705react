import React, {Component} from 'react';
export default class UserAdd extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="username" className="control-label">用户名</label>
          <input id="username" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="control-label">邮箱</label>
          <input id="email" type="email" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-info"/>
        </div>
      </form>
    )
  }
}