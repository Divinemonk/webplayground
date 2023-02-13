console.log("script.js working!!");

let fn = prompt("Enter file name:");
console.log(fn)

var fs = require('fs');
var htmlContent = 'Test File';
fs.writeFile('./testfile.html', htmlContent, (error) => { console.log(error); });
