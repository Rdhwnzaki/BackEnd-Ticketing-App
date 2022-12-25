const express = require("express");
const router = express.Router();
const { usersController } = require("../controller/users");
const protect = require("../middlewares/jwt-auth");
const upuser = require("../middlewares/upuser");

router.post("/register", usersController.insert);
router.get("/verification", usersController.otp);
router.post("/login", usersController.login);
router.put("/update", protect, upuser, usersController.update);
router.put("/edit-photo", protect, upuser, usersController.editPhoto);
router.get("/user", protect, upuser, usersController.getUser);

module.exports = router;
