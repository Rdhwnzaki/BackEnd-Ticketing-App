const express = require("express");
const router = express.Router();
const { usersController } = require("../controller/users")

router.post("/register",usersController.insert);
router.get("/verification",usersController.otp);
router.post("/login",usersController.login);


module.exports = router;

