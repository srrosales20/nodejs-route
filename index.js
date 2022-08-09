//rerouting 
var http = require("http"); 
http.createServer(function(req,res) {
  var path = req.url.toLowerCase(); //makes lowercase
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Home page'); //return homepage
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About page'); //returns abt page
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');  //returns nor found
      break;
    }
}).listen(process.env.PORT || 3000);




// var http = require("http");
// http.createServer(function(req,res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Aloha world');
// }).listen(process.env.PORT || 3000);
