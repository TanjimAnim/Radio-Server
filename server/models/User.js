var mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

var UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    password: {
      type: String,
    },
    token: {
      type: String,
    },
    radio: {
      type: [String],
    },
  },
  { autoCreate: true, timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
