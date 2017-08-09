/**
 * 1.react如何跟后台进行数据交互
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
class Suggest extends React.Component{
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input type="text" className="form-control"/>
              </div>
              <div className="panel-body">
                <ul className="list-group">

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Suggest/>,document.querySelector('#root'));