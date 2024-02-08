var express = require("express");
var router = express.Router();
const eventsCtrl = require("../controllers/events");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", eventsCtrl.getAll);

router.get("/new", ensureLoggedIn,eventsCtrl.new);

router.get("/:id", eventsCtrl.show);

router.post("/", ensureLoggedIn, eventsCtrl.create);

router.get("/:id/edit", eventsCtrl.edit);

router.post("/:id", eventsCtrl.update);

router.delete("/:id", eventsCtrl.deleteOne);

module.exports = router;
