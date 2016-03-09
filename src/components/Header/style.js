
var headerHeight = 50

var style = {
  header: {
    position: 'fixed',
    top: 0,
    left: (props, state, context) => {
      if (props.state.sideBar.show === true) {
        if (props.state.responsive.device.tablet === true) {
          return props.state.sideBar.smallSize
        }
        if (props.state.responsive.device.desktop === true) {
          return props.state.sideBar.bigSize
        }
      }
      return 0
    },
    right: 0,
    height: headerHeight + 'px',
    backgroundColor: '#20C753',
    boxSizing: 'border-box',
    color: '#ffffff',
    padding: '18px',
    zIndex: 2,
    fontWeight: 300,
    userSelect: 'none',
    fontSize: '10px',
    transition: 'all 0.2s',
    transform: 'translate3d(0,0,0)',
    display: (props) => {
      if (props.state.config.singlePageView === true) {
        return 'none'
      }
      return 'initial'
    }
  },
  headerLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '200px',
    textAlign: 'left',
    verticalAlign: 'middle',
    lineHeight: headerHeight - 4 + 'px'
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
    lineHeight: headerHeight - 6 + 'px'
  },
  headerRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '200px',
    textAlign: 'right',
    verticalAlign: 'middle',
    lineHeight: headerHeight - 6 + 'px'
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
