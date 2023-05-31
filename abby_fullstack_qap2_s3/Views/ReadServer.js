const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  const { url } = request;

  let filePath;

  switch (url) {
    case '/about':
      filePath = path.join(__dirname, 'views', 'about.html');
      break;
    case '/contact':
      filePath = path.join(__dirname, 'views', 'contact.html');
      break;
    case '/products':
      filePath = path.join(__dirname, 'views', 'products.html');
      break;
    case '/subscribe':
      filePath = path.join(__dirname, 'views', 'subscribe.html');
      break;
    default:
      filePath = path.join(__dirname, 'views', 'home.html');
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Internal Server Error');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
