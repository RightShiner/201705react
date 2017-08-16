import {createStore} from 'redux';
//仓库里将要存放二种状态，一个是counter 一个todo
// counter {number:0}   todos   {list:[]}

//仓库的状态树会长这样 {counter:{number:0},todos:{list:[]}}
import reducer from './reducers';
let store = createStore(reducer);
export default store;