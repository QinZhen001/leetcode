const webpack = require('webpack')

const webpackConfig = require('./webpack.prod.conf')


webpack(webpackConfig, (err, stats) => {
  if (err) throw err
  if (stats.hasErrors()) {
    throw new Error("打包失败")
  }
  console.log("打包成功")
})