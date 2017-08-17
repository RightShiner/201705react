import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {CSSTransitionGroup} from 'react-transition-group';
import './index.css'
console.log(CSSTransitionGroup);
class Todos extends Component {
  constructor() {
    super();
    this.state = {list: ['aaaa', 'bbb', 'cccc']};
  }
  handleKeyDown = (event) => {
    if(event.keyCode == 13 && event.target.value.length>0){
      this.setState({list:[...this.state.list,event.target.value]});
      event.target.value = '';
    }
  }
  handleClick = (index)=>{
    let list = this.state.list.slice();
    list.splice(index,1);
    this.setState({list});
  }
  render() {
    let items = this.state.list.map((item, index) => (
      <li key={index} onClick={()=>this.handleClick(index)}>{item}</li>
    ));

    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul>
          <CSSTransitionGroup
            transitionName="move"
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={300}
          >
            {items}
          </CSSTransitionGroup>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Todos/>, document.querySelector('#root'));