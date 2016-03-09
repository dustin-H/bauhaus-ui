import React, { PropTypes, Component } from 'react'
import look, { StyleSheet } from 'react-look'
import Route from '../Route'
import { $ } from '../../utils/i18n/index.js'

class Router extends Component {
  componentDidMount() {
    const {state, actions} = this.props
    actions.router.loadRoutes()
  }
  render() {
    const {state, actions} = this.props
    if (state.router.loading === true) {
      return (
        <div className={ styles.center }>
          <br/><img src="media/loader.gif" /></div>
      )
    }
    if (state.router.route === false) {
      return (
        <div className={ styles.center }>
          <br/>
          { $('$core.router.routeNotFound') }
        </div>
      )
    }
    return (
      <Route state={ state } actions={ actions }></Route>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default look(Router)
