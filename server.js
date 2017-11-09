// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');

// var config = require('./webpack.config.js');
// config.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
// var compiler = webpack(config);
// var server = new WebpackDevServer(compiler, config.devServer);
// server.listen(8080);



// const webpackDevServer = require('webpack-dev-server');
// const webpack = require('webpack');

// const config = require('./webpack.config.js');
// const options = {
//   contentBase: './dist',
//   hot: true,
//   host: 'localhost'
// };

// webpackDevServer.addDevServerEntrypoints(config, options);
// const compiler = webpack(config);
// const server = new webpackDevServer(compiler, options);

// server.listen(5000, 'localhost', () => {
//   console.log('dev server listening on port 5000');
// });