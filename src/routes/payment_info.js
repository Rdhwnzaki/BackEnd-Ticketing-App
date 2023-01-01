const express = require("express");
const router = express.Router();
const { paymentController } = require("../controller/payment_info");
const protect = require("../middlewares/jwt-auth");

router.post("/create", protect, paymentController.insert);

module.exports = router;
