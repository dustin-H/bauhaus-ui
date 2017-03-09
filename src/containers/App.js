import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../components/Main'
import * as ContentActions from '../actions/content.js'

class App extends Component {
  render() {
    const {state, dispatch} = this.props
    const actions = bindActionCreators(ContentActions, dispatch)

    return (
      <Main state={ state } actions={ actions } />
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App)
