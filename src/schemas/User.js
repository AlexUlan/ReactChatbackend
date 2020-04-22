const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const isEmail = require("validator/lib/isEmail");

// при создании обьекта timestamps: true добавить дату создания

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: "Email is required ",
      validate: [isEmail, "Invalid email"],
      unique: true,
    },
    avatar: String,
    fullname: {
      type: String,
      required: "Full Name is required ",
    },
    password: {
      type: String,
      required: "Password is required ",
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    confirm_has: String,
    last_seen: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
/* export default User; */
