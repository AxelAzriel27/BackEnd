const http = require("http");
const moment = require("moment");
const express = require("express");
const morgan = require("morgan");
const errorhandler = require("errorhandler");
const users = require("./users");
const app = express();

app.use(morgan("tiny"));

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const user = users.find((u) => u.name.toLowerCase() === name);

  if (!user) {
    return res.status(404).json({ message: "Data user tidak ditemukan" });
  }
  res.json(user);
});

app.use((req, res, next) => {
  res
    .status(404)
    .json({ status: "error", message: "resource tidak ditemukan" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ status: "error", message: "terjadi kesalahan pada server" });
});

const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}`)
);
