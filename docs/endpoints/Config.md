# Endpoint: Config
This config gets loaded from the same path where the `index.html` file of **Bauhaus-UI** was loaded from.

> All endpoints need to respond valid `JSON` with the HTTP-Header `content-type`: `application/json`!

## Request

Name   | Info
------ | --------------
url    | `/config.json`
method | GET

## Response
It needs to define the other `endpoints` like this:

```js
{
   endpoints: {
      routes: {
         url: "/api/routes"
      },
      sideBar: {
         url: "/api/sideBar"
      },
      search: {
         url: "/api/search"
      },
      login: {
         url: "/api/login"
      }
   }
}
```

You can choose the url's by your own!

## Next
When you defined this endpoints the url's will be called later.

See further docs:

Endpoint | Docs
-------- | ---------------------
routes   | [Routes](Routes.md)
sideBar  | [Sidebar](Sidebar.md)
search   | [Search](Search.md)
login    | [Login](Login.md)
