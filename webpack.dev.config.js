const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, './client/index.js')
	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			loaders: ["style-loader", "css-loader", "sass-loader"]
		}]
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname + '/client',
		historyApiFallback: true
	}
};