import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import { $ } from 'bauhaus-ui-module-utils'
import ScribeEditor from './ScribeEditor'

class InputScribe extends Component {
  handleChange(value) {
    const {bauhaus, get, set} = this.props
    // var value = event.target.value;
    if (!(value === '' && get(bauhaus.props.path) == undefined)) {
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
      value = ''
    }
    return (
      <ScribeEditor className={ c(...inputStyle) } type="text" value={ value } onChange={ this
                                                                                      .handleChange
                                                                                      .bind(this) }></ScribeEditor>
      );
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

__GLOBAL__.exportDefault = Look(InputScribe)
