import React, { Component } from 'react';
import Look, { StyleSheet } from 'react-look';
const c = StyleSheet.combineStyles;
import Scribe from 'scribe-editor';
import scribePluginToolbar from 'scribe-plugin-toolbar';

class ScribeEditor extends Component {
  constructor() {
    super();
    this.refis = {};
    this.scribe = null;
    this.newValue = null;
  }
  setRef(name) {
    return function(elem) {
      this.refis[name] = elem;
    }
  }
  componentDidMount() {
    var scribe = new Scribe(this.refis.main);
    scribe.use(scribePluginToolbar(this.refis.toolbar));
    scribe.setContent(this.props.value);

    function updateHtml() {
      var value = scribe.getHTML();
      if (value !== this.props.value && value !== this.newValue) {
        this.props
          .onChange(value);
      }
    }

    scribe.on('content-changed', updateHtml.bind(this));
    this.scribe = scribe;
    // updateHtml.bind(this)();
  }
  componentWillUnmount() {
  }
  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value) {
      this.newValue = newProps.value;
      this.scribe.setContent(newProps.value);
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
      );
  }
}

import styleSheet from './style.js';
var styles = StyleSheet.create(styleSheet);

export default Look(ScribeEditor);
