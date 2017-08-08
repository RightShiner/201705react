import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//单向数据流
class PanelHead extends Component{
  render(){
    return <div className="panel-heading">
      {this.props.head}
    </div>
  }
}
class PanelBody extends Component{
  render(){
    return <div className="panel-body">
      {this.props.body}
    </div>
  }
}
class PanelFooter extends Component{
  render(){
    return <div className="panel-footer">
      {this.props.footer}
    </div>
  }
}
class Panel extends Component{
  render(){
    return (
      <div className="panel panel-default">
        <button className="btn btn-danger">红</button>
        <button className="btn btn-success">绿</button>
        <PanelHead head={this.props.head}/>
        <PanelBody body={this.props.children}/>
        <PanelFooter footer={this.props.footer}/>
      </div>
    )
  }
}
//可以把对象展开赋给组件
let data ={
  head:'头',
  footer:'尾'
}
ReactDOM.render(<div className="container">
  <div className="row">
    <div className="col-md-6 col-md-offset-3">
      <Panel {...data}>体</Panel>
    </div>
  </div>
</div>,document.querySelector('#root'));