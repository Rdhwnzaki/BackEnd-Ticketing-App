const express = require("express");
const router = express.Router();
const UsersRouter = require("./../routes/users");
const TicketRouter = require("./../routes/ticket");

router.use("/auth", UsersRouter).use("/ticket", TicketRouter);

module.exports = router;
