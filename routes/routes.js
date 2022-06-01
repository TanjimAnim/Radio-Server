const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

//import controllers
const userRegistration = require("../controllers/registration");
const login = require("../controllers/login");
const fetchData = require("../controllers/fetchData");
const deleteData = require("../controllers/deleteData");
const addData = require("../controllers/addData");
//defining routes

router.get("/", auth, (req, res) => {
  const { email } = req.body;
  if (email === undefined || email === "undefined" || email === "") {
    res.json("user not logged in");
  } else {
    res.json(`welcome user:${email}`);
  }
});

//post api for user registration
router.post("/v1/registration", userRegistration);

//post api for user login
router.post("/v1/login", login);

// get api for users radio list
router.get("/v1/fetch", auth, fetchData);

//delete api for users
router.post("/v1/delete", auth, deleteData);

//add radio station api for users
router.post("/v1/add-station", auth, addData);

module.exports = router;
