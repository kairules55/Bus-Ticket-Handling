const express = require("express");
const router = express.Router();

const AdminController = require("../../../controllers/AdminController");
const adminController = new AdminController();

router.post("/create-bus/", adminController.createBus);
router.post("/create-ticket", adminController.createTicket);
router.post("/close-ticket", adminController.closeTicket);
router.post("/open-ticket", adminController.openTicket);
router.post("/all-ticket-status", adminController.allTicketStatus);
router.post("/all-open-ticket", adminController.allOpenTicket);
router.post("/all-close-ticket", adminController.allCloseTicket);
router.post("/user-detail", adminController.userDetail);
router.post("/reset-ticket", adminController.resetTickets);
router.post("/all-non-booked", adminController.notBookedSeats);
router.get("/buses", adminController.buses);

module.exports = router;
