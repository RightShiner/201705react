let express = require('express');
let app = express();
app.get('/text',function(req,res){
  //允许任何来源访问本接口
  res.header('Access-Control-Allow-Origin','*');
  setTimeout(function(){
    if(Date.now()%2==0){
      res.json({code:0,text:'hello'});//code=0,表示返回成功
    }else{
      //code=1表示返回失败
      res.json({code:1,error:'服务器端错误'})
    }
  },3000)
});
app.listen(3000);