const express = require('express')
const router = express.Router()
const AirportsRouter = require('./../routes/airports')
const UsersRouter = require("./../routes/users");
const AirlinesRoute = require('./../routes/airlines');
const TicketStatusRouter = require('./../routes/ticket_status');

router
.use('/airports', AirportsRouter)
.use("/auth", UsersRouter)
.use("/airlines", AirlinesRoute)
.use('/ticket-status', TicketStatusRouter);

module.exports = router