# Module: InputDateTime
Renders a two input fields for date and time, gets the value form `path` and updates it. It shows a calendar to choose a date, and a clock to choose the time. For this [MaterialUI](https://github.com/callemall/material-ui) is used. The Date+Time is saved as [ISO8601 String](http://momentjs.com/docs/#/displaying/as-iso-string/)

## Props:

Name     | Info
-------- | -------------------------------------------------------
path     | The JsonForm data-object-path
dateOnly | Boolean: When `true` only the date input field is shown
timeOnly | Boolean: When `true` only the time input field is shown

## Example:

```js
{
   name: 'InputDateTime',
   props: {
      path: 'hello.world.test'
   }
}
```

## I18n: <a href="../../i18n.md"><img src="../../img/i18n.png" height="15"/></a>

id                | english text
----------------- | ------------
core.commons.date | Date
core.commons.time | Time
