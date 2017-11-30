const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/App.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js(x)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js(x)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
};
