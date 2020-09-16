const LoadablePlugin = require("@loadable/webpack-plugin");

const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [new WebpackCleanupPlugin(), new LoadablePlugin()],
};
