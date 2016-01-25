var sideBarSize = 280;
var headerHeight = 50;

var style = {
	sideBar: {
		position: 'fixed',
		left: '0px',
		height: '100%',
		width: sideBarSize + 'px',
		backgroundColor: 'transparent',
		userSelect: 'none'
	},
	sideBarAppName: {
		height: '50px',
		backgroundColor: 'transparent',
		boxSizing: 'border-box',
		color: '#ffffff', //6E00FF
		textTransform: 'uppercase',
		padding: '7px',
		paddingTop: '20px',
		textAlign: 'center',
		fontSize: '20px',
		fontWeight: 700,
		letterSpacing: '2px'
	},
	sideBarLogo: {
		textAlign: 'center',
		padding: '10px'
	},
	sideBarLogoImg: {
		width: '50px'
	},
	sideBarMenu: {},
	sideBarUser: {
		position: 'fixed',
		bottom: '20px',
		left: '20px',
		width: sideBarSize - 40 + 'px',
		paddingTop: '20px',
		fontSize: '10px',
		color: '#ffffff',
		boxSizing: 'border-box',
		borderTop: '1px solid rgba(255, 255, 255, 0.1)',
		fontWeight: 300
	},
	sideBarUserLogOut: {
		fontSize: '14px',
		textTransform: 'uppercase',
		paddingBottom: '10px'
	},
	sideBarHistory: {},
	sideBarInbox: {},
	sideBarSwitch: {
		position: 'fixed',
		bottom: '0px',
		left: '0px',
		width: sideBarSize + 'px',
		height: '40px',
		boxSizing: 'border-box',
		color: '#595959',
		borderTop: '1px solid rgba(0, 0, 0, 0.04)',
		display: 'flex'
	},
	sideBarSelect: {
		flex: 1,
		padding: '10px',
		textAlign: 'center',
		fontWeight: 300,
		cursor: 'pointer',
		borderBottom: '2px solid transparent',
		':hover': {
			borderBottom: '2px solid #6E00FF'
		},
		':active': {
			borderBottom: '6px solid #6E00FF',
			fontWeight: 700
		}
	},
	center: {
		textAlign: 'center',
		width: '100%',
		display: 'inline-block'
	}
};

export default style;
