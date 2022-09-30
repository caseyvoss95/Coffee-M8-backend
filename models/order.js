const mongoose = require("mongoose");
const starbucksDrink = require("./starbucksDrink.js").schema;
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    company: [String],
    products: [starbucksDrink],


});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;