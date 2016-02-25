import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import { $ } from 'bauhaus-ui-module-utils'

class InputTextarea extends Component {
  constructor(props) {
    super(props)
    const {bauhaus, get} = props
    this.state = {
      value: get(bauhaus.props.path)
    }
    this.timeout = null
  }
  handleChange(event) {
    const {bauhaus, get, set} = this.props
    var value = event.target.value
    this.setState({
      value: value
    })
    if (this.timeout != null) {
      clearTimeout(this.timeout)
      this.timeout = null
    }
    this.timeout = setTimeout(function() {
      set(bauhaus.props.path, value)
    }, 100)
  }
  componentWillReceiveProps(nextProps) {
    const {bauhaus, get} = nextProps
    this.setState({
      value: get(bauhaus.props.path)
    })
  }
  render() {
    const {bauhaus, get, set, isValid} = this.props
    var valid = isValid(bauhaus.props.path)
    var inputStyle = [styles.textarea]
    if (valid !== true) {
      inputStyle.push(styles.inputError)
    }
    return (
      <textarea className={ c(...inputStyle) } value={ this.state.value } onChange={ this
                                                                                 .handleChange
                                                                                 .bind(this) }></textarea>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

__GLOBAL__.exportDefault = Look(InputTextarea)
