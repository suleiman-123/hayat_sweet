const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const port = 4173;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

http
  .createServer((request, response) => {
    const url = new URL(request.url, `http://127.0.0.1:${port}`);
    const requestedPath = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname);
    const filePath = path.join(root, requestedPath);

    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      });
      response.end(data);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Hayat Sweet preview running at http://127.0.0.1:${port}`);
  });
