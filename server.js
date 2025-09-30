// server.js
const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(`
    <!doctype html>
    <html><head><meta charset="utf-8"><title>Taulukko</title></head>
    <body>
      <table border="1" style="border-collapse: collapse; width: 100%;">
        <tr><th>Name</th><th>Address</th><th>City</th></tr>
        <tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr>
        <tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr>
      </table>
    </body></html>
  `);
});

server.listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
