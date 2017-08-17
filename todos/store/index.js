/**
 * {
 *   todos:{list:[{id:1,text:'react',completed:false}]},
 *   filter:'all'  'active' 'completed'
 * }
 */
import {createStore} from 'redux';
//引入合并后的reducer
import reducers from './reducers';
//创建一个redux仓库
let store = createStore(reducers);
//默认导出仓库
export default store;