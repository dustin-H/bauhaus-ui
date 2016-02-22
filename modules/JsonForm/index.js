import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import { $ } from 'bauhaus-ui-module-utils'
import _ from 'lodash'
import superagent from 'superagent'
import { superagentPlugin } from 'bauhaus-ui-module-utils'

var validators = {}

class JsonForm extends Component {
  constructor(props) {
    super(props)
    this.saveData = this
      .saveData
      .bind(this)
    this.delete = this
      .delete
      .bind(this)
    this.reset = this
      .reset
      .bind(this)
  }
  getValue(path) {
    const {bauhaus} = this.props
    return _.get(bauhaus._state.data, path)
  }
  setValue(path, value) {
    const {bauhaus} = this.props
    var state = Object.assign({}, bauhaus._state)
    if (state.initialLoaded === true && state.loading === false) {
      var data = state.data
      _.set(data, path, value)
      state.data = data
      if (validators[path] != null) {
        state.validationData[path] = validators[path](value)
      }
      state.valid = true
      for (var i in state.validationData) {
        if (state.validationData[i] !== true) {
          state.valid = false
        }
      }
      state.changed = (JSON.stringify(state.data) !== state.savedData)
    }
    bauhaus._setState(state)
  }
  setValidator(path, validator) {
    validators[path] = validator
  }
  isValid(path) {
    const {bauhaus} = this.props
    if (bauhaus._state == null || bauhaus._state.validationData == null || bauhaus._state.validationData[path] == null || bauhaus._state.validationData[path] === true) {
      return true
    }
    if (bauhaus._state.validationData[path] === false) {
      return '$core.commons.errors.validation'
    }
    if (typeof bauhaus._state.validationData[path] === 'string') {
      return bauhaus._state.validationData[path]
    }
    return '$core.commons.errors.validation'
  }
  validateAll() {
    const {bauhaus} = this.props
    var state = Object.assign({}, bauhaus._state)
    var data = state.data
    state.valid = true
    for (var path in validators) {
      var value = _.get(data, path)
      state.data = data
      state.validationData[path] = validators[path](value)
      if (state.validationData[path] !== true) {
        state.valid = false
      }
    }
    bauhaus._setState(state)
    return state.valid
  }
  loadData() {
    const {bauhaus} = this.props
    var state = Object.assign({}, bauhaus._state)
    state.loading = true
    bauhaus._setState(state)
    superagent
      .get(this.props.bauhaus.props.url)
      .accept('json')
      .use(superagentPlugin({auth: true}))
      .end((function(err, res) {
        var state = Object.assign({}, bauhaus._state)
        if (err != null || res == null || res.body == null || res.body.jsondata == null) {
          state.error = true
          return bauhaus._setState(state)
        }
        state.data = res.body.jsondata
        state.savedData = JSON.stringify(res.body.jsondata)
        state.initialLoaded = true
        state.loading = false
        state.changed = false
        state.valid = true
        state.validationData = {}
        bauhaus._setState(state)
      }).bind(this))
  }
  saveData() {
    if (this.validateAll() === true) {
      const {bauhaus} = this.props
      var state = Object.assign({}, bauhaus._state)
      bauhaus._state.loading = true
      bauhaus._setState(bauhaus._state)
      superagent
        .put(bauhaus.props.url)
        .send(bauhaus._state.data)
        .accept('json')
        .use(superagentPlugin({auth: true}))
        .end((function(err, res) {
          if (err != null) {
            var state = Object.assign({}, bauhaus._state)
            bauhaus._state.error = true
            return bauhaus._setState(bauhaus._state)
          }
          this.loadData()
        }).bind(this))
    }
  }
  delete() {
    const {bauhaus} = this.props
    var state = Object.assign({}, bauhaus._state)
    bauhaus._state.loading = true
    bauhaus._setState(bauhaus._state)
    superagent
      .delete(bauhaus.props.url)
      .accept('json')
      .use(superagentPlugin({auth: true}))
      .end((function(err, res) {
        if (err != null) {
          var state = Object.assign({}, bauhaus._state)
          bauhaus._state.error = true
          return bauhaus._setState(bauhaus._state)
        }
        this.loadData()
      }).bind(this))
  }
  componentWillMount() {
    const {bauhaus} = this.props
    bauhaus._setState({
      savedData: {},
      data: {},
      validationData: {},
      loading: false,
      initialLoaded: false,
      changed: false,
      error: false,
      valid: true
    })
  }
  componentDidMount() {
    this.loadData()
  }
  reset() {
    this.loadData()
  }
  render() {
    const {bauhaus} = this.props
    if (bauhaus._state.error === true) {
      return (
        <div className={ styles.center }>
          <br/>
          { $('$core.content.error') }
        </div>
        )
    }
    if (bauhaus._state.loading === true || bauhaus._state.initialLoaded === false) {
      return (
        <div className={ styles.center }>
          <br/><img src="media/loader.gif" /></div>
        )
    }
    var validationError = ''
    if (bauhaus._state.valid !== true) {
      validationError = (
        <div className={ styles.validationError }>
          <br/>
          { $('$core.commons.errors.validation') }
        </div>
      )
    }
    var saveColor = styles.gray
    if (bauhaus._state.changed === true) {
      saveColor = styles.green
    }
    return (
      <div>
        <span className={ styles.contentHeadline }>{ $(bauhaus.props.title) }</span>
        <hr className={ styles.contentHr } />
        <input className={ c(styles.button, saveColor) } type="button" value={ $('$core.commons.save') } onClick={ this.saveData } key={ bauhaus._path + 'saveButton' } />
        <input className={ c(styles.button, styles.gray) } type="button" value={ $('$core.commons.reset') } onClick={ this.reset } key={ bauhaus._path + 'resetButton' } />
        <input className={ c(styles.button, styles.gray, styles.hoverRed) } type="button" value={ $('$core.commons.delete') } onClick={ this.delete } key={ bauhaus._path + 'deleteButton' } />
        <br/>
        { validationError }
        <br/>
        { _.map(bauhaus._childrenGenerators, function(component, key) {
            return component({
              get: this
                .getValue
                .bind(this),
              set: this
                .setValue
                .bind(this),
              isValid: this
                .isValid
                .bind(this),
              setValidator: this
                .setValidator
                .bind(this),
              key: key
            })
          }.bind(this)) }
      </div>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

__GLOBAL__.exportDefault = Look(JsonForm)
