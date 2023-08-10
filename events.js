const EventEmitter = require('node:events');
const emitter = new EventEmitter();

emitter.on('order-pizza', (size,topping) => {
    console.log(`Order Recieved!! Backing a ${size} Pizza with ${topping}..!!`)
})

emitter.on('order-pizza', (size) => {
    if (size == "Large") {
        console.log("serving a complimentary drink")
    }
     if (size == "Small") {
        console.log("serving  complimentary ketchups")
    }
})
emitter.emit('order-pizza', "Large", "Paneer");
emitter.emit('order-pizza',"Small","Sweet-corn");