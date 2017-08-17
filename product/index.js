import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import FilterProductTable from "./components/FilterProductTable";

ReactDOM.render(
<div className="container" style={{marginTop:15}}>
  <div className="row">
    <div className="col-md-8 col-md-offset-2">
      <FilterProductTable/>
    </div>
  </div>
</div>,document.querySelector('#root'))