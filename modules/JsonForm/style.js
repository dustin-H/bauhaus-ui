var style = {
  contentHeadline: {
    fontWeight: 100,
    color: '#676767',
    fontSize: '32px'
  },
  contentHr: {
    border: 'none',
    height: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    marginLeft: '-10px',
    width: 'calc(100% + 20px)'
  },
  center: {
    textAlign: 'center'
  },
  button: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 16,
    paddingRight: 16,
    minWidth: '116px',
    fontSize: '14px',
    borderRadius: 5, // '38px'
    border: 'none',
    outline: 'none',
    transition: 'ease-in-out 0.1s',
    cursor: 'pointer',
    marginTop: 10,
    marginRight: 10,
    ':hover': {
      // opacity: 0.6,
      transform: 'scaleX(1.1) scaleY(1.1)'
    }
  },
  green: {
    backgroundColor: 'rgba(32, 199, 83, 1)',
    color: '#ffffff'
  },
  red: {
    backgroundColor: 'rgb(255, 59, 0)',
    color: '#ffffff'
  },
  gray: {
    backgroundColor: 'rgb(234, 234, 234)',
    color: '#000000'
  },
  hoverRed: {
    ':hover': {
      backgroundColor: 'rgb(255, 59, 0)',
      color: '#ffffff'
    }
  },
  validationError: {
    color: '#ff0000',
    fontWeight: 700,
    fontSize: 14
  }
}
export default style
