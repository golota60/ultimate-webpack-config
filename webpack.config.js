
/** @type {import('webpack').Configuration} */
const mode = process.env.NODE_ENV || "development";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: mode,
  plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
  devtool: process.env.NODE_ENV === 'production' ? false : "source-map",
  devServer: {
    static: "./dist",
    hot: true
  },
  
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
      'babel-loader',
      '@linaria/webpack-loader',
    ]
    }]
  },
}