const fs = require('node:fs/promises');
console.log('first')
fs.readFile("file.txt", "utf-8")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

    console.log('second')