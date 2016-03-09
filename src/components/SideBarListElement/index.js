import React, { PropTypes, Component } from 'react'
import look, { StyleSheet } from 'react-look'
import { $ } from '../../utils/i18n/index.js'

class SideBarListElement extends Component {
  handleClick(e) {
    const {actions, pathname} = this.props
    actions
      .router
      .pushLocation({
        pathname: pathname
      })
  }
  render() {
    const {label, imageUrl, tabletView} = this.props
    var labelContent = (<span></span>)
    if (tabletView === false) {
      labelContent = (<span>{ $(label) }</span>)
    }
    return (
      <div className={ tabletView ? styles.sideBarListElementTablet : styles.sideBarListElement } onClick={ this.handleClick.bind(this) } title={ $(label) }>
        <span className={ styles.menuIcon }>
                <img src={ imageUrl } className={ styles.imageIcon }/>
              </span>
        { labelContent }
      </div>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default look(SideBarListElement)
