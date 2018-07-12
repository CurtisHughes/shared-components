const path = require('path');
const build = path.resolve(__dirname, 'build');
const src = path.resolve(__dirname, 'src');
const public = path.resolve(__dirname, 'public');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack configuration
module.exports = {
  entry: path.join(src, 'index.js'),
  output: {
    path: build,
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(public, 'index.html'),
    }),
  ],
};
