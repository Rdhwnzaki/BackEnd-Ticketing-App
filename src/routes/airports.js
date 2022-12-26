const express = require('express')
const router = express.Router()
const {AirportsController} = require('./../controller/airports')




router.get('/',AirportsController.getAirports)
router.post('/',AirportsController.insert)
router.put('/:id',AirportsController.update)
router.delete('/:id',AirportsController.delete)

module.exports = router;