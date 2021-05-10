const path = require('path');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding
const dotenv = require('dotenv').config( {
  path : path.join(__dirname, '.env')
})

const NODE_ENV = process.env.NODE_ENV || 'development';

const mode = {
  local: 'development',
  development: 'development',
  testing: 'development',
  staging: 'development',
  production: 'development',
};

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: './src/index.js',
  target: 'node',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.ts', '.json', '.wasm'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.(js|ts)$/,
      exclude: `${__dirname}/node_modules`,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new NodemonPlugin(),
  ],
  externals: [{
    fsevents: 'fsevents',
  }],
};
