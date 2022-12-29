const express = require('express')
const router = express.Router()
const UsersRouter = require("./../routes/users");

const TicketRouter = require("./../routes/ticket");
const AirportsRouter = require('./../routes/airports')
const AirlinesRoute = require('./../routes/airlines');
const TicketStatusRouter = require('./../routes/ticket_status');
const StockTicketRouter = require("./stock_ticket");

router
.use("/auth", UsersRouter)
.use('/airports', AirportsRouter)
.use("/ticket", TicketRouter)
.use("/airlines", AirlinesRoute)
.use('/ticket-status', TicketStatusRouter)
.use("/stock-ticket", StockTicketRouter);


module.exports = router