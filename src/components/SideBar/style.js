var sideBarSize = 280;
var headerHeight = 50;

var style = {
	sideBar: {
		position: 'fixed',
		left: '0px',
		height: '100%',
		width: sideBarSize,
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
	sideBarMenu: {
		position: 'absolute',
		top: 60,
		bottom: 90,
		width: '100%',
		overflowY: 'scroll'
	},
	sideBarUser: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		padding: 20,
		fontSize: 10,
		color: '#ffffff',
		boxSizing: 'border-box',
		//borderTop: '1px solid rgba(255, 255, 255, 0.1)',
		fontWeight: 300
	},
   logoutLine: {
      height: 20,
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      width: '100%'
      //backgroundColor: 'rgba(255, 255, 255, 0.1)'
   },
	sideBarUserLogOut: {
		fontSize: '14px',
		textTransform: 'uppercase',
		paddingBottom: '10px',
		cursor: 'pointer'
	},
	center: {
		textAlign: 'center',
		width: '100%',
		display: 'inline-block'
	},
	centerError: {
		textAlign: 'center',
		width: '100%',
		display: 'inline-block',
		color: '#ffffff'
	},
	avatar: {
		position: 'absolute',
		width: 42,
		height: 42,
		right: 20,
		bottom: 20,
		overflow: 'hidden',
		borderRadius: '50%'
	},
	avatarImage: {
		width: 42,
		height: 42
	},
	name: {
		color: 'rgba(255, 255, 255, 0.54)'
	}
};

export default style;
