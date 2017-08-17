import React,{Component} from 'react';
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
export default class Todos extends Component{
  render(){
    return (
      <div className="container" style={{marginTop:15}}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-success">
              <div className="panel-heading">
                <TodoHeader/>
              </div>
              <div className="panel-body">
                <TodoBody/>
              </div>
              <div className="panel-footer"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}