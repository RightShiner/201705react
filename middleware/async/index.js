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
import Wrap from "./components/Wrap";
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter} from 'react-router-redux';
let history = createHistory();
ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <Wrap>
      <Route exact path="/" component={App}/>
      <Route path="/counter" component={Counter}/>
    </Wrap>
  </ConnectedRouter>
</Provider>,document.querySelector('#root'));

/**
 * 1.引入 ConnectedRouter
 * 2.引入并创建history并传递给ConnectRouter
 * 3.合并routerReducer
 **/