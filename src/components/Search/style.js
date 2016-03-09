var style = {
  popup: {
    zIndex: 997,
    position: 'fixed',
    right: (props) => {
      if (props.state.search.active === true) {
        return 0
      } else {
        return -324
      }
    },
    bottom: 0,
    width: 320,
    top: 50,
    background: '#EFEFEF',
    boxShadow: '0 0 4px 4px rgba(0, 0, 0, 0.12)',
    transition: 'all 0.2s',
    transform: 'translate3d(0,0,0)',
    boxSizing: 'border-box',
    padding: 0,
    fontFamily: 'Open Sans'
  },
  inputWrapper: {
    padding: 20
  },
  input: {
    padding: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: 5, // 4px
    border: '1px solid rgb(210, 210, 210)',
    boxSizing: 'border-box',
    outline: 'none',
    color: '#4E4E4E',
    fontSize: '14px',
    width: '100%',
    ':focus': {
      border: '1px solid #20C753', // F96331 6E00FF
      color: '#000000'
    }
  },
  center: {
    textAlign: 'center',
    width: '100%',
    display: 'inline-block'
  },
  searchResults: {
    position: 'absolute',
    top: 75,
    bottom: 20,
    width: '100%',
    overflowY: 'scroll'
  }
}

export default style
