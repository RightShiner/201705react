import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
const ADD_TODO = 'ADD_TODO';
const DEL_TODO = 'DEL_TODO';
let addTodo = (text) => { // action creator
  return {type: ADD_TODO, text};
}
let delTodo = (index) => {// action creator
  return {type: DEL_TODO, index};
}
//1.创建reducer 一般的状态都会初始化成一个对象
let initState = {list: []};
let reducer = (state = initState, action) => {
  switch (action.type) {//判断动作的类型
    case ADD_TODO://如果要增加一个todo的话
      //!!! 永远不要修改原来的状态，每次都要生成一个新的状态
      // {type:'ADD_TODO',text:'study'}
      return {list: [...state.list, action.text]};
    case DEL_TODO:
      // {type:'DEL_TODO',index:1}
      return {list: state.list.filter((item, index) => index != action.index)};
    default:
      return state;
  }
}
//2.创建store
let store = createStore(reducer);
//3. 创建Todo组件
//4.连接store和Todo组件
class Todo extends React.Component {
  constructor() {
    super();
    //这时其实是实现了store的状态和本地状态的映射
    //仓库里状态很多，但是本组件可能只需很少一部分，那么只需要把自己需要的部分拿过来即可
    this.state = {list: store.getState().list};
  }

  componentWillMount() {
    store.subscribe(() => {
      this.setState({list: store.getState().list});
    });
  }

  render() {
    return (
      <div>
        <input type="text"/>
        <ul>
          {
            this.state.list.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<Todo/>, document.querySelector('#root'));


