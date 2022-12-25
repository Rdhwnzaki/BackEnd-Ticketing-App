const express = require('express')
const router = express.Router()
const AirportsRouter = require('./../routes/airports')
const TicketStatusRouter = require("./../routes/ticket_status");

router
.use('/airports', AirportsRouter)
.use("/ticket-status", TicketStatusRouter);

module.exports = router