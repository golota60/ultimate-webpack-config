
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

  // Put all images in a separate directory
  output: {
    assetModuleFilename: "images/[hash][ext][query]"
  },

  module: {
    rules: [
      {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      },
      // If any issues with images come up, uncomment this
      {
        test: /\.(png|jpg|jpeg|gif)/i,
        type: 'asset' // Inlines all images under 8kB - Change to 'asset/resource' to not inline images or to 'asset/inline' to inline all images
      },
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