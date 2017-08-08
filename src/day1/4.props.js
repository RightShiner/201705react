import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 组件的属性，属性就是那些从外界传进来，组件内部只能读，不能改的数据
 * 1.属性是什么,属性有什么?
 * 2.如何传递进来
 * 3.在组件内部如何读取属性对象
 * 4.如何设置默认属性
 * 5.如何设置属性名称和类型的检查
 */
class Person extends React.Component{
  //定义组件的默认属性
  static defaultProps = {
    gender:'男'
  }
  //设置组件属性的名称和类型
  static propTypes = {
    //姓名 值是必填项，类型是字符串
    //The prop `name` is marked as required in `Person`, but its value is `undefined`.
    name:React.PropTypes.string.isRequired,
    //性别 值是必填项，类型是字符串
    //Invalid prop `gender` of type, `number` supplied to `Person`, expected `string`. in Person
    gender:React.PropTypes.oneOf(['男','女']).isRequired
  }
  //检查参数的名称和类型

  // { name:'张三',gender:'女'}
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
ReactDOM.render(<Person name="男"  gender="女" />,document.querySelector('#root'));
