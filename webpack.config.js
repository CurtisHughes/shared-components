const path = require('path');

const dist = path.resolve(__dirname, 'dist');
const src = path.resolve(__dirname, 'src');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Webpack configuration
module.exports = {
  entry: path.join(src, 'index.js'),
  output: {
    path: dist,
    filename: 'app.bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin('style.bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          "css-loader"
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};