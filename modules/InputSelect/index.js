import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import { $ } from 'bauhaus-ui-module-utils'

import _ from 'lodash'

var UNUSED_KEY = 'notUsedBauhausKeyWhichRepresentsUndefinded'

class InputSelect extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const {bauhaus, get, set} = this.props
    var value = event.target.value
    if (value !== UNUSED_KEY) {
      set(bauhaus.props.path, value)
    }
  }
  render() {
    const {bauhaus, get, set, isValid} = this.props
    var valid = isValid(bauhaus.props.path)
    var inputStyle = [styles.textInput]
    if (valid !== true) {
      inputStyle.push(styles.inputError)
    }
    var value = get(bauhaus.props.path)
    if (value == undefined) {
      value = UNUSED_KEY
    }
    return (
      <select className={ c(...inputStyle) } value={ value } onChange={ this.handleChange }>
        <option key={ UNUSED_KEY } value={ UNUSED_KEY } disabled={ true }>Please select!</option>
        { _.map(bauhaus.props.options, function(value, key) {
            return <option key={ key } value={ key }>
                     { $(value) }
                   </option>
          }) }
      </select>
      )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

__GLOBAL__.exportDefault = Look(InputSelect)
