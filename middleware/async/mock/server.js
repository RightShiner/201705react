let express = require('express');
let app = express();
app.get('/text',function(req,res){
  //允许任何来源访问本接口
  res.header('Access-Control-Allow-Origin','*');
  setTimeout(function(){
    if(Date.now()%2==0){
      res.json({text:'hello'});//默认状态码是200,表示返回成功
    }else{
      //状态码是500,表示返回失败
      res.status(500).json({error:'服务器端错误'})
    }
  },3000)
});
app.listen(3000);