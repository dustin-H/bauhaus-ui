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
    }
  },
  listElement: {
    padding: 5,
    cursor: 'pointer',
    borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    ':active': {
      color: 'rgba(32, 199, 83, 1.0)'
    },
    ':last-child': {
      borderBottom: '0px solid #ff0000'
    }
  }
};
export default style;
