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

router.get("/", (req, res) => {
  res.json({
    message: "welcome user",
  });
});

//post api for user registration
router.post("/registration", userRegistration);

//post api for user login
router.post("/login", login);

// get api for users radio list
router.get("/fetch", auth, fetchData);

//delete api for users
router.post("/delete", auth, deleteData);

//add radio station api for users
router.post("/add-station", auth, addData);

module.exports = router;
