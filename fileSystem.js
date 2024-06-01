const fs = require('fs');

const readText = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(readText);

const writeText = `this is write text here. ${readText}.\nCreated On ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', writeText);
console.log('File Written!');