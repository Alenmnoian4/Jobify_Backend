// dependencies
require("dotenv").config();
const { PORT = 3000, DATABASE_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

// mongo
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));


//--------------------------------------
// routes
//--------------------------------------

app.get("/", (req, res) => {
    res.send("hello world");
  });
  

  app.get("/posts", async (req, res) => {
    try {
      res.json(await Post.find({}));
    } catch (error) {
      res.status(400).json(error);
    }
  });

  app.get("/posts/:id", async (req, res) => {
    try {
      res.json(await Post.findById(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  });









  // listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));