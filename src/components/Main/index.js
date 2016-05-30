import React, { PropTypes, Component } from 'react'
import * as pageTypes from '../../constants/PageTypes.js'

import App from '../App'
import Loading from '../Loading'
import Login from '../Login'
import Error from '../Error'

class Main extends Component {
  getComponent(page) {
    switch (page) {
      case pageTypes.LOADING:
        return Loading
      case pageTypes.ERROR:
        return Error
      case pageTypes.LOGIN:
        return Login
      case pageTypes.APP:
        return App
      default:
        return Error
    }
  }
  componentDidMount() {
    this.props.actions.config.load()
  }
  render() {
    const {state, actions} = this.props
    document.title = state.config.customizations.title 
    var Comp = this.getComponent(state.config.page)

    return (
      <Comp state={ state } actions={ actions }></Comp>
    )
  }
}

export default Main
