# Module: InputSelect

Renders a selection field with `options`, gets the value form `path` and updates it.

## Props:

Name | Info
---- | -----------------------------
path | The JsonForm data-object-path
options<br/>(the option value is <a href="../../i18n.md"><img src="../../img/i18n.png" height="15"/></a>) | An object of select options

## Example:

```js
{
   name: 'InputSelect',
   props: {
      path: 'hello.world.test',
      options: {
         a: 'Choice A',
         b: 'Choice B',
         c: 'Choice C'
      }
   }
}
```