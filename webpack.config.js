const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          loader: "css-loader"
        })
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|svg|gif|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 }
          }
        ]
      }
    ]
  },
  watch: true,
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin("bundle.css"),
    new LiveReloadPlugin()
  ]
}