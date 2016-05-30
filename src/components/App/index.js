import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
import SideBar from '../SideBar'
import Header from '../Header'
import Content from '../Content'
import Search from '../Search'

class App extends Component {
  render() {
    const {state, actions} = this.props
    document.title = state.config.customizations.title 
    return (
      <div>
        <div className={ styles.wrapper }>
          <SideBar state={ state } actions={ actions }></SideBar>
          <Header state={ state } actions={ actions }></Header>
          <div className={ styles.mainFrame }>
            <Content state={ state } actions={ actions }></Content>
          </div>
          <Search state={ state } actions={ actions }></Search>
        </div>
      </div>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default Look(App)
