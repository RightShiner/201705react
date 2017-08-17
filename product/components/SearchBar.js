import React,{Component} from 'react';
export default class SearchBar extends React.Component{
  render(){
    return (
      <form>
        <input placeholder="搜索...." type="text" className="form-control"/>
        <div className="checkbox">
          <label>
            <input type="checkbox"/>只显示有存货的商品
          </label>
        </div>
      </form>
    )
  }
}