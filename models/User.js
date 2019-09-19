const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  toursBooked: [
    {
      tourId: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      startDate: {
        type: Date
      },
      endDate: {
        type: Date
      }
    }
  ]
});

// Hash user password before saving
// userSchema.pre("save", async function(next) {
//   const user = this;
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(user.password, salt);
//     user.password = hash;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

const User = mongoose.model("user", userSchema);

module.exports = User;
