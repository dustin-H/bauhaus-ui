
# bauhaus-ui i18n function

This is a function to get the i18n text of an id. It can be used in [custom modules](CreateCustomModule.md). You can import it from `bauhaus-ui-module-utils`.

## Import:
```js
import {$} from 'bauhaus-ui-module-utils'
```

## Call:

```js
var id = "$3rd.test.hello"
var lnString = $(id)
```

## Parameters:

name | description
--- | ---
id | The language-id you want to get the text from. It needs
