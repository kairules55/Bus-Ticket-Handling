const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true
    },
    booked: {
      type: Boolean,
      required: true
    },
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bus"
    }
  },
  {
    timestamps: true
  }
);

const Seat = mongoose.model("Seat", seatSchema);
module.exports = Seat;
