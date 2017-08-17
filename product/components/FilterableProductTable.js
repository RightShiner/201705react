import React,{Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterProductTable extends React.Component{
  constructor(){
    super();
    //filterText 过滤的文本 onlyShowStocked 只显示有存货的
    this.state = {filterText:'',onlyShowStocked:false};
  }
  //修改过滤器的文件
  changeFilterText = (filterText)=>{
     this.setState({filterText});
  }
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <SearchBar
            changeFilterText={this.changeFilterText}
            filterText={this.state.filterText}
            onlyShowStocked={this.state.onlyShowStocked}
          />
        </div>
        <div className="panel-body">
          <ProductTable
            filterText={this.state.filterText}
            onlyShowStocked={this.state.onlyShowStocked}
            products={this.props.products}/>
        </div>
      </div>
    )
  }
}