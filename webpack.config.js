var path = require('path');

module.exports = {
  entry: [
    './node_modules/angular/angular.min.js',
    './src/public/app/app.js'
  ],
  output: {
    path: path.join(__dirname + '/src/public/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
