var UglifyJS = require('uglify-js');
var fs = require('fs');
console.log('Minify...');
var result = UglifyJS.minify('build/bundle.js');
console.log('Saving...');

var browserFixes = fs.readFileSync('es6shim.js');

fs.writeFileSync('build/bundle.js', browserFixes+result.code);
console.log('FINISH');
