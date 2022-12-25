const express = require("express");
const router = express.Router();
const { airlinesController } = require("../controller/airlines");
const upuser = require("../middlewares/upuser");

router.post("/register", upuser, airlinesController.insert);
router.delete("/delete/:id", airlinesController.delete);
router.get("/search/:name", airlinesController.getSearch);
router.put("/edit/:id", upuser, airlinesController.update);
router.put("/photo/:id", upuser, airlinesController.updateLogo);
router.get("/all-airlines", airlinesController.getAirlines);
router.put("/update/:id", upuser, airlinesController.updateLogo);

module.exports = router;
