const mongoose = require("mongoose");

const StarbucksDrinkSchema = new mongoose.Schema({
    productType: { type: Array },
    productSize: { type: Array },
    milk: { type: Array },
    flavor: { type: Array },
    toppings: { type: Array },
});

const StarbucksDrinks = mongoose.model("StarbucksDrinks", StarbucksDrinkSchema);

module.exports = StarbucksDrinks;
