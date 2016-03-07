import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import { $ } from 'bauhaus-ui-module-utils'

import _ from 'lodash'

var UNUSED_KEY = 'notUsedBauhausKeyWhichRepresentsUndefinded'

class InputSelect extends Component {
  constructor(props) {
    super(props)
    this.handleSingleChange = this.handleSingleChange.bind(this)
    this.handleMultiChange = this.handleMultiChange.bind(this)
    this.add = this.add.bind(this)
    this.state = {
      value: UNUSED_KEY
    }
  }
  handleMultiChange(event) {
    const {bauhaus, get, set} = this.props
    var value = event.target.value
    if (value !== UNUSED_KEY) {
      this.setState({
        value: value
      })
    }
  }
  handleSingleChange(event) {
    const {bauhaus, get, set} = this.props
    var value = event.target.value
    if (value !== UNUSED_KEY) {
      set(bauhaus.props.path, value)
    }
  }
  add() {
    const {bauhaus, get, set} = this.props
    var value = get(bauhaus.props.path)
    if (this.state.value !== UNUSED_KEY) {
      if (value == undefined || value === '' || typeof value !== 'object' || value.constructor !== Array) {
        value = [this.state.value]
        set(bauhaus.props.path, value)
      } else {
        if (value.indexOf(this.state.value) < 0) {
          value.push(this.state.value)
          set(bauhaus.props.path, value)
        }
      }
    }
  }
  remove(i) {
    return function() {
      const {bauhaus, get, set} = this.props
      var value = get(bauhaus.props.path)
      if (value == undefined || value === '' || typeof value !== 'object' || value.constructor !== Array) {
        value = []
        set(bauhaus.props.path, value)
      } else {
        if (value[i] != null) {
          value.splice(i, 1)
          set(bauhaus.props.path, value)
        }
      }

    }.bind(this)
  }
  render() {
    const {bauhaus, get, set, isValid} = this.props
    var valid = isValid(bauhaus.props.path)
    var inputStyle = [styles.textInput]
    if (valid !== true) {
      inputStyle.push(styles.inputError)
    }
    var value = get(bauhaus.props.path)
    if (bauhaus.props.multiple === true) {
      if (value == undefined || value === '' || typeof value !== 'object' || value.constructor !== Array) {
        value = []
      }
      var options = Object.assign({}, bauhaus.props.options)
      for (var i in value) {
        if (options[value[i]] != null) {
          delete options[value[i]]
        }
      }
      var selectedClassName = [styles.selected]
      if (value.length < 1) {
        selectedClassName.push(styles.hidden)
      }
      return (
        <div>
          <div className={ c(...selectedClassName) }>
            { _.map(value, function(value, key) {
                return <span key={ value } onClick={ this.remove(key) } className={ styles.selectedValue }>{ bauhaus.props.options[value] }</span>
              }.bind(this)) }
          </div>
          <div className={ styles.box }>
            <div className={ styles.innerBox }>
              <select className={ c(...inputStyle) } value={ this.state.value } onChange={ this.handleMultiChange }>
                <option key={ UNUSED_KEY } value={ UNUSED_KEY } disabled={ true }>
                  { $('$core.commons.pleaseselect') }
                </option>
                { _.map(options, function(value, key) {
                    return <option key={ key } value={ key }>
                             { $(value) }
                           </option>
                  }) }
              </select>
            </div>
            <div className={ styles.spaceBox }>
            </div>
            <div className={ styles.buttonBox }>
              <input className={ styles.button } type="button" value={ $('$core.commons.add') } onClick={ this.add } />
            </div>
          </div>
        </div>
      )
    }

    if (value == undefined || value === '') {
      value = UNUSED_KEY
    }
    return <select className={ c(...inputStyle) } value={ value } onChange={ this.handleSingleChange }>
             <option key={ UNUSED_KEY } value={ UNUSED_KEY } disabled={ true }>Please select!</option>
             { _.map(bauhaus.props.options, function(value, key) {
                 return <option key={ key } value={ key }>
                          { $(value) }
                        </option>
               }) }
           </select>
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default Look(InputSelect)
