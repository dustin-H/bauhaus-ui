# Module: Section
This is a wrapper-module. It renders the `text` and all its child components if `folded === false`.

## Props:

Name                    | Info
----------------------- | ---------------------------------------------------------------
text                    | String shown as section-title
folded ***(Optional)*** | Boolean defines wether the section is folded or open by default (`false` by default)

## Example:

```js
{
   name: 'Section',
   props: {
      text: 'My section name',
      folded: false
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
