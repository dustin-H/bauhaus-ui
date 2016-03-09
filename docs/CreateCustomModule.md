# Creating a Custom Module
A module needs to export a React-Component. There are some rules you need to follow:

1. **Export:**  
You need to export your component to `__GLOBAL__.exportDefault`. All other exports are ignored!
2. **Import npm modules:**  
Always use npm:`bauhaus-ui-module-utils` to import the default modules. It provides the biggest modules which are required by bauhaus-ui anyway without bundling them again.
3. **In the end there must be only one file:**  
You need to bundle your module to a single file. So bauhaus-ui can import it.

> See also: [Use Custom Module](UseCustomModule.md)

**Available npm packages:**

npm name   | import string
---------- | ----------------------------------------
react      | `bauhaus-ui-module-utils/npm/react`
react-dom  | `bauhaus-ui-module-utils/npm/react-dom`
lodash     | `bauhaus-ui-module-utils/npm/lodash`
react-look | `bauhaus-ui-module-utils/npm/react-look`
superagent | `bauhaus-ui-module-utils/npm/superagent`

**Available bauhaus functions:**

```js
import * as bauhaus from 'bauhaus-ui-module-utils';
```

access                     | description
-------------------------- | -----------------------------------------------------------------------------------------------------------
`bauhaus.$(id)`            | i18n function to get the language string by `id`. See [GetLanguageTextFunction](GetLanguageTextFunction.md).
`bauhaus.superagentPlugin` | superagent module to enable auth, module-loading and i18n-package-loading for the request, where it is used. See [SuperagentPlugin](SuperagentPlugin.md).


**Custom.js:**
```js
import React, {Component} from 'bauhaus-ui-module-utils/npm/react';
import {$} from 'bauhaus-ui-module-utils';

class Custom extends Component {
    render() {
        return (
            <span>{$('$3rd.some.id')}</span>
        );
    }
}

export default Custom;
```

**export.js:**

```js
import Custom from './Custom.js'
__GLOBAL__.exportDefault = Custom
```

> Note: Some bundlers (like webpack) can do this for you! In the [Example](TODO) you can see how I did it with webpack.
