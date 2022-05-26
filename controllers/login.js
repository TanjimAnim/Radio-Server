const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ email }, process.env.SECRET, {
        expiresIn: "90d",
      });

      user.token = token;

      return res.status(200).json({ accesstoken: `${user.token}` });
    } else {
      return res.status(402).send("Invalid Credentials");
    }
  } catch (err) {
    return res.json(err);
  }
};

module.exports = login;
