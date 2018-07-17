const path = require('path');

const dist = path.resolve(__dirname, 'dist');
const src = path.resolve(__dirname, 'src');

// Webpack configuration
module.exports = {
  entry: path.join(src, 'index.js'),
  output: {
    path: dist,
    filename: 'app.bundle.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
      {
        test: /\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};