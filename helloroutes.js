// helloroutes.js
const http = require('http');

const server = http.createServer((request, response) => {
  const url = request.url; // katsotaan mitä polkua selain pyytää

  if (url === '/homepage') {
    // jos mennään osoitteeseen http://localhost:8081/homepage
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<h1>HOMEPAGE</h1>');

  } else if (url === '/helloworld') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<h1>Hello world in HTML</h1>');

  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('404 - Page Not Found');
  }
});

server.listen(8081, () => {
  console.log('Server with routes is running at http://127.0.0.1:8081/');
});