import React, { Component } from 'react'
import felaStylesConnector from 'fela-styles-connector'
import style from './styles.js'
import _ from 'lodash'

var connect = felaStylesConnector(style)

class Menu extends Component {
  render() {
    const {state, actions, styles} = this.props
    return (
      <div className={ styles.menu }>
        <div className={ styles.innerBox }>
          { _.map(state.content.config.menu, (value, key) => {
              if (value.type === 'main') {
                var cn = styles.menuElement
                if ('/' + value.link === state.content.location.pathname + state.content.location.search) {
                  cn += ' ' + styles.active
                }
                return <div key={ key } className={ cn } onClick={ actions.pushLocation.bind(this, '/' + value.link) }>
                         { value.title }
                       </div>
              }
              return null
            }) }
        </div>
      </div>
    )
  }
}

export default connect(Menu)
