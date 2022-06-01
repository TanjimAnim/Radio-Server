const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));
dotenv.config({ path: "./.env" });

app.use("/", routes);

//connection to mongoDB
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    retryWrites: true,
    w: "majority",
  })
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT || 3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
