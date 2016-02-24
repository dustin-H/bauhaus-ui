import React, { Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import Scribe from 'scribe-editor'
import scribePluginToolbar from 'scribe-plugin-toolbar'
//import Icon from 'babel!svg-react!./icons/bin.svg?name=Icon'
import icons from './icons.js'
import _ from 'lodash';

class ScribeEditor extends Component {
  constructor() {
    super()
    this.refis = {}
    this.scribe = null
    this.newValue = null
    this.updatedValue = null
    this.id = _.uniqueId('scribe-')
    StyleSheet.addCSS({
      '.active': {
        fill: '#20C753'
      }
    }, '.'+this.id)
  }
  setRef(name) {
    return function(elem) {
      this.refis[name] = elem
    }
  }
  componentDidMount() {
    var scribe = new Scribe(this.refis.main)
    scribe.use(scribePluginToolbar(this.refis.toolbar))
    scribe.setContent(this.props.value)

    function updateHtml() {
      var value = scribe.getHTML()
      if (value !== this.props.value && value !== this.newValue) {
        this.updatedValue = value
        this.props.onChange(value)
      }
    }

    scribe.on('content-changed', updateHtml.bind(this))
    this.scribe = scribe
  }
  componentWillUnmount() {
  }
  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value && this.updatedValue !== newProps.value) {
      this.newValue = newProps.value
      this.scribe.setContent(newProps.value)
    }
  }
  shouldComponentUpdate(newProps) {
    if (newProps.value !== this.props.value && this.updatedValue !== newProps.value) {
      return true
    }
    return false
  }
  render() {
    return (
      <div>
        <div className={c(this.id)} ref={ this
                     .setRef('toolbar')
                     .bind(this) }>
          <button className={styles.button} data-command-name="bold"><icons.bold className={styles.icon}/></button>
          <button className={styles.button} data-command-name="italic"><icons.italic className={styles.icon}/></button>
          <button className={styles.button} data-command-name="underline"><icons.underline className={styles.icon}/></button>
          <button className={styles.button} data-command-name="strikeThrough"><icons.strikethrough className={styles.icon}/></button>
          <button className={styles.button} data-command-name="indent"><icons.indent className={styles.icon}/></button>
          <button className={styles.button} data-command-name="outdent"><icons.outdent className={styles.icon}/></button>
          <button className={styles.button} data-command-name="undo"><icons.undo className={styles.icon}/></button>
          <button className={styles.button} data-command-name="redo"><icons.redo className={styles.icon}/></button>
          <button className={styles.button} data-command-name="subscript"><icons.subscript className={styles.icon}/></button>
          <button className={styles.button} data-command-name="superscript"><icons.superscript className={styles.icon}/></button>
          <button className={styles.button} data-command-name="insertOrderedList"><icons.listNumbered className={styles.icon}/></button>
          <button className={styles.button} data-command-name="insertUnorderedList"><icons.list className={styles.icon}/></button>
        </div>
        <div className={ this.props.className } ref={ this
                                                        .setRef('main')
                                                        .bind(this) }></div>
      </div>
      )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default Look(ScribeEditor)
