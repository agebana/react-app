const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "_build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      ["@src"]: path.resolve(__dirname, "src/"),
      ["@css"]: path.resolve(__dirname, "src/css/"),
      ["@screens"]: path.resolve(__dirname, "src/screens/")
    },
    extensions: [".js", ".jsx", ".css"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack + React App",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        exclude: [/\.(js|jsx)$/, /\.html$/, /\.ejs$/],
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]_[hash:7].[ext]",
              publicPath: "assets/images/",
              outputPath: "assets/images/"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: "image-webpack-loader"
          }
        ]
      }
    ]
  }
};
