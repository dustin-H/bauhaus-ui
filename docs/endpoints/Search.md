# Endpoint: Search
> All endpoints need to respond valid `JSON` with the HTTP-Header `content-type`: `application/json`!

## request

Name   | Info
------ | --------------------------------
url    | *Defined in [Config](Config.md)*
method | GET

**GET-query:**

Key       | Value
--------- | -----------------------------------------------------
search    | **String:** Search-String
languages | **Array:** Array of language keys (e.g. ['de', 'en'])

## response
It needs to include an array of result objects:

```js
{
   searchResults: [{
      title: 'Posts',
      pathname: '/posts',
      description: 'This is a very nice description of the regarding result!'
   }, {
      title: 'Menu',
      pathname: '/menu',
      description: 'This is a very nice description of the regarding result!'
   }]
}
```

**Result object:**

Key         | Value
----------- | ----------------------------------
title       | A title, that gets displayed
pathname    | The path where the link leads to
description | A description, that gets displayed

> Note: The UI will display maximum 10 results!
