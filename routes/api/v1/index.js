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

module.exports = router;
