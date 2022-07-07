const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    throw new Error("A token is required for authentication");
  }

  const verifiedUser = jwt.verify(token, config.SECRET, (err, decoded) => {
    if (err) {
      throw new Error("Invalid token");
    } else {
      return decoded;
    }
  });
  req.body.email = verifiedUser.email;
  next();
};

module.exports = verifyToken;
