
# Get Started

## Installation

```js
npm install bauhaus-ui --save
```

## Usage

> This is a usage guide for node.JS and expressjs! However Bauhaus.UI does not depend on it. See [Usage without node.JS](#Usage without node.JS).

Include it in your express app:

```js
var express = require('express')
var bauhausui = require('bauhaus-ui')
var config = require('./config.json')

var app = express()

app.use(bauhausui(config))

app.listen(8080);
```

The ***(Optional)*** `config` parameter object replaces the need to create a [Config](endpoints/Config.md) endpoint. You just provide the first parameter.

You can also create the config endpoint by yourself:

```js
app.use(bauhausui())

app.get('config.json', express.static('./config.json'))
```


## Usage without node.JS

You can just provide the `bauhaus-ui/public/` folder with a webserver of your choice to some path. Then you also need to add a `config.json` file to this folder, which represents the [Config](endpoints/Config.md) endpoint.
