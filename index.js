const express = require("express");
const moment = require("moment");
const users = require("./users");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/about", (req, res) => {
  res.json({
    status: "success",
    message: "response success",
    description: "Exercise #02",
    date: moment().format(),
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
