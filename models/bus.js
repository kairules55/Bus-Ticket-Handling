const mongoose = require("mongoose");
const Seat = require("./seat");

const busSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true
  }
);

busSchema.statics.createSeats = async function(bus, totalSeats) {
  try {
    for (let i = 1; i <= totalSeats; i++) {
      const seat = await Seat.create({
        number: i,
        booked: false,
        bus: bus
      });
      bus.seats.push(seat);
    }
    bus.save();
    console.log("Seats Created!");
  } catch (error) {
    console.log("Error while creating seats " + error);
    return;
  }
};

const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus;
