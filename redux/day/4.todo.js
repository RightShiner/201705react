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
let initState = {list: ['请输入...']};
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
  handleKeyDown = (event)=>{
    //取得当前按下的键
    let keyCode = event.keyCode;
    if(keyCode == 13){
      //获取输入框的值
      let text = event.target.value;
      store.dispatch(addTodo(text));//向仓库派发一个action
      event.target.value = '';
    }
  }
  render() {
    return (
      <div style={{border:'1px solid red'}}>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul>
          {
            this.state.list.map((item,index)=>(
              <li key={index}>{item} <button onClick={()=>store.dispatch(delTodo(index))}>x</button></li>
            ))
          }
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<div><Todo/><Todo/></div>, document.querySelector('#root'));


