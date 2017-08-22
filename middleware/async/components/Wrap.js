import React,{Component} from 'react';
export default class Wrap extends Component{
    render(){
        return (
            <div>
              <header>头</header>
              {this.props.children}
              <footer>尾</footer>
            </div>
        )
    }
}