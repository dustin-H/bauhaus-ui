
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
  loaderWrapper: {
    position: 'relative',
    width: '100%',
    textAlign: 'center',
    paddingTop: 20
  },
  loader: {
    position: 'relative',
    width: 70,
    left: 'calc(50% - 35px)',
    top: 'calc(50% - 35px)',
    display: 'inherit'
  }
}
