let path = require('path');
//自动生成html页面，并在里面插入打包后的脚本
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./redux/index.js',//入口文件
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
      },
      {
        test:/\.css$/,//如果文件后缀是css
        loaders:["style-loader","css-loader"]
      },
      {
        test:/\.less$/,//如果文件后缀是less
        loaders:["style-loader","css-loader","less-loader"]
      },
      {
        test:/\.(eot|svg|woff|woff2|ttf|jpg|png|gif)$/,//如果是bootstrap中的这五种字体的话
        loader:'url-loader'
      }
    ]
  },
  //能让控制台的报错信息指向源代码，而非打包后的文件
  devtool:"source-map",
  //自动产出html文件，并且插入打包后的脚本
  plugins:[
     new HtmlWebpackPlugin({
       template:'index.html'
     })
  ]
}