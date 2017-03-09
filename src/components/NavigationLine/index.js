import React, { Component } from 'react'
import felaStylesConnector from 'fela-styles-connector'
import style from './styles.js'

var connect = felaStylesConnector(style)

class NavigationLine extends Component {
  render() {
    const {state, actions, styles} = this.props
    var title = []
    console.log('state.content.content.title', state.content.content.title);
    if (state.content.content.title != null) {
      title.push(<div className={ styles.li } key={0}>
                   <div className={ styles.arrow }></div>
                 </div>)
      title.push(<div className={ styles.li } key={1}>
                   <div className={ styles.text }>
                     { state.content.content.title }
                   </div>
                 </div>)
    }
    return (
      <div className={ styles.box }>
        <div className={ styles.innerBox }>
          <div className={ styles.li }>
            <div className={ styles.logo }></div>
          </div>
          <div className={ styles.li }>
            <div className={ styles.arrow }></div>
          </div>
          <div className={ styles.li }>
            <div className={ styles.text }>
              { state.content.config.appName }
            </div>
          </div>
          { title }
        </div>
      </div>
    )
  }
}

export default connect(NavigationLine)
