import React,{Component} from 'react';
export default class ProductCategoryRow extends React.Component{
  render(){
    return (
     <tr><td colSpan={2} style={{fontWeight:'bold'}}>{this.props.category}</td></tr>
    )
  }
}