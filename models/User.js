const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    event: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    event: {
        type: String,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;