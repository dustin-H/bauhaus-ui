import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBuilder from '../components/AppBuilder.js';
import Loading from '../components/Loading.js';
import Main from '../components/Main.js';

import * as auth from '../actions/auth.js';
import * as config from '../actions/config.js';
import * as endpoints from '../actions/endpoints.js';
import * as i18n from '../actions/i18n.js';

class App extends Component {
  render() {
    const { state, dispatch } = this.props;
    const actions = {
      auth: bindActionCreators(auth, dispatch),
      endpoints: bindActionCreators(endpoints, dispatch),
      config: bindActionCreators(config, dispatch),
      i18n: bindActionCreators(i18n, dispatch)
   }

    return (
        <Main state={state} actions={actions} />
    );
  }
}

App.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(App);
