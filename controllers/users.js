const Event = require("../models/event");
const Transaction = require("../models/transactions");
const User = require("../models/user");

module.exports = {
  show,
  new: addNewParticipant,
};

async function show(req, res) {
  const userId = req.user._id;
  // const user = await User.findById(req.user._id).populate("events");
const hostedEvents = await Event.find({host:userId});
const joinedEvents = await Event.find({participants: userId});
const transactions = await Transaction.find({user: userId});
  res.render("users/index", {hostedEvents, joinedEvents,transactions });
}

async function addNewParticipant(req, res) {
  const event = await Event.findById(req.params.id);
  const userId = req.user._id;
  const user = await User.findById(userId);
  user.events.push(event._id);
  await user.save();
  event.participants.push(userId);
  await event.save();

  res.redirect(`/events/${event._id}`);
}
