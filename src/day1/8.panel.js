import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//单向数据流
class PanelHead extends Component{
  render(){
    return <div className="panel-heading">
      <span style={{color:this.props.color}}>{this.props.head}</span>
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
  constructor(){
    super();
    this.state = {color:'black'};
  }
  switchColor = (color)=>{
    this.setState({color});
  }
  render(){
    return (
      <div className="panel panel-default">
        <button onClick={()=>this.switchColor('red')} className="btn btn-danger">红</button>
        <button onClick={()=>this.switchColor('green')} className="btn btn-success">绿</button>
        <PanelHead color={this.state.color} head={this.props.head}/>
        <PanelBody color={this.state.color} body={this.props.children}/>
        <PanelFooter color={this.state.color} footer={this.props.footer}/>
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