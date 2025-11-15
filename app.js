const http = require("http");
const fs = require("fs");
const path = require("path");

const currentPath = path.join(__dirname, "/templates");

const file = fs.readFileSync(`${currentPath}/page.html`);

const server = http.createServer(function (req, res) {
  console.log(req);

  res.setHeader("Content-Type", "text/html");

  res.end(file);
});

server.listen(3000);

console.log("Server is running at port 3000");
