const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  totalSeats: {
    type: Number,
    required: true
  },
  seats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seat"
    }
  ]
});

const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus;
