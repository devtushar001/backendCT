const http = require('http');

const server = http.createServer((req, res) => {
  res.end(`Hello Sever!`);
  console.log(`Server is running!!!`)
});

server.listen(3000);