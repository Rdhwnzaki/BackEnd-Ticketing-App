const express = require("express");
const router = express.Router();
const UsersRouter = require("./../routes/users");

const TicketRouter = require("./../routes/ticket");
const AirlinesRoute = require("./../routes/airlines");
const TicketStatusRouter = require("./../routes/ticket_status");
const AirportsRouter = require("./../routes/airports");
const StockTicketRouter = require("./stock_ticket");
const PaymentRouter = require("./payment_info");

router
  .use("/auth", UsersRouter)
  .use("/ticket", TicketRouter)
  .use("/airlines", AirlinesRoute)
  .use("/ticket-status", TicketStatusRouter)
  .use("/airports", AirportsRouter)
  .use("/stock-ticket", StockTicketRouter)
  .use("/payment-info", PaymentRouter);

module.exports = router;
