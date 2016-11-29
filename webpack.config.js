'use strict';

var path = require('path');
var webpack = require('webpack');


const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

module.exports = {
  entry: [
    path.resolve(__dirname, './src/index.jsx')
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets:['react','es2015']
        }
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    port: PORT,
		host: HOST
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
  ]
};
