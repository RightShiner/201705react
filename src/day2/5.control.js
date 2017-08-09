import React from 'react';
import ReactDOM from 'react-dom';
class Suggest extends React.Component{
  constructor(){
    super();
    this.state = {name:'zfpx'};
  }
  clear = ()=>{
    this.setState({name:undefined});
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.name}/>
        <button onClick={this.clear}>clear</button>
      </div>
    )
  }
}
ReactDOM.render(<Suggest/>, document.querySelector('#root'));