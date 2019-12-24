/*
 * @Author: xzl 
 * @Date: 2019-12-12 13:57:34 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-20 14:29:24
 */
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
module.exports = {
  productionSourceMap: false,
  productionTip = false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {    //添加gzip 压缩
            config.plugins.push(new CompressionWebpackPlugin({
              algorithm: 'gzip',
              test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
              threshold: 10240,
              minRatio: 0.8
            }))
          }
    },
    devServer: {
    
    }
}