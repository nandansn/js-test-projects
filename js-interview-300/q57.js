// What are server-sent events
/* Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection 
without resorting to polling. These are a one way communications channel - events flow from server to client only. 
This has been used in Facebook/Twitter updates, stock price updates, news feeds etc.

// server push technology

// Require the `http` module
const http = require('http');

// Set up an HTTP server
const server = http.createServer();

// Set up an SSE endpoint
server.on('request', (req, res) => {
  // Set the response headers for SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Send SSE messages every 5 seconds
  const intervalId = setInterval(() => {
    const data = { message: 'Hello, world!' };
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 5000);

  // Clean up the interval when the client disconnects
  req.on('close', () => {
    clearInterval(intervalId);
  });
});

// Start the HTTP server on port 3000
server.listen(3000);

// client requests

// Set up an EventSource to receive SSEs
const eventSource = new EventSource('http://localhost:3000');

// Add an event listener for SSE messages
eventSource.addEventListener('message', event => {
  const data = JSON.parse(event.data);
  console.log(data.message);
});




*/
