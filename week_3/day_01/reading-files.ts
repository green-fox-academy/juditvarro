const fs = require('fs');

let fileContent = fs.readFileSync('readthispls.txt', 'utf-8');
console.log(fileContent);