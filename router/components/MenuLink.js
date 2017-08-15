import React from 'react';
import {Route,Link} from 'react-router-dom';
export default function({exact,label,to}){
  //children不管URL里的路径跟path是否匹配，都能渲染出来
  //如果URL里的路径跟当前路由规则的path匹配成功,match是有值的，否则match=null
  return (
    <Route exact={exact} path={to} children={({match})=>(
      <li className={match?'active':''}><Link to={to}>{label}</Link></li>
    )} />
  )
}