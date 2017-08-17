import React,{Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterProductTable extends React.Component{
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <SearchBar/>
        </div>
        <div className="panel-body">
          <ProductTable/>
        </div>
      </div>
    )
  }
}