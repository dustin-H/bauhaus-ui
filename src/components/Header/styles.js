
export default {
  box: (props) => ({
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    height: props.state.theme.HEADER_HEIGHT,
    textAlign: 'center',
    backgroundColor: props.state.theme.COLOR_MAIN
  }),
  innerBox: (props) => ({
    display: 'inline-block',
    width: 'calc(100% - 40px)',
    textAlign: 'left',
    '@media (min-width: 730px)': {
      width: 690
    },
    '@media (min-width: 1130px)': {
      width: props.state.theme.MAX_WIDTH
    }
  }),
  pond: (props) => ({
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    height: props.state.theme.HEADER_HEIGHT
  }),
  logo: (props) => ({
    position: 'relative',
    height: props.state.theme.HEADER_HEIGHT * (2 / 3),
    top: props.state.theme.HEADER_HEIGHT * (1 / 6),
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundImage: 'url("media/logo.svg")',
    width: 'initial',
    cursor: 'pointer',
    transition: 'ease-in-out 0.1s',
    transform: 'scaleX(1.0) scaleY(1.0)',
    onHover: {
      transform: 'scaleX(1.1) scaleY(1.1)'
    },
    '@media (min-width: 730px)': {
      backgroundImage: 'url("media/logo_text.svg")'
    },
    '@media (min-width: 1130px)': {
      backgroundImage: 'url("media/logo_text.svg")'
    }
  }),
  flex: (props) => ({
    position: 'relative',
    width: 35,
    height: props.state.theme.HEADER_HEIGHT,
    '@media (min-width: 730px)': {
      width: 160
    },
    '@media (min-width: 1130px)': {
      width: 160
    }
  }),
  search: (props) => ({
    width: 180,
    height: props.state.theme.HEADER_HEIGHT,
    '@media (min-width: 730px)': {
      width: 240
    },
    '@media (min-width: 1130px)': {
      width: props.state.theme.SEARCH_WIDTH
    },
  }),
  searchInput: (props) => ({
    left: props.state.theme.SEARCH_PADDING,
    top: props.state.theme.SEARCH_PADDING,
    height: props.state.theme.HEADER_HEIGHT - (2 * props.state.theme.SEARCH_PADDING),
    width: 180 - (2 * props.state.theme.SEARCH_PADDING),
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
    fontSize: 15,
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
    },
    '@media (min-width: 730px)': {
      width: 240 - (2 * props.state.theme.SEARCH_PADDING)
    },
    '@media (min-width: 1130px)': {
      width: props.state.theme.SEARCH_WIDTH - (2 * props.state.theme.SEARCH_PADDING)
    }
  }),
  menu: (props) => ({
    textAlign: 'right'
  }),
  menuImage: (props) => ({
    position: 'relative',
    height: props.state.theme.HEADER_HEIGHT * (1 / 3),
    top: props.state.theme.HEADER_HEIGHT * (1 / 3),
    transition: 'ease-in-out 0.1s',
    transform: 'scaleX(1.0) scaleY(1.0)',
    cursor: 'pointer',
    onHover: {
      transform: 'scaleX(1.3) scaleY(1.3)'
    }
  })
}
