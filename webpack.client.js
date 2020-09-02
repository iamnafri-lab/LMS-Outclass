const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const { SourceMapDevToolPlugin } = require("webpack");

const config = {
  mode: 'development',
  entry: ["./client/index.js"],
  plugins: [
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ],
  output: {
    filename: "bundle.client.js",
    path: path.resolve(__dirname, "assets/js"),
  },
};

module.exports = merge(baseConfig, config);
