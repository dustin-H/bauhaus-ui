import React, { Component } from 'react'
import felaStylesConnector from 'fela-styles-connector'
import style from './styles.js'
import Header from '../Header'

var connect = felaStylesConnector(style)

class Main extends Component {
  render() {
    const {state, actions, styles} = this.props
    return (
      <div>
        <Header state={state} actions={actions}/>
      </div>
    )
  }
}

export default connect(Main)
