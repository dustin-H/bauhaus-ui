# Endpoint: Sidebar
> All endpoints need to respond valid `JSON` with the HTTP-Header `content-type`: `application/json`!

## request

Name   | Info
------ | --------------------------------
url    | *Defined in [Config](Config.md)*
method | GET

## response
It needs to include an array of menu objects:

```js
{
   sideBar: [{
      name: 'Posts',
      pathname: '/posts',
      imageUrl: 'media/icons/channels.svg'
   }, {
      name: 'Menu',
      pathname: '/menu'
   }]
}
```

**Menu object:**

Key                   | Value
--------------------- | ---------------------------------------------------------------
name                  | A name, that gets displayed
pathname              | The path where the link leads to
imageUrl *(Optional)* | A `url` to an image which gets displayed in front of the `name`
