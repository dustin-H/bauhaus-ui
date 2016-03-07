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
    height: 37,
    ':focus': {
      border: '1px solid #20C753', // F96331 6E00FF
      color: '#000000'
    },
    marginBottom: 10
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
  selected: {
    display: 'inline-block'
  },
  selectedValue: {
    display: 'inline-block',
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    minWidth: '116px',
    fontSize: '14px',
    borderRadius: 5, // '38px'
    border: 'none',
    maxHeight: 37,
    marginRight: 10,
    marginBottom: 10,
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: 'rgb(234, 234, 234)',
    transition: 'ease-in-out 0.1s',
    color: '#000000',
    ':hover': {
      backgroundColor: 'rgb(255, 59, 0)',
      color: '#ffffff',
      transform: 'scaleX(1.1) scaleY(1.1)'
    }
  },
  hidden: {
    display: 'none'
  }
}
export default style
