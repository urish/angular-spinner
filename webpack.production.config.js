
var webpack = require('webpack');

module.exports = {
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  ts: {
    compilerOptions: {
        "sourceMap": false
    }
  }
}
