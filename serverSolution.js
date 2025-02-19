const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  try {
    //Simulate long running task
    //setTimeout(() => {
    //  res.writeHead(200, { 'Content-Type': 'text/plain' });
    //  res.end('Hello World!');
    //}, 10000);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;

// Handle server shutdown gracefully
let isShuttingDown = false;
process.on('SIGINT', () => {
  if (!isShuttingDown) {
    isShuttingDown = true;
    server.close(() => {
      console.log('Server closed gracefully');
      process.exit(0);
    });
  }
});

process.on('SIGTERM', () => {
  if (!isShuttingDown) {
    isShuttingDown = true;
    server.close(() => {
      console.log('Server closed gracefully');
      process.exit(0);
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});