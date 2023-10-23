const http = require("http");

const server = http.createServer((req, res) => {
  console.log("REQ", req.method);
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>GET Method</h1> ");
  } else if (req.method === "POST") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("Post method");
  }
});

server.listen(8008, () => {
  console.log(`listening on 8008 port`);
});
