var style = {
  textInput: {
    padding: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: 5, // 4px
    border: '1px solid rgb(210, 210, 210)',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    outline: 'none',
    color: '#4E4E4E',
    fontSize: 14,
    width: '100%',
    ':focus': {
      border: '1px solid #20C753', // F96331 6E00FF
      color: '#000000'
    },
    marginBottom: 10,
    height: 37
  },
  inputError: {
    color: '#ff0000',
    border: '1px solid #ff0000',
    backgroundColor: 'rgba(255, 0, 0, 0.07)',
    ':focus': {
      border: '1px solid #ff0000', // F96331 6E00FF
      color: '#ff0000',
      backgroundColor: 'transparent'
    }
  },
  box: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  innerBox: {
    display: 'flex',
    flex: 2,
    maxHeight: 37
  },
  spaceBox: {
    display: 'flex',
    width: 10
  },
  buttonBox: {
    display: 'flex',
    maxHeight: 37,
    width: 116
  },
  button: {
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    minWidth: '116px',
    fontSize: '14px',
    borderRadius: 5, // '38px'
    border: 'none',
    outline: 'none',
    maxHeight: 37,
    transition: 'ease-in-out 0.1s',
    cursor: 'pointer',
    backgroundColor: 'rgb(234, 234, 234)',
    color: '#000000',
    ':hover': {
      // opacity: 0.6,
      transform: 'scaleX(1.1) scaleY(1.1)'
    }
  },
  errorBox: {
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    borderRadius: 5,
    backgroundColor: 'rgb(255, 59, 0)',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    border: '1px solid rgb(255, 59, 0)',
    position: 'relative',
    marginBottom: 10,
    color: '#ffffff'
  },
  loadingBox: {
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    borderRadius: 5,
    backgroundColor: '#20C753',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    border: '1px solid #20C753',
    position: 'relative',
    marginBottom: 10,
    color: '#ffffff'
  },
  image: {
    width: 50,
    height: 50,
    cursor: 'crosshair'
  },
  imageBox: {
    position: 'relative',
    padding: 5,
    border: '1px solid rgb(210, 210, 210)',
    borderRadius: 5,
    marginBottom: 10,
    maxHeight: 50,
    filter: 'grayscale(100%)',
    opacity: 0.5
  },
  text: {
    verticalAlign: 'top',
    marginLeft: 5,
    fontSize: 13,
    color: '#6F6F6F'
  },
  delete: {
    fontSize: 13,
    fill: '#6F6F6F',
    position: 'absolute',
    right: 5,
    bottom: 3,
    cursor: 'pointer',
    ':hover': {
      fill: 'red'
    }
  },
  checkbox: {
    position: 'absolute',
    top: 2,
    right: 5
  },
  active: {
    filter: 'grayscale(0%)',
    opacity: 1
  },
  icon: {
    width: 50,
    height: 50,
    background: '#777',
    display: 'inline-block',
    position: 'relative',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#ffffff',
    lineHeight: '50px',
    overflow: 'hidden'
  },
  progressWrapper: {
    width: '100%',
    height: 10,
    overflow: 'hidden',
    display: (props, state) => {
      if (state.showProgress === true) {
        return 'block'
      }
      return 'none'
    },
    backgroundColor: 'rgba(68, 37, 37, 0)',
    border: '1px solid #20C753',
    borderRadius: 5
  },
  progress: {
    width: '0%',
    height: 10,
    backgroundColor: '#20C753'
  }
}
export default style
