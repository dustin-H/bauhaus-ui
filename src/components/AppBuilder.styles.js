var sideBarSize = 250;

var style = {
	wrapper: {},
	sideBar: {
		position: 'fixed',
		left: '0px',
		height: '100%',
		width: sideBarSize + 'px',
		backgroundColor: 'transparent'
	},
	sideBarAppName: {
		height: '50px',
		backgroundColor: 'rgba(1,1,1,0.08)',
		boxSizing: 'border-box',
		color: '#ffffff',
		padding: '7px',
		textAlign: 'center',
		fontSize: '30px'
	},
	sideBarLogo: {
		textAlign: 'center',
		padding: '10px'
	},
	sideBarLogoImg: {
		width: '50px'
	},
	sideBarMenu: {},
	sideBarListElement: {
		position: 'relative',
		width: '100%',
		fontSize: '16px',
		//fontWeight: 100,
		padding: '6px',
		boxSizing: 'border-box',
		color: '#ffffff',
		paddingLeft: '20px',
		cursor: 'pointer',
		':hover': {
			backgroundColor: 'rgba(0,0,0,0.3)'
		}
	},
	sideBarHistory: {},
	sideBarInbox: {},
	sideBarSwitch: {
		position: 'fixed',
		bottom: '0px',
		left: '0px',
		width: sideBarSize + 'px',
		height: '50px',
		backgroundColor: 'rgba(1,1,1,0.08)',
		boxSizing: 'border-box',
		color: '#595959',
		padding: '16px'
	},
	mainFrame: {
		position: 'fixed',
		left: sideBarSize + 'px',
		top: '0px',
		right: '0px',
		height: '100%',
		backgroundColor: '#ffffff'
	},
	header: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		right: '0px',
		height: '50px',
		backgroundColor: 'rgba(1,1,1,0.08)',
		boxSizing: 'border-box',
		color: '#595959',
		padding: '16px',
		zIndex: 2
	},
	headerSettingsButton: {},
	headerUser: {},
	headerSearchBox: {
		position: 'fixed',
		top: '8px',
		right: '8px',
		padding: '8px',
		borderRadius: '4px',
		border: '0px solid rgb(210, 210, 210)',
		boxSizing: 'border-box',
		fooBar: 'none',
		outline: 'none',
		color: '#4E4E4E',
		backgroundColor: 'transparent',
		fontSize: '14px',
		width: '84px',
		transition: 'ease-in-out 0.2s',
		':focus': {
			border: '0px solid #6E00FF',
			color: '#000000',
			width: '200px',
		}
	},
	footer: {
		position: 'absolute',
		bottom: '0px',
		left: '0px',
		right: '0px',
		height: '50px',
		backgroundColor: 'rgba(1,1,1,0.08)',
		boxSizing: 'border-box',
		color: '#595959',
		padding: '16px',
		zIndex: 2
	},
	footerLanguage: {},
	contentWrapper: {
		position: 'absolute',
		top: '50px',
		left: '0px',
		right: '0px',
		bottom: '0px',
		overflowY: 'scroll',
		boxSizing: 'border-box',
		padding: '30px'
	},
	content: {
		position: 'relative',
		width: '100%'
	},
	contentHeadline: {
		fontWeight: 100,
		color: '#444444',
		fontSize: '32px'
	},
	contentHr: {
		border: 'none',
		height: '1px',
		backgroundColor: 'rgba(0, 0, 0, 0.15)',
		marginLeft: '-10px',
		width: 'calc(100% + 20px)'
	},
	textInput: {
		padding: '8px',
		borderRadius: '4px',
		border: '1px solid rgb(210, 210, 210)',
		boxSizing: 'border-box',
		fooBar: 'none',
		outline: 'none',
		color: '#4E4E4E',
		fontSize: '14px',
		width: '100%',
		':focus': {
			border: '1px solid #6E00FF',
			color: '#000000'
		}
	},
	formHr: {
		border: 'none',
		height: '1px',
		backgroundColor: 'rgba(0, 0, 0, 1)',
	},
	formTable: {
		width: '100%',
		borderLeft: '2px solid #6E00FF',
		borderCollapse: 'separate',
		borderSpacing: '0px',
		fontWeight: '100',
		marginLeft: '2px',
		fontSize: '14px',
	},
	tableTr: {
		paddingBottom: '6px'
	},
	backTd: {
		width: '100%',
		padding: '8px',
		paddingLeft: '15px',
		paddingRight: '15px'

	},
	frontTd: {
		whiteSpace: 'nowrap',
		textAlign: 'right',
		padding: '8px',
		paddingLeft: '15px',
		paddingRight: '15px'
			//paddingRight: '15px',
			//paddingLeft: '15px'
	}
};

style.frontTdHeadLine = Object.assign({}, style.frontTd, {
	fontWeight: 500,
	fontSize: '16px'
})

export default style;
