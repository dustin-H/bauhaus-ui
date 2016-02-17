# Using custom Modules
You can define custom modules with every response you send back from an endpoint.

**For example you can use it in the [Config](endpoints/Config.md) endpoint:**

```js
{
   modules: {
      MyCustomModule: '/modules/MyCustomModule/build/bundle.js'
   }
   endpoints: {
      /* endpoints */
   }
}
```

The object `modules` can include multiple module definitions. The value is a url to the js-bundle of your module. It gets called when the module is needed.

**See [Create a custom module](CreateCustomModule.md).**
