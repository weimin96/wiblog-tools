module.exports = {
  assetsDir: 'static',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 生产构建期间禁用
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  devServer: {
    // 错误时编译失败
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // '/api': {
      //   target: 'http://127.0.0.1:8080',
      //   ws: true,
      //   pathRewrite: {
      //     '^/api': '/'
      //   }
      // },
      '/api': {
        target: 'https://word.wiblog.cn',
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }

}
