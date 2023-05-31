const http = require('http');
const winston = require('winston');


const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs.log' })
  ]
});

const server = http.createServer((request, response) => {
  const { url } = request;

  switch (url) {
    case '/about':
      logger.info('About page requested');
      response.end('About page');
      break;
    case '/contact':
      logger.info('Contact page requested');
      response.end('Contact page');
      break;
    case '/products':
      logger.info('Products page requested');
      response.end('Products page');
      break;
    case '/subscribe':
      logger.info('Subscribe page requested');
      response.end('Subscribe page');
      break;
    default:
      logger.info('Home page requested');
      response.end('Home page');
  }
});



const port = 3000;
server.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});

