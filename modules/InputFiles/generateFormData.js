
const loadFile = (name, file, callback) => {
  var reader = new FileReader()
  reader.onload = function(evt) {
    callback(null, reader.result, name, file.type)
  }
  reader.onerror = function(err) {
    callback(err)
  }
  reader.readAsArrayBuffer(file)
}

export default function (bauhaus, options, files, cb) {
  var formData = new FormData()
  var k = 0

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
        var m = new RegExp(options.mimeTypeRegExp)
        if (m.test(files[i].type) !== true) {
          return alert('Dateityp nicht erlaubt!')
        }
      }
      k++
      loadFile(name, files[i], function(err, result, name, type) {
        if(err){
          return alert('Fehler beim Laden der Dateien!')
        }
        var file = new Blob([result], {
          type: type
        })
        formData.append(name, file, name)
        k--
        if(k<1){
          cb(formData)
        }
      })
    }
  }
}
