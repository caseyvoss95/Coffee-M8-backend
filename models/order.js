// dependencies
const mongoose = require("mongoose");
const StarbucksDrinks = require("./starbucksDrink.js").schema;
const Users = require("./user.js").schema;

const Schema = mongoose.Schema;

// order schema
const OrderSchema = new Schema({
    company: { type: String },
    products: [{ type: StarbucksDrinks }],
    orderNum: { type: Number },
    scheduledTimeOfOrder: { type: Date },
    groupOrder: { type: Array },
    groupList: [{ type: Users }]
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;