const mongoose = require("mongoose");

const StarbucksDrinkSchema = new mongoose.Schema({
    productName: { type: String },
    productType: { type: Array },
    productSize: { type: Array },
    productImage: { type: String },
    milk: { type: Array },
    flavor: { type: Array },
    toppings: { type: Array },
});

const StarbucksDrinks = mongoose.model("StarbucksDrinks", StarbucksDrinkSchema);

module.exports = StarbucksDrinks;
