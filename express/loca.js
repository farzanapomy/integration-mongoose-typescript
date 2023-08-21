const add = (a, b) => a + b;
const fs = require('fs');

const readText = fs.readFileSync(
  'F://Level 2//Mongo+typescript//express//text.txt',
  'utf8'
);
console.log(readText);

const writeText = fs.writeFileSync(
  'F://Level 2//Mongo+typescript//express//text',
  readText + 'Hello i am fakibaj'
);
console.log(writeText);

