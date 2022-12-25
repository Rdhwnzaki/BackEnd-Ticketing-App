const express = require("express");
const router = express.Router();
const { ticketStatusController } = require("../controller/ticket_status");

router.get("/", ticketStatusController.getTicketStatus);
router.post("/", ticketStatusController.insert);
router.put("//:id", ticketStatusController.update);
router.delete("/:id",ticketStatusController.delete);
module.exports = router;