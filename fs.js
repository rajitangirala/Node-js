const fs = require('node:fs');
const filecontents = fs.readFileSync('./file.txt','utf-8');
console.log(filecontents);

 fs.readFile('./file.txt','utf-8', (error,data) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(data)
    }
})

fs.writeFileSync('./greet.txt', 'hello world');
fs.writeFile('./greet.txt', ' hi keerthi',{flag:"a"} ,(err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("file is written")
    }
})
console.log('third')