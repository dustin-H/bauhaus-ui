import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBuilder from '../components/AppBuilder.js';
import * as ContactActions from '../actions/contact.js';

class App extends Component {
  render() {
    const { blocks, dispatch } = this.props;
    const actions = bindActionCreators(ContactActions, dispatch);

    return (
        <AppBuilder blocks={blocks} actions={actions} />
    );
  }
}

App.propTypes = {
  blocks: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    blocks: state.blocks
  };
}

export default connect(mapStateToProps)(App);
