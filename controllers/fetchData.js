const { User } = require("../models");
const fetchData = async (req, res) => {
  try {
    const { email, token } = req.body;
    const existingUser = await User.find({ email: email, token: token });
    if (existingUser.length === 0) {
      return res.json("user not found");
    } else {
      return res.json(existingUser[0].radio);
    }
  } catch (err) {
    res.json(err);
  }
};

module.exports = fetchData;
