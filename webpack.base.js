const LoadablePlugin = require('@loadable/webpack-plugin')

const mode = process.env.NODE_ENV || 'development';
module.exports = {
  mode,
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

