module.exports = [{
   name: 'bauhaus-ui',
	context: __dirname + "/",
	entry: __dirname + "/src/index.js",

	output: {
		filename: "bundle.js",
		path: __dirname + "/build/",
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	}
}]
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
