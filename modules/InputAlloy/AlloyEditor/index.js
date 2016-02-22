import React, { Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import AlloyEditor from 'alloyeditor'
window.ALLOYEDITOR_BASEPATH = 'alloyeditor/'
window.CKEDITOR_BASEPATH = 'alloyeditor/'
import scribePluginToolbar from 'scribe-plugin-toolbar'
const idCounter = 0

class AlloyEditor extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this._id = 'alloyEditor-' + idCounter
    idCounter++
    this._editor = AlloyEditor.editable(this._id, this.props.alloyEditorConfig)
  }
  componentWillUnmount() {
    this._editor.destroy()
  }
  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value) {
      this.newValue = newProps.value
      this.scribe.setContent(newProps.value)
    }
  }
  render() {
    return (
      <div id={ this._id }>
      </div>
      )
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
        this.props
          .onChange(value)
      }
    }

    scribe.on('content-changed', updateHtml.bind(this))
    this.scribe = scribe
    // updateHtml.bind(this)()
  }
  componentWillUnmount() {
  }
  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value) {
      this.newValue = newProps.value
      this.scribe.setContent(newProps.value)
    }
  }
  render() {
    return (
      <div>
        <div ref={ this
                     .setRef('toolbar')
                     .bind(this) }>
          <button data-command-name="bold">Bold</button>
          <button data-command-name="italic">Italic</button>
          <button data-command-name="underline">Underline</button>
          <button data-command-name="strikeThrough">Strike Through</button>
          <button data-command-name="indent">Indent</button>
          <button data-command-name="outdent">Outdent</button>
          <button data-command-name="undo">Undo</button>
          <button data-command-name="redo">Redo</button>
          <button data-command-name="subscript">Subscript</button>
          <button data-command-name="subscript">Superscript</button>
          <button data-command-name="insertOrderedList">Ordered List</button>
          <button data-command-name="insertUnorderedList">Unordered List</button>
        </div>
        <div className={ this.props.className } ref={ this
                                                        .setRef('main')
                                                        .bind(this) }></div>
      </div>
      )
  }
}

import styleSheet from './style.js'
import cssStyle from './style.css.js'
var styles = StyleSheet.create(styleSheet)
StyleSheet.addCSS(cssStyle)

export default Look(ScribeEditor)
