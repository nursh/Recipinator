const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BabiliWebpackPlugin = require('babili-webpack-plugin');


exports.devServer = path => ({
  devServer: {
    contentBase: path,
    hot: true,
    compress: true,
    port: 8080,
    historyApiFallback: true,
    stats: 'errors-only',
    open: true,
    openPage: '',
  },
});

exports.generateSourceMaps = ({ type }) => ({ devtool: type });

exports.clean = path => ({
  plugins: [
    new CleanWebpackPlugin([path]),
  ],
});

exports.minifyJavascript = () => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new BabiliWebpackPlugin(),
  ],
});

exports.loadImages = ({ options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options,
        },
      },
    ],
  },
});

