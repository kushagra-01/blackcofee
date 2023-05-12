require("dotenv").config();
const express = require("express");
const connect = require("./config/db");



const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const ProfileController = require("./controllers/api")

//connecting ans starting server

app.use("",ProfileController);
app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening on port 5000.....");
  } catch (err) {
    console.log(err);
  }
});
