const { User } = require("../models");

const updateData = async (req, res) => {
  const { email } = req.body;
  const existingUser = User.find({ email });
  if (existingUser) {
    User.insertOne();
  }
};

module.exports = updateData;
