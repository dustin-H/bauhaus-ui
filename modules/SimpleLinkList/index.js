import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import { $, pushLocation } from 'bauhaus-ui-module-utils'
import _ from 'lodash'

class SimpleLinkList extends Component {
  constructor(props) {
    super(props)
    this.handleFilterChange = this
      .handleFilterChange
      .bind(this)
  }
  handleFilterChange(event) {
    const {bauhaus} = this.props
    this.setState({
      filter: event.target.value
    })
  }
  pushLocation(location) {
    const {bauhaus} = this.props
    return function() {
      pushLocation(location)
    }
  }
  componentWillMount() {
    const {bauhaus} = this.props
    this.setState({
      filter: ''
    })
  }
  render() {
    const {bauhaus} = this.props

    return (
      <div>
        <span className={ styles.contentHeadline }>{ $(bauhaus.props.title) }</span>
        <hr className={ styles.contentHr } />
        <br/>
        <span>{ $('$core.commons.filter') }: <input className={ styles.textInput } type="text" value={ this.state.filter } onChange={ this.handleFilterChange } /></span>
        <br/>
        <br/>
        { _.map(bauhaus.props.list, function(value, key) {
            if (value.name.search(this.state.filter) >= 0) {
              return (<div key={ 'elm' + key } className={ styles.listElement } onClick={ this.pushLocation({
                                                                                pathname: value.pathname
                                                                              }) }>
                        { $(value.name) }
                      </div>)
            } else {
              return <span key={ 'nix' }></span>
            }
          }.bind(this)) }
      </div>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default Look(SimpleLinkList)
