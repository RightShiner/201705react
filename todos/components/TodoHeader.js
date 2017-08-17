import React, {Component} from 'react';
export default class TodoHeader extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="请输入你想办的事..." className="form-control"/>
      </form>
    )
  }
}