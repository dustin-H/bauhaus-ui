/*
const React = __GLOBAL__.npm.react();
const PropTypes = React.PropTypes;
const Component = React.Component;
const Look = __GLOBAL__.npm['react-look']();
const StyleSheet = Look.StyleSheet;

const $ = __GLOBAL__.bauhaus.$;

class InputText extends Component {
	render() {
		const {bauhaus, some} = this.props;
		return (
			<span>
				<span>{$(bauhaus.props.label)}
					+
					{some}</span>
				<input look={styles.textInput} type="text" defaultValue={$(bauhaus.props.defaultValue)}></input>
			</span>
		);
	}
}

var styleSheet = {
	textInput: {
		padding: '8px',
		paddingLeft: '16px',
		paddingRight: '16px',
		borderRadius: '50px', // 4px
		border: '1px solid rgb(210, 210, 210)',
		boxSizing: 'border-box',
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
}

//import styleSheet from './style.js';
var styles = StyleSheet.create(InputText, styleSheet);

export default Look(InputText);*/


//const React = __GLOBAL__.npm.react();
//const PropTypes = React.PropTypes;
//const Component = React.Component;
//const Look = __GLOBAL__.npm['react-look']();
//const StyleSheet = Look.StyleSheet;

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __GLOBAL__.npm.react;

var _react2 = _interopRequireDefault(_react);

var _reactLook = __GLOBAL__.npm['react-look'];

var _reactLook2 = _interopRequireDefault(_reactLook);

var _utilsI18nIndexJs = {$: __GLOBAL__.bauhaus.$};

//import Look, {StyleSheet} from 'look';

//const $ = __GLOBAL__.bauhaus.$;

var InputText = (function (_Component) {
	_inherits(InputText, _Component);

	function InputText() {
		_classCallCheck(this, InputText);

		_get(Object.getPrototypeOf(InputText.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(InputText, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var bauhaus = _props.bauhaus;
			var some = _props.some;

			return _react2['default'].createElement(
				'span',
				null,
				_react2['default'].createElement(
					'span',
					null,
					(0, _utilsI18nIndexJs.$)(bauhaus.props.label),
					'+',
					some
				),
				_react2['default'].createElement('input', { look: styles.textInput, type: 'text', defaultValue: (0, _utilsI18nIndexJs.$)(bauhaus.props.defaultValue) })
			);
		}
	}]);

	return InputText;
})(_react.Component);

var styleSheet = {
	textInput: {
		padding: '8px',
		paddingLeft: '16px',
		paddingRight: '16px',
		borderRadius: '50px', // 4px
		border: '1px solid rgb(210, 210, 210)',
		boxSizing: 'border-box',
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

//import styleSheet from './style.js';
var styles = _reactLook.StyleSheet.create(InputText, styleSheet);

__GLOBAL__.exportDefault = (0, _reactLook2['default'])(InputText);
