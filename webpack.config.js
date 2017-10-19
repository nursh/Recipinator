const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const parts = require('./webpack.parts');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build'),
};

const commonConfig = {
  context: PATHS.src,

  entry: {
    app: './App.jsx',
  },

  output: {
    path: PATHS.build,
    filename: '[name].[hash:8].js',
  },

  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.css$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: { minimize: true },
        },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: 'favicon.ico',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[hash:8].js',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin([
      { from: 'manifest.json', to: 'manifest.json' },
    ]),

  ],

};

const productionConfig = merge([
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.clean(PATHS.build),
  parts.minifyJavascript(),
  parts.loadImages({
    options: {
      limit: 8192,
      name: '[path][name].[ext]',
    },
  }),
  parts.compressFiles(),
  parts.serviceWorker(),
]);

const developmentConfig = merge([
  parts.devServer(PATHS.build),
  parts.generateSourceMaps({ type: 'eval-source-map' }),
  parts.clean(PATHS.build),
  parts.loadImages(),
]);

module.exports = (env) => {
  const config = (env === 'production')
    ? merge(commonConfig, productionConfig)
    : merge(commonConfig, developmentConfig);
  return config;
};
