var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('Hellow');
}).listen(3000);
cosnole.log('Serveris running');


// Same Code can be written as 

var http = require('http');

var server = http.createServer();
server.on('request',function(req,res){
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('Hellow');
});

server.listen(3000);
console.log('Server is running');



