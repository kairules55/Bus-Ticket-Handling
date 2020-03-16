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
        message: "Ticked Closed!!!"
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
}

module.exports = AdminController;
