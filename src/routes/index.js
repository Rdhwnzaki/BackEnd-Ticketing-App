const express = require("express");
const router = express.Router();
const UsersRouter = require("./../routes/users");
const ProfileRouter = require("./../routes/profile")
const AirlinesRouter = require("./../routes/airlines")
const ticketRouter = require("./stock_ticket")

router
.use("/auth",UsersRouter)
.use("/profile",UsersRouter)
.use("/airlines",AirlinesRouter)
.use("/stock-ticket",ticketRouter)

module.exports = router;