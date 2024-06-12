var http = require("http");
var os = require("os");
var host = os.hostname();
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("server running at  " + host);
  })
  .listen(8083);

console.log("Server running at http://127.0.0.1:8083/");
