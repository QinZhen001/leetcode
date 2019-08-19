const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const path = require("path")
const config = require("./config.js")

let plugins = [
  new OptimizeCssAssetsPlugin({})
]

if (config.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins.push(new BundleAnalyzerPlugin())
}

const proWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  plugins: plugins
})


module.exports = proWebpackConfig