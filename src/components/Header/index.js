import React, { Component } from 'react'
import felaStylesConnector from 'fela-styles-connector'
import style from './styles.js'

var connect = felaStylesConnector(style)

class Header extends Component {
  render() {
    const {state, actions, styles} = this.props
    return (
      <div className={ styles.box }>
        <div className={ styles.innerBox }>
          <div className={ styles.pond }>
            <div className={ styles.flex }><img className={ styles.logo } src={ '/media/logo.svg' } /></div>
            <div className={ styles.search }>
              <input className={ styles.searchInput } type={ 'text' } placeholder={ 'Search' } />
            </div>
            <div className={ styles.flex + ' ' + styles.menu }><img className={ styles.menuImage } src={ '/media/menu.svg' } /></div>
            { /*  <img className={ styles.logo } src={ '/media/logo.svg' } />*/ }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(Header)
