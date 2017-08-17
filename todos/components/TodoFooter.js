import React, {Component} from 'react';
export default class TodoFooter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <span style={{lineHeight:'32px'}}>还有件2待办事项</span>
        </div>
        <div className="col-sm-6">
          <button className="btn btn-default btn-sm filter">全部</button>
          <button className="btn btn-default btn-sm filter">未完成</button>
          <button className="btn btn-default btn-sm filter">已完成</button>
        </div>
        <div className="col-sm-3">
          <button className="btn btn-danger btn-sm">删除已完成</button>
        </div>
      </div>
    )
  }
}