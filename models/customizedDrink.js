const mongoose = require("mongoose");

const CustomizedDrinkSchema = new mongoose.Schema({
    userId: { type: mongoose.ObjectId },
    productName: { type: String },
    productType: { type: Array },
    productSize: { type: Array },
    productImage: { type: String },
    milk: { type: Array },
    flavor: { type: Array },
    toppings: { type: Array },
});

const CustomizedDrinks = mongoose.model("CustomizedDrinks", CustomizedDrinkSchema);

module.exports = CustomizedDrinks;
