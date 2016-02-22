import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBuilder from '../components/AppBuilder'
import Loading from '../components/Loading'
import Main from '../components/Main'

import * as auth from '../actions/auth.js'
import * as config from '../actions/config.js'
import * as i18n from '../actions/i18n.js'
import * as router from '../actions/router.js'
import * as sideBar from '../actions/sideBar.js'
import * as content from '../actions/content.js'
import * as search from '../actions/search.js'
import * as responsive from '../actions/responsive.js'


class App extends Component {
  render() {
    const { state, dispatch } = this.props
    const actions = {
      auth: bindActionCreators(auth, dispatch),
      config: bindActionCreators(config, dispatch),
      i18n: bindActionCreators(i18n, dispatch),
      router: bindActionCreators(router, dispatch),
      sideBar: bindActionCreators(sideBar, dispatch),
      content: bindActionCreators(content, dispatch),
      search: bindActionCreators(search, dispatch),
      responsive: bindActionCreators(responsive, dispatch),
   }

    return (
        <Main state={state} actions={actions} />
    )
  }
}

App.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App)
