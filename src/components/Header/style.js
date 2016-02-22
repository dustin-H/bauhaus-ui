
var headerHeight = 50

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
	headerLeft: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		bottom: '0px',
		width: '200px',
		textAlign: 'left',
		verticalAlign: 'middle',
		lineHeight: headerHeight-4 + 'px'
	},
	headerCenter: {
		position: 'absolute',
		top: 0,
		left: '50%',
      marginLeft: -30,
		bottom: 0,
		width: 60,
		textAlign: 'center',
		verticalAlign: 'middle',
		lineHeight: headerHeight-6 + 'px'
	},
	headerRight: {
		position: 'absolute',
		top: '0px',
		right: '0px',
		bottom: '0px',
		width: '200px',
		textAlign: 'right',
		verticalAlign: 'middle',
		lineHeight: headerHeight-6 + 'px'
	},
	inlineBlock: {
		display: 'inline-block',
		textAlign: 'center',
		width: '60px',
      cursor: 'pointer',
      borderTop: '2px solid transparent',
      ':hover': {
         borderTop: '2px solid #ffffff'
      }
	},
	logoWrapper: {
		display: 'inline-block',
		textAlign: 'center',
		width: '60px'
	},
	imageIcon: {
		width: '20px',
		verticalAlign: 'middle'
	},
	logo: {
		width: '40px',
		verticalAlign: 'middle'
	}
}

export default style
