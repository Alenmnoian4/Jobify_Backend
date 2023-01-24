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

// Register Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))



mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

  const PostsSchema = new mongoose.Schema({
    role: String,
    details: String,
    location: String,
    onsite: String,
    appURL: String,
    type: String,
    salary: String,
})  

const Post = mongoose.model("Post", PostsSchema)
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


// Create Route
app.post("/posts", async (req, res) => {
  try{
res.json(await Post.create(req.body))
  }catch(error){
      res.status(400).json(error)
  }
})

// Update Route
app.put('/posts/:id', async (req, res) => {
  try {
      res.json(await Post.findByIdAndUpdate(req.params.id, req.body, {new: true}))
  } catch (error) {
      res.status(400).json(error)
  }
})

// Delete Route
app.delete('/posts/:id', async (req, res) => {
  try {
      res.json(await Post.findByIdAndRemove(req.params.id))
  } catch (error) {
      res.status(400).json(error)
  }
})

// Show Route
app.get("/posts/:id", async (req, res) => {
  try {
      res.json(await Post.findById(req.params.id))
  } catch (error) {
      res.status(400).json(error);
  }
})


  // listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));