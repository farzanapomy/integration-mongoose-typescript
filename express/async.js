const fs = require('fs');

fs.readFile(
  'F://Level 2//Mongo+typescript//express//text.txt',
  'utf-8',
  (err, data) => {
    if (err) {
      throw Error('Error reading text file');
    }
    console.log(data);

    // write the text file

    fs.writeFile(
      'F://Level 2//Mongo+typescript//express//text2.txt',
      data,
      'utf-8',
      (err, data) => {
        if (err) {
          throw Error;
        }
      }
    );
  }
);
