
var fs = require('fs');
console.log('Reading...');
var data = fs.readFileSync('build/bundle.js');
var browserFixes = fs.readFileSync('es6shim.js');

console.log('Saving...');
fs.writeFileSync('build/bundle.js', browserFixes + data);
console.log('FINISH');
