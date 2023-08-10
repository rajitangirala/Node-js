const path = require('node:path');
console.log(__dirname, __filename);
const log = console.log;
log(path.extname(__dirname));
log(path.extname(__filename));
log(path.isAbsolute(__filename));
log(path.isAbsolute('./data.json'));
log(path.resolve("/folder1", "folder2", "../index.js"));
log(path.join("folder1", "folder2", "../index.js"));