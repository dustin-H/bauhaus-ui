import React, { Component } from 'react'
import felaStylesConnector from 'fela-styles-connector'
import style from './styles.js'

var connect = felaStylesConnector(style)

class Content extends Component {
  renderContent() {
    const {state, actions, styles} = this.props
    for (var i in state.content.loading) {
      if (state.content.loading[i] === true) {
        return <div className={ styles.loaderWrapper }>
                 <img src="media/loader.gif" className={ styles.loader } />
               </div>
      }
    }
    if (state.content.error != null) {
      return <div>{'Failed to load source!'}</div>
    }
    if (state.content.content.__html != null) {
      return <div dangerouslySetInnerHTML={ state.content.content }></div>
    }

  }
  render() {
    const {state, actions, styles} = this.props
    return (
      <div className={ styles.box }>
        <div className={ styles.innerBox }>
          { this.renderContent() }
        </div>
      </div>
    )
  }
}

export default connect(Content)
