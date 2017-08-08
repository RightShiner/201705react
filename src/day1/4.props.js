import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 组件的属性，属性就是那些从外界传进来，组件内部只能读，不能改的数据
 */
class Person extends React.Component{
  constructor(props){ //props= {name:'张三',gender:'男'}
    super(props);//super就代表父类的构造函数 this.props = props;
  }
  render(){
    return (
      <div>
        <p>姓名:{this.props.name}</p>
        <p>性别:{this.props.gender}</p>
      </div>
    )
  }
}
/**
 * 1.先把使用组件的属性拼成一个属性对象 {name:'张三',gender:'男'}
 * 2.把这个属性对象传进Person的构造函数，从而得以Person的实例
 *
 */
ReactDOM.render(<Person name="张三" gender="男"/>,document.querySelector('#root'));
