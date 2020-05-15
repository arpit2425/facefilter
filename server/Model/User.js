const mongoose = require("mongoose");
var bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  entries: {
    type: Number,
    default: 0,
  },
});
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  });
});
userSchema.methods.comparePasswords = function (pass) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass, this.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      } else if (!isMatch) {
        return reject(false);
      }
      resolve(true);
    });
  });
};
// userSchema.pre("save", function (next) {
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash(this.password, salt, function (err, hash) {
//       this.password = hash;
//     });
//   });

//   next();
// });
const User = mongoose.model("User", userSchema);
module.exports = User;
