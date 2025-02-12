const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/contoh", (req, res) => {
  res.send("request dengan method GET");
});
app.get("/about", (req, res) =>
  res.status(200).json({
    status: "success",
    message: "About page",
    data: [],
  })
);

app.post("/contoh", (req, res) => {
  res.send("request dengan method POST");
});

app.put("/contoh", (req, res) => {
  res.send("request dengan method PUT");
});

app.delete("/contoh", (req, res) => {
  res.send("request dengan method DELETE");
});

app.patch("/contoh", (req, res) => {
  res.send("request dengan method PATCH");
});

app.all("/universal", (req, res) => res.send(`Request method ${req.method}`));
// Routing dinamis
// 1. Menggunakan params
app.get("/post/:id", (req, res) => res.send(`Artikel ke - ${req.params.id}`));
// 2. Menggunakan Query String
app.get("/post", (req, res) => {
  const { page, sort } = req.query;
  res.send(`Query yang didapatkan adalah : ${page}, sort : ${sort}`);
});

const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
