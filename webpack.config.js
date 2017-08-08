let path = require('path');
//自动生成html页面，并在里面插入打包后的脚本
let HtmlWebpackPlugin = require('html-webpack-plugin');
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
  },
  //自动产出html文件，并且插入打包后的脚本
  plugins:[
     new HtmlWebpackPlugin({
       template:'./src/index.html'
     })
  ]
}