const Event = require("../models/event");
const Transaction = require("../models/transactions");
const User = require("../models/user");

module.exports = {
  createT: createTransaction,
  newT: newTransaction,
};

async function newTransaction (req, res){
  const event = await Event.findById(req.params.id)
  res.render("events/transactions", {e: event})
  
}


async function createTransaction(req, res) {
  const event = await Event.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  //req.body.userAvatar = req.user.avatar;
  const newTransaction = new Transaction({
    ...req.body,
    event: event._id,
  });
  const savedTransaction = await newTransaction.save();
  if (!event.transactions) {
    event.transactions = [];
  }
  event.transactions.push(savedTransaction._id);
  await event.save();
  res.redirect(`/events/${event._id}`);
}
