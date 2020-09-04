const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");


const config = {
  target: "node",

  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
};


let mergedConfigs = merge(baseConfig, config);

if (mergedConfigs.mode === 'production') {
  mergedConfigs = merge(mergedConfigs, {
    //production configs goes here
  });
}

module.exports = mergedConfigs;