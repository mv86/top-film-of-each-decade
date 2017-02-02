config = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }
    ]
  },
  devtool: 'source-map'
};

module.exports = config;