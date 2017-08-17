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
  render() {
    let items = this.state.list.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul>
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
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