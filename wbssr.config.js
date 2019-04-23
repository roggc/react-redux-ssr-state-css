const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

const devMode = process.env.NODE_ENV !== 'production';
module.exports =
{
  target: 'node',
  externals: [nodeExternals()],
  entry:
  {
    ssr: './src/entry/ssr.js'
  },
  output:
  {
    path: path.join(__dirname, 'out/server'),
    filename: './[name].bundle.js',
    libraryTarget: 'umd'
  },
  module:
  {
    rules:
    [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        loaders:
        [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options:
            {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[local]___[contenthash:base64:5]'
            }
          },
          'sass-loader',
        ]
      },
    ]
  },
  plugins:
  [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin
    (
      {
        filename: './[name].bundle.css'
      }
    ),
    new webpack.DefinePlugin({
      __isClient__: false,
      __devMode__: devMode
    }),
  ],
  watchOptions:
  {
    ignored:
    [
      path.join(__dirname, 'node_modules')
    ]
  }
};
