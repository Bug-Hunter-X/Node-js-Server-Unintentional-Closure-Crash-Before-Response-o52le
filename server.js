const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//Uncommon bug:  If the server is unintentionally closed or crashes before a response is sent, the client may experience a timeout or connection error.  This is particularly problematic for long-running requests where the client is waiting for a significant amount of data.