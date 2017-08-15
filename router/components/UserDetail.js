import React, {Component} from 'react';
export default class UserDetail extends Component {
  render() {
    this.props.match.params.id;
    return (
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>用户名</th>
          <th>邮箱</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    )
  }
}