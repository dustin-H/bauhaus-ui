
var fs = require('fs');
console.log('Reading...');
var data = fs.readFileSync('public/build/bundle.js');
var browserFixes = fs.readFileSync('es6shim.js');

console.log('Saving...');
fs.writeFileSync('public/build/bundle.js', browserFixes + data);
console.log('FINISH');
