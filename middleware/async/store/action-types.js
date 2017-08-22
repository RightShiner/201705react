//开始请求后台接口获取数据,会把status改为加载中。。。
export const FETCH_TEXT_REQUEST = 'FETCH_TEXT_REQUEST';
//后台返回数据成功,会把status改为加载成功，另外会把text设置为从后台得到的字符串
export const FETCH_TEXT_SUCCESS = 'FETCH_TEXT_SUCCESS';//{type:FETCH_TEXT_SUCCESS,text}
//后台返回数据失败,会把status改为加载失败，另外会把text设置为失败的原因//{type:FETCH_TEXT_SUCCESS,error}
export const FETCH_TEXT_FAILURE = 'FETCH_TEXT_FAILURE';