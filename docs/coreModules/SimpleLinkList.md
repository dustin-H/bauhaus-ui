# Module: SimpleLinkList
Shows each element in the array given in `list` with a link to the given `pathname`. Also a filter is shown. The user can enter a search string.

## Props:

Name                                                                    | Info
----------------------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------
list                                                                    | Array of list-objects. List-objects have the properties `name` (string <a href="../i18n.md"><img src="../img/i18n.png" height="15"/></a>) and `pahtname` (string)
title <a href="../i18n.md"><img src="../img/i18n.png" height="15"/></a> | String displayed as title.

## Example:

```js
{
  name: 'SimpleLinkList',
  props: {
    title: 'List of senseless stuff',
    list: [
      {
        name: 'This is nice!',
        pathname: '/posts/nice'
      }, {
        name: 'Hello World',
        pathname: '/hello/world'
      }, {
        name: 'I have a dream!',
        pathname: '/dream'
      }, {
        name: 'Long live the cookie!',
        pathname: '/cookie'
      }
    ]
  }
}
```

## I18n: <a href="../i18n.md"><img src="../img/i18n.png" height="15"/></a>

id                  | english text
------------------- | ------------
core.commons.filter | Filter
