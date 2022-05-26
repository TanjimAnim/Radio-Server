const { User } = require("../models");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registration = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    const existingEmail = await User.find({ email: email.toLowerCase() });
    if (existingEmail.length === 0) {
      const userToken = jwt.sign({ email: email }, process.env.SECRET, {
        expiresIn: "90d",
      });

      let hashedPassword = await bcrypt.hash(password, 8);
      const user = await User.create({
        email,
        password: hashedPassword,
        token: userToken,
      });

      await user.save(function (err, result) {
        if (err) {
          return res.json("some error occured", err);
        } else {
          return res.status(200).json({ accesstoken: `${user.token}` });
        }
      });
    } else {
      return res.json("email has already been registered");
    }
  } catch (err) {
    res.json(err);
  }
};

module.exports = registration;
