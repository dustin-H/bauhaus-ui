import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import { $ } from 'bauhaus-ui-module-utils'
import _ from 'lodash'
import superagent from 'superagent'
import { superagentPlugin } from 'bauhaus-ui-module-utils'

class JsonForm extends Component {
  constructor(props) {
    super(props)
    this.validators = {};
    this.saveData = this
      .saveData
      .bind(this)
    this.delete = this
      .delete
      .bind(this)
    this.reset = this
      .reset
      .bind(this)
    this.state = {
      savedData: {},
      data: {},
      validationData: {},
      loading: false,
      initialLoaded: false,
      changed: false,
      error: false,
      valid: true
    }
  }
  getValue(path) {
    const {bauhaus} = this.props
    return _.get(this.state.data, path)
  }
  setValue(path, value) {
    const {bauhaus} = this.props
    var state = Object.assign({}, this.state)
    if (state.initialLoaded === true && state.loading === false) {
      var data = state.data
      _.set(data, path, value)
      state.data = data
      if (this.validators[path] != null) {
        state.validationData[path] = this.validators[path](value)
      }
      state.valid = true
      for (var i in state.validationData) {
        if (state.validationData[i] !== true) {
          state.valid = false
        }
      }
      state.changed = (JSON.stringify(state.data) !== state.savedData)
    }
    this.setState(state)
  }
  setValidator(path, validator) {
    this.validators[path] = validator
  }
  isValid(path) {
    const {bauhaus} = this.props
    if (this.state == null || this.state.validationData == null || this.state.validationData[path] == null || this.state.validationData[path] === true) {
      return true
    }
    if (this.state.validationData[path] === false) {
      return '$core.commons.errors.validation'
    }
    if (typeof this.state.validationData[path] === 'string') {
      return this.state.validationData[path]
    }
    return '$core.commons.errors.validation'
  }
  validateAll() {
    const {bauhaus} = this.props
    var state = Object.assign({}, this.state)
    var data = state.data
    state.valid = true
    for (var path in this.validators) {
      var value = _.get(data, path)
      state.data = data
      state.validationData[path] = this.validators[path](value)
      if (state.validationData[path] !== true) {
        state.valid = false
      }
    }
    this.setState(state)
    return state.valid
  }
  loadData() {
    const {bauhaus} = this.props
    var state = Object.assign({}, this.state)
    state.loading = true
    this.setState(state)
    superagent
      .get(this.props.bauhaus.props.url)
      .accept('json')
      .set('Cache-Control', 'no-cache')
      .use(superagentPlugin({
        auth: true,
        disable: {
          modules: true,
          i18n: true
        }
      }))
      .end((function(err, res) {
        var state = Object.assign({}, this.state)
        if (err != null || res == null || res.body == null) {
          state.error = true
          return this.setState(state)
        }
        state.data = res.body
        state.savedData = JSON.stringify(res.body)
        state.initialLoaded = true
        state.loading = false
        state.changed = false
        state.valid = true
        state.validationData = {}
        this.setState(state)
      }).bind(this))
  }
  saveData() {
    if (this.validateAll() === true) {
      const {bauhaus} = this.props
      var state = Object.assign({}, this.state)
      this.state.loading = true
      this.setState(this.state)
      superagent
        .put(bauhaus.props.url)
        .send(this.state.data)
        .accept('json')
        .use(superagentPlugin({
          auth: true
        }))
        .end((function(err, res) {
          if (err != null) {
            var state = Object.assign({}, this.state)
            this.state.error = true
            return this.setState(this.state)
          }
          this.loadData()
        }).bind(this))
    }
  }
  delete() {
    const {bauhaus} = this.props
    var state = Object.assign({}, this.state)
    this.state.loading = true
    this.setState(this.state)
    superagent
      .delete(bauhaus.props.url)
      .accept('json')
      .use(superagentPlugin({
        auth: true
      }))
      .end((function(err, res) {
        if (err != null) {
          var state = Object.assign({}, this.state)
          this.state.error = true
          return this.setState(this.state)
        }
        this.loadData()
      }).bind(this))
  }
  componentWillMount() {
    const {bauhaus} = this.props
    /*this.setState({
      savedData: {},
      data: {},
      validationData: {},
      loading: true,
      initialLoaded: false,
      changed: false,
      error: false,
      valid: true
    })*/
  }
  componentDidMount() {
    this.loadData()
  }
  reset() {
    this.loadData()
  }
  render() {
    const {bauhaus} = this.props
    if (this.state.error === true) {
      return (
        <div className={ styles.center }>
          <br/>
          { $('$core.content.error') }
        </div>
      )
    }
    if (this.state.loading === true || this.state.initialLoaded === false) {
      return (
        <div className={ styles.center }>
          <br/><img src="media/loader.gif" /></div>
      )
    }
    var validationError = ''
    if (this.state.valid !== true) {
      validationError = (
        <div className={ styles.errorBox }>
          { $('$core.commons.errors.validation') }
        </div>
      )
    }
    var saveColor = styles.gray
    if (this.state.changed === true) {
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

export default Look(JsonForm)
