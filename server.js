var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var devServer = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
});

devServer.listen(3333, '0.0.0.0', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Running at http://0.0.0.0:3000');
    }
);
