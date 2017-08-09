/**
 * 1.react如何跟后台进行数据交互
 * 1.给input框绑定事件
 * 2.当事件发生的时候，取得input框的值，然后调用百度的接口取得搜索结果.然后渲染到ul里面
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
class Suggest extends React.Component {
  constructor() {
    super();
    //定义一个默认的状态index=-1
    this.state = {words: [], index: -1};//定义初始的状态对象
  }

  handleChange = (event) => {
    let wd = event.target.value;//取得输入框的值
    $.ajax({
      url: 'http://www.baidu.com/su',//请求的后台路径
      type: 'GET',//请求后台的方法名
      dataType: 'jsonp',//指定返回的类型是jsonp格式
      data: {wd},//数据对象，如果是GET请求，则会把wd放在url查询字符串里
      jsonp: 'cb',//在后台获取方法名的参数名
      success: (result) => {
        //改状态之后会重新render
        this.setState({words: result.s});
      }
    });
  }
  handleKeyDown = (event) => {
    let keyCode = event.keyCode;//先取得按键的编码
    //上38 下40
    if (keyCode == 40 || keyCode == 38) {
      let index = this.state.index;//先取得老的的索引值
      if (keyCode == 40) {//向下
        index++;
        if (index >= this.state.words.length)
          index = 0;
      } else if (keyCode == 38) {
        index--;
        if (index < 0)
          index = this.state.words.length - 1;
      }
      this.setState({index});
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input type="text"
                       onKeyDown={this.handleKeyDown}
                       onChange={this.handleChange}
                       className="form-control"/>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {
                    this.state.words.map((item, index) => (
                      <li key={index} className={"list-group-item " + (index == this.state.index ? 'active' : '')}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Suggest/>, document.querySelector('#root'));