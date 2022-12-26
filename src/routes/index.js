const express = require("express");
const router = express.Router();
const UsersRouter = require("./../routes/users");
const TicketRouter = require("./../routes/ticket");
const AirlinesRoute = require("./../routes/airlines");
const TicketStatusRouter = require("./../routes/ticket_status");
const AirportsRouter = require("./../routes/airports");

router
  .use("/auth", UsersRouter)
  .use("/ticket", TicketRouter)
  .use("/airlines", AirlinesRoute)
  .use("/ticket-status", TicketStatusRouter)
  .use("/airports", AirportsRouter);

module.exports = router;
