// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//   entry: './src/public/app/app.js',
//   output: {
//     path: path.resolve(__dirname, 'src/public/dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader', 'sass-loader'],
//         }),
//       },
//     ],
//   },
//   plugins: [
//     new ExtractTextPlugin('style.css'),
//   ],
// };
