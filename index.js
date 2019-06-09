const server = require('http');
const io = require('socket.io');
const fs = require('fs');

const varmon = require('./varmon');
const varnomServer = new varmon(server, io, fs);

varnomServer.listen(2000);