const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    orderIds: [{ type: mongoose.ObjectId }],
    host: { type: String },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;