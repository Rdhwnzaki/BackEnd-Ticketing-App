const express = require("express");
const router = express.Router();
const { airlinesController } = require("../controller/airlines");
const upuser = require("../middlewares/upuser");

router.put("/update/:id", upuser, airlinesController.updateLogo);
router.get("/get-detail-airlines/:id", airlinesController.getDetailAirlines);
module.exports = router;
