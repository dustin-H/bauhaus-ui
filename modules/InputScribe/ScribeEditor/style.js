var style = {
  button: {
    position: 'relative',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    fill: '#000000',
    color: '#000000',
    opacity: 1,
    ':disabled': {
      opacity: '0.5 !important',
      fill: '#000000 !important',
      color: '#000000 !important',
      cursor: 'not-allowed'
    },
    ':hover': {
      fill: '#20C753',
      color: '#20C753'
    },
    padding: 10,
    border: 'none',
    outline: 'none',
    fontSize: 16,
    fontWeight: 900
  },
  icon: {
    width: 18,
    height: 18
  },
  buttonText: {
    top: -2,
    position: 'relative'
  },
  wrapper: {
    marginBottom: 10
  },
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
    minHeight: 200,
    maxHeight: 400,
    overflowY: 'auto'
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
  }
}
export default style
