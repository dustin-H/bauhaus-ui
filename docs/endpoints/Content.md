# Endpoint: Routes
> All endpoints need to respond valid `JSON` with the HTTP-Header `content-type`: `application/json`!

## request

Name   | Info
------ | --------------------------------
url    | *Defined in [Config](Config.md)*
method | GET

## response
It needs to include an object with route definition objects:

```js
{
   routes: {
      posts: {
         endpoint: '/api/views/posts/:id',
         route: '/post/:id'
      },
      menu: {
         endpoint: '/api/views/menu',
         route: '/menu'
      }
   }
}
```

**Route definition object:**

Key         | Value
----------- | ----------------------------------
endpoint    | Endpoint where the page gets loaded from
route       | Bauhaus route, which gets matched with pathname of `Sidebar` and `Search`.

The `route` can include parameters like `:id` which gets replaced in the `endpoint` url.
