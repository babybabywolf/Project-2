const Event = require("../models/event");

module.exports = {
  getAll,
  new: newEvent,
  show,
  create,
  update,
  edit,
  deleteOne,
};

//list all events
async function getAll(req, res) {
  events = await Event.find({});
  res.render("events/index", { events });
}
//render a form to add new event
function newEvent(req, res) {
  res.render("events/new");
}
//show event details
async function show(req, res) {
  const event = await Event.findById(req.params.id)
    .populate("transactions")
    .populate("host")
    .populate("participants");
  
  res.render("events/show", { e: event });
}

async function create(req, res) {
  const userId = req.user._id;
  const event = new Event({
    ...req.body,
    host: userId,
  });
  await event.save();
  res.redirect(`/events/${event._id}`);
}
//update event
async function update(req, res) {
  const event = await Event.findById(req.params.id);
  (event.title = req.body.title),
    (event.description = req.body.description),
    (event.budget = req.body.budget),
    (event.address = req.body.address),
    (event.dateTime = req.body.dateTime),
    (event.status = req.body.status);
  await event.save();
  res.redirect(`/events/${event._id}`);
}
//render a form to edit event

async function edit(req, res) {
  const event = await Event.findById(req.params.id);
  res.render("events/edit", { e: event });
}

//delete a event
async function deleteOne(req, res) {
  await Event.findByIdAndDelete(req.params.id);
  res.redirect("/events");
}



