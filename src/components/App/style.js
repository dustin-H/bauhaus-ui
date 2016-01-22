var sideBarSize = 280;
var headerHeight = 50;

var style = {
	wrapper: {},
	mainFrame: {
		position: 'fixed',
		//left: sideBarSize + 'px',
		left: (props, state, context) => sideBarSize,
		top: '0px',
		right: '0px',
		height: '100%',
		backgroundColor: '#ffffff'
	}
};

export default style;
