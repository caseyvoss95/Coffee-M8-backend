// dependencies
const mongoose = require("mongoose");
const StarbucksMenu = require("./starbucksMenu.js").schema;
const Users = require("./user.js").schema;
const CustomizedItems = require("./customizedItem").schema

const Schema = mongoose.Schema;

// order schema
const OrderSchema = new Schema({
    company: { type: String },
    products: [{ type: StarbucksMenu }],
    orderNum: { type: Number },
    scheduledTimeOfOrder: { type: Date },
    groupOrder: [{ type: mongoose.ObjectId }],
    groupList: [{ type: mongoose.ObjectId }]
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;