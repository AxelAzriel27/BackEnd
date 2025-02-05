const http = require("http");
const moment = require("moment");
const users = require("./users");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  const url = req.url;
  if (url === "/") {
    res.write("This is the home page");
  } else if (url === "/about") {
    res.statusCode = 200;
    res.write(
      JSON.stringify({
        status: "success",
        message: "respone success",
        description: "Exercise #02",
        date: moment().format(),
      })
    );
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/json");
    res.write(JSON.stringify(users));
  }

  res.end();
});

const hostname = "127.0.0.1";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
