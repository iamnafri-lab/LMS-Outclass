const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const config = {
  target: "node",
  mode: 'development',
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
};
module.exports = merge(baseConfig, config);
