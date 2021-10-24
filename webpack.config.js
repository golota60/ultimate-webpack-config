
/** @type {import('webpack').Configuration} */
const mode = process.env.NODE_ENV || "development";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: mode,
  plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true
  },
  
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
        {
          loader: "sass-loader",
        },
      ],
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
      {
        loader: "babel-loader",
      },    
      {
        loader: '@linaria/webpack-loader',
        options: {
          sourceMap: process.env.NODE_ENV !== 'production',
        },
      }
    ]
    }]
  },
}