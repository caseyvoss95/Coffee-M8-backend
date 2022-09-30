const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    orderIds: [{ type: mongoose.ObjectId }],
    isHost: { type: Boolean },
    group: { type: Array }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;