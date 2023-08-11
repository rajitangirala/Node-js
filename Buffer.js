const buffer = new Buffer.from("keerthi");
console.log(buffer.toJSON())
console.log(buffer);
buffer.write('code')
console.log(buffer.toString());