const express = require("express");
const router = express.Router();
const { usersController } = require("../controller/users");
const protect = require("../middlewares/jwt-auth");
const upuser = require("../middlewares/upuser");

router.post("/register",usersController.insert);
router.post("/verification",usersController.otp);
router.post("/login",usersController.login);
router.put("/:id",protect,upuser,usersController.update)



module.exports = router;

