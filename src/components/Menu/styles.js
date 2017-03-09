
export default {
  menu: {
    backgroundColor: '#ffffff',
    width: '100%',
    textAlign: 'center',
    minHeight: 30,
    borderTop: '1px solid rgba(0,0,0,0.18)',
    borderBottom: '1px solid rgba(0,0,0,0.18)'
  },
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
  menuElement: (props) => ({
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'relative',
    display: 'inline-block',
    fontSize: 14,
    color: 'rgba(0,0,0,0.4)',
    fontWeight: 300,
    height: 30,
    boxSizing: 'border-box',
    verticalAlign: 'sub',
    fontFamily: 'Lato',
    transition: 'ease-in-out 0.1s',
    transform: 'scaleX(1.0) scaleY(1.0)',
    cursor: 'pointer',
    onHover: {
      transform: 'scaleX(1.1) scaleY(1.1)',
      color: props.state.theme.COLOR_MAIN,
      borderBottomWidth: 2
    },
    ':first-child': {
      paddingLeft: 0
    }
  }),
  active: (props) => ({
    borderBottom: '1px solid ' + props.state.theme.COLOR_MAIN,
    color: props.state.theme.COLOR_MAIN
  })
}
