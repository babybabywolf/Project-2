const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema ({

event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    // required: true
  },
  // User who made the transaction
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
  },
  userName: String,
  userAvatar: String,
  
  // Type of the transaction (e.g., 'Expense' or 'Contribution')
  type: {
    type: String,
    required: true,
    enum: ['Expense', 'Contribution']
  },
  // Amount of money involved in the transaction
  amount: {
    type: Number,
    required: true
  },
  // Description of the transaction
  description: {
    type: String,
    
  },
  // Category of the transaction (e.g., 'Food', 'Transportation')
  category: {
    type: String,
    required: true
  },
  // Date and time when the transaction was made
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true 

})

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;




