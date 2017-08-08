let path = require('path');
module.exports = {
  entry:'./src/index.js',//入口文件
  output:{//输出设置
    path:path.resolve('build'),//指定输出的路径(目录),不能写相对路径，只能写绝对路径
    filename:'bundle.js'
  }
}