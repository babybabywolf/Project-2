const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      
    },
    status: {
      type: String,
      required: true,
      enum: ["Planning", "Active", "Completed", "Cancelled"], // Example statuses
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
    budget: {
      type: Number,
      required: true,
    },
    dateTime: {
      type: Date,
      
    },
    // Added address for the event
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

//define the model: 
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
