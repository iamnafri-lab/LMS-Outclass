const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  mode: 'development',
  entry: ["./client/index.js"],

  plugins: [new HtmlWebpackPlugin({
    template: "./client/bootup.html",
    filename: 'bootup.html'
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },


  output: {
    filename: "[name].[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
};

let mergedConfigs = merge(baseConfig, config);

if (mergedConfigs.mode === 'production') {
  mergedConfigs = merge(mergedConfigs, {
    //production configs goes here
  });
}

module.exports = mergedConfigs;