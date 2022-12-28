const express = require("express");
const router = express.Router();
const { ticketController } = require("../controller/ticket");
const protect = require("../middlewares/jwt-auth");

router.get("/get-ticket", protect, ticketController.getTicket);
router.get("/get-all-ticket", protect, ticketController.getAllTicket);
router.get("/get-ticket-join", protect, ticketController.getTicketJoin);
router.post("/post-ticket", protect, ticketController.postTicket);
router.put("/put-ticket/:id", protect, ticketController.updateTicket);
router.delete("/delete-ticket/:id", protect, ticketController.deleteTicket);
module.exports = router;
