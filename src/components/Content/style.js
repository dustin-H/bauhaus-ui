var style = {
  contentWrapper: {
    position: 'absolute',
    top: (props) => {
      if (props.state.config.singlePageView === true) {
        return 0
      }
      return 50
    },
    left: 0,
    right: 0,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    minHeight: (props) => {
      if (props.state.config.singlePageView === true) {
        return '100%'
      }
      return 'calc(100% - 50px)'
    },
    boxShadow: '0 .25em 2em 0 rgba(0,0,0,.2) inset'
  },
  content: {
    position: 'relative',
    textAlign: (props) => {
      if (props.state.responsive.centerDesign === true) {
        return 'center'
      }
      return 'initial'
    },
    padding: (props, state, context) => {
      if (props.state.responsive.device.smartphone === true) {
        return 10
      }
      return 30
    }
  },
  contentCenter: {
    maxWidth: (props) => {
      if (props.state.responsive.centerDesign === true) {
        return 800
      }
      return 'auto'
    },
    display: (props) => {
      if (props.state.responsive.centerDesign === true) {
        return 'inline-block'
      }
      return 'block'
    },
    textAlign: (props) => {
      if (props.state.responsive.centerDesign === true) {
        return 'center'
      }
      return 'initial'
    },
    textAlign: 'initial'
  },
  stretcher: {
    position: 'relative',
    height: 0
  },
  stretcherInside: {
    position: 'relative',
    width: 225,
    height: 0,
    display: 'inline-block'
  }
}

export default style
