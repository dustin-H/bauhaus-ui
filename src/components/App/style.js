var sideBarSize = 280
var headerHeight = 50

var style = {
  wrapper: {},
  mainFrame: {
    position: 'absolute',
    // left: sideBarSize + 'px',
    left: (props, state, context) => {
      if (props.state.sideBar.show === true && props.state.config.singlePageView !== true) {
        if (props.state.responsive.device.tablet === true) {
          return props.state.sideBar.smallSize
        }
        if (props.state.responsive.device.desktop === true) {
          return props.state.sideBar.bigSize
        }
      }
      return 0
    },
    top: '0px',
    right: '0px',
    minHeight: '100%',
    backgroundColor: '#ffffff',
    fontFamily: 'Open Sans',
    transition: 'all 0.2s',
    transform: 'translate3d(0,0,0)'
  }
}

export default style
