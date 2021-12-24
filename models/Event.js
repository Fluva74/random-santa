const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    event: {
        type: String,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;