const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  booked: {
    type: Boolean,
    required: false
  },
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seat"
  }
});

const Seat = mongoose.model("Seat", seatSchema);
module.exports = Seat;
