const webpack = require('webpack');
const mockPlugin = require("./webpack/plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ],
  },
  optimization: {
    moduleIds: 'named',
  },
  // webpack configuration
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new mockPlugin()
  ]
}
