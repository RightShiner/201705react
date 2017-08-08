let path = require('path');
module.exports = {
  entry:'./src/index.js',//入口文件
  output:{//输出设置
    path:path.resolve('build'),//指定输出的路径(目录),不能写相对路径，只能写绝对路径
    filename:'bundle.js'
  },
  //用来配置模块的加载器
  module:{
    rules:[
      {
        test:/\.jsx?$/,//如果要加载的模块后缀是.js的话
        loader:'babel-loader',//使用loader来加载
        exclude:/node_modules/ // 对于node_modules下面的文件不解析
      }
    ]
  }
}