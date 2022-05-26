const { User } = require("../models");

const addData = async (req, res) => {
  try {
    const { email, token, radio } = req.body;
    if (radio === undefined || radio === "") {
      return res.json("please enter a radio station");
    }
    const existingUser = await User.find({ email: email, token: token });
    if (existingUser.length === 0) {
      return res.json("user not found");
    }

    existingUser[0].radio.push(radio.toLowerCase());
    await existingUser[0].save((err, result) => {
      if (err) {
        res.json("error occured:", err);
      } else {
        res.json("document has been succesfully added");
      }
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = addData;
