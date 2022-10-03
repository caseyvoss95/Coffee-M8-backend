const mongoose = require("mongoose");

const StarbucksMenuSchema = new mongoose.Schema({
    productName: { type: String },
    productSize: { type: Array },
    productImage: { type: String },
    milk: { type: Array },
    flavor: { type: Array },
    toppings: { type: Array },
});

const StarbucksMenu = mongoose.model("StarbucksMenu", StarbucksMenuSchema);

module.exports = StarbucksMenu;
