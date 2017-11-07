let path = require('path');
let webpack = require('webpack');

module.exports = {
    devServer: {
        publicPath: '/dist/',
        hot: true
    },
        //这里还可以加入其它你需要的参数
    entry: ["./src/index.js"],
    output: {
        path: path.join( __dirname, '/dist'),
        publicPath: '/dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/, 
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css!less"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};