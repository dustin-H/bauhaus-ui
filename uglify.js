var UglifyJS = require('uglify-js');
var fs = require('fs');
console.log('> Minify main bundle...');
var result = UglifyJS.minify('public/bundle.js');

var browserFixes = fs.readFileSync('es6shim.js');

// var prod = "var process={env:{NODE_ENV:'production'}};var NODE_ENV='production';";

fs.writeFileSync('public/bundle.js', browserFixes + result.code);
console.log('>   Done!');

console.log('Minify core modules...');

var modules = require('./src/coreModules.js');

for (var i in modules) {
  var name = modules[i];
  var path = 'public/modules/' + name + '.js';
  console.log('> Minify ' + path);
  var result = UglifyJS.minify(path);
  fs.writeFileSync(path, result.code);
  console.log('>   Done!');
}

console.log('FINISH');
