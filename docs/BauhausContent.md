# Bauhaus-Content object
The Bauhaus-Content is a `JSON` representation of the content displayed in the main view. It describes a nested React-Component structure. The components are called **modules**. A **module** can wrap other **modules**.

## Object structure

**Properties:**

Key                                                  | Value
---------------------------------------------------- | -----------------------------------------------------
name                                                 | The name of the module which will be rendered
props                                                | An object which contains some module specific options
components <br/>***(optional for wrapper modules)*** | An array of Bauhaus-Content objects

**Default module:**

```js
{
   name: 'InputText',
   props: {
      path: 'hello.world.test'
   }
}
```

**Wrapper module:**

```js
{
   name: 'Label',
   props: {
      text: 'Some label text.'
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
