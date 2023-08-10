const EventEmitter = require("node:events");
class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    displayOrderNumber() {
        console.log(this.orderNumber)
    }

    Order(size, topping) {
          this.orderNumber++;
       this.emit('order', size, topping)
        
       
    }
}

module.exports = PizzaShop;

