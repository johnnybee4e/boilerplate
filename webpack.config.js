module.exports = {
  entry: './client/app.js',
  mode: 'development',
  output: {
    path: __dirname, // make sure to double check where bundle.js is located
    filename: './public/bundle.js',
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
};
