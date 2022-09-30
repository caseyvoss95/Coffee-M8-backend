// dependencies
const mongoose = require("mongoose");
const StarbucksDrinks = require("./starbucksDrink.js").schema; 
const Schema = mongoose.Schema;

// order schema
const orderSchema = new Schema({
    company: [String],
    products: [StarbucksDrinks],
    orderNum: {type: Number},
    


});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;