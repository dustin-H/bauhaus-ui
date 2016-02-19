var webpack = require('webpack')
var fs = require('fs')

var modulesPath = 'modules'

var modules = fs.readdirSync(__dirname + '/' + modulesPath)
if (modules.indexOf('.DS_Store') >= 0) {
  modules.splice(modules.indexOf('.DS_Store'), 1)
}

var config = [{
  name: 'bauhaus-ui',
  context: __dirname + '/',
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}]

for (var i in modules) {
  var name = modules[i]
  config.push({
    name: 'bauhaus-ui-' + name,
    context: __dirname + '/',
    entry: __dirname + '/' + modulesPath + '/' + name + '/index.js',
    output: {
      filename: name + '.js',
      path: __dirname + '/public/modules/'
    },
    resolve: {
      alias: {
        react: 'bauhaus-ui-module-utils/npm/react',
        'react-dom': 'bauhaus-ui-module-utils/npm/react-dom',
        'react-look': 'bauhaus-ui-module-utils/npm/react-look',
        superagent: 'bauhaus-ui-module-utils/npm/superagent',
        lodash: 'bauhaus-ui-module-utils/npm/lodash'
      }
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  })
}

fs.writeFileSync(__dirname + '/src/coreModules.js', 'module.exports = '+JSON.stringify(modules))

module.exports = config;
/*
,{
   name: 'bauhaus-ui-module-InputText',
	context: __dirname + "/",
	entry: __dirname + "/modules/InputText/src/index.js",

	output: {
		filename: "bundle.js",
		path: __dirname + "/modules/InputText/build/",
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	}
} */
