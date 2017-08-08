//react是核心库 设置房子
import React from 'react';
//react-dom是跟DOM操作相关的库 盖房子
import ReactDOM from 'react-dom';
/**
 * 1. render渲染的意思
 * 2. 把一个h1标签添加到root这个DOM元素的内部
 * 3. react对JS作了扩展，react使用的自己的扩展的jsx语法
 * 4. javascript+xml(html) 这是一种可以让html和js混合书写的一种语法
 * 5.
 */
let ele = <h1>hello</h1>;
console.log(ele);
//{type:'h1',props:{children:'hello'}}
ReactDOM.render(ele,document.querySelector('#root'));

/**
 * <h1>hello</h1>
 * 可不是简单的HTML.React元素
 * 元素是构成这个世界的基本单位
 * React元素也是构建React应用的基本最小单位
 * 每一个html标签都是一个React元素
 * React元素描述了界面的显示的样子
 * React元素并不是真实的，真正的DOM元素
 *<h1>hello</h1>==>{type:'h1',children:'hello'}
 */
