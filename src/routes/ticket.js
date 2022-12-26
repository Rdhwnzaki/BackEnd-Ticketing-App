const express = require("express");
const router = express.Router();
const { ticketController } = require("../controller/ticket");
const protect = require("../middlewares/jwt-auth");

router.post("/register", ticketController.insert);
router.get("/getstockticket", protect, ticketController.getTicket);
// router.get("/pagination", ticketController.getTicketsearch);
router.delete("/delete/:id", ticketController.delTicket);
router.put("/edit/:id", ticketController.editTicket);

module.exports = router;
