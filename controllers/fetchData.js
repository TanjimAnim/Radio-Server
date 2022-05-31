const { User } = require("../models");
const fetchData = async (req, res, next) => {
  try {
    const { email, token } = req.body;
    const existingUser = await User.find({ email: email, token: token });
    if (existingUser.length === 0) {
      throw new Error("user not found");
    } else {
      return res.json(existingUser[0].radio);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = fetchData;
