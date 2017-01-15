
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

//Remove sourcemaps from production version
webpackConfig.devtool = undefined;
webpackConfig.plugins = undefined;
webpackConfig.ts = {
    compilerOptions: {
        "sourceMap": false
    }
};

module.exports = webpackConfig;
