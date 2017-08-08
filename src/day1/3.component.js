/**
 * 组件
 * 1. 什么是组件
 * 2. 组件和元素的区别和联系是什么？
 * 3. 如何定义组件
 */
/**
 * 1. 什么是组件
 *   1.1. 组成页面的部件
 *   1.1 组件可复用，可嵌套
 */
import React from 'react';
import ReactDOM from 'react-dom';
//Hello类继承自React.Component
/**
 * 1.组件名字必须是以大写字母开头
 * 2.组件内有render方法，返回一个顶级React元素
 * 3.组件的用法和React元素基本一样
 */
class Hello extends React.Component{
  //1. 用来指定此组件长什么样子
  //2. 必须返回一个且只能返回一个顶级React元素
  render(){
    return <div><span>1</span><span>2</span></div>
  }
}
ReactDOM.render(<Hello/>,document.querySelector('#root'));


