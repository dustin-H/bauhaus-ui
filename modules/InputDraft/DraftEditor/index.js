import React, { Component } from 'react'
//import Look, { StyleSheet } from 'react-look'
//const c = StyleSheet.combineStyles
import { Editor, ContentState, EditorState } from 'draft-js'
import icons from './icons.js'

class DraftEditor extends Component {
  constructor(props) {
    super(props)
    var contentState = ContentState.createFromText('Dieser Test');
    var editorState = EditorState.createWithContent(contentState);
    this.state = {
      editorState
    };
  }
  onChange(editorState) {
    this.setState({
      editorState
    })
  }
  render() {
    const {editorState} = this.state
    return (<div>
              <Editor editorState={ editorState } onChange={ this.onChange.bind(this) } ref="editor" spellCheck={ true } />
            </div>)
  }
}

//import styleSheet from './style.js'
//var styles = StyleSheet.create(styleSheet)

export default DraftEditor
