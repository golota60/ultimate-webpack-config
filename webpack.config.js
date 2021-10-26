/** @type {import('webpack').Configuration} */

const mode = process.env.NODE_ENV || "development";
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: mode,
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  entry: "./src/index.tsx",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  // Put all images in a separate directory
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack" }],
      },
      {
        test: /\.(png|jpg|jpeg|gif)/i,
        type: "asset", // Inlines all images under 8kB - Change to 'asset/resource' to not inline images or to 'asset/inline' to inline all images
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "@linaria/webpack-loader", "ts-loader"],
      },
    ],
  },
};
