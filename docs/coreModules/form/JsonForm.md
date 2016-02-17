# Module: JsonForm
This is a wrapper-module. It loads `JSON`-data from the `url`, updates it with a `PUT` request and can `DELETE` the document. It renders all child-modules and provides some [functions](JsonForm.md#Functions) to them.

## Props:

Name                                                                          | Info
----------------------------------------------------------------------------- | ----------------------------------------------------------
url                                                                           | The CRUD url string
title <a href="../../i18n.md"><img src="../../img/i18n.svg" height="15"/></a> | A title string, that gets displayed at the top of the form

## Functions:

Name                          | Info
----------------------------- | ------------------------------------------------------------------
get(path)                     | Gets the value at `path` of the `JSON`-data-object
set(path, value)              | Sets the `value` at `path` of the `JSON`-data-object
isValid(path)                 | Checks if the `value` at `path` of the `JSON`-data-object is valid
setValidator(path, validator) | Sets a `validator` function for `path` of the `JSON`-data-object

## Example:

```js
{
   name: 'JsonForm',
   props: {
      url: '/api/formdata',
      title: 'My nice form!'
   },
   components: [
      {
         name: 'InputText',
         props: {
            path: 'hello.world.test'
         }
      }
   ]
}
```

## I18n: <a href="../../i18n.md"><img src="../../img/i18n.svg" height="15"/></a>

id                             | english text
------------------------------ | -------------------------
core.commons.errors.validation | Validation failed!
core.content.error             | Error while loading page!
core.commons.save              | Save
core.commons.reset             | Reset
core.commons.delete            | Delete
