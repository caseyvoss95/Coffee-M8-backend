const mongoose = require("mongoose");
const starbucksDrink = require("./starbucksDrink.js").schema;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    company: [String],
    products: [starbucksDrink],


});