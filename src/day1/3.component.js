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
 * 1.组件名字必须是以大写字母开头,是为了区分React元素和组件
 * 2.组件内有render方法，返回一个顶级React元素
 * 3.组件的用法和React元素基本一样
 *
 */
class Hello extends React.Component{
  //1. 用来指定此组件长什么样子
  //2. 必须返回一个且只能返回一个顶级React元素
  render(){
    return <div><span>1</span><span>2</span></div>
  }
}
/**
 * 1. 实例化Hello类的实例 let hello = new Hello();
 * 2. 调用实例上的render方法 .  let ele = hello.render(); ele=div
 * 3. 把个ele转成真实的DOM元素并且插入到页面中去
 */
ReactDOM.render(<Hello/>,document.querySelector('#root'));


