import React, { PropTypes, Component } from 'react'
import look, { StyleSheet } from 'react-look'

class Header extends Component {
  render() {
    const {state, actions} = this.props
    return (
      <div className={ styles.header }>
        <div className={ styles.headerLeft }>
          <span className={ styles.inlineBlock } onClick={ actions.sideBar.toggleShow }><img src="media/icons/menu_white.svg" className={ styles.imageIcon }/></span>
        </div>
        <div className={ styles.headerCenter }>
          <span className={ styles.logoWrapper }><img src="media/logo.svg" className={ styles.logo }/></span>
        </div>
        <div className={ styles.headerRight }>
          <span className={ styles.inlineBlock } onClick={ actions.search.activate }><img src="media/icons/search_white.svg" className={ styles.imageIcon }/></span>
          <span className={ styles.inlineBlock } onClick={ actions.router.reload }><img src="media/icons/reload_white.svg" className={ styles.imageIcon }/></span>
        </div>
      </div>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default look(Header)
