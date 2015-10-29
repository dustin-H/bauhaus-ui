module.exports = {
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
}
