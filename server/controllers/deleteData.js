const { User } = require("../models");

const deleteData = async (req, res, next) => {
  try {
    const { email, token, radio } = req.body;

    if (radio === undefined || radio === "") {
      throw new Error("please enter a radio station");
    }
    const existingUser = await User.find({ email: email, token: token });

    if (existingUser.length === 0) {
      throw new Error("user not found");
    }
    const stationToDelete = existingUser[0].radio.findIndex(
      (element) => element === radio.toLowerCase()
    );
    if (stationToDelete === -1) {
      return res.json("you don't have this radio station added");
    }
    existingUser[0].radio.splice(stationToDelete, 1);
    await existingUser[0].save((err, result) => {
      if (err) {
        throw new Error("error occured:", err);
      } else {
        return res.json("station has been succesfully removed");
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteData;
