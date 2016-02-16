# Endpoint: Routes
> All endpoints need to respond valid `JSON` with the HTTP-Header `content-type`: `application/json`!

## Request

Name   | Info
------ | --------------------------------
url    | *Defined in [Config](Config.md)*
method | GET

## Response
It needs to include an object `routes` with route definition objects:

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

Key      | Value
-------- | --------------------------------------------------------------------------
endpoint | Endpoint where the page gets loaded from
route    | Bauhaus route, which gets matched with pathname of `Sidebar` and `Search`.

The `route` can include parameters like `:id` which gets replaced in the `endpoint` url.

## Next
When you defined this routes the endpoint-url's will be called later as `content` endpoint when the route matches.

See further docs:

Endpoint | Docs
-------- | ---------------------
content  | [Content](Content.md)
