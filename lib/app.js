const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET') {
      const responseObj = {contentType: 'text/html', status: '200 OK'};

      switch(request.path) {
        case '/':
          responseObj.body = 'hi';
          break;
        case '/red':
          responseObj.body = '<h1>red</h1>';
          break;
        case '/blue':
          responseObj.body = '<h1>blue</h1>';
          break;
        case '/green':
          responseObj.body = '<h1>green</h1>';
          break;
        }

        socket.end(createResponse(responseObj))
    } else if(request.method === 'POST' && request.path === '/echo') {
      socket.end(createResponse({ body: request.body, contentType: 'text/html', status: '200 OK' }))
    } else {
      socket.end(createResponse({ body: 'Not Found', contentType: 'text/html', status: '404 Not Found' }));
    }
  });
});

module.exports = app;
