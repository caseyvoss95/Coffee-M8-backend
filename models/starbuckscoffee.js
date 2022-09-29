const mongoose = require ("moongoose");
const StarbucksDrinkSchema = newmongooseSchema ({
    productType: {type: Array},
    productSize: {type: Array},
    milk: {type: Array},
    flavor: {type: Array},
    toppings: {type: Array},
});

const StarbucksDrinks = mongoose.model("Drinks", StarbucksDrinkSchema);

module.exports = StarbucksDrinks;