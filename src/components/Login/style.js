var sideBarSize = 280
var headerHeight = 50

var style = {
  center: {
    position: 'absolute',
    left: 'calc(50% - 125px)',
    top: 'calc(50% - 196px)',
    height: 392,
    width: 250,
    backgroundColor: 'transparent',
    userSelect: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#ffffff',
    fontSize: 14
  },
  input: {
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
    width: '220px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#ffffff',
    border: 'none',
    fontSize: '14px',
    borderRadius: '38px',
    outline: 'none'
  },
  button: {
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
    width: '200px',
    backgroundColor: 'rgba(255,255,255,0.0)',
    color: '#ffffff',
    fontSize: '14px',
    borderRadius: '38px',
    border: '1px solid rgba(255, 255, 255, 0.34902)',
    outline: 'none',
    transition: 'ease-in-out 0.1s',
    ':hover': {
      width: 252,
      cursor: 'pointer',
      backgroundColor: 'rgba(255,255,255,0.0)',
    }
  },
  errorMessage: {
    color: '#FFA900',
    fontSize: 16,
    fontWeight: 700
  },
  appName: {
    height: '50px',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    color: '#ffffff', // 6E00FF
    textTransform: 'uppercase',
    padding: '7px',
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 700,
    letterSpacing: '2px'
  },
  logo: {
    width: 120
  }
}

export default style
