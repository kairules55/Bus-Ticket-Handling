const Bus = require("../models/bus");
const Seat = require("../models/seat");
const Ticket = require("../models/ticket");
class AdminController {
  async createBus(request, response) {
    try {
      const bus = await Bus.create(request.body);
      await bus.createSeats(request.body.totalSeats);

      const createdBus = await Bus.findById(bus._id);

      return response.json(200, {
        data: {
          bus: createdBus
        },
        message: "Bus Created!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async createTicket(request, response) {
    try {
      const bus = await Seat.findById(request.body.bus);
      const seat = await Seat.findById(request.body.seat);

      if (seat.booked) {
        return response.json(400, {
          message: "Seat Already Booked"
        });
      } else {
        const ticket = await Ticket.create({
          status: true,
          name: request.body.name,
          bus: request.body.bus,
          seat: request.body.seat
        });
        await ticket.populate("seat");
        seat.booked = true;
        await seat.save();
        await ticket.save();
        return response.json(200, {
          data: {
            ticket: ticket
          },
          message: "Ticket Created"
        });
      }
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async closeTicket(request, response) {
    try {
      let ticket = await Ticket.findById(request.body.ticket).populate(
        "seat"
      );
      const seat = await Seat.findById(ticket.seat);

      ticket.status = false;
      seat.booked = false;

      await ticket.save();
      await seat.save();

      ticket = await Ticket.findById(request.body.ticket).populate("seat");
      return response.json(200, {
        data: {
          ticket: ticket
        },
        message: "Ticked Closed!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async openTicket(request, response) {
    try {
      let ticket = await Ticket.findById(request.body.ticket);
      const seat = await Seat.findById(ticket.seat);
      if (seat.booked) {
        return response.json(400, {
          message: "Seat already booked cannot open ticket"
        });
      } else {
        ticket.status = true;
        seat.booked = true;
        await ticket.save();
        await seat.save();
        ticket = await Ticket.findById(request.body.ticket).populate("seat");
        return response.json(200, {
          data: {
            ticket: ticket
          },
          message: "Ticket Opened!"
        });
      }
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async allTicketStatus(request, response) {
    try {
      const tickets = await Ticket.find({
        bus: request.body.bus
      }).populate("seat");
      return response.json(200, {
        data: {
          tickets: tickets
        },
        message: "All Ticket Details!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async allOpenTicket(request, response) {
    try {
      const tickets = await Ticket.find({
        bus: request.body.bus,
        status: true
      }).populate("seat");
      return response.json(200, {
        data: {
          tickets: tickets
        },
        message: "All Open Ticket!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async allCloseTicket(request, response) {
    try {
      const tickets = await Ticket.find({
        bus: request.body.bus,
        status: false
      }).populate("seat");
      return response.json(200, {
        data: {
          tickets: tickets
        },
        message: "All Close Ticket!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async userDetail(request, response) {
    try {
      const ticket = await Ticket.findById(request.body.ticket);
      return response.json(200, {
        data: {
          name: ticket.name
        },
        message: "User Details"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async resetTickets(request, response) {
    try {
      await Seat.updateMany(
        {
          bus: request.body.bus
        },
        {
          booked: false
        }
      );

      await Ticket.updateMany(
        {
          bus: request.body.bus
        },
        {
          status: false
        }
      );

      const bus = await Bus.findById(request.body.bus);

      response.json(200, {
        data: {
          bus: bus
        },
        message: "Reset All Bus Ticket!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async notBookedSeats(request, response) {
    try {
      const seats = await Seat.find({ bus: request.body.bus });
      return response
        .json(200, {
          data: {
            seats: seats
          },
          message: "All Non Booked Seats!"
        })
        .populate("seat");
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }

  async buses(request, response) {
    try {
      const buses = await Bus.find({});
      return response.json(200, {
        data: {
          buses: buses
        },
        message: "All Buses!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }
}

module.exports = AdminController;
