const express = require("express");
const bodyParser = require("body-parser");

const Post = require("./models/post");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://spencer:m1Sc9jaZ0DUnwexV@cluster0.bse7vjd.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed.");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-Width, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Controll-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const posts = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  posts.save();
  res.status(201).json({ message: "Post added successfully." });
});

app.use("/api/posts", (req, res, next) => {
  Post.find().then((documents) => {
    res.status(200).json({
      message: "Post fetched successfully",
      posts: posts,
    });
  });
});

module.exports = app;
