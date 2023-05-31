const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

response.on('finish', () => {
  const { statusCode } = response;
  console.log(`HTTP Status Code: ${statusCode}`);
});

response.on('error', (err) => {
  console.error('Error occurred:', err);
});

switch (url) {
    case '/about':
      myEmitter.emit('aboutRouteAccessed');
      console.log("About route accessed");
      response.write('This is the about page');
      response.end();
      break;
  }
  
  if (url !== '/') {
    myEmitter.emit('nonHomeRouteAccessed');
    console.log("Non-home route accessed");
    response.write('This is a non-home page');
    response.end();
  }
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      myEmitter.emit('fileReadError');
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Internal Server Error');
    } else {
      console.log('File successfully read');
      myEmitter.emit('fileReadSuccess');
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    }
  });
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      myEmitter.emit('fileNotAvailable');
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('File Not Found');
    } else {
      console.log('File successfully read');
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    }
  });
  