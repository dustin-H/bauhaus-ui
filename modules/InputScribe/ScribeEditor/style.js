var style = {
  button: {
    position: 'relative',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    opacity: 0.7,
    ':disabled': {
      opacity: '0.3 !important',
      cursor: 'not-allowed'
    },
    ':hover': {
      opacity: 1
    },
    '.active': {
      backgroundColor: '#20C753'
    },
    padding: 10,
    border: 'none',
    outline: 'none'
  },
  icon: {
    width: 18,
    height: 18
  }
}
export default style
