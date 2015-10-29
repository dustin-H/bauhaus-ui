var path = require('path');
var unijsBundle = require('unijs-bundle');

unijsBundle({
	entryFile: require.resolve(path.join(__dirname, 'src', 'index.js')),
	transformers: [require.resolve('./babelTransformer.js')]
});
