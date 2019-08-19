const webpack = require("webpack")
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require("path")


const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash].js',
    publicPath: '/'
  },
  devServer: {
    // 告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
    contentBase: path.join(__dirname, '../dist'),
    open: false,  //自动打开浏览器
    compress: true,
    inline: true,
    hot: true,
    port: 9000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})


module.exports = devWebpackConfig