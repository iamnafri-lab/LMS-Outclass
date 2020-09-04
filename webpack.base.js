const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ],
  },
  plugins: [
    new LoadablePlugin()
  ],
};

