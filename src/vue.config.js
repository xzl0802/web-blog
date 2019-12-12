/*
 * @Author: xzl 
 * @Date: 2019-12-12 13:57:34 
 * @Last Modified by: xzl
 * @Last Modified time: 2019-12-12 16:28:05
 */
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {    //添加gzip 压缩
            config.plugins.push(new CompressionWebpackPlugin({
              algorithm: 'gzip',
              test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
              threshold: 10240,
              minRatio: 0.8
            }))
          }
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
           BASE_API='"http://106.13.177.99:7001/"'
        }
        else {
            // 为开发环境修改配置...
           BASE_API= '"http://localhost:7001"'
        }
    },
    devServer: {
    
    }
}