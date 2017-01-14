
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
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
  plugins: [
			// existing plugins go here
			new webpack.SourceMapDevToolPlugin({
				filename: null, // if no value is provided the sourcemap is inlined
				test: /\.(ts)($|\?)/i // process .ts files only
			})
		]
}
