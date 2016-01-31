var sideBarSize = 280;
var headerHeight = 50;

var style = {
	sideBar: {
		position: 'fixed',
		left: (props, state, context) => {
			if(props.state.sideBar.show === false) {
				if(props.state.responsive.device.tablet === true) {
					return -props.state.sideBar.smallSize;
				}
				if(props.state.responsive.device.desktop === true) {
					return -props.state.sideBar.bigSize;
				}
				return '-100%';
			}
         return 0;
		},
		height: '100%',
		width: (props, state, context) => {
			if(props.state.responsive.device.tablet === true) {
				return props.state.sideBar.smallSize;
			}
			if(props.state.responsive.device.desktop === true) {
				return props.state.sideBar.bigSize;
			}
			return '100%';
		},
		userSelect: 'none',
		transition: 'ease-in-out 0.2s',
      //backgroundColor: '#206917',
		//background: (props) => {
      //   return 'linear-gradient(to bottom, #206917 0%, #2B302C 100%)'
      //},
		//backgroundAttachment: 'fixed',
      backgroundColor: '#206917',
		zIndex: 10,
		overflow: 'hidden'
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
		top: (props) => {
         if(props.state.responsive.device.tablet === true){
            return 0;
         } else {
            return 60;
         }
      },
		bottom: 90,
		width: '100%',
		overflowY: 'scroll'
	},
	sideBarUser: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		padding: (props) => {
         if(props.state.responsive.device.tablet === true){
            return 0;
         }
         return 20;
      },
		paddingBottom: (props) => {
         if(props.state.responsive.device.tablet === true){
            return 8;
         }
         return 20;
      },
      textAlign: (props) => {
         if(props.state.responsive.device.tablet === true){
            return 'center';
         }
         return '';
      },
		fontSize: (props) => {
         if(props.state.responsive.device.tablet === true){
            return 5;
         }
         return 10;
      },
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
		fontSize: (props) => {
         if(props.state.responsive.device.tablet === true){
            return 10;
         }
         return 14;
      },
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
   inlineBlock: {
		position: 'absolute',
		textAlign: 'center',
		width: 60,
		height: 50,
      cursor: 'pointer',
      borderTop: '2px solid transparent',
      ':hover': {
         borderTop: '2px solid #ffffff'
      },
      top: 0,
      right: 0
	},
	imageIcon: {
		width: 20,
		verticalAlign: 'middle',
      paddingTop: 17
	},
	name: {
		color: 'rgba(255, 255, 255, 0.54)'
	}
};

export default style;
