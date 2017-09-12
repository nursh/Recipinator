const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BabiliWebpackPlugin = require('babili-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


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
    proxy: [{
      context: ['/recipe'],
      target: 'http://localhost:3000',
    }],
  },
});

exports.generateSourceMaps = ({ type }) => ({ devtool: type });

exports.clean = path => ({
  plugins: [
    new CleanWebpackPlugin([path]),
  ],
});

exports.serviceWorker = () => ({
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'Async app',
      mergeStaticsConfig: true,
      minify: true,
      staticFileGlobsIgnorePatterns: [/\.map$/],
    }),
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

exports.compressFiles = () => ({
  plugins: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});

exports.loadImages = ({ options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options,
        },
      },
    ],
  },
});

