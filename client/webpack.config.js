const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const outputDirName = 'dist';
const staticDirName = 'public';

module.exports = {
  entry: './index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.tsx', '.ts'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, staticDirName),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, staticDirName, 'index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, staticDirName),
          to: path.join(__dirname, outputDirName),
          filter: function (resourcePath) {
            const invalidExts = ['html'];
            const ext = resourcePath.split('.').pop();
            return !invalidExts.includes(ext);
          },
        },
      ],
    }),
    new HotModuleReplacementPlugin(),
    new EslintWebpackPlugin({ extensions: ['ts', 'js', 'tsx', 'jsx'] }),
  ],
  output: {
    path: path.resolve(__dirname, outputDirName),
    filename: 'main.js',
  },
};
