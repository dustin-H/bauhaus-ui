# Endpoint: Config
This config gets loaded from the same path where the `index.html` file of **Bauhaus-UI** was loaded from.

> All endpoints need to respond valid `JSON` with the HTTP-Header `content-type`: `application/json`!

## request

Name   | Info
------ | --------------
url    | `/config.json`
method | GET

## response
It needs to define the other endpoints like this:

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
