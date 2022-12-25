const express = require('express')
const router = express.Router()
const AirportsRouter = require('./../routes/airports')
const TicketStatusRouter = require('./../routes/ticket.status')


router
.use('/airports', AirportsRouter)
.use('/ticketStatus', TicketStatusRouter)

module.exports = router