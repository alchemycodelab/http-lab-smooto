const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    console.log(data.toString())

    const request = parseRequest(data.toString());
    console.log(request)

    if(request.method === 'GET') {
      const responseObj = {method: request.method, path: request.path};

      switch(request.path) {
        case '/':
          responseObj.body = 'hi';
          // socket.end(response);
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
    }
    

    // socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
