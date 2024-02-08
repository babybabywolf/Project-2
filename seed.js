const mongoose = require('mongoose');
const Event = require('./models/event');

require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

const seedEvents = [
    {
      "title": "Annual Charity Run",
      "description": "Join us for our annual charity run event supporting local charities. Participants can choose between 5k, 10k, and half-marathon distances.",
      "status": "Planning",
      "budget": 2000,
      "dateTime": "2024-05-15T09:00:00Z",
      "address": "Central Park, New York, NY"
    },
    {
      "title": "Tech Conference 2024",
      "description": "A two-day conference showcasing the latest in technology, innovation, and startup culture. Featuring keynote speakers, workshops, and networking opportunities.",
      "status": "Active",
      "budget": 15000,
      "dateTime": "2024-07-20T10:00:00Z",
      "address": "Convention Center, San Francisco, CA"
    },
    {
      "title": "Local Food Festival",
      "description": "Explore the best of local cuisine at our annual food festival. Enjoy dishes from top local restaurants, live music, and cooking demonstrations.",
      "status": "Completed",
      "budget": 5000,
      "dateTime": "2023-09-10T11:00:00Z",
      "address": "Downtown Plaza, Austin, TX"
    },
    {
      "title": "Community Clean-Up Day",
      "description": "Help us keep our community clean and green. Volunteers needed for beach cleaning, tree planting, and more. Refreshments and community service hours provided.",
      "status": "Cancelled",
      "budget": 500,
      "dateTime": "2024-04-22T08:00:00Z",
      "address": "Ocean View Beach, Miami, FL"
    }
  ]
  



const seedDB = async ()=>{
    await Event.deleteMany({});
    await Event.insertMany(seedEvents);
}

seedDB().then(()=>{
    console.log("Data seeded successfully");
    mongoose.connection.close();
})

