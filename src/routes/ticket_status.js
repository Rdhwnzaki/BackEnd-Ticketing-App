const express = require("express");
const router = express.Router();
const { ticketStatusController } = require("../controller/ticket_status");

router.get("/get-ticket-status", ticketStatusController.getTicketStatus);
router.post("/post-ticket-status", ticketStatusController.postTicketStatus);
router.put("/put-ticket-status/:id", ticketStatusController.putTicketStatus);
router.delete(
  "/delete-ticket-status/:id",
  ticketStatusController.deleteTicketStatus
);
module.exports = router;
