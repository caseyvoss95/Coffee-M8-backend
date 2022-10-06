const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String },
    orderIds: [{ type: mongoose.ObjectId }],
    isHost: { type: Boolean },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;