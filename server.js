// Basic HTTP Server
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});
server.listen(3000);

// Express Server
const express = require('express');
const app = express();
app.use(express.json());

// Middleware Examples
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route Parameters
app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id });
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// WebSocket Server
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', ws => {
  ws.on('message', message => {
    ws.send(`Received: ${message}`);
  });
});

// Cluster for Multi-Core
const cluster = require('cluster');
if (cluster.isMaster) {
  const cpus = require('os').cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  // Worker process
  app.listen(3000);
}

// Static File Serving
app.use(express.static('public'));

// Session Handling
const session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// Rate Limiting
const rateLimit = require('express-rate-limit');
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));

// CORS Configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server shutdown complete');
    process.exit(0);
  });
});
