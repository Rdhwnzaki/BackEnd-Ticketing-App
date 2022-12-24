const express = require("express");
const router = express.Router();
const UsersRouter = require("./../routes/users");
const TicketRouter = require("./../routes/ticket");
const AirlinesRoute = require("./../routes/airlines");

router
  .use("/auth", UsersRouter)
  .use("/ticket", TicketRouter)
  .use("/airlines", AirlinesRoute);

module.exports = router;
