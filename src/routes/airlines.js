const express = require("express");
const router = express.Router();
const { airlinesController } = require("../controller/airlines")
const upuser = require("../middlewares/upuser");

router.post("/register",upuser,airlinesController.insert)

module.exports = router;