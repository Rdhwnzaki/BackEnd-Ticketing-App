const express = require("express");
const router = express.Router();
const { ticketController } = require("../controller/ticket")

router.post("/register",ticketController.insert)
router.get("/getstockticket",ticketController.getTicket)
router.delete("/delete/:id",ticketController.delTicket)
router.put("/edit/:id",ticketController.editTicket)

module.exports = router;