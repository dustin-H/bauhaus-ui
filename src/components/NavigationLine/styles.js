
export default {
  box: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    margin: 0,
    height: 50
  },
  innerBox: (props) => ({
    display: 'inline-block',
    width: 'calc(100% - 40px)',
    textAlign: 'left',
    height: '100%',
    '@media (min-width: 730px)': {
      width: 690
    },
    '@media (min-width: 1130px)': {
      width: props.state.theme.MAX_WIDTH
    }
  }),
  logo: {
    height: '100%',
    width: 50,
    backgroundImage: 'url("media/default_logo.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    transition: 'ease-in-out 0.1s',
    transform: 'scaleX(1.0) scaleY(1.0)',
    cursor: 'pointer',
    onHover: {
      transform: 'scaleX(1.1) scaleY(1.1)'
    }
  },
  arrow: {
    backgroundImage: 'url("media/arrow.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: 30,
    width: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10
  },
  li: {
    display: 'inline-block',
    position: 'relative',
    height: 50,
    color: '#ff0000'
  },
  text: (props) => ({
    color: 'rgba(0,0,0,0.4)',
    fontWeight: 300,
    fontFamily: 'Lato',
    fontSize: 16,
    display: 'table-cell',
    position: 'relative',
    top: 14,
    transition: 'ease-in-out 0.1s',
    transform: 'scaleX(1.0) scaleY(1.0)',
    cursor: 'pointer',
    onHover: {
      transform: 'scaleX(1.1) scaleY(1.1)',
      color: props.state.theme.COLOR_MAIN
    },
  })
}
