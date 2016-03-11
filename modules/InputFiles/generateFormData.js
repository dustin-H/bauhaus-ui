
const loadFile = (name, file, callback, progress) => {
  var reader = new FileReader()
  reader.onload = function(evt) {
    callback(null, reader.result, name, file.type)
  }
  reader.onerror = function(err) {
    callback(err)
  }
  reader.onprogress = function(prog) {
    progress(name, prog.loaded, prog.total)
  }
  reader.readAsArrayBuffer(file)
}

export default function (bauhaus, options, files, cb, progressEvent) {
  var formData = new FormData()
  var progress = {}
  var k = 0

  for (var i in files) {
    if (files.hasOwnProperty(i) && files[i] instanceof File) {

      var splittedName = files[i].name.split('.')
      var end = splittedName.pop().trim().toLowerCase()
      var name = splittedName.join('.')

      var templateObject = {
        name: name,
        end: end,
        time: Date.now() + '-' + k,
        size: files[i].size,
        lastModified: files[i].lastModified
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
        if (err) {
          return alert('Fehler beim Laden der Dateien!')
        }
        var file = new Blob([result], {
          type: type
        })
        formData.append(name, file, name)
        k--
        if (k < 1) {
          cb(formData)
        }
      }, function(name, loaded, total) {
        progress[name] = {
          loaded: loaded,
          total: total
        }
        var l = 0
        var t = 0
        for (var i in progress) {
          l += progress[i].loaded
          t += progress[i].total
        }
        progressEvent(l / t * 100)
      })
    }
  }
}
