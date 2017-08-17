import React,{Component} from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default class ProductTable extends React.Component{
  render(){
    let rows = [];
    let lastCategory;
    this.props.products.forEach(function(product){
      if(product.category != lastCategory){
        rows.push(<ProductCategoryRow category={product.category}/>);
        lastCategory = product.category;
      }
      rows.push( <ProductRow product={product}/>);
    });
    return (
      <table className="table table-bordered">
        <thead>
          <tr><th>名称</th><th>价格</th></tr>
        </thead>
        <tbody>
        {
          rows
        }
        </tbody>
      </table>
    )
  }
}