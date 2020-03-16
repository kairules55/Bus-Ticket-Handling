const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bus"
    },
    seat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seat"
    }
  },
  {
    timestamps: true
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
