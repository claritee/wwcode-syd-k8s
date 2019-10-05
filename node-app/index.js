const os = require('os');
const http = require('http');

const requestHandler = (req, res) => {
    console.log('Request incoming from ' + req.connection.remoteAddress);
    res.writeHead(200);
    res.end('Hello! ');
};

const server = http.createServer(requestHandler)

server.listen(3000);