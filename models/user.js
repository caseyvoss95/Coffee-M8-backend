const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    group: { type: Array },
    order: { type: Array },
    isHost: { type: Boolean },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;