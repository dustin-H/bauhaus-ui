# bauhaus-ui superagent-plugin
This is a function to get the bauhaus superagent plugin. It can be used in [custom modules](CreateCustomModule.md).

## Import:

```js
import {superagentPlugin} from 'bauhaus-ui-module-utils'
```

## Usage:

```js
var options = {
   disable: {
      modules: true,
      i18n: true
   },
   auth: true
}
var plugin = superagentPlugin(options)

superagent
   .get('/api/getstuff')
   .use(plugin)
   .end(function(err, res) {
      /* do something */
   })
```

## Parameters:

name                    | description
----------------------- | --------------------------------------------------------------------------------
options.disable.modules | If `true` the [module loading](UseCustomModule.md) is disabled for this request.
options.disable.i18n | If `true` the [language pack loading](i18n.md) is disabled for this request.
options.auth | If `true` the auth-token will be added to the request header.
