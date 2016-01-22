var sideBarSize = 280;
var headerHeight = 50;

var style = {
	center: {
		position: 'absolute',
		left: 'calc(50% - 125px)',
		top: 'calc(50% - 196px)',
		height: 392,
		width: 250,
		backgroundColor: 'transparent',
		userSelect: 'none',
		textAlign: 'center',
		verticalAlign: 'middle',
		color: '#ffffff',
		fontSize: 14
	},
	input: {
		paddingTop: '12px',
		paddingBottom: '12px',
		paddingLeft: '16px',
		paddingRight: '16px',
		width: '220px',
		backgroundColor: 'rgba(255,255,255,0.2)',
		color: '#ffffff',
		border: 'none',
		fontSize: '14px',
		borderRadius: '38px',
		outline: 'none'
	},
	button: {
		paddingTop: '12px',
		paddingBottom: '12px',
		paddingLeft: '16px',
		paddingRight: '16px',
		width: '200px',
		backgroundColor: 'rgba(255,255,255,0.2)',
		color: '#ffffff',
		border: 'none',
		fontSize: '14px',
		borderRadius: '38px',
		outline: 'none',
		transition: 'ease-in-out 0.1s',
		':hover': {
			width: 252,
			cursor: 'pointer',
			backgroundColor: 'rgba(255,255,255,0.1)',
		}
	},
	errorMessage: {
      color: '#FFA900',
      fontSize: 16,
      fontWeight: 700
	}
};

export default style;
