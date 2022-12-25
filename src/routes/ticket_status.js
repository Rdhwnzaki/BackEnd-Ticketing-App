const express = require("express");
const router = express.Router();
const { ticketStatusController } = require("../controller/ticket_status");

router.get("/", ticketStatusController.getTicketStatus);
router.post("/", ticketStatusController.insert);
router.put("/put-ticket-status/:id", ticketStatusController.update);
router.delete("/delete-ticket-status/:id",ticketStatusController.delete);
module.exports = router;