import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import Counter from "./components/Counter";
import store from './store';
//它用来向子组件传递store
import {Provider} from 'react-redux';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
ReactDOM.render(<Provider store={store}>
  <Router>
    <Wrap>
      <Route path="/" component={App}/>
      <Route path="/counter" component={Counter}/>
    </Wrap>
  </Router>
</Provider>,document.querySelector('#root'));