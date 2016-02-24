var style = {
  button: {
    position: 'relative',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    fill: '#000000',
    opacity: 1,
    ':disabled': {
      opacity: '0.5 !important',
      fill: '#000000 !important',
      cursor: 'not-allowed'
    },
    ':hover': {
      fill: '#20C753'
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
