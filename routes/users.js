var express = require("express");
var router = express.Router();
const usersCtrl = require("../controllers/users");

router.get("/users", usersCtrl.show);

router.post("/events/:id/users", usersCtrl.new);

module.exports = router;
