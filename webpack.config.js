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
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {loader: 'sass-loader'}
                ]
            },
            // {
            //     test: /\.less$/,
            //     use: 'style!css!postcss!less'
            // },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'postcss-loader']
            // },
            // {
            //     test: /\.ts$/,
            //     use: 'ts-loader'
            // }
        ]
    },
    mode: 'none',
    parser: 'sugarss',
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