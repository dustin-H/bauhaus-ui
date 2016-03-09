import React, { PropTypes, Component } from 'react'
import look, { StyleSheet } from 'react-look'
import { $ } from '../../utils/i18n/index.js'

class SearchElement extends Component {
  handleClick() {
    const {actions, pathname} = this.props
    actions.router.pushLocation({
      pathname: pathname
    })
  }
  render() {
    const {state, actions, title, description} = this.props

    return (
      <div className={ styles.resultFrame }>
        <div className={ styles.resultTitle } onMouseDown={ this.handleClick.bind(this) }>
          { title }
        </div>
        <div className={ styles.resultDescription }>
          { description }
        </div>
      </div>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default look(SearchElement)
