const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/game/main.js',
    select: './src/select.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        chunks: ['main'],
        filename: 'index.html',
        template: './templates/index.html',
    }),
    new HtmlWebpackPlugin({
        chunks: ['select'],
        filename: 'select.html',
        template: './templates/select.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};