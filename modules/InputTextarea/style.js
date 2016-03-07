var style = {
  textarea: {
    padding: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: 5, // 4px
    border: '1px solid rgb(210, 210, 210)',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    outline: 'none',
    color: '#4E4E4E',
    fontSize: '14px',
    width: '100% !important',
    maxWidth: '100% !important',
    ':focus': {
      border: '1px solid #20C753', // F96331 6E00FF
      color: '#000000'
    },
    marginBottom: 6
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
