const express = require("express");
const router = express.Router();
const { ticketController } = require("../controller/ticket");

router.get("/get-ticket", ticketController.getTicket);
router.get("/get-ticket-join", ticketController.getTicketJoin);
router.post("/post-ticket", ticketController.postTicket);
router.put("/put-ticket/:id", ticketController.updateTicket);
router.delete("/delete-ticket/:id", ticketController.deleteTicket);
module.exports = router;
