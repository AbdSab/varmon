

const http = require('http');
const fs = require('fs');
const varmonBase = require('./varmon');

const server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

const io = require('socket.io').listen(server);
const toto = [];
toto.push(10);
io.on('connection', (socket)=>{
    console.log("new" + socket.id);
    const varmon = new varmonBase(socket);
    varmon.attach('toto', toto);
    varmon.start();
});

server.listen(3030);