const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  mode: 'development',
  entry: ["./client/index.js"],

  output: {
    filename: "bundle.client.js",
    path: path.resolve(__dirname, "dist"),
  },
};

module.exports = merge(baseConfig, config);
