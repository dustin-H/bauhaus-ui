import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
import { $ } from 'bauhaus-ui-module-utils'
import _ from 'lodash'

class Section extends Component {
  constructor(props) {
    super(props)
    this.toggleFoldState = this
      .toggleFoldState
      .bind(this)
  }
  toggleFoldState() {
    const {bauhaus} = this.props
    this.setState({folded: !this.state.folded})
  }
  componentWillMount() {
    const {bauhaus} = this.props
    var folded = false
    if (bauhaus.props.folded === true) {
      folded = true
    }
    this.setState({folded: folded})
  }
  render() {
    const {bauhaus} = this.props
    return (
      <div>
        <div className={ styles.section } onClick={ this.toggleFoldState }>
          { $(bauhaus.props.text) }
          <hr className={ styles.sectionHr } />
        </div>
        <div className={ styles.content }>
          { _.map(bauhaus._childrenGenerators, function(value, key) {
              var newProps = Object.assign({}, this.props, {key: key})
              return value(newProps)
            }.bind(this)) }
        </div>
        <div className={ styles.sectionEnd }></div>
      </div>
      )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default Look(Section)
