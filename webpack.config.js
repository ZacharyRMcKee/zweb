var path = require('path');

module.exports = {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'bundle.js',
    },
    entry: './src/index.js',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    devServer: {

      // host
      contentBase:'dist',
      watchContentBase: true,
      hot: true,
      compress: true,

      port: 9001
    }
  };