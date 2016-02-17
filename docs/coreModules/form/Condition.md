# Module: Condition
This is a wrapper-module. It compares `A` with `B` by using the `operator`. The values are either defined by `valueA/valueB` or are loaded from `pathA/pathB` from JsonForm. When the condition is `true` the first child-module will be rendered. Otherwise the second one.

## Props:

Name     | Info
-------- | ---------------------------------------------------------------------------------------
operator | [JavaScript Comparison Operator](http://www.w3schools.com/js/js_comparisons.asp) string
valueA <a href="../../i18n.md"><img src="../../img/i18n.png" height="15"/></a>   | The value of `A` for comparison
valueB <a href="../../i18n.md"><img src="../../img/i18n.png" height="15"/></a>   | The value of `B` for comparison
pathA    | The path where the value of `A` gets loaded from for comparison
pathB    | The path where the value of `B` gets loaded from for comparison

## Example:

```js
{
   name: 'Condition',
   props: {
      valueA: 'test',
      pathB: 'hello.world.test',
      operator: '=='
   },
   components: [{
      name: 'Label',
      props: {
         text: 'Condition is true!'
      },
      components: []
   }, {
      name: 'Label',
      props: {
         text: 'Condition is false!'
      },
      components: []
   }]
}
```
