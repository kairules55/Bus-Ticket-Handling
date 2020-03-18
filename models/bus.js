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

busSchema.methods.createSeats = async function(totalSeats) {
  let self = this;
  try {
    for (let i = 1; i <= totalSeats; i++) {
      const seat = await Seat.create({
        number: i,
        booked: false,
        bus: self._id
      });
      await self.seats.push(seat);
    }
    await self.save();
    console.log("Seats Created!");
  } catch (error) {
    console.log("Error while creating seats " + error);
    return;
  }
};

const Bus = mongoose.model("Bus", busSchema);
module.exports = Bus;
