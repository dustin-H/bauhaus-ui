var babel = require('babel-core');

module.exports = function(transformerObject) {
	var result = babel.transform(transformerObject.src); // { optional: ["es7.decorators"] }  , {plugins: [myPlugin]}
	return result.code;
}


var myplugin = function(_ref) {
	var Plugin = _ref.Plugin;
	var t = _ref.types;

	return new Plugin("foo-bar", {
		visitor: {
			FunctionDeclaration: {
				render: function enter(node, parent) {
					console.log('> render >', node);
				},

				exit: function exit(node, parent) {}
			}
		}
	});
};
