var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js'
        // publicPath: 'http://nikai.net.cn'
    },
    module: {
        rules: [
            {
              test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test:/\.html$/,
                use: "html-loader"
            }

        ]
    },
    mode: 'none',
    // parser: 'sugarss',
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: 'body',
            title: 'this a page'
        })
    ]
    // ,
    // postcss: [
    //     require('autoprefixer')({
    //         browsers: ['last 5 versions']
    //     })
    // ]
}