import React, { PropTypes, Component } from 'react'
import Look, { StyleSheet } from 'react-look'
const c = StyleSheet.combineStyles
import { $ } from 'bauhaus-ui-module-utils'
import { superagentPlugin } from 'bauhaus-ui-module-utils'
import generateFormData from './generateFormData.js'

import _ from 'lodash'
import superagent from 'superagent'

import Bin from '../../public/media/extIcons/bin2.svg'

class InputFiles extends Component {
  constructor(props) {
    super(props)
    this.handleFileChange = this.handleFileChange.bind(this)
    //this.toggleActive = this.toggleActive.bind(this)
    this.upload = this.upload.bind(this)
    var files = props.get(props.bauhaus.props.path)
    if (files == null || files === '') {
      files = []
    }
    this.state = {
      chosenFiles: [],
      options: this.getOptions(),
      loading: false,
      error: false,
      files: [],
      selectedFiles: files
    }
  }
  componentDidMount() {
    this.checkContainer()
  }
  handleFileChange(event) {
    const {bauhaus, get, set} = this.props
    this.state.chosenFiles = event.target.files
    this.setState(this.state)
  }
  checkContainer() {
    const {bauhaus} = this.props
    var options = this.state.options
    var getContainer = options.getContainer({
      container: options.container
    })

    this.state.loading = true
    this.setState(this.state)
    superagent
      .get(getContainer)
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
        if (err != null || res == null || res.body == null) {
          if (err.status === 404) {
            this.createContainer()
          } else {
            this.state.error = true
            this.state.loading = false
            this.setState(this.state)
          }
          return
        }
        this.loadContainer()
      }).bind(this))
  }
  loadContainer() {
    const {bauhaus} = this.props
    var options = this.state.options
    var getFilesInContainer = options.getFilesInContainer({
      container: options.container
    })

    this.state.loading = true
    this.setState(this.state)
    superagent
      .get(getFilesInContainer)
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
        if (err != null || res == null || res.body == null) {
          if (err.status === 404) {
            this.createContainer()
          } else {
            this.state.error = true
            this.state.loading = false
            this.setState(this.state)
          }
          return
        }
        this.state.error = false
        this.state.loading = false
        this.state.files = res.body
        this.setState(this.state)
      }).bind(this))
  }
  createContainer() {
    const {bauhaus} = this.props
    var options = this.state.options
    var createContainer = options.createContainer({
      container: options.container
    })

    this.state.loading = true
    this.setState(this.state)
    superagent
      .post(createContainer)
      .send({
        name: options.container
      })
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
        if (err != null || res == null || res.body == null) {
          this.state.error = true
          this.state.loading = false
          return this.setState(this.state)
        }
        this.loadContainer()
      }).bind(this))
  }
  upload() {
    const {bauhaus, get, set} = this.props
    var options = this.state.options

    var uploadUrl = options.uploadUrl({
      container: options.container
    })

    if(this.state.chosenFiles.length + this.state.files.length > options.maxUploads){
      return alert('Zu viele Bilder! Maximal erlaubt: '+options.maxUploads)
    }

    generateFormData(bauhaus, options, this.state.chosenFiles, function(formData) {
      superagent.post(uploadUrl).send(formData).end(function(err, res) {
        if (err != null) {
          alert('Upload fehlgeschlagen!')
        } else {
          this.loadContainer()
        //alert('Upload erfolgreich!')
        }
      }.bind(this))
    }.bind(this))
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
      fileId: '/api/containers/${container}/download/${name}',
      getFilesInContainer: '/api/containers/${container}/files',
      getContainer: '/api/containers/${container}',
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
    options.getContainer = _.template(options.getContainer)
    options.fileId = _.template(options.fileId)

    return options
  }
  componentWillReceiveProps(newProps) {
    var files = newProps.get(newProps.bauhaus.props.path)
    if (files != null && files === '') {
      this.state.selectedFiles = files
      this.setState(this.state)
    }
  }
  isActive(id) {
    if (this.state.selectedFiles.indexOf(id) >= 0) {
      return true
    }
    return false
  }
  deleteFile(deleteUrl, id, name) {
    const options = this.state.options
    const {set, bauhaus} = this.props

    if (this.isActive(id) === true) {
      return alert('Aktive Dateien können nicht gelöscht werden!')
    }

    if (confirm('Sind Sie sicher, dass Sie die Datei "' + name + '" löschen möchten?') !== true) {
      return;
    }

    this.deleteFileForce(deleteUrl)
  }
  deleteFileForce(deleteUrl) {
    superagent
      .delete(deleteUrl)
      .set('Cache-Control', 'no-cache')
      .use(superagentPlugin({
        auth: true,
        disable: {
          modules: true,
          i18n: true
        }
      }))
      .end((function(err, res) {
        if (err != null || res == null) {
          return alert('Löschen fehlgeschlagen!')
        }
        this.loadContainer()
      //alert('Erfolgreicht gelöscht!')
      }).bind(this))
  }
  toggleActive(id) {
    const options = this.state.options
    var i = this.state.selectedFiles.indexOf(id)
    if (i < 0) {
      if (options.selectMax === 0 || options.selectMax > this.state.selectedFiles.length) {
        this.state.selectedFiles.push(id)
      } else {
        alert('Das Maximium ist erreicht!');
      }
    } else {
      if (options.selectMin < this.state.selectedFiles.length) {
        this.state.selectedFiles.splice(i, 1)
      } else {
        alert('Das Minimum ist erreicht!');
      }
    }
    this.setState(this.state)
    const {set, bauhaus} = this.props
    set(bauhaus.props.path, this.state.selectedFiles)
  }
  render() {
    const {bauhaus, get, set, isValid} = this.props
    const options = this.state.options

    if (this.state.error === true) {
      return (<div className={ styles.errorBox }>Fehler beim Laden des Datei-Containers!</div>)
    }

    if (this.state.loading === true) {
      return (<div className={ styles.loadingBox }>Container wird geladen...</div>)
    }

    var valid = isValid(bauhaus.props.path)
    var inputStyle = [styles.textInput]
    if (valid !== true) {
      inputStyle.push(styles.inputError)
    }
    return (
      <div className={ styles.wrapper }>
        { _.map(this.state.files, function(value, key) {
            var href = options.downloadUrl({
              container: options.container,
              name: value.name
            })
            var id = options.fileId({
              container: options.container,
              name: value.name
            })
            var deleteUrl = options.deleteUrl({
              container: options.container,
              name: value.name
            })
            var name = value.name
            var boxStyles = [styles.imageBox]
            var active = this.isActive(id)
            if (active === true) {
              boxStyles.push(styles.active)
            }
            var icon = (<img className={ styles.image } src={ href } />)
            var end = name.split('.').pop().toLowerCase();
            if (['jpg', 'jpeg', 'png', 'gif', 'svg'].indexOf(end) < 0) {
              icon = (<span className={ styles.icon }>{ end.toUpperCase() }</span>)
            }
            return (<div key={ id } className={ c(...boxStyles) }>
                      { icon }
                      <a href={ href } target="_blank" className={ styles.text }>
                        { value.name }
                      </a>
                      <span className={ styles.checkbox } onClick={ this.toggleActive.bind(this, id) }><input checked={ active } type="checkbox"/></span>
                      <span className={ styles.delete } onClick={ this.deleteFile.bind(this, deleteUrl, id, name) }><Bin className={ styles.bin }/></span>
                    </div>)
          }.bind(this)) }
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
