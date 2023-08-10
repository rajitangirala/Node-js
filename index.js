const Fn = require('./add');
const newhero = require('./moduleCatching')
const result = require('./exportsKeyword');
const data = require('./data.json');
const log = console.log
const {add,sub} = result;
const sum = Fn.add(1, 3);
log(sum)
const difference = Fn.subtract(4, 3);
log(difference)

const newHero = new newhero('keerthi')
log(newHero.getname());
newHero.setname('chintu')
log(newHero.getname());
log("hello")
log(sub(5, 2));
log(add(3, 4));
log(data.name)

