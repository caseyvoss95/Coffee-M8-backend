const mongoose = require("mongoose");

const CustomizedItemSchema = new mongoose.Schema({
    userId: { type: String },
    orderId: { type: mongoose.ObjectId },
    productName: { type: String },
    productSize: { type: String },
    productImage: { type: String },
    milk: { type: String },
    flavor: { type: Array },
    toppings: { type: Array },
});

const CustomizedItems = mongoose.model("CustomizedItems", CustomizedItemSchema);

module.exports = CustomizedItems;
