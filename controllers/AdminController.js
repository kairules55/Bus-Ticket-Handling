const Bus = require("../models/bus");
const Seat = require("../models/seat");
const Ticket = require("../models/ticket");
class AdminController {
  async createBus(request, response) {
    try {
      const bus = await Bus.create(request.body);
      Bus.createSeats(bus, request.body.totalSeats);
      return response.json(200, {
        message: "Bus Created!"
      });
    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error"
      });
    }
  }

  async createTicket(request, response) {
    try {
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
        seat.booked = true;
        seat.save();
        return response.json(200, {
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
      const ticket = await Ticket.findById(request.body.ticket);
      const seat = await Seat.findById(ticket.seat);

      ticket.status = false;
      seat.booked = false;

      ticket.save();
      seat.save();

      return response.json(200, {
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
      const ticket = await Ticket.findById(request.body.ticket);
      const seat = await Seat.findById(ticket.seat);
      if (seat.booked) {
        return response.json(400, {
          message: "Seat already booked cannot open ticket"
        });
      } else {
        ticket.status = true;
        seat.booked = true;
        ticket.save();
        seat.save();
        return response.json(200, {
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
      const tickets = await Ticket.find({ bus: request.body.bus });
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
      });
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
      });
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

      response.json(200, {
        message: "Reset All Bus Ticket!"
      });

    } catch (error) {
      return response.json(500, {
        message: "Internal Server Error" + error
      });
    }
  }
}

module.exports = AdminController;
