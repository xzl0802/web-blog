module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            BASE_API: '"http://localhost:7001"'
        }
        else {
            // 为开发环境修改配置...
            BASE_API: '"http://localhost:7001"'
        }
    },
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        lintOnSave: false
    }
}