const PizzaShop = require('./PizzaShop');
const DrinkMachine = require('./drinkmachine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();
pizzaShop.on('order', (size,topping) => {
    console.log(`Order Recieved!! Backing a ${size} Pizza with ${topping}..!!`)
    drinkMachine.serveDrink(size);
})

pizzaShop.Order("Large", "Paneer");
pizzaShop.displayOrderNumber();