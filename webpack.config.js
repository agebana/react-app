const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      ["@components"]: path.resolve(__dirname, "src/components/"),
      ["@styles"]: path.resolve(__dirname, "src/styles/"),
      ["@src"]: path.resolve(__dirname, "src/"),
      ["@api"]: path.resolve(__dirname, "src/api"),
      ["@ducks"]: path.resolve(__dirname, "src/ducks"),
      ["@enhancers"]: path.resolve(__dirname, "src/enhancers")
    },
    extensions: [".js", ".jsx", ".css", ".scss"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack + React App",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
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
        test: /\.s?css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { modules: true, sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
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
