# Module: Label
This is a wrapper-module. It renders the `text` and all its child components. When `info` is provided it shows an info-button which can be clicked to see the info-message.

## Props:

Name                  | Info
--------------------- | ----------------------------------
text                  | String shown as label-text
info ***(Optional)*** | String with additional information

## Example:

```js
{
   name: 'Label',
   props: {
      text: 'My label',
      info: 'Some information about this.'
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
