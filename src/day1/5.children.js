import React from 'react';
import ReactDOM from 'react-dom';
/**
 * this.props.children代表当前组件使用的时候传入的子元素
 **/
class Wrapper extends React.Component{
  render(){
     return (
       <div style={{border:'1px dashed red'}}>
         {this.props.children}
       </div>
     )
  }
}

ReactDOM.render(<Wrapper>
 <span>hello</span> <span>world</span>
</Wrapper>,document.querySelector('#root'));