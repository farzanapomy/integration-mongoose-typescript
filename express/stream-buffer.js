const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req);

  if (req.url === '/readFile' && req.method === 'GET') {
    const readFiles = fs.createReadStream(
      'F:/Level 2/Mongo+typescript/express/text.txt'
    );
    readFiles.on('data', (buffer) => res.write(buffer));
    readFiles.on('end', () => {
        res.end('Hello from server end');
    });
    readFiles.on('error', (err) => res.write(err));
  }
});

server.listen(5000, () => {
  console.log('server listening on port', 5000);
});
