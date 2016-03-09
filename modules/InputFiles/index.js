import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import { $ } from 'bauhaus-ui-module-utils'

import _ from 'lodash'
import superagent from 'superagent'

class InputFiles extends Component {
  constructor(props) {
    super(props)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.upload = this.upload.bind(this)
    this.state = {
      formData: null,
      options: this.getOptions()
    }
  }
  handleFileChange(event) {
    const {bauhaus, get, set} = this.props
    var files = event.target.files
    var formData = new FormData();
    var options = this.state.options

    for (var i in files) {
      if (files.hasOwnProperty(i) && files[i] instanceof File) {

        var splittedName = files[i].name.split('.')
        var end = splittedName.pop().trim().toLowerCase()
        var name = splittedName.join('.')

        var templateObject = {
          name: name,
          end: end,
          time: Date.now(),
          size: files[i].size,
          lastModified: files[i].lastModified,
          path: bauhaus.props.path
        }

        name = options.fileprefix + options.filename(templateObject) + '.' + end

        if (options.mimeTypeRegExp != null) {
          var m = new RegExp(bauhaus.props.mimeTypeRegExp)
          if (m.test(files[i]) === true) {
            formData.append(name, files[i]);
          } else {
            alert('Dateityp nicht erlaubt!')
          }
        } else {
          formData.append(name, files[i]);
        }
      }
    }

    this.state.formData = formData;
  }
  upload() {
    const {bauhaus, get, set} = this.props
    var options = this.state.options

    var uploadUrl = options.uploadUrl({
      container: options.container
    })

    superagent.post(uploadUrl).send(this.state.formData).end(function(err, res) {
      if (err != null) {
        alert('Upload fehlgeschlagen!')
      } else {
        alert('Upload erfolgreich!')
      }
    })
  }
  getOptions() {
    const {bauhaus} = this.props
    var options = {
      container: 'DefaultContainer',
      filename: '${name}.${end}',
      fileprefix: '',
      mimeTypeRegExp: null,
      selectMin: 0,
      selectMax: 0,
      maxUploads: 0,
      uploadUrl: '/api/containers/${container}/upload',
      deleteUrl: '/api/containers/${container}/files/${name}',
      getUrl: '/api/containers/${container}/upload',
      downloadUrl: '/api/containers/${container}/download/${name}',
      getFilesInContainer: '/api/containers/${container}/files',
      createContainer: '/api/containers'
    }

    for (var i in options) {
      if (bauhaus.props[i] != null) {
        options[i] = bauhaus.props[i]
      }
    }

    options.filename = _.template(options.filename)

    options.uploadUrl = _.template(options.uploadUrl)
    options.deleteUrl = _.template(options.deleteUrl)
    options.getUrl = _.template(options.getUrl)
    options.downloadUrl = _.template(options.downloadUrl)
    options.getFilesInContainer = _.template(options.getFilesInContainer)
    options.createContainer = _.template(options.createContainer)

    return options
  }
  render() {
    const {bauhaus, get, set, isValid} = this.props
    var valid = isValid(bauhaus.props.path)
    var inputStyle = [styles.textInput]
    if (valid !== true) {
      inputStyle.push(styles.inputError)
    }
    return (
      <div className={ styles.wrapper }>
        <div className={ styles.box }>
          <div className={ styles.innerBox }>
            <input className={ c(...inputStyle) } type="file" onChange={ this.handleFileChange } multiple></input>
          </div>
          <div className={ styles.spaceBox }>
          </div>
          <div className={ styles.buttonBox }>
            <input className={ styles.button } type="button" value={ $('$core.commons.upload') } onClick={ this.upload } />
          </div>
        </div>
      </div>
    )
  }
}

import styleSheet from './style.js'
var styles = StyleSheet.create(styleSheet)

export default Look(InputFiles)
