import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'

class Loading extends Component {
  render() {
    const {state, actions} = this.props
    return (
      <div className={ styles.center }>
        <img src='media/bauhausuilogo.svg' />
        <br/>
        <br/>
        <img src='media/loader.gif' />
      </div>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default Look(Loading)
