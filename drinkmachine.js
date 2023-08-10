class DrinkMachine{
    serveDrink(size) {
       
    if (size == "Large") {
        console.log("serving a complimentary drink")
    }
     if (size == "Small") {
        console.log("serving  complimentary ketchups")
    }
    }
}

module.exports = DrinkMachine;