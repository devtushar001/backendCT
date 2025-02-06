const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    res.end("This is home page")
  }
  
  if (req.url === '/about') {
    res.end("This is about page")
  }
  
  if (req.url === '/profile') {
    res.end("This is profile page")
  }
  
});

server.listen(3000);