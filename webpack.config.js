
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

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      },
      // If any issues with images come up, uncomment this
      // {
      //   test: /\.(png|jpe?g|gif)/i,
      //   type: 'asset/resource'
      // },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
        'babel-loader',
        '@linaria/webpack-loader',
      ]
      }]
  },
}