
var webpack = require('webpack')

var productionPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"'
})

module.exports = {
  context: __dirname + '/',
  entry: __dirname + '/src/index.js',
  plugins: [productionPlugin],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build/'
  },
  externals: [{
    'inline-style-linter': 'true'
  }],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['add-module-exports', 'transform-react-display-name', 'transform-decorators-legacy']
      }
    }]
  }
}
