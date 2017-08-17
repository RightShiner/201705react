import React,{Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterProductTable extends React.Component{
  render(){
    return (
      <div>
        <SearchBar/>
        <ProductTable/>
      </div>
    )
  }
}