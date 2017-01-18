
export default {
  box: (props) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: props.state.theme.HEADER_HEIGHT,
    textAlign: 'center',
    backgroundColor: props.state.theme.COLOR_MAIN
  }),
  innerBox: (props) => ({
    display: 'inline-block',
    width: props.state.theme.MAX_WIDTH,
    textAlign: 'left'
  }),
  pond: (props) => ({
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    height: props.state.theme.HEADER_HEIGHT
  }),
  logo: {
    position: 'relative',
    height: 40,
    top: 16,
    cursor: 'pointer',
    transition: 'ease-in-out 0.1s',
    transform: 'scaleX(1.0) scaleY(1.0)',
    onHover: {
      transform: 'scaleX(1.1) scaleY(1.1)'
    },
  },
  flex: (props) => ({
    position: 'relative',
    flex: 1,
    height: props.state.theme.HEADER_HEIGHT
  }),
  search: (props) => ({
    width: props.state.theme.SEARCH_WIDTH,
    height: props.state.theme.HEADER_HEIGHT
  }),
  searchInput: (props) => ({
    left: props.state.theme.SEARCH_PADDING,
    top: props.state.theme.SEARCH_PADDING,
    height: props.state.theme.HEADER_HEIGHT - (2 * props.state.theme.SEARCH_PADDING),
    width: props.state.theme.SEARCH_WIDTH - (2 * props.state.theme.SEARCH_PADDING),
    position: 'relative',
    outline: 'none',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    border: 'none',
    textAlign: 'center',
    boxSizing: 'border-box',
    paddingLeft: 20,
    paddingRight: 20,
    color: '#000000',
    borderRadius: 8,
    fontSize: 18,
    fontWeight: 300,
    fontFamily: 'Lato',
    transition: 'ease-in-out 0.1s',
    transform: 'scaleX(1.0) scaleY(1.0)',
    '::placeholder': {
      color: 'rgba(0, 0, 0, 0.3)'
    },
    onHover: {
      transform: 'scaleX(1.1) scaleY(1.1)'
    },
    onFocus: {
      textAlign: 'left',
      transform: 'scaleX(1.1) scaleY(1.1)'
    }
  }),
  menu: (props) => ({
    textAlign: 'right'
  }),
  menuImage: {
    position: 'relative',
    height: 24,
    top: 24,
    transition: 'ease-in-out 0.1s',
    transform: 'scaleX(1.0) scaleY(1.0)',
    cursor: 'pointer',
    onHover: {
      transform: 'scaleX(1.3) scaleY(1.3)'
    }
  }
}
