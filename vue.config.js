const { join } = require('path');

module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
        config
            .plugin('html')
            .tap(args => {
                args[0].template = './public/index.html'
                return args
            })
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();
        
        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
    outputDir: join(__dirname, "../resources/redside/uibuild"),
    publicPath:'./',
    indexPath: './index.html',
    devServer: {
        port: 8080,
        open: true,
        //host:'127.0.0.1'
    },
    productionSourceMap: false,

}