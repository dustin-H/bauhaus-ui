import React, { Component } from 'react'
import { getModule } from '../utils/moduleLoader/index.js'

var bauhausIdCounter = 0

class Loader extends Component {

  componentWillMount() {
    this._bauhausId = 'b_' + bauhausIdCounter
    bauhausIdCounter++
  }

  createSetStateAction(key) {
    const {bauhaus} = this.props
    return function(newState) {
      bauhaus._actions.router.setContentState(key, newState)
    }
  }

  createChild(component) {
    return function(props) {
      return React.createElement(Loader, Object.assign({}, props, {
        bauhaus: component
      }))
    }
  }

  render() {
    const {bauhaus} = this.props
    var props = Object.assign({}, this.props)
    props.bauhaus._state = props.bauhaus._contentState[this._bauhausId] || {}
    props.bauhaus._setState = this.createSetStateAction(this._bauhausId)
    if (props.bauhaus.components != null && typeof props.bauhaus.components === 'object' && props.bauhaus.components.length > 0) {
      var childrenGenerators = []
      for (var i in props.bauhaus.components) {
        var component = props.bauhaus.components[i]
        component._contentState = props.bauhaus._contentState
        component._actions = props.bauhaus._actions
        childrenGenerators.push(this.createChild(component))
      }
      props.bauhaus._childrenGenerators = childrenGenerators
      return React.createElement(getModule(props.bauhaus.name), props)
    } else {
      return React.createElement(getModule(props.bauhaus.name), props)
    }
  }
}

export default Loader
