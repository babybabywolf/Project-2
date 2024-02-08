var express = require("express");
var router = express.Router();
const transactionsCtrl = require("../controllers/transactions");



router.get("/events/:id/newTransaction", transactionsCtrl.newT);
router.post("/events/:id/transactions", transactionsCtrl.createT);

module.exports = router;
