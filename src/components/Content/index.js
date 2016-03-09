import React, { PropTypes, Component } from 'react'
import look, { StyleSheet } from 'react-look'
import Router from '../Router'

class Content extends Component {
  render() {
    const {state, actions} = this.props
    return (
      <div className={ styles.contentWrapper }>
        <div className={ styles.content }>
          <div className={ styles.contentCenter }>
            <div className={ styles.stretcher }>
              <div className={ styles.stretcherInside }></div>
              <div className={ styles.stretcherInside }></div>
              <div className={ styles.stretcherInside }></div>
              <div className={ styles.stretcherInside }></div>
            </div>
            <Router state={ state } actions={ actions }></Router>
          </div>
        </div>
      </div>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default look(Content)
