const express = require("express");
const router = express.Router();

const AdminController = require("../../../controllers/AdminController");
const adminController = new AdminController();

router.post("/create-bus/", adminController.createBus);
router.post("/create-ticket", adminController.createTicket);
router.post("/close-ticket", adminController.closeTicket);
router.post("/open-ticket", adminController.openTicket);

module.exports = router;
