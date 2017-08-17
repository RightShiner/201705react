import React,{Component} from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default class ProductTable extends React.Component{
  render(){
    return (
      <table className="table table-bordered">
        <thead>
          <tr><th>名称</th><th>价格</th></tr>
        </thead>
        <tbody>
        {
          this.props.products.map((product,index)=>(
            <ProductRow product={product}/>
          ))
        }
        </tbody>
      </table>
    )
  }
}