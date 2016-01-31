/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _bauhausUiModuleUtilsNpmReact = __webpack_require__(1);

	var _bauhausUiModuleUtilsNpmReact2 = _interopRequireDefault(_bauhausUiModuleUtilsNpmReact);

	var _bauhausUiModuleUtilsNpmReactLook = __webpack_require__(2);

	var _bauhausUiModuleUtilsNpmReactLook2 = _interopRequireDefault(_bauhausUiModuleUtilsNpmReactLook);

	var _bauhausUiModuleUtils = __webpack_require__(3);

	var _styleJs = __webpack_require__(4);

	var _styleJs2 = _interopRequireDefault(_styleJs);

	var InputText = (function (_Component) {
		_inherits(InputText, _Component);

		function InputText() {
			_classCallCheck(this, InputText);

			_get(Object.getPrototypeOf(InputText.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(InputText, [{
			key: 'handleChange',
			value: function handleChange(event) {
				var _props = this.props;
				var bauhaus = _props.bauhaus;
				var get = _props.get;
				var set = _props.set;

				var value = event.target.value;
				set(bauhaus.props.path, value);
			}
		}, {
			key: 'render',
			value: function render() {
				var _props2 = this.props;
				var bauhaus = _props2.bauhaus;
				var get = _props2.get;
				var set = _props2.set;

				return _bauhausUiModuleUtilsNpmReact2['default'].createElement('input', { look: styles.textInput, type: 'text', value: get(bauhaus.props.path), onChange: this.handleChange.bind(this) });
			}
		}]);

		return InputText;
	})(_bauhausUiModuleUtilsNpmReact.Component);

	var styles = _bauhausUiModuleUtilsNpmReactLook.StyleSheet.create(InputText, _styleJs2['default']);

	__GLOBAL__.exportDefault = (0, _bauhausUiModuleUtilsNpmReactLook2['default'])(InputText);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __GLOBAL__.npm['react'];


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __GLOBAL__.npm['react-look'];


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __GLOBAL__.bauhaus;


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var style = {
		textInput: {
			padding: '8px',
			paddingLeft: '16px',
			paddingRight: '16px',
			borderRadius: '50px', // 4px
			border: '1px solid rgb(210, 210, 210)',
			boxSizing: 'border-box',
			backgroundColor: 'transparent',
			fooBar: 'none',
			outline: 'none',
			color: '#4E4E4E',
			fontSize: '14px',
			width: '100%',
			':focus': {
				border: '1px solid #20C753', // F96331 6E00FF
				color: '#000000'
			}
		}
	};
	exports['default'] = style;
	module.exports = exports['default'];

/***/ }
/******/ ]);