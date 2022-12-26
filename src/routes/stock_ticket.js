const express = require("express");
const router = express.Router();
const { stockTicketController } = require("../controller/stock_ticket");
const protect = require("../middlewares/jwt-auth");

router.post("/register", stockTicketController.insert);
router.get("/getstockticket", protect, stockTicketController.getTicket);
router.get("/getstockticket/:id", stockTicketController.getById);
// router.get("/pagination", ticketController.getTicketsearch);
router.delete("/delete/:id", stockTicketController.delTicket);
router.put("/edit/:id", stockTicketController.editTicket);

module.exports = router;
