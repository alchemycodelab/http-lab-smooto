const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    console.log(data.toString())

    const request = parseRequest(data.toString());
    console.log(request)

    if(request.method === 'GET' && request.path === '/') {
      const response = createResponse({method: request.method, path: request.path, body: 'hi'});
      socket.end(response);
    }

    // socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
