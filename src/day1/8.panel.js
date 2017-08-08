import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
class PanelHead extends Component{

}
class PanelBody extends Component{

}
class PanelFooter extends Component{

}
class Panel extends Component{
  render(){
    return (
      <div className="panel-default">
        <PanelHead/>
        <PanelBody/>
        <PanelFooter/>
      </div>
    )
  }
}
