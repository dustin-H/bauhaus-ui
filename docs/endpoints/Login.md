# Endpoint: Login
> All endpoints need to respond valid `JSON` with the HTTP-Header `content-type`: `application/json`!

## Request

Name         | Info
------------ | --------------------------------
url          | *Defined in [Config](Config.md)*
method       | POST
content-type | application/json

The body contains this `JSON`:

```js
{
   username: 'The username entered by the user.',
   password: 'The password entered by the user.',
}
```

## Response

### Login successful:
It needs to respond a `profile` and a `token` like this:

```js
{
   token: 'H3kdic8dkHjkd832jd',
   profile: {
      firstname: 'Steve',
      lastname: 'Jobs',
      avatarUrl: 'testapi/steve-jobs.jpg'
   }
}
```

> Note: If you want to use `cookie-authentication` you can just set the `cookie` with the `header` and just put some trash into the `token`. However, if the `token` is used it will be sent with every `request` in the `header` as `Authorization`.

### Login failed:

If the username or password is invalid just respond the `http-status-code` `401`.
