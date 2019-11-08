const path = require('path')

module.exports = {
  mode: 'development',
  entry: './app.scss',
  output: {
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'thread-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  }
}
