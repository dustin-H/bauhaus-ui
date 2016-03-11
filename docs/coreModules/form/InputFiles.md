# Module: InputFiles
This module is designed to be compatible with the [LoopBack Storage Component REST API](https://docs.strongloop.com/display/public/LB/Storage+component+REST+API). It is possible to see the files in a container, activate them and delete them. You can also upload files into the container.

## Props:

Name                                                                                 | Info
------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
path                                                                                 | The JsonForm data-object-path
container                                                                            | Name of the container
filename                                                                             | Rename a file that gets uploaded. This is a string supporting templates: (eg: `'MyFile_${name}.${end}'`).<br/>These template values are available:<br/>- name: Original filename<br/>- end: Lowercased file extension<br/>- time: timestamp + uniq identifier<br/>- lastModified: Last modified timestamp<br/>- size: Filesize
fileprefix                                                                           | A prefix that will be put before each filename. No matter what `filename` returns. Also the container-files will be filtered by this prefix.
mimeTypeRegExp                                                                       | A regex string for matching the file-type
selectMin                                                                            | The minimum selectable files
selectMax                                                                            | The maximum selectable files
maxUploads                                                                           | The maximum of files that can be uploaded into the container
uploadUrl<br/>(default: `'/api/containers/${container}/upload'`)                     | POST: upload url
deleteUrl<br/>(default: `'/api/containers/${container}/files/${name}'`)              | DELETE: file url
downloadUrl<br/>(default: `'/api/containers/${container}/upload'`)                   | GET: file download url
getFilesInContainer<br/>(default: `'/api/containers/${container}/download/${name}'`) | GET: Get list of files in the container
getContainer<br/>(default: `'/api/containers/${container}/files'`)                   | GET: check if container exists
createContainer<br/>(default: `'/api/containers'`)                                   | POST: create container
fileId<br/>(default: `'/api/containers/${container}/download/${name}'`)              | ID template which defines the file ID which gets saved in JsonForm

## Example:

```js
{
  name: 'InputFiles',
  props: {
    container: 'MyContainer',
    filename: 'testfile_${time}',
    selectMin: 1,
    selectMax: 2,
    maxUploads: 10,
    path: 'files'
  }
}
```

## I18n: <a href="../../i18n.md"><img src="../../img/i18n.png" height="15"/></a>

id                | english text
----------------- | ------------
core.commons.date | Date
core.commons.time | Time
