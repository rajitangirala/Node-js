function sum(a,b) {
    console.log (a + b);
}

function result(sumfn) {
    let a = 10; b = 20;
    sumfn(a, b);
 
}

result(sum);

//result accepts sum function as an argument, named sumfn and provides a result returned
//result is a hof----->any function which accepts another fn or returns a function is a hoc
//function passed as argument to another fn is a callback
//sum is a callback fn ---> synchronous callback
//async callback---> any api req is async callback or event handlers

function callbackFn(name) {
    console.log(name)
}
function higherOrderFunction(callback) {
    const name = "keerthi";
    callback(name)
}

higherOrderFunction(callbackFn);

