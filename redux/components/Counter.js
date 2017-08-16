import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
class Counter extends Component{
  render(){
    return (
      <div>
        <p>{this.props.number}</p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}
//把store的状态对象映射当前组件的属性
let mapStateToProps = (state)=>{
 return {number:state.counter.number};
}
//把dispatch方法映射为属性对象
let mapDispatchToProps = dispatch=>({
  increment:()=>dispatch({type:types.INCREMENT})
})
//默认导出连接后的组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);