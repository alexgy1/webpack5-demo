const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js",
    // index: {
    //   import: "./src/index.js",
    //   dependOn: "shared",
    // },
    // another: {
    //   import: "./src/another-module.js",
    //   dependOn: "shared",
    // },
    // shared: "lodash",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  //不加这个发现也可以
  // optimization: {
  //   runtimeChunk: "single",
  // },
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
};
