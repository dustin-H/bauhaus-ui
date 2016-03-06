import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import styles from '../style.js'

class BrowserTime extends Component {
  handleChange(event) {
    const {onChange} = this.props
    var value = event.target.value
    onChange(value)
  }
  render() {
    const {value, valid, hint} = this.props
    var inputStyle = [styles.textInput]
    if (valid !== true) {
      inputStyle.push(styles.inputError)
    }
    return (
      <input placeholder={hint} className={ c(...inputStyle) } value={ value } onChange={ this.handleChange.bind(this) } type={ 'time' } />
    )
  }
}

export default Look(BrowserTime)
