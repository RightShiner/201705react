import React,{Component} from 'react';
export default class Home extends Component{
  /**
   * 如果一个组件是由Route渲染出来的，会向这个组件传入三个属性
   * history 用来管理历史的
   * location 位置就是路径
   * match 路由的路径和URL的匹配结果
   */
  render(){
    console.log(this.props);
    return (
      <div>Home</div>
    )
  }
}