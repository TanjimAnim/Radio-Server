const { User } = require("../models");

const addData = async (req, res, next) => {
  try {
    const { email, token, radio } = req.body;
    if (radio === undefined || radio === "") {
      throw new Error("please enter a radio station");
    }
    const existingUser = await User.find({ email: email, token: token });
    if (existingUser.length === 0) {
      throw new Error("user not found");
    }

    existingUser[0].radio.push(radio.toLowerCase());
    await existingUser[0].save((err, result) => {
      if (err) {
        throw new Error("error occured:", err);
      } else {
        res.json("document has been succesfully added");
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addData;
