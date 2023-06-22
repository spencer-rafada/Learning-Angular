const express = require("express");
const bodyParser = require("body-parser");

const app = express();

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
  const posts = req.body;
  console.log(posts);
  res.status(201).json({ message: "Post added successfully." });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fasdasd",
      title: "First Serverside host",
      content: "This is coming from server",
    },
    {
      id: "sadasd",
      title: "Second Serverside host",
      content: "This is coming from server",
    },
  ];
  res.status(200).json({
    message: "Post fetched successfully",
    posts: posts,
  });
});

module.exports = app;
