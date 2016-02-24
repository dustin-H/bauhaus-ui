var style = {
  contentWrapper: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    minHeight: 'calc(100% - 50px)',
    boxShadow: '0 .25em 2em 0 rgba(0,0,0,.2) inset'
  },
  content: {
    position: 'relative',
    padding: (props, state, context) => {
      if (props.state.responsive.device.smartphone === true) {
        return 10
      }
      return 30
    }
  }
}

export default style
