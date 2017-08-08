/**
 * 详细了解jsx语法的使用，以及使用React元素和DOM元素写法的区别
 * 1. 把这一个数组中的每个元素变成ul中的li
 * 2. 背景色为浅蓝色
 * 3. 字体的颜色为红色
 */
//不管是有没有显式的用到React,都要引起来
import React from 'react';
//import代码要放在所有的代码的最顶端
import ReactDOM from 'react-dom';
let names = ['柯洁', '冷锋', '楚乔'];
/**
 * 1.在JS中可以直接写html代码。凡是<开头的就是HTML代码
 * 2.在HTML中可以显示JS变量，但是需要用{}包裹起来,花括号里其实放的是JS的表达式，JS表达一定需要有返回值
 * 3.给React元素添加属性的方式就是在开始标签上加key/value值
 * 4. React元素和HTMl标签使用上的些差异
 *  4.1 如果给元素增加类名，不能使用class，需要使用className
 *  4.2 给元素增加行内样式，style需要等于一个对象
 *  4.3 如果=>后面是花括号，里面需要用return返回，如果小括号，则不需要用return
 */
let style = {color: 'red', fontSize: '30px'};
ReactDOM.render(<ul>
  {
    names.map((item, index) => (
        <li style={style} className={"b"+"g"} key={index}>
          {item}
        </li>
      )
    )
  }
</ul>, document.querySelector('#root'));

