const express = require("express");
const router = express.Router();
const { airlinesController } = require("../controller/airlines");
const upuser = require("../middlewares/upuser");

router.put("/photo/:id", upuser, airlinesController.updateLogo);
module.exports = router;
