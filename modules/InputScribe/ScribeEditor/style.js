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
  }
}
export default style
