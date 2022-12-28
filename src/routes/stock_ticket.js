const express = require("express");
const router = express.Router();
const { ticketController } = require("../controller/stock_ticket");
const protect = require("../middlewares/jwt-auth");
const { putTicketbooked } = require("../model/stock_ticket");

router.post("/register", ticketController.insert);
router.get("/getstockticket", protect, ticketController.getTicket);
// router.get("/pagination", ticketController.getTicketsearch);
router.delete("/delete/:id", ticketController.delTicket);
router.put("/edit/:id", ticketController.editTicket);
router.put("/update-stock/:id",ticketController.updateStockticketbooked)

module.exports = router;
