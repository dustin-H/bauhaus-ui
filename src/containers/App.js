import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBuilder from '../components/AppBuilder.js';
import Loading from '../components/Loading.js';

import * as Auth from '../actions/auth.js';

class App extends Component {
  render() {
    const { state, dispatch } = this.props;
    const actions = {
      auth: bindActionCreators(Auth, dispatch)
   }

    return (
        <Loading state={state} actions={actions} />
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
