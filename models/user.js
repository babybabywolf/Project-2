const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
      name: String,
      googleId: {
        type: String,
        required: true,
      },
      email: String,
      avatar: String,
      events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      }],
      transactions: [{
        
          type: mongoose.Schema.Types.ObjectId,
          ref: "Transaction",
      
      }

      ]
    },
    {
      timestamps: true,
    }
  );
  




const User = mongoose.model("User", userSchema);
module.exports = User;
