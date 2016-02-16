# Endpoint: Content
> All endpoints need to respond valid `JSON` with the HTTP-Header `content-type`: `application/json`!

## Request

Name   | Info
------ | --------------------------------
url    | *Defined in [Config](Config.md)*
method | GET

## Response
It needs to include an object `content` with a bauhaus-content object like this:

```js
{
   content: {
      name: 'Label',
      props: {
         text: 'Some label text.'
      },
      components: []
   }
}
```

> **See [BauhausContent](../BauhausContent.md) to get details of the bauhaus-content object.**

In every `string` in the nested object `content` the parameters from the current [route](Routes.md) will be replaced.
