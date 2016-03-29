var webpack = require('webpack')
var fs = require('fs')

var productionPlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': '"' + process.env.NODE_ENV + '"'
})

var modulesPath = __dirname + '/modules'
var moduleCreatorsPath = __dirname + '/.moduleCreators'

var modules = fs.readdirSync(modulesPath)
if (modules.indexOf('.DS_Store') >= 0) {
  modules.splice(modules.indexOf('.DS_Store'), 1)
}

try {
  fs.mkdirSync(moduleCreatorsPath)
} catch ( e ) {}

var config = [{
  name: 'bauhaus-ui',
  plugins: [productionPlugin],
  context: __dirname + '/',
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/'
  },
  externals: [{
    'inline-style-linter': 'true'
  // 'inline-style-prefixer': 'true'
  }],
  module: {
    loaders: [{
      test: /\.svg$/,
      loader: 'babel!svg-react?reactDOM=react'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}]

for (var i in modules) {
  var name = modules[i]
  var modulePath = modulesPath + '/' + name + '/index.js'
  // var reqModulePath = modulesPath + '/' + modulePath + '/index.js'
  var creatorPath = moduleCreatorsPath + '/' + name + '.js'
  var src = '__GLOBAL__.exportDefault = require("' + modulePath + '")'
  fs.writeFileSync(creatorPath, src)

  var moduleConfig = {
    name: 'bauhaus-ui-' + name,
    plugins: [productionPlugin],
    context: __dirname + '/',
    entry: creatorPath,
    output: {
      filename: name + '.js',
      path: __dirname + '/public/modules/'
    },
    /*resolve: {
      alias: {
        'react/lib/ReactTransitionGroup': 'bauhaus-ui-module-utils/npm/react-lib-ReactTransitionGroup',
        'react/lib/update': 'bauhaus-ui-module-utils/npm/react-lib-update',
        'react/lib/ReactComponentWithPureRenderMixin': 'bauhaus-ui-module-utils/npm/react-lib-ReactComponentWithPureRenderMixin',
        'react/lib/ReactFragment': 'bauhaus-ui-module-utils/npm/react-lib-ReactFragment',
        'react-dom$': 'bauhaus-ui-module-utils/npm/react-dom',
        superagent$: 'bauhaus-ui-module-utils/npm/superagent',
        lodash$: 'bauhaus-ui-module-utils/npm/lodash'
      }
    },*/
    externals: [{
      react: 'var __GLOBAL__.npm.react',
      'react-look': 'var __GLOBAL__.npm["react-look"]',
      'react/lib/ReactTransitionGroup': 'var __GLOBAL__.npm["react-lib-ReactTransitionGroup"]',
      'react/lib/update': 'var __GLOBAL__.npm["react-lib-update"]',
      'react/lib/ReactComponentWithPureRenderMixin': 'var __GLOBAL__.npm["react-lib-ReactComponentWithPureRenderMixin"]',
      'react/lib/ReactFragment': 'var __GLOBAL__.npm["react-lib-ReactFragment"]',
      'react-dom': 'var __GLOBAL__.npm["react-dom"]',
      superagent: 'var __GLOBAL__.npm["superagent"]',
      lodash: 'var __GLOBAL__.npm["lodash"]'
    }],
    module: {
      loaders: [{
        test: /\.svg$/,
        loader: 'babel!svg-react?reactDOM=react'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  }

  if (name === 'InputFiles') {
    moduleConfig.externals = moduleConfig.externals || [{}]
    moduleConfig.externals[0].fs = 'true';
    moduleConfig.externals[0]['./lib/resize_webgl'] = 'true';
  }

  config.push(moduleConfig)
}

fs.writeFileSync(__dirname + '/src/coreModules.js', 'module.exports = ' + JSON.stringify(modules))

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
