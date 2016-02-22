import React, { PropTypes, Component } from 'react'
import look, { StyleSheet } from 'react-look'
import _map from 'lodash/map'
import SideBarListElement from '../SideBarListElement'
import { $ } from '../../utils/i18n/index.js'

class SideBar extends Component {
  componentDidMount() {
    const {state, actions} = this.props
    actions
      .sideBar
      .load()
  }
  render() {
    const {state, actions} = this.props
    var content = (
    <span></span>
    )
    if (state.sideBar.loading === true) {
      content = (
        <div className={ styles.center }>
          <br/><img src="media/loader.gif" /></div>
      )
    }
    if (state.sideBar.error === true) {
      content = (
        <div className={ styles.centerError }>
          <br/>
          { $('$core.sidebar.error') }
        </div>
      )
    }
    var backButton = (
    <span></span>
    )
    if (state.responsive.device.smartphone === true) {
      backButton = (<div className={ styles.inlineBlock } onClick={ actions.sideBar.toggleShow }><img src="media/icons/menu_white.svg" className={ styles.imageIcon } /></div>)
    }
    var appName = (<span></span>)
    var avatar = (<span></span>)
    if (!state.responsive.device.tablet) {
      appName = (<div className={ styles.sideBarAppName }>
                   Bauhaus UI
                 </div>)
      avatar = (<div className={ styles.avatar }><img src={ state.auth.profile.avatarUrl } className={ styles.avatarImage } /></div>)
    }
    return (
      <div className={ styles.sideBar }>
        { appName }
        { backButton }
        <div className={ styles.sideBarMenu }>
          <div className={ styles.noScroll }>
            { content }
            { _map(state.sideBar.list, function(value, key) {
                return (
                  <SideBarListElement key={ key } state={ state } actions={ actions } label={ value.name } imageUrl={ value.imageUrl || 'media/icons/terms.svg' } pathname={ value.pathname }
                    tabletView={ state.responsive.device.tablet }></SideBarListElement>
                )
              }) }
          </div>
        </div>
        <div className={ styles.sideBarUser }>
          <div className={ styles.logoutLine }></div>
          <div className={ styles.sideBarUserLogOut } onClick={ actions.auth.logout }>
            { $('$core.auth.logout') }
          </div>
          <span className={ styles.name }>{ state.auth.profile.firstname }&nbsp;
                        						{ state.auth.profile.lastname }</span>
          { avatar }
        </div>
      </div>
      )
  }
}

SideBar.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default look(SideBar)
