
var headerHeight = 50;

var style = {
	header: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		right: '0px',
		height: headerHeight + 'px',
		backgroundColor: '#20C753',
		boxSizing: 'border-box',
		color: '#ffffff',
		padding: '18px',
		zIndex: 2,
		fontWeight: 300,
		userSelect: 'none',
		fontSize: '10px'
	},
	headerSettingsButton: {},
	headerUser: {},
	headerLeft: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		bottom: '0px',
		width: '200px',
		textAlign: 'left',
		verticalAlign: 'middle',
		lineHeight: headerHeight + 'px'
	},
	headerRight: {
		position: 'absolute',
		top: '0px',
		right: '0px',
		bottom: '0px',
		width: '200px',
		textAlign: 'right',
		verticalAlign: 'middle',
		lineHeight: headerHeight + 'px'
	},
	inlineBlock: {
		display: 'inline-block',
		textAlign: 'center',
		width: '60px'
	},
	imageIcon: {
		width: '20px',
		verticalAlign: 'middle'
	}
};

export default style;
