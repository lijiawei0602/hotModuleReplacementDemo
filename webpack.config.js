const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

module.exports = {
    entry: {
        app: PATHS.app + '/index.js',
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
    devServer:{
        hot: true,
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
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
        title: 'Webpack demo',
        }),
    ],
};