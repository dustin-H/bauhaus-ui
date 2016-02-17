# Creating a custom Module
A module needs to export a React-Component. There are some rules you need to follow:

1. **Export:**  
2. You need to export your component to `__GLOBAL__.exportDefault`. All other exports are ignored!
3. **Import npm modules:**  
4. Always use npm:`bauhaus-ui-module-utils` to import the default modules. It provides the biggest modules which are required by bauhaus-ui anyway without bundling them again.

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

__GLOBAL__.exportDefault = Custom;
```
