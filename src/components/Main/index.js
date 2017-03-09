import React, { Component } from 'react'
import felaStylesConnector from 'fela-styles-connector'
import style from './styles.js'
import Header from '../Header'
import Menu from '../Menu'
import NavigationLine from '../NavigationLine'
import Content from '../Content'

var connect = felaStylesConnector(style)

class Main extends Component {
  render() {
    const {state, actions, styles} = this.props
    return (
      <div>
        <Header state={ state } actions={ actions } />
        <NavigationLine state={ state } actions={ actions } />
        <Menu state={ state } actions={ actions } />
        <Content state={ state } actions={ actions } />
      </div>
    )
  }
}

export default connect(Main)
