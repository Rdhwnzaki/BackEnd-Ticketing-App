const express = require("express");
const router = express.Router();
const { stockTicketController } = require("../controller/stock_ticket");
const protect = require("../middlewares/jwt-auth");

router.post("/register", protect, stockTicketController.insert);
router.get("/getstockticket", protect, stockTicketController.getTicket);
router.get("/getstockticket/:id", protect, stockTicketController.getById);
router.delete("/delete/:id", protect, stockTicketController.delTicket);
router.put("/edit/:id", protect, stockTicketController.editTicket);
router.put("/edit-stock", protect, stockTicketController.editTicketStock);

module.exports = router;
